import React from 'react';
import { motion } from "framer-motion";
import { Eye, Target, Users, Award } from 'lucide-react';

export default function About() {
  const leaders = [
    { name: 'Frank', title: 'Founder & Executive Director', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/93d272f2c_Frank.jpg' },
    { name: 'Chimdindu Eze', title: 'Treasurer (Finance & Audit)', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/a73c44201_Chimdindu.jpeg' },
    { name: 'Oluebube Okoli', title: 'Director, Health & Nutrition', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/646adc35d_Oluebube.jpg' },
    { name: 'Sylvia Uchechi', title: 'Director, Programs & Operations', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/ddb9e7c28_Sylvia.jpg' },
    { name: 'Anthony Fumen Yawa', title: 'Director, Research & Data Science', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/a061cce10_Anthonyfumen.jpg' },
    { name: 'Farouk Umar Adams', title: 'Director, Fundraising & Partnerships', img: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/dbc84caed_Farouk.jpg' },
  ];

  const objectives = [
    {
      icon: Eye,
      title: "Early Detection",
      description: "Provide accessible diabetes screening in rural communities where healthcare resources are limited."
    },
    {
      icon: Target,
      title: "Education & Awareness",
      description: "Educate communities about diabetes prevention, management, and healthy lifestyle choices."
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Build sustainable support networks for individuals living with diabetes in underserved areas."
    },
    {
      icon: Award,
      title: "Data-Driven Solutions",
      description: "Use technology and data analytics to improve healthcare delivery and track community health outcomes."
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
            About Rethink Initiative
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We are a non-profit organization committed to transforming diabetes care 
            in rural Nigeria through innovative technology, community engagement, 
            and sustainable healthcare solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, technology-driven diabetes care and education 
                to underserved communities in rural Nigeria, empowering individuals 
                to manage their health effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                A Nigeria where every individual, regardless of location or economic status, 
                has access to quality diabetes care, education, and the tools needed 
                for a healthy life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Compassion, Innovation, Accessibility, Community-driven solutions, 
                Data-informed decisions, and Sustainable impact in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Objectives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We focus on four key areas to create lasting impact in diabetes care across rural Nigeria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, i) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <objective.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{objective.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{objective.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Board of Directors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders driving our mission forward with passion, expertise, and unwavering commitment to improving diabetes care in Nigeria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={leader.img}
                    alt={`Portrait of ${leader.name}`}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-top border-4 border-red-100 group-hover:border-red-300 transition-colors"
                  />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                <p className="text-red-600 font-medium">{leader.title}</p>
              </motion.div>
            ))}
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
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg text-red-100 mb-8">
            Together, we can make diabetes care accessible to every Nigerian, 
            regardless of where they live or their economic circumstances.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-red-600 font-medium shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer With Us
            </motion.button>
            <motion.button
              className="inline-flex items-center rounded-lg border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Support Our Work
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}