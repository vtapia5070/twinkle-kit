interface InputProps {
  className?: string;
}

export const Input = ({
  className = '',
}: InputProps) => {
  return (
    <div className={className}>
      Input
    </div>
  );
};

export default Input;