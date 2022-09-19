import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Button from "./button";

const Accordion = ({ accordionName, btnList }) => {
  const [isActive, setIsActive] = useState(true);
  const handleAccordion = () => {
    setIsActive(!isActive);
  };
  const titleClassName =
    "text-slate-300 font-bold hover:text-slate-200 m-1 pl-2";
  const bodyClassName =
    "bg-slate-500 my-1 text-center py-1 text-slate-100 text-xs text-left hover:bg-slate-400";
  return (
    <div className="flex flex-col bg-slate-600 w-[10em] my-1 place-y-2">
      <div className="bg-slate-700 hover:bg-slate-600 p-1">
        {btnList.length > 0 ? (
          isActive ? (
            <FontAwesomeIcon icon={solid("plus")} className="text-slate-200 text-[8px] ml-1 mb-1" onClick={handleAccordion} />
          ) : (
            <FontAwesomeIcon icon={solid("minus")} className="text-slate-200 text-[8px] ml-1 mb-1" onClick={handleAccordion} />
          )
        ) : null}
        <Button
          onClick={handleAccordion}
          btnName={accordionName}
          className={titleClassName}
        />
      </div>
      {isActive ? null : (
        <div className="flex flex-col">
          {btnList.map((btn) => (
            <Button btnName={btn.name} className={bodyClassName} key={btn.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
