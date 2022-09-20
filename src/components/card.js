const Card = () => {
  return (
    <div className="flex border w-[18em] h-[20em] rounded-xl m-2">
        <div className="rounded-2xl w-[3em] bg-slate-100">left-line</div>
        <div className="rounded-2xl w-[30em] bg-amber-100">right-box</div>
    </div>
  )
}

export default Card