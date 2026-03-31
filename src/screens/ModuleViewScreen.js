import { StyleSheet } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleView from '../components/entity/modules/ModuleView';

const ModuleViewScreen = ({ navigation, route }) => {
    // Catch the data passed from the navigation navigate method
    const { module } = route.params;

    // View --------------------------------
    return (
        <Screen>
            <ModuleView module={module} />
        </Screen>
    );
};

const styles = StyleSheet.create({});

export default ModuleViewScreen;