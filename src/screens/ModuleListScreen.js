import { useState } from 'react';
import { StyleSheet, LogBox } from 'react-native'; // 1. Import LogBox
import Screen from '../components/layout/Screen';
import ModuleList from '../components/entity/modules/ModuleList';
import initialModules from '../data/modules';

// 2. Ignore the warning about passing functions through navigation
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

const ModuleListScreen = ({ navigation }) => {
    const [modules, setModules] = useState(initialModules);

    const handleDelete = (moduleToDelete) => {
        setModules(modules.filter((module) => module.ModuleCode !== moduleToDelete.ModuleCode));
    };

    // 3. Create an onDelete handler that deletes AND goes back
    const onDelete = (module) => {
        handleDelete(module);
        navigation.goBack();
    };

    // 4. Pass the onDelete function along with the module
    const handleSelect = (module) => {
        navigation.navigate('ModuleViewScreen', { module, onDelete });
    };

    return (
        <Screen>
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

const styles = StyleSheet.create({});
export default ModuleListScreen;