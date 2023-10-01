import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { Sun } from "lucide-react";

export default function MobileThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenuItem className="cursor-default focus:bg-inherit">
      <Tabs className="w-full">
        <TabsList className="w-full justify-between">
          <TabsTrigger value="light" onClick={() => setTheme("light")}>
            <SunIcon className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger value="dark" onClick={() => setTheme("dark")}>
            <MoonIcon className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger value="system" onClick={() => setTheme("system")}>
            <DesktopIcon className="w-4 h-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </DropdownMenuItem>
  );
}
