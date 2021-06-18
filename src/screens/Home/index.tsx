import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars
} from './styles';

export function Home() {
  const carDataOne = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://img2.gratispng.com/20180628/stg/kisspng-2018-audi-s5-3-0t-premium-plus-coupe-audi-rs5-2017-2018-audi-a5-coupe-5b35130451d959.0738564215302049323353.jpg'
  }

  const carDataTwo = {
    brand: 'Porsche',
    name: 'Panamera',
    rent: {
      period: 'AO DIA',
      price: 340,
    },
    thumbnail: 'https://img2.gratispng.com/20180517/zzw/kisspng-2018-porsche-panamera-2015-porsche-panamera-porsch-5afe197550f488.4299338415266021013316.jpg'
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}