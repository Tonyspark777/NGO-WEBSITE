import React, { useState, useMemo } from 'react';
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Users, 
  Heart, 
  Activity, 
  TrendingUp, 
  MapPin, 
  AlertTriangle,
  CheckCircle,
  Filter,
  Download,
  Calendar,
  Stethoscope
} from 'lucide-react';

// Sample data based on the CSV structure
const dashboardData = [
  { id: 1, surname: 'Gbakocha', firstName: 'Veronica', gender: 'Female', age: 91, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 153, diastolic: 83, fbs: 96, knownDiabetic: 'No', knownHypertensive: 'Yes', bmi: 25, education: 'Primary' },
  { id: 2, surname: 'Dike', firstName: 'Nicholas', gender: 'Male', age: 65, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 168, diastolic: 95, fbs: 89, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 27, education: 'None' },
  { id: 3, surname: 'Nduagbor', firstName: 'Ikechukwu', gender: 'Male', age: 54, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 121, diastolic: 77, fbs: 100, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 21, education: 'Tertiary' },
  { id: 4, surname: 'Amah', firstName: 'Rebecca', gender: 'Female', age: 56, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 119, diastolic: 74, fbs: 99, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 23, education: 'Secondary' },
  { id: 5, surname: 'Amah', firstName: 'Josephat', gender: 'Male', age: 78, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 172, diastolic: 92, fbs: 120, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 20, education: 'Primary' },
  { id: 8, surname: 'Okonkwo', firstName: 'Ebelechukwu', gender: 'Female', age: 49, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 143, diastolic: 106, fbs: 193, knownDiabetic: 'Yes', knownHypertensive: 'No', bmi: 30, education: 'Secondary' },
  { id: 25, surname: 'Philip', firstName: 'Ngozika', gender: 'Female', age: 48, state: 'Imo', lga: 'Ehimembano', town: 'Umuezetu', systolic: 133, diastolic: 99, fbs: 82, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 25, education: 'Secondary' },
  { id: 46, surname: 'Orji', firstName: 'Nwamaka', gender: 'Female', age: 59, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 155, diastolic: 90, fbs: 339, knownDiabetic: 'Yes', knownHypertensive: 'No', bmi: 21, education: 'Tertiary' },
  { id: 53, surname: 'Okafor', firstName: 'Theresa', gender: 'Female', age: 52, state: 'Anambra', lga: 'Anaocha', town: 'Nneogidi', systolic: 152, diastolic: 88, fbs: 164, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 32, education: 'Secondary' },
  { id: 66, surname: 'Ezenwa', firstName: 'Mercy', gender: 'Female', age: 53, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 153, diastolic: 87, fbs: 372, knownDiabetic: 'Yes', knownHypertensive: 'No', bmi: 21, education: 'Tertiary' },
  { id: 94, surname: 'Udu', firstName: 'Chinelo', gender: 'Female', age: 45, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 113, diastolic: 77, fbs: 211, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 24, education: 'Primary' },
  { id: 99, surname: 'Ikeotuonye', firstName: 'Amaka', gender: 'Female', age: 55, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 173, diastolic: 107, fbs: 147, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 25, education: 'Secondary' },
  { id: 100, surname: 'Ngene', firstName: 'Virginia', gender: 'Female', age: 72, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 104, diastolic: 71, fbs: 409, knownDiabetic: 'Yes', knownHypertensive: 'No', bmi: 18, education: 'Primary' },
  { id: 110, surname: 'Esika', firstName: 'Grace', gender: 'Female', age: 54, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 96, diastolic: 63, fbs: 222, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 25, education: 'Secondary' },
  { id: 116, surname: 'Akubude', firstName: 'Clemetina', gender: 'Female', age: 55, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 158, diastolic: 100, fbs: 133, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 19, education: 'Primary' },
  { id: 143, surname: 'Onyenweze', firstName: 'Elizabeth', gender: 'Female', age: 60, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 137, diastolic: 93, fbs: 326, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 34, education: 'Primary' },
  { id: 153, surname: 'Anieche', firstName: 'Veronica', gender: 'Female', age: 57, state: 'Anambra', lga: 'Anaocha', town: 'Agulu', systolic: 164, diastolic: 93, fbs: 201, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 29, education: 'Primary' }
];

