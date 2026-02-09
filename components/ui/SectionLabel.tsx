import React from 'react';

interface SectionLabelProps {
  number: string;
  title: string;
  description?: string;
  theme?: 'light' | 'dark';
}

export const SectionLabel: React.FC<SectionLabelProps> = ({ number, title, description, theme = 'light' }) => {
  const textColor = theme === 'dark' ? 'text-white' : 'text-arko-dark';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="flex flex-col gap-4 mb-12 md:mb-0 md:w-1/4 sticky top-24 self-start">
      <span className={`text-xs font-mono opacity-60 ${subTextColor}`}>[{number}]</span>
      <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight ${textColor}`}>{title}</h2>
      {description && (
        <p className={`mt-4 text-sm leading-relaxed max-w-xs ${subTextColor}`}>
          {description}
        </p>
      )}
    </div>
  );
};