import React from 'react';
import { ScrollView } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import {
  Container,
  HeaderContainer,
  HeaderContent,
  UserAvatar,
  UserInfo,
  UserName,
  TwitterUserName,
  AccountInfo,
  Follow,
  FollowNumber,
  FollowText,
  NavMenu,
  NavMenuButton,
  NavMenuButtonText,
  HelpSection,
  HelpSectionContent,
  HelpSectionText,
  Footer,
} from './styles';

const Drawer = ({ navigation }) => {
  return (
    <Container>
      <HeaderContainer>
        <HeaderContent>
          <UserAvatar
            source={{
              uri: 'https://api.adorable.io/avatars/64/abott@adorable.png',
            }}
          />
          <UserInfo>
            <UserName>Matheus Pires</UserName>
            <TwitterUserName>@Matheus__Pires</TwitterUserName>
          </UserInfo>
        </HeaderContent>

        <AccountInfo>
          <Follow>
            <FollowNumber>53</FollowNumber>
            <FollowText>Seguindo</FollowText>
          </Follow>

          <Follow style={{ marginLeft: 8 }}>
            <FollowNumber>2</FollowNumber>
            <FollowText>Seguidores</FollowText>
          </Follow>
        </AccountInfo>
      </HeaderContainer>

      <ScrollView>
        <NavMenu>
          <NavMenuButton
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <Icon name="user" color="#8899a6" size={20} />
            <NavMenuButtonText>Perfil</NavMenuButtonText>
          </NavMenuButton>
          <NavMenuButton
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <Icon name="list-alt" color="#8899a6" size={20} />
            <NavMenuButtonText>Listas</NavMenuButtonText>
          </NavMenuButton>
          <NavMenuButton
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <Icon name="bookmark" color="#8899a6" size={20} />
            <NavMenuButtonText>Itens savos</NavMenuButtonText>
          </NavMenuButton>
          <NavMenuButton
            onPress={() => {
              navigation.navigate('Profile');
            }}
          >
            <Icon name="bolt" color="#8899a6" size={20} />
            <NavMenuButtonText>Momentos</NavMenuButtonText>
          </NavMenuButton>
        </NavMenu>

        <HelpSection>
          <HelpSectionContent>
            <HelpSectionText>Configurações e privacidade</HelpSectionText>
            <HelpSectionText>Central de Ajuda</HelpSectionText>
          </HelpSectionContent>
        </HelpSection>
      </ScrollView>

      <Footer>
        <Icon name="lightbulb" color="#1DA1F2" size={22} />
        <Icon name="qrcode" color="#1DA1F2" size={22} />
      </Footer>
    </Container>
  );
};

export default Drawer;
