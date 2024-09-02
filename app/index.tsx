import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <View style={styles.container} >
                <Text style={styles.text}>{ counter }</Text>
            </View>
            <View>
                <Button
                    title='Incrementar'
                    color="gold"
                    onPress={() => setCounter( counter + 1 ) }
                />
                <Button
                    title='Decrementar'
                    onPress={() => setCounter( counter - 1 ) }
                />
                <Button
                    title='Reiniciar'
                    onPress={() => setCounter( 0 ) }
                />
            </View>
            <View>
                <TouchableOpacity style={ styles.btnTouchable }>
                    <Text style={ styles.btnTouchableText }>
                        Incrementar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={ styles.btnTouchable }
                >
                    <Text
                        style={ styles.btnTouchableText }
                    >
                        Decrementar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.btnTouchable }>
                    <Text style={ styles.btnTouchableText }>
                        Reiniciar
                    </Text>
                </TouchableOpacity>
            </View>
            <view>
                <Pressable style={ styles.btnTouchable }>
                    <Text style={ styles.btnTouchableText }>Incrementar</Text>
                </Pressable>
                <Pressable>
                    <Text>Decrementar</Text>
                </Pressable>
                <Pressable>
                    <Text>Reiniciar</Text>
                </Pressable>
            </view>
        </View>
    )
}

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
    },
    btnTouchable: {
        backgroundColor: "greenyellow",
        padding: 20,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    btnTouchableText: {
        fontSize: 35
    }
})