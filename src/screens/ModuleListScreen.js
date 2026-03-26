// src/screens/ModuleListScreen.js
import { StyleSheet } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleList from '../components/entity/modules/ModuleList';
import initialModules from '../data/modules';

const ModuleListScreen = () => {
    // Initialisations ---------------------
    const modules = initialModules;

    // State -------------------------------
    // Handlers ----------------------------
    const handleSelect = (module) => {
        alert(`Item ${module.ModuleCode} selected`);
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