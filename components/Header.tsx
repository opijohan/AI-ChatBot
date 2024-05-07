"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname();
  const items = [
    {
      href: "/",
      title: "",
      openInNewTab: true,
    },
  ];

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      {/* add a svg logo if needed */}
      <p className="text-base font-medium">Religion AI</p>
    </Link>
  );

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link href="/" target="_blank">
        <p className="md:text-sm text-sm leading-7 text-minor">Login</p>
      </Link>
      <Link href="/" target="_blank">
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#C2A5AA] font-semibold hover:bg-primary/90 max-w-fit h-8 rounded-md px-4 py-1 ">
          <p className=" md:text-sm text-sm leading-7 text-minor text-[#0B0808]">
            Sign Up
          </p>
        </button>
      </Link>
    </div>
  );

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href || pathname.includes(item.href);
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? "_blank" : ""}
              key={item.title}
            >
              <p
                className={
                  cn(selected && "text-primary") +
                  "md:text-sm text-sm leading-7 text-minor"
                }
              >
                {item.title}
              </p>
            </Link>
          );
        })}
      </>
    );
  };

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="flex items-center gap-x-8 w-full">
          <div className="md:flex-0 min-w-fit flex-1">{getLogo()}</div>
          <div className="hidden md:flex items-center w-full">
            <div className="flex items-center gap-x-8 flex-1">
              {getHeaderItems()}
            </div>
            {getAuthButtons()}
          </div>
          {/* Mobile */}
          <div className="md:hidden flex gap-x-4 items-center">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>-</DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">X</div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">{getHeaderItems()}</div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}
