export interface IInputProps {
  className?: string;
  label?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onClick?: () => void;
  onBlur?: () => void;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  help?: string;
  name?: string;
  error?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  variant?: 'standard' | 'outlined';
  readonly?: boolean;
}
