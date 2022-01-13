import {gql} from '@apollo/client';
import {Continent} from './country';

export type ContinentData = {
  continent: Continent;
};

export type ContinentVar = {
  code: string;
};

const GET_CONTINENT = gql`
  query ($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        code
        name
      }
    }
  }
`;

export default GET_CONTINENT;
