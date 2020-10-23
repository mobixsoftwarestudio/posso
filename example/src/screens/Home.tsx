import React from 'react';
import { CheckPermission } from 'posso';

const Home: React.FC = () => {
  return (
    <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      <h2>Home page</h2>
      <CheckPermission permissions={['page/home']} alternateView={<h2>Nicolau!</h2>}>
        <span>Authorized component</span>
      </CheckPermission>
    </div>
  );
}

export default Home;
