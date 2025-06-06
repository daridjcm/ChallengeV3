import { useState, useEffect } from 'react';
import { getProductos, getPreciosEspeciales } from '../api';

function Articulos() {
  const [productos, setProductos] = useState([]);
  const [preciosEspeciales, setPreciosEspeciales] = useState([]);
  const [userId, setUserId] = useState('');

  // Cargar productos al montar el componente
  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await getProductos();
        setProductos(data);
      } catch (error) {
        console.error('Error cargando productos:', error);
      }
    };
    cargarProductos();
  }, []);

  // Función para buscar precios especiales por ID de usuario
  const buscarPreciosEspeciales = async () => {
    if (!userId) {
      alert('Por favor ingrese un ID de usuario');
      return;
    }

    try {
      const data = await getPreciosEspeciales(userId);
      setPreciosEspeciales(data);
    } catch (error) {
      console.error('Error cargando precios especiales:', error);
    }
  };

  // Función para obtener el precio especial de un producto
  const getPrecioEspecial = (productoId) => {
    const precio = preciosEspeciales.find(
      p => p.productoId === productoId || (p.productoId && p.productoId._id === productoId)
    );
    return precio ? precio.precioEspecial : 'N/A';
  };

  // Función para obtener nombre del usuario
  const getNombreUsuario = (productoId) => {
    const precio = preciosEspeciales.find(
      p => p.productoId === productoId || (p.productoId && p.productoId._id === productoId)
    );
    return precio ? precio.nombreUsuario : 'N/A';
  };

  return (
    <div>
      <h1>Artículos</h1>
      
      <div className='buscar-precios'>
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="ID de Usuario"
        />
        <button onClick={buscarPreciosEspeciales}>Buscar Precios</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Nombre</th>
            <th>Precio Normal</th>
            <th>Precio Especial</th>
            <th>Categoría</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(producto => (
            <tr key={producto._id}>
              <td>{getNombreUsuario(producto._id)}</td>
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>{getPrecioEspecial(producto._id)}</td>
              <td>{producto.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Articulos;