import React from "react";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";
import Header from "../components/header";
import Footer from "../components/footer";
const Support = ({ t }) => {
  return (
    <div>
      <Header />
      <section className="bg-dynamic pb-5">
        <div className="container mt-4">
          <div className="row mt-5 justify-content-center">
            <div className="col-md-9 col-lg-8 col-xl-7">
              <h1 className="page-title">{t("客户支持")}</h1>
              <p className="page-subtitle">
                {t("您可以通过以下方式与开发者取得联系")}
              </p>
            </div>
          </div>
          <div
            className="row mt-lg-5 justify-content-center aos-init"
            data-aos="fade-up"
          >
            <div>
              <div className="row mt-4 justify-content-start mr-0 ml-0">
                <div className="col-2 pr-0 row justify-content-center">
                  <svg className="icon form-icon" aria-hidden="true">
                    <use href={`#icon-zu59`}></use>
                  </svg>
                </div>
                <div className="col-10">
                  <div className=" feedback-title">{t("反馈")}</div>
                  <div className="feedback-subtitle">
                    {t(
                      "对于问题咨询，功能改进和 bug 反馈，请前往本项目在github上的issue区提交。"
                    )}
                  </div>
                  <a
                    href="https://github.com/troyeguo/koodo-reader/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="form-link mt-2">{t("点我前往")}</div>
                  </a>
                </div>
              </div>
              <div className="row  mt-4 justify-content-start  mr-0 ml-0">
                <div className="col-2 pr-0 row justify-content-center">
                  <svg className="icon form-icon" aria-hidden="true">
                    <use href={`#icon-zu60`}></use>
                  </svg>
                </div>
                <div className="col-10">
                  <div className="feedback-title">{t("邮箱")}</div>
                  <div className="feedback-subtitle">
                    {t("您也可以直接通过邮箱")}&nbsp; guo362429@gmail.com &nbsp;
                    {t("与开发者取得联系。")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .feedback-title {
          font-size: calc(1rem + 0.7vw);
          font-weight: 600;
          line-height: 43px;
          color: rgba(0, 0, 0, 1);
          opacity: 1;
        }
        .feedback-subtitle {
          font-size: 18px;
          line-height: 25px;
          color: rgba(0, 0, 0, 1);
          opacity: 0.55;
          font-weight: 500;
        }
        .form-link {
          font-size: 18px;
          font-weight: 500;
          line-height: 2;
          color: rgba(37, 104, 239, 1);
          opacity: 1;
        }
        .form-icon {
          font-size: 60px;
        }

        @media (max-width: 992px) {
          .feedback-subtitle,
          .form-link {
            font-size: 15px;
          }
          .form-icon {
            display: none;
          }
        }
      `}</style>
      <Footer />
    </div>
  );
};
Support.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Support.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Support);
