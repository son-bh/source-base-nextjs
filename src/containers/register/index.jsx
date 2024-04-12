'use client';

import RegisterForm from './components/RegisterForm';

const Register = () => {
  return (
    <div>
      <div className="bg-[#F7F9FB] py-[28px] xl:py-[56px]">
        <div className="lg:max-w-[496px] w-full mx-auto bg-white rounded-xl mb-9">
          <div className="p-4 xl:px-[60px] xl:py-9">
            <div className="pb-9 text-[#3D3D3D] text-[26px] font-semibold">Đăng Ký</div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
