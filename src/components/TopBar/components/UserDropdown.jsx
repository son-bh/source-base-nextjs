'use client';

import { ArrowRightOnRectangleIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { TEDropdown, TEDropdownItem, TEDropdownMenu, TEDropdownToggle } from 'tw-elements-react';
import { useRouter } from 'next/navigation';
import { CookieStorage } from 'src/utils/cookie-storage';

const UserDropdown = ({ userInfo, setUserInfo }) => {
  const router = useRouter();

  return (
    <TEDropdown className="hidden lg:flex justify-center">
      <TEDropdownToggle tag="div" className="flex items-center cursor-pointer rounded text-white">
        <div>{userInfo?.username}</div>
        <ChevronDownIcon className="w-4 h-4 ml-1" />
      </TEDropdownToggle>

      <TEDropdownMenu>
        <TEDropdownItem>
          <Link
            href="/profile"
            className="flex items-center w-full min-w-[280px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
          >
            <UserIcon className="w-5 h-5 mr-1" />
            <span>Tài khoản</span>
          </Link>
        </TEDropdownItem>
        <TEDropdownItem>
          <div
            className="flex items-center w-full min-w-[280px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600"
            onClick={() => {
              CookieStorage.clearSession();
              router.replace('/');
              router.refresh();
              setUserInfo(null);
            }}
          >
            <ArrowRightOnRectangleIcon className="w-5 h-5 mr-1" />
            <span>Đăng xuất</span>
          </div>
        </TEDropdownItem>
      </TEDropdownMenu>
    </TEDropdown>
  );
};

export default UserDropdown;
