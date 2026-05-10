import { PageLayout } from '../components/PageLayout';
import { Lock } from 'lucide-react';

export function Privacy() {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How we protect your data and handle healthcare information."
      icon={Lock}
    >
      <div className="space-y-6 text-slate-700 text-base leading-relaxed">
        <p><strong>Last updated: 20-03-2026</strong></p>
        <p>
          VDocs takes the privacy and security of healthcare data seriously. This Privacy Policy explains how
          information is collected, used, and protected when using the VDocs platform and website.
        </p>
        <p>
          VDocs provides AI-powered clinical intelligence tools designed to help healthcare professionals understand patient
          medical reports more efficiently.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Overview</h3>
        <p>
          VDocs is designed to assist healthcare providers in organizing and interpreting patient medical information more
          efficiently.
        </p>
        <p>
          The platform analyzes medical reports and structured health data to generate summaries and highlight relevant clinical
          information for healthcare professionals.
        </p>
        <p>
          VDocs is built with architecture designed to support ABDM-aligned healthcare ecosystems and modern digital health
          workflows.
        </p>
        <p>
          Patient information processed through the platform is handled strictly to support healthcare providers in delivering
          care and improving operational efficiency.
        </p>
        <p>
          VDocs does not use patient data for advertising, profiling, or unrelated commercial purposes.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Information We Collect</h3>
        <p>We may collect the following categories of information when the platform is used.</p>

        <h4 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Account Information</h4>
        <p>When healthcare providers or organizations register for the platform, we may collect:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Name</li>
          <li>Professional email address</li>
          <li>Organization or clinic name</li>
          <li>Contact details</li>
        </ul>

        <h4 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Healthcare Data Provided by Users</h4>
        <p>Healthcare providers may upload or integrate medical reports or patient information for analysis.</p>
        <p>This may include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Laboratory reports</li>
          <li>Diagnostic test results</li>
          <li>Clinical observations</li>
          <li>Health metrics contained within reports</li>
        </ul>
        <p>
          This information is processed only to generate structured summaries and insights for healthcare professionals.
        </p>

        <h4 className="text-lg font-semibold text-slate-800 mt-4 mb-2">Technical and Usage Information</h4>
        <p>We may collect limited technical data to improve system performance and reliability, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Browser type</li>
          <li>Device information</li>
          <li>Platform usage activity</li>
          <li>System logs for security monitoring</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. How Information Is Used</h3>
        <p>Information collected through the platform may be used to:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide AI-powered clinical summaries</li>
          <li>Improve platform functionality and reliability</li>
          <li>Maintain platform security</li>
          <li>Provide user support</li>
          <li>Improve healthcare workflow efficiency</li>
        </ul>
        <p>VDocs does not sell or rent personal or healthcare data to third parties.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Data Ownership and Responsibility</h3>
        <p>
          Healthcare providers and organizations using VDocs remain responsible for the patient information they upload or
          integrate into the platform.
        </p>
        <p>
          VDocs processes such information only for the purpose of enabling the platform's analytical and workflow features.
        </p>
        <p>
          Patient data remains under the control of the healthcare providers using the system.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. AI Processing Transparency</h3>
        <p>
          VDocs uses artificial intelligence to analyze medical reports and extract structured information such as laboratory
          values, trends, and relevant findings.
        </p>
        <p>
          The system is designed to assist healthcare professionals by summarizing available information.
        </p>
        <p><strong>Important clarification:</strong></p>
        <p>
          AI-generated outputs are supportive tools only and do not replace clinical judgment or professional medical
          decision-making.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Data Security</h3>
        <p>Protecting healthcare information matters.</p>
        <p>VDocs implements safeguards designed to protect data, including:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Controlled access to systems</li>
          <li>Infrastructure security measures</li>
          <li>Internal data handling controls</li>
          <li>Monitoring systems to detect unauthorized access</li>
        </ul>
        <p>
          While we take reasonable measures to protect data, no digital system can guarantee absolute security.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. Data Sharing</h3>
        <p>VDocs does not share patient data with third parties except in limited situations such as:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>When required to operate core infrastructure services</li>
          <li>When required by law or legal process</li>
          <li>When explicitly authorized by the healthcare provider using the platform</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Cookies and Website Analytics</h3>
        <p>
          The VDocs website may use cookies or similar technologies to improve website performance and understand user
          interactions.
        </p>
        <p>This information is generally aggregated and does not identify individual users.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Updates to This Policy</h3>
        <p>
          This Privacy Policy may be updated periodically to reflect changes in the platform, legal requirements, or operational
          practices.
        </p>
        <p>The updated version will be posted on this page with a revised date.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. Contact Information</h3>
        <p>If you have questions about this Privacy Policy or data practices, you may contact us at:</p>
        <p>Email: <a href="mailto:contact@vdocs.in" className="text-sky-600 hover:text-sky-700">contact@vdocs.in</a></p>
      </div>
    </PageLayout>
  );
}
