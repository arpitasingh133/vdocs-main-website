import { PageLayout } from '../components/PageLayout';
import { Activity } from 'lucide-react';

export function Product() {
  return (
    <PageLayout
      title="Our Product"
      subtitle="One platform that makes scattered patient data readable in seconds."
      icon={Activity}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          VDocs processes patient records so doctors can spend less time searching and more time with patients.
        </p>
        <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Core Capabilities</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Universal Data Extraction:</strong> Instantly process PDFs, scans, and handwritten notes from over 5,000 different lab formats.</li>
          <li><strong>Longitudinal Trend Analysis:</strong> Automatically graph patient vitals and biomarkers over decades of disjointed records.</li>
          <li><strong>Clinical Guideline Referencing:</strong> Built-in abnormal value detection based on current clinical guidelines.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
