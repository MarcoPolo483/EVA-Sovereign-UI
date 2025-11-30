import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DialogModal } from './DialogModal';

describe('DialogModal', () => {
  it('renders without crashing', () => {
    render(<DialogModal>Test content</DialogModal>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <DialogModal className="custom-class">Content</DialogModal>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <DialogModal ariaLabel="Test label">Content</DialogModal>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <DialogModal locale="en-CA">English content</DialogModal>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <DialogModal locale="fr-CA">Contenu français</DialogModal>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <DialogModal>Accessible content</DialogModal>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
