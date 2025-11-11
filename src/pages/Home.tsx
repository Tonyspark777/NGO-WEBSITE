import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Heart, Users, Globe, Award, ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const impactStats = [
    { number: '500+', label: 'People Screened', icon: Heart },
    { number: '1,200+', label: 'Test Strips Provided', icon: Globe },
    { number: '12', label: 'Communities Reached', icon: Users },
    { number: '24/7', label: 'Health Monitoring', icon: Award },
  ];

  useEffect(() => {
    // Globe script for the global impact section
    const globeScript = document.createElement('script');
    globeScript.type = 'module';
    globeScript.textContent = `
      import createGlobe from 'https://cdn.skypack.dev/cobe';

      let phi = 0;
      let canvas = document.getElementById("health-globe");

      if (canvas && !canvas.getAttribute('data-globe-initialized')) {
        canvas.setAttribute('data-globe-initialized', 'true');
        
        const globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 600,
          height: 600,
          phi: 0,
          theta: 0,
          dark: 0,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.9, 0.9, 0.9],
          markerColor: [0.8, 0.2, 0.3],
          glowColor: [0.9, 0.4, 0.5],
          offset: [0, 0],
          markers: [
            { location: [6.5244, 3.3792], size: 0.08 },
            { location: [9.0579, 8.6753], size: 0.05 },
            { location: [0, 0], size: 0.03 },
            { location: [-1.2921, 36.8219], size: 0.04 },
            { location: [15.5007, 32.5599], size: 0.03 },
            { location: [3.8480, 11.5021], size: 0.03 },
          ],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.003;
          },
        });
      }
    `;
    
    document.body.appendChild(globeScript);

    return () => {
      const scripts = document.querySelectorAll('script[type="module"]');
      scripts.forEach(s => {
        if (s.textContent.includes('createGlobe')) {
          s.remove();
        }
      });
      const canvas = document.getElementById("health-globe");
      if (canvas) {
        canvas.removeAttribute('data-globe-initialized');
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-red-50 to-white px-6 relative overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-red-200/30 rounded-full"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-blue-200/30 rounded-full"
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-2/5 text-center lg:text-left"
            >
              <motion.h1 
                className="text-4xl sm:text-6xl font-extrabold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Empowering <motion.span 
                  className="text-red-600"
                  animate={{ color: ['#dc2626', '#ef4444', '#dc2626'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >Diabetes Care</motion.span> in Rural Nigeria
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Using data and technology to provide accessible diabetes screening, 
                education, and support to underserved communities across Nigeria.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex justify-center lg:justify-start gap-4"
              >
                <motion.button
                  onClick={() => onNavigate('support')}
                  className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white font-medium shadow hover:bg-red-700"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Donate Now
                  <ArrowRight size={20} className="ml-2" />
                </motion.button>
                <motion.button
                  onClick={() => onNavigate('volunteer')}
                  className="inline-flex items-center rounded-lg border border-gray-300 px-6 py-3 text-gray-700 font-medium hover:bg-gray-100"
                  whileHover={{ scale: 1.05, borderColor: '#dc2626' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Us
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-3/5 lg:ml-16 relative"
            >
              <div className="relative h-[450px] w-[450px] mx-auto lg:ml-auto lg:mr-0">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-100/30 to-pink-100/30 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                ></motion.div>
                <motion.canvas
                  id="health-globe"
                  style={{ width: '450px', height: '450px' }}
                  width="600"
                  height="600"
                  className="relative z-10"
                  animate={{ rotateY: [0, 5, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                ></motion.canvas>
                <motion.div 
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div 
                      className="w-3 h-3 bg-red-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <span className="text-sm font-medium text-gray-700">Live Impact Zones</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-red-600 text-white px-6 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-700/20 to-pink-600/20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Our Impact So Far</h2>
            <p className="text-red-100 text-lg">Making a difference one community at a time</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="p-4 group cursor-pointer"
              >
                <motion.div
                  className="mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <stat.icon size={32} className="mx-auto text-white/80 group-hover:text-white transition-colors" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-base text-red-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2 
            className="text-3xl font-bold mb-4"
            whileInView={{ scale: [0.9, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Rethink Initiative
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rethink Initiative is a non-profit organization dedicated to combating diabetes 
            in rural Nigeria through innovative healthcare solutions, community education, 
            and accessible screening programs.
          </motion.p>
          <motion.button
            onClick={() => onNavigate('about')}
            className="inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 text-white font-medium shadow hover:bg-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More About Us
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}