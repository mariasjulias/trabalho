import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/fundo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          <ThemedText type="defaultSemiBold">
            Meus links!
          </ThemedText>
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.tituloContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
      </ThemedView>
      <ThemedView style={styles.textoContainer}>
        <ThemedText>
          Me chamo Maria Julia e isso é um aplicativo de links de redes sociais
        </ThemedText>
      </ThemedView> 
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  tituloContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textoContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 300,
    width: 550,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});