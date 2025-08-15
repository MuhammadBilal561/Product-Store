import React from "react";
import { CiSquarePlus } from "react-icons/ci";
import ThemeToggle from "./ui/ThemeToggle";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <header className="bg-indigo-950">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <div className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className="text-white text-1xl font-bold tracking-tight sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl">
                <Link href={"/"}> Product Store 🛍️</Link>
              </h2>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              command="show-modal"
              commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div href="#" className="text-sm/6 font-semibold text-white">
              <div className="flex items-center gap-x-2 ">
                <Link href={"/create"}>
                  <CiSquarePlus className="lg:text-4xl sm:text-2xl md:text-3xl" />
                </Link>
                <ThemeToggle className=" cursor-pointer lg:text-4xl sm:text-2xl md:text-3xl" />
              </div>
            </div>
          </div>
        </nav>
        <el-dialog>
          <dialog
            id="mobile-menu"
            className="backdrop:bg-transparent lg:hidden"
          >
            <div tabIndex="0" className="fixed inset-0 focus:outline-none">
              <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                <div className="flex items-center justify-between">
                  <div className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <h2 className="text-white text-1xl font-bold tracking-tight sm:text-1xl md:text-1xl lg:text-2xl xl:text-2xl">
                      <Link href={"/"}>🛍️</Link>
                    </h2>
                  </div>
                  <button
                    type="button"
                    command="close"
                    commandfor="mobile-menu"
                    className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      data-slot="icon"
                      aria-hidden="true"
                      className="size-6"
                    >
                      <path
                        d="M6 18 18 6M6 6l12 12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-white/10">
                    <div className="py-6">
                      <div className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5">
                        <div className="flex items-center justify-between gap-x-2 ">
                          <Link href={"/create"}>
                            <CiSquarePlus className="lg:text-5xl text-5xl sm:text-8xl md:text-5xl" />
                          </Link>
                          <ThemeToggle className=" cursor-pointer text-5xl lg:text-4xl sm:text-3xl md:text-3xl" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </el-dialog-panel>
            </div>
          </dialog>
        </el-dialog>
      </header>
    </div>
  );
};

export default Header;
