import { useState, ReactNode } from "react";
import { Switch } from "@headlessui/react";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import DesktopSidebar from "../components/sidebar/DesktopSidebar";
import MobileSidebar from "../components/sidebar/MobileSidebar";
import { TABS } from "../helper/constant";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

  return (
    <>
      <div>
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <DesktopSidebar />

        {/* Content area */}
        <div className="md:pl-64">
          <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
            <div className="sticky md:hidden top-0 z-10 flex h-16 flex-shrink-0 border-gray-200 bg-white ">
              <button
                type="button"
                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <main className="flex-1">
              <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
