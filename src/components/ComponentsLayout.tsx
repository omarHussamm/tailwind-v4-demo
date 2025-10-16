import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Palette, 
  Moon, 
  Sun, 
  Layout, 
  FormInput, 
  MessageSquare, 
  Navigation, 
  Database, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface ComponentsLayoutProps {
  currentPage: string
  onPageChange: (page: string) => void
  children: React.ReactNode
}

const navigationItems = [
  {
    id: 'basic',
    title: 'Basic Components',
    description: 'Foundational UI elements',
    icon: Layout,
    href: 'https://ui.shadcn.com/docs/components'
  },
  {
    id: 'form',
    title: 'Form Components',
    description: 'Inputs and form controls',
    icon: FormInput,
    href: 'https://ui.shadcn.com/docs/components'
  },
  {
    id: 'feedback',
    title: 'Feedback Components',
    description: 'Alerts, dialogs, and notifications',
    icon: MessageSquare,
    href: 'https://ui.shadcn.com/docs/components'
  },
  {
    id: 'navigation',
    title: 'Navigation Components',
    description: 'Menus, tabs, and navigation',
    icon: Navigation,
    href: 'https://ui.shadcn.com/docs/components'
  },
  {
    id: 'data',
    title: 'Data Components',
    description: 'Tables, cards, and data display',
    icon: Database,
    href: 'https://ui.shadcn.com/docs/components'
  },
  {
    id: 'advanced',
    title: 'Advanced Components',
    description: 'Complex interactions and patterns',
    icon: Settings,
    href: 'https://ui.shadcn.com/docs/components'
  }
]

export function ComponentsLayout({ currentPage, onPageChange, children }: ComponentsLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Palette className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-2xl font-bold text-foreground">Component Showcase</h1>
                <p className="text-sm text-foreground-secondary">shadcn/ui + Tailwind CSS v4</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://ui.shadcn.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
              >
                shadcn/ui Docs
              </a>
              <a 
                href="https://tailwindcss.com/docs/v4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
              >
                Tailwind v4 Docs
              </a>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="h-9 w-9"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Left Side with Collapse */}
        <aside className={`border-r bg-card min-h-screen transition-all duration-300 ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}>
          <div className={`${isSidebarCollapsed ? 'p-2' : 'p-4'}`}>
            <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center mb-4' : 'justify-between mb-4'}`}>
              {!isSidebarCollapsed && (
                <h2 className="text-lg font-semibold text-foreground">Components</h2>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                className="h-8 w-8"
              >
                {isSidebarCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            </div>
            
            <nav className="space-y-1">
              {navigationItems.map((item) => {
                const Icon = item.icon
                const isActive = currentPage === item.id
                
                return (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`w-full text-left rounded-md transition-colors ${
                      isSidebarCollapsed ? 'p-2 flex justify-center' : 'p-2'
                    } ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent hover:text-accent-foreground'
                    }`}
                    title={isSidebarCollapsed ? item.title : undefined}
                  >
                    <div className={`flex items-center ${isSidebarCollapsed ? 'justify-center' : 'space-x-2'}`}>
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      {!isSidebarCollapsed && (
                        <div className="text-sm font-medium">{item.title}</div>
                      )}
                    </div>
                  </button>
                )
              })}
            </nav>
            
            {!isSidebarCollapsed && (
              <>
                <Separator className="my-6" />
                
                {/* Quick Links */}
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Quick Links</h3>
                  <div className="space-y-2">
                    <a
                      href="https://ui.shadcn.com/docs/components"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      All shadcn/ui Components
                    </a>
                    <a
                      href="https://tailwindcss.com/docs/v4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      Tailwind CSS v4 Documentation
                    </a>
                    <a
                      href="https://ui.shadcn.com/themes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-foreground-secondary hover:text-foreground transition-colors"
                    >
                      Theme Customization
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
