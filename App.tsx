import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const pokePath = "https://pokeapi.co/api/v2/"
const pokeQuery = "pokemon?limit=151&offset=0"

export default function App() {
  const [firstGenPokemon, setFirstGenPokemon] = useState<any>([])
  useEffect(() => {
    const fetchPokemon = async () =>{
      const response = await fetch(`${pokePath}${pokeQuery}`)
      const data = await response.json() 
    }
    fetchPokemon()
  }, [])

  useEffect(() => {
    console.log(firstGenPokemon)
  
  }, [firstGenPokemon])
  

  return (
    <View style={styles.container}>
      <Text>First Gen Pokemon</Text>
      <ScrollView>
        {firstGenPokemon.map((pokemon:any, index:any)=>{
          return <Text key={index}>
            {pokemon.name}
          </Text>
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
