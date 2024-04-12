import { Controller } from 'react-hook-form';
import RSelect from 'react-select';
import classNames from 'classnames';

const SelectController = ({
  name,
  control,
  label,
  containerClassName,
  labelClassName,
  options,
  selectClassName,
  required,
  controlClassName,
  onChange,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <div className={classNames('block', containerClassName)}>
        {!!label && (
          <label htmlFor={name} className={classNames('form-label text-gray-400 text-sm', labelClassName)}>
            {label}
            {required && <sup className="text-danger ml-1">*</sup>}
          </label>
        )}
        <RSelect
          className={classNames('form-control', selectClassName)}
          classNamePrefix="select"
          options={options}
          {...field}
          {...props}
          onChange={(newValue, actionMeta) => {
            onChange?.(newValue, actionMeta);
            field.onChange(newValue);
          }}
          classNames={{
            control: state =>
              classNames(
                'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 !rounded-md focus:ring-[#015fcc] focus:border-[#015fcc] !shadow-none !min-h-[42px]',
                state.isFocused && '!border-[#015fcc] !shadow-[0_0_0_1px] !shadow-[#015fcc] !border-2',
                controlClassName
              ),
            indicatorSeparator: () => classNames('hidden'),
            singleValue: () => classNames('text-neutral-700 dark:text-neutral-100'),
            menu: () => classNames('!z-[11] text-neutral-700 dark:text-neutral-100 bg-white dark:bg-neutral-900'),
          }}
        />
        {error && <div className="text-danger mt-2">{error.message}</div>}
      </div>
    )}
  />
);

export default SelectController;
