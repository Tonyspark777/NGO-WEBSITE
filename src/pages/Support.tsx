import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Heart, Stethoscope, TestTube, Package, Users, ArrowRight, CheckCircle } from 'lucide-react';

export default function Support() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');

  const donationItems = [
    {
      icon: TestTube,
      title: '1 Test Strip',
      price: 150,
      description: 'Provides one blood glucose test strip for diabetes monitoring',
      impact: 'Helps 1 person monitor their blood sugar level'
    },
    {
      icon: Stethoscope,
      title: '1 Glucometer',
      price: 8500,
      description: 'Complete blood glucose monitoring device',
      impact: 'Enables ongoing diabetes management for 1 person'
    },
    {
      icon: Package,
      title: 'Monthly Test Strip Supply',
      price: 4500,
      description: '30 test strips for one month of daily monitoring',
      impact: 'Supports 1 person for a full month of monitoring'
    },
    {
      icon: Heart,
      title: 'Complete Diabetes Kit',
      price: 15000,
      description: 'Glucometer + 3 months of test strips + educational materials',
      impact: 'Comprehensive support for 1 person for 3 months'
    },
    {
      icon: Users,
      title: 'Community Screening Event',
      price: 50000,
      description: 'Fund a complete screening event for a rural community',
      impact: 'Screens 50+ people in underserved communities'
    }
  ];

  const quickAmounts = [1000, 2500, 5000, 10000, 25000, 50000];

  const handleDonate = () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (amount) {
      // Here you would integrate with your payment processor
      alert(`Thank you for your donation of ₦${amount.toLocaleString()}! This would redirect to payment processing.`);
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
            Support Our Mission
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At least 2 in 3 persons living in rural areas of Nigeria cannot afford 
            glucometers and test strips. Your donation directly provides these essential 
            tools for diabetes management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-red-100 border border-red-200 rounded-lg p-6 inline-block"
          >
            <p className="text-red-800 font-semibold">
              🚨 Critical Need: Many rural Nigerians cannot afford basic diabetes monitoring tools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Donation Items */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Choose Your Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every donation, no matter the size, makes a real difference in someone's life. 
              See exactly how your contribution helps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {donationItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-xl mb-6 mx-auto">
                  <item.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="text-xl font-bold text-center mb-2 text-gray-900">{item.title}</h3>
                <div className="text-center mb-4">
                  <span className="text-3xl font-bold text-red-600">₦{item.price.toLocaleString()}</span>
                </div>
                
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm font-medium">{item.impact}</p>
                  </div>
                </div>
                
                <motion.button
                  onClick={() => setSelectedAmount(item.price)}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Donate ₦{item.price.toLocaleString()}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Donation Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Make a Custom Donation</h2>
              <p className="text-gray-600">
                Choose your own amount to support our diabetes care initiatives.
              </p>
            </div>

            {/* Donation Type Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-100 rounded-lg p-1 flex">
                <button
                  onClick={() => setDonationType('one-time')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    donationType === 'one-time'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => setDonationType('monthly')}
                  className={`px-6 py-2 rounded-md font-medium transition-colors ${
                    donationType === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Quick Amount Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-900">Quick Amounts</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickAmounts.map((amount) => (
                  <motion.button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-lg border-2 font-medium transition-all ${
                      selectedAmount === amount
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 hover:border-red-300 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    ₦{amount.toLocaleString()}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Amount Input */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4 text-center text-gray-900">Or Enter Custom Amount</h3>
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">₦</span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-red-500 focus:outline-none text-lg font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Impact Preview */}
            {(selectedAmount || customAmount) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
              >
                <h4 className="font-semibold text-blue-900 mb-2">Your Impact:</h4>
                <p className="text-blue-800">
                  ₦{(selectedAmount || parseInt(customAmount) || 0).toLocaleString()} can provide{' '}
                  {Math.floor((selectedAmount || parseInt(customAmount) || 0) / 150)} test strips or help{' '}
                  {Math.floor((selectedAmount || parseInt(customAmount) || 0) / 8500)} people get glucometers.
                </p>
              </motion.div>
            )}

            {/* Donate Button */}
            <div className="text-center">
              <motion.button
                onClick={handleDonate}
                disabled={!selectedAmount && !customAmount}
                className={`inline-flex items-center gap-2 px-12 py-4 rounded-lg font-medium text-lg transition-all ${
                  selectedAmount || customAmount
                    ? 'bg-red-600 text-white hover:bg-red-700 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                whileHover={selectedAmount || customAmount ? { scale: 1.05 } : {}}
                whileTap={selectedAmount || customAmount ? { scale: 0.95 } : {}}
              >
                Donate {donationType === 'monthly' ? 'Monthly' : 'Now'}
                <ArrowRight size={20} />
              </motion.button>
              <p className="text-sm text-gray-500 mt-4">
                Secure payment processing • Tax-deductible receipt provided
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Donations at Work</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how your contributions are making a real difference in people's lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TestTube className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">1,200+ Test Strips</h3>
              <p className="text-gray-600">
                Distributed to rural communities, enabling regular blood sugar monitoring 
                for hundreds of individuals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">85 Glucometers</h3>
              <p className="text-gray-600">
                Provided to individuals who couldn't afford them, giving them the tools 
                to manage their diabetes effectively.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">500+ People Screened</h3>
              <p className="text-gray-600">
                Free diabetes screenings conducted in rural communities, leading to 
                early detection and treatment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}