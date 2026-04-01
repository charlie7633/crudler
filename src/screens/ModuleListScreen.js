import { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleList from '../components/entity/modules/ModuleList';
import initialModules from '../data/modules';
import { Button, ButtonTray } from '../components/UI/Button';

// Ignore the warning about passing functions through navigation
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const ModuleListScreen = ({ navigation }) => {
    // State -------------------------------
    const [modules, setModules] = useState(initialModules);

    // Handlers ----------------------------

    // --- DELETE LOGIC (Activity 8) ---
    const handleDelete = (moduleToDelete) => {
        setModules(modules.filter((module) => module.ModuleCode !== moduleToDelete.ModuleCode));
    };

    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    // --- ADD LOGIC (Activity 9) ---
    const handleAdd = (module) => {
        setModules([...modules, module]);
    };

    const onAdd = (module) => {
        handleAdd(module);
        navigation.goBack();
    };

    const goToModuleAddScreen = () => {
        navigation.navigate('ModuleAddScreen', { onAdd });
    };

    // --- VIEW LOGIC (Activity 6 & 8) ---
    const handleSelect = (module) => {
        navigation.navigate('ModuleViewScreen', { module, onDelete });
    };

    // View --------------------------------
    return (
        <Screen>
            <ButtonTray>
                <Button label="Add Module" onClick={goToModuleAddScreen} />
            </ButtonTray>

            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;