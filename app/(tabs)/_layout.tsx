import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; // Importe AntDesign da biblioteca @expo/vector-icons

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? 'user' : 'paperclip'}
              size={24}
              color={color}
              style={{ marginBottom: -3 }} // Ajuste opcional para alinhar com outros ícones
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign
              name={focused ? 'paperclip' : 'user'}
              size={24}
              color={color}
              style={{ marginBottom: -3 }} // Ajuste opcional para alinhar com outros ícones
            />
          ),
        }}
      />
    </Tabs>
  );
}
