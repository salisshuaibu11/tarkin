const TRAITS = [
  {
    id: 0,
    classes: "col-start-5 col-span-2 row-start-2 lg:-mt-[16rem] row-span-1 px-8 pl-0 lg:px-0",
    img: '/trace1.png'
  },
  {
    id: 1,
    classes: "col-start-8 col-span-2 row-start-4 row-span-1 px-8 pl-0 lg:px-0",
    img: '/trace2.png'
  },
  {
    id: 2,
    classes: "col-start-8 col-span-3 row-start-2 row-span-1 pr-8 lg:px-0",
    img: '/trace3.png'
  },
  {
    id: 3,
    classes: "col-start-3 col-span-1 row-start-4 row-span-1 lg:-ml-28 px-8 pl-0 lg:px-0",
    img: '/trace4.png'
  },
  {
    id: 4,
    classes: "col-start-2 col-span-2 row-start-2 row-span-1 px-8 pl-0 lg:px-0",
    img: '/trace5.png'
  }
]

export default function Model() {
  return (
    <div className="relative bg-gradient-to-br from-gray-300 to-green-100 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto mb-10 max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-indigo-900 sm:text-4xl">Our 5-Star Model</h2>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <img 
          className="block mb-9 max-w-[95%] sm:max-w-[80%]"
          alt="Trace"
          src="/trace0.png"
        />
        <div className="flex w-[100vw] md:w-full col-span-1 items-center pb-10 lg:pb-0 lg:overflow-y-visible lg:overflow-x-visible lg:grid lg:grid-cols-10 lg:grid-rows-2 lg:place-items-center lg:place-content-center lg:gap-2">
          {TRAITS.map(({id, classes, img}) => (
            <div className={`select-none text-center relative ${classes}`} key={id}>
              <img
                src={img}
                alt=""
              />
            </div>
          ))}
          <img 
          className="hidden lg:block col-start-4 col-span-4 row-start-3 row-end-4"
          alt="Trace"
          src="/trace.png"
        />
        </div>
      </div>
    </div>
  )
}