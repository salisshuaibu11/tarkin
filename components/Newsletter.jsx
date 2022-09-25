export default function Newsletter() {
  return (
    <div className="bg-gray-100 rounded-xl">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:justify-between lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl" id="newsletter-headline">
            Stay updated with our weekly newsletter
          </h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <h3 className="mb-3 text-indigo-700 text-2xl">Signup for Newsletter</h3>
          <form className="space-y-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                placeholder="Enter your Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                placeholder="Enter your email"
              />
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-500 px-5 py-3 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
