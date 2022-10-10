export default function FoodSupply() {
  return (
    <div className="h-screen bg-green-50 grid grid-cols-1 gap-4 md:flex px-10 pt-10 pb-20">
      <div className="flex-1 relative order-last md:order-first">
        <img src="/pyramid.png" className="md:w-[70%] sm:w-fit w-full"/>
        <img src="/farmer.png" className="absolute md:w-[65%] md:block hidden left-24 top-40  sm:w-fit w-full"/>
      </div>
      <div className="flex-1 self-center">
        <div>
          <h3 className="uppercase text-gray-primary text-lg font-semibold">what does tarkin do?</h3>
          <p className="text-green-primary my-5 text-2xl font-bold">Solving the global food supply and security problems</p>
          <p className="text-green-primary font-normal text-lg text-justify">
            It’s common knowledge that smallholder farmers who produce 30% of total food consumed globally are extremely vulnerable to climate change, which increases the risk in agriculture finance significantly and many financial institutions simply stay away from the sector. These farmers are not credit worthy because they have no collateral therefore the value chain is disconnected and fragmented - commodity prices are volatile, and farmers don't get paid well.
          </p>
        </div>
      </div>
    </div>
  )
}
