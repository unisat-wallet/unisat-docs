

import ConnectButton from './components/ConnectButton';
import SendTransaction from './components/SendTransaction';

export default ({ Vue, isServer }) => {
  if (!isServer) {
    import('vue-toasted' /* webpackChunkName: "notification" */).then((module) => {
      Vue.use(module.default)
    })
  }

  Vue.component('ConnectButton', ConnectButton);
  Vue.component('SendTransaction', SendTransaction);
}
