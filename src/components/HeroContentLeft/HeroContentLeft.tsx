'use client';

import { Button, Container, Overlay, Text, Title, Grid, Flex,Space } from '@mantine/core';
import classes from './HeroContentLeft.module.css';

export function HeroContentLeft() {
  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title className={classes.title}>Hi there! I&apos;m Pinan Lee</Title>
        <Space h="lg" />
        {/* style={{ border: '1px solid white' }} */}
        
        <Grid >
          <Grid.Col span={{
                sm: 12,
                md: 8,   
              }}>
            <Text size="xl"  style={{ color: 'white' }}>
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
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
              <Button variant="outline" radius= 'xs' className={classes.heroButton}>Button</Button>
              <Button variant="outline" radius= 'xs' className={classes.heroButton}>Button</Button>
            </Flex>
          </Grid.Col>
        </Grid>


      </Container>
    </div>
  );
}