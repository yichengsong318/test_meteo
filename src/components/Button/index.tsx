import React, { useMemo } from 'react';
import './styles/button.css';

interface ButtonProps {
  text: any;
  className?: string;
  disabled?: boolean;
  borderColor?: string;
  onClick: (e?: any) => void;
  onMouseEnter?: (e: any) => void;
  onMouseLeave?: (e: any) => void;
  [key: string]: any;
}

const Button = (props: ButtonProps) => {
  const { onClick, onMouseEnter, onMouseLeave, text, className, borderColor, disabled } = props;

  const handleClick = () => {
    if (!disabled) {
      onClick();
    }
  };

  const buttonClasses = useMemo(
    () =>
      `${className}${disabled ? ' bg-gray-600 hover:bg-gray-600 cursor-not-allowed' : ' cursor-pointer'} select-none${
        borderColor ? ` border border-${borderColor} ` : ''
      }rounded-md p-2`,
    [className, disabled, borderColor]
  );

  return (
    <>
      <div onClick={handleClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={buttonClasses}>
        {text}
      </div>
    </>
  );
};
export default React.memo(Button);
