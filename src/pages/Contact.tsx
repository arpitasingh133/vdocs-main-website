import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Network } from 'lucide-react';

const SHEETS_URL = "https://script.google.com/macros/s/AKfycbxKUxIUu95hsIUP2YhhPKWlCoEk61IEpwlG5s6jNlPXamUAaNWquN_ddnZydFQ6m3Q6/exec";

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [clinic, setClinic] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !phone) return;

    setStatus('submitting');

    const body = new URLSearchParams({ name, phone, designation, clinic });

    try {
      await fetch(SHEETS_URL, { method: 'POST', body, mode: 'no-cors' });
      setStatus('success');
      setName(''); setPhone(''); setDesignation(''); setClinic('');
    } catch {
      setStatus('error');
    }
  }

  return (
    <PageLayout
      title="Contact Us"
      subtitle="We'd love to hear from you."
      icon={Network}
    >
      <div className="space-y-10 text-slate-700 text-base leading-relaxed">
        <p>
          Whether you're a clinic exploring VDocs, a healthcare organization interested in implementing the platform, or a
          partner looking to collaborate, our team is here to help.
        </p>

        {/* Book a Demo */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Product Demos</h3>
          <p className="mb-6">
            Interested in seeing how VDocs works in real clinical workflows?<br />
            Book a demo with our team to understand how the platform can help organize patient reports and generate AI-powered
            clinical summaries.
          </p>

          {status === 'success' ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 font-medium text-center">
              Thanks! We'll be in touch shortly to schedule your demo.
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Designation</label>
                <input
                  type="text"
                  value={designation}
                  onChange={e => setDesignation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="e.g. Cardiologist, Medical Director"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Clinic / Hospital</label>
                <input
                  type="text"
                  value={clinic}
                  onChange={e => setClinic(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 transition-all outline-none"
                  placeholder="Name of your clinic or hospital"
                />
              </div>
              {status === 'error' && (
                <p className="text-red-600 text-sm">Something went wrong. Please try emailing us directly at contact@vdocs.in.</p>
              )}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="bg-sky-600 hover:bg-sky-700 disabled:opacity-60 disabled:cursor-not-allowed text-white px-8 py-3 rounded-xl font-bold transition-all w-full"
              >
                {status === 'submitting' ? 'Submitting...' : 'Book Demo'}
              </button>
            </form>
          )}
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Support</h3>
          <p className="mb-2">
            If you are already using VDocs and need assistance with the platform, our support team is available to help.
          </p>
          <p>
            Email:{' '}
            <a href="mailto:support@vdocs.in" className="text-sky-600 hover:text-sky-700">
              support@vdocs.in
            </a>
          </p>
        </div>

        {/* Partnerships */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Partnerships &amp; Collaborations</h3>
          <p className="mb-2">
            For hospital partnerships, integrations, research collaborations, or other business inquiries, please reach out to us.
          </p>
          <p>
            Email:{' '}
            <a href="mailto:contact@vdocs.in" className="text-sky-600 hover:text-sky-700">
              contact@vdocs.in
            </a>
          </p>
        </div>

        {/* Phone */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
          <p className="mb-2">
            You may also contact us directly during business hours (10AM – 6PM, Monday - Friday)
          </p>
          <p>
            Phone:{' '}
            <a href="tel:+919315954217" className="text-sky-600 hover:text-sky-700">
              +91 9315954217
            </a>
          </p>
        </div>

        {/* Office */}
        <div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Office</h3>
          <address className="not-italic">
            Sector 52, Noida, UP, 201301, India
          </address>
        </div>

        {/* Note */}
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
          <p className="font-bold text-slate-900 mb-1">VDocs</p>
          <p className="text-slate-600 text-sm">
            VDocs is a software platform designed to assist healthcare professionals in organizing and understanding patient
            reports. The platform does not provide medical advice.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
