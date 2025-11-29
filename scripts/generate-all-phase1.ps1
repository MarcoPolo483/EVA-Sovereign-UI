#!/usr/bin/env pwsh
<#
.SYNOPSIS
    Quick batch generator for all 12 Phase 1 accessibility components
    
.DESCRIPTION
    Generates scaffolding for all 12 accessibility components in one go:
    DialogModal, AriaLiveRegion, RovingTabIndex, TooltipAccessible,
    LoadingSpinner, ProgressBar, TabPanel, Accordion, Carousel,
    DataTable, TreeView, ComboBox
    
.EXAMPLE
    .\scripts\generate-all-phase1.ps1
#>

[CmdletBinding()]
param()

$ErrorActionPreference = "Stop"

Write-Host "`n🚀 EVA-Sovereign-UI Phase 1 Component Generator" -ForegroundColor Cyan
Write-Host "Generating all 12 accessibility components..." -ForegroundColor Gray
Write-Host ""

$components = @(
    "DialogModal",
    "AriaLiveRegion", 
    "RovingTabIndex",
    "TooltipAccessible",
    "LoadingSpinner",
    "ProgressBar",
    "TabPanel",
    "Accordion",
    "Carousel",
    "DataTable",
    "TreeView",
    "ComboBox"
)

$success = 0
$failed = 0

foreach ($component in $components) {
    try {
        Write-Host "🎨 Generating $component..." -ForegroundColor Cyan
        
        & "$PSScriptRoot\generate-components.ps1" `
            -ComponentName $component `
            -ComponentType "accessibility" `
            -Package "react"
        
        if ($LASTEXITCODE -eq 0 -or $null -eq $LASTEXITCODE) {
            $success++
        } else {
            Write-Host "  ⚠️  Generator returned non-zero exit code" -ForegroundColor Yellow
            $failed++
        }
        
        Start-Sleep -Milliseconds 500
    }
    catch {
        Write-Host "  ❌ Failed: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
}

Write-Host ""
Write-Host ("=" * 60) -ForegroundColor Gray
Write-Host "📊 Generation Summary" -ForegroundColor Cyan
Write-Host ("=" * 60) -ForegroundColor Gray
Write-Host "✅ Success: $success/$($components.Count)" -ForegroundColor Green
Write-Host "❌ Failed:  $failed" -ForegroundColor Red
Write-Host ("=" * 60) -ForegroundColor Gray
Write-Host ""

if ($success -eq $components.Count) {
    Write-Host "✨ All components generated successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "  1. Implement component logic in packages/react/src/components/accessibility/" -ForegroundColor Gray
    Write-Host "  2. Run tests: pnpm test" -ForegroundColor Gray
    Write-Host "  3. View in Storybook: pnpm storybook" -ForegroundColor Gray
    Write-Host "  4. Commit: git add packages/ && git commit -m 'feat: Phase 1 accessibility components'" -ForegroundColor Gray
    Write-Host ""
} else {
    Write-Host "⚠️  Some components failed to generate. Check errors above." -ForegroundColor Yellow
    Write-Host ""
}
