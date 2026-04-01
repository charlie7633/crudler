import { StyleSheet, Text, ScrollView } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleForm from '../components/entity/modules/ModuleForm';

const ModuleModifyScreen = ({ navigation, route }) => {
    const { module, onModify } = route.params;

    return (
        <Screen>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.title}>Modify Module</Text>
                <ModuleForm
                    originalModule={module}
                    onSubmit={onModify}
                    onCancel={() => navigation.goBack()}
                />
            </ScrollView>
        </Screen>
    );
};

const styles = StyleSheet.create({
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
});
export default ModuleModifyScreen;