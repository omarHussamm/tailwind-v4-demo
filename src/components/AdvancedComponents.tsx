import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  Share,
  Download,
  ExternalLink,
  Settings,
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  ChevronDown,
  Search,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Activity
} from 'lucide-react'

export function AdvancedComponents() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Advanced Components</h1>
        <p className="text-lg text-foreground-secondary">
          Complex interactions, dropdowns, popovers, and custom patterns
        </p>
      </div>

      {/* Dropdown Menu Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Dropdown Menu
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/dropdown-menu" 
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
                CSS Variables: --color-background, --color-foreground, --color-muted, --color-accent, --color-border, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Dropdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Dropdown</h4>
            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    Actions
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Messages</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Copy className="mr-2 h-4 w-4" />
                    <span>Duplicate</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Share className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* User Menu Dropdown */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">User Menu</h4>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=John%20Doe" alt="John Doe" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      john@example.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Messages</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>

      {/* Popover Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Popover
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/popover" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-popover, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Popover */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Popover</h4>
            <div className="flex flex-wrap gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Open popover</Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">Dimensions</h4>
                      <p className="text-sm text-muted-foreground">
                        Set the dimensions for the layer.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="width">Width</Label>
                        <Input
                          id="width"
                          defaultValue="100%"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxWidth">Max. width</Label>
                        <Input
                          id="maxWidth"
                          defaultValue="300px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="height">Height</Label>
                        <Input
                          id="height"
                          defaultValue="25px"
                          className="col-span-2 h-8"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="maxHeight">Max. height</Label>
                        <Input
                          id="maxHeight"
                          defaultValue="none"
                          className="col-span-2 h-8"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Pick a date
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <div className="p-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Select Date Range</h4>
                      <p className="text-sm text-muted-foreground">
                        Choose your preferred date range
                      </p>
                    </div>
                    <div className="grid gap-2 mt-4">
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">Today</Button>
                        <Button variant="outline" size="sm">This Week</Button>
                        <Button variant="outline" size="sm">This Month</Button>
                        <Button variant="outline" size="sm">This Year</Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Contact Popover */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Contact Info Popover</h4>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="h-auto p-0">
                  <div className="flex items-center space-x-3 p-2">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src="https://api.dicebear.com/7.x/initials/svg?seed=Jane%20Smith" />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">Jane Smith</h4>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">jane@example.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">San Francisco, CA</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </CardContent>
      </Card>

      {/* Typography Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Typography</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-foreground, --color-foreground-secondary, --font-family-sans, --font-size-*, --font-weight-*, --line-height-*
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Headings */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Headings</h4>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
              <h2 className="text-3xl font-semibold">Heading 2 - 3xl Semibold</h2>
              <h3 className="text-2xl font-semibold">Heading 3 - 2xl Semibold</h3>
              <h4 className="text-xl font-medium">Heading 4 - xl Medium</h4>
              <h5 className="text-lg font-medium">Heading 5 - lg Medium</h5>
              <h6 className="text-base font-medium">Heading 6 - base Medium</h6>
            </div>
          </div>

          {/* Body Text */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Body Text</h4>
            <div className="space-y-2">
              <p className="text-base">Regular paragraph text - base size</p>
              <p className="text-sm">Small text - sm size</p>
              <p className="text-xs">Extra small text - xs size</p>
              <p className="text-base text-muted-foreground">Muted text for secondary information</p>
            </div>
          </div>

          {/* Text Styles */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Text Styles</h4>
            <div className="space-y-2">
              <p className="text-base">
                <strong>Bold text</strong> and <em>italic text</em> and <u>underlined text</u>
              </p>
              <p className="text-base">
                <code className="bg-muted px-1 py-0.5 rounded text-sm">Inline code</code> in a sentence
              </p>
              <p className="text-base">
                <a href="#" className="text-primary hover:underline">Link text</a> that can be clicked
              </p>
            </div>
          </div>

          {/* Lists */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Lists</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">Unordered List</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Ordered List</p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>First step</li>
                  <li>Second step</li>
                  <li>Third step</li>
                </ol>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Chart</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-primary, --color-success, --color-warning, --color-error, --color-muted
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Chart Examples */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Chart Examples</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Monthly Sales</CardTitle>
                  <CardDescription>Revenue by month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-center space-x-4 h-40">
                    <div className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-10 rounded-t transition-all hover:opacity-80 shadow-sm" 
                        style={{ 
                          height: '60px', 
                          backgroundColor: '#1ca8e1' 
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground">Jan</span>
                      <span className="text-xs font-medium">$12k</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-10 rounded-t transition-all hover:opacity-80 shadow-sm" 
                        style={{ 
                          height: '80px', 
                          backgroundColor: '#1ca8e1' 
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground">Feb</span>
                      <span className="text-xs font-medium">$19k</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-10 rounded-t transition-all hover:opacity-80 shadow-sm" 
                        style={{ 
                          height: '45px', 
                          backgroundColor: '#1ca8e1' 
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground">Mar</span>
                      <span className="text-xs font-medium">$8k</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-10 rounded-t transition-all hover:opacity-80 shadow-sm" 
                        style={{ 
                          height: '90px', 
                          backgroundColor: '#1ca8e1' 
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground">Apr</span>
                      <span className="text-xs font-medium">$24k</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div 
                        className="w-10 rounded-t transition-all hover:opacity-80 shadow-sm" 
                        style={{ 
                          height: '70px', 
                          backgroundColor: '#1ca8e1' 
                        }}
                      ></div>
                      <span className="text-xs text-muted-foreground">May</span>
                      <span className="text-xs font-medium">$18k</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">User Growth</CardTitle>
                  <CardDescription>Active users over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-32 flex items-center justify-center">
                    <div className="relative w-full h-20">
                      <svg className="w-full h-full" viewBox="0 0 200 80">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(var(--primary))" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                          </linearGradient>
                        </defs>
                        <polyline
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3"
                          points="0,60 40,40 80,50 120,20 160,30 200,10"
                        />
                        <circle cx="0" cy="60" r="4" fill="hsl(var(--primary))" />
                        <circle cx="40" cy="40" r="4" fill="hsl(var(--primary))" />
                        <circle cx="80" cy="50" r="4" fill="hsl(var(--primary))" />
                        <circle cx="120" cy="20" r="4" fill="hsl(var(--primary))" />
                        <circle cx="160" cy="30" r="4" fill="hsl(var(--primary))" />
                        <circle cx="200" cy="10" r="4" fill="hsl(var(--primary))" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>1.2k users</span>
                    <span>2.8k users</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Pie Chart Example */}
            <div className="mt-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Traffic Sources</CardTitle>
                  <CardDescription>Website traffic breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center h-40">
                    <div className="relative w-32 h-32">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#f9fafb"
                          strokeWidth="12"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#1ca8e1"
                          strokeWidth="12"
                          strokeDasharray="75.4 251.2"
                          strokeDashoffset="0"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#5cb85c"
                          strokeWidth="12"
                          strokeDasharray="50.3 251.2"
                          strokeDashoffset="-75.4"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#ffc107"
                          strokeWidth="12"
                          strokeDasharray="25.1 251.2"
                          strokeDashoffset="-125.7"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke="#e13d3d"
                          strokeWidth="12"
                          strokeDasharray="100.5 251.2"
                          strokeDashoffset="-150.8"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#1ca8e1' }}></div>
                      <span>Direct (30%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#5cb85c' }}></div>
                      <span>Social (20%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ffc107' }}></div>
                      <span>Email (10%)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#e13d3d' }}></div>
                      <span>Referral (40%)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Chart Controls */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Chart Controls</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <BarChart3 className="mr-2 h-4 w-4" />
                Bar Chart
              </Button>
              <Button variant="outline" size="sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                Line Chart
              </Button>
              <Button variant="outline" size="sm">
                <PieChart className="mr-2 h-4 w-4" />
                Pie Chart
              </Button>
              <Button variant="outline" size="sm">
                <Activity className="mr-2 h-4 w-4" />
                Area Chart
              </Button>
            </div>
          </div>

          {/* Chart Filters */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Chart Filters</h4>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
