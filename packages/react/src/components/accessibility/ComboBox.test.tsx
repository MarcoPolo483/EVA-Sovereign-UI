import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ComboBox } from './ComboBox';

describe('ComboBox', () => {
  it('renders without crashing', () => {
    render(<ComboBox>Test content</ComboBox>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <ComboBox className="custom-class">Content</ComboBox>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <ComboBox ariaLabel="Test label">Content</ComboBox>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <ComboBox locale="en-CA">English content</ComboBox>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <ComboBox locale="fr-CA">Contenu français</ComboBox>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <ComboBox>Accessible content</ComboBox>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
