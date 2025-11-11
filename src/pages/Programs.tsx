import React from 'react';
import { motion } from "framer-motion";
import { BookOpen, Heart, BarChart3, Users, Stethoscope, Database } from 'lucide-react';

export default function Programs() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "Comprehensive diabetes education programs for communities",
      features: [
        "Community health workshops",
        "Diabetes prevention seminars",
        "Nutritional guidance sessions",
        "Lifestyle modification programs",
        "Health literacy campaigns"
      ],
      color: "blue"
    },
    {
      icon: Heart,
      title: "Patient Support",
      description: "Direct support and care for individuals with diabetes",
      features: [
        "Free diabetes screening",
        "Glucometer distribution",
        "Test strip provision",
        "Medication support",
        "Peer support groups"
      ],
      color: "red"
    },
    {
      icon: BarChart3,
      title: "Outreach & Data",
      description: "Data-driven community outreach and health monitoring",
      features: [
        "Community health surveys",
        "Health data collection",
        "Impact measurement",
        "Mobile health clinics",
        "Telemedicine services"
      ],
      color: "green"
    }
  ];

  const activities = [
    {
      icon: Stethoscope,
      title: "Free Health Screenings",
      description: "Regular community screening events for early diabetes detection"
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "Educational sessions on diabetes prevention and management"
    },
    {
      icon: Heart,
      title: "Support Groups",
      description: "Peer support networks for individuals living with diabetes"
    },
    {
      icon: Database,
      title: "Health Data Analytics",
      description: "Using data to improve healthcare delivery and outcomes"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          icon: 'bg-blue-100 text-blue-600',
          border: 'border-blue-200',
          text: 'text-blue-600'
        };
      case 'red':
        return {
          bg: 'bg-red-50',
          icon: 'bg-red-100 text-red-600',
          border: 'border-red-200',
          text: 'text-red-600'
        };
      case 'green':
        return {
          bg: 'bg-green-50',
          icon: 'bg-green-100 text-green-600',
          border: 'border-green-200',
          text: 'text-green-600'
        };
      default:
        return {
          bg: 'bg-gray-50',
          icon: 'bg-gray-100 text-gray-600',
          border: 'border-gray-200',
          text: 'text-gray-600'
        };
    }
  };

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
            Our Programs
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We tackle diabetes care through three core pillars, each designed to address 
            specific challenges faced by rural communities in Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Three Pillars</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each pillar represents a crucial component of our comprehensive approach to diabetes care.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => {
              const colors = getColorClasses(pillar.color);
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${colors.bg} p-8 rounded-2xl border ${colors.border} hover:shadow-xl transition-all duration-300`}
                >
                  <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center mb-6`}>
                    <pillar.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{pillar.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className={`font-semibold ${colors.text} mb-3`}>Key Activities:</h4>
                    {pillar.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i * 0.2) + (idx * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-2 h-2 ${colors.icon.split(' ')[0]} rounded-full`}></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Activities */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Core Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our day-to-day activities that directly impact communities and individuals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, i) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex gap-6 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <activity.icon className="w-6 h-6 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-red-600 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Program Impact</h2>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              Through our integrated approach, we're creating sustainable change in diabetes care across Nigeria.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-red-100">People Educated</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-red-100">Test Strips Distributed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6"
            >
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-red-100">Communities Served</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Support Our Programs</h2>
          <p className="text-lg text-gray-600 mb-8">
            Your support helps us expand these vital programs to reach more communities in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="inline-flex items-center rounded-lg bg-red-600 px-8 py-3 text-white font-medium shadow hover:bg-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>
            <motion.button
              className="inline-flex items-center rounded-lg border border-gray-300 px-8 py-3 text-gray-700 font-medium hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}