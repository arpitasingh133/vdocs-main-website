import React, { ReactNode } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
}

export const PageLayout = ({ title, subtitle, icon: Icon, children }: PageLayoutProps) => {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 min-h-[70vh]">
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          {Icon && (
            <div className="w-16 h-16 bg-sky-50 rounded-2xl shadow-sm border border-sky-100 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-8 h-8 text-sky-600" />
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-8 md:p-12 prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-sky-600 hover:prose-a:text-sky-700 selection:bg-sky-100"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
