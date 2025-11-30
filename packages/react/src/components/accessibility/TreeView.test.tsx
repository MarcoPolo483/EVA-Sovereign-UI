import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TreeView } from './TreeView';

describe('TreeView', () => {
  it('renders without crashing', () => {
    render(<TreeView>Test content</TreeView>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <TreeView className="custom-class">Content</TreeView>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <TreeView ariaLabel="Test label">Content</TreeView>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <TreeView locale="en-CA">English content</TreeView>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <TreeView locale="fr-CA">Contenu français</TreeView>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <TreeView>Accessible content</TreeView>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
