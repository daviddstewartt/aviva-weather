import {Text, View} from 'react-native';
import React from 'react';
import styles from './styles/Tile';

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
