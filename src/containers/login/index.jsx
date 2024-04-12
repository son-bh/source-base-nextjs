'use client';

import LoginForm from './components/LoginForm';
import SocialAuth from './components/SocialAuth';

const Auth = () => {
  return (
    <div className="bg-[#F7F9FB] py-[28px] xl:py-[56px]">
      <div className="lg:max-w-[496px] w-full mx-auto bg-white rounded-xl mb-9">
        <div className="p-4 xl:px-[60px] xl:py-9">
          <div className="pb-9 text-[#3D3D3D] text-[26px] font-semibold">Đăng nhập</div>
          <LoginForm />
          <div className="flex justify-center items-center mb-4 after:w-1/2 after:h-[1px] after:bg-[#E0E0E0] after:block after:relative before:w-1/2 before:h-[1px] before:bg-[#E0E0E0] before:block before:relative">
            <span className="mx-[10px] uppercase">Hoặc</span>
          </div>
          <SocialAuth />
        </div>
      </div>
    </div>
  );
};

export default Auth;
