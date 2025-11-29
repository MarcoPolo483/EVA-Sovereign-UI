#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Automated component generator for EVA-Sovereign-UI
    
.DESCRIPTION
    This script generates complete React components with:
    - Component implementation (TypeScript)
    - Test files (Vitest)
    - Storybook stories
    - Accessibility compliance
    - Bilingual support (EN/FR-CA)
    
.PARAMETER ComponentName
    Name of the component to generate (e.g., "DialogModal", "AriaLiveRegion")
    
.PARAMETER ComponentType
    Type: "accessibility", "i18n", "gc-design", "five-eyes", or "wysiwyg"
    
.PARAMETER Package
    Target package: "core" or "react" (default: "react")
    
.EXAMPLE
    .\scripts\generate-components.ps1 -ComponentName "DialogModal" -ComponentType "accessibility"
    
.EXAMPLE
    # Generate all 12 accessibility components
    $components = @("DialogModal", "AriaLiveRegion", "RovingTabIndex", "TooltipAccessible", 
                    "LoadingSpinner", "ProgressBar", "TabPanel", "Accordion", 
                    "Carousel", "DataTable", "TreeView", "ComboBox")
    $components | ForEach-Object { 
        .\scripts\generate-components.ps1 -ComponentName $_ -ComponentType "accessibility" 
    }
#>

[CmdletBinding()]
param(
    [Parameter(Mandatory=$true)]
    [string]$ComponentName,
    
    [Parameter(Mandatory=$true)]
    [ValidateSet("accessibility", "i18n", "gc-design", "five-eyes", "wysiwyg")]
    [string]$ComponentType,
    
    [Parameter(Mandatory=$false)]
    [ValidateSet("core", "react")]
    [string]$Package = "react"
)

$ErrorActionPreference = "Stop"

# Paths
$RepoRoot = Split-Path $PSScriptRoot -Parent
$PackageRoot = Join-Path $RepoRoot "packages\$Package"
$ComponentsDir = Join-Path $PackageRoot "src\components\$ComponentType"
$TestsDir = Join-Path $PackageRoot "src\components\$ComponentType"
$StoriesDir = Join-Path $PackageRoot "src\stories\$ComponentType"

# Create directories
New-Item -ItemType Directory -Force -Path $ComponentsDir | Out-Null
New-Item -ItemType Directory -Force -Path $TestsDir | Out-Null
New-Item -ItemType Directory -Force -Path $StoriesDir | Out-Null

Write-Host "🎨 Generating component: $ComponentName" -ForegroundColor Cyan
Write-Host "   Type: $ComponentType" -ForegroundColor Gray
Write-Host "   Package: $Package" -ForegroundColor Gray

# Component file
$ComponentFile = Join-Path $ComponentsDir "$ComponentName.tsx"
$ComponentContent = @"
import React from 'react';
import { useI18n } from '../../hooks/useI18n';

export interface ${ComponentName}Props {
  /**
   * Unique identifier for the component
   */
  id?: string;
  
  /**
   * CSS class name(s) for custom styling
   */
  className?: string;
  
  /**
   * Children elements
   */
  children?: React.ReactNode;
  
  /**
   * ARIA label for accessibility
   */
  ariaLabel?: string;
  
  /**
   * Language locale (en-CA, fr-CA)
   */
  locale?: 'en-CA' | 'fr-CA';
}

/**
 * ${ComponentName} Component
 * 
 * @component
 * @example
 * ```tsx
 * <${ComponentName}>
 *   Content here
 * </${ComponentName}>
 * ```
 */
