/**
 * EVA Sovereign UI Lab - Main Entry Point
 * 
 * Initializes the application:
 * - Loads theme engine and i18n
 * - Sets up routing
 * - Renders app shell
 */

import './app-shell';
import { initializeProviders } from './providers/theme-provider';
import { initRouter } from './router';

// Import global styles
import './styles/global.css';

// Initialize providers (theme + i18n)
async function init() {
  const loadingEl = document.querySelector('.loading');
  
  try {
    // Initialize theme and i18n
    await initializeProviders();
    
    // Get app container
    const appEl = document.getElementById('app');
    if (!appEl) throw new Error('App container not found');
    
    // Remove loading indicator
    if (loadingEl) loadingEl.remove();
    
    // Render app shell
    appEl.innerHTML = '<lab-app-shell></lab-app-shell>';
    
    // Initialize router after app shell is rendered
    setTimeout(() => {
      const outlet = document.querySelector('#router-outlet');
      if (outlet) {
        initRouter(outlet as HTMLElement);
      }
    }, 100);
    
    console.log('✅ EVA Sovereign UI Lab initialized');
  } catch (error) {
    console.error('❌ Failed to initialize lab:', error);
    if (loadingEl) {
      loadingEl.textContent = 'Failed to load. Please refresh the page.';
      loadingEl.setAttribute('role', 'alert');
    }
  }
}

// Start the app
init();
