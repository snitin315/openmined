import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/core';
import Page from '@openmined/shared/util-page';

import content from '../../content/homepage';
import GridContainer from '../../components/GridContainer';
import Signin from '../../components/forms/SignIn';
import waveform from '../../assets/waveform/waveform-bottom-warm.png';

export default () => {
  const { title, description } = content.signin;

  return (
    <Page title="Sign In">
      <Box
        position="relative"
        _before={{
          content: '""',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url(${waveform})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: ['0% 100%', null, '0% 110%', null, '0% 120%'],
          backgroundSize: 'contain',
        }}
      >
        <GridContainer isInitial pt={8} pb={16}>
          <Flex
            direction="column"
            align={{ base: 'flex-start', md: 'center' }}
            textAlign={{ base: 'left', md: 'center' }}
            width={{ base: 'full', md: '80%', lg: '50%' }}
            mx="auto"
          >
            <Heading as="h1" size="3xl" mb={4}>
              {title}
            </Heading>
            <Text color="gray.700" fontSize="lg" mb={8}>
              {description}
            </Text>
            <Signin width="full" />
          </Flex>
        </GridContainer>
      </Box>
    </Page>
  );
};
