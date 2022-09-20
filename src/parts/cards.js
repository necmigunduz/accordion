import Card from "../components/card"
import Data from "../data/data.json"

const Cards = () => {
  const JuneData = Data.posts_by_date['2021-06-17']
  const JulyData = Data.posts_by_date['2021-07-01']
  const posts = [...JuneData, ...JulyData].sort()
  console.log(posts[0].account.image)
  return (
    <div className="m-8 grid grid-cols-3">
        {
          posts.map((post) => <Card date={post.published_at} />)
        }
    </div>
  )
}

export default Cards