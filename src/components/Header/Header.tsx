'use client';

import { Burger, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import classes from './HeaderSearch.module.css';

const links = [
  { link: '#about', label: 'About' },
  { link: '#projects', label: 'Projects' },
  { link: '#blog', label: 'Blog' },
  { link: '#contact', label: 'Contact me' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  // 1) 偵測捲動位置
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2) 依照 scrolled 切換連結 class
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      // 如果 scrolled === true，就用 .linkBlack；否則用 .link
      className={scrolled ? classes.linkBlack : classes.link}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}
