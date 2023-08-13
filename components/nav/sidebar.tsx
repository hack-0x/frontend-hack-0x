"use client"

import { useSelectedLayoutSegment } from "next/navigation"
import { Wallet2, Workflow, ShoppingCart, Bell, Unplug, Settings } from "lucide-react"
import Link from "next/link"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Sidebar = () => {
  const segment = useSelectedLayoutSegment();

  const sidebarOptions = [
    {name: "dashboard", href: "/dashboard", icon:Wallet2, current: !segment ? true : false},
    {name: "project room", href: "/dashboard/project-room", icon:Workflow, current: `/${segment}` === "/project-room" ? true : false},
    {name: "market", href: "/dashboard/market", icon:ShoppingCart, current: `/${segment}` === "/market" ? true : false},
    {name: "feeds", href: "/dashboard/feeds", icon:Bell, current: `/${segment}` === "/feeds" ? true : false},
    {name: "settings", href: "/dashboard/settings", icon:Settings, current: `/${segment}` === "/settings" ? true : false},
    // {name: "disconnect", href: "/dashboard", current: true, icon:Unplug},
  ]

  return(
    <div className="p-3 bg-black">
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lf:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r-2">
          <div className="flex h-16 shrink-0 items-center">
            <h1 className="text-3xl font-bold">hack-0x</h1>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {sidebarOptions.map((option) => (
                    <li key={option.name}>
                        <Link href={option.href} className={classNames(option.current ? "bg-gray-700 text-white" : "text-gray-400 hover:text-white hover:bg-gray-400", "group flex gap-x-3 p-2 rounded-md text-sm font-semibold" )}>
                      <option.icon  className="text-gray-300 group-hover:text-white h-6 w-6 shrink-0"/>
                      {option.name}
                        </Link>
                    </li>
                  ))
                  }
                </ul>
              </li>
            </ul>                
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Sidebar;