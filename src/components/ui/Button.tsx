interface IButtonProps {
  text: string;
  onClick?: () => void;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      className='w-full h-12 px-4 py-2 text-center text-md text-shadow-slate-900 font-semibold text-white bg-orange-400 hover:bg-orange-500 rounded cursor-pointer'
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};
