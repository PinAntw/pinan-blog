import { Box, Text, Title, Button, Image, Stack, Group, Badge } from '@mantine/core';

type ProjectCardProps = {
  image: string;
  title: string;
  summary: string;
  repoUrl: string;
  badges: string[];
};

const badgeColorMap: Record<string, string> = {
  Python: 'blue',
  ML: 'pink',
  PyQt: 'pink',
  Note: 'yellow',
  DataAnalysis: 'green',
  Backend: 'blue',
  Cloud: 'yellow',
  ExcelVBA: 'green',
  AndroidAPP: 'green'
};


export function Projectcard({ image, title, summary, repoUrl, badges }: ProjectCardProps) {
  return (
    <Box
      w="100%"
      h="100%"
      miw={250}
      mih={200}
      pos="relative"
      style={{
        overflow: 'hidden',
        borderRadius: '8px',
      }}
    >
      {/* 背景圖片層（透明可調） */}
      <Box
        pos="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        style={{
          backgroundImage:
            'url(https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      {/* 前景內容層 */}
      <Box
        pos="relative"
        h="100%"
        px="md"
        py="xl"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* 左側內容 */}
        <Stack  w="60%">
          <Title order={3}>{title}</Title>
          <Text size="sm">{summary}</Text>
          <Group mt="md" mb="xs">
            {badges.map((badge, index) => (
                <Badge color={badgeColorMap[badge] ?? 'gray'} key={index}>
                    {badge}
                </Badge>
            ))}
          </Group>
          <Button
            component="a"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="light"
            color="blue"
            mt="sm"
            w="fit-content"
          >
            查看 GitHub Repo
          </Button>
        </Stack>

        {/* 右側圖片 */}
        <Box w="35%">
          <Image
            src={image}
            alt=''
            radius="sm"
            fit="cover"
            width="100%"
            height={120}
          />
        </Box>
      </Box>
    </Box>
  );
}
