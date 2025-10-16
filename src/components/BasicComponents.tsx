import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { 
  Star, 
  Heart, 
  Download, 
  Upload, 
  Settings, 
  ExternalLink
} from 'lucide-react'

export function BasicComponents() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Basic Components</h1>
        <p className="text-lg text-foreground-secondary">
          Foundational UI elements with all variants and states
        </p>
      </div>

      {/* Button Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Button
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/button" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">shadcn docs</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  <a 
                    href="https://tailwindcss.com/docs/v4" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs"
                  >
                    <Badge variant="outline" className="text-xs">Tailwind v4</Badge>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardTitle>
              <CardDescription>
                CSS Variables: --color-primary, --color-primary-foreground, --color-secondary, --color-secondary-foreground, --color-destructive, --color-destructive-foreground, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Button Variants */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Sizes</h4>
            <div className="flex flex-wrap items-center gap-2">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon"><Star className="h-4 w-4" /></Button>
            </div>
          </div>

          {/* Button States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="flex flex-wrap gap-2">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
            </div>
          </div>

          {/* Button with Icons */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With Icons</h4>
            <div className="flex flex-wrap gap-2">
              <Button>
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Upload
              </Button>
              <Button variant="secondary">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Button Group Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Button Group</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-primary, --color-border, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex">
            <Button variant="outline" className="rounded-r-none border-r-0">
              Left
            </Button>
            <Button variant="outline" className="rounded-none border-r-0">
              Center
            </Button>
            <Button variant="outline" className="rounded-l-none">
              Right
            </Button>
          </div>
          <div className="flex">
            <Button className="rounded-r-none border-r border-primary-foreground/20">
              Primary
            </Button>
            <Button variant="secondary" className="rounded-none border-r border-secondary-foreground/20">
              Secondary
            </Button>
            <Button variant="destructive" className="rounded-l-none">
              Destructive
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Badge Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Badge
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/badge" 
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
                CSS Variables: --color-primary, --color-secondary, --color-destructive, --color-border, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Badge Variants */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Variants</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Custom Colors</h4>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary">Primary</Badge>
              <Badge className="bg-success">Success</Badge>
              <Badge className="bg-warning">Warning</Badge>
              <Badge className="bg-error">Error</Badge>
              <Badge className="bg-info">Info</Badge>
            </div>
          </div>

          {/* Badge with Icons */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With Icons</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <Star className="mr-1 h-3 w-3" />
                Featured
              </Badge>
              <Badge variant="secondary">
                <Heart className="mr-1 h-3 w-3" />
                Liked
              </Badge>
              <Badge variant="outline">
                <Settings className="mr-1 h-3 w-3" />
                Settings
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Avatar Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Avatar
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/avatar" 
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
                CSS Variables: --color-background, --color-foreground, --color-muted, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Avatar Sizes */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Sizes</h4>
            <div className="flex items-center space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe" />
                <AvatarFallback className="text-xs">JD</AvatarFallback>
              </Avatar>
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar className="h-12 w-12">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Mike%20Johnson" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="h-16 w-16">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Sarah%20Wilson" />
                <AvatarFallback className="text-lg">SW</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Avatar States */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">States</h4>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=User%20With%20Image" />
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>NF</AvatarFallback>
              </Avatar>
              <Avatar className="ring-2 ring-primary">
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Online%20User" />
                <AvatarFallback>OU</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Avatar with User Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">With User Info</h4>
            <div className="flex items-center space-x-3">
              <Avatar>
                <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-foreground-secondary">john@example.com</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Separator Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Separator
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/separator" 
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
                CSS Variables: --color-border
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Horizontal Separator */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Horizontal</h4>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-foreground-secondary">Content above separator</p>
                <Separator className="my-4" />
                <p className="text-sm text-foreground-secondary">Content below separator</p>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Vertical</h4>
            <div className="flex items-center space-x-4">
              <div className="text-sm">Left content</div>
              <Separator orientation="vertical" className="h-4" />
              <div className="text-sm">Right content</div>
            </div>
          </div>

          {/* Separator in Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">In Navigation</h4>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">Home</Button>
              <Button variant="ghost" size="sm">About</Button>
              <Separator orientation="vertical" className="h-4" />
              <Button variant="ghost" size="sm">Contact</Button>
              <Button variant="ghost" size="sm">Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
