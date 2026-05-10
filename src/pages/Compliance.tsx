import { PageLayout } from '../components/PageLayout';
import { CheckCircle2 } from 'lucide-react';

export function Compliance() {
  return (
    <PageLayout 
      title="Compliance & Certifications" 
      subtitle="Meeting the healthcare data standards that matter."
      icon={CheckCircle2}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          Healthcare runs on trust. We go through external audits and stay compliant with the health data frameworks that apply to us.
        </p>

        <div className="mt-8 space-y-6">
          <div className="p-6 border border-slate-200 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-sky-500" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ayushman Bharat Digital Mission (ABDM)</h3>
            <p className="text-sm">VDocs is integrated into the ABDM ecosystem, enabling structured health records (FHIR) to move between providers with patient consent.</p>
          </div>
          
          {/* <div className="p-6 border border-slate-200 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-emerald-500" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">HIPAA Compliant</h3>
            <p className="text-sm">We maintain strict adherence to the Health Insurance Portability and Accountability Act. We execute Business Associate Agreements (BAAs) with all covered entities.</p>
          </div>

          <div className="p-6 border border-slate-200 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2 h-full bg-purple-500" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">SOC 2 Type II</h3>
            <p className="text-sm">Our infrastructure and operational security processes have been independently verified to meet the AICPA Trust Services Criteria for security, availability, and confidentiality.</p>
          </div> */}
        </div>
      </div>
    </PageLayout>
  );
}
