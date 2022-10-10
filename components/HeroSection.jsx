import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <>
      <main>
          {/* Hero card */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="relative sm:overflow-hidden">
              <Navbar />
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="/hero.png"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-10 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-4xl font-bold tracking-tight space-y-1 sm:text-5xl lg:text-6xl">
                  <span className="block text-white">Helping Farmers</span>
                  <span className="block text-white">Build a Resilient</span>
                  <span className="block text-white">Food Supply Chain</span>
                </h1>
                <p className="mt-6 max-w-xl font-normal text-left text-lg text-white">
                  We are using technology to reduce post harvest loss encountered by farmers while improving access to high quality commodities.
                </p>
                <div className="mt-10 max-w-sm">
                  <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                    <a
                      href="#"
                      className="uppercase bg-green-secondary flex items-center justify-center w-52 rounded-sm text-white px-2 py-4 text-base font-normal shadow-sm hover:bg-green-400 sm:px-8"
                    >
                      <span>learn more</span>
                      <ArrowRightIcon className="text-white w-8 h-5 font-bold" fill="white"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </>
  )
}
