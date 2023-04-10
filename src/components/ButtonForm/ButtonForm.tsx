interface ButtonProps {
  isDisabled: boolean;
  text: string;
  className: string;
}

const ButtonForm = ({
  isDisabled,
  text,
  className,
}: ButtonProps): JSX.Element => {
  return (
    <button disabled={isDisabled} className={className} type="submit">
      {text}
    </button>
  );
};

export default ButtonForm;
