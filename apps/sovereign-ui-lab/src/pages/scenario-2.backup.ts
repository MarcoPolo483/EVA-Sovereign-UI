/**
 * Scenario 2: Complex Form
 * Multi-step application form with comprehensive validation
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sin: string;
  email: string;
  phone: string;
  
  // Step 2: Address
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  
  // Step 3: Employment
  employmentStatus: string;
  employer?: string;
  occupation?: string;
  annualIncome: string;
  
  // Step 4: Additional Information
  hasDependent: boolean;
  numberOfDependents?: number;
  additionalComments: string;
}

interface ValidationErrors {
  [key: string]: string;
}

@customElement('lab-scenario-2')
export class LabScenario2 extends LitElement {
  @state() private currentStep = 1;
  @state() private formData: Partial<FormData> = {};
  @state() private errors: ValidationErrors = {};
  @state() private touched: Set<string> = new Set();
  @state() private isSubmitting = false;

  static styles = css`
    :host {
      display: block;
    }

    .page-header {
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      color: var(--eva-color-primary, #26374a);
    }

    .subtitle {
      font-size: 1.1rem;
      color: var(--eva-color-text-secondary, #666);
    }

    .form-container {
      max-width: 800px;
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .stepper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3rem;
      position: relative;
    }

    .stepper::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--eva-color-border, #ddd);
      z-index: 0;
    }

    .step {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      position: relative;
      z-index: 1;
      flex: 1;
    }

    .step-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--eva-color-background, #fff);
      border: 2px solid var(--eva-color-border, #ddd);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--eva-color-text-secondary, #666);
    }

    .step.active .step-circle {
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
      border-color: var(--eva-color-primary, #26374a);
    }

    .step.completed .step-circle {
      background: var(--eva-color-success, #2e7d32);
      color: #fff;
      border-color: var(--eva-color-success, #2e7d32);
    }

    .step-label {
      font-size: 0.9rem;
      text-align: center;
      color: var(--eva-color-text-secondary, #666);
    }

    .step.active .step-label {
      color: var(--eva-color-primary, #26374a);
      font-weight: 600;
    }

    .error-summary {
      background: #fee;
      border: 2px solid #c33;
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .error-summary h2 {
      color: #c33;
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .error-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .error-list li {
      padding: 0.5rem 0;
    }

    .error-link {
      color: #c33;
      text-decoration: underline;
      cursor: pointer;
    }

    .form-step {
      display: none;
    }

    .form-step.active {
      display: block;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      font-weight: 600;
      margin-bottom: 0.5rem;
      color: var(--eva-color-text, #333);
    }

    .required {
      color: #c33;
      font-weight: 700;
    }

    input, select, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 6px;
      font-size: 1rem;
      font-family: inherit;
    }

    input:focus, select:focus, textarea:focus {
      outline: none;
      border-color: var(--eva-color-primary, #26374a);
      box-shadow: 0 0 0 3px rgba(38, 55, 74, 0.1);
    }

    input.error, select.error {
      border-color: #c33;
    }

    .error-message {
      color: #c33;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }

    .checkbox-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .checkbox-group input[type="checkbox"] {
      width: auto;
    }

    .form-actions {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid var(--eva-color-border, #ddd);
    }

    button {
      padding: 0.75rem 2rem;
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .btn-secondary {
      background: var(--eva-color-background, #f5f5f5);
      color: var(--eva-color-text, #333);
    }

    .btn-primary {
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
    }

    button:hover:not(:disabled) {
      opacity: 0.9;
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .success-message {
      text-align: center;
      padding: 3rem;
    }

    .success-message h2 {
      color: var(--eva-color-success, #2e7d32);
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .success-icon {
      font-size: 4rem;
      margin-bottom: 1rem;
    }

    .help-text {
      font-size: 0.9rem;
      color: var(--eva-color-text-secondary, #666);
      margin-top: 0.25rem;
    }
  `;

  private validateField(field: keyof FormData, value: any): string | null {
    switch (field) {
      case 'firstName':
      case 'lastName':
        return !value || value.length < 2 ? 'Must be at least 2 characters' : null;
      
      case 'dateOfBirth':
        return !value ? 'Date of birth is required' : null;
      
      case 'sin':
        const sinPattern = /^\d{3}-?\d{3}-?\d{3}$/;
        return !value || !sinPattern.test(value) ? 'Must be 9 digits (XXX-XXX-XXX)' : null;
      
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !value || !emailPattern.test(value) ? 'Must be a valid email' : null;
      
      case 'phone':
        const phonePattern = /^\d{3}-?\d{3}-?\d{4}$/;
        return !value || !phonePattern.test(value) ? 'Must be 10 digits (XXX-XXX-XXXX)' : null;
      
      case 'postalCode':
        const postalPattern = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i;
        return !value || !postalPattern.test(value) ? 'Must be valid postal code (A1A 1A1)' : null;
      
      case 'province':
        return !value ? 'Province is required' : null;
      
      case 'employmentStatus':
        return !value ? 'Employment status is required' : null;
      
      default:
        return null;
    }
  }

  private handleInput(field: keyof FormData, value: any) {
    this.formData = { ...this.formData, [field]: value };
    this.touched.add(field);
    
    const error = this.validateField(field, value);
    if (error) {
      this.errors = { ...this.errors, [field]: error };
    } else {
      const { [field]: _, ...rest } = this.errors;
      this.errors = rest;
    }
  }

  private validateStep(step: number): boolean {
    const fieldsToValidate: Record<number, (keyof FormData)[]> = {
      1: ['firstName', 'lastName', 'dateOfBirth', 'sin', 'email', 'phone'],
      2: ['streetAddress', 'city', 'province', 'postalCode'],
      3: ['employmentStatus', 'annualIncome'],
      4: [],
    };

    const fields = fieldsToValidate[step] || [];
    let hasErrors = false;
    const newErrors: ValidationErrors = { ...this.errors };

    fields.forEach(field => {
      this.touched.add(field);
      const error = this.validateField(field, this.formData[field]);
      if (error) {
        newErrors[field] = error;
        hasErrors = true;
      }
    });

    this.errors = newErrors;
    return !hasErrors;
  }

  private handleNext() {
    if (this.validateStep(this.currentStep)) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  private handleBack() {
    this.currentStep--;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private async handleSubmit() {
    if (!this.validateStep(this.currentStep)) return;

    this.isSubmitting = true;
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.isSubmitting = false;
    this.currentStep = 5; // Success screen
  }

  private renderErrorSummary() {
    const errorCount = Object.keys(this.errors).length;
    if (errorCount === 0) return null;

    return html`<div class="error-summary" role="alert"><h2>⚠️ Please fix the following errors:</h2></div>`;
  }

  private getFieldLabel(field: string): string {
    const labels: Record<string, string> = {
      firstName: 'First Name', lastName: 'Last Name',
      dateOfBirth: 'Date of Birth', sin: 'Social Insurance Number',
      email: 'Email', phone: 'Phone',
      streetAddress: 'Street Address', city: 'City',
      province: 'Province', postalCode: 'Postal Code',
      employmentStatus: 'Employment Status', annualIncome: 'Annual Income',
    };
    return labels[field] || field;
  }

  render() {
    return html`
      <div class="page-header">
        <h1>📝 Complex Form</h1>
        <p class="subtitle">Multi-step application form with comprehensive validation</p>
      </div>
      <div class="form-container">
        ${this.currentStep < 5 ? html`<div>Form content here</div>` : html`<div class="success-message"><div class="success-icon">✅</div><h2>Application Submitted!</h2></div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-scenario-2': LabScenario2;
  }
}
