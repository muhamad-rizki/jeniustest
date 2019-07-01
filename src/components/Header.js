// @flow
import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';

import { colors } from '../styles';

type Props = {
  icon: Object,
  leftComponent?: React.Component,
  rightComponent?: React.Component,
}

const HeaderHeight = 60;

const calculateFlex = (leftComponent, rightComponent) => {
  if (leftComponent && rightComponent) {
    return 0.6;
  }
  if (leftComponent || rightComponent) {
    return 0.8;
  }
  return 1;
};

const Header = (props: Props) => {
  const {
    icon,
    rightComponent,
    leftComponent,
  } = props;
  return (
    <View
      style={{
        height: HeaderHeight,
        width: '100%',
        borderBottomWidth: 0.5,
        borderBottomColor: colors.lightGray,
        justifyContent: 'center',
        flexDirection: 'row',
      }}
    >
      {
        leftComponent
          ? (
            <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
              <View style={{ width: HeaderHeight, height: HeaderHeight }}>
                {leftComponent}
              </View>
            </View>
          )
          : null
      }
      <View
        style={[
          { flex: calculateFlex(leftComponent, rightComponent), alignItems: 'center', flexDirection: 'row' },
          leftComponent ? { justifyContent: 'center' } : null
        ]}
      >
        <View
          style={{
            width: 60,
            height: 60,
            padding: 12,
          }}
        >
          <Image
            source={icon}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LayarKaca21</Text>
      </View>
      {
        rightComponent
          ? (
            <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <View style={{ width: HeaderHeight, height: HeaderHeight }}>
                {rightComponent}
              </View>
            </View>
          )
          : null
      }
    </View>
  );
};

Header.defaultProps = {
  rightComponent: null,
  leftComponent: null,
};

export default Header;
