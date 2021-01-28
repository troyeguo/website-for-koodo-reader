import React from "react";
import PropTypes from "prop-types";
import downloadOptions from "../configs/download";
import { withTranslation } from "../i18n";
import { isMobile } from "react-device-detect";
const DownloadDemo = ({ t }) => {
  const handleClick = (url) => {
    if (isMobile) {
      alert(t("请在电脑上下载本应用"));
      return;
    }

    if (
      navigator.appVersion.indexOf("NT 6.1") > -1 ||
      navigator.appVersion.indexOf("NT 5.1") > -1 ||
      navigator.appVersion.indexOf("NT 6.0") > -1
    ) {
      alert(t("暂不支持您的系统"));
      return;
    }
    window.open(url);
  };
  const renderDownload = () => {
    return downloadOptions.map((item) => {
      return (
        <div
          className="download-item col-md-6 col-lg-3 mb-4 mb-md-5 aos-init row my-lg-5 justify-content-center ml-1"
          data-aos="fade-up"
          data-aos-delay={50 + item.id * 50}
          key={item.id}
        >
          <svg className={"icon download-icon col-12 mt-4"} aria-hidden="true">
            <use href={`#icon-${item.icon}`}></use>
          </svg>
          <h1 className="download-title col-12 my-2">{t(item.title)}</h1>
          <a
            onClick={() => {
              handleClick(item.url);
            }}
          >
            <div className="download-button row justify-content-center align-items-center col-9 m-4">
              {t("下载")}
            </div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <div className="row justify-content-around">{renderDownload()}</div>
      <div className="lanzou-download-title">国内蓝奏云下载地址</div>
      <div className="lanzou-download-container">
        <a
          href="https://wwa.lanzous.com/b0c90cieb"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="lanzou-download-option">
            https://wwa.lanzous.com/b0c90cieb
          </span>
        </a>

        <span style={{ width: "50px", lineHeight: "30px" }}>密码:</span>
        <span className="lanzou-download-option">1234</span>
      </div>
      <style global jsx>{`
        .download-icon {
          font-size: calc(1rem + 4vw);
        }
        .download-title {
          width: 84px;
          height: 27px;
          font-size: 20px;
          font-weight: 500;
          line-height: 27px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
        }
        .lanzou-download-container {
          text-align: center;
          margin-top: 20px;
        }
        .download-item {
          transition: 0.2s !important;
        }
        .download-item:hover {
          box-shadow: 0 0 15px rgba(75, 75, 75, 0.2);
          border-radius: 10px;
        }
        .lanzou-download-title {
          text-align: center;
          font-size: 20px;
          font-weight: 500;
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
