import { Text, SafeAreaView, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Філімончук Максим Іванович, ЗІПЗк-21-1</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(237,237,237,255)',
    alignItems: 'center',
  },
});
