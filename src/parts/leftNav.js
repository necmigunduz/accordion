import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Accordion from "../components/accordion";


const LeftNav = () => {
  const btnListNotifications = []
  const btnListPublish = [
    {
      name: "Compose",
      id: 1
    },
    {
      name: "Feed",
      id: 2
    }
  ];
  const btnListSummary = []
  const btnListEngange = []
  const btnListListen = []
  const btnListReport = []
  return (
    <div className='bg-slate-800 flex flex-col place-content-start place-y-1'>
      <div className='mt-[4em]'></div>
      <Accordion accordionName={"Notifications"} btnList={btnListNotifications} icon={solid('bell')} />
      <Accordion accordionName={"Summary"} btnList={btnListSummary} icon={solid('align-justify')} />
      <Accordion accordionName={"Publish"} btnList={btnListPublish} icon={solid('right-to-bracket')}/>
      <Accordion accordionName={"Engage"} btnList={btnListEngange} icon={solid('hand-point-right')} />
      <Accordion accordionName={"Listen"} btnList={btnListListen} icon={solid('headphones')} />
      <Accordion accordionName={"Report"} btnList={btnListReport} icon={solid('square-poll-vertical')} />
    </div>
  );
};

export default LeftNav;
