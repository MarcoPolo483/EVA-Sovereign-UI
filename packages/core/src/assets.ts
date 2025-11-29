/**
 * Canada.ca Visual Assets
 * Official Government of Canada branding elements
 */

/**
 * Official Canada Flag SVG
 * Red: #C8102E (Canada wordmark official color)
 */
export const CanadaFlagSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" aria-label="Canada Flag">
  <rect fill="#C8102E" width="32" height="32"/>
  <path fill="#FFFFFF" d="M16,8 L18,12 L22,12 L19,15 L20,19 L16,16 L12,19 L13,15 L10,12 L14,12 Z"/>
</svg>`;

/**
 * Government of Canada Wordmark - English
 * Official bilingual wordmark (horizontal layout)
 */
export const GCWordmarkEN = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" aria-label="Government of Canada">
  <text x="10" y="30" font-family="Lato" font-size="18" font-weight="bold" fill="#333">Government of Canada</text>
</svg>`;

/**
 * Government of Canada Wordmark - French
 * Gouvernement du Canada
 */
export const GCWordmarkFR = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" aria-label="Gouvernement du Canada">
  <text x="10" y="30" font-family="Lato" font-size="18" font-weight="bold" fill="#333">Gouvernement du Canada</text>
</svg>`;

/**
 * Symbol of the Government of Canada (WMMS - Word Mark and Symbol)
 * Black version for footer
 */
export const GCSymbolBlack = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" aria-label="Symbol of the Government of Canada">
  <path fill="#000000" d="M15,5 L17,9 L21,9 L18,12 L19,16 L15,13 L11,16 L12,12 L9,9 L13,9 Z"/>
</svg>`;

export const ASSET_PATHS = {
  flag: '/assets/canada-ca/flag.svg',
  wordmarkEN: '/assets/canada-ca/wordmark-en.svg',
  wordmarkFR: '/assets/canada-ca/wordmark-fr.svg',
  symbolBlack: '/assets/canada-ca/symbol-black.svg',
} as const;
