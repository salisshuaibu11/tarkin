const tarkinFeatures = [
  {
    id: 0,
    name: 'Use',
    description:
      'digital technology to improve market information for farmers so that they have more choices',
    icon: 'svgs/use.svg',
  },
  {
    id: 1,
    name: 'Increase',
    description:
      'ability of smallholder farmers to sell to larger markets that are naturally beyond their reach',
    icon: 'svgs/increase.svg',
  },
  {
    id: 2,
    name: 'Provide',
    description:
      'Provide  technical services like grain analysis, standardization and tracking',
    icon: 'svgs/provide.svg',
  },
  {
    id: 3,
    name: 'Build',
    description:
      'integrated storage solutions to track provenance for supply chain optimization & grading',
    icon: 'svgs/build.svg',
  },
]

export default function WhyTarkin() {
  return (
    <div className="overflow-hidden py-16 lg:py-24">
      <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={450}
              src="pular.png"
              alt=""
            />
          </div>
          
          <div className="relative">
            <div className="space-y-2">
              <h3 className="uppercase text-green-primary text-lg font-normal">why choose tarkin?</h3>
              <p className="text-green-primary font-bold text-xl">
                We provide the neccessary service to maximise the value of their commodities
              </p>
            </div>
            <dl className="mt-10 space-y-10">
              {tarkinFeatures.map((item) => (
                <div key={item.id} className="flex space-x-2">
                  <dt>
                    <img src={item.icon} className="w-10 h-10"/>
                  </dt>
                  <dd className="mt-2 text-base space-x-2 text-gray-500">
                    <span className="text-green-primary font-bold">{item.name}</span>
                    <span className="text-green-primary">{item.description}</span>
                    </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
