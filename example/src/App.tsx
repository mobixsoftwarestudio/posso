import React from 'react'

import { CheckPermission } from 'posso'

const App = () => {
  return (
    <CheckPermission allPermissions={['test/create']} permissions={['test/edit']}>
      <span>OI</span>
    </CheckPermission>
  )
}

export default App;
