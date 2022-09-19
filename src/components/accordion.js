import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "./button";

const Accordion = ({ accordionName, btnList, icon }) => {
  const [isActive, setIsActive] = useState(true);
  const handleAccordion = () => {
    setIsActive(!isActive);
  };
  const titleClassName = "text-slate-200 font-bold hover:text-white m-1 pl-2";
  const bodyClassName =
    "text-center py-1 text-slate-100 text-xs text-left";
  return (
    <div className="flex flex-col bg-slate-900 w-[10em] my-1 mx-[0.3em] place-y-2">
      <div
        className="bg-slate-700 hover:bg-rose-800 p-1 flex justify-between ml-2"
        onClick={handleAccordion}
      >
        <FontAwesomeIcon icon={icon} className="my-auto text-slate-800" />
        <Button btnName={accordionName} className={titleClassName} />
        {btnList.length > 0 ? (
          isActive ? (
            <FontAwesomeIcon
              icon={solid("plus")}
              className="text-slate-200 text-[8px] my-auto"
            />
          ) : (
            <FontAwesomeIcon
              icon={solid("minus")}
              className="text-slate-200 text-[8px] my-auto"
            />
          )
        ) : null}
      </div>
      {isActive ? null : (
        <div className="flex flex-col">
          {btnList.map((btn) => (
            <div>
              <FontAwesomeIcon
                icon={solid("location-dot")}
                className="text-slate-200 text-[8px] mx-2 mb-[0.2em]"
              />
              <Button
                btnName={btn.name}
                className={bodyClassName}
                key={btn.id}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
