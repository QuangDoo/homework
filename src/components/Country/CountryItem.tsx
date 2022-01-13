import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styled from 'styled-components/native';
import {Country} from '~/graphQL';
import {getScreenStyle} from '~/misc/getScreenStyle';

// code: string;
// name: string;
// native: string;
// continent: Continent;
// capital: String;
// currency: String;
// languages: [Language];
// emoji: string;

const CountryItem = (_props: Country): JSX.Element => {
  const {emoji, code, name, capital} = _props;

  const handlePressCoutryItem = () => {
    Navigation.push('CountryScreen', {
      component: {
        name: 'CountryScreen',
        passProps: {
          code,
        },
      },
    });
  };

  return (
    <BoxCard>
      <TouchableOpacity onPress={handlePressCoutryItem}>
        <Text>{emoji}</Text>
        <ContentBox>
          <Title>{name}</Title>
          <SubTitle>{capital}</SubTitle>
        </ContentBox>
      </TouchableOpacity>
    </BoxCard>
  );
};

export default CountryItem;

//#region

const BoxCard = styled.View`
  flex: 1;
  flex-direction: row,
  background-color: #e6eeff;
  border-radius: 10px;
  box-shadow: 0px 3px 3px 3px
`;

const ContentBox = styled.View`
  marigin-left: 2px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

const SubTitle = styled.Text`
  font-weight: normal;
  font-size: 16px;
`;

CountryItem.options = getScreenStyle();
//#endregion
