import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'programs', label: 'Programs' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'events', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-30 w-full bg-white/90 backdrop-blur-sm shadow-sm transition-all"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.button 
            onClick={() => onNavigate('home')}
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68cbc888df1576afba05c1c7/a220e6f94_ChatGPTImageSep14202506_38_22PM.png" alt="Rethink Initiative Logo" className="h-12" />
          </motion.button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex md:gap-8">
            {navItems.map((item, i) => (
              <div key={item.id} className="relative group">
                <motion.button 
                  onClick={() => onNavigate(item.id)}
                  className={`text-gray-600 font-medium hover:text-red-600 transition-colors relative group ${
                    currentPage === item.id ? 'text-red-600' : ''
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </div>
            ))}
          </nav>

          <motion.button
            onClick={() => onNavigate('volunteer')}
            className="hidden md:inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-white font-medium shadow hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(239, 68, 68, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get Involved
          </motion.button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-gray-700 hover:text-red-600 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white/95 pb-4 absolute w-full shadow-lg"
        >
          <nav className="flex flex-col items-center gap-6 pt-4">
            {navItems.map((item, i) => (
              <motion.button 
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className="text-gray-700 font-medium text-lg hover:text-red-600 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => {
                onNavigate('volunteer');
                setIsMenuOpen(false);
              }}
              className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-white font-medium shadow hover:bg-red-700 transition-colors mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Get Involved
            </motion.button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}