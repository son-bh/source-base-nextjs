'use client';

import classNames from 'classnames';
import LoadingIcon from '../LoadingIcon';

const Button = ({ className, children, isLoading, disabled, ...props }) => (
  <button
    className={classNames('disabled:bg-[#DDDDDD] disabled:hover:cursor-not-allowed flex justify-center items-center', className)}
    disabled={disabled || isLoading}
    {...props}
  >
    {children}
    {isLoading && <LoadingIcon icon="tail-spin" color="white" className="w-4 h-4 ml-2 intro-x" />}
  </button>
);

export default Button;
