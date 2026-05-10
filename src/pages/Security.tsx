import { PageLayout } from '../components/PageLayout';
import { ShieldCheck } from 'lucide-react';

export function Security() {
  return (
    <PageLayout
      title="Security & Trust"
      subtitle="Strong encryption for all patient health information."
      icon={ShieldCheck}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Patient data is private. VDocs was built on one rule: better health tools should never come at the cost of patient privacy.
        </p>

        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Our Security Posture</h3>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="border border-slate-200 p-5 rounded-xl hover:border-sky-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Zero Data Retention</h4>
            <p className="text-sm">We process your data to generate insights, and then we delete it. We do not use your patient data to train our foundational models.</p>
          </div>
          <div className="border border-slate-200 p-5 rounded-xl hover:border-sky-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">End-to-End Encryption</h4>
            <p className="text-sm">All PHI (Personal Health Information) is encrypted at rest (AES-256) and in transit (TLS 1.3) before it ever touches our servers.</p>
          </div>
          <div className="border border-slate-200 p-5 rounded-xl hover:border-sky-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">ABDM Ready</h4>
            <p className="text-sm">Fully ready for the Ayushman Bharat Digital Mission (ABDM) architecture for medical software.</p>
          </div>
          <div className="border border-slate-200 p-5 rounded-xl hover:border-sky-300 transition-colors">
            <h4 className="font-bold text-slate-900 mb-2">Audit Trails</h4>
            <p className="text-sm">Comprehensive logging of every action taken within the platform, available for instant export by compliance officers.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
