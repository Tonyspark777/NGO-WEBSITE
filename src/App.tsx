import React, { useState } from 'react';
import { motion } from "framer-motion";
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Volunteer from './pages/Volunteer';
import Support from './pages/Support';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [eventId, setEventId] = useState<string | null>(null);

  const handleNavigate = (page: string, id?: string) => {
    setCurrentPage(page);
    if (id) {
      setEventId(id);
    }
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'programs':
        return <Programs />;
      case 'events':
        return <Events onNavigate={handleNavigate} />;
      case 'volunteer':
        return <Volunteer />;
      case 'support':
        return <Support />;
      case 'contact':
        return <Contact />;
      case 'event-detail':
        return <EventDetail eventId={eventId || ''} onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <main className="font-sans text-gray-800 bg-white min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <motion.div
        key={currentPage}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {renderPage()}
      </motion.div>

      <motion.footer 
        className="bg-gray-800 text-white py-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rethink Initiative. All Rights Reserved.</p>
        </div>
      </motion.footer>
    </main>
  );
}