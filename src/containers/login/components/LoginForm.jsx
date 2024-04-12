import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'src/components/Button';
import InputController from 'src/components/Form/InputController';
import { loginFormValidate } from 'src/utils/validate';
import { useLoginMutation } from 'src/services/user';
import { CookieStorage } from 'src/utils/cookie-storage';
import { StorageKeys } from 'src/constants/storage-keys';
import useUserState from 'src/stores/user';

const LoginForm = () => {
  const router = useRouter();
  const { setUserInfo } = useUserState();
  const loginMutation = useLoginMutation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(loginFormValidate()),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = values => {
    loginMutation.mutate(
      { ...values },
      {
        onSuccess: response => {
          CookieStorage.setCookieData(StorageKeys.AccessToken, response?.token);
          CookieStorage.setCookieData(StorageKeys.UserInfo, JSON.stringify(response?.data));
          setUserInfo(response?.data);
          router.replace('/');
        },
      }
    );
  };

  return (
    <div className="mb-4">
      <form>
        <InputController control={control} name="username" label="Username" required />
        <InputController control={control} type="password" name="password" label="Mật khẩu" required containerClassName="mt-3" />
      </form>
      <div className="flex justify-end my-3">
        <span
          className="text-sm text-[#2354E6] hover:underline cursor-pointer"
          onClick={() => {
            router.push('/forgot-password');
          }}
        >
          Quên mật khẩu
        </span>
      </div>
      <Button
        className="w-full px-4 py-2 mb-4 bg-[#2354E6] rounded text-white font-semibold text-sm xl:text-base"
        isLoading={loginMutation.isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        Đăng nhập
      </Button>
      <div className="flex justify-center">
        <span className="text-sm">Bạn chưa có tài khoản?</span>
        <span
          className="text-sm text-[#2354E6] hover:underline cursor-pointer"
          onClick={() => {
            router.push('/register');
          }}
        >
          Đăng ký
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
