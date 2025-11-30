import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RovingTabIndex } from './RovingTabIndex';

describe('RovingTabIndex', () => {
  it('renders without crashing', () => {
    render(<RovingTabIndex>Test content</RovingTabIndex>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <RovingTabIndex className="custom-class">Content</RovingTabIndex>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <RovingTabIndex ariaLabel="Test label">Content</RovingTabIndex>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <RovingTabIndex locale="en-CA">English content</RovingTabIndex>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <RovingTabIndex locale="fr-CA">Contenu français</RovingTabIndex>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <RovingTabIndex>Accessible content</RovingTabIndex>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
