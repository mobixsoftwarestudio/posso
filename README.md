<p align="center">
  <a href="https://www.mobixtec.com/" rel="noopener" target="_blank"><img width="150" src="https://user-images.githubusercontent.com/16656725/96494904-643cf480-121d-11eb-9d1c-6597027dcadd.png" alt="Mobix logo"></a></p>
</p>

<h1 align="center">Posso</h1>

<div align="center">

Crafted with :heart: by <strong>[Mobix Software Studio](http://github.com/mobixsoftwarestudio)</strong> to </strong> [React.js](https://reactjs.org/) applications.
</div>

Posso it's a library to control permissions to routes, components and private routes.

[![NPM](https://img.shields.io/npm/v/@mobixsoftwarestudio/posso.svg)](https://www.npmjs.com/package/posso)

<!-- Put badge of coverage -->
<!-- Put badge of build -->

# Install

```bash
// with npm:
npm install --save @mobixsoftwarestudio/posso

// with yarn:
yarn add @mobixsoftwarestudio/posso

```

# Dependencies

- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)


# Usage

## Provider
```tsx
const permissionsOfApp = ['page/home'];
const isAuthenticated = () => localStorage.getItem('exampleToken') == null;

<PossoProvider
  permissions={permissionsOfApp}
  isAuthenticated={isAuthenticated()}
  notAuthenticatedRedirect={<Redirect to="/" />} authenticatedRedirect="/home"
>
  {...}
</PossoProvider>
```

## Route
```tsx
import React from 'react';
import { Switch } from 'react-router-dom';
import { PossoRoute } from '@mobixsoftwarestudio/posso';

import Home from './screens/Home';
import Login from './screens/Login';
import Admin from './screens/Admin';

const NotAllowedComponent = () => (
  <div>
    <h2>Not allowed page.</h2>
  </div>
);

export default Routes = () => (
  <Switch>
    <PossoRoute
      exact
      path='/'
      component={Login}
    />
    <PossoRoute
      path='/home'
      exact
      isPrivate
      permissions={['page/home']}
      render={() => <Home />}
    />
    <PossoRoute
      path='/admin'
      exact
      isPrivate
      permissions={['page/admin']}
      component={Admin}
      notAllowedComponent={<NotAllowedComponent />}
    />
  </Switch>
);
```

## Component
```tsx
const AlternateView = () => (
  <h2>Show to everyone.</h2>
);

<CheckPermission
  permissions={['page/home']}
  alternateView={<AlternateView />}
>
  <span>Authorized component</span>
</CheckPermission>
```

# API

#### &lt;PossoProvider />

The component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`isAuthenticated`**|boolean|isAuthenticated used to control authenticated routes.
|**`notAuthenticatedRedirect`**|JSX.Element| notAuthenticatedRedirect used to render/redirect a page when user is not authorized.
|**`authenticatedRedirect`**|string| authenticatedRedirect used to redirect a page when user is logged and access not private page.
|**`permissions`**|string[]| permissions used to wrap all project with all permissions of user.
|**`authorizationStrategy`**|func| authorizationStrategy used to define your own rule to check permissions.


#### &lt;PossoRoute />

The component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`isPrivate`**|boolean|Is used to refer a route that needs authentication.
|**`notAllowedComponent`**|JSX.Element| It is used to show a custom component when the user is not allowed to view a specific page.
|**`permissions`**|string[]| It is used to say what permissions are required to view the page./
|**`authorizationStrategy`**|func| authorizationStrategy used to define your own rule to check permissions.

#### &lt;CheckPermission />

The component accepts the following props:

|Name|Type|Description
|:--:|:-----|:-----|
|**`permissions`**|string[]| It is used to say what permissions are required to view the component.
|**`authorizationStrategy`**|func| authorizationStrategy used to define your own rule to check permissions.

#### Hooks

To manipulate the provider the following hooks are provided:

`const { handleAuthentication, handleLogout, setPermissions} = usePosso();`

|Name|Type|Description
|:--:|:-----|:-----|
|**`handleAuthentication`**|func| This hook is used to login the user.
|**`handleLogout`**|func| This hook is used to log the user out.
|**`setPermissions`**|func| This hook is used to modify user permissions.

## License
Copyright (c) 2020 Mobix Software Studio.

Licensed under The MIT License (MIT).
