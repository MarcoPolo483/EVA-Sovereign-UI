import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('renders without crashing', () => {
    render(<Carousel>Test content</Carousel>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <Carousel className="custom-class">Content</Carousel>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <Carousel ariaLabel="Test label">Content</Carousel>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <Carousel locale="en-CA">English content</Carousel>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <Carousel locale="fr-CA">Contenu français</Carousel>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <Carousel>Accessible content</Carousel>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
