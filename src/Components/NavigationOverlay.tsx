import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// Components
import ForecastToggleOverlay from './ForecastToggleOverlay';

type ForecastToggleOverlayProps = {
  currentRoute: string;
};

const ForecastToggleOverlay: React.FC<ForecastToggleOverlayProps> = ({
  currentRoute,
}) => {
  const [showForecastToggle, setShowForecastToggle] = useState<boolean>(true);
  return (
    <View
      style={[
        styles.overlay,
        {backgroundColor: !showForecastToggle ? '#00000070' : undefined},
      ]}>
      {showForecastToggle && (
        <ForecastToggleOverlay currentRoute={currentRoute} />
      )}
    </View>
  );
};

ForecastToggleOverlay.defaultProps = {
  currentRoute: 'Home',
};

export default ForecastToggleOverlay;

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
