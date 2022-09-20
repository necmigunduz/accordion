import Brands from "./brands";
import Cards from "./cards";
import LeftNav from "./leftNav";
import Logo from "./logo";
import TopNav from "./topNav";

const Home = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div>
          <Logo />
        </div>
        <div className="flex h-full">
          <Brands />
          <LeftNav />
        </div>
      </div>
      <div className="ml-8">
        <TopNav />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
