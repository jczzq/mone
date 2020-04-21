/**
 * 短横线分隔处理成大写
 */
export const kebab2camel = kebab => {
  let a = kebab.match(/-\w/);
  while (a) {
    a = a && a[0];
    // console.log('a', a);
    let b = a.replace(/-/i, "").toUpperCase();
    kebab = kebab.replace(a, b);
    a = kebab.match(/-\w/);
  }
  return kebab;
};

// a = b
export const SET = (obj, a, b) => {
  // console.log(obj, a, b);
  obj[a] = b;
  return true;
};

// if (condition) a else b
export const IF = (condition, a, b) => {
  // console.log(condition, a, b);
  return condition ? a : b;
};
// 是否等于
// force: 强等于
export const ISEQ = (a, b, force = true) => {
  if (force) {
    return a === b;
  } else {
    return a == b;
  }
};
// 是否小于
export const ISLT = (a, b) => {
  // console.log('ISLT', a, b);
  return a < b;
};
// 是否大于
export const ISGF = (a, b) => {
  return a > b;
};
// 是否小于等于
export const ISLE = (a, b) => {
  return a <= b;
};
// 是否大于等于
export const ISGE = (a, b) => {
  return a >= b;
};
// 月底
// export const MONTH_END = (a, format = "YYYY-MM-DD") => {
//   const r = dayjs(a)
//     .endOf("month")
//     .format(format);
//   return r;
// };

// 与 Object.assign 不同的是只合并 target 有的属性
export const assign = () => {
  const [target, ...sources] = Array.from(arguments); // eslint-disable-line
  const keys = Object.keys(target);
  sources.forEach(source => {
    keys.forEach(key => {
      if (source.hasOwnProperty(key) && source[key] !== void 0) {
        target[key] = source[key];
      }
    });
  });
  return target;
};

export const VAL2LAB = (val, list, label = "label", value = "value") => {
  if (list) {
    let tempVal = list.find(item => item[value] === val);
    if (tempVal) {
      return tempVal[label];
    }
  }
};

// 浅拷贝
export const extendCopy = p => {
  let c = {};
  for (let i in p) {
    c[i] = p[i];
  }
  return c;
};

// 深拷贝(object)
export const deepCopy = obj => JSON.parse(JSON.stringify(obj));
// (p, c) => {
//   c = Array.isArray(p) ? [] : {};
//   for (var i in p) {
//     if (typeof p[i] === "object" && p[i]) {
//       // Handle Date
//       if (p[i] instanceof Date) {
//         c[i] = new Date();
//         c[i].setTime(p[i].getTime());
//       } else {
//         c[i] = Array.isArray(p[i]) ? [] : {};
//         deepCopy(p[i], c[i]);
//       }
//     } else {
//       c[i] = p[i];
//     }
//   }
//   return c;
// };

/**
 * 判断两个对象是否相等
 * @param {any} obj1
 * @param {any} obj2
 */
export const diff = (obj1, obj2) => {
  var o1 = obj1 instanceof Object;
  var o2 = obj2 instanceof Object;
  if (!o1 || !o2) {
    return obj1 === obj2;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (var attr in obj1) {
    const a = obj1[attr];
    const b = obj2[attr];
    var t1 = a instanceof Object;
    var t2 = b instanceof Object;
    if (t1 && t2) {
      const isSame = diff(a, b);
      if (!isSame) return false;
    } else if (a !== b) {
      return false;
    }
  }
  return true;
};

export function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

export function uuid(len, radix) {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  var uuid = [],
    i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
}

export const GET_CONSTRUCTOR = val => {
  return eval(
    Object.prototype.toString
      .call(val)
      .substr(8)
      .replace("]", "")
  );
};