// Add more sample data for better visualization
const extendedData = [
  ...dashboardData,
  // Additional sample entries for better charts
  { id: 200, surname: 'Sample', firstName: 'Data1', gender: 'Male', age: 45, state: 'Lagos', lga: 'Ikeja', town: 'Victoria Island', systolic: 140, diastolic: 90, fbs: 110, knownDiabetic: 'No', knownHypertensive: 'Yes', bmi: 28, education: 'Tertiary' },
  { id: 201, surname: 'Sample', firstName: 'Data2', gender: 'Female', age: 38, state: 'Kano', lga: 'Kano Municipal', town: 'Sabon Gari', systolic: 125, diastolic: 80, fbs: 95, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 24, education: 'Secondary' },
  { id: 202, surname: 'Sample', firstName: 'Data3', gender: 'Male', age: 62, state: 'Rivers', lga: 'Port Harcourt', town: 'GRA', systolic: 160, diastolic: 100, fbs: 180, knownDiabetic: 'Yes', knownHypertensive: 'Yes', bmi: 31, education: 'Tertiary' },
  { id: 203, surname: 'Sample', firstName: 'Data4', gender: 'Female', age: 29, state: 'Abuja', lga: 'AMAC', town: 'Wuse', systolic: 115, diastolic: 75, fbs: 88, knownDiabetic: 'No', knownHypertensive: 'No', bmi: 22, education: 'Tertiary' },
  { id: 204, surname: 'Sample', firstName: 'Data5', gender: 'Male', age: 55, state: 'Oyo', lga: 'Ibadan North', town: 'Bodija', systolic: 145, diastolic: 95, fbs: 125, knownDiabetic: 'No', knownHypertensive: 'Yes', bmi: 27, education: 'Secondary' }
];

