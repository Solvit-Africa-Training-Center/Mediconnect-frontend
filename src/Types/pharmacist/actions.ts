export interface QuickAction {
  id: number;
  label: string;
  onClick: () => void;
  style?: string; // e.g., different Tailwind classes
}
