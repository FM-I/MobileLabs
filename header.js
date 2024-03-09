import { Text, SafeAreaView, StyleSheet, Image  } from 'react-native';

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('./icons/university-colored.png')} style={styles.stretch}/>
        <Text style={styles.text}>FirstMobileApp</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    width: '53%'
  },
  stretch: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
    marginLeft: 15
  },

});
