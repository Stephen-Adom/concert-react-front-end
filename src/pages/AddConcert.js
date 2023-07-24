import React, { useEffect, useState } from 'react';
import { MenuButton, BackButton } from '../components';
import { NewConcertDetails, ConcertLocationDetails, ConfirmSubmissionDetails } from '../features';

const AddConcert = () => {
  const [step, setStep] = useState(1);

  const renderPage = () => {
    switch (step) {
      case 1:
        return <NewConcertDetails setStep={setStep} />;
      case 2:
        return <ConcertLocationDetails setStep={setStep} />;
      case 3:
        return <ConfirmSubmissionDetails setStep={setStep} />;
      default:
        return null;
    }
  };

  const setStepperLinkStyle = () => 'flex md:w-full items-centersm:after:content-[\'\'] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10';

  const renderStepStatus = (linkstep) => {
    if (step > linkstep) {
      return (
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
      );
    }
    return <span className="mr-2">{linkstep}</span>;
  };

  useEffect(() => {
    renderPage();
  }, [step]);

  return (
    <div className="relative w-full h-screen px-5 md:px-10">
      <section className="flex flex-col items-center justify-start h-full py-10 text-center md:justify-center md:py-0">
        <h1 className="flex items-center text-3xl font-extrabold tracking-wide md:tracking-widest md:text-2xl gap-x-3">
          <MenuButton />
          CREATE CONCERT EVENT
        </h1>

        <div className="w-full md:!w-[95%] lg:!w-[80%] xl:!w-[80%] mx-auto mt-10">
          <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li
              className={`${setStepperLinkStyle()} ${step === 1 ? 'text-primaryGreen' : 'text-gray-500'
              }`}
            >
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {renderStepStatus(1)}
                Concert
                {' '}
                <span className="hidden sm:inline-flex sm:ml-2">Info</span>
              </span>
            </li>
            <li
              className={`${setStepperLinkStyle()} ${step === 2 ? 'text-primaryGreen' : 'text-gray-500'
              }`}
            >
              <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                {renderStepStatus(2)}
                Location
                {' '}
                <span className="hidden sm:inline-flex sm:ml-2">Info</span>
              </span>
            </li>
            <li
              className={`${setStepperLinkStyle()} ${step === 3 ? 'text-primaryGreen' : 'text-gray-500'
              }`}
            >
              {renderStepStatus(3)}
              Confirmation
            </li>
          </ol>

          <section className="mt-5">{renderPage()}</section>
        </div>
      </section>

      <BackButton />
    </div>
  );
};

export default AddConcert;
