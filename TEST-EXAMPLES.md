# Component Test Examples

Copy these examples into your test app to try out the new components.

## Dialog Example

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@eva-suite/sovereign-react';

function DialogTest() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button style={{ padding: '10px 20px', fontSize: '16px' }}>
          Open Dialog
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Welcome!</DialogTitle>
        <DialogDescription>
          This is a fully accessible dialog with focus management. 
          Press ESC to close, or click the close button.
        </DialogDescription>
        <button style={{ marginTop: '20px' }}>Action Button</button>
      </DialogContent>
    </Dialog>
  );
}
```

## Select Example

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@eva-suite/sovereign-react';

function SelectTest() {
  return (
    <Select defaultValue="option2">
      <SelectTrigger style={{ width: '200px' }}>
        <SelectValue placeholder="Choose an option" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2 (Default)</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
        <SelectItem value="option4">Option 4</SelectItem>
      </SelectContent>
    </Select>
  );
}
```

## Tabs Example

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@eva-suite/sovereign-react';

function TabsTest() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Profile</TabsTrigger>
        <TabsTrigger value="tab2">Settings</TabsTrigger>
        <TabsTrigger value="tab3">About</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <h3>Profile</h3>
        <p>Your profile information goes here.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <h3>Settings</h3>
        <p>Adjust your preferences here.</p>
      </TabsContent>
      <TabsContent value="tab3">
        <h3>About</h3>
        <p>Information about this application.</p>
      </TabsContent>
    </Tabs>
  );
}
```

## Checkbox, RadioGroup, Switch Example

```tsx
import { Checkbox, RadioGroup, RadioGroupItem, Switch } from '@eva-suite/sovereign-react';

function FormControlsTest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Checkbox */}
      <Checkbox label="I agree to the terms and conditions" />
      <Checkbox label="Send me promotional emails" defaultChecked />

      {/* Radio Group */}
      <RadioGroup defaultValue="medium">
        <RadioGroupItem value="small" label="Small" />
        <RadioGroupItem value="medium" label="Medium" />
        <RadioGroupItem value="large" label="Large" />
      </RadioGroup>

      {/* Switch */}
      <Switch label="Enable notifications" />
      <Switch label="Dark mode" defaultChecked />
    </div>
  );
}
```

## Tooltip Example

```tsx
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@eva-suite/sovereign-react';

function TooltipTest() {
  return (
    <TooltipProvider>
      <div style={{ padding: '50px' }}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Hover me</button>
          </TooltipTrigger>
          <TooltipContent>
            This is a helpful tooltip!
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
```

## Toast Example

```tsx
import { Toaster, toast, gcToast } from '@eva-suite/sovereign-react';

function ToastTest() {
  return (
    <>
      <Toaster />
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button onClick={() => gcToast.success('Changes saved successfully!')}>
          Success Toast
        </button>
        <button onClick={() => gcToast.error('An error occurred!')}>
          Error Toast
        </button>
        <button onClick={() => gcToast.warning('Please review your input.')}>
          Warning Toast
        </button>
        <button onClick={() => gcToast.info('New feature available!')}>
          Info Toast
        </button>
        <button onClick={() => toast('Plain toast notification')}>
          Plain Toast
        </button>
      </div>
    </>
  );
}
```

## Enhanced Button Example

```tsx
import { Button } from '@eva-suite/sovereign-react';

function ButtonTest() {
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="danger">Danger Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      
      {/* Sizes */}
      <Button variant="primary" size="small">Small</Button>
      <Button variant="primary" size="large">Large</Button>
      
      {/* States */}
      <Button variant="primary" disabled>Disabled</Button>
      <Button variant="primary" loading>Loading...</Button>
    </div>
  );
}
```

## Enhanced Alert Example

```tsx
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@eva-suite/sovereign-react';

function AlertTest() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Alert variant="success">
        <AlertIcon>✓</AlertIcon>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert variant="warning">
        <AlertIcon>⚠</AlertIcon>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>Please review the information before proceeding.</AlertDescription>
      </Alert>

      <Alert variant="error">
        <AlertIcon>✕</AlertIcon>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>There was a problem processing your request.</AlertDescription>
      </Alert>

      <Alert variant="info">
        <AlertIcon>ℹ</AlertIcon>
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>This feature will be available soon.</AlertDescription>
      </Alert>
    </div>
  );
}
```

## Enhanced Card Example

```tsx
import { Card, CardHeader, CardTitle, CardAction, CardBody, CardFooter, Button } from '@eva-suite/sovereign-react';

