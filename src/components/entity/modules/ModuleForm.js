import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, ButtonTray } from '../../UI/Button';

const defaultModule = {
    ModuleID: null,
    ModuleCode: '',
    ModuleName: '',
    ModuleLevel: '',
    ModuleLeaderName: '',
    ModuleImage: 'https://images.unsplash.com/photo-1555617981-d419e917d848?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
};

const ModuleForm = ({ originalModule, onSubmit, onCancel }) => {
    // If an originalModule is passed in, use it (Modify). Otherwise, use defaultModule (Add).
    defaultModule.ModuleID = Math.floor(Math.random() * 100000);
    const [module, setModule] = useState(originalModule || defaultModule);

    const handleChange = (field, value) => {
        setModule({ ...module, [field]: value });
    };

    const handleSubmit = () => onSubmit(module);

    return (
        <View style={styles.container}>
            <View style={styles.formItem}>
                <Text style={styles.label}>Module Code</Text>
                <TextInput style={styles.input} value={module.ModuleCode} onChangeText={(value) => handleChange('ModuleCode', value)} />
            </View>

            <View style={styles.formItem}>
                <Text style={styles.label}>Module Name</Text>
                <TextInput style={styles.input} value={module.ModuleName} onChangeText={(value) => handleChange('ModuleName', value)} />
            </View>

            <View style={styles.formItem}>
                <Text style={styles.label}>Module Level</Text>
                <TextInput style={styles.input} value={module.ModuleLevel} onChangeText={(value) => handleChange('ModuleLevel', value)} keyboardType="numeric" />
            </View>

            <View style={styles.formItem}>
                <Text style={styles.label}>Module Leader</Text>
                <TextInput style={styles.input} value={module.ModuleLeaderName} onChangeText={(value) => handleChange('ModuleLeaderName', value)} />
            </View>

            <View style={styles.formItem}>
                <Text style={styles.label}>Module Image URL</Text>
                <TextInput style={styles.input} value={module.ModuleImage} onChangeText={(value) => handleChange('ModuleImage', value)} />
            </View>

            <ButtonTray>
                <Button label="Save" onClick={handleSubmit} />
                <Button label="Cancel" onClick={onCancel} />
            </ButtonTray>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { gap: 15 },
    formItem: { gap: 5 },
    label: { fontSize: 16, fontWeight: 'bold', color: 'grey' },
    input: { borderWidth: 1, borderColor: 'lightgrey', borderRadius: 5, padding: 10, fontSize: 16, backgroundColor: 'white' }
});

export default ModuleForm;