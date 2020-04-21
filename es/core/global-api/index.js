import config from '../../config';
import { warn } from '../../utils/warn';
export function initGlobalAPI(Mone) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Mone.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Mone, 'config', configDef);
}