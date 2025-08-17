import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import AppHeader from '@/components/layout/header';
import JourneyTimeline from '@/components/dashboard/journey-timeline';

export default function JourneyPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex-1 bg-background">
          <AppHeader />
          <main className="p-4 md:p-8">
            <JourneyTimeline />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
