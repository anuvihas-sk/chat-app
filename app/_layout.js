import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, useRouter, useSegments } from 'expo-router'
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";
import { useRouteNode } from 'expo-router/build/Route';

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect (() => {
        if (typeof isAuthenticated == "undefined") return;
        const inApp = segments[0] === "app";
        if(isAuthenticated && !inApp) {
            router.replace("/home");
        }else if (isAuthenticated==false) {
            router.replace("/signIn");
        }
    },[isAuthenticated])

    return <Slot />

}

export default function Rootlayout() {
    return (
        <AuthContextProvider>
            <MainLayout />
        </AuthContextProvider>
    )
} 