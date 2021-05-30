export interface ISelectProps {
  label: string,
  options: string[],
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void,
  selected?: string,
};
