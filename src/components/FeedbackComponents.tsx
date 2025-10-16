import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { toast } from 'sonner'
import { 
  AlertCircle, 
  CheckCircle, 
  Info, 
  AlertTriangle,
  Trash2,
  Edit,
  Plus,
  Loader2,
  ExternalLink
} from 'lucide-react'

export function FeedbackComponents() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Feedback Components</h1>
        <p className="text-lg text-foreground-secondary">
          Alerts, dialogs, notifications, and loading states
        </p>
      </div>

      {/* Alert Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Alert
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/alert" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-destructive
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Alert Variants */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Variants</h4>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with default styling.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  This is a destructive alert indicating an error or dangerous action.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Custom Alert Styles */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-foreground">Custom Styles</h4>
              <div className="space-y-4">
                <Alert 
                  className="bg-white" 
                  style={{ 
                    borderColor: 'var(--color-success)',
                    '--alert-color': 'var(--color-success)'
                  } as React.CSSProperties}
                >
                  <CheckCircle 
                    className="h-4 w-4" 
                    style={{ color: 'var(--color-success)' }}
                  />
                  <AlertTitle style={{ color: 'var(--color-success)' }}>Success</AlertTitle>
                  <AlertDescription style={{ color: 'var(--color-success)' }}>
                    Your changes have been saved successfully.
                  </AlertDescription>
                </Alert>

                <Alert 
                  className="bg-white" 
                  style={{ 
                    borderColor: 'var(--color-warning)',
                    '--alert-color': 'var(--color-warning)'
                  } as React.CSSProperties}
                >
                  <AlertTriangle 
                    className="h-4 w-4" 
                    style={{ color: 'var(--color-warning)' }}
                  />
                  <AlertTitle style={{ color: 'var(--color-warning)' }}>Warning</AlertTitle>
                  <AlertDescription style={{ color: 'var(--color-warning)' }}>
                    Please review your settings before continuing.
                  </AlertDescription>
                </Alert>

                <Alert 
                  className="bg-white" 
                  style={{ 
                    borderColor: 'var(--color-error)',
                    '--alert-color': 'var(--color-error)'
                  } as React.CSSProperties}
                >
                  <AlertCircle 
                    className="h-4 w-4" 
                    style={{ color: 'var(--color-error)' }}
                  />
                  <AlertTitle style={{ color: 'var(--color-error)' }}>Error</AlertTitle>
                  <AlertDescription style={{ color: 'var(--color-error)' }}>
                    Something went wrong. Please try again.
                  </AlertDescription>
                </Alert>
              </div>
            </div>
        </CardContent>
      </Card>

      {/* Alert Dialog Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Alert Dialog
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/alert-dialog" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-destructive, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Alert Dialog */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Confirmation Dialog</h4>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription className="break-words">
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete Account
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Alert Dialog Variants */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Different Actions</h4>
            <div className="flex flex-wrap gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="outline">Discard Changes</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="sm:max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Discard Changes?</AlertDialogTitle>
                    <AlertDialogDescription className="break-words">
                      You have unsaved changes. Are you sure you want to discard them?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Keep Editing</AlertDialogCancel>
                    <AlertDialogAction>Discard Changes</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="secondary">Logout</Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="sm:max-w-md">
                  <AlertDialogHeader>
                    <AlertDialogTitle>Logout</AlertDialogTitle>
                    <AlertDialogDescription className="break-words">
                      Are you sure you want to logout? You will need to sign in again.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
                    <AlertDialogAction>Logout</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dialog Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Dialog
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/dialog" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-card, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Dialog */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Dialog</h4>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@johndoe"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsDialogOpen(false)}>
                    Save Changes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Form Dialog */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Form Dialog</h4>
            <Dialog open={isFormDialogOpen} onOpenChange={setIsFormDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Item
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new project.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="project-name">Project Name</Label>
                    <Input id="project-name" placeholder="Enter project name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Input id="description" placeholder="Enter project description" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Input id="category" placeholder="Enter category" />
                  </div>
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setIsFormDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={() => setIsFormDialogOpen(false)}>
                    Create Project
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>

      {/* Toast Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Toast (Sonner)
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/sonner" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-success, --color-destructive, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Toast Examples</h4>
            <p className="text-sm text-foreground-secondary">
              Note: Toast notifications require the Toaster component to be added to your app root.
              These are placeholder examples showing different toast types.
            </p>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.success("Operation completed successfully!")}
              >
                Success Toast
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.error("Something went wrong!")}
              >
                Error Toast
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.info("Here's some useful information")}
              >
                Info Toast
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => toast.warning("Please review your settings")}
              >
                Warning Toast
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tooltip Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Tooltip
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/tooltip" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Tooltip Examples</h4>
            <p className="text-sm text-foreground-secondary">
              Hover over the buttons below to see tooltips in action.
            </p>
            <div className="flex flex-wrap gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="sm">
                    Hover for tooltip
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a simple tooltip</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Info className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Information about the icon</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to edit your profile settings</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spinner Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Spinner</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-primary, --color-foreground
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Spinner Variants */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Loading States</h4>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Loading...</span>
              </div>
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
                <span className="text-sm">Primary loading</span>
              </div>
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-success" />
                <span className="text-sm">Success loading</span>
              </div>
            </div>
          </div>

          {/* Button with Spinner */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Button Loading States</h4>
            <div className="flex flex-wrap gap-2">
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </Button>
              <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing
              </Button>
              <Button variant="secondary" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skeleton Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Skeleton
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/skeleton" 
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
                CSS Variables: --color-muted, --color-muted-foreground
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Skeletons */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Skeletons</h4>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>

          {/* Card Skeleton */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Card Skeleton</h4>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </div>

          {/* Form Skeleton */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Form Skeleton</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-10 w-[100px]" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
