import { Pressable, StyleSheet, Text, View } from 'react-native';

// 1. Build the Button component
export const Button = ({ label, onClick }) => {
    return (
        <Pressable onPress={onClick} style={styles.button}>
            <Text style={styles.label}>{label}</Text>
        </Pressable>
    );
};

// 2. Build the ButtonTray component
export const ButtonTray = ({ children }) => {
    return (
        <View style={styles.buttonTray}>
            {children}
        </View>
    );
};

// 3. Add the styles
const styles = StyleSheet.create({
    buttonTray: {
        flexDirection: 'row',
        gap: 15,
    },
    button: {
        minHeight: 50,
        borderWidth: 1,
        borderRadius: 7,
        borderColor: 'grey',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        flex: 1,
    },
    label: {
        fontSize: 16,
    },
});