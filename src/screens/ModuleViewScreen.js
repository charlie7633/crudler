import { StyleSheet } from 'react-native';
import Screen from '../components/layout/Screen';
import ModuleView from '../components/entity/modules/ModuleView';

const ModuleViewScreen = ({ navigation, route }) => {
    // 1. Unpack onDelete from route.params
    const { module, onDelete } = route.params;

    return (
        <Screen>
            {/* 2. Pass onDelete as a prop to ModuleView */}
            <ModuleView module={module} onDelete={onDelete} />
        </Screen>
    );
};

const styles = StyleSheet.create({});
export default ModuleViewScreen;