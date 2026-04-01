// 1. Import Alert from react-native
import { Alert, StyleSheet, Text, View } from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import { Button, ButtonTray } from '../../UI/Button';

// 2. Add onDelete to the props
const ModuleView = ({ module, onDelete }) => {

    // 3. Create the Alert confirmation function
    const requestDelete = () => Alert.alert(
        'Delete Warning',
        `Are you sure you want to delete module ${module.ModuleCode}?`,
        [
            { text: 'Cancel' },
            { text: 'Delete', onPress: () => onDelete(module) } // 4. Call onDelete if confirmed
        ]
    );

    return (
        <View style={styles.container}>
            <FullWidthImage source={{ uri: module.ModuleImage }} style={styles.image} />

            <View style={styles.infoTray}>
                <Text style={styles.boldText}>
                    {module.ModuleCode} {module.ModuleName}
                </Text>
                <Text style={styles.text}>Level {module.ModuleLevel}</Text>
                <Text style={styles.text}>
                    {module.ModuleLeaderName} <Text style={styles.dimText}>(Module Leader)</Text>
                </Text>
            </View>

            <ButtonTray>
                <Button label="Modify" onClick={() => console.log('Modify clicked')} />
                {/* 5. Hook up the requestDelete function to the Delete button */}
                <Button label="Delete" onClick={requestDelete} />
            </ButtonTray>

        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        gap: 15,
    },
    image: {
        borderRadius: 3,
    },
    infoTray: {
        gap: 5,
    },
    text: {
        fontSize: 16,
    },
    boldText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    dimText: {
        color: 'grey',
    }
});

export default ModuleView;