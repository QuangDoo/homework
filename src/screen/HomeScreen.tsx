import {useQuery} from '@apollo/client';
import React from 'react';
import {FlatList, Text} from 'react-native';
import styled from 'styled-components/native';
import {CountryItem} from '~/components';
import {GetCountriesData} from '~/graphQL';
import GET_COUNTRIES from '~/graphQL/countries';
import {getScreenStyle} from '../misc/getScreenStyle';

export const HomeScreen = () => {
  const {data: CoutriesData} = useQuery<GetCountriesData, undefined>(
    GET_COUNTRIES,
  );
  return (
    <Root>
      <HeaderBox />
      <Text>List of countries</Text>
      <FlatList
        data={CoutriesData?.countries}
        renderItem={({item}) => <CountryItem {...item} />}
        keyExtractor={item => item.code}
      />
    </Root>
  );
};

//#region
type Props = {};

const Root = styled.View`
  flex: 1;
  background-color: #e6eeff;
  align-items: center;
  justify-content: center;
`;

const HeaderBox = styled.View`
  background-color: #ffbecc;
  height: 100px;
  border-bottom-left-radius: 25px;
`;

HomeScreen.options = getScreenStyle();
//#endregion
