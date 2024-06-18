import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View, Pressable, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image source={require('@/assets/images/fundo.png')} style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Redes sociais</ThemedText>
      </ThemedView>

      <ThemedView style={styles.contentContainer}>
        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/whatsapp.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://wa.me/<18 998094984>')}>
            <ThemedText>Whatsapp</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/linkedin.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.linkedin.com/in/majuu-seddig-ba1629314/')}>
            <ThemedText>Linkedin</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/gmail.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('mailto:mariajuliiam.seddig@gmail.com')}>
            <ThemedText>Email</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/github.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('https://github.com/mariasjulias')}>
            <ThemedText>Github</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/tel.png')} style={styles.icon} />
          <Pressable onPress={() => Linking.openURL('tel:5518998094984')}>
            <ThemedText>Telefone</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/instagram.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://www.instagram.com/ma.seddig/?next=%2F/')}>
            <ThemedText>Instagram</ThemedText>
          </Pressable>
        </ThemedView>

        <ThemedView style={styles.redes}>
          <Image source={require('@/assets/images/x.png')} style={styles.icon} />
          <Pressable  onPress={() => Linking.openURL('https://x.com/mjre4l')}>
            <ThemedText>Twiter</ThemedText>
          </Pressable>
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: 30,
    height: 10,
  },
  titleContainer: {
    padding: 16,
  },
  contentContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  redes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 10
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  text: {
    fontSize: 16,
  },
});