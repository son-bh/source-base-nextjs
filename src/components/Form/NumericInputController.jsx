import classNames from 'classnames';
import { Controller } from 'react-hook-form';
import NumericFormat from '../NumericFormat';

const NumericInputController = ({
  name,
  control,
  placeholder,
  label,
  onChange,
  containerClassName,
  labelClassName,
  suffix,
  suffixClassName,
  inputClassName,
  inputContainerClassName,
  isLabelInsideInput,
  required,
  maxValue,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <div className={classNames('block', containerClassName, { relative: isLabelInsideInput })}>
        <label htmlFor={name} className={classNames('form-label text-gray-400 text-sm', labelClassName)}>
          {label}
          {required && <sup className="text-danger ml-1">*</sup>}
        </label>
        <div className={classNames('relative', inputContainerClassName)}>
          <NumericFormat
            id={name}
            className={classNames('form-control border border-[#DADDE5] rounded-md py-2 px-3 w-full', inputClassName, {
              'pr-10': !!suffix,
              'border-danger': error,
            })}
            valueIsNumericString
            placeholder={placeholder}
            value={field.value}
            isAllowed={({ floatValue }) => {
              return !maxValue ? true : floatValue !== undefined ? floatValue <= maxValue : true;
            }}
            onFocus={field.onFocus}
            onBlur={field.onBlur}
            onValueChange={({ value: newValue }) => {
              onChange?.(newValue);
              field.onChange(newValue);
            }}
            getInputRef={field.ref}
            {...props}
          />
          {!!suffix && (
            <div className={classNames('absolute w-10 top-0 bottom-0 m-auto right-0 flex items-center justify-center', suffixClassName)}>
              <span>{suffix}</span>
            </div>
          )}
        </div>
        {error && <div className="text-danger mt-2">{error.message}</div>}
      </div>
    )}
  />
);

export default NumericInputController;
