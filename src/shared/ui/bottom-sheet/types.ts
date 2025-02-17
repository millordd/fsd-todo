export interface IBottomSheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  header?: React.ReactNode;
  maxHeight?: 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10;
}
