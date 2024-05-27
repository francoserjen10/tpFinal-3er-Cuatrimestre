import React, { useState } from 'react';

const FormSaliente: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Mostrar Formulario</button>

      {showForm && (
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" /><br /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" /><br /><br />
          <input type="submit" value="Enviar" />
        </form>
      )}
    </div>
  );
};

export default FormSaliente;