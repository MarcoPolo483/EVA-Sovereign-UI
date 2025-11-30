import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export interface AccordionProps {
  /**
   * Unique identifier for the component
   */
  id?: string;
  
  /**
   * CSS class name(s) for custom styling
   */
  className?: string;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
  
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
  
  /**
   * Language locale (en-CA, fr-CA)
   */
  locale?: 'en-CA' | 'fr-CA';
}

/**
 * Accordion Component
 * 
 * @component
 * @example
 * `	sx
 * <Accordion>
 *   Content here
 * </Accordion>
 * `
 */
export const Accordion: React.FC<AccordionProps> = ({
  id,
  className = '',
  children,
  ariaLabel,
  locale = 'en-CA'
}) => {
  const { t } = useI18n(locale);
  
  return (
    <div
      id={id}
      className={`eva- ${className}`}
      role="region"
      aria-label={ariaLabel || t('.label')}
    >
      {children}
    </div>
  );
};

Accordion.displayName = 'Accordion';
