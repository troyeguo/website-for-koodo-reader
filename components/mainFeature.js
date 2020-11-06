import React from "react";
import PropTypes from "prop-types";
import { mainFeature } from "../configs/mainFeature";
import { withTranslation } from "../i18n";

const MainFeature = ({ t }) => {
  const renderFeature = () => {
    return mainFeature.map((item) => {
      return (
        <div>
          <div className="container my-5">
            <div className="row align-items-center justify-content-around">
              <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
                <h2 className="h1">{t(item.title)}</h2>
                <p className="lead">{t(item.subtitle)}</p>
                <div className="mt-3 justify-content-between align-items-center">
                  {item.icons.map((subitem) => {
                    return (
                      <svg
                        className="icon"
                        aria-hidden="true"
                        style={{ fontSize: "55px", marginRight: "20px" }}
                      >
                        <use href={`#icon-${subitem}`}></use>
                      </svg>
                    );
                  })}
                </div>
              </div>
              <div
                className={`col-md-9 col-lg-6 col-xl-5 order-lg-${
                  item.id % 2 ? 1 : 3
                } feature-image`}
              >
                <img
                  src={`/images/image${item.id}.svg`}
                  alt={item.title}
                  style={{ width: "80%" }}
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
