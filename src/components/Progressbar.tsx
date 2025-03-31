import { Progress } from '@mantine/core';

interface ProgressbarProps {
  value: number;
  label: string;
}

export function Progressbar({value, label}:ProgressbarProps) {
  return (
    <Progress.Root size="xl" style={{ width: '30%', margin: '0 auto' }}>
      <Progress.Section color="rgba(120, 116, 116, 1)" value={value}>
        <Progress.Label>{label}</Progress.Label>
      </Progress.Section>
    </Progress.Root>
  );
}