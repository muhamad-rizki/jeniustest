// @flow
import _ from 'lodash';
import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  View,
  Text,
  Avatar,
  AvatarHelper,
} from 'react-native-ui-lib';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../styles';

type Props = {};

const renderItem = ({ item, index }) => {
  const name = `${item.firstName} ${item.lastName}`;
  return (
    <View row centerV paddingV-8>
      <View>
        <Avatar
          imageSource={item.photo ? { uri: item.photo } : null}
          label={AvatarHelper.getInitials(name)}
        />
      </View>
      <View paddingH-16>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default (props: Props) => {
  const {
    loading,
    error,
    data,
  } = props;
  return (
    <View flex padding-16>
      {
        loading
          ? <View flex center><ActivityIndicator /></View>
          : null
      }
      {
        loading === false
          && error !== false
          ? <View flex center><Text>Sorry we cannot load data</Text></View>
          : null
      }
      {
        loading === false && error === false
          ? (
            <FlatList
              data={_.orderBy(data, ['firstName'], 'asc')}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={{ height: 0.5, width: '100%', backgroundColor: colors.gray }} />}
              component
            />
          )
          : null
      }
    </View>
  );
};
