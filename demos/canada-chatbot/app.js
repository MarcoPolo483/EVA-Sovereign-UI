// Canada.ca Chatbot Demo - Application Logic
// Demonstrates EVA Chat Panel with RAG backend integration

// i18n translations
const translations = {
  'en-CA': {
    'gov-canada': 'Government of Canada',
    'lang-toggle': 'Français',
    'hero-title': 'Canada.ca AI Assistant',
    'hero-description': 'Get instant answers to your questions about Government of Canada services, programs, and benefits. Our AI-powered assistant is available 24/7 in both official languages.',
    'feature-1-title': '🌐 Bilingual Support',
    'feature-1-desc': 'Seamlessly switch between English and French at any time during your conversation.',
    'feature-2-title': '🔒 Secure & Private',
    'feature-2-desc': 'Your conversations are encrypted and never stored. We respect your privacy.',
    'feature-3-title': '⚡ Real-time Answers',
    'feature-3-desc': 'Powered by advanced AI technology to provide accurate, up-to-date information.',
    'feature-4-title': '♿ Accessible',
    'feature-4-desc': 'WCAG 2.2 AAA compliant with full keyboard navigation and screen reader support.',
    'chat-title': 'Ask a Question',
    'status-online': 'Online',
    'suggestions-title': 'Popular Questions:',
    'suggestion-1': 'How do I apply for a passport?',
    'suggestion-2': 'What benefits am I eligible for?',
    'suggestion-3': 'How do I file my taxes online?',
    'suggestion-4': 'Where can I find health services?',
    'suggestion-5': 'How do I renew my driver\'s license?',
    'footer-text': '© 2025 Government of Canada',
    'footer-privacy': 'Privacy',
    'footer-terms': 'Terms of Use',
    'footer-accessibility': 'Accessibility',
    'footer-contact': 'Contact Us',
  },
  'fr-CA': {
    'gov-canada': 'Gouvernement du Canada',
    'lang-toggle': 'English',
    'hero-title': 'Assistant IA Canada.ca',
    'hero-description': 'Obtenez des réponses instantanées à vos questions sur les services, programmes et prestations du gouvernement du Canada. Notre assistant alimenté par IA est disponible 24/7 dans les deux langues officielles.',
    'feature-1-title': '🌐 Soutien Bilingue',
    'feature-1-desc': 'Passez facilement de l\'anglais au français à tout moment pendant votre conversation.',
    'feature-2-title': '🔒 Sécurisé et Privé',
    'feature-2-desc': 'Vos conversations sont cryptées et jamais stockées. Nous respectons votre vie privée.',
    'feature-3-title': '⚡ Réponses en Temps Réel',
    'feature-3-desc': 'Alimenté par une technologie IA avancée pour fournir des informations précises et à jour.',
    'feature-4-title': '♿ Accessible',
    'feature-4-desc': 'Conforme WCAG 2.2 AAA avec navigation au clavier complète et support de lecteur d\'écran.',
    'chat-title': 'Posez une Question',
    'status-online': 'En ligne',
    'suggestions-title': 'Questions Populaires :',
    'suggestion-1': 'Comment puis-je demander un passeport?',
    'suggestion-2': 'À quelles prestations ai-je droit?',
    'suggestion-3': 'Comment produire ma déclaration de revenus en ligne?',
    'suggestion-4': 'Où puis-je trouver des services de santé?',
    'suggestion-5': 'Comment renouveler mon permis de conduire?',
    'footer-text': '© 2025 Gouvernement du Canada',
    'footer-privacy': 'Confidentialité',
    'footer-terms': 'Conditions d\'utilisation',
    'footer-accessibility': 'Accessibilité',
    'footer-contact': 'Contactez-nous',
  }
};

// Current locale
let currentLocale = 'en-CA';

// Update all i18n text elements
function updateI18n() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLocale][key]) {
      el.textContent = translations[currentLocale][key];
    }
  });
}

