import { PageLayout } from '../components/PageLayout';
import { Database } from 'lucide-react';

export function DataSafety() {
  return (
    <PageLayout 
      title="Data Safety" 
      subtitle="How we protect your clinical information against modern threats."
      icon={Database}
    >
      <div className="space-y-6 text-slate-700 text-lg leading-relaxed">
        <p>
          At VDocs, safety isn't just a compliance checkbox. Our infrastructure is built to isolate, protect, and monitor data at every layer.
        </p>

        <ul className="list-disc pl-6 space-y-4 mt-8">
          <li><strong>Encryption at Rest:</strong> All databases, backups, and file storage are encrypted using AES-256 block-level encryption.</li>
          <li><strong>Encryption in Transit:</strong> Data is secured using TLS 1.3 whenever it moves between our servers or to your browser.</li>
          <li><strong>Role-Based Access Control (RBAC):</strong> Within clinical environments, access to specific patient records is governed by strict organizational permissions.</li>
          <li><strong>Network Isolation:</strong> Our processing nodes are deployed in private Virtual Private Clouds (VPCs) with no direct inbound internet access.</li>
          <li><strong>Vulnerability Scanning:</strong> Continuous automated scanning of our dependencies, container images, and web applications.</li>
        </ul>
      </div>
    </PageLayout>
  );
}
