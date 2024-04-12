import * as yup from 'yup';
import { ErrorForm } from 'src/constants/error';
import { MAIL_REGEX, PASSWORD_REGEX } from 'src/constants/common';

export const registerFormValidate = () => {
  return yup.object().shape({
    username: yup
      .string()
      .min(5, ErrorForm.MaximumUsernameLength)
      .max(30, ErrorForm.MaximumUsernameLength)
      .nullable()
      .required(ErrorForm.Required),
    fullname: yup.string().max(255, ErrorForm.MaxLength(255)).nullable().required(ErrorForm.Required),
    email: yup
      .string()
      .max(255, ErrorForm.MaxLength(255))
      .email(ErrorForm.EmailInvalid)
      .matches(MAIL_REGEX, {
        message: ErrorForm.EmailInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
    password: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .matches(PASSWORD_REGEX, {
        message: ErrorForm.PasswordInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
    passwordConf: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .oneOf([yup.ref('password'), null], ErrorForm.PasswordNotSame)
      .matches(PASSWORD_REGEX, {
        message: ErrorForm.PasswordInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const changePasswordFormValidate = () => {
  return yup.object().shape({
    password: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .matches(PASSWORD_REGEX, {
        message: ErrorForm.PasswordInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
    newPassword: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .matches(PASSWORD_REGEX, {
        message: ErrorForm.PasswordInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
    passwordConf: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .oneOf([yup.ref('newPassword'), null], ErrorForm.PasswordNotSame)
      .matches(PASSWORD_REGEX, {
        message: ErrorForm.PasswordInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const loginFormValidate = () => {
  return yup.object().shape({
    username: yup.string().nullable().required(ErrorForm.Required),
    password: yup
      .string()
      .min(8, ErrorForm.MaximumPasswordLength)
      .max(20, ErrorForm.MaximumPasswordLength)
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const loginFormPaymentValidate = () => {
  return yup.object().shape({
    username: yup.string().nullable().required(ErrorForm.Required),
    password: yup
      .string()
      .min(8, ErrorForm.MaximumFieldLength)
      .max(20, ErrorForm.MaximumFieldLength)
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const tradingCodeValidate = () => {
  return yup.object().shape({
    code: yup.string().nullable().required(ErrorForm.Required),
    otp: yup
      .string()
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const forgotPasswordFormValidate = () => {
  return yup.object().shape({
    email: yup
      .string()
      .max(255, ErrorForm.MaxLength(255))
      .email(ErrorForm.EmailInvalid)
      .matches(MAIL_REGEX, {
        message: ErrorForm.EmailInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
  });
};

export const addBankValidate = () => {
  return yup.object().shape({
    name: yup.object().nullable().required(ErrorForm.Required),
    accountNumber: yup.string().nullable().required(ErrorForm.Required),
    accountName: yup.string().nullable().required(ErrorForm.Required),
  });
};

export const addUSDTWalletValidate = () => {
  return yup.object().shape({
    network: yup.object().nullable().required(ErrorForm.Required),
    code: yup.string().nullable().required(ErrorForm.Required),
  });
};

export const buyFromValidate = () => {
  return yup.object().shape({
    amount: yup
      .number()
      .transform(value => (isNaN(value) ? undefined : value))
      .nullable()
      .required(ErrorForm.Required)
      .min(20000, ErrorForm.MinMoney(20000))
      .max(300000000, ErrorForm.MaxMoney(300000000)),
  });
};

export const sellFromValidate = () => {
  return yup.object().shape({
    amount: yup
      .number()
      .transform(value => (isNaN(value) ? undefined : value))
      .nullable()
      .required(ErrorForm.Required)
      .min(1, ErrorForm.MinMoney(1))
      .max(300000000, ErrorForm.MaxMoney(300000000)),
  });
};

export const contactFormValidate = () => {
  return yup.object().shape({
    username: yup
      .string()
      .min(5, ErrorForm.MaximumUsernameLength)
      .max(30, ErrorForm.MaximumUsernameLength)
      .nullable()
      .required(ErrorForm.Required),
    email: yup
      .string()
      .max(255, ErrorForm.MaxLength(255))
      .email(ErrorForm.EmailInvalid)
      .matches(MAIL_REGEX, {
        message: ErrorForm.EmailInvalid,
        excludeEmptyString: true,
      })
      .nullable()
      .required(ErrorForm.Required),
    channel: yup
      .string()
      .nullable()
      .required(ErrorForm.Required),
    content: yup
      .string()
      .nullable(),
  });
};
