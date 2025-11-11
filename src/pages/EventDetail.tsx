import React from 'react';
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, ArrowLeft, Download, ExternalLink } from 'lucide-react';

interface EventDetailProps {
  eventId: string;
  onNavigate: (page: string) => void;
}

export default function EventDetail({ eventId, onNavigate }: EventDetailProps) {
  // This would typically come from an API or database
  const eventData = {
    'world-diabetes-day-2024': {
      title: 'World Diabetes Day 2024',
      date: 'November 14, 2024',
      location: 'Anambra State, Nigeria',
      status: 'completed',
      participants: '200+',
      description: 'Our most successful diabetes awareness and screening event to date, reaching over 200 individuals across multiple communities in Anambra State.',
      heroImage: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/fed3fdc97_pcs1.jpg',
      gallery: [
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/5d3e9fb6b_pcs2.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/9a3f6f77e_pcs3.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/6f0b3f243_pcs4.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/9cb7a612f_pcs5.jpg',
        'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/15a298d61_pcs6.jpg'
      ],
      achievements: [
        { metric: '215', label: 'People Screened' },
        { metric: '45', label: 'High-Risk Cases Identified' },
        { metric: '120', label: 'Glucometers Distributed' },
        { metric: '500+', label: 'Test Strips Provided' },
        { metric: '8', label: 'Communities Reached' },
        { metric: '25', label: 'Volunteers Participated' }
      ],
      activities: [
        'Free blood glucose screening for all participants',
        'Educational workshops on diabetes prevention and management',
        'Distribution of glucometers and test strips to those in need',
        'One-on-one consultations with healthcare professionals',
        'Community health volunteer training sessions',
        'Nutritional counseling and meal planning guidance'
      ],
      impact: 'This event marked a significant milestone in our mission to combat diabetes in rural Nigeria. We identified 45 individuals with high blood glucose levels who were previously unaware of their condition, potentially preventing serious complications through early intervention.',
      testimonials: [
        {
          name: 'Mrs. Adaeze Okafor',
          location: 'Awka Community',
          quote: 'I never knew I had diabetes until this screening. The team not only tested me for free but also gave me a glucometer and taught me how to use it. This has changed my life.'
        },
        {
          name: 'Mr. Chukwudi Eze',
          location: 'Nnewi Community',
          quote: 'The education session opened my eyes to how diet affects blood sugar. My whole family now eats healthier because of what we learned.'
        }
      ]
    },
    'world-diabetes-day-2025': {
      title: 'World Diabetes Day 2025',
      date: 'November 14, 2025',
      location: 'Multiple States, Nigeria',
      status: 'upcoming',
      participants: 'Expected 500+',
      description: 'Join us for our biggest diabetes awareness campaign yet! We\'re expanding to multiple states across Nigeria to reach even more communities in need.',
      heroImage: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800',
      goals: [
        'Screen 500+ individuals across multiple states',
        'Launch our mobile health technology platform',
        'Establish partnerships with 10 new healthcare facilities',
        'Train 50 community health volunteers',
        'Distribute 200 glucometers and 2000 test strips'
      ],
      plannedActivities: [
        'Multi-state screening campaign coordination',
        'Digital health technology showcase and training',
        'Community partnership launch events',
        'Youth diabetes education program rollout',
        'Healthcare worker capacity building workshops',
        'Telemedicine service pilot program launch'
      ],
      registrationInfo: 'Registration opens March 2025. Priority will be given to rural communities with limited healthcare access.',
      partnerships: [
        'State Ministries of Health',
        'Local Government Health Departments',
        'Community Health Centers',
        'Traditional Rulers and Community Leaders',
        'Youth Organizations and Schools'
      ]
    }
  };

  const event = eventData[eventId as keyof typeof eventData];

  if (!event) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
          <button
            onClick={() => onNavigate('events')}
            className="text-red-600 hover:text-red-700 font-medium"
          >
            ← Back to Events
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <motion.button
          onClick={() => onNavigate('events')}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
          whileHover={{ x: -5 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={20} />
          Back to Events
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={event.heroImage}
              alt={event.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="flex items-center gap-2 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  event.status === 'completed' 
                    ? 'bg-green-500/20 text-green-100' 
                    : 'bg-blue-500/20 text-blue-100'
                }`}>
                  {event.status === 'completed' ? 'Event Completed' : 'Upcoming Event'}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
              <div className="flex flex-wrap gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} />
                  <span>{event.participants} participants</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Content */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Event Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{event.description}</p>
            </motion.section>

            {/* Completed Event Content */}
            {event.status === 'completed' && (
              <>
                {/* Achievements */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Event Achievements</h2>
                  <div className="grid md:grid-cols-3 gap-6">
                    {event.achievements?.map((achievement, i) => (
                      <motion.div
                        key={achievement.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-red-50 p-6 rounded-xl text-center"
                      >
                        <div className="text-3xl font-bold text-red-600 mb-2">{achievement.metric}</div>
                        <div className="text-gray-700 font-medium">{achievement.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Activities */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Event Activities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.activities?.map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Impact */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-blue-50 p-8 rounded-2xl"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Event Impact</h2>
                  <p className="text-gray-700 leading-relaxed">{event.impact}</p>
                </motion.section>

                {/* Testimonials */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Participant Testimonials</h2>
                  <div className="space-y-6">
                    {event.testimonials?.map((testimonial, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500"
                      >
                        <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-gray-600">{testimonial.location}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Photo Gallery */}
                {event.gallery && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Photo Gallery</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {event.gallery.map((image, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="overflow-hidden rounded-xl shadow-md cursor-pointer"
                        >
                          <img
                            src={image}
                            alt={`Event photo ${i + 1}`}
                            className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.section>
                )}
              </>
            )}

            {/* Upcoming Event Content */}
            {event.status === 'upcoming' && (
              <>
                {/* Goals */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Event Goals</h2>
                  <div className="space-y-4">
                    {event.goals?.map((goal, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-green-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{goal}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Planned Activities */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">Planned Activities</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.plannedActivities?.map((activity, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{activity}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                {/* Registration Info */}
                <motion.section
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-yellow-50 p-8 rounded-2xl border border-yellow-200"
                >
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Registration Information</h2>
                  <p className="text-gray-700 leading-relaxed">{event.registrationInfo}</p>
                </motion.section>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Actions</h3>
              <div className="space-y-3">
                {event.status === 'completed' ? (
                  <>
                    <button className="w-full flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
                      <Download size={18} />
                      Download Report
                    </button>
                    <button className="w-full flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      <ExternalLink size={18} />
                      Share Event
                    </button>
                  </>
                ) : (
                  <>
                    <button className="w-full flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      Get Notified
                    </button>
                    <button className="w-full flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Volunteer
                    </button>
                  </>
                )}
              </div>
            </motion.div>

            {/* Event Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-lg font-bold mb-4 text-gray-900">Event Details</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Date</div>
                  <div className="font-medium text-gray-900">{event.date}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Location</div>
                  <div className="font-medium text-gray-900">{event.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Participants</div>
                  <div className="font-medium text-gray-900">{event.participants}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div className={`font-medium ${
                    event.status === 'completed' ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partnerships (for upcoming events) */}
            {event.status === 'upcoming' && event.partnerships && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-bold mb-4 text-gray-900">Key Partners</h3>
                <div className="space-y-2">
                  {event.partnerships.map((partner, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm">{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-red-600 text-white px-6 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            {event.status === 'completed' ? 'Support Our Next Event' : 'Be Part of This Event'}
          </h2>
          <p className="text-lg text-red-100 mb-8">
            {event.status === 'completed' 
              ? 'Help us continue making a difference in diabetes care across Nigeria.'
              : 'Join us in making this our biggest impact event yet.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={() => onNavigate('volunteer')}
              className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-red-600 font-medium shadow hover:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Volunteer
            </motion.button>
            <motion.button
              onClick={() => onNavigate('support')}
              className="inline-flex items-center rounded-lg border border-white px-8 py-3 text-white font-medium hover:bg-white hover:text-red-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}