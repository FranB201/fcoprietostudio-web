import React from "react";
import "../../styles/CardVertical.css";
import CheckIcon from "@mui/icons-material/Check";

export const CardVertical = ({ imageUrl, title, descriptionItems }) => {
  return (
    <div className="card-wrapper">
      <div className="div-image">
        <img className="img-thumbnail" src={imageUrl} alt={title} />
      </div>
      <div className="card">
        <div className="card-body content-Card">
          <h3 className="card-title-programas">{title}</h3>
          <ul className="description-list">
            {descriptionItems.map((item, index) => (
              <li key={index}>
                <CheckIcon
                  style={{ color: "white", marginRight: "10px", fontSize: 20 }}
                />
                {item}
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
