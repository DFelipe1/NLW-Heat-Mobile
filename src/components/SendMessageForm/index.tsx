import React, { useState } from 'react';

import { View, TextInput, Alert, Keyboard } from 'react-native';
import { COLORS } from '../../global/theme';
import { api } from '../../services/api';
import { Button } from '../Button';

import { styles } from './style';


export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false)
    
    async function handleMessageSubmit(){
        const messageFormatted = message.trim();
        

        if(messageFormatted.length > 0) {
            setSendingMessage(true)

            await api.post('/messages', { message: messageFormatted})

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false)

        }else {
            Alert.alert('Escreva a mensagem para enviar')
        }
    }
    
    return (
        <View style={styles.conatiner}>

            <TextInput 
                keyboardAppearance="dark"
                placeholder="Qual sua expectativa para o evento"
                placeholderTextColor={COLORS.GRAY_PRIMARY}
                multiline
                maxLength={140}
                onChangeText={setMessage}
                value={message}
                style={styles.input}
                editable={!sendingMessage}
            />

            

            <Button
                title="Enviar Mensagem"
                color={COLORS.WHITE}
                backgroundColor={COLORS.PINK}
                isLoading={sendingMessage}
                onPress={handleMessageSubmit}
            />
        </View>
    )
}