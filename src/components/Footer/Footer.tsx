'use client';

import {  Container, Grid, Text, Avatar } from '@mantine/core';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Features', link: '#' },
      { label: 'Pricing', link: '#' },
      { label: 'Support', link: '#' },
      { label: 'Forums', link: '#' },
    ],
  },
  {
    title: 'Project',
    links: [
      { label: 'Contribute', link: '#' },
      { label: 'Media assets', link: '#' },
      { label: 'Changelog', link: '#' },
      { label: 'Releases', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'Join Discord', link: '#' },
      { label: 'Follow on Twitter', link: '#' },
      { label: 'Email newsletter', link: '#' },
      { label: 'GitHub discussions', link: '#' },
    ],
  },
];

type FooterProps = {
  id?: string;  // 允許 id 作為可選屬性
};

export function Footer({ id }: FooterProps) {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} id={id}>
      <Container style={{ textAlign: 'center',color: 'white' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 'bold' , color: 'rgb(166, 53, 36)' }}>Contact me</h1>
        <h3 style={{ fontSize: '32px', fontWeight: 'bold'} }>Welcome !</h3>
      </Container>
      <Container style={{ height: '100px' }}></Container>

      <Grid style={{  height: '200px', color: 'white' }}>
        <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>
          <Avatar variant="default" radius="md" size="200px" src="/me_h.png" />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 6 }} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          <Grid style={{ width: "100%" }}>
            
            <Grid.Col span={12}>
              <Text size="lg"><a style={{ color: "rgb(96, 190, 157)" }}>Contact</a>
              </Text>
              <Text
                size="lg"
              >
                Email: <a style={{ color: "rgb(59, 254, 186)" }}>r13725060@ntu.edu.tw</a>
              </Text>
            </Grid.Col>

            <Grid.Col span={12}>  
            </Grid.Col>

          </Grid>
          <Grid style={{ width: "100%" }}>
            
            <Grid.Col span={12}>
              <Text size="lg"><a style={{ color: "rgb(96, 190, 157)" }}>Profile</a>
              </Text>
              <Text
                size="lg"
              >
                GitHub: <a href="https://github.com/PinAntw" style={{ color: "rgb(59, 254, 186)" ,textDecoration: "underline" }}>github.com/PinAntw</a>
              </Text>
            </Grid.Col>

            <Grid.Col span={12}>
              <Text
                size="lg"
              >
                Linkedin: <a href="https://www.linkedin.com/in/pinanlee/" style={{ color: "rgb(59, 254, 186)", textDecoration: "underline" }}>linkedin.com/in/pinanlee/</a>
              </Text>
            </Grid.Col>
            
          </Grid>

        </Grid.Col>

      </Grid>
      <Container style={{ height: '150px' }}></Container>

      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2020 mantine.dev. All rights reserved.
        </Text>
        {/* <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}