export interface ITabProps {
  tabs: string[];
  value: string;
  onChange: (tab: string) => void;
  className?: string;
}
