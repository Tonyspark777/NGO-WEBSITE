import React from 'react';
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@rethinkinitiative.org',
      link: 'mailto:info@rethinkinitiative.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+234 803 123 4567',
      link: 'tel:+2348031234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Anambra State, Nigeria',
      link: '#'
    }
  ];

  const socialMedia = [
    {
      icon: Facebook,
      name: 'Facebook',
      handle: '@RethinkInitiative',
      link: 'https://facebook.com/rethinkinitiative',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@RethinkInit',
      link: 'https://twitter.com/rethinkinit',
      color: 'text-sky-500 hover:text-sky-600'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@rethink_initiative',
      link: 'https://instagram.com/rethink_initiative',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'Rethink Initiative',
      link: 'https://linkedin.com/company/rethink-initiative',
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      handle: '+234 803 123 4567',
      link: 'https://wa.me/2348031234567',
      color: 'text-green-600 hover:text-green-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear from you. Whether you want to partner with us, 
            support our mission, or learn more about our work, we're here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Contact Information</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Reach out to us through any of these channels. We typically respond within 24 hours.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                  <info.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{info.title}</h3>
                <p className="text-gray-600 font-medium">{info.details}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Follow Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay connected with us on social media for updates, stories, and ways to get involved.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialMedia.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-4 group"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gray-100 group-hover:bg-gray-200 transition-colors`}>
                  <social.icon className={`w-6 h-6 ${social.color} transition-colors`} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{social.name}</h3>
                  <p className="text-gray-600 text-sm">{social.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Office Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Monday - Friday</span>
                  <span className="text-gray-600">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                *Emergency health situations: Contact us anytime via WhatsApp
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Quick Links</h3>
              <div className="space-y-4">
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">Partnership Inquiries</h4>
                  <p className="text-gray-600 text-sm">Interested in partnering with us? Let's discuss collaboration opportunities.</p>
                </a>
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">Media & Press</h4>
                  <p className="text-gray-600 text-sm">Media inquiries and press kit requests.</p>
                </a>
                <a href="#" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <h4 className="font-semibold text-gray-900 mb-1">General Support</h4>
                  <p className="text-gray-600 text-sm">Questions about our programs or how to get involved.</p>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg text-red-100 mb-8">
            Join us in our mission to improve diabetes care in Nigeria. 
            Every action, big or small, creates positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-red-600 font-medium shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer Now
            </motion.button>
            <motion.button
              className="inline-flex items-center rounded-lg border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Make a Donation
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}