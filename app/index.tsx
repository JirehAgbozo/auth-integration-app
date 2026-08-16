import { Redirect } from "expo-router";

import { useAuth } from "@/context/AuthContext";

export default function IndexScreen() {
  const { session } = useAuth();

  if (session) {
    return <Redirect href="/home" />;
  }

  return <Redirect href="/sign-in" />;
}
