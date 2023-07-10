import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  searchContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.TEXT_LIGHT,
  },
  searchResultsContainer: {
    width: '90%',
    marginTop: Metrics.spacing.l,
    flexDirection: 'column',
  },
  searchResultItem: {
    width: '100%',
    paddingVertical: Metrics.spacing.l,
    borderBottomColor: Colors.PURPLE_SECONDARY,
    borderBottomWidth: 1,
  },
  searchResultItemText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorText: {
    color: Colors.LIGHT_GREY,
    marginTop: Metrics.spacing.m,
    fontSize: 16,
  },
});

export default styles;
