import { PageLayout } from '../components/PageLayout';
import { Users } from 'lucide-react';

export function Solutions() {
  return (
    <PageLayout 
      title="Clinical Solutions" 
      subtitle="AI tools that fit different clinical environments."
      icon={Users}
    >
      <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
        <p>
          Healthcare settings vary a lot. VDocs is set up to work across different environments without requiring major workflow overhauls.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Small Clinics</h3>
            <p className="text-base">For independent practitioners, VDocs acts as an intelligent medical assistant. Quickly scan incoming lab results and instantly grasp the context before the patient walks in the door.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">General Hospitals</h3>
            <p className="text-base">Deploys on top of your existing EMR. Pulls data across departments so doctors have full patient context during shift handovers.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Specialty Centers</h3>
            <p className="text-base">Models tuned to specific biomarkers (Oncology, Cardiology) that flag multi-variable risks across long patient histories.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Emergency Care</h3>
            <p className="text-base">When seconds count, VDocs rapidly synthesizes fetched external records to deliver critical allergies, conditions, and recent interventions to the attending physician.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
