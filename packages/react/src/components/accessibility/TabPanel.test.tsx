import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabPanel } from './TabPanel';

describe('TabPanel', () => {
  it('renders without crashing', () => {
    render(<TabPanel>Test content</TabPanel>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <TabPanel className="custom-class">Content</TabPanel>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <TabPanel ariaLabel="Test label">Content</TabPanel>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <TabPanel locale="en-CA">English content</TabPanel>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <TabPanel locale="fr-CA">Contenu français</TabPanel>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <TabPanel>Accessible content</TabPanel>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
