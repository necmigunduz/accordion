import Brand from "../components/brand"

const Brands = () => {
    const brands = [
        {
            name: 'A',
            id: 1
        },
        {
            name: 'B',
            id: 2
        },
        {
            name: 'C',
            id: 3
        }
    ]
  return (
    <div className="bg-slate-900 w-[3.1em] h-screen py-[8em]">
        {
            brands.map((brand) => <Brand brandName={brand.name} key={brand.id} />)
        }
    </div>
  )
}

export default Brands