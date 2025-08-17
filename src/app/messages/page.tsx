import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import AppHeader from '@/components/layout/header';
import CommunicationHub from '@/components/dashboard/communication-hub';

export default function MessagesPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex-1 bg-background">
          <AppHeader />
          <main className="p-4 md:p-8">
            <CommunicationHub />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
