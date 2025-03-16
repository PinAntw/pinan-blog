import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import { Button } from "@mantine/core";
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
      <h1 className='text-center'>My Markdown Blog</h1>
      {posts.map((post) => (
        <PostCard {...post} key={post._id} />
      ))}
      <Button className="bg-blue-500 hover:bg-blue-700 text-white">
        Hello, Mantine + Tailwind!
      </Button>
      <Button variant="filled" color="cyan" size="lg" radius="xl">Button</Button>
      <Button variant="light" color="red" size="md" radius="lg">Button</Button>
      <Button fullWidth>Full width button</Button>
    </div>
  );
}