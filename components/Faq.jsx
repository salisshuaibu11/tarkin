import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Can I join Tarkin’s team?",
    answer:
      "Yes, you can. Kindly head to our careers page for open positions, or you can simply send us an email containing your CV and we would get back to you if there’s an available role that fits your qualification.",
  },
  {
    question: "Is Tarkin a Software only Company?",
    answer:
      "Yes, you can. Kindly head to our careers page for open positions, or you can simply send us an email containing your CV and we would get back to you if there’s an available role that fits your qualification.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Faqs() {
  return (
    <div className="bg-gray-50">
      <div className="py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div>
          <h2 className="space-y-6">
            <span className='block text-3xl font-semibold tracking-tight text-green-primary sm:text-4xl'>FAQs</span>
            <span className='block text-green-primary'>Need answers? Find them here...</span>
          </h2>
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-400">
                        <span className="font-medium text-green-primary">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-green-primary">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
        <div className="mt-10 max-w-sm">
          <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
            <a
              href="#"
              className="uppercase font-semibold bg-green-100 flex items-center justify-center w-52 rounded-sm text-white px-2 py-4 text-base shadow-sm hover:bg-green-400 sm:px-8"
            >
              <span>learn more</span>
              <ArrowRightIcon className="text-white w-8 h-5 font-bold" fill="white"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
