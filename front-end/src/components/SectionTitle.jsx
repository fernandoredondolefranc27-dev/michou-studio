import React from 'react';

const SectionTitle = ({ number, title, subtitle, align = 'left', className = '' }) => {
  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`section-title-wrapper ${alignClass} ${className}`} style={{ marginBottom: '3.5rem' }}>
      {number && (
        <span 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            color: 'var(--color-gold)',
            letterSpacing: '0.2em',
            display: 'block',
            marginBottom: '0.5rem',
            fontStyle: 'italic'
          }}
        >
          — {number}
        </span>
      )}
      {subtitle && (
        <span className="section-subtitle">{subtitle}</span>
      )}
      <h2 className="section-title-large">
        {title}
      </h2>
      <div 
        style={{
          width: '50px',
          height: '1px',
          backgroundColor: 'var(--color-gold)',
          marginTop: '1.25rem',
          marginLeft: align === 'center' ? 'auto' : '0',
          marginRight: align === 'center' ? 'auto' : '0',
          opacity: 0.6
        }} 
      />
    </div>
  );
};

export default SectionTitle;