import React from 'react'
import {render} from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import App from './App'

{/*向所有的容器组件提供store*/}
render((
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>
), document.getElementById('root'))

