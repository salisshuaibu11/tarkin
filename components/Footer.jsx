import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Logo from './Logo'

const navigation = {
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg {...props} viewBox="0 0 21 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0341 19.9999V19.999H20.0391V12.664C20.0391 9.07569 19.2666 6.31152 15.0716 6.31152C13.0549 6.31152 11.7016 7.41819 11.1491 8.46736H11.0907V6.64652H7.11322V19.999H11.2549V13.3874C11.2549 11.6465 11.5849 9.96319 13.7407 9.96319C15.8649 9.96319 15.8966 11.9499 15.8966 13.499V19.9999H20.0341Z" fill="currentColor"/>
          <path d="M0.369202 6.64771H4.51587V20.0002H0.369202V6.64771Z" />
          <path d="M2.44073 0C1.1149 0 0.0390625 1.07583 0.0390625 2.40167C0.0390625 3.7275 1.1149 4.82583 2.44073 4.82583C3.76656 4.82583 4.8424 3.7275 4.8424 2.40167C4.84156 1.07583 3.76573 0 2.44073 0V0Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Messenger',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 21 20" fill="currentColor" {...props}>
          <path d="M0.026001 9.25917C0.026001 12.1725 1.47933 14.7717 3.75184 16.4692V20L7.15684 18.1317C8.06517 18.3825 9.02767 18.5192 10.0252 18.5192C15.5477 18.5192 20.0252 14.3742 20.0252 9.26C20.026 4.14583 15.5485 0 10.026 0C4.5035 0 0.026001 4.145 0.026001 9.25917H0.026001ZM8.971 6.66583L11.5793 9.38167L16.4852 6.66583L11.0185 12.4675L8.47267 9.7525L3.5035 12.4683L8.971 6.66583Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 21 20" fill="currentColor" {...props}>
          <path d="M17.9579 5.9275C18.7713 5.35 19.4554 4.62917 20.0129 3.79917V3.79833C19.2688 4.12417 18.4771 4.34083 17.6504 4.44583C18.5004 3.93833 19.1496 3.14083 19.4546 2.18C18.6621 2.6525 17.7871 2.98583 16.8546 3.1725C16.1021 2.37083 15.0296 1.875 13.8596 1.875C11.5896 1.875 9.76211 3.7175 9.76211 5.97583C9.76211 6.30083 9.78961 6.61333 9.85711 6.91083C6.44877 6.74417 3.43211 5.11083 1.40544 2.62167C1.05211 3.23583 0.843773 3.93833 0.843773 4.69417C0.843773 6.11417 1.57461 7.3725 2.66544 8.10167C2.00627 8.08917 1.36044 7.8975 0.81294 7.59667V7.64167C0.81294 9.63417 2.23377 11.2892 4.09794 11.6708C3.76377 11.7625 3.40044 11.8058 3.02294 11.8058C2.76044 11.8058 2.49544 11.7908 2.24711 11.7358C2.77794 13.3592 4.28627 14.5533 6.07794 14.5925C4.68294 15.6833 2.91127 16.3408 0.993773 16.3408C0.65794 16.3408 0.335439 16.3258 0.0129395 16.285C1.82961 17.4558 3.98127 18.125 6.30294 18.125C13.5388 18.125 18.2546 12.0883 17.9579 5.9275Z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      name: 'f',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path d="M8.42987 14.0994C8.4832 14.0544 8.53737 14.0077 8.58737 13.9585C5.8032 16.6902 1.2632 15.4152 0.199037 11.5627V11.5569C-1.22846 6.3152 4.7907 2.33353 8.5857 6.0002C8.66487 6.08437 13.9074 11.6752 13.574 11.3194H13.589C14.3715 12.126 15.5032 12.0377 16.1765 11.3327C16.9007 10.576 16.9265 9.34103 16.2157 8.57187C15.0932 7.27937 12.889 8.2452 13.0999 10.161L11.8382 8.87603L10.3749 7.47687C10.6765 6.8777 11.0724 6.35353 11.5682 5.9002C11.5149 5.94603 11.4607 5.99353 11.4107 6.04103C14.2057 3.29937 18.7424 4.60437 19.799 8.4402V8.4452C21.2299 13.686 15.204 17.6677 11.4124 14.001C11.3349 13.9177 6.0957 8.29187 6.42737 8.64853L6.42404 8.63603C6.4107 8.63603 6.4107 8.62353 6.4107 8.62353C5.58904 7.77603 4.47487 7.90353 3.8232 8.5977C3.0982 9.35437 3.0732 10.5894 3.7857 11.3469C4.85904 12.6094 7.1107 11.6735 6.89904 9.71937C6.9807 9.80353 9.80654 12.7044 9.62654 12.5202C9.16904 13.4327 8.65737 13.8519 8.42987 14.0994Z" fill="currentColor"/>
        </svg>
      ),
    }
  ],
}

export default function Example() {
  return (
    <footer className="bg-green-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="pb-8 xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-4">
            <div className="cols-span-4">
              <Logo />
              <p className='text-xl mt-5 font-bold text-white'>Making the world’s food supply more inclusive</p>
            </div>
          </div>
          <div className="mt-12 xl:mt-0">
            <ul className='text-lg text-white font-bold space-y-6'>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>FAQs</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="hover:text-gray-400 text-white">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <ul className='flex items-center font-normal text-lg text-slate-300 space-x-3'>
            <li className='hover:text-white'>
              <Link href="/terms">Terms and Conditions</Link>
            </li>
            <li className='text-lg'>.</li>
            <li className='hover:text-white'>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
          <p className="mt-8 font-normal text-lg text-gray-400 md:mt-0">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
