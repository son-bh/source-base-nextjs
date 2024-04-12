import React from 'react';
import Image from 'next/image';
import Button from '../Button';

const MainBanner = ({ srcBanner, title, description, button }) => {
  const onClickButton = () => {};
  return (
    <div className="bg-gradient-banner">
      <div className="md:py-[63px] px-4 py-[32px]">
        <div className="max-w-[696px] lg:max-w-[1200px] flex flex-col gap-6 w-full mx-auto rounded-[16px] md:rounded-[36px]">
          <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-[156px] gap-[24px] text-[#121F4B]">
            <div className="flex flex-col gap-y-6 justify-between">
              <div className="flex flex-col gap-y-6">
                <h2 className="font-extrabold text-[33px] leading-[46px]">{title}</h2>
                <p className="text-sm">{description}</p>
              </div>
              <Button
                className="md:block hidden w-full md:w-fit px-14 py-4 bg-[#6CC9B7] rounded-[12px] text-white font-mediumtext-[18px]"
                onClick={onClickButton}
              >
                {button}
              </Button>
            </div>
            <Image
              className="w-full h-full"
              src={srcBanner}
              alt="banner-img"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <Button
              className="block md:hidden w-full md:w-fit px-14 py-4 bg-[#6CC9B7] rounded-[12px] text-white font-mediumtext-[18px]"
              onClick={onClickButton}
            >
              {button}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
