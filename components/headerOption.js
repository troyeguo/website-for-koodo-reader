import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";

const HeaderOption = ({ t, router, theme }) => {
  const routeName = router.pathname;
  return (
    <div>
      <div className="row ">
        <li className="col-lg-auto mt-2">
          <Link href="/">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("首页")}
            </a>
          </Link>
        </li>
        <li className="col-lg-auto mt-2">
          <Link href="/faq">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("常见问题")}
            </a>
          </Link>
        </li>
        <li className="col-lg-auto mt-2">
          <Link href="/log">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("更新日志")}
            </a>
          </Link>
        </li>
        <li className="col-lg-auto mt-2">
          <Link href="/support">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("客户支持")}
            </a>
          </Link>
        </li>
        <li className="col-lg-auto mt-2">
          <a
            href="https://github.com/troyeguo/koodo-reader"
            target="_blank"
            rel="noopener noreferrer"
            className={theme === "dark" && routeName === "/" ? "froze" : ""}
          >
            <svg className="icon" aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
          </a>
        </li>
        <li
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "cn" : "en")
          }
          className="col-lg-auto mt-2 pb-3"
        >
          <a
            href="#"
            className={theme === "dark" && routeName === "/" ? "froze" : ""}
          >
            <svg className="icon" aria-hidden="true">
              <use href="#icon-earth"></use>
            </svg>
            <span className="change-lang mx-2">{t("English")}</span>
          </a>
        </li>
      </div>

      <style jsx>{`
        .froze {
          color: white;
        }
      `}</style>
    </div>
  );
};
HeaderOption.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
HeaderOption.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("common")(withRouter(HeaderOption));
