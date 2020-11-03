import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { usePosso } from 'posso';

const Login: React.FC = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const history = useHistory();
  const { handleAuthentication } = usePosso();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem('exampleToken', 'token');
    handleAuthentication();
    history.push('/home');
  }

  return (
    <div>
      <form className='react-form' onSubmit={handleSubmit}>
        <h1>Hi folks!</h1>

        <fieldset className='form-group'>
          <label htmlFor="formEmail">Email:</label>

          <input id='formEmail' className='form-input' name='email' type='email' required onChange={e => setEmail(e.target.value)} value={email} />
        </fieldset>
        <fieldset className='form-group'>
          <label htmlFor="formPassword">Password:</label>

          <input id='formPassword' className='form-input' name='password' type='password' required onChange={e => setPassword(e.target.value)} value={password} />
        </fieldset>

        <div className='form-group'>
          <input id='formButton' className='btn' type='submit' placeholder='Send message' />
        </div>
      </form>
    </div>
  );
}

export default Login;
