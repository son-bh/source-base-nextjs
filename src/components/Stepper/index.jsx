import React from 'react';
import { useTranslation } from 'react-i18next';

const StepperIcon = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill={color}>
      <rect x="1.5" y="1.5" width="24" height="24" rx="12" fill="#A8A8A8" />
      <rect x="1.5" y="1.5" width="24" height="24" rx="12" stroke="#E2E2E2" stroke-width="3" />
    </svg>
  );
};


const Stepper = ({ stepCurrent }) => {
  const { t } = useTranslation();
  const steps = [t('common:bank_online.step.login_acc'), t('common:bank_online.step.author_code'), t('common:bank_online.step.result_payment')];
  return (
    <>
      <div className="flex justify-between relative max-w-full">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`relative flex flex-col justify-start items-center w-36 ${stepCurrent === i  && ''} ${
              i  < stepCurrent.step && stepCurrent.isSuccess && 'complete'
            } `}
          >
            <div className="flex items-center justify-center z-10 relative bg-slate-700 rounded-full font-semibold text-white">
              {i  < stepCurrent.step ? <StepperIcon color={'#6CC9B7'} /> : <StepperIcon />}
            </div>
            <p className="text-gray-500 text-center text-base ld:text-lg">{step}</p>
          </div>
        ))}
        <div className="h-[2px] absolute w-2/3 translate-x-[50%] right-1/2 top-3 bg-[#E2E2E2]"></div>
      </div>
    </>
  );
};

export default Stepper;
