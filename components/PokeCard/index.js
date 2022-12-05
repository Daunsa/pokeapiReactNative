import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';

const PokeCard = ({ name, navigation, url }) => {
  var image = url.slice(34)
  image = image.replace("/","")
  return (
    <TouchableOpacity
      testID="poke-card"
      style={{ backgroundColor: 'transparent' }}
      onPress={() => navigation.navigate('Pokemon', { name, url })}>
      <View style={styles.listItemContainer}>
        <View>
          <Text style={styles.pokeItemHeader}>{name}</Text>
        </View>
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+image+'.png',
          }}
          style={styles.pokeImage}
        />
      </View>
    </TouchableOpacity>
  );
};

export default PokeCard;
