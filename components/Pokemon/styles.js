import { StyleSheet } from 'react-native';

function hola(){
  
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dddddd',
    height: '100%',
  },
  pokemonImage: {
    height: 250,
    width: '100%',
  },
  nameOfPokemon: {
    fontSize: 25,
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    backgroundColor: '#dddddd',
    width: '100%',
    height:'60%',
    borderWidth: 4,
    borderRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    width: '100%',
  },
});

//Export your styles
export default styles;
