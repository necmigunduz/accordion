import { v4 } from 'uuid';
import Card from "../components/card";
import Data from "../data/data.json";
import NoImg from "../assets/no-post-image.png";
import toMonthName from "../data/toMonth";

const Cards = () => {
  const JuneData = Data.posts_by_date["2021-06-17"];
  const JulyData = Data.posts_by_date["2021-07-01"];
  const posts = [...JuneData, ...JulyData].sort();
  const handleError = (e) => {
    e.preventDefault();
    e.target.src = NoImg;
  };
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getUTCMonth()
  const day = date.getDay()
  const monthName = toMonthName(month)
  return (
    <div>
      <h6 className="m-8 text-slate-500">{day} {monthName} {year} </h6>
      <div className="m-8 grid grid-cols-3">
        {posts.map((post) => (
          <Card
            key={v4()}
            date={post.published_at}
            src={post.entry.image[0]}
            alt={post.account.name}
            onError={handleError}
            postMessage={post.entry.message}
            status={post.status}
            channel={post.account.channel}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
