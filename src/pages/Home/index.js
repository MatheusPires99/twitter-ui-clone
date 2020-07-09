import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';

import { Container } from './styles';

const Home = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header />

      <Button
        onPress={() => navigation.navigate('Profile')}
        title="Ir para Profile"
      />
    </Container>
  );
};

export default Home;
