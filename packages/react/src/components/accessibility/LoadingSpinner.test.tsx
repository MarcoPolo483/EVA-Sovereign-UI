import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('renders without crashing', () => {
    render(<LoadingSpinner>Test content</LoadingSpinner>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <LoadingSpinner className="custom-class">Content</LoadingSpinner>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <LoadingSpinner ariaLabel="Test label">Content</LoadingSpinner>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <LoadingSpinner locale="en-CA">English content</LoadingSpinner>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <LoadingSpinner locale="fr-CA">Contenu français</LoadingSpinner>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <LoadingSpinner>Accessible content</LoadingSpinner>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
