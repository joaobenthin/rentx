import React from 'react';
import { BackButton } from '../../components/BackButton';

import {
  Container,
  Header
} from './styles';

export function CarDetails(): JSX.Element {
  return (
    <Container>
      <Header>
        <BackButton />
      </Header>
    </Container>
  );
}