// Toggle language
window.toggleLanguage = function() {
  currentLocale = currentLocale === 'en-CA' ? 'fr-CA' : 'en-CA';
  updateI18n();
  
  // Update chat panel locale
  const chatPanel = document.getElementById('chatPanel');
  if (chatPanel) {
    chatPanel.setAttribute('locale', currentLocale);
  }
};

// Mock RAG backend responses
const ragKnowledgeBase = {
  'en-CA': {
    'passport': {
      answer: `To apply for a Canadian passport:

1. **Gather Required Documents:**
   - Proof of Canadian citizenship (birth certificate or citizenship certificate)
   - Two identical passport photos
   - Valid government-issued photo ID

2. **Complete the Application:**
   - Download form PPTC 153 from canada.ca
   - Fill out all sections completely
   - Have a guarantor sign if first-time applicant

3. **Submit Your Application:**
   - In person at a Service Canada office
   - By mail to the address on the form
   - Processing time: 20 business days (in-person) or 10-20 business days (by mail)

4. **Pay the Fee:**
   - Adult passport (5-year): $120
   - Adult passport (10-year): $160

For more information, visit: canada.ca/passport`,
      sources: ['canada.ca/passport', 'Service Canada']
    },
    'benefits': {
      answer: `Government of Canada benefits you may be eligible for:

**Family Benefits:**
- Canada Child Benefit (CCB) - Monthly payment for children under 18
- Canada Dental Benefit - Dental care for children under 12

**Employment Benefits:**
- Employment Insurance (EI) - Temporary income support
- Canada Workers Benefit - Tax refund for low-income workers

**Senior Benefits:**
- Old Age Security (OAS) - Monthly payment for seniors 65+
- Guaranteed Income Supplement (GIS) - Additional support for low-income seniors

**Disability Benefits:**
- Canada Pension Plan Disability (CPP-D)
- Registered Disability Savings Plan (RDSP)

To check your eligibility, visit the Benefits Finder at canada.ca/benefits`,
      sources: ['canada.ca/benefits', 'Service Canada Benefits']
    },
    'taxes': {
      answer: `To file your taxes online with CRA:

1. **Choose Tax Software:**
   - Use NETFILE-certified software (many free options available)
   - Popular options: TurboTax, Wealthsimple Tax, UFile

2. **Gather Your Documents:**
   - T4 slips (employment income)
   - RRSP contribution receipts
   - Medical expenses
   - Charitable donation receipts

3. **File Through CRA My Account:**
   - Sign in or create an account at canada.ca/my-cra-account
   - Use Auto-fill to import your information
   - Review and submit your return

4. **Confirm Receipt:**
   - You'll receive a confirmation number
   - Refunds arrive in 2 weeks (direct deposit) or 8 weeks (cheque)

**Tax Filing Deadlines:**
- Most individuals: April 30
- Self-employed: June 15`,
      sources: ['canada.ca/taxes', 'CRA NETFILE']
    },
    'health': {
      answer: `To find health services in Canada:

**Provincial Health Services:**
- Each province/territory has its own health insurance plan
- Contact your provincial health ministry for your health card

**Find a Doctor:**
- College of Physicians directory in your province
- Health Canada's directory at canada.ca/health

**Emergency Services:**
- Call 911 for emergencies
- Visit your nearest hospital emergency room
- Walk-in clinics for non-urgent care

**Mental Health Support:**
- Wellness Together Canada: 1-866-585-0445
- Kids Help Phone: 1-800-668-6868
- Talk Suicide Canada: 1-833-456-4566

**Virtual Care:**
- Many provinces offer virtual doctor visits
- Maple, Tia Health, and Telus Health provide telehealth

For more resources: canada.ca/health`,
      sources: ['canada.ca/health', 'Health Canada']
    },
    'license': {
      answer: `To renew your driver's license:

**Online Renewal:**
1. Visit your province's motor vehicle website
2. Enter your license number and personal information
3. Pay the renewal fee
4. Receive your new license by mail (7-10 business days)

**In-Person Renewal:**
1. Visit a Service Ontario/Service BC location (or equivalent in your province)
2. Bring current license and payment
3. Update photo if required
4. Receive temporary license immediately

**Requirements:**
- Valid current license
- Payment (varies by province, typically $90-180)
- Vision test may be required (for certain ages)
- Medical exam (for commercial licenses)

**Renewal Timing:**
- Most provinces allow renewal up to 6 months before expiry
- Some allow renewal up to 1 year after expiry with penalty

Check your provincial motor vehicle department website for specific instructions.`,
      sources: ['Provincial Motor Vehicle Departments']
    }
  },
  'fr-CA': {
    'passeport': {
      answer: `Pour demander un passeport canadien :

1. **Rassemblez les Documents Requis :**
   - Preuve de citoyenneté canadienne (certificat de naissance ou certificat de citoyenneté)
   - Deux photos d'identité identiques
   - Pièce d'identité valide avec photo émise par le gouvernement

2. **Remplissez la Demande :**
   - Téléchargez le formulaire PPTC 153 sur canada.ca
   - Remplissez toutes les sections complètement
   - Faites signer par un répondant si première demande

3. **Soumettez Votre Demande :**
   - En personne dans un bureau de Service Canada
   - Par la poste à l'adresse indiquée sur le formulaire
   - Délai de traitement : 20 jours ouvrables (en personne) ou 10-20 jours ouvrables (par la poste)

4. **Payez les Frais :**
   - Passeport adulte (5 ans) : 120 $
   - Passeport adulte (10 ans) : 160 $

Pour plus d'informations, visitez : canada.ca/passeport`,
      sources: ['canada.ca/passeport', 'Service Canada']
    },
    'prestations': {
      answer: `Prestations du gouvernement du Canada auxquelles vous pourriez être admissible :

**Prestations Familiales :**
- Allocation canadienne pour enfants (ACE) - Paiement mensuel pour enfants de moins de 18 ans
- Prestation dentaire canadienne - Soins dentaires pour enfants de moins de 12 ans

**Prestations d'Emploi :**
- Assurance-emploi (AE) - Soutien du revenu temporaire
- Allocation canadienne pour les travailleurs - Remboursement d'impôt pour travailleurs à faible revenu

**Prestations pour Aînés :**
- Sécurité de la vieillesse (SV) - Paiement mensuel pour aînés de 65 ans et plus
- Supplément de revenu garanti (SRG) - Soutien additionnel pour aînés à faible revenu

**Prestations d'Invalidité :**
- Prestations d'invalidité du RPC
- Régime enregistré d'épargne-invalidité (REEI)

Pour vérifier votre admissibilité, visitez le Chercheur de prestations à canada.ca/prestations`,
      sources: ['canada.ca/prestations', 'Prestations Service Canada']
    },
    'impôts': {
      answer: `Pour produire votre déclaration de revenus en ligne avec l'ARC :

1. **Choisissez un Logiciel d'Impôt :**
   - Utilisez un logiciel certifié IMPÔTNET (plusieurs options gratuites)
   - Options populaires : TurboImpôt, Wealthsimple Tax, ImpôtExpert

2. **Rassemblez Vos Documents :**
   - Feuillets T4 (revenus d'emploi)
   - Reçus de cotisations REER
   - Frais médicaux
   - Reçus de dons de charité

3. **Produisez via Mon dossier ARC :**
   - Ouvrez une session ou créez un compte à canada.ca/mon-dossier-arc
   - Utilisez Préremplir pour importer vos informations
   - Révisez et soumettez votre déclaration

4. **Confirmez la Réception :**
   - Vous recevrez un numéro de confirmation
   - Les remboursements arrivent en 2 semaines (dépôt direct) ou 8 semaines (chèque)

**Dates Limites de Production :**
- La plupart des particuliers : 30 avril
- Travailleurs autonomes : 15 juin`,
      sources: ['canada.ca/impots', 'ARC IMPÔTNET']
    },
    'santé': {
      answer: `Pour trouver des services de santé au Canada :

**Services de Santé Provinciaux :**
- Chaque province/territoire a son propre régime d'assurance-santé
- Contactez votre ministère provincial de la Santé pour votre carte santé

**Trouver un Médecin :**
- Répertoire du Collège des médecins de votre province
- Répertoire de Santé Canada à canada.ca/sante

**Services d'Urgence :**
- Composez le 911 pour les urgences
- Visitez la salle d'urgence de l'hôpital le plus proche
- Cliniques sans rendez-vous pour soins non urgents

**Soutien en Santé Mentale :**
- Espace mieux-être Canada : 1-866-585-0445
- Jeunesse, J'écoute : 1-800-668-6868
- Service canadien de prévention du suicide : 1-833-456-4566

**Soins Virtuels :**
- Plusieurs provinces offrent des consultations médicales virtuelles
- Maple, Tia Health et Telus Santé offrent la télésanté

Pour plus de ressources : canada.ca/sante`,
      sources: ['canada.ca/sante', 'Santé Canada']
    },
    'permis': {
      answer: `Pour renouveler votre permis de conduire :

**Renouvellement en Ligne :**
1. Visitez le site web des véhicules automobiles de votre province
2. Entrez votre numéro de permis et informations personnelles
3. Payez les frais de renouvellement
4. Recevez votre nouveau permis par la poste (7-10 jours ouvrables)

**Renouvellement en Personne :**
1. Visitez un bureau de Service Ontario/Service BC (ou équivalent dans votre province)
2. Apportez votre permis actuel et le paiement
3. Mettez à jour la photo si requis
4. Recevez un permis temporaire immédiatement

**Exigences :**
- Permis actuel valide
- Paiement (varie selon la province, généralement 90 $ - 180 $)
- Test de vision peut être requis (pour certains âges)
- Examen médical (pour permis commerciaux)

**Moment du Renouvellement :**
- La plupart des provinces permettent le renouvellement jusqu'à 6 mois avant l'expiration
- Certaines permettent le renouvellement jusqu'à 1 an après l'expiration avec pénalité

Consultez le site web du ministère des véhicules automobiles de votre province pour les instructions spécifiques.`,
      sources: ['Ministères provinciaux des Véhicules automobiles']
    }
  }
};

