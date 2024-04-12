'use client';

import Image from 'next/image';
import Link from 'next/link';
import { TECollapse, TERipple } from 'tw-elements-react';
import { useMemo, useState } from 'react';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/navigation';
import Bars3Icon from 'public/svg/bars3.svg';
// import Logo from 'public/images/logo.png';
import LocaleSwitcher from './components/LocaleSwitcher';

const MenuTop = [
  {
    name: 'home',
    link: '/',
  },
  {
    name: 'service',
    link: '/service',
  },
  {
    name: 'expense',
    link: '/expense',
  },
  {
    name: 'contact',
    link: '/contact',
  },
  {
    name: 'develop',
    link: '/integrate',
  },
];

const TopBar = () => {
  const [showMenubar, setShowMenubar] = useState(false);
  // const menuTop = useMemo(() => MenuTop.map(item => ({ ...item, name: t(`common:navbar.${item?.name}`) })), []);

  const toggleShow = () => setShowMenubar(!showMenubar);

  return (
    <header>
      <div className="max-w-[1200px] w-full mx-auto">
        <div className="flex items-center justify-between lg:justify-normal px-4 py-3">
          <Link href="/">
            <div className="w-[172px] h-[44px]">
              {/* <Image src={Logo} alt="logo" width={344} height={88} /> */}
              Logo
            </div>
          </Link>
          <div className="hidden lg:flex flex-grow justify-end gap-x-6 pl-5">
            {/* {MenuTop.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="text-[#121F4B] text-lg font-medium">{item.name}</div>
              </Link>
            ))} */}
            <LocaleSwitcher />
          </div>
          <div className="block lg:!hidden">
            <TERipple rippleColor="light">
              <Image src={Bars3Icon} alt="Bars3Icon" width={35} height={35} onClick={toggleShow} />
            </TERipple>
          </div>
        </div>
        <TECollapse className="rounded-none !mt-0" show={showMenubar}>
          <div className="block bg-white p-6 shadow-lg dark:bg-neutral-700 dark:text-neutral-50">
            {/* {MenuTop.map((item, index) => (
              <Link href={item.link} key={index}>
                <div className="text-[#121F4B] text-lg font-medium">{item.name}</div>
              </Link>
            ))} */}
            <LocaleSwitcher />
          </div>
        </TECollapse>
      </div>
    </header>
  );
};

export default TopBar;
