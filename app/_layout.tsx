import { Stack } from "expo-router";

export default function RootLayout() {

    return (
        <Stack>
            <Stack.Screen 
                name="(tabs)" 
                options={{
                    headerShown: false,
                }}
            />
          
            <Stack.Screen
                name="login" />
            <Stack.Screen 
                name="+not-found.tsx" 
                options={{
                    headerShown: false,
                }}
            />
        </Stack>
    )
}