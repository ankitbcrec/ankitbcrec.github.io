import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Ankit Chakraborty</h3>
            <p className="text-slate-400 mb-4">
              Engineering Leader • Billing Platform Architect • AI & SaaS Builder
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/ankitchakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/ankitchakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-primary-400 transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400">
                <Mail className="h-5 w-5 mr-2 text-primary-400" />
                <a href="mailto:ankit.bcrec.23@gmail.com" className="hover:text-primary-400 transition-colors">
                  ankit.bcrec.23@gmail.com
                </a>
              </li>
              <li className="flex items-center text-slate-400">
                <Phone className="h-5 w-5 mr-2 text-primary-400" />
                <a href="tel:+919674711110" className="hover:text-primary-400 transition-colors">
                  +91 9674711110
                </a>
              </li>
              <li className="flex items-center text-slate-400">
                <MapPin className="h-5 w-5 mr-2 text-primary-400" />
                Bengaluru, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Ankit Chakraborty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
