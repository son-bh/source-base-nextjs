import Image from 'next/image';
import Button from 'src/components/Button';
import GoogleIcon from 'public/svg/gmail.svg';
// import FacebookIcon from 'public/svg/facebook.svg';
// import AppleIcon from 'public/svg/apple.svg';
// import EmailIcon from 'public/svg/email.svg';
import { GOOGLE_CLIENT_ID } from 'src/constants/common';

const SocialAuth = () => {
  return (
    <div className="flex flex-col gap-y-3 pb-9">
      <Button
        className="w-full !justify-start p-4 bg-[#F5F5F5] rounded-[6px]"
        onClick={() => {
          window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=openid%20profile%20email&include_granted_scopes=true&response_type=token&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
            `${window.location.origin}/oauth/google`
          )}&state=${encodeURIComponent(window.location.pathname)}`;
        }}
      >
        <div className="w-8 h-8">
          <Image src={GoogleIcon} width={64} height={64} alt="google-icon" />
        </div>
        <span className="ml-4">Đăng nhập bằng Google</span>
      </Button>
      {/* <Button className="w-full !justify-start p-4 bg-[#F5F5F5] rounded-[6px]">
        <div className="w-8 h-8">
          <Image src={FacebookIcon} width={64} height={64} alt="facebook-icon" />
        </div>
        <span className="ml-4">Đăng nhập bằng Facebook</span>
      </Button>
      <Button className="w-full !justify-start p-4 bg-[#F5F5F5] rounded-[6px]">
        <div className="w-8 h-8">
          <Image src={AppleIcon} width={64} height={64} alt="apple-icon" />
        </div>
        <span className="ml-4">Đăng nhập bằng Apple</span>
      </Button>
      <Button className="w-full !justify-start p-4 bg-[#F5F5F5] rounded-[6px]">
        <div className="w-8 h-8">
          <Image src={EmailIcon} width={64} height={64} alt="email-icon" />
        </div>
        <span className="ml-4">Đăng nhập bằng Email</span>
      </Button> */}
    </div>
  );
};

export default SocialAuth;
