import { PageLayout } from '../components/PageLayout';
import { Users } from 'lucide-react';

export function About() {
  return (
    <PageLayout 
      title="About Us"
      subtitle="The team building better tools for doctors."
      icon={Users}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          VDocs started from a simple frustration: doctors were spending more time hunting through disorganized charts than actually talking to their patients.
        </p>
        <p>
          We set out to bridge modern AI with the messy, unstandardized reality of medical records as they actually exist in clinics.
        </p>

        {/* <div className="mt-10 mb-8 flex flex-col items-center p-8 bg-sky-50 rounded-2xl border border-sky-100">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <img 
              src="https://picsum.photos/seed/founder/300/300" 
              alt="Arpita" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Arpita</h3>
          <p className="text-sky-700 font-medium">Founder & CEO</p>
          <p className="text-sm mt-4 text-center text-slate-600 max-w-lg">
            "We aren't trying to replace doctors. We are trying to give them their time back. A doctor's value is in their empathy and decision-making, not their ability to skim PDFs."
          </p>
        </div> */}
      </div>
    </PageLayout>
  );
}
