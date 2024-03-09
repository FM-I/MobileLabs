import { Text, SafeAreaView, StyleSheet, ScrollView, FlatList } from 'react-native';
import News from './news.js';

export default function HomeScreen() {

  //Массив для вывода списка новостей
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Новини</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <FlatList
          data={items}
          renderItem={() => (
            <News/>              
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 500,
    paddingTop: 15,
    paddingBottom: 15,
    alignSelf: 'center',
  },
  scrollView:{
    paddingLeft: 10,
    paddingRight: 10,
  }
});
