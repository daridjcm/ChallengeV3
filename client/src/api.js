const API_BASE_URL = 'http://localhost:5000/api';

export async function getProductos() {
  const response = await fetch(`${API_BASE_URL}/productos`);
  if (!response.ok) throw new Error('Error al obtener productos');
  return await response.json();
}

export async function getPreciosEspeciales(userId) {
  const response = await fetch(`${API_BASE_URL}/precios-especiales/${userId}`);
  if (!response.ok) throw new Error('Error al obtener precios especiales');
  return await response.json();
}

export async function createPrecioEspecial(data) {
  const response = await fetch(`${API_BASE_URL}/precios-especiales/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });
  
  if (!response.ok) throw new Error('Error al crear precio especial');
  return await response.json();
}
