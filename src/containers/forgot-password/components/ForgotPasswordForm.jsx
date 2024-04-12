import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'src/components/Button';
import InputController from 'src/components/Form/InputController';
import { forgotPasswordFormValidate } from 'src/utils/validate';
import { useLoginMutation } from 'src/services/user';

const ForgotPasswordForm = () => {
  const loginMutation = useLoginMutation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(forgotPasswordFormValidate()),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = values => {
    console.log('🚀 ~ file: ForgotPasswordForm.jsx:25 ~ onSubmit ~ values:', values);
  };

  return (
    <div className="mb-4">
      <form className="mb-5">
        <InputController control={control} name="email" label="Email" placeholder="Email" required />
      </form>

      <Button
        className="w-full px-4 py-2 mb-4 bg-[#2354E6] rounded text-white font-semibold text-sm xl:text-base"
        isLoading={loginMutation.isLoading}
        onClick={handleSubmit(onSubmit)}
      >
        Cập nhật
      </Button>
    </div>
  );
};

export default ForgotPasswordForm;
