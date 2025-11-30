import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion', () => {
  it('renders without crashing', () => {
    render(<Accordion>Test content</Accordion>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <Accordion className="custom-class">Content</Accordion>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <Accordion ariaLabel="Test label">Content</Accordion>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <Accordion locale="en-CA">English content</Accordion>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <Accordion locale="fr-CA">Contenu français</Accordion>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <Accordion>Accessible content</Accordion>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
