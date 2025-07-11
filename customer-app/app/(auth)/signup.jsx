import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name });
      router.replace("/(tabs)/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView className="bg-green-900 flex-1">
      <View className="flex-1 justify-center items-center px-4">
        <Image source={require("../../assets/images/logo.png")} className="w-20 h-20 mt-2 mb-2" />
        <Text className="text-white text-xl font-bold mb-2 text-center">NutriTrace</Text>
        <View
          className="rounded-2xl shadow p-6 w-full max-w-md"
          style={{ backgroundColor: '#f0fdf4' }}
        >
          <Text className="text-green-900 text-2xl font-bold mb-2 text-center">Sign Up</Text>
          <Text className="text-gray-500 mb-6 text-center">Create your account to get started.</Text>
          <TextInput
            className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
            placeholder="Name"
            placeholderTextColor="#6b7280"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
            placeholder="Email"
            placeholderTextColor="#6b7280"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
            placeholder="Password"
            placeholderTextColor="#6b7280"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            className="bg-gray-100 rounded-lg px-4 py-3 mb-4 text-base"
            placeholder="Confirm Password"
            placeholderTextColor="#6b7280"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          <TouchableOpacity
            className="bg-yellow-500 rounded-lg py-3 items-center mb-2"
            onPress={handleSignUp}
          >
            <Text className="text-white font-bold text-base">Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push("/signin")}
            className="mt-2">
            <Text className="text-green-900 text-center">Already have an account? <Text className="underline">Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
} 