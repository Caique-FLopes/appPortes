import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getDadosGerais } from './functions/resultdadosgerais';

export default function App() {
    const [dados, setDados] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDadosGerais();
                setDados(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.container}>
                <Text>Erro ao carregar dados: {error.message}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text>Dados Gerais:</Text>
            <Text>Saldo Cobrado: {dados.cobrado}</Text>
            <Text>Débito Pago: {dados.debito_pago}</Text>
            <Text>Débito Parcelado: {dados.debito_parcelado}</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
