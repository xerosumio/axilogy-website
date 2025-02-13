import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Axilogy</h3>
            <p className="text-gray-400">Empowering businesses with innovative AI and IT solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#ai-services" className="text-gray-400 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/#software-development-services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/#it-consulting" className="text-gray-400 hover:text-white transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white transition-colors">
                  CUBYAI Product
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Axilogy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