// Simulate RAG backend query
async function queryRAG(userMessage, locale) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
  
  // Simple keyword matching for demo
  const message = userMessage.toLowerCase();
  const lang = locale === 'fr-CA' ? 'fr-CA' : 'en-CA';
  
  // Match keywords to knowledge base
  if (lang === 'en-CA') {
    if (message.includes('passport') || message.includes('travel document')) {
      return ragKnowledgeBase['en-CA']['passport'];
    }
    if (message.includes('benefit') || message.includes('financial support') || message.includes('eligible')) {
      return ragKnowledgeBase['en-CA']['benefits'];
    }
    if (message.includes('tax') || message.includes('file') || message.includes('return')) {
      return ragKnowledgeBase['en-CA']['taxes'];
    }
    if (message.includes('health') || message.includes('doctor') || message.includes('medical')) {
      return ragKnowledgeBase['en-CA']['health'];
    }
    if (message.includes('license') || message.includes('renew') || message.includes('driver')) {
      return ragKnowledgeBase['en-CA']['license'];
    }
  } else {
    if (message.includes('passeport') || message.includes('document de voyage')) {
      return ragKnowledgeBase['fr-CA']['passeport'];
    }
    if (message.includes('prestation') || message.includes('soutien financier') || message.includes('admissible')) {
      return ragKnowledgeBase['fr-CA']['prestations'];
    }
    if (message.includes('impôt') || message.includes('déclaration') || message.includes('produire')) {
      return ragKnowledgeBase['fr-CA']['impôts'];
    }
    if (message.includes('santé') || message.includes('médecin') || message.includes('médical')) {
      return ragKnowledgeBase['fr-CA']['santé'];
    }
    if (message.includes('permis') || message.includes('renouveler') || message.includes('conduire')) {
      return ragKnowledgeBase['fr-CA']['permis'];
    }
  }
  
  // Default response
  return {
    answer: lang === 'en-CA' 
      ? `Thank you for your question. I'm still learning about this topic. For immediate assistance, please:\n\n- Visit canada.ca for comprehensive information\n- Call Service Canada at 1-800-622-6232\n- Contact your local Service Canada office\n\nIs there another way I can help you today?`
      : `Merci pour votre question. J'apprends encore sur ce sujet. Pour une assistance immédiate, veuillez :\n\n- Visiter canada.ca pour des informations complètes\n- Appeler Service Canada au 1-800-622-6232\n- Contacter votre bureau local de Service Canada\n\nPuis-je vous aider d'une autre façon aujourd'hui?`,
    sources: ['canada.ca']
  };
}

