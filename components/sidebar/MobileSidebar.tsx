import { Fragment, Dispatch } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NAVIGATION, SECONDARY_NAVIGATION } from "../../helper/constant";
import { combineClass } from "../../helper/combineClass";
import MainLogo from "../svg/MainLogo";

const MobileSidebar = ({
  sidebarOpen,
  setSidebarOpen,
}: {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<boolean>;
}) => {
  return (
    <Transition.Root show={sidebarOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-40 md:hidden"
        onClose={setSidebarOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-40 flex">
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-14 p-1">
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full focus:bg-gray-600 focus:outline-none"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <XMarkIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Close sidebar</span>
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 items-center px-4 py-6 bg-gray-900">
                <MainLogo />
              </div>
              <div className="mt-5 h-0 flex-1 overflow-y-auto">
                <nav className="flex h-full flex-col">
                  <div className="space-y-1">
                    {NAVIGATION.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={combineClass(
                          item.current
                            ? "bg-blue-700 border-white text-white"
                            : "border-transparent text-gray-400 hover:text-gray-400 hover:bg-gray-900",
                          "group border-l-4 py-2 px-3 flex items-center text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={combineClass(
                            item.current
                              ? "text-white"
                              : "text-gray-400 group-hover:text-gray-400",
                            "mr-4 flex-shrink-0 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-auto space-y-1 pt-10">
                    {SECONDARY_NAVIGATION.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center border-l-4 border-transparent py-2 px-3 text-sm font-medium text-gray-400 hover:bg-gray-900 hover:text-gray-400"
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </nav>
              </div>
            </Dialog.Panel>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MobileSidebar;
