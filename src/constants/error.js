export const ErrorForm = {
  Required: 'Trường này là bắt buộc',
  EmailInvalid: 'Email không đúng định dạng',
  MaximumPhoneLength: 'Số phone bao gồm 10 chữ số',
  MaximumUsernameLength: 'Username từ 5 đến 30 ký tự',
  MaximumPasswordLength: 'Username từ 8 đến 20 ký tự',
  MaximumFieldLength: 'Trường này phải từ 8 đến 20 ký tự',
  PasswordInvalid: 'Mật khẩu phải bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt',
  PasswordNotSame: 'Mật khẩu xác nhận phải giống với mật khẩu mới',
  MinMoney: amount => `Số tiền phải lớn hơn hoặc bằng ${amount}`,
  MaxMoney: amount => `Số tiền phải nhỏ hơn hoặc bằng ${amount}`,
  MaxLength: length => `Bạn được nhập tối đa ${length} ký tự`,
};

export const ErrorApi = {
  WRONG_USERNAME_OR_PASSWORD: 'Tên đăng nhập hoặc mật khẩu sai',
  THE_USERNAME_OR_EMAIL_EXISTED: 'Tài khoản này đã tồn tại',
};
