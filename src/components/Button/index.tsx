import React from 'react';

import {
  Container,
  Title,
} from './styles';

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

export function Button({ title, color, ...rest }: Props): JSX.Element {
  return (
    <Container {...rest} color={color}>
      <Title>{title}</Title>
    </Container>
  );
}
