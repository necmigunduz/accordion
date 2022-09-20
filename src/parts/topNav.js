import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import Bullet from "../components/bullet";

const TopNav = () => {
  return (
    <div className="flex justify-between">
      <div className="flex">
        <Bullet
          bulletName={"Published"}
          icon={solid("circle")}
          color={'slate'}
        />
        <Bullet
          bulletName={"Scheduled"}
          icon={solid("circle")}
          color={'green'}
        />
        <Bullet
          bulletName={"Need Approval"}
          icon={solid("circle")}
          color={'amber'}
        />
        <Bullet
          bulletName={"Errors"}
          icon={solid("circle")}
          color={'red'}
        />
        <Bullet
          bulletName={"Notes"}
          icon={solid("circle")}
          color={'blue'}
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
