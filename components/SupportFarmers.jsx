const people = [
  {
    name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

export default function Example() {
  return (
    <div className="mx-auto max-w-7xl py-12 text-center lg:py-24">
      <div className="space-y-8 sm:space-y-12">
        <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-xl">
          <h2 className="text-3xl text-indigo-900 tracking-tight sm:text-4xl">How We Support our Farmers</h2>
          <p className="text-xl text-gray-500">
            We provide them with the needed service neccesary for them to maximise the value of their commodities
          </p>
        </div>
        <ul
          role="list"
          className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-2 gap-y-2 lg:mx-auto lg:flex lg:justify-center lg:space-x-2"
        >
          <li className="border border-green-700 rounded-md px-4 py-8 lg:w-[277px] w-full h-fit lg:min-h-[230px]">
            <h2 className="text-xl tracking-wide text-left">
              <span className="text-indigo-900 mr-1">Use</span>
              <span className="text-gray-800">digital technology to improve market information for farmers so that they have more choices</span>
            </h2>
          </li>
          <li className="border border-green-700 rounded-md px-4 py-8 lg:w-[277px] w-full h-fit lg:min-h-[230px]">
            <h2 className="text-xl tracking-wide text-left">
              <span className="text-indigo-900 mr-1">Increase</span>
              <span className="text-green-700">ability of smallholder farmers to sell to larger markets that are naturally beyond their reach</span>
            </h2>
          </li>
        </ul>

        <ul
          className="grid grid-cols-1 sm:grid-cols-3 sm:gap-x-2 gap-y-2 lg:flex xl:justify-center lg:justify-center lg:mx-auto lg:space-x-2"
        >
          <li className="border border-green-700 rounded-md px-4 py-8 w-full lg:w-[277px] h-fit lg:min-h-[230px]">
            <h2 className="text-xl tracking-wide text-left">
              <span className="text-indigo-900 mr-1">Provide</span>
              <span className="text-green-700">convenient and secure ways for farmers to access credit by converting their commodities to tradable digital assets</span>
            </h2>
          </li>

          <li className="border border-green-700 rounded-md px-4 py-8 w-full lg:w-[277px] h-fit sm:min-h-[234px] lg:min-h-[230px]">
            <h2 className="text-xl tracking-wide text-left">
              <span className="text-indigo-900 mr-1">Build</span>
              <span className="text-green-700">integrated storage solutions to track provenance for supply chain optimization & grading</span>
            </h2>
          </li>

          <li className="border border-green-700 rounded-md px-4 py-8 w-full lg:w-[277px] h-fit sm:min-h-[234px] lg:min-h-[230px]">
            <h2 className="text-xl tracking-wide text-left">
              <span className="text-indigo-900 mr-1">Provide</span>
              <span className="text-green-700">technical services like grain analysis, microbiological tests, crop and soil health data analytics</span>
            </h2>
          </li>
        </ul>
        
      </div>
    </div>
  )
}
