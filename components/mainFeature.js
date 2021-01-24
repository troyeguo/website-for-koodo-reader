import React from "react";
import PropTypes from "prop-types";
import { mainFeature } from "../configs/mainFeature";
import { i18n, withTranslation } from "../i18n";
import { isMobile } from "react-device-detect";
const MainFeature = ({ t }) => {
  const renderFeature = () => {
    return mainFeature.map((item) => {
      return (
        <div key={item.id}>
          <div className="container my-3">
            <div className="row align-items-center justify-content-around">
              <div className="ml-4 col-md-5 col-xl-5 order-lg-2">
                <h2 className="h1">{t(item.title)}</h2>
                <div
                  className="title-decor"
                  style={
                    i18n.language === "en"
                      ? isMobile
                        ? { width: item.mWidth }
                        : { width: item.width }
                      : {}
                  }
                ></div>
                <p className="lead">{t(item.subtitle)}</p>

                <div className="mt-3 justify-content-between align-items-center">
                  {item.icons.map((subitem, index) => {
                    return (
                      <svg
                        className="icon icon-feature"
                        aria-hidden="true"
                        key={index}
                      >
                        <use href={`#icon-${subitem}`}></use>
                      </svg>
                    );
                  })}
                </div>
              </div>
              <div
                className={`col-8 col-md-4 order-lg-${
                  item.id % 2 ? 1 : 3
                } feature-image mt-5 justify-content-center align-item-center`}
              >
                <img
                  src={`/images/image${item.id}.svg`}
                  alt={item.title}
                  style={{ width: "100%" }}
                />
              </div>
            </div>
          </div>
          <div className="divider"></div>
        </div>
      );
    });
  };
  return <section>{renderFeature()}</section>;
};
MainFeature.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
MainFeature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(MainFeature);
