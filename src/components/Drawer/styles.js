import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;

  position: relative;
  padding-top: ${getStatusBarHeight() + 16}px;
  border-right-width: 0.5px;
  border-style: solid;
  border-color: #38444d;
`;

export const HeaderContainer = styled.View`
  padding: 0 24px 24px;
`;

export const HeaderContent = styled.View``;

export const UserAvatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

export const UserInfo = styled.View`
  margin-top: 12px;
`;

export const UserName = styled.Text`
  font-family: 'Roboto_700Bold';
  font-size: 20px;
  color: #fff;
  margin-bottom: 4px;
`;

export const TwitterUserName = styled.Text`
  color: #8899a6;
`;

export const AccountInfo = styled.View`
  margin-top: 16px;

  flex-direction: row;
`;

export const Follow = styled.View`
  flex-direction: row;
`;

export const FollowNumber = styled.Text`
  font-family: 'Roboto_700Bold';
  color: #fff;
  margin-right: 4px;
`;

export const FollowText = styled.Text`
  color: #8899a6;
`;

export const NavMenu = styled.View`
  margin-bottom: 16px;
`;

export const NavMenuButton = styled(RectButton)`
  padding: 16px 24px;

  flex-direction: row;
  align-items: center;
`;

export const NavMenuButtonText = styled.Text`
  margin-left: 16px;
  font-size: 18px;
  color: #fff;
`;

export const HelpSection = styled.View`
  padding-top: 32px;

  border-top-width: 1px;
  border-style: solid;
  border-color: #38444d;
`;

export const HelpSectionContent = styled.View`
  padding: 0 24px 24px;
`;

export const HelpSectionText = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 32px;
`;

export const Footer = styled.View`
  padding: 0 24px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;

  position: absolute;
  bottom: ${getBottomSpace() + 16}px;
`;
