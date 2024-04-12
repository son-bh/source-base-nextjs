import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import Button from 'src/components/Button';
import InputController from 'src/components/Form/InputController';
import { registerFormValidate } from 'src/utils/validate';
import { useRegisterMutation } from 'src/services/user';
import { toast } from 'src/components/Toast';

const RegisterForm = () => {
  const router = useRouter();
  const registerMutation = useRegisterMutation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(registerFormValidate()),
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
      passwordConf: '',
    },
  });

  const onSubmit = values => {
    registerMutation.mutate(
      { ...values },
      {
        onSuccess: () => {
          toast('success', 'Đăng ký tài khoản thành công');
          router.push('/login');
        },
      }
    );
  };

  return (
    <div className="mb-4">
      <form>
        <InputController control={control} name="username" label="Username" required />
        <InputController control={control} name="fullname" label="Tên đầy đủ" required containerClassName="mt-3" />
        <InputController control={control} name="email" label="Email" required containerClassName="mt-3" />
        <InputController control={control} type="password" name="password" label="Mật khẩu" required containerClassName="mt-3" />
        <InputController
          control={control}
          type="password"
          name="passwordConf"
          label="Xác nhận mật khẩu"
          required
          containerClassName="mt-3"
        />
      </form>
      <div className="flex text-[#3D3D3D] text-sm font-medium mt-2">
        <input
          className="w-4 h-4 rounded-sm border-2 border-solid border-neutral-300 cursor-pointer mr-1 mt-[2px]"
          type="checkbox"
          value=""
          id="checkboxDefault"
        />
        <div>
          Tôi đồng ý với <span className="text-[#4C88E3]">Điều khoản dịch vụ</span> và&nbsp;
          <span className="text-[#4C88E3]">Chính sách bảo mật</span> của Cryptocy
        </div>
      </div>
      <div>
        <Button
          className="w-full mt-3 px-4 py-2 bg-[#2354E6] rounded text-white font-semibold text-sm xl:text-base"
          isLoading={registerMutation.isLoading}
          onClick={handleSubmit(onSubmit)}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