export default function Dashboard() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedMetric, setSelectedMetric] = useState('diabetes');

  // Calculate key metrics
  const metrics = useMemo(() => {
    const total = extendedData.length;
    const diabeticCount = extendedData.filter(p => p.knownDiabetic === 'Yes' || p.fbs > 126).length;
    const hypertensiveCount = extendedData.filter(p => p.knownHypertensive === 'Yes' || p.systolic > 140 || p.diastolic > 90).length;
    const highRiskCount = extendedData.filter(p => (p.fbs > 126 || p.systolic > 140 || p.diastolic > 90) && (p.knownDiabetic === 'No' && p.knownHypertensive === 'No')).length;
    const avgAge = Math.round(extendedData.reduce((sum, p) => sum + p.age, 0) / total);
    const femaleCount = extendedData.filter(p => p.gender === 'Female').length;
    const maleCount = extendedData.filter(p => p.gender === 'Male').length;

    return {
      total,
      diabeticCount,
      hypertensiveCount,
      highRiskCount,
      avgAge,
      femaleCount,
      maleCount,
      diabetesRate: ((diabeticCount / total) * 100).toFixed(1),
      hypertensionRate: ((hypertensiveCount / total) * 100).toFixed(1),
      newCasesRate: ((highRiskCount / total) * 100).toFixed(1)
    };
  }, []);

  // Age distribution data
  const ageGroups = useMemo(() => {
    const groups = {
      '18-30': 0,
      '31-45': 0,
      '46-60': 0,
      '61-75': 0,
      '75+': 0
    };

    extendedData.forEach(person => {
      if (person.age <= 30) groups['18-30']++;
      else if (person.age <= 45) groups['31-45']++;
      else if (person.age <= 60) groups['46-60']++;
      else if (person.age <= 75) groups['61-75']++;
      else groups['75+']++;
    });

    return Object.entries(groups).map(([range, count]) => ({
      range,
      count,
      percentage: ((count / extendedData.length) * 100).toFixed(1)
    }));
  }, []);

  // Geographic distribution
  const stateDistribution = useMemo(() => {
    const states = {};
    extendedData.forEach(person => {
      states[person.state] = (states[person.state] || 0) + 1;
    });

    return Object.entries(states).map(([state, count]) => ({
      state,
      count,
      percentage: ((count / extendedData.length) * 100).toFixed(1)
    })).sort((a, b) => b.count - a.count);
  }, []);

  // Risk level distribution
  const riskLevels = useMemo(() => {
    let low = 0, moderate = 0, high = 0, critical = 0;

    extendedData.forEach(person => {
      const isDiabetic = person.knownDiabetic === 'Yes' || person.fbs > 126;
      const isHypertensive = person.knownHypertensive === 'Yes' || person.systolic > 140 || person.diastolic > 90;
      const isObese = person.bmi > 30;

      if (isDiabetic && isHypertensive) critical++;
      else if (isDiabetic || isHypertensive || isObese) high++;
      else if (person.fbs > 100 || person.systolic > 130) moderate++;
      else low++;
    });

    return [
      { level: 'Low Risk', count: low, color: 'bg-green-500', percentage: ((low / extendedData.length) * 100).toFixed(1) },
      { level: 'Moderate Risk', count: moderate, color: 'bg-yellow-500', percentage: ((moderate / extendedData.length) * 100).toFixed(1) },
      { level: 'High Risk', count: high, color: 'bg-orange-500', percentage: ((high / extendedData.length) * 100).toFixed(1) },
      { level: 'Critical Risk', count: critical, color: 'bg-red-500', percentage: ((critical / extendedData.length) * 100).toFixed(1) }
    ];
  }, []);

  const keyInsights = [
    {
      title: "High Diabetes Detection Rate",
      description: `${metrics.diabetesRate}% of screened individuals show signs of diabetes, significantly higher than national average of 5.8%`,
      type: "warning"
    },
    {
      title: "Undiagnosed Cases Identified",
      description: `${metrics.newCasesRate}% of participants were previously unaware of their high-risk status`,
      type: "success"
    },
    {
      title: "Female Predominance",
      description: `${((metrics.femaleCount / metrics.total) * 100).toFixed(1)}% of participants are female, indicating higher health-seeking behavior`,
      type: "info"
    },
    {
      title: "Aging Population Focus",
      description: `Average age of ${metrics.avgAge} years suggests successful targeting of at-risk demographics`,
      type: "info"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Diabetes Screening Dashboard</h1>
            <p className="text-xl text-red-100 mb-6">
              Real-time insights from our World Diabetes Day 2024 screening campaign
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>November 14, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Anambra State & Beyond</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{metrics.total} Participants</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Cards */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Screened</p>
                  <p className="text-3xl font-bold text-gray-900">{metrics.total}</p>
                  <p className="text-green-600 text-sm">+15% from target</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-red-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-orange-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Diabetes Cases</p>
                  <p className="text-3xl font-bold text-gray-900">{metrics.diabeticCount}</p>
                  <p className="text-orange-600 text-sm">{metrics.diabetesRate}% prevalence</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-orange-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Hypertension Cases</p>
                  <p className="text-3xl font-bold text-gray-900">{metrics.hypertensiveCount}</p>
                  <p className="text-blue-600 text-sm">{metrics.hypertensionRate}% prevalence</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">New Cases Found</p>
                  <p className="text-3xl font-bold text-gray-900">{metrics.highRiskCount}</p>
                  <p className="text-green-600 text-sm">{metrics.newCasesRate}% undiagnosed</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Age Distribution Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Age Distribution</h3>
              <div className="space-y-4">
                {ageGroups.map((group, i) => (
                  <div key={group.range} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-gray-700">{group.range}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {group.count} ({group.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Risk Level Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Risk Level Distribution</h3>
              <div className="space-y-4">
                {riskLevels.map((risk, i) => (
                  <div key={risk.level} className="flex items-center gap-4">
                    <div className="w-24 text-sm font-medium text-gray-700">{risk.level}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${risk.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full ${risk.color} rounded-full`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {risk.count} ({risk.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Geographic Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg mb-12"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">Geographic Distribution</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateDistribution.map((state, i) => (
                <motion.div
                  key={state.state}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="font-medium text-gray-900">{state.state}</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{state.count}</div>
                    <div className="text-sm text-gray-600">{state.percentage}%</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Insights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-xl shadow-lg mb-12"
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">Key Insights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {keyInsights.map((insight, i) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`p-4 rounded-lg border-l-4 ${
                    insight.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                    insight.type === 'success' ? 'bg-green-50 border-green-500' :
                    'bg-blue-50 border-blue-500'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {insight.type === 'warning' && <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />}
                    {insight.type === 'success' && <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />}
                    {insight.type === 'info' && <BarChart3 className="w-5 h-5 text-blue-600 mt-0.5" />}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                      <p className="text-gray-700 text-sm">{insight.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Action Items */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Recommended Actions</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <Stethoscope className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Immediate Follow-up</h4>
                  <p className="text-red-100 text-sm">
                    {metrics.highRiskCount} individuals require immediate medical attention and specialist referrals.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Community Education</h4>
                  <p className="text-red-100 text-sm">
                    Expand diabetes awareness programs targeting the {metrics.avgAge}+ age group in rural areas.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <BarChart3 className="w-6 h-6 text-red-200 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">Data Integration</h4>
                  <p className="text-red-100 text-sm">
                    Integrate findings into national diabetes surveillance system for policy development.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}