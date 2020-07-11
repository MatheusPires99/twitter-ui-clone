import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

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
  TweetFooter,
  FooterItem,
  FooterNumber,
  NewTweetButton,
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

            <TweetFooter>
              <FooterItem>
                <Icon name="comment" color="#8899a6" size={14} />
                <FooterNumber>3</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="retweet" color="#8899a6" size={14} />
                <FooterNumber>5</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="heart" color="#8899a6" size={14} />
                <FooterNumber>127</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="external-link-alt" color="#8899a6" size={14} />
              </FooterItem>
            </TweetFooter>
          </TweetContent>
        </Tweet>
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

            <TweetFooter>
              <FooterItem>
                <Icon name="comment" color="#8899a6" size={14} />
                <FooterNumber>3</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="retweet" color="#8899a6" size={14} />
                <FooterNumber>5</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="heart" color="#8899a6" size={14} />
                <FooterNumber>127</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="external-link-alt" color="#8899a6" size={14} />
              </FooterItem>
            </TweetFooter>
          </TweetContent>
        </Tweet>
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

            <TweetFooter>
              <FooterItem>
                <Icon name="comment" color="#8899a6" size={14} />
                <FooterNumber>3</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="retweet" color="#8899a6" size={14} />
                <FooterNumber>5</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="heart" color="#8899a6" size={14} />
                <FooterNumber>127</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="external-link-alt" color="#8899a6" size={14} />
              </FooterItem>
            </TweetFooter>
          </TweetContent>
        </Tweet>
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

            <TweetFooter>
              <FooterItem>
                <Icon name="comment" color="#8899a6" size={14} />
                <FooterNumber>3</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="retweet" color="#8899a6" size={14} />
                <FooterNumber>5</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="heart" color="#8899a6" size={14} />
                <FooterNumber>127</FooterNumber>
              </FooterItem>
              <FooterItem>
                <Icon name="external-link-alt" color="#8899a6" size={14} />
              </FooterItem>
            </TweetFooter>
          </TweetContent>
        </Tweet>
      </TweetsContainer>

      <NewTweetButton>
        <Icon name="feather-alt" color="#fff" size={18} />
      </NewTweetButton>
    </Container>
  );
};

export default Home;
