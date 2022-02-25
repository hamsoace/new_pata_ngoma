import { StyleSheet, TextInput, Image } from 'react-native';
import { SearchBar } from 'react-native-screens';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Album } from '../types';


export type AlbumProps = {
  album: Album,
}

const SearchScreen = (props: AlbumProps) => {
const fechSongs = () => {
  
}

  return(
    <View style={styles.container}>
       <TextInput 
       style={styles.textInputStyle}
       value={search}
       placeholder="Search Here"
       underlineColorAndroid="transparent"
       onChangeText={(text)=> searchFilter(text)} 
       />
     </View>
  );
} 

const styles = StyleSheet.create({
  textInputStyle:{
    height: 30,
    borderWidth: 1,
    borderRadius: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default SearchScreen;
// export default function SearchScreen() {
//   return (
//     <View style={styles.container}>
//       <TextInput 
//       style={styles.textInputStyle}
//       value={search}
//       placeholder="Search Here"
//       underlineColorAndroid="transparent"
//       onChangeText={(text)=> searchFilter(text)} 
//       />
//     </View>
//   );
// }


