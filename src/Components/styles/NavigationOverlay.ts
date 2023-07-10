import {StyleSheet} from 'react-native';

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
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    pointerEvents: 'box-none',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 320,
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default styles;
