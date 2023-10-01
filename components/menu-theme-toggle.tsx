import { useTheme } from "next-themes";
import { DropdownMenuItem } from "./ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { Sun } from "lucide-react";

export default function MenuThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenuItem className="cursor-default focus:bg-inherit">
      <Tabs defaultValue={theme} className="w-full">
        <TabsList className="w-full justify-between">
          <TabsTrigger
            value="light"
            onClick={() => setTheme("light")}
            className="py-2"
          >
            <SunIcon className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger
            value="dark"
            onClick={() => setTheme("dark")}
            className="py-2"
          >
            <MoonIcon className="w-4 h-4" />
          </TabsTrigger>
          <TabsTrigger
            value="system"
            onClick={() => setTheme("system")}
            className="py-2"
          >
            <DesktopIcon className="w-4 h-4" />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </DropdownMenuItem>
  );
}
