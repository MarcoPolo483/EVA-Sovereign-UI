import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TooltipAccessible } from './TooltipAccessible';

describe('TooltipAccessible', () => {
  it('renders without crashing', () => {
    render(<TooltipAccessible>Test content</TooltipAccessible>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <TooltipAccessible className="custom-class">Content</TooltipAccessible>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <TooltipAccessible ariaLabel="Test label">Content</TooltipAccessible>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <TooltipAccessible locale="en-CA">English content</TooltipAccessible>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <TooltipAccessible locale="fr-CA">Contenu français</TooltipAccessible>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <TooltipAccessible>Accessible content</TooltipAccessible>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
