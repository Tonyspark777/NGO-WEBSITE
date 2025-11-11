import React from 'react';
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';

interface EventsProps {
  onNavigate: (page: string, eventId?: string) => void;
}

export default function Events({ onNavigate }: EventsProps) {
  const events = [
    {
      id: 'world-diabetes-day-2024',
      title: 'World Diabetes Day 2024',
      date: 'November 14, 2024',
      location: 'Anambra State, Nigeria',
      status: 'completed',
      participants: '200+',
      description: 'A comprehensive diabetes awareness and screening event held across multiple communities in Anambra State.',
      highlights: [
        'Free diabetes screening for 200+ individuals',
        'Educational workshops on diabetes prevention',
        'Distribution of glucometers and test strips',
        'Community health volunteer training'
      ],
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/fed3fdc97_pcs1.jpg'
    },
    {
      id: 'world-diabetes-day-2025',
      title: 'World Diabetes Day 2025',
      date: 'November 14, 2025',
      location: 'Multiple States, Nigeria',
      status: 'upcoming',
      participants: 'Expected 500+',
      description: 'Join us for our biggest diabetes awareness campaign yet, expanding to multiple states across Nigeria.',
      highlights: [
        'Multi-state screening campaign',
        'Digital health technology showcase',
        'Community partnership launches',
        'Youth diabetes education program'
      ],
      image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Community Health Workshop',
      date: 'March 15, 2025',
      location: 'Lagos State',
      type: 'Workshop'
    },
    {
      title: 'Mobile Screening Unit Launch',
      date: 'April 22, 2025',
      location: 'Kano State',
      type: 'Launch Event'
    },
    {
      title: 'Healthcare Workers Training',
      date: 'May 10, 2025',
      location: 'Abuja',
      type: 'Training'
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
            Our Events
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us in our mission to raise diabetes awareness and provide vital 
            healthcare services to communities across Nigeria.
          </motion.p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Featured Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our signature events that make the biggest impact in diabetes awareness and care.
            </p>
          </motion.div>

          <div className="space-y-12">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{event.title}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-gray-600">
                        <Calendar size={18} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <MapPin size={18} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Users size={18} />
                        <span>{event.participants} participants</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      onClick={() => onNavigate('event-detail', event.id)}
                      className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {event.status === 'completed' ? 'View Report' : 'Learn More'}
                      <ArrowRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Upcoming Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these upcoming events and join us in making a difference.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900">{event.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>
                
                <motion.button
                  className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Notified
                </motion.button>
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
          <h2 className="text-3xl font-bold mb-4">Join Our Next Event</h2>
          <p className="text-lg text-red-100 mb-8">
            Be part of our mission to improve diabetes care in Nigeria. 
            Your participation makes a real difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('volunteer')}
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-red-600 font-medium shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer at Events
            </motion.button>
            <motion.button
              onClick={() => onNavigate('support')}
              className="inline-flex items-center rounded-lg border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sponsor an Event
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}