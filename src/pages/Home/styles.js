import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 16}px;
`;

export const TweetsContainer = styled.ScrollView`
  flex: 1;
  padding: 24px;

  border-top-width: 0.5px;
  border-style: solid;
  border-color: #8899a6;
  margin-top: 16px;
  padding: 16px;
`;

export const Tweet = styled.View`
  flex-direction: row;
`;

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const TweetContent = styled.View`
  margin-left: 16px;
`;

export const UserInfo = styled.View`
  margin-bottom: 8px;

  flex-direction: row;
`;

export const UserName = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #fff;
  margin-right: 4px;
`;

export const UserTwitterName = styled.Text`
  margin-right: 4px;
  color: #8899a6;
`;

export const TweetTime = styled.Text`
  color: #8899a6;
`;

export const TweetText = styled.Text`
  color: #fff;
  line-height: 20px;
`;

export const TweetImage = styled.Image`
  margin-top: 16px;
  width: 100%;
  height: 100px;
  background: #8899a6;
  border-radius: 10px;
`;
