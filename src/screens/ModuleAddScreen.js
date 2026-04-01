import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import Screen from '../components/layout/Screen';
import { Button, ButtonTray } from '../components/UI/Button';

// 1. Set up a blank template for a new module
const initialModule = {
    ModuleID: Math.floor(Math.random() * 100000), // Generate a random ID
    ModuleCode: '',
    ModuleName: '',
    ModuleLevel: '',
    ModuleLeaderName: '',
    ModuleImage: 'https://images.unsplash.com/photo-1555617981-d419e917d848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', // Default image
};

const ModuleAddScreen = ({ navigation, route }) => {
    // Unpack the onAdd function from route parameters
    const { onAdd } = route.params;

    // 2. Initialize local state to hold the form data
    const [module, setModule] = useState(initialModule);

    // 3. The magic function that updates state as the user types
    const handleChange = (field, value) => {
        setModule({ ...module, [field]: value });
    };

    // Handlers for the buttons
    const handleAdd = () => onAdd(module); // Send the completed draft state back to the List screen
    const handleCancel = () => navigation.goBack();

    return (
        <Screen>
            {/* ScrollView is great here so the keyboard doesn't cover inputs on smaller iphones */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Text style={styles.title}>Add New Module</Text>

                    {/* Form Item: Module Code */}
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Module Code</Text>
                        <TextInput
                            style={styles.input}
                            value={module.ModuleCode}
                            onChangeText={(value) => handleChange('ModuleCode', value)}
                            placeholder="e.g. CI6330"
                        />
                    </View>

                    {/* Form Item: Module Name */}
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Module Name</Text>
                        <TextInput
                            style={styles.input}
                            value={module.ModuleName}
                            onChangeText={(value) => handleChange('ModuleName', value)}
                            placeholder="e.g. Mobile Application Development"
                        />
                    </View>

                    {/* Form Item: Module Level */}
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Module Level</Text>
                        <TextInput
                            style={styles.input}
                            value={module.ModuleLevel}
                            onChangeText={(value) => handleChange('ModuleLevel', value)}
                            placeholder="e.g. 6"
                            keyboardType="numeric"
                        />
                    </View>

                    {/* Form Item: Module Leader */}
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Module Leader</Text>
                        <TextInput
                            style={styles.input}
                            value={module.ModuleLeaderName}
                            onChangeText={(value) => handleChange('ModuleLeaderName', value)}
                            placeholder="e.g. Graeme Jones"
                        />
                    </View>

                    {/* Form Item: Image URL */}
                    <View style={styles.formItem}>
                        <Text style={styles.label}>Module Image URL</Text>
                        <TextInput
                            style={styles.input}
                            value={module.ModuleImage}
                            onChangeText={(value) => handleChange('ModuleImage', value)}
                        />
                    </View>

                    {/* Add and Cancel Buttons */}
                    <ButtonTray>
                        <Button label="Add" onClick={handleAdd} />
                        <Button label="Cancel" onClick={handleCancel} />
                    </ButtonTray>
                </View>
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    formItem: {
        gap: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey',
    },
    input: {
        borderWidth: 1,
        borderColor: 'lightgrey',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        backgroundColor: 'white',
    }
});

export default ModuleAddScreen;