// Initialize chat panel
function initializeChatPanel() {
  const chatPanel = document.getElementById('chatPanel');
  
  if (!chatPanel) {
    console.error('Chat panel not found');
    return;
  }
  
  // Set initial locale
  chatPanel.setAttribute('locale', currentLocale);
  
  // Handle message submission
  chatPanel.addEventListener('eva-message-send', async (event) => {
    const userMessage = event.detail.message;
    
    // Show typing indicator
    chatPanel.setAttribute('is-typing', 'true');
    
    try {
      // Query RAG backend
      const response = await queryRAG(userMessage, currentLocale);
      
      // Add assistant response with sources
      const assistantMessage = {
        role: 'assistant',
        content: response.answer,
        timestamp: new Date().toISOString()
      };
      
      // Add message to chat
      chatPanel.addMessage(assistantMessage);
      
      // Add sources as a follow-up if available
      if (response.sources && response.sources.length > 0) {
        const sourcesText = currentLocale === 'en-CA'
          ? `\n\n**Sources:** ${response.sources.join(', ')}`
          : `\n\n**Sources :** ${response.sources.join(', ')}`;
        
        setTimeout(() => {
          const sourcesMessage = {
            role: 'assistant',
            content: sourcesText,
            timestamp: new Date().toISOString()
          };
          chatPanel.addMessage(sourcesMessage);
        }, 300);
      }
      
    } catch (error) {
      console.error('Error querying RAG backend:', error);
      
      const errorMessage = {
        role: 'assistant',
        content: currentLocale === 'en-CA'
          ? 'Sorry, I encountered an error. Please try again.'
          : 'Désolé, j\'ai rencontré une erreur. Veuillez réessayer.',
        timestamp: new Date().toISOString()
      };
      
      chatPanel.addMessage(errorMessage);
    } finally {
      // Hide typing indicator
      chatPanel.setAttribute('is-typing', 'false');
    }
  });
  
  // Handle suggestion chips
  const suggestionChips = document.querySelectorAll('.suggestion-chip');
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const questionData = chip.getAttribute('data-question');
      const [enQuestion, frQuestion] = questionData.split('|').map(q => q.split(':')[1]);
      const question = currentLocale === 'en-CA' ? enQuestion : frQuestion;
      
      // Send the suggested question to the chat panel
      const chatPanel = document.getElementById('chatPanel');
      if (chatPanel && chatPanel.sendQuestionFromSuggestion) {
        chatPanel.sendQuestionFromSuggestion(question);
      }
    });
  });
  
  // Note: Welcome message would be added here if the component supported it
  // For now, users can start chatting immediately or click a suggested question
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    updateI18n();
    // Wait for web components to be defined
    customElements.whenDefined('eva-chat-panel').then(() => {
      initializeChatPanel();
    });
  });
} else {
  updateI18n();
  customElements.whenDefined('eva-chat-panel').then(() => {
    initializeChatPanel();
  });
}
