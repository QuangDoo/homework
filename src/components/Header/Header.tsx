import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const iconBack = require('assets/icons/back/icon-back.png');

const Header = (): JSX.Element => {
  return (
    <HeaderView>
      <TouchableOpacity>
        <Image source={iconBack} />
      </TouchableOpacity>
    </HeaderView>
  );
};

const HeaderView = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 16px;
  background-color: #e6eeff;
`;

// const BackButton = styled.TouchableOpacity`
//   position: absolute;
//   left: 9999;
// `;

export default Header;
