import React from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { Container, BarsButton } from './styles';

const Header = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <BarsButton
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Icon name="bars" color="#1da1f2" size={20} />
      </BarsButton>

      <Icon name="twitter" color="#1da1f2" size={28} />
    </Container>
  );
};

export default Header;
