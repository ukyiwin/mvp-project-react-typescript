import React from 'react';
import styled from 'styled-components';
import { FlexCol } from 'Components/Globals';
import { Tagline, Copy } from 'Containers/style';
import ViewSegment from 'Components/ThemedSection';

const Emoji = styled.div`
  font-size: 3em;
  text-align: center;
  line-height: 1.5em;
  margin-bottom: 0.25em;
`;

const Wrapper = styled(FlexCol)`
  margin: 0 auto;
  text-align: center;
`;
const Text = styled(Copy)`
  font-size: 20px;
  line-height: 1.3;
  font-weight: 500;
  opacity: 0.95;
  margin: 0 auto;
  max-width: none;

  a {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

const MaintenanceDowntime = () => {
  const timeInUTC = 'Aprill 10, 2018 08:00:00 GMT+1';
  return (
    <ViewSegment background="constellations" style={{height: '100vh'}}>
      <Wrapper>
        <Emoji>🛠</Emoji>
        <Tagline>Unizonn is currently undergoing maintenance</Tagline>
        <Text>
          We'll be back by 8AM GMT+1 ({new Date(timeInUTC)
            .toLocaleTimeString()
            .replace(/:\d\d:\d\d\s/, '')
            .toLowerCase()}{' '}
          your time), check{' '}
          <a href="https://twitter.com/unizonn">
            @unizonn on Twitter
          </a>{' '}
          for updates.
        </Text>
      </Wrapper>
    </ViewSegment>
  );
};
       // <Tagline>Unizonn is currently undergoing maintenance</Tagline>

export default MaintenanceDowntime;
