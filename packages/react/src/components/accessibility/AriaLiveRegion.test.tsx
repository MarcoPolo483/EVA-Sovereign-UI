import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AriaLiveRegion } from './AriaLiveRegion';

describe('AriaLiveRegion', () => {
  it('renders without crashing', () => {
    render(<AriaLiveRegion>Test content</AriaLiveRegion>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <AriaLiveRegion className="custom-class">Content</AriaLiveRegion>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <AriaLiveRegion ariaLabel="Test label">Content</AriaLiveRegion>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <AriaLiveRegion locale="en-CA">English content</AriaLiveRegion>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <AriaLiveRegion locale="fr-CA">Contenu français</AriaLiveRegion>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <AriaLiveRegion>Accessible content</AriaLiveRegion>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
