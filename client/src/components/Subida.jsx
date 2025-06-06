import { useState, useEffect } from 'react';
import { getProductos, createPrecioEspecial } from '../api';

function Subida() {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    userId: '',
    productoId: '',
    precioEspecial: '',
    nombreUsuario: ''
  });
  const [mensaje, setMensaje] = useState('');

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

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      await createPrecioEspecial(formData);
      setMensaje('Precio especial creado exitosamente!');
      setFormData({
        userId: '',
        productoId: '',
        precioEspecial: '',
        nombreUsuario: ''
      });
    } catch (error) {
      setMensaje('Error al crear precio especial');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Subida de Precios Especiales</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID de Usuario:</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            name="nombreUsuario"
            value={formData.nombreUsuario}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label>Producto:</label>
          <select
            name="productoId"
            value={formData.productoId}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione un producto</option>
            {productos.map(producto => (
              <option key={producto._id} value={producto._id}>
                {producto.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label>Precio Especial:</label>
          <input
            type="number"
            name="precioEspecial"
            value={formData.precioEspecial}
            onChange={handleChange}
            step="0.01"
            required
          />
        </div>
        
        <button type="submit">Guardar Precio Especial</button>
      </form>
      
      {mensaje && <div className="mensaje">{mensaje}</div>}
    </div>
  );
}

export default Subida;