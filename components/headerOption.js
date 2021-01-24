import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";

const HeaderOption = ({ t, router, theme }) => {
  const routeName = router.pathname;
  useEffect(() => {
    if (localStorage.getItem("lng")) {
      i18n.changeLanguage(localStorage.getItem("lng"));
      return;
    }
    if (
      navigator.language === "zh-CN" ||
      navigator.language === "zh-SG" ||
      navigator.language === "zh-TW" ||
      navigator.language === "zh-HK"
    ) {
      i18n.changeLanguage("cn");
      localStorage.setItem("lng", "cn");
    } else {
      i18n.changeLanguage("en");
      localStorage.setItem("lng", "en");
    }
  }, []);
  return (
    <div>
      <div className="row ">
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
          onClick={() => {
            console.log(i18n.language, "i18n.language");
            i18n.changeLanguage(
              localStorage.getItem("lng") === "en" ? "cn" : "en"
            );
            localStorage.setItem(
              "lng",
              localStorage.getItem("lng") === "en" ? "cn" : "en"
            );
          }}
          className="col-lg-auto mt-2 pb-3"
        >
          <a
            href="#"
            className={theme === "dark" && routeName === "/" ? "froze" : ""}
          >
            <svg className="icon" aria-hidden="true">
              <use href="#icon-earth"></use>
            </svg>
            <span className="change-lang mx-2" style={{ fontWeight: 500 }}>
              {t("English")}
            </span>
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
