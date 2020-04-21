import { initGlobalAPI } from './global-api';
import { warn } from '../utils/warn';

function Mone(options) {
  if (process.env.NODE_ENV !== 'production' && !(this instanceof Mone)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
}

initGlobalAPI(Mone);
export default Mone;