import React from "react"
import PropTypes from "prop-types"
import downloadOptions from "../configs/download"
import './downloadOption.css'
import { withTranslation } from "../i18n"
import { isMobile } from "react-device-detect"
const DownloadDemo = ({ t }) => {
  const handleClick = url => {
    if (isMobile) {
      alert(t("download-on-pc"))
      return
    }
    window.location.href = url
  }
  const renderDownload = () => {
    return downloadOptions.map(item => {
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
          <h1 className="download-title col-12 my-2">{item.title}</h1>
          <a
            onClick={() => {
              handleClick(item.url)
            }}
          >
            <div className="download-button row justify-content-center align-items-center col-9 m-4">
              {item.id === 4 ? t("preview") : t("download")}
            </div>
          </a>
        </div>
      )
    })
  }
  return (
    <div className="container">
      <div className="row justify-content-around">{renderDownload()}</div>
    </div>
  )
}
DownloadDemo.getInitialProps = async () => ({
  namespacesRequired: ["common"],
})
DownloadDemo.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation("common")(DownloadDemo)
