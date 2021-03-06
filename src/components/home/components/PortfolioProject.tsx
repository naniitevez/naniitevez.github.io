import React from "react";

interface PortfolioProjectProps {
  containerId: string;
  itemId: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
}

const PortfolioProject: React.FC<PortfolioProjectProps> = ({
  containerId,
  itemId,
  imageSrc,
  alt,
  title,
  description,
}) => {
  return (
    <div
      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-add2783"
      data-id={containerId}
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          <div
            className="elementor-element elementor-element-a450c4f elementor-position-top elementor-vertical-align-top elementor-widget elementor-widget-image-box"
            data-id={itemId}
            data-element_type="widget"
            data-widget_type="image-box.default"
          >
            <div className="elementor-widget-container">
              <div className="elementor-image-box-wrapper">
                <figure className="elementor-image-box-img">
                  <img
                    width="365"
                    height="380"
                    src={imageSrc}
                    className="attachment-full size-full"
                    alt={alt}
                    loading="lazy"
                  />
                </figure>
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title">{title}</h3>
                  <p className="elementor-image-box-description">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProject;
