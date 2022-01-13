import {useQuery} from '@apollo/client';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import styled from 'styled-components/native';
import {Header} from '~/components';
import {CountryVars, GetCountryData} from '~/graphQL';
import GET_COUNTRY from '~/graphQL/country';

type Props = {
  code: string;
};

const CountryDetailsScreen: NavigationFunctionComponent<Props> = ({
  code,
}): JSX.Element => {
  const {data: countryData} = useQuery<GetCountryData, CountryVars>(
    GET_COUNTRY,
    {
      variables: {code},
    },
  );

  const handlePressContinent = () => {
    Navigation.push('LanguageScreen', {
      component: {
        name: 'LanguageScreen',
        passProps: {
          code: countryData?.country?.continent?.code,
        },
      },
    });
  };

  return (
    <>
      <Header />
      <HeaderView>
        <TextFlag>{countryData?.country.emoji}</TextFlag>
        <TextName>{countryData?.country.name}</TextName>
      </HeaderView>
      <BodyView>
        <Text>Alpha2Code</Text>
        <Text>{countryData?.country?.code}</Text>
      </BodyView>
      <BodyView>
        <Text>CallingCodes</Text>
        <Text>+{countryData?.country?.phone}</Text>
      </BodyView>
      <BodyView>
        <Text>Continent</Text>
        <TouchableOpacity onPress={handlePressContinent}>
          <UnderLineText>{countryData?.country?.continent?.name}</UnderLineText>
        </TouchableOpacity>
      </BodyView>
    </>
  );
};

export default CountryDetailsScreen;

// style
const HeaderView = styled.View`
  flex: column;
  justify-items: center;
`;

const TextFlag = styled.View`
  font-size: 100px;
  margin-bottom: 10px;
`;

const TextName = styled.View`
  font-weight: bold;
  font-size: 16px;
`;

const BodyView = styled.View`
  flex: 1;
  flex: row;
  justify-items: center;
  justify-content: between;
`;

const UnderLineText = styled.Text`
  text-decoration: underline;
  color: blue;
`;
