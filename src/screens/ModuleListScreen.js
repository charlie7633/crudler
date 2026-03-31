import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleList from '../components/entity/modules/ModuleList';
import initialModules from '../data/modules';

const ModuleListScreen = ({ navigation }) => {
    // State -------------------------------
    const [modules, setModules] = useState(initialModules);

    // Handlers ----------------------------
    const handleSelect = (module) => {
        navigation.navigate('ModuleViewScreen', { module });
    };

    // View --------------------------------
    return (
        <Screen>
            <ModuleList modules={modules} onSelect={handleSelect} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;