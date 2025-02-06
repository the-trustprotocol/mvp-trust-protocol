import { Github, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Trust Protocol</h3>
            <p className="text-sm">Building the future of onchain trust</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/trust-protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/trust_protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          © {new Date().getFullYear()} Trust Protocol. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

