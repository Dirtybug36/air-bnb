// icons
import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
const SITE_MAP = [
  {
    title: "ABOUT",
    sitemap: [
      "How Airbnb works",
      "Newsroom",
      "Airbnb 2024",
      "Investors",
      "Airbnb Plus",
      "Airbnb Luxe",
      "Hotel Tonight",
      "Airbnb for Work",
      "Made possible by Hosts",
      "Careers",
      "Founders' Letter",
    ],
  },
  {
    title: "COMMUNITY",
    sitemap: [
      "Diversity & Belonging",
      "Against Discrimination",
      "Accessibility",
      "Airbnb Associates",
      "Frontline Stays",
      "Guest Referrals",
      "Gift cards",
      "Airbnb.org",
    ],
  },
  {
    title: "HOST",
    sitemap: [
      "Host your home",
      "Host an Online Experience",
      "Host an Experience",
      "Responsible hosting",
      "Resource Center",
      "Community Center",
    ],
  },
  {
    title: "SUPPORT",
    sitemap: [
      "Our COVID-19 Response",
      "Help Center",
      "Cancellation options",
      "Neighborhood Support",
      "Trust & Safety",
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-20">
      <div className="container mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-4  ml-12">
          {SITE_MAP.map(({ title, sitemap }, index) => (
            <div
              key={title}
              className={`${
                index !== 0 && "border-t border-gray-200 lg:border-none "
              } py-6 md:py-8`}
            >
              <span className="inline-block mb-4 text-sm font-medium">
                {title}
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-y-3 xl:gap-y-4">
                {sitemap.map((data) => (
                  <li
                    key={data}
                    className="text-sm text-gray-500 hover:text-gray-400 hover:underline"
                  >
                    <a href="/">{data}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-between py-5 text-sm text-gray-400 border-t border-gray-200 lg:py-6 lg:flex-row">
          <div className="flex flex-col items-center order-last lg:flex-row lg:order-none ml-12">
            <span className="mr-0 text-center lg:mr-4">
              © 2024 Airbnb, Inc.
            </span>
            <span className="mb-2 mr-0 lg:mr-8 lg:mb-0">
              | Clone by{" "}
              <a
                href="https://buddyportfolio.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-primary hover:underline "
              >
                bimarsha basyal
              </a>{" "}
              |
            </span>
            <ul className="flex space-x-6 list-disc">
              <li className="hover:underline">
                <a href="/">Privacy</a>
              </li>
              <li className="hover:underline">
                <a href="/">Terms</a>
              </li>
              <li className="hover:underline">
                <a href="/">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-4 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-12 lg:mb-0">
            <ul className="flex items-center space-x-4">
              <li>
                <a className="flex items-center " href="/">
                  <span className="underline">English (US)</span>
                </a>
              </li>
              <li>
                <a className="flex items-center" href="/">
                  <span className="mr-1">€</span>
                  <span className="underline">EURO</span>
                </a>
              </li>
            </ul>
            <ul className="flex space-x-3">
              <li className="flex items-center">
                <a href="/">
                  <p>
                    <IoLogoFacebook />
                  </p>
                </a>
              </li>
              <li className="flex items-center">
                <a href="/">
                  <p>
                    <FaInstagram />
                  </p>
                </a>
              </li>
              <li className="flex items-center">
                <a href="/">
                  <p>
                    <RiTwitterFill />
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
