import React, { PureComponent } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import Chard from '../chard/chard';
import styles from './styles';

class Pokemon extends PureComponent {
  state = {
    pokeData: [],
    loading: true,
    image: '',
    estadisticas: [],
  };
  static navigationOptions = ({ route }) => ({
    title: `${route.params.name} Info`,
  });
  async componentDidMount() {
    try {
      const { route } = this.props;
      const url = route.params.url;
      const pokemonApiCallData = await fetch(url);
      pokemonData = await pokemonApiCallData.json();
      //console.log(pokemonData)
      
      this.setState({
        pokeData: pokemonData,
        loading: false,
        image: pokemonData.sprites.other['official-artwork']['front_default'],
        estadisticas: [ pokemonData.stats[0].base_stat, pokemonData.stats[1].base_stat, pokemonData.stats[2].base_stat, pokemonData.stats[3].base_stat, pokemonData.stats[4].base_stat, pokemonData.stats[5].base_stat ],
      });
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }

  render() {
    const { pokeData, loading, image, estadisticas } = this.state;
    console.log(pokeData.types)
    const tipos = pokeData.types?.map((tipo) => {
      return (
        <View style={styles.types}>
          <Text>{tipo.type.name}</Text>
        </View>
      );
    });

    const abilities = pokeData.abilities?.map((habilidades) => {
      return <Text style={styles.title}>{habilidades.ability.name}</Text>;
    });

    if (!loading) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>{pokeData['name']}</Text>
          {tipos}
          <Image
            style={styles.card}
            source={{
              uri: image,
            }}
          />
          {abilities}
          <Text style={styles.nameOfPokemon}>Weight: {pokeData['weight']}</Text>
          <Text style={styles.nameOfPokemon}>Height: {pokeData['height']}</Text>
          <Chard estadisticas = {estadisticas}/>
        </View>
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

export default Pokemon;
