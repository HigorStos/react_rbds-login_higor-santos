import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = ({
  inputId,
  label,
  icon,
  error,
  type,
  ...rest
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className='flex flex-col gap-1'>
      {label && (
        <label htmlFor={inputId} className='font-semibold text-black text-sm'>
          {label}
        </label>
      )}

      <div className='flex items-center h-12 w-full rounded-md border border-gray-300 focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 px-3 transition-all'>
        {icon && <span className='text-gray-400 mr-2'>{icon}</span>}

        <input
          id={inputId}
          type={inputType}
          className='flex-1 bg-transparent outline-none text-black'
          {...rest}
        />

        {isPassword && (
          <button
            type='button'
            onClick={() => setShowPassword((prev) => !prev)}
            className='text-gray-400 hover:text-gray-600 transition-colors ml-2'
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>

      <p className='text-sm text-red-500 min-h-5'>{error}</p>
    </div>
  );
};
