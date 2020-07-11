import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding-top: ${getStatusBarHeight() + 16}px;
`;

export const TweetsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;

  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  border-color: #38444d;
  margin-top: 16px;
`;

export const Tweet = styled.View`
  padding: 16px;
  margin-bottom: 16px;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-style: solid;
  border-color: #38444d;

  flex-direction: row;
`;

export const UserAvatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const TweetContent = styled.View`
  flex: 1;

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
  background: #aaa;
  border-radius: 10px;
`;

export const TweetFooter = styled.View`
  margin-top: 12px;
  padding-right: 20%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FooterNumber = styled.Text`
  margin-left: 4px;
  color: #8899a6;
  font-size: 12px;
`;

export const NewTweetButton = styled(RectButton)`
  position: absolute;
  bottom: ${getBottomSpace() + 16}px;
  right: 16px;
  background: #1da1f2;
  width: 56px;
  height: 56px;
  border-radius: 28px;

  justify-content: center;
  align-items: center;
`;
