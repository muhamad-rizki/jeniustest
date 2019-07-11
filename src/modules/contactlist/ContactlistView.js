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
import { FlatList, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { colors } from '../../styles';
import Header from '../../components/Header';

type Props = {};

const renderItem = ({ item, index }) => {
  const name = `${item.firstName} ${item.lastName}`;
  return (
    <TouchableNativeFeedback onPress={() => { }}>
      <View row centerV paddingV-8 paddingH-16>
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
    </TouchableNativeFeedback>
  );
};

export default (props: Props) => {
  const {
    loading,
    error,
    data,
  } = props;
  return (
    <View flex>
      <Header title="Contact List" color={colors.blue} textColor={colors.white} />
      <View flex>
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
                ListFooterComponent={() => <View style={{ height: 0.3, width: '100%', backgroundColor: colors.gray }} />}
              />
            )
            : null
        }
      </View>
    </View>
  );
};
