import { DropdownMenu } from "@/components/dropdown-menu"
import { Icon } from "@/components/icon"
import { Sheet } from "@/components/sheet"
import { SidebarMenuButton } from "@/components/sidebar"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { checkUser } from "@/lib/session"
import { ChevronRight, UserCircle2 } from "lucide-react"
import { ProfileSheet } from "../../../profile-sheet"
import { SignOutDropdownItem } from "../sign-out-button"

export const UserNav = async () => {
  const user = await checkUser();

  if (!user) {
    return null;
  }
  return <Sheet.Root>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <SidebarMenuButton>
          <Icon
            src={UserCircle2}
            className="size-4"
          /> {user.name}
          <Icon
            src={ChevronRight}
            className="ml-auto"
          />
        </SidebarMenuButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        className="w-56 mb-4"
        sideOffset={16}
        forceMount
        side="right"
      >
        <DropdownMenu.Label className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user?.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user?.email}
            </p>
          </div>
        </DropdownMenu.Label>
        <DropdownMenu.Separator />
        <Sheet.Trigger asChild>
          <DropdownMenu.Item>Profile</DropdownMenu.Item>
        </Sheet.Trigger>
        <ThemeSwitcher />
        <DropdownMenu.Separator />
        <SignOutDropdownItem />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
    <ProfileSheet user={user} />
  </Sheet.Root>
}