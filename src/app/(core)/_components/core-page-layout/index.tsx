import { PropsWithChildren } from "react";
import { PageTitle } from "./page-title";
import { AppSidebar } from "../app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/sidebar";
import { cookies } from "next/headers";

export const CorePageLayout = async ({ children }: PropsWithChildren) => {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <div className="flex flex-col w-full overflow-auto p-2">
        <SidebarTrigger />
        <PageTitle />
        {children}
      </div>
    </SidebarProvider>
  );
};
