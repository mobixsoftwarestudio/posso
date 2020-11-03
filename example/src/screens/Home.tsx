import React from 'react';
import { CheckPermission, usePosso } from 'posso';

const Home: React.FC = () => {
  const { handleLogout } = usePosso();

  const logout = () => {
    localStorage.removeItem('exampleToken');
    handleLogout();
  }

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'flex-start'
      }}>
      <h2>Home page</h2>
      <CheckPermission permissions={['page/home']} alternateView={<h2>Nicolau!</h2>}>
        <span>Authorized component</span>
      </CheckPermission>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Home;
