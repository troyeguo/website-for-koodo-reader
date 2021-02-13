import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { Link, withTranslation } from "../i18n";
import HeaderOption from "./headerOption";
const Header = ({ t, router }) => {
  const [theme, setTheme] = useState("dark");
  const routeName = router.pathname;
  const [collapse, setCollapse] = useState(true);
  useEffect(() => {
    var scrollFunc = function () {
      let offsetHeight =
        document.body.scrollTop || document.documentElement.scrollTop;
      if (offsetHeight > 150) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    };
    setInterval((event) => {
      scrollFunc(event);
    }, 200);
  }, []);
  return (
    <div
      className={
        theme === "dark" && routeName === "/"
          ? "container-fluid header-wrapper froze"
          : "container-fluid header-wrapper scroll"
      }
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="my-2 ">
            <Link href="/">
              {theme === "dark" && routeName === "/" ? (
                <a>
                  <svg className="icon icon-black" aria-hidden="true">
                    <use href="#icon-zu49"></use>
                  </svg>
                  <span className="header-name" style={{ color: "white" }}>
                    Koodo Reader
                  </span>
                </a>
              ) : (
                <a>
                  <svg className="icon icon-black" aria-hidden="true">
                    <use href="#icon-zu48"></use>
                  </svg>

                  <span className="header-name">Koodo Reader</span>
                </a>
              )}
            </Link>
          </div>

          <div style={{ position: "relative" }}>
            <ul
              className={"row header-collapse mt-lg-4 mr-0"}
              onMouseLeave={() => {
                setCollapse(true);
              }}
            >
              {!collapse ? <HeaderOption theme={theme} /> : null}
              <div className=" shadow-nav">
                <HeaderOption theme={theme} />
              </div>
              <svg
                className="icon icon-more"
                aria-hidden="true"
                onClick={() => {
                  setCollapse(!collapse);
                }}
              >
                <use href="#icon-more"></use>
              </svg>

              <div
                className={"row ml-3"}
                style={{ position: "relative", bottom: 5 }}
              >
                {theme === "dark" && routeName === "/" ? null : (
                  <li className="col-auto">
                    <Link href="/download">
                      <div
                        className={
                          "download-button row justify-content-center align-items-center"
                        }
                      >
                        <div>
                          <a>{t("Download")}</a>
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .header-wrapper {
          opacity: 1;
          font-size: calc(0.9rem + 0.2vw);
          font-weight: 500;
          line-height: 24px;
          position: fixed;
          top: 0;
          z-index: 20;
          height: 83px;
        }
        .header-name {
          display: inline-block;
          font-size: 1.3rem;
          position: relative;
          bottom: 20px;
          left: 10px;
          font-weight: 500;
        }
        .icon-more {
          font-size: 0;
          cursor: pointer;
          margin-top: 20px;
        }
        .icon-black {
          font-size: 50px;
          margin: 10px;
        }
        .froze {
          color: white;
        }
        .scroll {
          color: black;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.07);
        }

        @media all and (max-width: 992px) {
          .header-wrapper {
            height: 70px;
            line-height: 10px;
            position: absolute;
          }
          .shadow-nav {
            display: none;
          }
          .download-button {
            display: none;
          }
          .icon-more {
            font-size: 30px;
            position: absolute;
            top: 15px;
            right: 10px;
            margin-top: 0px;
          }
          .icon-black {
            font-size: 50px;
            visibility: true;
            position: relative;
            bottom: 10px;
          }
          .header-name {
            display: none;
          }
          .header-collapse {
            background-color: ${theme === "light" || routeName !== "/"
              ? "rgba(250,250,250,1)"
              : "rgba(0, 0, 0, 1)"};
            text-align: center;
            line-height: 40px;
            width: 200px;
            border-radius: 10px;
            box-shadow: 0 0 8px rgba(75, 75, 75, 0.2);
            position: relative;
            top: 5px;
          }
        }
      `}</style>
    </div>
  );
};
Header.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Header.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation("common")(withRouter(Header));
