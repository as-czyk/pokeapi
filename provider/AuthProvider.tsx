import React from "react";
import { CloudApi } from "@/cloud/CloudApi";
import { useUserStore } from "@/stores";
import { User } from "firebase/auth";
import { PropsWithChildren, useEffect } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const { setUser } = useUserStore();

  useEffect(() => {
    const unsubscribe = CloudApi.onAuthStateChanged(
      async (user: User | null) => {
        if (user) {
          setUser(user);
        }
      }
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = CloudApi.onIdTokenChanged(async (user: User | null) => {
      if (user) {
        setUser(user);
      }
    });

    return () => unsubscribe();
  }, []);

  return <>{children}</>;
};
