import React from 'react';

import Header from '../../components/Header';

import {
  Container,
  TweetsContainer,
  Tweet,
  UserAvatar,
  TweetContent,
  UserInfo,
  UserName,
  UserTwitterName,
  TweetTime,
  TweetText,
  TweetImage,
} from './styles';

const Home = () => {
  return (
    <Container>
      <Header />

      <TweetsContainer>
        <Tweet>
          <UserAvatar
            source={{
              uri: 'https://api.adorable.io/avatars/64/abott@adorable.png',
            }}
          />

          <TweetContent>
            <UserInfo>
              <UserName>Matheus Pires</UserName>
              <UserTwitterName>@Matheus__Pires</UserTwitterName>
              <TweetTime>4min</TweetTime>
            </UserInfo>

            <TweetText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              animi repellat minus quae adipisci consequuntur odit officia
              eligendi exercitationem quia voluptas
            </TweetText>

            <TweetImage />
          </TweetContent>
        </Tweet>
      </TweetsContainer>
    </Container>
  );
};

export default Home;
