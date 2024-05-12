// services/database.ts

// Importar axios para realizar solicitudes HTTP
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Cambia esto por la URL de tu API

export const getGarages = async () => {
  try {
    // Realizar una solicitud GET a la API para obtener los garajes
    const response = await axios.get(`${API_URL}/garajes`);
    // Devolver los garajes obtenidos
    return response.data;
  } catch (error) {
    throw new Error('Error fetching garages');
  }
};

export const getMotosByGarageId = async (garageId: string) => {
  try {
    // Realizar una solicitud GET a la API para obtener las motos de un garaje específico
    const response = await axios.get(`${API_URL}/garajes/${garageId}/motos`);
    // Devolver las motos obtenidas
    return response.data;
  } catch (error) {
    throw new Error('Error fetching motos by garage');
  }
};

export const getMotos = async () => {
  try {
    const response = await axios.get(`${API_URL}/motos`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getClientes = async () => {
  try {
    const response = await axios.get(`${API_URL}/clientes`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getReservas = async () => {
  try {
    const response = await axios.get(`${API_URL}/reservas`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
