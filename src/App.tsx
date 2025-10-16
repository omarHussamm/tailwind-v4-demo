import { useState } from 'react'
import { ComponentsLayout } from '@/components/ComponentsLayout'
import { BasicComponents } from '@/components/BasicComponents'
import { FormComponents } from '@/components/FormComponents'
import { FeedbackComponents } from '@/components/FeedbackComponents'
import { NavigationComponents } from '@/components/NavigationComponents'
import { DataComponents } from '@/components/DataComponents'
import { AdvancedComponents } from '@/components/AdvancedComponents'
import { Toaster } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

function App() {
  const [currentPage, setCurrentPage] = useState('basic')

  const renderPage = () => {
    switch (currentPage) {
      case 'basic':
        return <BasicComponents />
      case 'form':
        return <FormComponents />
      case 'feedback':
        return <FeedbackComponents />
      case 'navigation':
        return <NavigationComponents />
      case 'data':
        return <DataComponents />
      case 'advanced':
        return <AdvancedComponents />
      default:
        return <BasicComponents />
    }
  }

  return (
    <TooltipProvider>
      <ComponentsLayout currentPage={currentPage} onPageChange={setCurrentPage}>
        {renderPage()}
      </ComponentsLayout>
      <Toaster 
        theme="light"
        className="toaster group"
        toastOptions={{
          classNames: {
            toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
            description: "group-[.toast]:text-muted-foreground",
            actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
            cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          },
        }}
      />
    </TooltipProvider>
  )
}

export default App
