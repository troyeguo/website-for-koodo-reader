import React from "react";
import PropTypes from "prop-types";
import { moreFeature } from "../configs/moreFeature";
import { i18n, withTranslation } from "../i18n";

const MoreFeature = ({ t }) => {
  const renderFeature = () => {
    return moreFeature.map((item) => {
      return (
        <div
          className="col-6 col-md-6 col-lg-4 mb-4 mb-md-5 aos-init"
          data-aos="fade-up"
          data-aos-delay={item.id * 50}
          key={item.id}
        >
          <div className="mx-xl-4 more-icon">
            <svg className={"icon"} aria-hidden="true">
              <use href={`#icon-${item.icon}`}></use>
            </svg>
            <h5 className={"more-title"}>{t(`${item.title}`)}</h5>
            <p className={"more-subtitle"}>{t(`${item.subtitle}`)}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="container my-lg-5">
      <div className="more-question">{t("更多")}</div>
      <div className="row text-center">{renderFeature()}</div>
      <div className="row justify-content-center">
        <div
          className={
            "download-button row justify-content-center align-items-center mb-5"
          }
        >
          <div>
            <a
              href={
                i18n.language !== "en"
                  ? "https://github.com/troyeguo/koodo-reader#特色-"
                  : "https://github.com/troyeguo/koodo-reader/blob/master/README_en.md#feature-"
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("了解更多")}
              <svg className="icon ml-2" aria-hidden="true">
                <use href="#icon-qianjin"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <style global jsx>{`
        .more-icon {
          font-size: calc(2.2rem + 2vw);
          text-align: center;
        }
        .more-title {
          font-size: 22px;
          font-weight: 500;
          line-height: 33px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          margin: 10px 0px;
        }
        .more-subtitle {
          font-size: 15px;
          font-weight: 500;
          line-height: 18px;
          color: rgba(85, 90, 100, 1);
          opacity: 1;
        }
        .more-question {
          font-size: calc(1rem + 2.2vw);
          font-weight: bold;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
          text-align: center;
          margin: 20px 0px 80px;
        }
        @media (max-width: 992px) {
          .more-question {
            margin: 40px 0px;
          }
          .more-subtitle {
          }
        }
      `}</style>
    </section>
  );
};
MoreFeature.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
MoreFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(MoreFeature);
