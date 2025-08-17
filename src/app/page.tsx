import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import AppSidebar from '@/components/layout/sidebar';
import AppHeader from '@/components/layout/header';
import OverviewCards from '@/components/dashboard/overview-cards';
import ProgressReport from '@/components/dashboard/progress-report';
import JourneyTimeline from '@/components/dashboard/journey-timeline';
import TeamStats from '@/components/dashboard/team-stats';
import AiInsights from '@/components/dashboard/ai-insights';

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <SidebarInset className="flex-1 bg-background">
          <AppHeader />
          <main className="p-4 md:p-8 space-y-8">
            <OverviewCards />
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="lg:col-span-2 space-y-8">
                <ProgressReport />
                <AiInsights />
              </div>
              <div className="lg:col-span-1 space-y-8">
                <JourneyTimeline />
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
                <TeamStats />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
