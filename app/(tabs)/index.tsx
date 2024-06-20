import React from "react";
import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { HelloWave } from "@/components/HelloWave";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/poufundo.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="title">Bem vindo!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Sobre o app:</ThemedText>
        <ThemedText style={styles.text}>
          Este é um aplicativo dedicado a centralizar e compartilhar os links das
          minhas redes sociais. Aqui você encontrará acesso direto às minhas
          contas no LinkedIn, Instagram, GitHub e outras plataformas.
        </ThemedText>
        <ThemedText style={styles.text}>
          Além dos links para redes sociais, também compartilho informações sobre
          meus projetos pessoais e outras atividades relacionadas à minha área
          de atuação como desenvolvedora de aplicativos.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <ThemedText type="subtitle">Sobre mim:</ThemedText>
        <ThemedText style={styles.text}>
          Me chamo Maria Julia e sou desenvolvedora de aplicativos. Estou sempre
          buscando aprender mais e contribuir para projetos interessantes na
          área de tecnologia.
        </ThemedText>
        <ThemedText style={styles.text}>
          Este aplicativo que criei é dedicado a compartilhar meus links de
          redes sociais e outros projetos pessoais.
        </ThemedText>


        <Image
          source={require('@/assets/images/eueu.jpeg')}
          style={styles.roundedImage}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    marginBottom: 16,
  },
  reactLogo: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    marginBottom: 8,
  },
  roundedImage: {
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    alignSelf: 'center',
    marginTop: 12,
  },
});
