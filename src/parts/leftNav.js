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
      <Accordion accordionName={"Notifications"} btnList={btnListNotifications} />
      <Accordion accordionName={"Summary"} btnList={btnListSummary} />
      <Accordion accordionName={"Publish"} btnList={btnListPublish} />
      <Accordion accordionName={"Engage"} btnList={btnListEngange} />
      <Accordion accordionName={"Listen"} btnList={btnListListen} />
      <Accordion accordionName={"Report"} btnList={btnListReport} />
    </div>
  );
};

export default LeftNav;
