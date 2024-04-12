import classNames from 'classnames';
import { Controller } from 'react-hook-form';

const InputController = ({
  name,
  type = 'text',
  control,
  placeholder,
  label,
  labelClassName,
  required,
  textarea,
  rows = 3,
  suffix,
  containerClassName,
  inputContainerClassName,
  inputClassName,
  onChange,
  ...rest
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <div className={classNames('block', containerClassName)}>
        {label && (
          <label htmlFor={name} className={classNames('form-label text-gray-400 text-sm', labelClassName)}>
            {label}
            {required && <sup className="text-danger ml-1">*</sup>}
          </label>
        )}
        {textarea ? (
          <textarea
            id={name}
            className={classNames('form-control border border-[#DADDE5] rounded-md', inputClassName)}
            placeholder={placeholder}
            rows={rows}
            {...field}
            {...rest}
            onChange={e => {
              onChange?.(e);
              field.onChange(e);
            }}
          />
        ) : (
          <div className={classNames('relative', inputContainerClassName)}>
            {suffix && (
              <div className={classNames('input-suffix')} overlay-suffix={suffix}>
                {field?.value || placeholder || suffix}
              </div>
            )}
            <input
              id={name}
              type={type}
              className={classNames('form-control border border-[#DADDE5] rounded-md py-2 px-3 w-full', inputClassName)}
              placeholder={placeholder}
              {...field}
              {...rest}
              onChange={e => {
                onChange?.(e);
                field.onChange(e);
              }}
            />
          </div>
        )}
        {error && <div className="text-danger mt-2">{error.message}</div>}
      </div>
    )}
  />
);

export default InputController;
