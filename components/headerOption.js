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
        <li className="col-lg-auto mt-2 log">
          <Link href="/log">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("Changelog")}
            </a>
          </Link>
          <div className="header-underline2"></div>
        </li>
        <li className="col-lg-auto mt-2 support">
          <Link href="/support">
            <a className={theme === "dark" && routeName === "/" ? "froze" : ""}>
              {t("Support")}
            </a>
          </Link>
          <div className="header-underline3"></div>
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
            <span className="change-lang mx-2" style={{ fontWeight: 500 }}>
              {t("Github")}
            </span>
          </a>
        </li>
        <li
          onClick={() => {
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
        .header-underline1,
        .header-underline2,
        .header-underline3 {
          position: absolute;
          bottom: 10px;
          left: 0px;
          width: 80%;
          margin-left: 10%;
          height: 2px;
          background-color: rgba(255, 226, 183, 1);
          transform-origin: center;
          transition: 0.2s;
          transform: scaleX(0);
        }
        .faq:hover .header-underline1 {
          transform: scaleX(1);
        }
        .log:hover .header-underline2 {
          transform: scaleX(1);
        }
        .support:hover .header-underline3 {
          transform: scaleX(1);
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
