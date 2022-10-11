
export default function WeNeedAChange() {
  return (
    <div className="bg-white">
      <div className="flex flex-col border-b border-gray-200 lg:border-0">
        <div className="relative">
          <div aria-hidden="true" className="absolute hidden h-full w-1/2 lg:block" />
          <div className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
              <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                <div className="lg:pr-16">
                  <h1 className="text-3xl font-bold tracking-tight text-green-primary">
                    We need a change
                  </h1>
                  <ul>
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
            <img
              src="/farmer1.png"
              alt="A farmer carrying axe and water"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
