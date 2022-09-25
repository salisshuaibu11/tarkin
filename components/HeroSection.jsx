import Image from "next/image"

export default function HeroSection() {
  return (
    <main className="bg-gradient-to-br from-gray-300 to-gray-200 mt-16 sm:mt-0 h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="mt-4 text-5xl tracking-tight text-indigo-900 sm:mt-5 sm:leading-none lg:mt-6">
               Supporting African <span className="text-green-600">Farmers</span> Build a Resilient Food Supply Chain
              </h1>
              <p className="mt-3 text-base text-green-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities.
              </p>
              <div className="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
                <button
                  type="button"
                  className="inline-flex items-center border border-indigo-600 px-8 py-2 text-base rounded-sm font-medium text-indigo-600 shadow-sm hover:text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="sm:max-w-md sm:mx-auto sm:rounded-lg sm:overflow-hidden">
              <Image width={100} height={100} layout='responsive' src="/heroLogo.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}