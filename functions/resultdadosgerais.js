import apiClient from '../services/dadosgerais';

export const getDadosGerais = async () =>{
    try{
        const response = await apiClient.get('/dados');
        return response.data;
    }
    catch(error) {
        console.error('Erro ao buscar dados gerais:', error);
        throw error;
    }
};