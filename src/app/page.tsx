'use client';

import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { Space, Timeline, Text, Grid, Container } from "@mantine/core";
import { HeroContentLeft } from '@/components/HeroContentLeft/HeroContentLeft';
// import { Progressbar }from '@/components/Progressbar';
import Blogcard from '@/components/Blogcard';
import { Projectcard } from '@/components/Projectcard';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import { projects } from '@/data/projects';

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div >
      <section id="home">
        <HeroContentLeft />
        <Space h="50px" />
      </section>
      <Space h="30px" />

      <section id="about">
        <Container style={{textAlign: 'center'}}>
          <Text size="30px" fw={700} c={'#ab1b28'}>Experience</Text>
          <Space h="30px" />
        </Container>

        <Space h="30px" />
        <Grid justify="center">
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: 400 }}>
              <Text size="25px" fw={700} c={'black'}>About Me</Text>
              <Space h="50px" />
              <Text>
                我目前就讀於台灣大學資訊管理研究所碩一，進行LLM在對話系統上的研究。<br></br>對<Text span fw={700} c={'#C91A52'}>資料分析</Text>與<Text span fw={700} c={'#C91A52'}>軟體開發</Text>非常有興趣，並且具備快速學習新技術的能力。在大學期間參與多項專案，熟悉 Python 語法，並曾利用 PyQt 開發 GUI 模擬器。此外，我也有使用 PyTorch 進行深度學習專案的經驗，具備實作 AI 模型的能力。
              </Text>
              <Text mt="sm">
                透過跨領域課程的學習，我熟悉 STATA、R 等資料處理工具，也具備使用 Excel VBA 語法在 Excel 中實作 RPG 系統結合踩地雷遊戲。
              </Text>
              <Text mt="sm">
                我喜歡動手實作與學習新技術，期待未來能參與更多實際專案，持續精進並做出真正有影響力的成果！
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Text size="25px" fw={700} c={'black'}>Education</Text>
              <Timeline active={2} bulletSize={25}>
                <Space h="10px" />
                <Timeline.Item title="Bachelor Degree" >
                  <Text inherit style={{ color: 'rgb(140, 140, 140)' }}>2020/9 - 2024/6</Text>
                  <Text inherit>Industrial and Information Management (IIM), National Cheng Kung University</Text>
                </Timeline.Item>
                <Timeline.Item title="Master Degree" lineVariant="dashed" >
                  <Text size="xs" style={{ color: 'rgb(140, 140, 140)' }} inherit>2024/9 - 2026/6</Text>
                  <Text size="lg">Information Management (IM), National Taiwan University</Text>
                  <Text size="lg">Distributed Information System Laboratory</Text>
                </Timeline.Item>
                <Timeline.Item title="" lineVariant="dashed" />
              </Timeline>
            </div>
          </Grid.Col>

        </Grid>

      </section>

      <Space h="200px" />

      <section id="projects" style={{ backgroundColor: 'rgb(241, 241, 241)', padding: '80px 0', height:'800px'}}>
        <Container style={{textAlign: 'center'}}>
          <Text size="30px" fw={700} c={'#ab1b28'}>Project</Text>
          <Text size="50px" fw={800}>My Latest Projects!</Text>
          <Space h="30px" />
          <Text size="20px" fw={500}>以下整理了在學習中做的各種專案，主題包含機器學習、軟體開發、前後端網頁等。<br></br>更多內容歡迎到我的Github中查看</Text>
        </Container>

        <Space h="70px" />
        <Container size="100%">
          <Carousel
            slideSize="45%"
            height={350}
            slideGap="lg"
            loop
            withIndicators
            slidesToScroll={1}
            align="center"
          >
            {projects.map((project, index) => (
              <Carousel.Slide key={index}>
                <Projectcard {...project} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Container>
        
      </section>

      <Space h="80px" />

      <section id="blog" style={{  padding: '80px 0', height:'800px'}}>
        <Container style={{textAlign: 'center'}}>
          <Text size="30px" fw={700} c={'#ab1b28'}>Blog</Text>
          <Text size="50px" fw={800}>Learn and Contribute</Text>
          <Space h="30px" />
          <Text size="20px" fw={500}>在學習的路途上，得知於人太多，<br></br>所以也希望能把自己學到的知識和技能分享出去！
          </Text>
        </Container>
        <Space h="100px" />
        <Container size="lg">
          <Grid gutter="xl" justify="text-end">
            {posts.map((post) => (
              <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={post._id}>
                <Link href={post.url} style={{ textDecoration: 'none' }}>
                  <Blogcard
                    title={post.title}
                    short={post.description}
                    badges={post.badges ?? []} // 如果是 undefined，就用空陣列
                    img_url={post.img_url}
                    />
                </Link>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </section>

      <Space h="200px" />
    </div>
  );
}