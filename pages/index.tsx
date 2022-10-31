import type { NextPage } from "next";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import { TABS } from "../helper/constant";
import { combineClass } from "../helper/combineClass";

const Home: NextPage = () => {
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] =
    useState(true);
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false);

  return (
    <div className="pt-10 pb-16">
      <div className="px-4 sm:px-6 md:px-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Settings
        </h1>
      </div>
      <div className="px-4 sm:px-6 md:px-0">
        <div className="py-6">
          {/* Tabs */}
          <div className="lg:hidden">
            <label htmlFor="selected-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="selected-tab"
              name="selected-tab"
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-purple-500 focus:outline-none focus:ring-purple-500 sm:text-sm"
              defaultValue={TABS.find((tab) => tab.current).name}
            >
              {TABS.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden lg:block">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                {TABS.map((tab) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={combineClass(
                      tab.current
                        ? "border-purple-500 text-purple-600"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                    )}
                  >
                    {tab.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Description list with inline editing */}
          <div className="mt-10 divide-y divide-gray-200">
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Profile
              </h3>
              <p className="max-w-2xl text-sm text-gray-500">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
            <div className="mt-6">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">Chelsea Hagon</span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-500">Photo</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </span>
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-500">Email</dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">chelsea.hagon@example.com</span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Job title
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">Human Resources Manager</span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 divide-y divide-gray-200">
            <div className="space-y-1">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Account
              </h3>
              <p className="max-w-2xl text-sm text-gray-500">
                Manage how information is displayed on your account.
              </p>
            </div>
            <div className="mt-6">
              <dl className="divide-y divide-gray-200">
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Language
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">English</span>
                    <span className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                    </span>
                  </dd>
                </div>
                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                  <dt className="text-sm font-medium text-gray-500">
                    Date format
                  </dt>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <span className="flex-grow">DD-MM-YYYY</span>
                    <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Update
                      </button>
                      <span className="text-gray-300" aria-hidden="true">
                        |
                      </span>
                      <button
                        type="button"
                        className="rounded-md bg-white font-medium text-purple-600 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                      >
                        Remove
                      </button>
                    </span>
                  </dd>
                </div>
                <Switch.Group
                  as="div"
                  className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
                >
                  <Switch.Label
                    as="dt"
                    className="text-sm font-medium text-gray-500"
                    passive
                  >
                    Automatic timezone
                  </Switch.Label>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <Switch
                      checked={automaticTimezoneEnabled}
                      onChange={setAutomaticTimezoneEnabled}
                      className={combineClass(
                        automaticTimezoneEnabled
                          ? "bg-purple-600"
                          : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={combineClass(
                          automaticTimezoneEnabled
                            ? "translate-x-5"
                            : "translate-x-0",
                          "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
                <Switch.Group
                  as="div"
                  className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
                >
                  <Switch.Label
                    as="dt"
                    className="text-sm font-medium text-gray-500"
                    passive
                  >
                    Auto-update applicant data
                  </Switch.Label>
                  <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    <Switch
                      checked={autoUpdateApplicantDataEnabled}
                      onChange={setAutoUpdateApplicantDataEnabled}
                      className={combineClass(
                        autoUpdateApplicantDataEnabled
                          ? "bg-purple-600"
                          : "bg-gray-200",
                        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto"
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={combineClass(
                          autoUpdateApplicantDataEnabled
                            ? "translate-x-5"
                            : "translate-x-0",
                          "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                        )}
                      />
                    </Switch>
                  </dd>
                </Switch.Group>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
