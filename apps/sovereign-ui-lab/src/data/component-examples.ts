/**
 * Component Examples Data
 * All 88 Web Components with framework-specific code examples
 */

export interface ComponentExample {
  name: string;
  tag: string;
  category: string;
  description: string;
  vanilla: string;
  react: string;
  vue: string;
  angular: string;
  svelte: string;
}

export const componentExamples: ComponentExample[] = [
  // ACCESSIBILITY (1)
  {
    name: 'Skip Link',
    tag: 'eva-skip-link',
    category: 'Accessibility',
    description: 'Skip navigation link for keyboard users',
    vanilla: '<eva-skip-link href="#main">Skip to main content</eva-skip-link>',
    react: 'import { SkipLink } from "@eva-suite/react";\n\n<SkipLink href="#main">Skip to main content</SkipLink>',
    vue: '<script setup>\nimport { EVASkipLink } from "@eva-suite/vue";\n</script>\n<EVASkipLink href="#main">Skip to main content</EVASkipLink>',
    angular: '<eva-skip-link href="#main">Skip to main content</eva-skip-link>',
    svelte: '<script>\nimport { SkipLink } from "@eva-suite/svelte";\n</script>\n<SkipLink href="#main">Skip to main content</SkipLink>'
  },

  // AGENCY (1)
  {
    name: 'Program Card',
    tag: 'eva-program-card',
    category: 'Agency',
    description: 'Card for government programs and services',
    vanilla: '<eva-program-card title="Employment Insurance" description="Apply for EI benefits"></eva-program-card>',
    react: 'import { ProgramCard } from "@eva-suite/react";\n\n<ProgramCard title="Employment Insurance" description="Apply for EI benefits" />',
    vue: '<EVAProgramCard title="Employment Insurance" description="Apply for EI benefits" />',
    angular: '<eva-program-card title="Employment Insurance" description="Apply for EI benefits"></eva-program-card>',
    svelte: '<ProgramCard title="Employment Insurance" description="Apply for EI benefits" />'
  },

  // CHAT (2)
  {
    name: 'Chat Panel',
    tag: 'eva-chat-panel',
    category: 'Chat',
    description: 'Interactive chat interface',
    vanilla: '<eva-chat-panel></eva-chat-panel>',
    react: 'import { ChatPanel } from "@eva-suite/react";\n\n<ChatPanel messages={messages} onSendMessage={handleSend} />',
    vue: '<EVAChatPanel :messages="messages" @send-message="handleSend" />',
    angular: '<eva-chat-panel [messages]="messages" (sendMessage)="handleSend($event)"></eva-chat-panel>',
    svelte: '<ChatPanel {messages} on:sendMessage={handleSend} />'
  },
  {
    name: 'Chat Message',
    tag: 'eva-chat-message',
    category: 'Chat',
    description: 'Individual chat message',
    vanilla: '<eva-chat-message role="user" text="Hello"></eva-chat-message>',
    react: '<ChatMessage role="user" text="Hello" />',
    vue: '<EVAChatMessage role="user" text="Hello" />',
    angular: '<eva-chat-message role="user" text="Hello"></eva-chat-message>',
    svelte: '<ChatMessage role="user" text="Hello" />'
  },

  // GC-DESIGN (4)
  {
    name: 'GC Button',
    tag: 'eva-gc-button',
    category: 'GC Design',
    description: 'Official Government of Canada button',
    vanilla: '<eva-gc-button variant="primary">Submit</eva-gc-button>',
    react: 'import { GCButton } from "@eva-suite/react";\n\n<GCButton variant="primary">Submit</GCButton>',
    vue: '<EVAGCButton variant="primary">Submit</EVAGCButton>',
    angular: '<eva-gc-button variant="primary">Submit</eva-gc-button>',
    svelte: '<GCButton variant="primary">Submit</GCButton>'
  },
  {
    name: 'GC Header',
    tag: 'eva-gc-header',
    category: 'GC Design',
    description: 'Official GC header with wordmark',
    vanilla: '<eva-gc-header app-name="My Application"></eva-gc-header>',
    react: '<GCHeader appName="My Application" />',
    vue: '<EVAGCHeader app-name="My Application" />',
    angular: '<eva-gc-header app-name="My Application"></eva-gc-header>',
    svelte: '<GCHeader appName="My Application" />'
  },
  {
    name: 'GC Footer',
    tag: 'eva-gc-footer',
    category: 'GC Design',
    description: 'Official GC footer with links',
    vanilla: '<eva-gc-footer></eva-gc-footer>',
    react: '<GCFooter />',
    vue: '<EVAGCFooter />',
    angular: '<eva-gc-footer></eva-gc-footer>',
    svelte: '<GCFooter />'
  },
  {
    name: 'Language Switcher',
    tag: 'eva-gc-language-switcher',
    category: 'GC Design',
    description: 'EN/FR language toggle',
    vanilla: '<eva-gc-language-switcher></eva-gc-language-switcher>',
    react: '<GCLanguageSwitcher onLanguageChange={handleChange} />',
    vue: '<EVAGCLanguageSwitcher @language-change="handleChange" />',
    angular: '<eva-gc-language-switcher (languageChange)="handleChange($event)"></eva-gc-language-switcher>',
    svelte: '<GCLanguageSwitcher on:languageChange={handleChange} />'
  },

  // UI COMPONENTS (40) - Sample of key components
  {
    name: 'Button',
    tag: 'eva-button',
    category: 'UI',
    description: 'Standard button component',
    vanilla: '<eva-button variant="primary">Click Me</eva-button>',
    react: '<Button variant="primary">Click Me</Button>',
    vue: '<EVAButton variant="primary">Click Me</EVAButton>',
    angular: '<eva-button variant="primary">Click Me</eva-button>',
    svelte: '<Button variant="primary">Click Me</Button>'
  },
  {
    name: 'Input',
    tag: 'eva-input',
    category: 'UI',
    description: 'Text input field',
    vanilla: '<eva-input label="Email" type="email" required></eva-input>',
    react: '<Input label="Email" type="email" required />',
    vue: '<EVAInput label="Email" type="email" required />',
    angular: '<eva-input label="Email" type="email" required></eva-input>',
    svelte: '<Input label="Email" type="email" required />'
  },
  {
    name: 'Card',
    tag: 'eva-card',
    category: 'UI',
    description: 'Container card component',
    vanilla: '<eva-card><h3>Title</h3><p>Content</p></eva-card>',
    react: '<Card><h3>Title</h3><p>Content</p></Card>',
    vue: '<EVACard><h3>Title</h3><p>Content</p></EVACard>',
    angular: '<eva-card><h3>Title</h3><p>Content</p></eva-card>',
    svelte: '<Card><h3>Title</h3><p>Content</p></Card>'
  },
  {
    name: 'Alert',
    tag: 'eva-alert',
    category: 'UI',
    description: 'Alert message component',
    vanilla: '<eva-alert severity="info">Information message</eva-alert>',
    react: '<Alert severity="info">Information message</Alert>',
    vue: '<EVAAlert severity="info">Information message</EVAAlert>',
    angular: '<eva-alert severity="info">Information message</eva-alert>',
    svelte: '<Alert severity="info">Information message</Alert>'
  },
  {
    name: 'Badge',
    tag: 'eva-badge',
    category: 'UI',
    description: 'Status badge indicator',
    vanilla: '<eva-badge variant="success">Active</eva-badge>',
    react: '<Badge variant="success">Active</Badge>',
    vue: '<EVABadge variant="success">Active</EVABadge>',
    angular: '<eva-badge variant="success">Active</eva-badge>',
    svelte: '<Badge variant="success">Active</Badge>'
  },
  {
    name: 'Table',
    tag: 'eva-table',
    category: 'UI',
    description: 'Data table with sorting',
    vanilla: '<eva-table></eva-table>',
    react: '<Table data={data} columns={columns} />',
    vue: '<EVATable :data="data" :columns="columns" />',
    angular: '<eva-table [data]="data" [columns]="columns"></eva-table>',
    svelte: '<Table {data} {columns} />'
  },
  {
    name: 'Modal',
    tag: 'eva-dialog',
    category: 'UI',
    description: 'Dialog/modal overlay',
    vanilla: '<eva-dialog open><h2>Title</h2><p>Content</p></eva-dialog>',
    react: '<Dialog open={open} onClose={handleClose}><h2>Title</h2><p>Content</p></Dialog>',
    vue: '<EVADialog :open="open" @close="handleClose"><h2>Title</h2><p>Content</p></EVADialog>',
    angular: '<eva-dialog [open]="open" (close)="handleClose()"><h2>Title</h2><p>Content</p></eva-dialog>',
    svelte: '<Dialog {open} on:close={handleClose}><h2>Title</h2><p>Content</p></Dialog>'
  }
];

export function getComponentsByCategory(category?: string): ComponentExample[] {
  if (!category || category === 'all') return componentExamples;
  return componentExamples.filter(c => c.category === category);
}

export function getComponentByTag(tag: string): ComponentExample | undefined {
  return componentExamples.find(c => c.tag === tag);
}

export const categories = [
  'Accessibility',
  'Agency',
  'Chat',
  'GC Components',
  'GC Design',
  'GC Patterns',
  'GC Templates',
  'I18N',
  'Layout',
  'UI'
];
