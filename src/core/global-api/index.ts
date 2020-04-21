import config from '../../config';
import { warn } from '../../utils/warn';

export function initGlobalAPI(Mone) {
  // config
  const configDef = {} as any;
  configDef.get = () => config;
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = () => {
      warn('Do not replace the Mone.config object, set individual fields instead.');
    };
  }
  Object.defineProperty(Mone, 'config', configDef);
}
