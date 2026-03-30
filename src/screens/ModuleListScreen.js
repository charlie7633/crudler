// src/screens/ModuleListScreen.js
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleList from '../components/entity/modules/ModuleList';
import initialModules from '../data/modules';

const ModuleListScreen = () => {
    // Initialisations ---------------------
    // State -------------------------------
    const [modules, setModules] = useState(initialModules);

    // Handlers ----------------------------
    const handleDelete = (moduleToDelete) => {
        // This creates a brand new array keeping only the modules that DON'T match the one we clicked
        setModules(modules.filter((module) => module.ModuleCode !== moduleToDelete.ModuleCode));
    };

    // View --------------------------------
    return (
        <Screen>
            <ModuleList modules={modules} onSelect={handleDelete} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleListScreen;