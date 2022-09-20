import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bullet = ({ bulletName, icon, textColor }) => {
  return (
    <div className="mx-2 mt-2 flex">
      <FontAwesomeIcon icon={icon} className={`text-[0.7em] my-auto mr-1 ${textColor}`} />
      <h6 className="text-sm my-auto ml-1">{bulletName}</h6>
    </div>
  );
};

export default Bullet;
