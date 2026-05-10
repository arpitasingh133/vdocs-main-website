import { PageLayout } from '../components/PageLayout';
import { FileText } from 'lucide-react';

export function Terms() {
  return (
    <PageLayout
      title="Terms and Conditions"
      subtitle="Please read these terms carefully before using the VDocs platform."
      icon={FileText}
    >
      <div className="space-y-6 text-slate-700 text-base leading-relaxed">
        <p><strong>Last Updated: 20-03-2026</strong></p>
        <p>
          These Terms and Conditions ("Terms") govern your access to and use of the VDocs website and platform. By accessing
          or using VDocs, you agree to comply with and be bound by these Terms.
        </p>
        <p>
          If you do not agree with these Terms, you should not access or use the platform.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. About VDocs</h3>
        <p>
          VDocs provides software tools designed to assist healthcare professionals in organizing and understanding patient
          medical reports.
        </p>
        <p>
          The platform analyzes clinical reports and extracts structured information to generate summaries that may help
          improve healthcare workflows.
        </p>
        <p>
          VDocs is a software platform and does not provide medical services or medical advice.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Eligibility</h3>
        <p>By using the platform, you confirm that:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>You are legally capable of entering into a binding agreement.</li>
          <li>You are using the platform in accordance with applicable laws and regulations.</li>
          <li>You will use the platform only for legitimate and lawful purposes.</li>
        </ul>
        <p>
          Healthcare professionals and organizations using the platform are responsible for ensuring compliance with any
          applicable healthcare regulations.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. User Account</h3>
        <p>Certain features of the platform may require account registration.</p>
        <p>Users are responsible for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Maintaining the confidentiality of account credentials</li>
          <li>Ensuring that information provided during registration is accurate</li>
          <li>Notifying us of any unauthorized access to their account</li>
        </ul>
        <p>You are responsible for all activities conducted through your account.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Acceptable Use</h3>
        <p>Users agree not to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use the platform for unlawful purposes</li>
          <li>Attempt unauthorized access to the platform or systems</li>
          <li>Upload malicious software or harmful content</li>
          <li>Misuse patient or healthcare data</li>
          <li>Attempt to reverse engineer, copy, or replicate the platform technology</li>
          <li>Interfere with the operation or security of the platform</li>
        </ul>
        <p>Violation of these rules may result in suspension or termination of access.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Intellectual Property</h3>
        <p>
          All software, technology, content, design elements, and materials associated with VDocs are the intellectual property
          of VDocs or its licensors.
        </p>
        <p>
          Users are granted a limited, non-exclusive, non-transferable license to access and use the platform solely for its
          intended purposes.
        </p>
        <p>
          Users may not copy, distribute, reproduce, or create derivative works from any part of the platform without written
          permission.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Healthcare Data Responsibility</h3>
        <p>
          Healthcare providers and organizations using the platform are responsible for the patient data they upload, manage,
          or process through the platform.
        </p>
        <p>
          Users must ensure that their use of the platform complies with applicable laws, professional obligations, and
          healthcare data protection requirements.
        </p>
        <p>VDocs processes information only to provide the functionality of the platform.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">7. AI and Technology Disclaimer</h3>
        <p>
          The VDocs platform uses artificial intelligence and automated systems to analyze medical reports and generate
          structured summaries.
        </p>
        <p>
          These summaries are intended to assist healthcare professionals by highlighting relevant information within reports.
        </p>
        <p>
          AI-generated outputs are informational tools only and should not be interpreted as medical advice, diagnosis, or
          treatment recommendations.
        </p>
        <p>All clinical decisions must be made by qualified healthcare professionals.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">8. Service Availability</h3>
        <p>
          We strive to maintain reliable access to the platform, but uninterrupted or error-free service cannot be guaranteed.
        </p>
        <p>
          The platform may occasionally be unavailable due to maintenance, updates, or technical issues.
        </p>
        <p>
          VDocs reserves the right to modify, suspend, or discontinue parts of the platform when necessary.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">9. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, VDocs shall not be liable for any indirect, incidental, or consequential
          damages arising from the use of the platform.
        </p>
        <p>
          Users are responsible for verifying information generated by the platform before making clinical or operational
          decisions.
        </p>
        <p>
          VDocs is not responsible for any decisions made by healthcare professionals based on information processed by the
          platform.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">10. Termination</h3>
        <p>
          VDocs reserves the right to suspend or terminate user access to the platform if these Terms are violated or if the
          platform is used in a manner that could harm the system or other users.
        </p>
        <p>Users may discontinue use of the platform at any time.</p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">11. Changes to These Terms</h3>
        <p>We may update these Terms from time to time.</p>
        <p>Updated versions will be posted on this page with a revised "Last Updated" date.</p>
        <p>
          Continued use of the platform after changes are posted constitutes acceptance of the updated Terms.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">12. Governing Law</h3>
        <p>
          These Terms shall be governed by and interpreted in accordance with the laws of India.
        </p>
        <p>
          Any disputes arising from these Terms shall be subject to the jurisdiction of the courts located in [Insert City, India].
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">13. Contact Information</h3>
        <p>If you have questions regarding these Terms and Conditions, please contact us at:</p>
        <p>Email: <a href="mailto:contact@vdocs.in" className="text-sky-600 hover:text-sky-700">contact@vdocs.in</a></p>
      </div>
    </PageLayout>
  );
}
