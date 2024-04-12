'use client';

import ForgotPasswordForm from './components/ForgotPasswordForm';

const ForgotPassword = () => {
  return (
    <div className="bg-[#F7F9FB] py-[28px] xl:py-[56px]">
      <div className="lg:max-w-[496px] w-full mx-auto bg-white rounded-xl mb-9">
        <div className="p-4 xl:px-[60px] xl:py-9">
          <div className="pb-9 text-[#3D3D3D] text-[26px] font-semibold">Quên mật khẩu</div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
