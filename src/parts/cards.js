import Card from "../components/card"
import Data from "../data/data.json"
import NoImg from "../assets/no-post-image.png"

const Cards = () => {
  const JuneData = Data.posts_by_date['2021-06-17']
  const JulyData = Data.posts_by_date['2021-07-01']
  const posts = [...JuneData, ...JulyData].sort()
  const handleError = (e) => {
    e.preventDefault()
    e.target.src = NoImg
  }
 
  return (
    <div className="m-8 grid grid-cols-3">
        {
          posts.map((post) => 
            <Card 
              date={post.published_at} 
              src={post.entry.image[0]} 
              alt={post.account.name} 
              onError={handleError}
              postMessage={post.entry.message}
              status={post.status}
            />
            )
        }
    </div>
  )
}

export default Cards