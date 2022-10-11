import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Newsletter from "../components/Newsletter";


export default function Example() {
  return (
    <div className="bg-white">
      
      <Navbar />

      <main className="overflow-hidden">

        {/* Contact section */}
        <section className="relative bg-white" aria-labelledby="contact-heading">
          <div className="absolute h-1/2 w-full bg-warm-gray-50" aria-hidden="true" />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">

              <div className="relative z-10 text-center ">
                <h1 className="text-4xl font-bold tracking-tight text-green-primary sm:text-5xl lg:text-6xl">
                  Contact Us
                </h1>
                <p className="mt-6 text-xl text-green-primary">
                  Have something to say to us? Feel free to send us a message.
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* Contact form */}
                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-warm-gray-900">Send us a message</h3>
                  <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label htmlFor="full-name" className="block text-sm font-medium text-warm-gray-900">
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="full-name"
                          id="full-name"
                          autoComplete="given-name"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-green-primary focus:ring-green-primary"
                        />
                      </div>
                    </div>
                    <div>
                     <label htmlFor="email" className="block text-sm font-medium text-warm-gray-900">
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-green-primary focus:ring-green-primary"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                          Message
                        </label>
                        <span id="message-max" className="text-sm text-warm-gray-500">
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-green-primary focus:ring-green-primary"
                          aria-describedby="message-max"
                          defaultValue={''}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-primary focus:ring-offset-2 sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                {/* Contact information */}
                <div className="relative overflow-hidden py-10 px-2">
                  <dl className="mt-20 space-y-6">
                    <dd className="flex space-x-3 text-base">
                      <div className="flex-shrink-0 self-start bg-green-primary rounded-md flex justify-center items-center p-4">
                        <MapPinIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                      </div>
                      <div>
                      <p className="text-green-primary font-normal text-lg">Address</p>
                      <p className="text-green-primary font-light">24, New Dawaki Road, Off Isa Kaita Road,</p>
                      <p className="text-green-primary font-light">Kaduna, Kaduna State. Nigeria</p>
                      </div>
                    </dd>

                    <dd className="flex space-x-3 text-base">
                      <div className="flex-shrink-0 self-start bg-green-primary rounded-md flex justify-center items-center p-4">
                        <PhoneIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                      </div>
                      <div>
                      <p className="text-green-primary font-normal text-lg">Call us</p>
                      <p className="text-green-primary font-light">(234) 81 444 55 025</p>
                      </div>
                    </dd>

                    <dd className="flex space-x-3 text-base">
                      <div className="flex-shrink-0 self-start bg-green-primary rounded-md flex justify-center items-center p-4">
                        <EnvelopeIcon className="h-6 w-6 flex-shrink-0 text-white" aria-hidden="true" />
                      </div>
                      <div>
                      <p className="text-green-primary font-normal text-lg">E-mail</p>
                      <p className="text-green-primary font-light">hello@tarkinonline.com</p>
                      </div>
                    </dd>
                  </dl>
                </div>


              </div>
            </div>
          </div>
        </section>
      </main>

      <Newsletter />
      <Footer />
    </div>
  )
}
