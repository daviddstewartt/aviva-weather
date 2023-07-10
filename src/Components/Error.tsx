import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Colors, Metrics} from '../theme';

// Components
import Button from './Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ErrorProps = {
  title: string;
  error: string;
  icon?: React.ReactNode;
  buttonTitle?: string;
  onButtonPress?: () => void;
};

const Error: React.FC<ErrorProps> = ({
  title,
  error,
  icon,
  buttonTitle,
  onButtonPress,
}) => {
  return (
    <View style={styles.container}>
      {icon ? (
        icon
      ) : (
        <MaterialIcons name="error" size={60} color={Colors.PURPLE_SECONDARY} />
      )}
      <Text style={styles.errorHeading}>{title}</Text>
      <Text style={styles.errorText}>{error}</Text>

      {buttonTitle && (
        <Button
          onPress={() => onButtonPress && onButtonPress()}
          gradientColors={[Colors.PURPLE_SECONDARY, Colors.PURPLE_PRIMARY]}
          title={buttonTitle}
          titleStyle={{color: Colors.LIGHT}}
          style={{marginTop: Metrics.spacing.m}}
        />
      )}
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  errorHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: Metrics.spacing.m,
    color: Colors.TEXT_LIGHT,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.LIGHT_GREY,
  },
});
