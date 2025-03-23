import { Link } from "expo-router";
import { View, Text, StyleSheet, ScrollView, } from "react-native";
import HTMLView from 'react-native-htmlview';


export default function Exercises() {

    const exercises = [
        {
            title: 'Exercise 3',
            description: `
            <ul>Create a Login Screen</ul>
                <ul>
                    <li>Email (Text Input)</li>
                    <li>Password (Text Input)</li>
                    <li>Login (Button)</li>
                </ul>
                
            `,
            href: '/login'
        },
        {
            title: 'Exercise 4',
            description: `
            <ul>Create a stopwatch with two buttons: one for Start/Stop and one for Reset.</ul>
                <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                </ul>
        
            `,
            href: '/exercise4'
        },
        {
            title: 'Exercise 5',
            description: `
            <ul>Create a registration form.</ul>
            <ul>
                <li>Image (Image picker when image selected should display the image selected)</li>
                <li>Name (Text Input)</li>
                <li>Email (Text Input)</li>
                <li>Password (Text Input)</li>
                <li>Register (Button)</li>
            </ul>
            `,
            href: '/exercise5'
        },

       


        { title: 'Exercise 6', description: 'Hi', href: '/' },
        
        {
            title: 'Exercise 7',
            description: `
            <ul>Create a simple quiz using the API from Open Trivia Database</ul>
            <ul>
                <li>Minimum of 10 and a maximum of 30</li>
                
            </ul>
            `,
            href: '/exercise7'
        },

        { title: 'Exercise 8', description: 'Hi', href: '/' },
    ];
    

    return (
        <ScrollView style={{ padding: 20 }}>
            <View style={{ gap: 10 }}>
                {exercises.map((exercise, index) => (
                    <Link key={index} href={exercise.href} asChild>
                        <View style={styles.container}>
                            <Text style={styles.boldText}>
                                {exercise.title}
                            </Text>
                            <HTMLView value={exercise.description} />
                        </View>
                    </Link>
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'pink',
        borderRadius: 10,
        width: '100%',
        color: 'black'
    },
    boldText: {
        fontWeight: "bold",
        fontSize: 18, // Bold "Exercise" and number
        marginBottom: 5,
    },
    
})