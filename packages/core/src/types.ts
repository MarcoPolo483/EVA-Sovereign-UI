/**
 * Official Canada.ca Design System - TypeScript Types
 */

// Framework-agnostic types (ReactNode replaced with any for core package)
export type ComponentChildren = any;

export type Locale = 'en-CA' | 'fr-CA';

export type ButtonVariant = 
  | 'supertask'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'link'
  | 'signin';

export type ButtonSize = 'default' | 'large' | 'small' | 'xs';

export type AlertVariant = 'success' | 'warning' | 'error' | 'info';

export interface I18nCatalog {
  [key: string]: string | I18nCatalog;
}

export interface I18nConfig {
  defaultLocale: Locale;
  supportedLocales: Locale[];
  catalogs: Record<Locale, I18nCatalog>;
}

export interface GCHeaderProps {
  title: string;
  subtitle?: string;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  showSignIn?: boolean;
  onSignIn?: () => void;
}

export interface GCFooterProps {
  locale?: Locale;
}

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  ariaLabel?: string;
  children: ComponentChildren;
}

export interface SkipLinkProps {
  href: string;
  children: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  ariaLabel?: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  children: ComponentChildren;
}

export interface ErrorSummaryItem {
  id: string;
  message: string;
}

export interface ErrorSummaryProps {
  errors: ErrorSummaryItem[];
  title?: string;
}

export interface AlertProps {
  variant: AlertVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  children: ComponentChildren;
}

export interface TableColumn<T = any> {
  key: string;
  header: string;
  sortable?: boolean;
  render?: (row: T) => ComponentChildren;
}

export interface TableProps<T = any> {
  columns: TableColumn<T>[];
  data: T[];
  caption?: string;
  sortBy?: string;
  sortDirection?: 'asc' | 'desc';
  onSort?: (column: string, direction: 'asc' | 'desc') => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ComponentChildren;
}

export interface ToastProps {
  id: string;
  variant: AlertVariant;
  message: string;
  duration?: number;
  onDismiss?: (id: string) => void;
}

export interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export interface ContainerProps {
  children: ComponentChildren;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export interface CardProps {
  title?: string;
  children: ComponentChildren;
  footer?: ComponentChildren;
  className?: string;
}

export interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: ComponentChildren;
}

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

export interface TabItem {
  id: string;
  label: string;
  content: ComponentChildren;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  activeId?: string;
  onChange?: (id: string) => void;
}

export interface AccordionItem {
  id: string;
  header: string;
  content: ComponentChildren;
  defaultExpanded?: boolean;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}
