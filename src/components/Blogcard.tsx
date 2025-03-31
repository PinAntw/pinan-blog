import { Card, Image, Text, Badge, Group } from '@mantine/core';

interface BlogcardProps {
    title: string;
    short: string;
    badges: string[]; 
    img_url: string;

  }
const badgeColorMap: Record<string, string> = {
    Python: 'blue',
    ML: 'pink',
    PyQt: 'pink',
    Note: 'yellow',
};

export default function Blogcard({title, short, badges, img_url}: BlogcardProps) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={img_url}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700}>{title}</Text>
      </Group>
      <Group mt="md" mb="xs">
        {badges.map((badge, index) => (
            <Badge color={badgeColorMap[badge] ?? 'gray'} key={index}>
                {badge}
            </Badge>
        ))}
      </Group>


      <Text size="sm" c="dimmed">
        {short}
      </Text>
    </Card>
  );
}