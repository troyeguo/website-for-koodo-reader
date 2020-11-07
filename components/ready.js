import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

const Ready = ({ t }) => (
  <section className="container-fluid question-wrapper">
    <div className="container">
      <div className="ready-img-container">
        <img src="/images/ready.png" alt="" className="ready-img" />
      </div>
      <div className="row section-title justify-content-center text-center">
        <div className="col-md-12 col-lg-10 col-xl-9">
          <h3 className="question aos-init" data-aos="fade-up">
            {t("还在等什么？")}
          </h3>
          <div className="ads aos-init" data-aos="fade-up" data-aos-delay="50">
            {t("快使用 Koodo Reader 管理你的电子书吧！")}
          </div>
        </div>
        <div
          className="container aos-init"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="row justify-content-center mt-3 ready-button">
            <Link href="/download">
              <div className="row download-button m-2 justify-content-center align-items-center">
                <div>{t("下载")}</div>
              </div>
            </Link>

            <div className="row preview-button m-2 justify-content-center align-items-center">
              <a
                href="https://reader.960960.xyz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div>
                  {t("网页版")}
                  <svg className="icon ml-2" aria-hidden="true">
                    <use href="#icon-qianjin"></use>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .question-wrapper {
        height: 424px;
        background: rgba(255, 226, 183, 1);
        opacity: 1;
        position: relative;
      }
      .question {
        font-size: calc(1rem + 2vw);
        font-weight: bold;
        line-height: 80px;
        color: rgba(0, 0, 0, 1);
        opacity: 0.83;
        text-align: center;
        margin-top: 40px;
      }
      .ads {
        font-size: 20px;
        font-weight: 500;
        color: rgba(85, 90, 100, 1);
        opacity: 1;
        text-align: center;
        line-height: 1.5;
      }
      .download-button {
        width: 175px;
        height: 46px;
        background: rgba(43, 38, 31, 1);
        opacity: 1;
        border-radius: 23px;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: white;
        opacity: 1;
        z-index: 10;
      }
      .ready-button {
        width: 200px;
        margin-left: calc(50% - 110px);
        z-index: 10;
      }
      .preview-button {
        width: 175px;
        height: 46px;
        background: rgba(255, 255, 255, 1);
        opacity: 1;
        border-radius: 23px;
        font-size: 18px;
        font-weight: 600;
        line-height: 24px;
        color: rgba(0, 0, 0, 1);
        opacity: 1;
        z-index: 10;
      }
      .ready-img-container {
        position: absolute;
        bottom: 0px;
        left: 0px;
        width: 100%;
      }
      .ready-img {
        width: 100%;
      }
      @media (max-width: 992px) {
        .ads {
          font-size: 17px;
        }
      }
    `}</style>
  </section>
);
Ready.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Ready.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Ready);
