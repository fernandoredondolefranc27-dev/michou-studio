import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  onClick, 
  variant = 'primary', // 'primary' | 'outline' | 'text'
  type = 'button',
  disabled = false,
  className = ''
}) => {
  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.95rem 2.2rem',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: '500',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: '1px solid transparent',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden'
  };

  let variantStyle = {};

  if (variant === 'primary') {
    variantStyle = {
      backgroundColor: 'var(--color-gold)',
      color: 'var(--color-black)',
      borderColor: 'var(--color-gold)',
    };
  } else if (variant === 'outline') {
    variantStyle = {
      backgroundColor: 'transparent',
      color: 'var(--color-white)',
      borderColor: 'rgba(212, 167, 44, 0.5)',
    };
  } else if (variant === 'text') {
    variantStyle = {
      backgroundColor: 'transparent',
      color: 'var(--color-gold)',
      border: 'none',
      paddingLeft: '0',
      paddingRight: '0'
    };
  }

  const combinedStyle = { ...baseStyle, ...variantStyle };

  if (to) {
    return (
      <Link 
        to={to} 
        style={combinedStyle} 
        className={`btn-michou btn-${variant} ${className}`}
      >
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      disabled={disabled}
      style={combinedStyle} 
      className={`btn-michou btn-${variant} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;