import config from '../config';

/* eslint-disable @typescript-eslint/no-unused-vars */
const noop = (msg: string) => {};

export let warn = noop;
export let tip = noop;

if (process.env.NODE_ENV !== 'production') {
  const hasConsole = typeof console !== 'undefined';
  warn = (msg) => {
    if (config.warnHandler) {
      config.warnHandler.call(null, msg);
    } else if (hasConsole && !config.silent) {
      console.error(`[Mone warn]: ${msg}`);
    }
  };

  tip = (msg) => {
    if (hasConsole && !config.silent) {
      console.warn(`[Mone tip]: ${msg}`);
    }
  };
}
