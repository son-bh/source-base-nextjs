import React from 'react';

// const getIconName = type => {
//   switch (type) {
//     case 'success':
//       return 'CheckCircle2';
//     case 'error':
//       return 'XCircle';
//     default:
//       return 'CheckCircle2';
//   }
// };

// const getIconClassName = (type: string) => {
//   switch (type) {
//     case 'success':
//       return 'fill-[#63C244]';
//     case 'error':
//       return 'fill-[#E76D64]';
//     default:
//       return 'fill-[#63C244]';
//   }
// };

const Toast = ({ message }) => {
  //   const iconName = getIconName(type);
  //   const iconClassName = getIconClassName(type);

  return (
    <div className="flex items-center">
      {/* <Lucide icon={iconName} className={`mr-2 text-white ${iconClassName}`} /> */}
      <span className="w-full toast-content-component text-sm">{message}</span>
    </div>
  );
};

export default Toast;
