import Mdx from '@/components/mdx-components';
import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import { BackgroundImage, Text } from '@mantine/core';

interface PostPageProps {
  params: {
    slug: string;
  };
}
export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post?.body.code) {
    return <div>Post not found</div>;
  }
  return (
    <>
    <BackgroundImage
        src={post.img_url}
        radius="sm"
        style={{ height: '550px', width  : '100%' , position: 'relative'}}
      >
          <Text c="white"
                variant="gradient"
                gradient={{ from: 'rgba(189, 189, 189, 1)', to: 'rgba(255, 255, 255, 1)', deg: 4 }}
                fw={900}
                size='60px'
                ta="center"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)', 
                  padding: '0 1rem',
                }}
                 >
            {post.title}
          </Text>
      </BackgroundImage>
      <article className='py-8 mx-auto max-w-xl'>
        <Mdx code={post.body.code} />
      </article>
    </>
  );
}