import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="section-container">
      <SectionHeader 
        title="Get In Touch" 
        subtitle="Let's build something amazing together"
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              <a 
                href="mailto:ankit.bcrec.23@gmail.com"
                className="card flex items-center hover:scale-105 transition-transform"
              >
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-white font-semibold">ankit.bcrec.23@gmail.com</div>
                </div>
              </a>

              <a 
                href="tel:+919674711110"
                className="card flex items-center hover:scale-105 transition-transform"
              >
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="text-white font-semibold">+91 9674711110</div>
                </div>
              </a>

              <div className="card flex items-center">
                <div className="p-3 bg-primary-500/10 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-white font-semibold">Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ankitchakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
              >
                <Github className="h-8 w-8 text-primary-400" />
              </a>
              <a
                href="https://linkedin.com/in/ankitchakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-center justify-center w-16 h-16 hover:scale-110 transition-transform"
              >
                <Linkedin className="h-8 w-8 text-primary-400" />
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-bold text-white mb-4">Availability</h3>
            <p className="text-slate-300 mb-2">
              Open to exciting opportunities in:
            </p>
            <ul className="space-y-2">
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Engineering Leadership Roles
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Billing Platform Architecture
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                AI/ML Engineering
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                SaaS Product Development
              </li>
              <li className="text-slate-300 flex items-start">
                <span className="text-primary-400 mr-2">▹</span>
                Consulting & Advisory
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <div className="card">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
