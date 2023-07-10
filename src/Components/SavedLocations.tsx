import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedCity} from '../redux/features/location';
import {setSavedLocationList} from '../redux/features/layout';

// Types
import {RootState} from '../redux/store';
import {ICityWithWeather} from '../ts/interfaces';

// Styles & Icons
import {Colors, Fonts, Metrics} from '../theme';
import Entype from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Components
import SavedCityItem from './SavedCityItem';
import LinearGradient from 'react-native-linear-gradient';
import Button from './Button';
import {FlatList} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');

type SavedLocationsProps = {
  onClose: () => void;
  onShowSearchLocation: () => void;
};

const SavedLocations: React.FC<SavedLocationsProps> = ({
  onClose,
  onShowSearchLocation,
}) => {
  const dispatch = useDispatch();
  const {savedCities} = useSelector((state: RootState) => state.location);
  const {savedLocationIsListView: isListView} = useSelector(
    (state: RootState) => state.layout,
  );
  const [activeCityIndex, setActiveCityIndex] = useState<number>(0);

  const handleSelectSavedLocation = (city: ICityWithWeather) => {
    dispatch(setSelectedCity(city));
    onClose();
  };

  const handleToggleListView = () => {
    dispatch(setSavedLocationList(!isListView));
  };

  const handleHorizontalScroll = (event: any) => {
    if (isListView) {
      return;
    }
    const {contentOffset} = event.nativeEvent;
    const viewSize = event.nativeEvent.layoutMeasurement;
    const pageNum = Math.floor(contentOffset.x / viewSize.width);
    setActiveCityIndex(pageNum);
    const city = savedCities[pageNum];
    dispatch(setSelectedCity(city));
  };

  const handleOrientation = (): boolean =>
    savedCities.length > 1 ? !isListView : true;

  return (
    <View style={{width: '100%', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <Entype name="cross" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Saved Locations</Text>
        <TouchableOpacity
          disabled={savedCities.length === 0}
          onPress={handleToggleListView}>
          <MaterialCommunityIcons
            name={isListView ? 'view-carousel' : 'view-sequential'}
            size={30}
            color={savedCities.length === 0 ? Colors.LIGHT + '40' : '#fff'}
          />
        </TouchableOpacity>
      </View>

      {/* List of saved Locations */}
      <FlatList
        data={savedCities}
        horizontal={handleOrientation()}
        showsHorizontalScrollIndicator={false}
        onScroll={handleHorizontalScroll}
        contentContainerStyle={
          !isListView
            ? styles.flatListContentContainer
            : {flexDirection: 'column'}
        }
        snapToAlignment="center"
        snapToInterval={width - Metrics.spacing.l}
        decelerationRate={'fast'}
        renderItem={({item}) => (
          <SavedCityItem
            card={!isListView}
            key={item.id}
            city={item}
            onSelect={handleSelectSavedLocation}
          />
        )}
        keyExtractor={(_, index) => index.toString()}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <View style={styles.emptyListCard}>
              <LinearGradient
                colors={[
                  Colors.SPACE_GREY_PRIMARY,
                  Colors.SPACE_GREY_SECONDARY,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.emptyListCardGradient}
              />
              <MaterialCommunityIcons
                name="bookmark-off"
                size={30}
                color="#fff"
              />
              <Text style={styles.text}>No Saved Locations</Text>
              <Button
                title="Add Locations"
                gradientColors={[
                  Colors.PURPLE_PRIMARY,
                  Colors.PURPLE_SECONDARY,
                ]}
                titleStyle={{color: Colors.TEXT_LIGHT}}
                onPress={onShowSearchLocation}
              />
            </View>
          </View>
        )}
      />
      {!isListView && savedCities.length > 0 && (
        <View style={styles.paginationContainer}>
          {savedCities.map((_, index) => (
            <View
              key={index}
              style={{
                ...styles.paginationDot,
                backgroundColor:
                  activeCityIndex === index ? '#fff' : '#ffffff30',
              }}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default SavedLocations;

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.spacing.l,
    paddingHorizontal: Metrics.spacing.l,
  },
  headerText: {
    fontSize: Fonts.size.m,
    color: Colors.TEXT_LIGHT,
  },
  flatListContentContainer: {
    paddingBottom: Metrics.spacing.m,
    marginTop: Metrics.spacing.m,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.spacing.m,
    width: width - Metrics.spacing.l,
  },
  emptyListCard: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.radius.rounded,
    overflow: 'hidden',
  },
  emptyListCardGradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  text: {
    marginBottom: Metrics.spacing.l,
    color: Colors.TEXT_LIGHT,
    marginTop: Metrics.spacing.s,
  },
  gradientContainer: {
    borderRadius: Metrics.radius.circle,
  },
  addLocationButton: {
    paddingVertical: Metrics.spacing.m,
    paddingHorizontal: Metrics.spacing.l,
    color: '#fff',
    fontWeight: 'bold',
  },
  paginationContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: Metrics.spacing.m,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: Metrics.spacing.s,
  },
});
