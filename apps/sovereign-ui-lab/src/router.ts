/**
 * Router Configuration
 * Uses Vaadin Router for client-side routing
 */

import { Router } from '@vaadin/router';

// Lazy import pages
export const routes = [
  {
    path: '/',
    component: 'lab-home-page',
    action: async () => {
      await import('./pages/home');
    },
  },
  {
    path: '/scenario-1',
    component: 'lab-scenario-1',
    action: async () => {
      await import('./pages/scenario-1');
    },
  },
  {
    path: '/scenario-2',
    component: 'lab-scenario-2',
    action: async () => {
      await import('./pages/scenario-2');
    },
  },
  {
    path: '/scenario-3',
    component: 'lab-scenario-3',
    action: async () => {
      await import('./pages/scenario-3');
    },
  },
  {
    path: '/devkit/quickstart',
    component: 'lab-devkit-quickstart',
    action: async () => {
      await import('./pages/devkit-quickstart');
    },
  },
  {
    path: '/devkit/playground',
    component: 'lab-devkit-playground',
    action: async () => {
      await import('./pages/devkit-playground');
    },
  },
  {
    path: '/devkit/migration',
    component: 'lab-devkit-migration',
    action: async () => {
      await import('./pages/devkit-migration');
    },
  },
  {
    path: '(.*)',
    redirect: '/',
  },
];

export function initRouter(outlet: HTMLElement): Router {
  const router = new Router(outlet);
  router.setRoutes(routes);
  return router;
}
