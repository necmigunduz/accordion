import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Card = ({date, src, alt, onError}) => {
  const d = new Date(date)
  const day = d.getDay()
  const month = d.getMonth()
  const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(Number(monthNumber));
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }
  const monthName = toMonthName(month)
  const year = d.getFullYear(date)
  const hour = d.getUTCHours()
  const minute =d.getMinutes() === 0 ? '00' : d.getMinutes().toString()

  return (
    <div className="flex border w-[18em] h-[20em] rounded-xl m-2">
        <div className="rounded-2xl w-[3em] bg-slate-100">left-line</div>
        <div className="rounded-2xl w-[30em]">
          <div className="flex justify-between mx-4 mt-2">
            <div className="text-slate-600 text-sm">{day} {monthName} {year} - {hour}.{minute}</div>
            <ul className="flex">
              <li><FontAwesomeIcon icon={solid('circle-xmark')} className="text-slate-200 px-1 cursor-pointer" /></li>
              <li><FontAwesomeIcon icon={solid('trash')} className="text-slate-200 px-1 cursor-pointer" /></li>
              <li><FontAwesomeIcon icon={solid('ellipsis')} className="text-slate-200 px-1 border rounded-full cursor-pointer py-[0.3em] ml-1 text-xs" /></li>
            </ul>
          </div>
          <img src={src} alt={alt} onError={onError} />
          <div></div>
          <div></div>
        </div>
    </div>
  )
}

export default Card