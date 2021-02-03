import React from "react";
import PropTypes from "prop-types";
import { shareOptions } from "../configs/share";
import { withTranslation } from "../i18n";

const Share = ({ t }) => {
  const renderShare = () => {
    const handleJump = (url) => {
      window.open(url);
    };
    return shareOptions.map((item) => {
      return (
        <span
          onClick={() => handleJump(item.url)}
          className="col-sm-12 col-lg-4 my-2 row justify-content-center"
          key={item.id}
        >
          <div
            className="row justify-content-center align-items-center"
            style={{
              backgroundColor: item.color,
              width: 116,
              height: 48,
              opacity: 1,
              borderRadius: 24,
              color: "white",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            <svg className={"icon m-1"} aria-hidden="true">
              <use href={`#icon-${item.icon}`}></use>
            </svg>

            {t(item.name)}
          </div>
        </span>
      );
    });
  };
  return (
    <section className="container mt-5">
      <div className="container my-5">
        <div className="row align-items-center justify-content-around text-center text-lg-left">
          <div className="col-md-9 col-lg-6 col-xl-5 mb-4 mb-md-5 mb-lg-0 order-lg-2 pl-lg-5 pl-xl-0">
            <h2 className="h1">{t("Share with the world")}</h2>
            <p className="lead">
              {t("Share this eBook reader and help us spread the word!")}
            </p>

            <div className="row justify-content-around my-4">
              {renderShare()}
            </div>
          </div>
          <div className="col-md-9 col-lg-6 col-xl-5 order-lg-1">
            <img
              src="/images/share.svg"
              alt="Share with the world"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  );
};
Share.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});
Share.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Share);
