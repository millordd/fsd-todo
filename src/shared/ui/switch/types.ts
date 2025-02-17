export interface ISwitchProps {
  checked: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  name?: string;
  id?: string;
}