function CardTest() {
  return (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <CardTitle>Project Dashboard</CardTitle>
        <CardAction>
          <Button variant="ghost" size="small">Edit</Button>
          <Button variant="ghost" size="small">Share</Button>
        </CardAction>
      </CardHeader>
      <CardBody>
        <p>This is the main content of the card. You can put any content here.</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </CardBody>
      <CardFooter>
        <Button variant="primary" size="small">Save Changes</Button>
        <Button variant="secondary" size="small">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
```

## Full Page Example

```tsx
import {
  Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription,
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem,
  Tabs, TabsList, TabsTrigger, TabsContent,
  Button, Alert, AlertIcon, AlertTitle, AlertDescription,
  Card, CardHeader, CardTitle, CardAction, CardBody, CardFooter,
  Checkbox, Switch,
  Toaster, gcToast
} from '@eva-suite/sovereign-react';

export default function App() {
  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <Toaster />
      
      <h1>EVA Sovereign UI - Radix Integration Demo</h1>
      
      <Alert variant="info" style={{ marginBottom: '20px' }}>
        <AlertIcon>ℹ</AlertIcon>
        <AlertTitle>Demo Application</AlertTitle>
        <AlertDescription>
          This page demonstrates all new Radix UI components integrated with the GC Design System.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="components">
        <TabsList>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
        </TabsList>

        <TabsContent value="components">
          <div style={{ display: 'grid', gap: '20px' }}>
            {/* Dialog Test */}
            <Card>
              <CardHeader>
                <CardTitle>Dialog Component</CardTitle>
              </CardHeader>
              <CardBody>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="primary">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Example Dialog</DialogTitle>
                    <DialogDescription>
                      This dialog demonstrates focus management and keyboard navigation.
                    </DialogDescription>
                    <Button variant="primary" style={{ marginTop: '16px' }}>
                      Confirm
                    </Button>
                  </DialogContent>
                </Dialog>
              </CardBody>
            </Card>

            {/* Select Test */}
            <Card>
              <CardHeader>
                <CardTitle>Select Component</CardTitle>
              </CardHeader>
              <CardBody>
                <Select defaultValue="option2">
                  <SelectTrigger style={{ width: '200px' }}>
                    <SelectValue placeholder="Choose..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </CardBody>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="buttons">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
            </CardHeader>
            <CardBody>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardBody>
            <CardFooter>
              <Button 
                variant="primary" 
                onClick={() => gcToast.success('Button clicked!')}
              >
                Test Toast
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="forms">
          <Card>
            <CardHeader>
              <CardTitle>Form Controls</CardTitle>
            </CardHeader>
            <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Checkbox label="Enable feature" />
              <Checkbox label="Send notifications" defaultChecked />
              <Switch label="Dark mode" />
              <Switch label="Auto-save" defaultChecked />
            </CardBody>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
```

## Testing Tips

1. **Keyboard Navigation**: Tab through all components to test focus management
2. **Screen Reader**: Enable NVDA/JAWS/VoiceOver and navigate the page
3. **Color Contrast**: Use browser DevTools Accessibility panel to check contrast
4. **Responsive**: Test at different viewport sizes
5. **Dark Mode**: If implemented, toggle dark mode and verify all components
