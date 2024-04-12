import classNames from 'classnames';
import React from 'react';
import { Controller } from 'react-hook-form';
import RadioButton from '../RadioButton.jsx';

const RadioGroupController = ({
  control,
  name,
  defaultValue,
  label,
  options = [],
  containerClassName,
  labelClassName,
  inputContainerClassName,
  inputClassName,
  required,
  labelClickable,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ...props }, fieldState: { error } }) => (
        <div className={classNames('block', containerClassName)}>
          {label && (
            <label htmlFor={name} className={classNames('form-label', labelClassName)}>
              {label}
              {required && <sup className="text-danger ml-1">*</sup>}
            </label>
          )}
          <div className={classNames(inputContainerClassName)}>
            {options?.map((option, index) => (
              <RadioButton
                key={index}
                {...props}
                inputClassName={inputClassName}
                value={option?.value}
                label={option?.label}
                checked={option?.value === value}
                onChange={onChange}
              />
            ))}
          </div>

          {error && <div className="text-danger mt-2">{error.message || error?.inputValue?.message}</div>}
        </div>
      )}
    />
  );
};

export default RadioGroupController;
