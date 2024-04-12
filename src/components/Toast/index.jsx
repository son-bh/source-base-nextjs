import classNames from 'classnames';
import { toast as toastify } from 'react-toastify';
import Toast from './Toast';

export const toast = (type, message, toastId, autoClose = 5000) => {
  toastify.clearWaitingQueue();
  toastify.dismiss();
  setTimeout(() =>
    toastify(<Toast type={type} message={message} />, {
      toastId,
      autoClose,
      closeButton: false,
      closeOnClick: true,
      position: 'top-center',
      className: classNames('min-h-[58px] border', {
        'border-[#63C244] bg-[#F2FBF0]': type === 'success',
        'border-[#E76D64] bg-[#FDF1F1]': type === 'error',
      }),
    })
  );
};
