import React, { useEffect } from "react";
import PropTypes from "prop-types";
import downloadOptions from "../configs/download";
import { withTranslation } from "../i18n";
import { isMobile } from "react-device-detect";
const DownloadDemo = ({ t }) => {
  const handleClick = (url) => {
    if (isMobile) {
      alert(t("Please download this app on PC"));
      return;
    }
    window.open(url);
  };
  useEffect(() => {
    if (navigator.language !== "zh-CN") {
      document
        .getElementsByClassName("lanzou-download-option")[0]
        .setAttribute("style", "display:none");
    }
  }, []);
  const renderDownload = () => {
    return downloadOptions.map((item) => {
      return (
        <div
          className="col-md-6 col-lg-4 mb-2 mb-md-3 aos-init row my-lg-5ml-1"
          data-aos="fade-up"
          data-aos-delay={50 + item.id * 50}
          key={item.id}
        >
          <div className="download-item  justify-content-center">
            <svg
              className={"icon download-icon col-12 mt-4"}
              aria-hidden="true"
            >
              <use href={`#icon-${item.icon}`}></use>
            </svg>
            <h1 className="download-title col-12 my-2">{t(item.title)}</h1>
            {item.option.map((subitem, index) => (
              <a
                onClick={() => {
                  handleClick(item.url[index]);
                }}
                className="download-link"
              >
                {subitem}
              </a>
            ))}
          </div>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="lanzou-download-option">
        <div className="lanzou-download-title">
          {t("Download option for Chinese users")}
        </div>
        <div className="lanzou-download-container">
          <a
            href="https://wwa.lanzous.com/b0c90cieb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="lanzou-download-option">
              https://wwa.lanzoui.com/b0c90cieb
            </span>
          </a>

          <span style={{ width: "50px", lineHeight: "30px" }}>
            {t("Password")}:
          </span>
          <span className="lanzou-download-option">1234</span>
        </div>
      </div>

      <div className="row justify-content-around">{renderDownload()}</div>
      <style global jsx>{`
        .download-icon {
          font-size: calc(1rem + 4vw);
          width: 100%;
        }
        .download-title {
          width: 100%;
          height: 27px;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
        }
        .download-link {
          display: block;
          line-height: 30px;
          font-size: 17px;
          color: #4299e1;
          cursor: pointer;
        }
        .download-link:hover {
          text-decoration: underline;
        }
        .lanzou-download-container {
          text-align: center;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .download-item {
          transition: 0.2s;
          text-align: center;
        }
        .lanzou-download-title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: rgba(75, 75, 75, 1);
        }
        .lanzou-download-option {
          color: #4299e1;
          margin-right: 20px;
          line-height: 30px;
        }
      `}</style>
    </div>
  );
};
DownloadDemo.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
DownloadDemo.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(DownloadDemo);
