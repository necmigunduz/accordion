import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toMonthName from "../data/toMonth";

const Card = ({ date, src, alt, onError, postMessage, socialLogo, status }) => {
  const d = new Date(date);
  const day = d.getDay();
  const month = d.getMonth();
  const monthName = toMonthName(month);
  const year = d.getFullYear(date);
  const hour = d.getUTCHours();
  const minute = d.getMinutes() === 0 ? "00" : d.getMinutes().toString();
  const index = postMessage.indexOf("http");
  const link = postMessage.slice(index, postMessage.length);
  const message = postMessage.slice(0, index);
  let type = ''  
  if(status === 0) type='bg-orange-400'
  if(status === 1) type='bg-blue-400'
  if(status === 2) type='bg-green-400'
  if(status === 3) type='bg-slate-400'
  if(status === 4) type='bg-red-400'
  return (
    <div className="flex border w-[18em] rounded-xl m-2">
      <div className={`w-[2.5em] ${type}`}>{socialLogo}</div>
      <div className="flex flex-col justify-between rounded-2xl w-[30em]">
        <div className="flex justify-between mx-4 mt-2">
          <div className="text-slate-600 text-sm">
            {day} {monthName} {year} - {hour}.{minute}
          </div>
          <ul className="flex">
            <li>
              <FontAwesomeIcon
                icon={solid("circle-xmark")}
                className="text-slate-200 px-1 cursor-pointer"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={solid("trash")}
                className="text-slate-200 px-1 cursor-pointer"
              />
            </li>
            <li>
              <FontAwesomeIcon
                icon={solid("ellipsis")}
                className="text-slate-200 px-1 border rounded-full cursor-pointer py-[0.3em] ml-1 text-xs"
              />
            </li>
          </ul>
        </div>
        <div className="mx-3 my-3">
          <p className="text-[0.68em]">
            {message}
            <span className="text-blue-500">{link}</span>
          </p>
        </div>
        <div>
          <img
            src={src}
            alt={alt}
            onError={onError}
            className="m-auto mb-1"
            width={250}
          />
        </div>
        <div className="flex justify-center my-[0.5em]">
          <ul className="flex text-slate-400 space-x-3 text-xs">
            <li>
              <FontAwesomeIcon icon={solid("thumbs-up")} /> <span>124</span>
            </li>
            <li>
              <FontAwesomeIcon icon={solid("retweet")} /> <span>63</span>
            </li>
            <li>
              <FontAwesomeIcon icon={solid("message")} /> <span>4</span>
            </li>
            <li>
              <FontAwesomeIcon icon={solid("eye")} /> <span>1426</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
