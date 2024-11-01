import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, useSegments } from 'expo-router'
import "../global.css";
import { AuthContextProvider, useAuth } from "../context/authContext";

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();

    useEffect (() => {
        if (typeof isAuthenticated == "undefined") return;
        const inApp = segments[0] === "app";
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