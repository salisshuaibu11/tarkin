const solutions = [
  { id: 0, img: '/poverty.png' },
  { id: 1, img: '/hunger.png' },
  { id: 2, img: '/equality.png' },
  { id: 3, img: '/growth.png' },
  { id: 4, img: '/production.png' },
  { id: 5, img: '/climate.png' },
]

export default function Solutions() {
  return (
    <div className="flex justify-center my-20">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {solutions.map(({img, id}) => (
          <div className="col-span-1" key={id}>
            <img src={img} alt="" />
          </div>
        ))}
      </ul>
    </div>
  )
}