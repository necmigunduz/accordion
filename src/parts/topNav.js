import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Bullet from "../components/bullet";

const TopNav = () => {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex">
        <Bullet
          bulletName={"Published"}
          icon={solid("circle")}
          textColor={'text-slate-400'}
        />
        <Bullet
          bulletName={"Scheduled"}
          icon={solid("circle")}
          textColor={'text-green-400'}
        />
        <Bullet
          bulletName={"Need Approval"}
          icon={solid("circle")}
          textColor={'text-amber-400'}
        />
        <Bullet
          bulletName={"Errors"}
          icon={solid("circle")}
          textColor={'text-red-400'}
        />
        <Bullet
          bulletName={"Notes"}
          icon={solid("circle")}
          textColor={'text-blue-400'}
        />
      </div>

      <img
        src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
        alt="profile-img"
        width="50"
        height="50"
        className="border rounded-3xl ml-[28em]"
      />
    </div>
  );
};

export default TopNav;
