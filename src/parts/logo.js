import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="bg-slate-600 pl-[3.3em] py-4  w-[13.7em]">
      <Link to='/'>
        <strong className="text-slate-300">Sociality</strong>
        <span className="text-slate-400">.io</span>
      </Link>
    </div>
  );
};

export default Logo;
