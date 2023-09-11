type ButtonProps = {
  name: string;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <div>
      <button
        className={`text-white text-[11px] uppercase rounded-full w-14 h-14 ${className}`}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
