'use client';

import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Link from 'next/link';
import { Space, Timeline, Text, Grid, Container } from "@mantine/core";
import { HeroContentLeft } from '@/components/HeroContentLeft/HeroContentLeft';
// import { Progressbar }from '@/components/Progressbar';
import Blogcard from '@/components/Blogcard';

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
        <h1 className='text-center' style={{ fontSize: '20px', fontWeight: 'bold' , color: 'rgb(190, 128, 120)' }}>Experience</h1>
        <Space h="30px" />
        <Grid justify="center">
          <Grid.Col 
              span={{base: 12}} 
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Timeline active={1} bulletSize={25}>
              <Timeline.Item title="Bachelor Degree" >
                  <Text inherit style={{color: 'rgb(140, 140, 140)'}}>2020/9 - 2024/6 </Text>
                  <Text inherit>Industrial and Information Management (IIM), National Cheng Kung University </Text>
              </Timeline.Item>
              <Timeline.Item title="Master Degree" lineVariant="dashed">
                  <Text size="xs" style={{color: 'rgb(140, 140, 140)'}} inherit>2024/9 - 2026/6 </Text>
                  <Text size="lg" >Information Management (IM), National Taiwan University </Text>
                  <Text size="lg" >Distributed Information System Laboratory</Text>
              </Timeline.Item>
              <Timeline.Item title="" lineVariant="dashed">
              </Timeline.Item>
            </Timeline>
          </Grid.Col>
        </Grid>
      </section>

      <Space h="200px" />

      <section id="projects">
        <h1 className='text-center'>Projects area</h1>
      </section>
      <Space h="200px" />

      <section id="blog">
        <h1 className='text-center' style={{ fontSize: '20px', fontWeight: 'bold' , color: 'rgb(190, 128, 120)' }}>Blog</h1>
        <Space h="30px" />
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