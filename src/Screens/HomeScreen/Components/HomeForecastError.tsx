import {StyleSheet, View} from 'react-native';
import React from 'react';

import {Colors, Metrics} from '../../../theme';
import ForecastError from '../../ForecastScreen/Components/ForecastError';

type HomeForecastErrorProps = {
  error: string;
};

const HomeForecastError: React.FC<HomeForecastErrorProps> = ({error}) => {
  return (
    <View style={styles.container}>
      <ForecastError error={error} />
    </View>
  );
};

export default HomeForecastError;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.SPACE_GREY_PRIMARY + '80',
    borderRadius: Metrics.radius.rounded2,
    paddingVertical: Metrics.spacing.l,
  },
});
