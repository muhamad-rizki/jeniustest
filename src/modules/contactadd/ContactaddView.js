// @flow
import React from 'react';
import {
  View,
  Text,
  Avatar,
  AvatarHelper,
  TextField,
  Button,
} from 'react-native-ui-lib';
import { ActivityIndicator } from 'react-native';
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler';
import { colors } from '../../styles';
import { Header, Icon } from '../../components';

type Props = {};

export default (props: Props) => {
  const {
    navigation,
    firstName,
    lastName,
    age,
    errors,
    setFirstName,
    setLastName,
    setAge,
    submit,
    loading,
  } = props;
  return (
    <View flex>
      <Header
        title="Add New Contact"
        color={colors.blue}
        textColor={colors.white}
        rightComponent={(
          <TouchableNativeFeedback
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={navigation.goBack}
          >
            <Icon name="close" type="MaterialCommunityIcons" size={28} color={colors.white} />
          </TouchableNativeFeedback>
        )}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          centerV
          centerH
          style={{
            backgroundColor: colors.primary,
            minHeight: 150,
          }}
        >
          <Avatar
            label="N"
            size={80}
          />
        </View>
        <View padding-16>
          <TextField
            floatingPlaceholder
            placeholder="First Name"
            enableErrors
            maxLength={40}
            value={firstName}
            error={!errors.firstName ? '' : errors.firstName}
            onChangeText={setFirstName}
          />
          <TextField
            floatingPlaceholder
            placeholder="Last Name"
            enableErrors
            maxLength={40}
            value={lastName}
            error={!errors.lastName ? '' : errors.lastName}
            onChangeText={setLastName}
          />
          <TextField
            floatingPlaceholder
            placeholder="Age"
            enableErrors
            keyboardType="numeric"
            maxLength={3}
            value={age}
            error={!errors.age ? '' : errors.age}
            onChangeText={setAge}
          />
        </View>
        <View bottom center>
          <View>
            <Button
              disabled={loading}
              label="Submit"
              backgroundColor={colors.primary}
              color={loading ? colors.gray : colors.white}
              onPress={() => submit({ firstName, lastName, age })}
            >
              {loading
                ? <ActivityIndicator color={colors.white} style={{ marginRight: 8 }} />
                : null}
            </Button>
          </View>
          {
            errors.submit !== ''
              ? (
                <View marginV-16>
                  <Text red>{errors.submit}</Text>
                </View>
              )
              : null
          }
        </View>
      </ScrollView>
    </View>
  );
};
