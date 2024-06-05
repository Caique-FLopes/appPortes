import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000/api',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

export const getDadosGerais = async () => {
    try {
        const response = await apiClient.get('/dados');
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('Erro na resposta da API:', error.response.data);
        } else if (error.request) {
            console.error('Nenhuma resposta recebida:', error.request);
            console.error('Detalhes do pedido:', error.request);
        } else {
            console.error('Erro ao configurar a requisição:', error.message);
        }
        console.error('Configuração da requisição:', error.config);
        throw error;
    }
};
