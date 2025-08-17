import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import AppHeader from '@/components/layout/header';
import CommunicationHub from '@/components/dashboard/communication-hub';

export default function MessagesPage() {
  return (
    <SidebarProvider>
      <div className="flex h-screen max-h-screen overflow-hidden">
        <AppSidebar />
        <SidebarInset className="flex-1 bg-background flex flex-col">
          <AppHeader />
          <main className="flex-1 overflow-hidden">
            <CommunicationHub />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
