type ButtonProps = {
  name: string;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ name, className }) => {
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
