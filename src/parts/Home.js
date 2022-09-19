import Brands from "./brands"
import LeftNav from "./leftNav"
import Logo from "./logo"

const Home = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Logo />
      </div>
      <div className="flex">
        <Brands />
        <LeftNav />
      </div> 
    </div>
  )
}

export default Home