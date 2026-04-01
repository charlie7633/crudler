import { StyleSheet, Text, View } from 'react-native';
import Screen from '../components/layout/Screen';
import { Button, ButtonTray } from '../components/UI/Button';

// A temporary hardcoded module for testing Activity 9
const defaultModule = {
    ModuleID: Math.floor(Math.random() * 100000), // Random ID
    ModuleCode: 'CI6330',
    ModuleName: 'Mobile Application Development',
    ModuleLevel: 6,
    ModuleLeaderName: 'Graeme Jones',
    ModuleImage: 'https://images.unsplash.com/photo-1555617981-d419e917d848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const ModuleAddScreen = ({ navigation, route }) => {
    // 1. Unpack the onAdd function from route parameters
    const { onAdd } = route.params;

    // 2. Handlers for the buttons
    const handleAdd = () => onAdd(defaultModule);
    const handleCancel = () => navigation.goBack();

    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>Add Module Screen (Testing)</Text>

                {/* 3. Add and Cancel Buttons */}
                <ButtonTray>
                    <Button label="Add" onClick={handleAdd} />
                    <Button label="Cancel" onClick={handleCancel} />
                </ButtonTray>
            </View>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    }
});

export default ModuleAddScreen;