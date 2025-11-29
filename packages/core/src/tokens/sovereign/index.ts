/**
 * Sovereign Profile Registry
 * 
 * Central registry for all Five Eyes government design system profiles
 * Provides unified access to sovereign tokens and configuration
 */

import { canadaGC, type CanadaGCTokens } from './canada-gc.js';
import { usFederal, type USFederalTokens } from './us-federal.js';
import { ukGov, type UKGovTokens } from './uk-gov.js';
import { australiaGov, type AustraliaGovTokens } from './australia-gov.js';
import { newZealandGov, type NewZealandGovTokens } from './nz-gov.js';

/**
 * Union type of all sovereign token types
 */
export type SovereignTokens = 
  | CanadaGCTokens 
  | USFederalTokens 
  | UKGovTokens 
  | AustraliaGovTokens 
  | NewZealandGovTokens;

/**
 * Sovereign profile IDs
 */
export type SovereignProfileId = 
  | 'canada-gc'
  | 'us-federal'
  | 'uk-gov'
  | 'australia-gov'
  | 'nz-gov';

/**
 * Five Eyes Alliance member metadata
 */
export interface FiveEyesMember {
  country: string;
  countryCode: string;
  flag: string;
  officialName: string;
  designSystemUrl: string;
  wcagCompliance: 'AA' | 'AAA';
  bilingualSupport: boolean;
  supportedLanguages: string[];
}

/**
 * Registry of all sovereign profiles
 */
export const SOVEREIGN_PROFILES: Record<SovereignProfileId, SovereignTokens> = {
  'canada-gc': canadaGC,
  'us-federal': usFederal,
  'uk-gov': ukGov,
  'australia-gov': australiaGov,
  'nz-gov': newZealandGov,
} as const;

/**
 * Five Eyes member metadata
 */
export const FIVE_EYES_MEMBERS: Record<SovereignProfileId, FiveEyesMember> = {
  'canada-gc': {
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    officialName: 'Government of Canada / Gouvernement du Canada',
    designSystemUrl: 'https://design.canada.ca/',
    wcagCompliance: 'AAA',
    bilingualSupport: true,
    supportedLanguages: ['English', 'French'],
  },
  'us-federal': {
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    officialName: 'United States Federal Government',
    designSystemUrl: 'https://designsystem.digital.gov/',
    wcagCompliance: 'AA',
    bilingualSupport: false,
    supportedLanguages: ['English', 'Spanish (partial)'],
  },
  'uk-gov': {
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    officialName: 'United Kingdom Government',
    designSystemUrl: 'https://design-system.service.gov.uk/',
    wcagCompliance: 'AA',
    bilingualSupport: true,
    supportedLanguages: ['English', 'Welsh'],
  },
  'australia-gov': {
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    officialName: 'Australian Government',
    designSystemUrl: 'https://designsystem.gov.au/',
    wcagCompliance: 'AA',
    bilingualSupport: false,
    supportedLanguages: ['English'],
  },
  'nz-gov': {
    country: 'New Zealand',
    countryCode: 'NZ',
    flag: '🇳🇿',
    officialName: 'New Zealand Government / Te Kāwanatanga o Aotearoa',
    designSystemUrl: 'https://design-system-alpha.digital.govt.nz/',
    wcagCompliance: 'AA',
    bilingualSupport: true,
    supportedLanguages: ['English', 'Te Reo Māori'],
  },
} as const;

/**
 * Default sovereign profile (Canada GC)
 */
export const DEFAULT_SOVEREIGN_PROFILE: SovereignProfileId = 'canada-gc';

/**
 * Get a sovereign profile by ID
 */
export function getSovereignProfile(id: SovereignProfileId): SovereignTokens {
  return SOVEREIGN_PROFILES[id];
}

/**
 * Get Five Eyes member metadata
 */
export function getFiveEyesMember(id: SovereignProfileId): FiveEyesMember {
  return FIVE_EYES_MEMBERS[id];
}

/**
 * Get all available sovereign profile IDs
 */
export function getAllSovereignProfileIds(): SovereignProfileId[] {
  return Object.keys(SOVEREIGN_PROFILES) as SovereignProfileId[];
}

/**
 * Check if a profile ID is valid
 */
export function isValidSovereignProfile(id: string): id is SovereignProfileId {
  return id in SOVEREIGN_PROFILES;
}

/**
 * Get profile by locale (find best match)
 */
export function getSovereignProfileByLocale(locale: string): SovereignTokens {
  const profiles = Object.values(SOVEREIGN_PROFILES) as SovereignTokens[];
  
  // Try exact match first
  const exactMatch = profiles.find(p => 
    (p.supportedLocales as readonly string[]).includes(locale)
  );
  if (exactMatch) return exactMatch;
  
  // Try language match (e.g., 'en' matches 'en-US', 'en-GB', etc.)
  const languageCode = locale.split('-')[0];
  const languageMatch = profiles.find(p =>
    (p.supportedLocales as readonly string[]).some(l => l.startsWith(languageCode))
  );
  if (languageMatch) return languageMatch;
  
  // Default to Canada GC
  return canadaGC;
}

/**
 * Export all sovereign tokens
 */
export {
  canadaGC,
  usFederal,
  ukGov,
  australiaGov,
  newZealandGov,
};

/**
 * Export all sovereign token types
 */
export type {
  CanadaGCTokens,
  USFederalTokens,
  UKGovTokens,
  AustraliaGovTokens,
  NewZealandGovTokens,
};
