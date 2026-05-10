import { PageLayout } from '../components/PageLayout';
import { Network } from 'lucide-react';

export function Technology() {
  return (
    <PageLayout 
      title="AI Technology" 
      subtitle="Purpose-built machine learning for complex medical data."
      icon={Network}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          General-purpose LLMs hallucinate. Medical text is incredibly dense, unstandardized, and full of esoteric abbreviations. That's why we didn't use a general-purpose model.
        </p>
        <p>
          Our engine, <strong>VDocs Cortex</strong>, is built against clinical guidelines from standard medical boards.
        </p>

        <div className="mt-8 bg-slate-900 text-slate-300 p-8 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-4">Under the Hood</h3>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0" />
              <span><strong>Multimodal ingestion pipeline:</strong> Converts images, PDFs, HL7 feeds, and handwritten documents into structured FHIR resources.</span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0" />
              <span><strong>Temporal abstraction:</strong> Automatically groups sequential labs into meaningful medical narratives ("Persistent microalbuminuria over 6 months").</span>
            </li>
            <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0" />
              <span><strong>Grounding & Citation:</strong> Every claim the AI makes contains a direct link back to the exact pixel coordinates in the source document.</span>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
