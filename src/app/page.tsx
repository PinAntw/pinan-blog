import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Button, Space } from "@mantine/core";
import { HeroContentLeft } from '@/components/HeroContentLeft/HeroContentLeft';
import {Header} from '@/components/Header/Header';

function PostCard(post: Post) {
  return (
    <div className='mb-8'>
      <h2 className='mb-1 text-xl'>
        <Link href={post.url} className='text-blue-700 hover:text-blue-900'>
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <p>{post.summary}</p>
    </div>
  );
}
export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <div >
      <Header />
      <HeroContentLeft />
      <section id="about">
        <h1 className='text-center'>About area</h1>
      </section>
      <Space h="200px" />
      <section id="projects">
        <h1 className='text-center'>Projects area</h1>
      </section>
      <Space h="200px" />
      <section id="blog">
        <h1 className='text-center'>My Markdown Blog</h1>
        {posts.map((post) => (
          <PostCard {...post} key={post._id} />
         ))}
        <Button fullWidth>blog area</Button>
      </section>
      <Space h="200px" />
    </div>
  );
}