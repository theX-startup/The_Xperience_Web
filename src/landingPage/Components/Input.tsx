type props = {
  value: string;
  onChange: any;
  type: string;
  name?: string;
  class?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  autoFocus?: boolean;
  onFocusOut?: any;
};
const Input = (props: props) => {
  return (
    <input
      placeholder={props.placeholder}
      required={props.required}
      disabled={props.disabled}
      readOnly={props.readOnly}
      autoFocus={props.autoFocus}
      name={props.name}
      value={props.value}
      onChange={(e) => {
        props.onChange(e);
      }}
      type={props.type}
      className={`border-none bg-transparent w-full text_sm focus:outline-none ${props.class}`}
      onBlurCapture={props.onFocusOut}
    />
  );
};

export default Input;
