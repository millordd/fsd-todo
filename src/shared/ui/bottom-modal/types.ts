export interface IBottomModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
}
