'use client'

import { Image } from '@mantine/core';

interface BlogimageProps {
  src: string;
  alt: string; 
  width?: number;
  height?: number;
}


export function Blogimage({src, alt, width, height}: BlogimageProps) {
  return (
    <Image
        src={src}
        radius="md"
        h={height}
        w={width}
        alt={alt}
        fit="contain"
    />
  );
}