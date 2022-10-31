import React from "react";
import { combineClass } from "../../helper/combineClass";
import { NAVIGATION, SECONDARY_NAVIGATION } from "../../helper/constant";
import MainLogo from "../svg/MainLogo";

const DesktopSidebar = () => {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <nav className="flex flex-grow flex-col overflow-y-auto bg-gray-800 pb-4">
        <div className="flex flex-shrink-0 items-center px-4 py-6 bg-gray-900">
          <MainLogo />
        </div>
        <div className="mt-5 flex-grow">
          <div className="space-y-1">
            {NAVIGATION.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={combineClass(
                  item.current
                    ? "bg-blue-700 border-white text-white"
                    : "border-transparent text-gray-400 hover:text-gray-400 hover:bg-gray-900",
                  "group border-l-4 py-2 px-3 flex items-center text-sm font-medium"
                )}
              >
                <item.icon
                  className={combineClass(
                    item.current
                      ? "text-white"
                      : "text-gray-400 group-hover:text-gray-400",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="block w-full flex-shrink-0">
          {SECONDARY_NAVIGATION.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group flex items-center border-l-4 border-transparent py-2 px-3 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-gray-400"
            >
              <item.icon
                className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-400"
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
