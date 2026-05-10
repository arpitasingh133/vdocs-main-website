/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Users,
  FileText,
  Search,
  Activity,
  ArrowRight,
  CheckCircle2,
  Lock,
  Database,
  Network,
  Menu,
  X,
  AlertCircle,
  TrendingUp,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';


const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Zap className="w-3 h-3" />
            <span>AI-Powered Clinical Intelligence</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 leading-[1.1] mb-6">
            Understand any patient <span className="text-sky-600">in seconds.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-xl">
            VDocs converts scattered medical reports into an instant clinical summary, helping doctors make faster, more confident decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2">
              Book Demo <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#how-it-works" className="bg-white border border-slate-200 hover:border-sky-200 hover:bg-sky-50 text-slate-700 px-8 py-4 rounded-full text-lg font-semibold transition-all flex items-center justify-center">
              See How It Works
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Product UI Mockup */}
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-100 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="text-xs font-medium text-slate-400 uppercase tracking-widest">Patient Summary</div>
              <div className="w-6" />
            </div>
            <div className="p-8">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Rahul Mehta</h3>
                  <p className="text-sm text-slate-500">Age: 52 • ID: #VD-9021</p>
                </div>
                <div className="px-3 py-1 bg-amber-50 text-amber-700 rounded-md text-xs font-bold border border-amber-100">
                  High Risk
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Key Findings</div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-red-600 font-medium">
                      <AlertCircle className="w-4 h-4" /> High LDL cholesterol
                    </li>
                    <li className="flex items-center gap-2 text-sm text-red-600 font-medium">
                      <AlertCircle className="w-4 h-4" /> Elevated fasting glucose
                    </li>
                  </ul>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Recent Reports</div>
                  <ul className="space-y-1">
                    <li className="text-xs text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sky-400" /> Blood Test (Mar 12)
                    </li>
                    <li className="text-xs text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sky-400" /> Lipid Panel (Mar 10)
                    </li>
                    <li className="text-xs text-slate-600 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-sky-400" /> ECG (Mar 9)
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 bg-sky-50 rounded-xl border border-sky-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2">
                  <Zap className="w-4 h-4 text-sky-300" />
                </div>
                <div className="text-[10px] font-bold text-sky-700 uppercase mb-2">AI Summary</div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  Patient showing metabolic risk indicators. Recommend lipid and diabetes evaluation based on trending glucose levels (+12% from last baseline).
                </p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sky-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />
        </motion.div>
      </div>
    </section>
  );
};

