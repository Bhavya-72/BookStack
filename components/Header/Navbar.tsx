"use client";



import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../modeToggle";
import { NavigationMenuDemo } from "../NavMenu/storeMenu";
import { NavigationMenuDemoMobile } from "../NavMenu/storeMenuPhone";



import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);




export const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
    if (open) {
      setOpen(false);
    }
  };
  return (
    <header className="z-50">
      <nav className="navbar ">
        <div>
          <Link  className="flex flex-row justify-center items-center gap-3" href={"/"}>
            <Image src={"/walletconnect.png"} alt="" width={50} height={50} />
            <h1 className="text-[20px] font-extrabold bg-gradient-to-r to-purple-800 dark:font-extrabold text-transparent bg-clip-text  from-sky-500 ">BOOKSTACK</h1>
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="flex justify-center items-center gap-3">
            <li><a href="/">Home</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><Link href={'/About'}>About</Link></li>
            <li><a href="/Store"><NavigationMenuDemo/></a></li>
          </ul>
        </div>

        <div className="md:hidden flex">
          <button onClick={handleOpen}>
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        </div>
        {open && (
          <div className="md:hidden absolute  bg-white dark:bg-black top-16 left-0 w-full shadow-lg flex flex-col gap-6 backdrop-blur-lg p-10">
            <div>
              <ul className="flex  flex-col justify-center items-center z-100 gap-3">
                <li><a href="#">Home</a></li>
                <li><a href="/Contact">Contact</a></li>
                <Link href={'/About'}>About</Link>
                <li className="text-[20px]"><a href="/Store"><NavigationMenuDemoMobile/></a></li>
              </ul>
            </div>
            <div className="items-center justify-center flex gap-3 ">
              <div>
                <w3m-button />
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        )}
        <div className="md:flex hidden items-center justify-center gap-3">
          <div>
            <w3m-button />
          </div>
          <div>
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
