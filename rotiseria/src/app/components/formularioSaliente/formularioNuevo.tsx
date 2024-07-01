import React from 'react';
import './formSaliente.css';

const FormularioBueno = () => {
  return (
    <div id="formSaliente" className='main hidden'>
      <input type="checkbox" id="chk" style={{display:"none"}} />

      <div className="signup">
        <form className="dflex">
          <label htmlFor="chk">Sign up</label>
          <input className='inputForm' type="text" name="txt" placeholder="User name" required />
          <input className='inputForm' type="email" name="email" placeholder="Email" required />
          <input className='inputForm' type="password" name="pswd" placeholder="Password" required />
          <button>Sign up</button>
        </form>
      </div>

      <div className="login">
        <form className='dflex'>
          <label htmlFor="chk">Login</label>
          <input className='inputForm' type="email" name="email" placeholder="Email" required />
          <input className='inputForm' type="password" name="pswd" placeholder="Password" required />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioBueno;