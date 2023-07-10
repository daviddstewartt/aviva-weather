import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, Metrics} from '../../../theme';

export type Tile = {
  title: string;
  value: string | number;
  symbol?: string;
  desc?: string;
  component?: React.ReactNode;
};

type TileProps = {
  tile: Tile;
};

const Tile: React.FC<TileProps> = ({tile}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.tileTitle}>{tile.title}</Text>
      {tile.component ? (
        tile.component
      ) : (
        <View>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={styles.tileValue}>{tile.value}</Text>
            {tile.symbol && (
              <Text style={styles.tileSymbol}>{tile.symbol}</Text>
            )}
          </View>
          {tile.desc && <Text style={styles.tileDesc}>{tile.desc}</Text>}
        </View>
      )}
    </View>
  );
};

export default Tile;

const styles = StyleSheet.create({
  container: {
    width: '49%',
    backgroundColor: Colors.SPACE_GREY_SECONDARY + '50',
    marginBottom: Metrics.spacing.m,
    paddingVertical: Metrics.spacing.l,
    paddingHorizontal: Metrics.spacing.l,
    borderRadius: Metrics.radius.rounded2,
  },
  tileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.PURPLE_SECONDARY + '60',
  },
  tileValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.LIGHT,
  },
  tileSymbol: {
    fontsize: 18,
    marginLeft: Metrics.spacing.s,
    color: Colors.LIGHT_GREY,
  },
  tileDesc: {
    fontSize: 12,
    color: Colors.LIGHT_GREY,
    marginTop: Metrics.spacing.m,
  },
});
