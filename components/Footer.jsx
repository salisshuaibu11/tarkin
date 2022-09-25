import Link from "next/link"
import Newsletter from "./Newsletter"

const navigation = {
  tarkin: [
    { name: 'For for now, food for the', href: '#' },
    { name: 'Future', href: '#' }
  ],
  resources: [
    { name: 'Careers', href: '#' },
    { name: 'Trends', href: '#' },
    { name: "Blog", href: '#' }
  ],
  social: [
    {
      name: 'LinkendIn',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
          <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.9951 20V19.9991H20.0001V12.6641C20.0001 9.07581 19.2276 6.31165 15.0326 6.31165C13.0159 6.31165 11.6626 7.41831 11.1101 8.46748H11.0517V6.64665H7.07422V19.9991H11.2159V13.3875C11.2159 11.6466 11.5459 9.96331 13.7017 9.96331C15.8259 9.96331 15.8576 11.95 15.8576 13.4991V20H19.9951Z M0.330078 6.64771H4.47675V20.0002H0.330078V6.64771Z M2.40167 0C1.07583 0 0 1.07583 0 2.40167C0 3.7275 1.07583 4.82583 2.40167 4.82583C3.7275 4.82583 4.80333 3.7275 4.80333 2.40167C4.8025 1.07583 3.72667 0 2.40167 0V0Z" />
        </svg>
      ),
    },
    {
      name: 'Messenger',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 21 20" fill="currentColor" {...props}>
          <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.986816 9.25917C0.986816 12.1725 2.44015 14.7717 4.71265 16.4692V20L8.11765 18.1317C9.02598 18.3825 9.98848 18.5192 10.986 18.5192C16.5085 18.5192 20.986 14.3742 20.986 9.26C20.9868 4.14583 16.5093 0 10.9868 0C5.46432 0 0.986816 4.145 0.986816 9.25917H0.986816ZM9.93182 6.66583L12.5402 9.38167L17.446 6.66583L11.9793 12.4675L9.43348 9.7525L4.46432 12.4683L9.93182 6.66583Z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 21 20" fill="currentColor" {...props}>
          <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.9189 5.9275C19.7322 5.35 20.4164 4.62917 20.9739 3.79917V3.79833C20.2297 4.12417 19.438 4.34083 18.6114 4.44583C19.4614 3.93833 20.1105 3.14083 20.4155 2.18C19.623 2.6525 18.748 2.98583 17.8155 3.1725C17.063 2.37083 15.9905 1.875 14.8205 1.875C12.5505 1.875 10.723 3.7175 10.723 5.97583C10.723 6.30083 10.7505 6.61333 10.818 6.91083C7.40971 6.74417 4.39304 5.11083 2.36638 2.62167C2.01304 3.23583 1.80471 3.93833 1.80471 4.69417C1.80471 6.11417 2.53554 7.3725 3.62638 8.10167C2.96721 8.08917 2.32138 7.8975 1.77388 7.59667V7.64167C1.77388 9.63417 3.19471 11.2892 5.05888 11.6708C4.72471 11.7625 4.36138 11.8058 3.98388 11.8058C3.72138 11.8058 3.45638 11.7908 3.20804 11.7358C3.73888 13.3592 5.24721 14.5533 7.03888 14.5925C5.64388 15.6833 3.87221 16.3408 1.95471 16.3408C1.61888 16.3408 1.29638 16.3258 0.973877 16.285C2.79054 17.4558 4.94221 18.125 7.26388 18.125C14.4997 18.125 19.2155 12.0883 18.9189 5.9275Z"/>
        </svg>
      ),
    },
    {
      name: 'Twoo',
      href: '#',
      icon: (props) => (
        <svg viewBox="0 0 21 20" fill="currentColor" {...props}>
          <path 
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.39154 14.0991C9.44487 14.0541 9.49904 14.0075 9.54904 13.9583C6.76487 16.69 2.22487 15.415 1.16071 11.5625V11.5566C-0.266793 6.31496 5.75237 2.33329 9.54737 5.99996C9.62654 6.08412 14.869 11.675 14.5357 11.3191H14.5507C15.3332 12.1258 16.4649 12.0375 17.1382 11.3325C17.8624 10.5758 17.8882 9.34079 17.1774 8.57162C16.0549 7.27912 13.8507 8.24496 14.0615 10.1608L12.7999 8.87579L11.3365 7.47662C11.6382 6.87746 12.034 6.35329 12.5299 5.89996C12.4765 5.94579 12.4224 5.99329 12.3724 6.04079C15.1674 3.29912 19.704 4.60412 20.7607 8.43996V8.44496C22.1915 13.6858 16.1657 17.6675 12.374 14.0008C12.2965 13.9175 7.05737 8.29162 7.38904 8.64829L7.38571 8.63579C7.37237 8.63579 7.37237 8.62329 7.37237 8.62329C6.55071 7.77579 5.43654 7.90329 4.78487 8.59746C4.05987 9.35412 4.03487 10.5891 4.74737 11.3466C5.82071 12.6091 8.07237 11.6733 7.86071 9.71912C7.94237 9.80329 10.7682 12.7041 10.5882 12.52C10.1307 13.4325 9.61904 13.8516 9.39154 14.0991Z"/>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-indigo-900 pt-10 px-2" aria-labelledby="footer-heading">
      <div className="max-w-4xl mx-auto">
        <Newsletter />
      </div>
      <div className="text-white mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium">Tarkin</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.tarkin.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center space-x-2 mt-2">
                  {navigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="hover:text-gray-300">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium">Resources</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base hover:text-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium">Contact Us</h3>
                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <h4 className="text-base hover:text-gray-300">
                      24, New Dawaki Road, 
                    </h4>
                  </li>
                  <li>
                    <h4 className="text-base hover:text-gray-300">
                      Off Isa Kaita Road, Kaduna.
                    </h4>
                  </li>
                </ul>

                <ul role="list" className="mt-4 space-y-1">
                  <li>
                    <h4 className="text-base hover:text-gray-300">
                      Email: ​hello@tarkin.co
                    </h4>
                  </li>
                  <li>
                    <h4 className="text-base hover:text-gray-300">
                      Phone: 0814 44 550 25
                    </h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 items-center md:order-2">
            <Link href="/terms">Terms and Conditions</Link>
            <span>.</span>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
          <p className="mt-8 text-base md:order-1 md:mt-0">
            &copy; 2022 Tarkin, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
