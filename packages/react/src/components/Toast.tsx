import { Toaster as Sonner, toast } from 'sonner';
import type { ExternalToast } from 'sonner';

export function Toaster() {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        style: {
          background: 'white',
          color: 'var(--gc-color-text-primary)',
          border: '1px solid #e8e8e8',
          borderRadius: 'var(--gc-radius-base)',
          padding: 'var(--gc-spacing-3)',
          fontSize: '16px',
          fontFamily: 'var(--gc-font-body)',
        },
        className: 'gc-toast',
      }}
    />
  );
}

// Export toast function for use in components
export { toast };
export type { ExternalToast };

// Helper functions with GC Design System styling
export const gcToast = {
  success: (message: string, options?: ExternalToast) => {
    return toast.success(message, {
      ...options,
      style: {
        ...options?.style,
        borderLeft: '4px solid var(--gc-color-success)',
      },
    });
  },
  
  error: (message: string, options?: ExternalToast) => {
    return toast.error(message, {
      ...options,
      style: {
        ...options?.style,
        borderLeft: '4px solid var(--gc-color-error)',
      },
    });
  },
  
  warning: (message: string, options?: ExternalToast) => {
    return toast.warning(message, {
      ...options,
      style: {
        ...options?.style,
        borderLeft: '4px solid var(--gc-color-warning)',
      },
    });
  },
  
  info: (message: string, options?: ExternalToast) => {
    return toast.info(message, {
      ...options,
      style: {
        ...options?.style,
        borderLeft: '4px solid var(--gc-color-link)',
      },
    });
  },
};
