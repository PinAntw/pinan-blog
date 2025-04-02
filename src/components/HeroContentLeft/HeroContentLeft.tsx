'use client';

import { Button, Container, Overlay, Text, Title, Grid, Flex,Space } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { IconDownload } from '@tabler/icons-react';

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Hi there! <br /> I&apos;m Pinan Lee</Title>
        <Space h="lg" />
        {/* style={{ border: '1px solid white' }} */}
        
        <Grid >
          <Grid.Col span={{
                sm: 12,
                md: 8,   
              }}>
            <Text size="xl" style={{ color: 'white' }}>
              Currently a first-year Master&apos;s student at NTU Information Management Department.<br />
              Deeply passionate about software development, data analysis, and artificial intelligence.
            </Text>
          </Grid.Col>
          <Grid.Col span={{
                sm: 12,
                md: 4,   
              }}>
            <Flex
                gap="xl"
                justify="center"
                align={{ base: 'flex-start', md: 'flex-end' }}
                direction="column"
                wrap="wrap"
                mt="xs"
              >
              {/* <Button variant="outline" radius= 'xs' className={classes.heroButton}>Project</Button> */}
              <Button onClick={() => {
                        window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
                      }} 
                      rightSection={<IconDownload size={18} />} 
                      variant="outline" 
                      radius= 'xs' 
                      className={classes.heroButton}>My CV</Button>
            </Flex>
          </Grid.Col>
        </Grid>


      </Container>
    </div>
  );
}