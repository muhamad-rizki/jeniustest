// @flow
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import { colors } from '../styles';

type Props = {
  icon: Object,
  rightComponent?: React.Component,
}

const HeaderHeight = 60;

const Header = (props: Props) => {
  const { icon, rightComponent } = props;
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
      <View style={{ flex: 0.8, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>LayarKaca21</Text>
      </View>
      <View style={{ flex: 0.2, justifyContent: 'center' }}>
        {rightComponent}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

Header.defaultProps = {
  rightComponent: <View />,
};

export default Header;