const TrustStrip = () => {
  return (
    <div className="py-10 border-y border-slate-100 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Designed for modern clinics and hospitals</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {['ABDM Ready', 'Secure Patient Data', 'Built with Doctors'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-600 font-semibold">
              <ShieldCheck className="w-5 h-5 text-sky-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProblemSection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Doctors spend too much time finding information.
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            In real clinical practice, patient data is scattered across multiple sources. That fragmentation slows care down.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'PDF reports', icon: FileText, color: 'bg-red-50 text-red-600' },
                { title: 'Lab papers', icon: Activity, color: 'bg-sky-50 text-sky-600' },
                { title: 'Hospital files', icon: Database, color: 'bg-indigo-50 text-indigo-600' },
                { title: 'Scattered history', icon: Clock, color: 'bg-amber-50 text-amber-600' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center gap-4"
                >
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-700">{item.title}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent rotate-45" />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent -rotate-45" />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">The Data Fragmentation Crisis</h3>
            <ul className="space-y-6">
              {[
                'PDFs and printed reports from external labs',
                'Different systems across labs and hospitals',
                'Unstructured medical documents and handwritten notes'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center flex-shrink-0">
                    <X className="w-3 h-3" />
                  </div>
                  <p className="text-slate-600 font-medium">{text}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 p-6 bg-white rounded-2xl border-l-4 border-red-400 shadow-sm">
              <p className="text-slate-700 italic font-medium">
                "Doctors often spend valuable consultation time just finding what matters, rather than talking to the patient."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const steps = [
    {
      title: "Upload or fetch reports",
      desc: "Import patient reports instantly from any source.",
      icon: <Database className="w-6 h-6 text-sky-600" />,
      step: "01"
    },
    {
      title: "AI structures medical data",
      desc: "Extracts values, trends, and abnormalities automatically.",
      icon: <Search className="w-6 h-6 text-sky-600" />,
      step: "02"
    },
    {
      title: "Get a clinical summary",
      desc: "See what matters in seconds with AI-driven insights.",
      icon: <Activity className="w-6 h-6 text-sky-600" />,
      step: "03"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            VDocs makes patient data instantly understandable.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-200 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <span className="text-4xl font-display font-black text-slate-200 group-hover:text-sky-100 transition-colors">{step.step}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductInterfaceSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-slate-900 text-white overflow-hidden">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            See how VDocs works
          </h2>
          <p className="text-slate-400">A powerful interface designed for clinical precision.</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden p-1">
            <div className="bg-slate-900 rounded-xl overflow-hidden">
              {/* Mockup Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-sky-400 font-bold">VDocs</div>
                  <div className="flex gap-4 text-xs font-medium text-slate-500">
                    <span>Vitals</span>
                    <span className="text-white border-b border-sky-400 pb-4 -mb-4">Reports</span>
                    <span>Lab Trends</span>
                    <span>AI Insights</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800" />
              </div>

              {/* Mockup Content */}
              <div className="p-8 grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <div className="p-6 bg-slate-800/50 rounded-xl border border-slate-700">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-slate-200">Clinical Timeline</h4>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[40, 60, 45, 80, 55, 90, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-sky-500/20 rounded-t-sm relative group">
                          <div style={{ height: `${h}%` }} className="bg-sky-500 rounded-t-sm transition-all group-hover:bg-sky-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Abnormal Values</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">HbA1c</span>
                          <span className="text-red-400 font-bold">7.2%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Creatinine</span>
                          <span className="text-amber-400 font-bold">1.4 mg/dL</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                      <div className="text-[10px] font-bold text-slate-500 uppercase mb-2">Trends</div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">Weight</span>
                          <span className="text-emerald-400 font-bold">-2.4kg</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-slate-400">BP</span>
                          <span className="text-slate-200 font-bold">128/84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-sky-900/20 p-6 rounded-xl border border-sky-500/30">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold text-sky-400 uppercase">AI Clinical Summary</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Patient presents with persistent hyperglycemia and early signs of renal stress. Previous ECG shows normal sinus rhythm. Recommend immediate follow-up on renal panel and diabetic management.
                  </p>
                  <button className="w-full mt-6 py-2 bg-sky-600 rounded-lg text-xs font-bold hover:bg-sky-500 transition-colors">
                    Generate Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Callouts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -right-12 top-1/4 hidden lg:block p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
              <span className="text-sm font-bold">Abnormal values highlighted</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="absolute -left-12 bottom-1/4 hidden lg:block p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-bold">Trends visualized</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ClinicalBenefitsSection = () => {
  const benefits = [
    {
      title: "Faster consultations",
      desc: "Reduce time spent reviewing reports by up to 70%.",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Better understanding",
      desc: "Key insights surfaced instantly from years of history.",
      icon: <Search className="w-6 h-6" />
    },
    {
      title: "Lower cognitive load",
      desc: "No need to scan multiple documents manually.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Confident decisions",
      desc: "Critical values flagged early to prevent errors.",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  return (
    <section className="section-padding bg-sky-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Built for real clinical workflows
          </h2>
          <p className="text-slate-600">Focus on the patient, not the paperwork.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="text-center p-6">
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-sky-600">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-slate-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UseCasesSection = () => {
  const cases = [
    {
      title: "Clinics",
      desc: "Handle busy OPDs with faster patient understanding and streamlined workflows.",
      icon: <Users className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Hospitals",
      desc: "Enable consistent patient insights across departments and shift handovers.",
      icon: <Database className="w-6 h-6 text-sky-600" />
    },
    {
      title: "Emergency care",
      desc: "Access critical patient information instantly when every second counts.",
      icon: <Zap className="w-6 h-6 text-sky-600" />
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Designed for different care environments
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AITechnologySection = () => {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">
            AI built to understand medical data
          </h2>
          <div className="space-y-4 mb-10">
            {[
              "Reads lab reports automatically",
              "Extracts clinical values with high precision",
              "Detects abnormal ranges based on context",
              "Tracks trends across time and multiple reports",
              "Summarizes complex patient history into key points"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-slate-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <div className="p-6 bg-sky-100/50 rounded-2xl border border-sky-200">
            <p className="text-sky-800 font-bold flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" /> Assistive AI, designed for doctors
            </p>
            <p className="text-sky-700 text-sm mt-1">
              Our technology is built to augment clinical expertise, not replace clinical judgement.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-white rounded-full shadow-inner flex items-center justify-center p-12 border border-slate-100">
            <div className="w-full h-full bg-slate-50 rounded-full border border-slate-200 flex items-center justify-center relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center">
                  <FileText className="text-sky-500" />
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center">
                  <Activity className="text-emerald-500" />
                </div>
              </motion.div>
              <div className="w-32 h-32 bg-sky-600 rounded-3xl shadow-2xl flex items-center justify-center z-10">
                <Zap className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IntegrationLayer = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
          Works with your existing healthcare systems
        </h2>
        <p className="text-slate-600 mb-16 max-w-2xl mx-auto">
          VDocs integrates into existing workflows without forcing hospitals to replace their current systems.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Clinic software", icon: <Users /> },
            { name: "Hospital EMR", icon: <Database /> },
            { name: "Lab systems", icon: <Activity /> },
            { name: "ABDM ecosystem", icon: <Network /> }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-all border border-slate-100">
                {React.cloneElement(item.icon, { className: "w-8 h-8" })}
              </div>
              <span className="font-bold text-slate-700">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SecurityTrust = () => {
  return (
    <section className="section-padding bg-slate-900 text-white">
      <div className="container-wide grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Healthcare-grade security and privacy
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { title: "Encrypted data", desc: "End-to-end encryption for all patient information.", icon: <Lock /> },
              { title: "Access control", desc: "Granular permissions for clinical staff.", icon: <Users /> },
              { title: "Privacy-first", desc: "Data processed with strict privacy protocols.", icon: <ShieldCheck /> },
              { title: "Compliance", desc: "Meets global healthcare standards.", icon: <CheckCircle2 /> }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-sky-400 mb-3">{item.icon}</div>
                <h4 className="font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-sm">
              <span className="text-white font-bold">Note:</span> Patient data always remains under the control of healthcare providers. We never share or sell patient data.
            </p>
          </div>
        </div>
        <div className="bg-slate-800 p-12 rounded-3xl border border-slate-700 flex items-center justify-center">
          <div className="relative">
            <ShieldCheck className="w-48 h-48 text-sky-500/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Lock className="w-16 h-16 text-sky-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EarlyTraction = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            Built with real clinical feedback
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Pilot clinics onboarding", val: "12+", desc: "Active clinics currently testing the platform." },
            { title: "Patient reports ready", val: "500+", desc: "Reports analyzed with high clinical accuracy." },
            { title: "Practicing doctors", val: "25+", desc: "Clinicians involved in the design process." }
          ].map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="text-4xl font-display font-black text-sky-600 mb-2">{item.val}</div>
              <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SupportedBy = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">Supported By</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 transition-all duration-500">
          <img src={img1} alt="Azure Microsoft for Startups" className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply" />
          <img src={img2} alt="Google for Startups" className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply" />
          <img src={img3} alt="MSME India" className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply" />
          <img src={img4} alt="DPIIT Startup India" className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply" />
          <img src={img5} alt="DPIIT Startup India" className="h-20 sm:h-24 w-auto object-contain mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="section-padding bg-slate-900 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500 via-transparent to-transparent" />
      </div>

      <div className="container-wide relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
          See VDocs with your own patient reports.
        </h2>
        <p className="text-slate-400 mb-10 max-w-xl mx-auto">
          Join the clinics and hospitals already using VDocs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <button className="bg-sky-600 hover:bg-sky-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl active:scale-95">
              Book a Demo
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};


export function Home() {
  return (
    <div className="pt-10">
      <Hero />
      <TrustStrip />
      <ProblemSection />
      <SolutionSection />
      <ProductInterfaceSection />
      <ClinicalBenefitsSection />
      <UseCasesSection />
      <AITechnologySection />
      <IntegrationLayer />
      <SecurityTrust />
      {/* <EarlyTraction />
      <SupportedBy /> */}
      <FinalCTA />
    </div>
  );
}
