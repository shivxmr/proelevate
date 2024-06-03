"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "./ui/button"
import Image from "next/image"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Unlock your Career Potential(Internship)",
    href: "/docs/primitives/alert-dialog",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Launch Your Career Journey (Full Time)",
    href: "/docs/primitives/hover-card",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Join the Tech Titans (FAANG)",
    href: "/docs/primitives/progress",
    description:
      "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Work From Anywhere (Remote Jobs)",
    href: "/docs/primitives/scroll-area",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
]

export function NavigationMenuDemo() {
  return (
    <div className="flex mt-2">
        <Image src="/logo1.svg" alt="logo" width={5} height={5}
        className="h-10 w-32" 
        />
    <NavigationMenu className="ml-5">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>DSA Practice</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Arsh Goyal
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa amet corporis et sunt? Consequatur eos est doloribus debitis, repellendus sapiente?
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="6 Companies 30 Days">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus.
              </ListItem>
              <ListItem href="/docs/installation" title="Arsh DSA Sheet">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, impedit.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Blind 75">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, vel?
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Jobs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Competitions
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Interviews
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

    </NavigationMenu>
        <Button className="ml-5 text-center rounded-full transition-all duration-500 ease-in-out bg-orange-500 text-white hover:bg-orange-600
        min-w-fit">Log In</Button>
        <Button className="text-center rounded-full transition-all duration-500 ease-in-out ml-2 bg-gray-50 text-black border border-gray-300 hover:bg-gray-200
        min-w-fit">Join Free</Button>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
