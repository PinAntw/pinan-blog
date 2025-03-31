'use client' 

import { useMDXComponent } from 'next-contentlayer2/hooks';
import 'katex/dist/katex.min.css';
import { Blogimage } from '@/components/Blogimage';

const components = {
  h1: ({ ...props }) => (
    <h1
      className={'mt-2 text-4xl font-bold tracking-tight '}
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      className={'mt-10 pb-1 text-3xl font-semibold tracking-tight'}
      {...props}
    />
  ),
  p: ({ ...props }) => <p className='mt-8 text-base leading-7' {...props} />,
  ul: ({ ...props }) => <ul className='list-disc list-inside mt-4 space-y-2' {...props} />,
  li: ({ ...props }) => <li className='text-base leading-6' {...props} />,
  Blogimage, // 👈 註冊自訂元件
};
interface MdxProps {
  code: string;
}
export default function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <Component components={components} />
    </div>
  );
}