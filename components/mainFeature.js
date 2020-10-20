import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

const MainFeature = ({ t }) => {
  return (
    <section className="container my-5">
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
            <h2 className="h1">{t("强大笔记功能")}</h2>
            <p className="lead">
              {t(
                "简单易用的笔记系统，让你在学习时效率倍增，充分体验电子化学习的乐趣。当然，您还可以导出笔记，存在任何地方，方便日后查阅"
              )}
            </p>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/image1.svg"
              alt="Take notes while reading"
              style={{ width: "90%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around ">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
            <div>
              <h2 className="h1">{t("跨平台的阅读体验")}</h2>
              <p className="lead">
                {t(
                  "Koodo Reader 完美支持Windows，macOS，Linux 和 网页版，无论是任何类型的图书，都能完美展现，提供最佳阅读效果"
                )}
              </p>
            </div>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 feature-image  aos-init feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/image2.svg"
              alt="Highlight your favorite parts"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
            <h2 className="h1">{t("备份恢复功能")}</h2>
            <p className="lead">
              {t(
                "备份自己的图书、笔记、进度，以及所有你能想到的一切！永远不用担心数据丢失，只需打开应用，轻轻一点，继续享受阅读"
              )}
            </p>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 order-lg-1 aos-init  feature-image"
            data-aos="fade-up"
          >
            <img
              src="/images/image3.svg"
              alt="Take notes while reading"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container my-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 pl-lg-5 pl-xl-0">
            <div>
              <h2 className="h1">{t("多端同步功能")}</h2>
              <p className="lead">
                {t(
                  "Koodo Reader 率先在业界实现了主流平台的全面支持，让你无需再在各个软件间来回切换，真正实现了无拘无束，随时随地阅读体验。"
                )}
              </p>
            </div>
          </div>
          <div
            className="col-md-9 col-lg-6 col-xl-5 feature-image aos-init "
            data-aos="fade-up"
          >
            <img
              src="/images/image4.svg"
              alt="Sync data between multiple devices"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};
MainFeature.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
MainFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(MainFeature);
