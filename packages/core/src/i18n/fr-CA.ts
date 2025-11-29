/**
 * Official Canada.ca i18n Catalogs
 * French (Canada) - fr-CA
 */

export const frCA = {
  common: {
    skipToContent: 'Passer au contenu principal',
    loading: 'Chargement...',
    error: 'Erreur',
    success: 'Succès',
    warning: 'Avertissement',
    info: 'Information',
    close: 'Fermer',
    dismiss: 'Ignorer',
    cancel: 'Annuler',
    confirm: 'Confirmer',
    save: 'Enregistrer',
    delete: 'Supprimer',
    edit: 'Modifier',
    submit: 'Soumettre',
    next: 'Suivant',
    previous: 'Précédent',
    search: 'Rechercher',
    filter: 'Filtrer',
    clear: 'Effacer',
    reset: 'Réinitialiser',
  },

  header: {
    governmentOfCanada: 'Gouvernement du Canada',
    languageSelection: 'Sélection de la langue',
    switchToEnglish: 'English',
    signIn: 'Ouvrir une session',
    menu: 'Menu',
    search: 'Rechercher dans Canada.ca',
  },

  footer: {
    about: 'À propos',
    contact: 'Contact',
    terms: 'Avis',
    privacy: 'Confidentialité',
    copyright: '© Sa Majesté le Roi du chef du Canada',
    socialMedia: 'Médias sociaux',
    mobileApps: 'Applications mobiles',
    aboutCanadaCa: 'À propos de Canada.ca',
    aboutGovernment: 'À propos du gouvernement',
  },

  navigation: {
    breadcrumbs: 'Vous êtes ici :',
    mainNavigation: 'Navigation principale',
    footerNavigation: 'Navigation du pied de page',
    pageNavigation: 'Navigation de la page',
  },

  forms: {
    required: 'Obligatoire',
    optional: 'Facultatif',
    errorSummary: 'Résumé des erreurs',
    errorsFound: '{count} erreur(s) trouvée(s)',
    fieldRequired: 'Ce champ est obligatoire',
    invalidEmail: 'Veuillez entrer une adresse courriel valide',
    invalidPhone: 'Veuillez entrer un numéro de téléphone valide',
    invalidPostalCode: 'Veuillez entrer un code postal valide',
    selectOption: 'Veuillez sélectionner une option',
    characterLimit: '{current} sur {max} caractères',
  },

  errors: {
    pageNotFound: 'Page non trouvée',
    serverError: 'Erreur du serveur',
    accessDenied: 'Accès refusé',
    sessionExpired: 'Votre session a expiré',
    tryAgain: 'Veuillez réessayer',
    contactSupport: 'Si le problème persiste, contactez le support',
  },

  accessibility: {
    newWindow: 'S\'ouvre dans une nouvelle fenêtre',
    externalLink: 'Lien externe',
    downloadFile: 'Télécharger le fichier',
    sortAscending: 'Trier par ordre croissant',
    sortDescending: 'Trier par ordre décroissant',
    expandSection: 'Développer la section',
    collapseSection: 'Réduire la section',
    showMore: 'Afficher plus',
    showLess: 'Afficher moins',
  },

  dates: {
    today: 'Aujourd\'hui',
    yesterday: 'Hier',
    tomorrow: 'Demain',
    dateFormat: 'AAAA-MM-JJ',
    lastUpdated: 'Dernière mise à jour :',
    modified: 'Date de modification :',
  },

  eva: {
    title: 'Suite EVA',
    subtitle: 'Assistant virtuel d\'entreprise pour le gouvernement du Canada',
    welcome: 'Bienvenue à la Suite EVA',
    description: 'Un système d\'entreprise complet pour les opérations du gouvernement du Canada',
  },
} as const;
