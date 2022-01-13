import {useQuery} from '@apollo/client';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import styled from 'styled-components/native';
import {Header} from '~/components';
import GET_CONTINENT, {ContinentData, ContinentVar} from '~/graphQL/continent';

type Props = {
  code: string;
};

const LanguageScreen: NavigationFunctionComponent<Props> = ({
  code,
}): JSX.Element => {
  const {data: languageData} = useQuery<ContinentData, ContinentVar>(
    GET_CONTINENT,
    {
      variables: {code},
    },
  );

  const handlePressContinent = () => {
    Navigation.push('LanguageScreen', {
      component: {
        name: 'LanguageScreen',
        passProps: {
          code: languageData?.continent.code,
        },
      },
    });
  };
  return (
    <>
      <Header />
      <HeaderView>
        <TextName>{languageData?.continent.name}</TextName>
      </HeaderView>
      <BodyView>
        <Text>code</Text>
        <Text>{languageData?.continent?.code}</Text>
      </BodyView>

      <BodyView>
        <Text>Countries</Text>
        <TouchableOpacity onPress={handlePressContinent}>
          {languageData?.continent?.countries.map(country => (
            <UnderLineText key={country?.code}>{country.name}</UnderLineText>
          ))}
        </TouchableOpacity>
      </BodyView>
    </>
  );
};

export default LanguageScreen;

// style
const HeaderView = styled.View`
  flex: column;
  justify-items: center;
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
