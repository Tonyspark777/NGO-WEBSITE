import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Heart, Users, Globe, Award, ArrowRight, TestTube, Stethoscope, BarChart3, BookOpen } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const impactStats = [
    { number: '774 LGA & 36 States', label: 'Targeted', icon: Globe },
    { number: '150+', label: 'People Reached', icon: Users },
    { number: '3', label: 'Communities Engaged', icon: Heart },
    { number: '150+', label: 'Diabetes Screenings', icon: Award },
    { number: '300+', label: 'Test Strips Distributed', icon: TestTube },
    { number: '5', label: 'Healthcare Partnerships', icon: Stethoscope },
    { number: '150', label: 'Data Points Collected', icon: BarChart3 },
    { number: '80%+', label: 'Improved Diabetes Literacy', icon: BookOpen },
  ];

  useEffect(() => {
    // Simple fallback - replace globe with a static image or illustration
    const canvas = document.getElementById("health-globe") as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Set canvas size
        canvas.width = 600;
        canvas.height = 600;
        
        // Create a simple animated circle with gradient
        let rotation = 0;
        
        const animate = () => {
          ctx.clearRect(0, 0, 600, 600);
          
          // Create gradient
          const gradient = ctx.createRadialGradient(300, 300, 50, 300, 300, 250);
          gradient.addColorStop(0, '#ef4444');
          gradient.addColorStop(0.5, '#dc2626');
          gradient.addColorStop(1, '#b91c1c');
          
          // Draw main circle
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(300, 300, 200, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw rotating elements to simulate globe
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.lineWidth = 2;
          
          for (let i = 0; i < 8; i++) {
            const angle = (rotation + i * Math.PI / 4);
            const x1 = 300 + Math.cos(angle) * 150;
            const y1 = 300 + Math.sin(angle) * 150;
            const x2 = 300 + Math.cos(angle) * 180;
            const y2 = 300 + Math.sin(angle) * 180;
            
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
          
          // Add some dots for locations
          ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
          const locations = [
            { x: 320, y: 280 }, // Lagos area
            { x: 300, y: 250 }, // Abuja area
            { x: 310, y: 290 }, // Anambra area
            { x: 290, y: 230 }, // Kano area
          ];
          
          locations.forEach(loc => {
            ctx.beginPath();
            ctx.arc(loc.x, loc.y, 4, 0, Math.PI * 2);
            ctx.fill();
          });
          
          rotation += 0.01;
          requestAnimationFrame(animate);
        };
        
        animate();
      }
    }
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
                className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Building a Nigeria That <motion.span 
                  className="text-red-600"
                  animate={{ color: ['#dc2626', '#ef4444', '#dc2626'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >Understands Diabetes</motion.span>
              </motion.h1>
              <motion.p 
                className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Using data and technology, we empower communities to prevent, detect, and manage diabetes—turning local insights into actions that drive national transformation.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8 flex justify-center lg:justify-start gap-4"
              >
                <motion.button
                  onClick={() => onNavigate('volunteer')}
                  className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white font-medium shadow hover:bg-red-700"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Involved
                  <ArrowRight size={20} className="ml-2" />
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
            <p className="text-red-100 text-lg">Turning Awareness into Action Across Nigeria</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="p-3 group cursor-pointer"
              >
                <motion.div
                  className="mb-2"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  <stat.icon size={32} className="mx-auto text-white/80 group-hover:text-white transition-colors" />
                </motion.div>
                <motion.div 
                  className="text-2xl lg:text-3xl font-bold mb-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <motion.div 
                  className="text-sm text-red-100"
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
            About Rethink Initiative for Health
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-5xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Rethink Initiative was born from the belief that diabetes requires a complete rethinking in Nigeria — from awareness to prevention and early detection. Diabetes is often preventable, manageable, and undetected, yet access to knowledge and care remains limited.
            <br /><br />
            We use data and technology to map diabetes across Nigeria, building the first national database of prevalence, incidence, and burden. These insights drive targeted interventions that empower communities and produce measurable outcomes.
            <br /><br />
            We work from the grassroots upward, ensuring local efforts contribute to national transformation. Through education, screenings, and healthcare partnerships, we bring resources and knowledge to every Nigerian household.
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

      {/* Join Our Mission */}
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
            Together, we can beat diabetes.
          </p>
          <motion.button
            onClick={() => onNavigate('volunteer')}
            className="inline-flex items-center rounded-lg bg-white px-8 py-3 text-red-600 font-medium shadow hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}