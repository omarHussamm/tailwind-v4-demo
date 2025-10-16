import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { 
  ArrowUpDown,
  MoreHorizontal,
  Edit,
  Trash2,
  Download,
  ExternalLink,
  FileText,
  Folder,
  Database,
  TrendingUp,
  Users,
  Calendar,
  Mail,
  Phone
} from 'lucide-react'

export function DataComponents() {
  // Sample data for tables
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
      lastLogin: "2024-01-15"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Active",
      lastLogin: "2024-01-14"
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "User",
      status: "Inactive",
      lastLogin: "2024-01-10"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      email: "sarah@example.com",
      role: "Moderator",
      status: "Active",
      lastLogin: "2024-01-15"
    }
  ]

  const projects = [
    {
      id: 1,
      name: "Website Redesign",
      status: "In Progress",
      progress: 75,
      team: 5,
      deadline: "2024-02-15"
    },
    {
      id: 2,
      name: "Mobile App",
      status: "Planning",
      progress: 25,
      team: 3,
      deadline: "2024-03-01"
    },
    {
      id: 3,
      name: "API Integration",
      status: "Completed",
      progress: 100,
      team: 2,
      deadline: "2024-01-10"
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-foreground">Data Components</h1>
        <p className="text-lg text-foreground-secondary">
          Tables, cards, accordions, and data display patterns
        </p>
      </div>

      {/* Table Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Table
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/table" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-muted
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Table</h4>
            <Table>
              <TableCaption>A list of recent system activities and user actions.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">001</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">JD</AvatarFallback>
                      </Avatar>
                      <span>John Doe</span>
                    </div>
                  </TableCell>
                  <TableCell>Login</TableCell>
                  <TableCell>
                    <Badge className="bg-success">Success</Badge>
                  </TableCell>
                  <TableCell className="text-right">2024-01-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">002</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">JS</AvatarFallback>
                      </Avatar>
                      <span>Jane Smith</span>
                    </div>
                  </TableCell>
                  <TableCell>File Upload</TableCell>
                  <TableCell>
                    <Badge className="bg-warning">Pending</Badge>
                  </TableCell>
                  <TableCell className="text-right">2024-01-15</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">003</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback className="text-xs">MJ</AvatarFallback>
                      </Avatar>
                      <span>Mike Johnson</span>
                    </div>
                  </TableCell>
                  <TableCell>Permission Change</TableCell>
                  <TableCell>
                    <Badge className="bg-error">Failed</Badge>
                  </TableCell>
                  <TableCell className="text-right">2024-01-14</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          {/* Sortable Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Sortable Table</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Button variant="ghost" className="h-auto p-0 font-medium">
                      Name
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="h-auto p-0 font-medium">
                      Email
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="h-auto p-0 font-medium">
                      Role
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead>
                    <Button variant="ghost" className="h-auto p-0 font-medium">
                      Status
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  </TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Data Table Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Data Table</CardTitle>
              <CardDescription>
                Custom implementation with sorting, filtering, and actions - CSS Variables: --color-background, --color-foreground, --color-border, --color-muted, --color-primary
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Advanced Data Table</h4>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Project</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Progress</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead>Deadline</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell className="font-medium">{project.name}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={
                            project.status === 'Completed' ? 'default' : 
                            project.status === 'In Progress' ? 'secondary' : 'outline'
                          }
                        >
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full" 
                              style={{ width: `${project.progress}%` }}
                            />
                          </div>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{project.team}</span>
                        </div>
                      </TableCell>
                      <TableCell>{project.deadline}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Card
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/card" 
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
                CSS Variables: --color-card, --color-card-foreground, --color-border, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Cards */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Card Variants</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="mr-2 h-5 w-5 text-primary" />
                    Database
                  </CardTitle>
                  <CardDescription>System database overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Total Records</span>
                      <span className="font-medium">1,234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Storage Used</span>
                      <span className="font-medium">2.4 GB</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5 text-success" />
                    Analytics
                  </CardTitle>
                  <CardDescription>Performance metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Page Views</span>
                      <span className="font-medium">+12%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Users</span>
                      <span className="font-medium">+8%</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    View Report
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5 text-warning" />
                    Users
                  </CardTitle>
                  <CardDescription>User management stats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Active Users</span>
                      <span className="font-medium">45</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>New This Month</span>
                      <span className="font-medium">8</span>
                    </div>
                  </div>
                </CardContent>
                <CardContent>
                  <Button variant="outline" size="sm" className="w-full">
                    Manage Users
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Card with Image */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Card with Image</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <FileText className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle>Project Documentation</CardTitle>
                  <CardDescription>Complete project documentation and guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Updated 2 days ago</span>
                    </div>
                    <Badge variant="outline">Documentation</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                  <Folder className="h-12 w-12 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle>Project Files</CardTitle>
                  <CardDescription>All project assets and resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Updated 1 week ago</span>
                    </div>
                    <Badge variant="outline">Assets</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Accordion Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                Accordion
                <div className="flex gap-2">
                  <a 
                    href="https://ui.shadcn.com/docs/components/accordion" 
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
                CSS Variables: --color-background, --color-foreground, --color-border, --color-muted, --radius
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Accordion */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Basic Accordion</h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and is fully accessible to screen readers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">FAQ Accordion</h4>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="faq-1">
                <AccordionTrigger>How do I get started?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>Getting started is easy! Follow these steps:</p>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Sign up for an account</li>
                      <li>Complete your profile setup</li>
                      <li>Explore the dashboard</li>
                      <li>Start using our features</li>
                    </ol>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>What are the pricing plans?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>We offer three pricing tiers:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li><strong>Basic:</strong> Free for personal use</li>
                      <li><strong>Pro:</strong> $9.99/month for advanced features</li>
                      <li><strong>Enterprise:</strong> Custom pricing for teams</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>How can I contact support?</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>You can reach our support team through:</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-4 w-4" />
                        <span>support@example.com</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-4 w-4" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      </Card>

      {/* Empty State Component */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Empty State</CardTitle>
              <CardDescription>
                Custom implementation - CSS Variables: --color-background, --color-foreground, --color-muted
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground">Empty States</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <FileText className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No documents yet</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Get started by creating your first document
                  </p>
                  <Button>
                    <FileText className="mr-2 h-4 w-4" />
                    Create Document
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <Users className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No team members</h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Invite team members to collaborate on your project
                  </p>
                  <Button>
                    <Users className="mr-2 h-4 w-4" />
                    Invite Members
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
