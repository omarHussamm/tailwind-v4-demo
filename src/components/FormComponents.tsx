import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Search,
  ExternalLink
} from 'lucide-react'

export function FormComponents() {
  const [isChecked, setIsChecked] = useState(false)
  const [isSwitchOn, setIsSwitchOn] = useState(false)
  const [radioValue, setRadioValue] = useState('option1')
  const [selectValue, setSelectValue] = useState('')

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Form Components</h1>
        <p className="text-lg text-foreground-secondary">
          Input fields, form controls, and validation states
        </p>
      </div>

      {/* Input Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Input
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/input" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-input, --color-border, --color-ring, --color-foreground, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Input Types */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Types</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="text-input">Text</Label>
                <Input id="text-input" type="text" placeholder="Enter text" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-input">Email</Label>
                <Input id="email-input" type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-input">Password</Label>
                <Input id="password-input" type="password" placeholder="Enter password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="number-input">Number</Label>
                <Input id="number-input" type="number" placeholder="Enter number" />
              </div>
            </div>
          </div>

          {/* Input States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="disabled-input">Disabled</Label>
                <Input id="disabled-input" disabled placeholder="Disabled input" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="readonly-input">Read Only</Label>
                <Input id="readonly-input" readOnly value="Read only value" />
              </div>
            </div>
          </div>

          {/* Input with Icons */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With Icons</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email-icon">Email with Icon</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground-secondary" />
                  <Input id="email-icon" type="email" placeholder="Enter email" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="search-icon">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground-secondary" />
                  <Input id="search-icon" type="search" placeholder="Search..." className="pl-10" />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Label Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Label
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/label" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-foreground, --color-foreground-secondary, --font-weight-medium
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Labels */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Labels</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="basic-input">Basic Label</Label>
                <Input id="basic-input" placeholder="Input with label" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="required-input">
                  Required Field <span className="text-destructive">*</span>
                </Label>
                <Input id="required-input" placeholder="Required input" />
              </div>
            </div>
          </div>

          {/* Label with Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With Description</h4>
            <div className="space-y-2">
              <Label htmlFor="password-field">Password</Label>
              <Input id="password-field" type="password" placeholder="Enter password" />
              <p className="text-xs text-foreground-secondary">
                Must be at least 8 characters long
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Checkbox Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Checkbox
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/checkbox" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-primary, --color-border, --color-ring, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Checkbox States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="unchecked" 
                  checked={false}
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="unchecked">Unchecked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="checked" 
                  checked={true}
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="checked">Checked</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="indeterminate" 
                  checked="indeterminate"
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="indeterminate">Indeterminate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="disabled" 
                  disabled
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="disabled">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Checkbox with Form */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Form Example</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="terms" 
                  checked={isChecked}
                  onCheckedChange={(checked) => setIsChecked(checked === true)}
                />
                <Label htmlFor="terms">
                  I agree to the terms and conditions
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="newsletter" 
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="newsletter">
                  Subscribe to newsletter
                </Label>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Radio Group Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Radio Group
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/radio-group" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-primary, --color-border, --color-ring, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Radio Group */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Radio Group</h4>
            <RadioGroup value={radioValue} onValueChange={setRadioValue}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option1" id="option1" />
                <Label htmlFor="option1">Option 1</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option2" id="option2" />
                <Label htmlFor="option2">Option 2</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option3" id="option3" />
                <Label htmlFor="option3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Radio Group with Description */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With Descriptions</h4>
            <RadioGroup defaultValue="basic">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="basic" id="basic" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="basic">Basic Plan</Label>
                  <p className="text-xs text-foreground-secondary">
                    Perfect for individuals and small teams
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="pro" id="pro" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="pro">Pro Plan</Label>
                  <p className="text-xs text-foreground-secondary">
                    Advanced features for growing businesses
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
      </Card>

      {/* Switch Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Switch
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/switch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-primary, --color-background, --color-border
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Switch States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="switch-on" 
                  checked={true}
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="switch-on">On</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="switch-off" 
                  checked={false}
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="switch-off">Off</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch 
                  id="switch-disabled" 
                  disabled
                  onCheckedChange={() => {}}
                />
                <Label htmlFor="switch-disabled">Disabled</Label>
              </div>
            </div>
          </div>

          {/* Switch with Form */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Form Example</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <p className="text-xs text-foreground-secondary">
                    Receive emails about your account activity
                  </p>
                </div>
                <Switch 
                  id="notifications"
                  checked={isSwitchOn}
                  onCheckedChange={setIsSwitchOn}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="marketing">Marketing Emails</Label>
                  <p className="text-xs text-foreground-secondary">
                    Receive emails about new features and updates
                  </p>
                </div>
                <Switch 
                  id="marketing"
                  onCheckedChange={() => {}}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Select Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Select
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/select" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-input, --color-border, --color-ring, --color-popover, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Select */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Select</h4>
            <div className="space-y-2">
              <Label htmlFor="country-select">Country</Label>
              <Select value={selectValue} onValueChange={setSelectValue}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Select States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="disabled-select">Disabled</Label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Disabled select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="error-select">With Error</Label>
                <Select>
                  <SelectTrigger className="border-destructive">
                    <SelectValue placeholder="Select with error" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Combobox Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Combobox</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-input, --color-border, --color-popover, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Searchable Select</h4>
            <div className="space-y-2">
              <Label htmlFor="combobox">Search and Select</Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground-secondary" />
                <Input 
                  id="combobox"
                  placeholder="Search and select..." 
                  className="pl-10"
                />
              </div>
              <p className="text-xs text-foreground-secondary">
                Note: This is a placeholder. Install the actual combobox component for full functionality.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
