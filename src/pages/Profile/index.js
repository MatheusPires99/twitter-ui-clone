import React from 'react';
import { Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

const Profile = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Text style={{ color: '#fff', fontSize: 24, marginBottom: 16 }}>
        Profile
      </Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Ir para Home"
      />
    </Container>
  );
};

export default Profile;
