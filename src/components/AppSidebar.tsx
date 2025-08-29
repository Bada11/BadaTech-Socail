
import { Home, Inbox, NotebookPen, Search, Settings } from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  Sidebar,
} from "./ui/sidebar";
import Link from "next/link";
import { SignOutButton } from "./sign-out-button";
import { auth } from "@/auth";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Inbox,
  },
  {
    title: "Post",
    url: "/post",
    icon: NotebookPen,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];
export async function AppSidebar() {
  const session = await auth();
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item?.url}>
                      <item.icon />
                      <span>{item?.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      {session?.user && (
        <SidebarFooter>
          <SignOutButton />
        </SidebarFooter>
      )}
    </Sidebar>
  );
}

export default AppSidebar;