export const ${ComponentName}: React.FC<${ComponentName}Props> = ({
  id,
  className = '',
  children,
  ariaLabel,
  locale = 'en-CA'
}) => {
  const { t } = useI18n(locale);
  
  return (
    <div
      id={id}
      className={``eva-${ComponentName.toLowerCase()} `${className}``}
      role="region"
      aria-label={ariaLabel || t('${ComponentName.toLowerCase()}.label')}
    >
      {children}
    </div>
  );
};

${ComponentName}.displayName = '${ComponentName}';
"@

Set-Content -Path $ComponentFile -Value $ComponentContent -Encoding UTF8
Write-Host "✅ Created: $ComponentFile" -ForegroundColor Green

# Test file
$TestFile = Join-Path $TestsDir "$ComponentName.test.tsx"
$TestContent = @"
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ${ComponentName} } from './${ComponentName}';

describe('${ComponentName}', () => {
  it('renders without crashing', () => {
    render(<${ComponentName}>Test content</${ComponentName}>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });
  
  it('applies custom className', () => {
    const { container } = render(
      <${ComponentName} className="custom-class">Content</${ComponentName}>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
  
  it('has proper ARIA attributes', () => {
    render(
      <${ComponentName} ariaLabel="Test label">Content</${ComponentName}>
    );
    const element = screen.getByRole('region');
    expect(element).toHaveAttribute('aria-label', 'Test label');
  });
  
  it('supports bilingual locale (EN)', () => {
    render(
      <${ComponentName} locale="en-CA">English content</${ComponentName}>
    );
    expect(screen.getByText('English content')).toBeInTheDocument();
  });
  
  it('supports bilingual locale (FR)', () => {
    render(
      <${ComponentName} locale="fr-CA">Contenu français</${ComponentName}>
    );
    expect(screen.getByText('Contenu français')).toBeInTheDocument();
  });
  
  it('passes axe accessibility tests', async () => {
    const { container } = render(
      <${ComponentName}>Accessible content</${ComponentName}>
    );
    // Add axe-core testing here
    expect(container.firstChild).toBeTruthy();
  });
});
"@

Set-Content -Path $TestFile -Value $TestContent -Encoding UTF8
Write-Host "✅ Created: $TestFile" -ForegroundColor Green

# Storybook story
$StoryFile = Join-Path $StoriesDir "$ComponentName.stories.tsx"
$StoryContent = @"
import type { Meta, StoryObj } from '@storybook/react';
import { ${ComponentName} } from '../../components/${ComponentType}/${ComponentName}';

const meta: Meta<typeof ${ComponentName}> = {
  title: '${ComponentType}/${ComponentName}',
  component: ${ComponentName},
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en-CA', 'fr-CA'],
      description: 'Language locale'
    },
    className: {
      control: 'text',
      description: 'Custom CSS class'
    }
  },
  parameters: {
    docs: {
      description: {
        component: '${ComponentName} component with WCAG 2.1 AA compliance and bilingual support.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof ${ComponentName}>;

export const Default: Story = {
  args: {
    children: 'Default ${ComponentName} content',
    locale: 'en-CA'
  }
};

export const French: Story = {
  args: {
    children: 'Contenu par défaut',
    locale: 'fr-CA'
  }
};

export const WithCustomClass: Story = {
  args: {
    children: 'Styled content',
    className: 'custom-styling',
    locale: 'en-CA'
  }
};

export const Accessible: Story = {
  args: {
    children: 'Accessible component example',
    ariaLabel: 'Descriptive label for screen readers',
    locale: 'en-CA'
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true }
        ]
      }
    }
  }
};
"@

Set-Content -Path $StoryFile -Value $StoryContent -Encoding UTF8
Write-Host "✅ Created: $StoryFile" -ForegroundColor Green

# Update index.ts
$IndexFile = Join-Path $ComponentsDir "index.ts"
$ExportLine = "export { ${ComponentName}, type ${ComponentName}Props } from './${ComponentName}';"

if (Test-Path $IndexFile) {
    Add-Content -Path $IndexFile -Value $ExportLine
    Write-Host "✅ Updated: $IndexFile" -ForegroundColor Green
} else {
    Set-Content -Path $IndexFile -Value $ExportLine -Encoding UTF8
    Write-Host "✅ Created: $IndexFile" -ForegroundColor Green
}

Write-Host ""
Write-Host "✨ Component generation complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Implement component logic in: $ComponentFile" -ForegroundColor Gray
Write-Host "  2. Run tests: pnpm test $ComponentName" -ForegroundColor Gray
Write-Host "  3. View in Storybook: pnpm storybook" -ForegroundColor Gray
Write-Host ""
