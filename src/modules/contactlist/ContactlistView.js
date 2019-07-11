// @flow
import _ from 'lodash';
import React from 'react';
import { RefreshControl, StyleSheet } from 'react-native';
import {
  View,
  Text,
  Avatar,
  AvatarHelper,
} from 'react-native-ui-lib';
import { FlatList, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../styles';
import Header from '../../components/Header';
import { Icon } from '../../components';

type Props = {};

const styles = StyleSheet.create({
  fab: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 4,
    backgroundColor: colors.blue,
  }
});

let lastChar = '';

const renderItem = ({ item, index }) => {
  const name = `${item.firstName} ${item.lastName}`;
  let header = false;
  if (lastChar !== item.firstName.charAt(0)) {
    lastChar = item.firstName.charAt(0);
    header = true;
  }
  return (
    <View>
      {
        header
          ? <Text marginV-8 marginL-16>{item.firstName.charAt(0)}</Text>
          : null
      }
      <TouchableNativeFeedback onPress={() => { }}>
        <View
          row
          centerV
          paddingV-8
          paddingH-16
          style={{ borderTopWidth: 0.3, borderBottomWidth: 0.3, borderColor: '#9d9d9daa' }}
        >
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
    </View>
  );
};

export default (props: Props) => {
  const {
    loading,
    error,
    data,
    loadContacts,
    openAdd,
  } = props;
  return (
    <View flex>
      <Header title="Contact List" color={colors.blue} textColor={colors.white} />
      <View flex>
        {
          loading === false
            && error !== false
            ? <View flex center><Text>Sorry we cannot load data</Text></View>
            : null
        }
        {
          error === false
            ? (
              <FlatList
                data={_.orderBy(data, ['firstName'], 'asc')}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={loadContacts} />}
              />
            )
            : null
        }
        <View
          style={[
            {
              position: 'absolute',
              bottom: 20,
              right: 20,
            },
            styles.fab
          ]}
        >
          <TouchableOpacity
            style={styles.fab}
            onPress={openAdd}
            disabled={loading}
          >
            <Icon name="plus" type="Entypo" size={28} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
