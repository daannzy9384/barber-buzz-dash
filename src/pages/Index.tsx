import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-background">
        <AppSidebar />
        <main className="flex-1">
          <Dashboard />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
