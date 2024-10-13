import data from "./data.json";
import Link from "next/link";
import Logo from "./logo";
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Logo width={75} height={75} />
            <div className="mt-4">
              <h3 className="font-bold text-lg mb-4">{data.APP_NAME}</h3>
              <p className="text-sm"> {data.APP_DESCRIPTION}</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-sm mt-8 pt-4 border-t border-gray-200">
          &copy; {new Date().getFullYear()} {data.APP_NAME}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
