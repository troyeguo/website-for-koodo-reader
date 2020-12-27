import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import { i18n, Link, withTranslation } from "../i18n";
import HeaderOption from "./headerOption";
const Header = ({ t, router }) => {
  const routeName = router.pathname;
  const [collapse, setCollapse] = useState(true);
  return (
    <div className="container-fluid header-wrapper">
      <div className="container">
        <div className="row justify-content-between">
          <div className="my-2 ">
            <Link href="/">
              {routeName === "/" ? (
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
              {!collapse ? <headerOption /> : null}
              <div className=" shadow-nav">
                <HeaderOption />
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
                {routeName === "/" ? null : (
                  <li className="col-auto">
                    <Link href="/download">
                      <div
                        className={
                          "download-button row justify-content-center align-items-center"
                        }
                      >
                        <div>
                          <a>{t("下载")}</a>
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
          font-weight: 600;
          line-height: 24px;
          z-index: 20;
          height: 83px;
          position: absolute;
          top: 0px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.07);
        }
        .header-name {
          display: inline-block;
          font-size: 1.3rem;
          position: relative;
          bottom: 20px;
          left: 10px;
          font-weight: 600;
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
            top: 10px;
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
            background-color: ${routeName !== "/"
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
