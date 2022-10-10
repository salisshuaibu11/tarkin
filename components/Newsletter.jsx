export default function Newsletter() {
  return (
    <div className="bg-green-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:py-16 lg:px-8">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold tracking-tight text-green-primary" id="newsletter-headline">
            Stay updated with our weekly newsletter
          </h2>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="sm:flex sm:items-center">
              <div>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-sm border border-transparent px-5 py-3 placeholder-gray-500 focus:border-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 sm:max-w-xs"
                placeholder="Enter your email"
              />
              </div>
            <div className="mt-3 rounded-sm shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-green-100 px-5 py-3 text-base font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
