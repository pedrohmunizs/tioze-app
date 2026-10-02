
import { ScrollView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="flex-1 px-6 pt-16">
        <View className="mb-8">
          <Text className="text-3xl font-bold text-gray-900">
            Bem-vindo!
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}