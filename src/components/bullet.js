import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bullet = ({ bulletName, icon, color }) => {
  return (
    <div className="mx-2 mt-2 flex">
      <FontAwesomeIcon icon={icon} className={`text-[0.7em] my-auto mr-1 text-${color}-400`} />
      <h6 className="text-sm my-auto ml-1">{bulletName}</h6>
    </div>
  );
};

export default Bullet;
