import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// first our route components

const adminComp = () => <h2>Admin</h2>

const empComp = ({ routes }) => (
  <div>
    <h2>Employee</h2>
    <ul>
      <li><Link to="/emp/add">Add Employee</Link></li>
      <li><Link to="/emp/edit">Edit Employee</Link></li>
    </ul>

    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route}/>
    ))}
  </div>
)

const addEmpComp = () => <h3>Add Employee</h3>
const editEmpComp = () => <h3>Edit Employee</h3>

// then our route config
const routes = [

  { path: '/admin',
    component: adminComp
  },
  { path: '/emp',
    component: empComp,
    routes: [
      { path: '/emp/add',
        component: addEmpComp
      },
      { path: '/emp/edit',
        component: editEmpComp
      }
    ]
  }
]

const RouteWithSubRoutes = (route) => (
  <Route path={route.path} render={props => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const RouteConfigExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/emp">Employee</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>

      {routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
      ))}
    </div>
  </Router>
)
export default RouteConfigExample
