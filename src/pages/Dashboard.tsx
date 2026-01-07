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
  Stethoscope,
  Phone,
  UserCheck,
  Scale
} from 'lucide-react';

// Real data based on your research findings
const dashboardData = {
  totalParticipants: 154,
  communities: "Multiple towns within Anaocha LGA, Anambra State",
  genderDistribution: {
    female: 112,
    male: 32,
    unspecified: 10
  },
  ageProfile: {
    averageAge: 61,
    under40: 3,
    age40to59: 54,
    age60to74: 65,
    age75plus: 15
  },
  bloodPressure: {
    measured: 142,
    hypertensive: 84,
    prevalence: 59
  },
  knownConditions: {
    knownHypertensive: 62,
    knownDiabetic: 22
  },
  bmiData: {
    total: 143,
    normalWeight: 82,
    overweight: 37,
    obese: 12,
    underweight: 12
  },
  followUp: {
    consentRecorded: 39,
    consentYes: 38,
    consentNo: 1,
    primaryMethod: "Phone calls"
  }
};

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState('overview');

  // Calculate key insights
  const insights = useMemo(() => {
    const femalePercentage = ((dashboardData.genderDistribution.female / dashboardData.totalParticipants) * 100).toFixed(1);
    const over40Percentage = (((dashboardData.ageProfile.age40to59 + dashboardData.ageProfile.age60to74 + dashboardData.ageProfile.age75plus) / dashboardData.totalParticipants) * 100).toFixed(0);
    const over60Percentage = (((dashboardData.ageProfile.age60to74 + dashboardData.ageProfile.age75plus) / dashboardData.totalParticipants) * 100).toFixed(0);
    const overweightObesePercentage = (((dashboardData.bmiData.overweight + dashboardData.bmiData.obese) / dashboardData.bmiData.total) * 100).toFixed(0);
    
    return {
      femalePercentage,
      over40Percentage,
      over60Percentage,
      overweightObesePercentage,
      hypertensionPrevalence: dashboardData.bloodPressure.prevalence,
      undiagnosedHypertension: dashboardData.bloodPressure.hypertensive - dashboardData.knownConditions.knownHypertensive
    };
  }, []);

  // Age distribution for chart
  const ageDistribution = [
    { range: 'Under 40', count: dashboardData.ageProfile.under40, percentage: ((dashboardData.ageProfile.under40 / dashboardData.totalParticipants) * 100).toFixed(1) },
    { range: '40-59', count: dashboardData.ageProfile.age40to59, percentage: ((dashboardData.ageProfile.age40to59 / dashboardData.totalParticipants) * 100).toFixed(1) },
    { range: '60-74', count: dashboardData.ageProfile.age60to74, percentage: ((dashboardData.ageProfile.age60to74 / dashboardData.totalParticipants) * 100).toFixed(1) },
    { range: '75+', count: dashboardData.ageProfile.age75plus, percentage: ((dashboardData.ageProfile.age75plus / dashboardData.totalParticipants) * 100).toFixed(1) }
  ];

  // BMI distribution for chart
  const bmiDistribution = [
    { category: 'Underweight', count: dashboardData.bmiData.underweight, percentage: ((dashboardData.bmiData.underweight / dashboardData.bmiData.total) * 100).toFixed(1), color: 'bg-blue-500' },
    { category: 'Normal Weight', count: dashboardData.bmiData.normalWeight, percentage: ((dashboardData.bmiData.normalWeight / dashboardData.bmiData.total) * 100).toFixed(1), color: 'bg-green-500' },
    { category: 'Overweight', count: dashboardData.bmiData.overweight, percentage: ((dashboardData.bmiData.overweight / dashboardData.bmiData.total) * 100).toFixed(1), color: 'bg-yellow-500' },
    { category: 'Obese', count: dashboardData.bmiData.obese, percentage: ((dashboardData.bmiData.obese / dashboardData.bmiData.total) * 100).toFixed(1), color: 'bg-red-500' }
  ];

  const keyFindings = [
    {
      title: "Overwhelming Female Participation",
      description: `${insights.femalePercentage}% of participants are women, demonstrating higher health-seeking behavior and community health service utilization`,
      type: "success",
      icon: Users
    },
    {
      title: "Targeting Vulnerable Demographics",
      description: `${insights.over40Percentage}% of beneficiaries are aged 40+, with over half being 60+ - the population most vulnerable to chronic disease`,
      type: "info",
      icon: TrendingUp
    },
    {
      title: "High Hypertension Burden",
      description: `${insights.hypertensionPrevalence}% measured hypertension prevalence - extremely high and indicating serious public health risk`,
      type: "warning",
      icon: Heart
    },
    {
      title: "Silent Disease Detection",
      description: `${insights.undiagnosedHypertension} people with high BP were not previously diagnosed, revealing significant gaps in healthcare access`,
      type: "warning",
      icon: AlertTriangle
    },
    {
      title: "Cardiovascular Risk Factors",
      description: `${insights.overweightObesePercentage}% of participants are overweight or obese, increasing long-term cardiovascular and diabetes risk`,
      type: "warning",
      icon: Scale
    },
    {
      title: "Strong Follow-up Engagement",
      description: `97% consent rate for follow-up (38 of 39 recorded), showing community trust and engagement with the program`,
      type: "success",
      icon: Phone
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
            <h1 className="text-4xl font-bold mb-4">Community Health Outreach — Data Story (2025)</h1>
            <p className="text-xl text-red-100 mb-6">
              Comprehensive analysis of our diabetes and hypertension screening program
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>World Diabetes Day 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Anaocha LGA, Anambra State</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={16} />
                <span>{dashboardData.totalParticipants} Total Beneficiaries</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scale & Reach Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Scale & Reach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Establishing credibility through structured, comprehensive community outreach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Total Beneficiaries</p>
                  <p className="text-3xl font-bold text-gray-900">{dashboardData.totalParticipants}</p>
                  <p className="text-green-600 text-sm">Structured outreach</p>
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
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Communities Covered</p>
                  <p className="text-2xl font-bold text-gray-900">Multiple Towns</p>
                  <p className="text-blue-600 text-sm">Anaocha LGA</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Primary Care Linkage</p>
                  <p className="text-2xl font-bold text-gray-900">Nearly 100%</p>
                  <p className="text-green-600 text-sm">PHC captured</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demographics Section */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding our community demographics and the human story behind the data
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Gender Distribution */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Gender Distribution</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium text-gray-700">Female</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${insights.femalePercentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                      className="h-full bg-gradient-to-r from-pink-500 to-pink-600 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                      {dashboardData.genderDistribution.female} ({insights.femalePercentage}%)
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 text-sm font-medium text-gray-700">Male</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${((dashboardData.genderDistribution.male / dashboardData.totalParticipants) * 100).toFixed(1)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                      {dashboardData.genderDistribution.male} ({((dashboardData.genderDistribution.male / dashboardData.totalParticipants) * 100).toFixed(1)}%)
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-200">
                <p className="text-pink-800 text-sm font-medium">
                  <strong>Key Insight:</strong> Women represent {insights.femalePercentage}% of participants, demonstrating higher engagement with community health services.
                </p>
              </div>
            </motion.div>

            {/* Age Distribution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Age Profile (Average: {dashboardData.ageProfile.averageAge} years)</h3>
              <div className="space-y-4">
                {ageDistribution.map((group, i) => (
                  <div key={group.range} className="flex items-center gap-4">
                    <div className="w-20 text-sm font-medium text-gray-700">{group.range}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-6 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${group.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                        {group.count} ({group.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-800 text-sm font-medium">
                  <strong>Key Insight:</strong> {insights.over40Percentage}% are aged 40+ and over half are 60+ — the most vulnerable to chronic disease.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Health Burden Section */}
      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Health Burden</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Measured health indicators demonstrating why this work matters
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">{dashboardData.bloodPressure.prevalence}%</h3>
              <p className="text-gray-700 font-medium">Measured Hypertension</p>
              <p className="text-gray-500 text-sm mt-2">{dashboardData.bloodPressure.hypertensive} of {dashboardData.bloodPressure.measured} measured</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-600 mb-2">{insights.undiagnosedHypertension}</h3>
              <p className="text-gray-700 font-medium">Undiagnosed Cases</p>
              <p className="text-gray-500 text-sm mt-2">Silent hypertension detected</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Activity className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{dashboardData.knownConditions.knownDiabetic}</h3>
              <p className="text-gray-700 font-medium">Known Diabetics</p>
              <p className="text-gray-500 text-sm mt-2">Self-reported diabetes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">97%</h3>
              <p className="text-gray-700 font-medium">Follow-up Consent</p>
              <p className="text-gray-500 text-sm mt-2">{dashboardData.followUp.consentYes} of {dashboardData.followUp.consentRecorded}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BMI Analysis */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Nutritional Status (BMI Analysis)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Weight status assessment for {dashboardData.bmiData.total} participants
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <div className="space-y-6">
                {bmiDistribution.map((category, i) => (
                  <div key={category.category} className="flex items-center gap-4">
                    <div className="w-32 text-sm font-medium text-gray-700">{category.category}</div>
                    <div className="flex-1 bg-gray-200 rounded-full h-8 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${category.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className={`h-full ${category.color} rounded-full`}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white">
                        {category.count} ({category.percentage}%)
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm font-medium">
                  <strong>Key Insight:</strong> Over one-third ({insights.overweightObesePercentage}%) of participants are overweight or obese, significantly increasing long-term cardiovascular and diabetes risk.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-12 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Key Research Findings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Critical insights that demonstrate program impact and guide future interventions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {keyFindings.map((finding, i) => (
              <motion.div
                key={finding.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`p-6 rounded-xl border-l-4 ${
                  finding.type === 'warning' ? 'bg-orange-50 border-orange-500' :
                  finding.type === 'success' ? 'bg-green-50 border-green-500' :
                  'bg-blue-50 border-blue-500'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    finding.type === 'warning' ? 'bg-orange-100' :
                    finding.type === 'success' ? 'bg-green-100' :
                    'bg-blue-100'
                  }`}>
                    <finding.icon className={`w-6 h-6 ${
                      finding.type === 'warning' ? 'text-orange-600' :
                      finding.type === 'success' ? 'text-green-600' :
                      'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{finding.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{finding.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Response */}
      <section className="py-12 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Program Response</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Evidence-based interventions and guideline-aligned care delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Medications Provided</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Amlodipine</h4>
                    <p className="text-gray-600 text-sm">First-line hypertension treatment</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Metformin</h4>
                    <p className="text-gray-600 text-sm">First-line diabetes management</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Other Medications</h4>
                    <p className="text-gray-600 text-sm">Guideline-aligned care</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm font-medium">
                  ✅ Confirms appropriate, evidence-based medication protocols
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">Follow-Up & Continuity</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">97%</div>
                  <p className="text-gray-700 font-medium">Consent Rate</p>
                  <p className="text-gray-500 text-sm">{dashboardData.followUp.consentYes} of {dashboardData.followUp.consentRecorded} participants</p>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Primary Method</h4>
                    <p className="text-gray-600 text-sm">{dashboardData.followUp.primaryMethod}</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-800 text-sm font-medium">
                  ⚠️ <strong>Operational Insight:</strong> Follow-up methods recorded inconsistently — opportunity to improve data quality and program tracking.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-red-600 to-red-700 text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Evidence-Based Impact</h2>
          <p className="text-lg text-red-100 mb-8">
            This comprehensive data demonstrates our structured approach to community health, 
            revealing critical gaps in healthcare access and our evidence-based response.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">{dashboardData.totalParticipants}</div>
              <div className="text-red-100">Lives Touched</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">{insights.undiagnosedHypertension}</div>
              <div className="text-red-100">Silent Cases Found</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">97%</div>
              <div className="text-red-100">Community Trust</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}