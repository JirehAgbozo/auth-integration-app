import { useState } from "react";
import {
    ActivityIndicator,
    Alert,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";

export default function HomeScreen() {
  const { session } = useAuth();
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);

      const { error } = await supabase.auth.signOut();

      if (error) {
        Alert.alert(
          "Sign Out Failed",
          "We could not sign you out. Please try again.",
        );
      }
    } catch {
      Alert.alert(
        "Network Error",
        "Unable to sign out. Check your connection and try again.",
      );
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>AuthFlow</Text>

        <Text style={styles.title}>You&apos;re signed in!</Text>

        <Text style={styles.subtitle}>
          Welcome to the protected area of the app.
        </Text>

        <View style={styles.accountBox}>
          <Text style={styles.accountLabel}>Signed in as</Text>
          <Text style={styles.email}>
            {session?.user.email ?? "Authenticated user"}
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
            isSigningOut && styles.buttonDisabled,
          ]}
          onPress={handleSignOut}
          disabled={isSigningOut}
        >
          {isSigningOut ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.buttonText}>Sign Out</Text>
          )}
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  logo: {
    fontSize: 18,
    fontWeight: "700",
    color: "#2563eb",
    marginBottom: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 15,
    color: "#6b7280",
    marginTop: 8,
    marginBottom: 28,
  },
  accountBox: {
    backgroundColor: "#eff6ff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 22,
  },
  accountLabel: {
    fontSize: 13,
    color: "#6b7280",
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1e3a8a",
  },
  button: {
    height: 52,
    borderRadius: 12,
    backgroundColor: "#dc2626",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonDisabled: {
    opacity: 0.65,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
});
