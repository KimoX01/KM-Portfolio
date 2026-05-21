// http-url:https://framerusercontent.com/modules/zgpTVvDCoFKqF7mXq1Xq/u0kokH4QgMtyJLaZuIeI/QKVuepKnZ.js
import { jsx as _jsx4, jsxs as _jsxs3, Fragment as _Fragment } from "react/jsx-runtime";
import { addFonts as addFonts4, addPropertyControls as addPropertyControls4, ChildrenCanSuspend, ComponentViewportProvider, ControlType as ControlType4, cx as cx4, getFonts, Link as Link2, PathVariablesContext, ResolveLinks, SmartComponentScopedContainer, useActiveVariantCallback as useActiveVariantCallback2, useComponentViewport as useComponentViewport4, useLocaleInfo as useLocaleInfo4, useQueryData, useRouter, useVariantState as useVariantState4, withCSS as withCSS4 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup4, motion as motion4, MotionConfigContext as MotionConfigContext4 } from "./_framer-runtime.js";
import * as React4 from "react";
import { useRef as useRef4 } from "react";

// http-url:https://framerusercontent.com/modules/hatmDPYE3RL4HaIXkH7v/iZSLgftQkVD8cDnr1Su9/DllZ9gEH7.js
import { addPropertyControls as e5, ControlType as l2, QueryCache as t4, QueryEngine as r3 } from "./_framer-runtime.js";

// http-url:https://framerusercontent.com/modules/hatmDPYE3RL4HaIXkH7v/iZSLgftQkVD8cDnr1Su9/DllZ9gEH7-0.js
import { ControlType as v } from "./_framer-runtime.js";
import { ControlType as P } from "./_framer-runtime.js";
var t;
var e = Object.create;
var r = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var i = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (t5, e6, n4) => e6 in t5 ? r(t5, e6, { enumerable: true, configurable: true, writable: true, value: n4 }) : t5[e6] = n4;
var u = (t5, e6) => function() {
  return e6 || (0, t5[i(t5)[0]])((e6 = { exports: {} }).exports, e6), e6.exports;
};
var l = (t5, e6, s4, o4) => {
  if (e6 && "object" == typeof e6 || "function" == typeof e6)
    for (let u4 of i(e6))
      a.call(t5, u4) || u4 === s4 || r(t5, u4, { get: () => e6[u4], enumerable: !(o4 = n(e6, u4)) || o4.enumerable });
  return t5;
};
var h = (t5, n4, i3) => (i3 = null != t5 ? e(s(t5)) : {}, l(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !n4 && t5 && t5.__esModule ? i3 : r(i3, "default", { value: t5, enumerable: true }),
  t5
));
var c = (t5, e6, r4) => o(t5, "symbol" != typeof e6 ? e6 + "" : e6, r4);
var f = u({ "../../../node_modules/dataloader/index.js"(t5, e6) {
  var r4, n4 = /* @__PURE__ */ function() {
    function t6(t7, e8) {
      if ("function" != typeof t7)
        throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + t7 + ".");
      this._batchLoadFn = t7, this._maxBatchSize = function(t8) {
        if (!(!t8 || false !== t8.batch))
          return 1;
        var e9 = t8 && t8.maxBatchSize;
        if (void 0 === e9)
          return 1 / 0;
        if ("number" != typeof e9 || e9 < 1)
          throw TypeError("maxBatchSize must be a positive number: " + e9);
        return e9;
      }(e8), this._batchScheduleFn = function(t8) {
        var e9 = t8 && t8.batchScheduleFn;
        if (void 0 === e9)
          return i3;
        if ("function" != typeof e9)
          throw TypeError("batchScheduleFn must be a function: " + e9);
        return e9;
      }(e8), this._cacheKeyFn = function(t8) {
        var e9 = t8 && t8.cacheKeyFn;
        if (void 0 === e9)
          return function(t9) {
            return t9;
          };
        if ("function" != typeof e9)
          throw TypeError("cacheKeyFn must be a function: " + e9);
        return e9;
      }(e8), this._cacheMap = function(t8) {
        if (!(!t8 || false !== t8.cache))
          return null;
        var e9 = t8 && t8.cacheMap;
        if (void 0 === e9)
          return /* @__PURE__ */ new Map();
        if (null !== e9) {
          var r5 = ["get", "set", "delete", "clear"].filter(function(t9) {
            return e9 && "function" != typeof e9[t9];
          });
          if (0 !== r5.length)
            throw TypeError("Custom cacheMap missing methods: " + r5.join(", "));
        }
        return e9;
      }(e8), this._batch = null, this.name = e8 && e8.name ? e8.name : null;
    }
    var e7 = t6.prototype;
    return e7.load = function(t7) {
      if (null == t7)
        throw TypeError("The loader.load() function must be called with a value, but got: " + String(t7) + ".");
      var e8 = function(t8) {
        var e9 = t8._batch;
        if (null !== e9 && !e9.hasDispatched && e9.keys.length < t8._maxBatchSize)
          return e9;
        var r6 = { hasDispatched: false, keys: [], callbacks: [] };
        return t8._batch = r6, t8._batchScheduleFn(function() {
          (function(t9, e10) {
            var r7;
            if (e10.hasDispatched = true, 0 === e10.keys.length) {
              a3(e10);
              return;
            }
            try {
              r7 = t9._batchLoadFn(e10.keys);
            } catch (r8) {
              return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: " + String(r8) + "."));
            }
            if (!r7 || "function" != typeof r7.then)
              return s4(t9, e10, TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String(r7) + "."));
            r7.then(function(t10) {
              if (!o4(t10))
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String(t10) + ".");
              if (t10.length !== e10.keys.length)
                throw TypeError("DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String(e10.keys) + "\n\nValues:\n" + String(t10));
              a3(e10);
              for (var r8 = 0; r8 < e10.callbacks.length; r8++) {
                var n6 = t10[r8];
                n6 instanceof Error ? e10.callbacks[r8].reject(n6) : e10.callbacks[r8].resolve(n6);
              }
            }).catch(function(r8) {
              s4(t9, e10, r8);
            });
          })(t8, r6);
        }), r6;
      }(this), r5 = this._cacheMap, n5 = this._cacheKeyFn(t7);
      if (r5) {
        var i4 = r5.get(n5);
        if (i4) {
          var u4 = e8.cacheHits || (e8.cacheHits = []);
          return new Promise(function(t8) {
            u4.push(function() {
              t8(i4);
            });
          });
        }
      }
      e8.keys.push(t7);
      var l3 = new Promise(function(t8, r6) {
        e8.callbacks.push({ resolve: t8, reject: r6 });
      });
      return r5 && r5.set(n5, l3), l3;
    }, e7.loadMany = function(t7) {
      if (!o4(t7))
        throw TypeError("The loader.loadMany() function must be called with Array<key> but got: " + t7 + ".");
      for (var e8 = [], r5 = 0; r5 < t7.length; r5++)
        e8.push(this.load(t7[r5]).catch(function(t8) {
          return t8;
        }));
      return Promise.all(e8);
    }, e7.clear = function(t7) {
      var e8 = this._cacheMap;
      if (e8) {
        var r5 = this._cacheKeyFn(t7);
        e8.delete(r5);
      }
      return this;
    }, e7.clearAll = function() {
      var t7 = this._cacheMap;
      return t7 && t7.clear(), this;
    }, e7.prime = function(t7, e8) {
      var r5 = this._cacheMap;
      if (r5) {
        var n5, i4 = this._cacheKeyFn(t7);
        void 0 === r5.get(i4) && (e8 instanceof Error ? (n5 = Promise.reject(e8)).catch(function() {
        }) : n5 = Promise.resolve(e8), r5.set(i4, n5));
      }
      return this;
    }, t6;
  }(), i3 = "object" == typeof process && "function" == typeof process.nextTick ? function(t6) {
    r4 || (r4 = Promise.resolve()), r4.then(function() {
      process.nextTick(t6);
    });
  } : "function" == typeof setImmediate ? function(t6) {
    setImmediate(t6);
  } : function(t6) {
    setTimeout(t6);
  };
  function s4(t6, e7, r5) {
    a3(e7);
    for (var n5 = 0; n5 < e7.keys.length; n5++)
      t6.clear(e7.keys[n5]), e7.callbacks[n5].reject(r5);
  }
  function a3(t6) {
    if (t6.cacheHits)
      for (var e7 = 0; e7 < t6.cacheHits.length; e7++)
        t6.cacheHits[e7]();
  }
  function o4(t6) {
    return "object" == typeof t6 && null !== t6 && "number" == typeof t6.length && (0 === t6.length || t6.length > 0 && Object.prototype.hasOwnProperty.call(t6, t6.length - 1));
  }
  e6.exports = n4;
} });
var d = h(f());
var g = { Uint8: 1, Uint16: 2, Uint32: 4, BigUint64: 8, Int8: 1, Int16: 2, Int32: 4, BigInt64: 8, Float32: 4, Float64: 8 };
var y = class {
  getOffset() {
    return this.offset;
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (!(this.offset + t5 <= e6))
      throw Error("Reading out of bounds");
  }
  readUint8() {
    let t5 = g.Uint8;
    this.ensureLength(t5);
    let e6 = this.view.getUint8(this.offset);
    return this.offset += t5, e6;
  }
  readUint16() {
    let t5 = g.Uint16;
    this.ensureLength(t5);
    let e6 = this.view.getUint16(this.offset);
    return this.offset += t5, e6;
  }
  readUint32() {
    let t5 = g.Uint32;
    this.ensureLength(t5);
    let e6 = this.view.getUint32(this.offset);
    return this.offset += t5, e6;
  }
  readUint64() {
    let t5 = this.readBigUint64();
    return Number(t5);
  }
  readBigUint64() {
    let t5 = g.BigUint64;
    this.ensureLength(t5);
    let e6 = this.view.getBigUint64(this.offset);
    return this.offset += t5, e6;
  }
  readInt8() {
    let t5 = g.Int8;
    this.ensureLength(t5);
    let e6 = this.view.getInt8(this.offset);
    return this.offset += t5, e6;
  }
  readInt16() {
    let t5 = g.Int16;
    this.ensureLength(t5);
    let e6 = this.view.getInt16(this.offset);
    return this.offset += t5, e6;
  }
  readInt32() {
    let t5 = g.Int32;
    this.ensureLength(t5);
    let e6 = this.view.getInt32(this.offset);
    return this.offset += t5, e6;
  }
  readInt64() {
    let t5 = this.readBigInt64();
    return Number(t5);
  }
  readBigInt64() {
    let t5 = g.BigInt64;
    this.ensureLength(t5);
    let e6 = this.view.getBigInt64(this.offset);
    return this.offset += t5, e6;
  }
  readFloat32() {
    let t5 = g.Float32;
    this.ensureLength(t5);
    let e6 = this.view.getFloat32(this.offset);
    return this.offset += t5, e6;
  }
  readFloat64() {
    let t5 = g.Float64;
    this.ensureLength(t5);
    let e6 = this.view.getFloat64(this.offset);
    return this.offset += t5, e6;
  }
  readBytes(t5) {
    let e6 = this.offset, r4 = e6 + t5, n4 = this.bytes.subarray(e6, r4);
    return this.offset = r4, n4;
  }
  readString() {
    let t5 = this.readUint32(), e6 = this.readBytes(t5);
    return this.decoder.decode(e6);
  }
  readJson() {
    let t5 = this.readString();
    return JSON.parse(t5);
  }
  constructor(t5) {
    this.bytes = t5, c(this, "offset", 0), c(this, "view"), c(this, "decoder", new TextDecoder()), this.view = p(this.bytes);
  }
};
function p(t5) {
  return new DataView(t5.buffer, t5.byteOffset, t5.byteLength);
}
var m = "undefined" != typeof window;
var w = m && "function" == typeof window.requestIdleCallback;
function I(t5, ...e6) {
  if (!t5)
    throw Error("Assertion Error" + (e6.length > 0 ? ": " + e6.join(" ") : ""));
}
function b(t5) {
  throw Error(`Unexpected value: ${t5}`);
}
var U = 1024;
var S = 1.5;
var k = (t5) => 2 ** t5 - 1;
var L = (t5) => -(2 ** (t5 - 1));
var B = (t5) => 2 ** (t5 - 1) - 1;
var E = { Uint8: 0, Uint16: 0, Uint32: 0, Uint64: 0, BigUint64: 0, Int8: L(8), Int16: L(16), Int32: L(32), Int64: Number.MIN_SAFE_INTEGER, BigInt64: -(BigInt(2) ** BigInt(63)) };
var M = { Uint8: k(8), Uint16: k(16), Uint32: k(32), Uint64: Number.MAX_SAFE_INTEGER, BigUint64: BigInt(2) ** BigInt(64) - BigInt(1), Int8: B(8), Int16: B(16), Int32: B(32), Int64: Number.MAX_SAFE_INTEGER, BigInt64: BigInt(2) ** BigInt(63) - BigInt(1) };
function T(t5, e6, r4, n4) {
  I(t5 >= e6, t5, "outside lower bound for", n4), I(t5 <= r4, t5, "outside upper bound for", n4);
}
var F = class {
  getOffset() {
    return this.offset;
  }
  slice(t5 = 0, e6 = this.offset) {
    return this.bytes.slice(t5, e6);
  }
  subarray(t5 = 0, e6 = this.offset) {
    return this.bytes.subarray(t5, e6);
  }
  ensureLength(t5) {
    let e6 = this.bytes.length;
    if (this.offset + t5 <= e6)
      return;
    let r4 = new Uint8Array(Math.ceil(e6 * S) + t5);
    r4.set(this.bytes), this.bytes = r4, this.view = p(r4);
  }
  writeUint8(t5) {
    T(t5, E.Uint8, M.Uint8, "Uint8");
    let e6 = g.Uint8;
    this.ensureLength(e6), this.view.setUint8(this.offset, t5), this.offset += e6;
  }
  writeUint16(t5) {
    T(t5, E.Uint16, M.Uint16, "Uint16");
    let e6 = g.Uint16;
    this.ensureLength(e6), this.view.setUint16(this.offset, t5), this.offset += e6;
  }
  writeUint32(t5) {
    T(t5, E.Uint32, M.Uint32, "Uint32");
    let e6 = g.Uint32;
    this.ensureLength(e6), this.view.setUint32(this.offset, t5), this.offset += e6;
  }
  writeUint64(t5) {
    T(t5, E.Uint64, M.Uint64, "Uint64");
    let e6 = BigInt(t5);
    this.writeBigUint64(e6);
  }
  writeBigUint64(t5) {
    T(t5, E.BigUint64, M.BigUint64, "BigUint64");
    let e6 = g.BigUint64;
    this.ensureLength(e6), this.view.setBigUint64(this.offset, t5), this.offset += e6;
  }
  writeInt8(t5) {
    T(t5, E.Int8, M.Int8, "Int8");
    let e6 = g.Int8;
    this.ensureLength(e6), this.view.setInt8(this.offset, t5), this.offset += e6;
  }
  writeInt16(t5) {
    T(t5, E.Int16, M.Int16, "Int16");
    let e6 = g.Int16;
    this.ensureLength(e6), this.view.setInt16(this.offset, t5), this.offset += e6;
  }
  writeInt32(t5) {
    T(t5, E.Int32, M.Int32, "Int32");
    let e6 = g.Int32;
    this.ensureLength(e6), this.view.setInt32(this.offset, t5), this.offset += e6;
  }
  writeInt64(t5) {
    T(t5, E.Int64, M.Int64, "Int64");
    let e6 = BigInt(t5);
    this.writeBigInt64(e6);
  }
  writeBigInt64(t5) {
    T(t5, E.BigInt64, M.BigInt64, "BigInt64");
    let e6 = g.BigInt64;
    this.ensureLength(e6), this.view.setBigInt64(this.offset, t5), this.offset += e6;
  }
  writeFloat32(t5) {
    let e6 = g.Float32;
    this.ensureLength(e6), this.view.setFloat32(this.offset, t5), this.offset += e6;
  }
  writeFloat64(t5) {
    let e6 = g.Float64;
    this.ensureLength(e6), this.view.setFloat64(this.offset, t5), this.offset += e6;
  }
  writeBytes(t5) {
    let e6 = t5.length;
    this.ensureLength(e6), this.bytes.set(t5, this.offset), this.offset += e6;
  }
  encodeString(t5) {
    let e6 = this.encodedStrings.get(t5);
    if (e6)
      return e6;
    let r4 = this.encoder.encode(t5);
    return this.encodedStrings.set(t5, r4), r4;
  }
  writeString(t5) {
    let e6 = this.encodeString(t5), r4 = e6.length;
    this.writeUint32(r4), this.writeBytes(e6);
  }
  writeJson(t5) {
    let e6 = JSON.stringify(t5);
    this.writeString(e6);
  }
  constructor() {
    c(this, "offset", 0), c(this, "bytes", new Uint8Array(U)), c(this, "view", p(this.bytes)), c(this, "encoder", new TextEncoder()), c(this, "encodedStrings", /* @__PURE__ */ new Map());
  }
};
function x(t5) {
  return "string" == typeof t5;
}
function N(t5) {
  return Number.isFinite(t5);
}
function A(t5) {
  return null === t5;
}
var O = class t2 {
  static fromString(e6) {
    let [r4, n4, i3] = e6.split("/").map(Number);
    return I(N(r4), "Invalid chunkId"), I(N(n4), "Invalid offset"), I(N(i3), "Invalid length"), new t2(r4, n4, i3);
  }
  toString() {
    return `${this.chunkId}/${this.offset}/${this.length}`;
  }
  static read(e6) {
    let r4 = e6.readUint16(), n4 = e6.readUint32(), i3 = e6.readUint32();
    return new t2(r4, n4, i3);
  }
  write(t5) {
    t5.writeUint16(this.chunkId), t5.writeUint32(this.offset), t5.writeUint32(this.length);
  }
  compare(t5) {
    return this.chunkId < t5.chunkId ? -1 : this.chunkId > t5.chunkId ? 1 : this.offset < t5.offset ? -1 : this.offset > t5.offset ? 1 : (I(this.length === t5.length), 0);
  }
  constructor(t5, e6, r4) {
    this.chunkId = t5, this.offset = e6, this.length = r4;
  }
};
function R(t5) {
  if (A(t5))
    return 0;
  switch (t5.type) {
    case P.Array:
      return 1;
    case P.Boolean:
      return 2;
    case P.Color:
      return 3;
    case P.Date:
      return 4;
    case P.Enum:
      return 5;
    case P.File:
      return 6;
    case P.ResponsiveImage:
      return 10;
    case P.Link:
      return 7;
    case P.Number:
      return 8;
    case P.Object:
      return 9;
    case P.RichText:
      return 11;
    case P.String:
      return 12;
    case P.VectorSetItem:
      return 13;
    default:
      b(t5);
  }
}
function q(e6) {
  let r4 = e6.readUint16(), n4 = [];
  for (let i3 = 0; i3 < r4; i3++) {
    let r5 = t.read(e6);
    n4.push(r5);
  }
  return { type: P.Array, value: n4 };
}
function _(e6, r4) {
  for (let n4 of (e6.writeUint16(r4.value.length), r4.value))
    t.write(e6, n4);
}
function D(e6, r4, n4) {
  let i3 = e6.value.length, s4 = r4.value.length;
  if (i3 < s4)
    return -1;
  if (i3 > s4)
    return 1;
  for (let s5 = 0; s5 < i3; s5++) {
    let i4 = e6.value[s5], a3 = r4.value[s5], o4 = t.compare(i4, a3, n4);
    if (0 !== o4)
      return o4;
  }
  return 0;
}
function j(t5) {
  return { type: P.Boolean, value: 0 !== t5.readUint8() };
}
function C(t5, e6) {
  t5.writeUint8(e6.value ? 1 : 0);
}
function J(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function V(t5) {
  return { type: P.Color, value: t5.readString() };
}
function W(t5, e6) {
  t5.writeString(e6.value);
}
function $(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function z(t5) {
  let e6 = t5.readInt64(), r4 = new Date(e6);
  return { type: P.Date, value: r4.toISOString() };
}
function G(t5, e6) {
  let r4 = new Date(e6.value), n4 = r4.getTime();
  t5.writeInt64(n4);
}
function K(t5, e6) {
  let r4 = new Date(t5.value), n4 = new Date(e6.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function H(t5) {
  return { type: P.Enum, value: t5.readString() };
}
function X(t5, e6) {
  t5.writeString(e6.value);
}
function Q(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function Y(t5) {
  return { type: P.File, value: t5.readString() };
}
function Z(t5, e6) {
  t5.writeString(e6.value);
}
function tt(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function te(t5) {
  return { type: P.Link, value: t5.readJson() };
}
function tr(t5, e6) {
  t5.writeJson(e6.value);
}
function tn(t5, e6) {
  let r4 = JSON.stringify(t5.value), n4 = JSON.stringify(e6.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function ti(t5) {
  return { type: P.Number, value: t5.readFloat64() };
}
function ts(t5, e6) {
  t5.writeFloat64(e6.value);
}
function ta(t5, e6) {
  return t5.value < e6.value ? -1 : t5.value > e6.value ? 1 : 0;
}
function to(e6) {
  let r4 = e6.readUint16(), n4 = {};
  for (let i3 = 0; i3 < r4; i3++) {
    let r5 = e6.readString();
    n4[r5] = t.read(e6);
  }
  return { type: P.Object, value: n4 };
}
function tu(e6, r4) {
  let n4 = Object.entries(r4.value);
  for (let [r5, i3] of (e6.writeUint16(n4.length), n4))
    e6.writeString(r5), t.write(e6, i3);
}
function tl(e6, r4, n4) {
  let i3 = Object.keys(e6.value).sort(), s4 = Object.keys(r4.value).sort();
  if (i3.length < s4.length)
    return -1;
  if (i3.length > s4.length)
    return 1;
  for (let a3 = 0; a3 < i3.length; a3++) {
    let o4 = i3[a3], u4 = s4[a3];
    if (o4 < u4)
      return -1;
    if (o4 > u4)
      return 1;
    let l3 = e6.value[o4] ?? null, h3 = r4.value[u4] ?? null, c4 = t.compare(l3, h3, n4);
    if (0 !== c4)
      return c4;
  }
  return 0;
}
function th(t5) {
  return { type: P.ResponsiveImage, value: t5.readJson() };
}
function tc(t5, e6) {
  t5.writeJson(e6.value);
}
function tf(t5, e6) {
  let r4 = JSON.stringify(t5.value), n4 = JSON.stringify(e6.value);
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
function td(t5) {
  let e6 = t5.readInt8();
  if (0 === e6)
    return { type: P.RichText, value: t5.readUint32() };
  if (1 === e6)
    return { type: P.RichText, value: t5.readString() };
  throw Error("Invalid rich text pointer");
}
function tg(t5, e6) {
  if (N(e6.value)) {
    t5.writeInt8(0), t5.writeUint32(e6.value);
    return;
  }
  if (x(e6.value)) {
    t5.writeInt8(1), t5.writeString(e6.value);
    return;
  }
  throw Error("Invalid rich text pointer");
}
function ty(t5, e6) {
  let r4 = t5.value, n4 = e6.value;
  if (N(r4) && N(n4) || x(r4) && x(n4))
    return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
  throw Error("Invalid rich text pointer");
}
function tp(t5) {
  return { type: P.String, value: t5.readString() };
}
function tv(t5, e6) {
  t5.writeString(e6.value);
}
function tm(t5, e6, r4) {
  let n4 = t5.value, i3 = e6.value;
  return (0 === r4.type && (n4 = t5.value.toLowerCase(), i3 = e6.value.toLowerCase()), n4 < i3) ? -1 : n4 > i3 ? 1 : 0;
}
function tw(t5) {
  return { type: P.VectorSetItem, value: t5.readUint32() };
}
function tI(t5, e6) {
  t5.writeUint32(e6.value);
}
function tb(t5, e6) {
  let r4 = t5.value, n4 = e6.value;
  return r4 < n4 ? -1 : r4 > n4 ? 1 : 0;
}
((t5) => {
  t5.read = function(t6) {
    let e6 = t6.readUint8();
    switch (e6) {
      case 0:
        return null;
      case 1:
        return q(t6);
      case 2:
        return j(t6);
      case 3:
        return V(t6);
      case 4:
        return z(t6);
      case 5:
        return H(t6);
      case 6:
        return Y(t6);
      case 7:
        return te(t6);
      case 8:
        return ti(t6);
      case 9:
        return to(t6);
      case 10:
        return th(t6);
      case 11:
        return td(t6);
      case 12:
        return tp(t6);
      case 13:
        return tw(t6);
      default:
        b(e6);
    }
  }, t5.write = function(t6, e6) {
    let r4 = R(e6);
    if (t6.writeUint8(r4), !A(e6))
      switch (e6.type) {
        case P.Array:
          return _(t6, e6);
        case P.Boolean:
          return C(t6, e6);
        case P.Color:
          return W(t6, e6);
        case P.Date:
          return G(t6, e6);
        case P.Enum:
          return X(t6, e6);
        case P.File:
          return Z(t6, e6);
        case P.Link:
          return tr(t6, e6);
        case P.Number:
          return ts(t6, e6);
        case P.Object:
          return tu(t6, e6);
        case P.ResponsiveImage:
          return tc(t6, e6);
        case P.RichText:
          return tg(t6, e6);
        case P.VectorSetItem:
          return tI(t6, e6);
        case P.String:
          return tv(t6, e6);
        default:
          b(e6);
      }
  }, t5.compare = function(t6, e6, r4) {
    let n4 = R(t6), i3 = R(e6);
    if (n4 < i3)
      return -1;
    if (n4 > i3)
      return 1;
    if (A(t6) || A(e6))
      return 0;
    switch (t6.type) {
      case P.Array:
        return I(e6.type === P.Array), D(t6, e6, r4);
      case P.Boolean:
        return I(e6.type === P.Boolean), J(t6, e6);
      case P.Color:
        return I(e6.type === P.Color), $(t6, e6);
      case P.Date:
        return I(e6.type === P.Date), K(t6, e6);
      case P.Enum:
        return I(e6.type === P.Enum), Q(t6, e6);
      case P.File:
        return I(e6.type === P.File), tt(t6, e6);
      case P.Link:
        return I(e6.type === P.Link), tn(t6, e6);
      case P.Number:
        return I(e6.type === P.Number), ta(t6, e6);
      case P.Object:
        return I(e6.type === P.Object), tl(t6, e6, r4);
      case P.ResponsiveImage:
        return I(e6.type === P.ResponsiveImage), tf(t6, e6);
      case P.RichText:
        return I(e6.type === P.RichText), ty(t6, e6);
      case P.VectorSetItem:
        return I(e6.type === P.VectorSetItem), tb(t6, e6);
      case P.String:
        return I(e6.type === P.String), tm(t6, e6, r4);
      default:
        b(t6);
    }
  };
})(t || (t = {}));
var tU = class e2 {
  sortEntries() {
    this.entries.sort((e6, r4) => {
      for (let n4 = 0; n4 < this.fieldNames.length; n4++) {
        let i3 = e6.values[n4], s4 = r4.values[n4], a3 = t.compare(i3, s4, this.options.collation);
        if (0 !== a3)
          return a3;
      }
      return e6.pointer.compare(r4.pointer);
    });
  }
  static deserialize(r4) {
    let n4 = new y(r4), i3 = n4.readJson(), s4 = n4.readUint8(), a3 = [];
    for (let t5 = 0; t5 < s4; t5++) {
      let t6 = n4.readString();
      a3.push(t6);
    }
    let o4 = new e2(a3, { collation: i3 }), u4 = n4.readUint32();
    for (let e6 = 0; e6 < u4; e6++) {
      let e7 = [];
      for (let r6 = 0; r6 < s4; r6++) {
        let r7 = t.read(n4);
        e7.push(r7);
      }
      let r5 = O.read(n4);
      o4.entries.push({ values: e7, pointer: r5 });
    }
    return o4;
  }
  serialize() {
    let e6 = new F();
    for (let t5 of (e6.writeJson(this.options.collation), e6.writeUint8(this.fieldNames.length), this.fieldNames))
      e6.writeString(t5);
    for (let r4 of (this.sortEntries(), e6.writeUint32(this.entries.length), this.entries)) {
      let { values: n4, pointer: i3 } = r4;
      for (let r5 of n4)
        t.write(e6, r5);
      i3.write(e6);
    }
    return e6.subarray();
  }
  addItem(t5, e6) {
    let r4 = this.fieldNames.map((e7) => t5.getField(e7) ?? null);
    this.entries.push({ values: r4, pointer: e6 });
  }
  constructor(t5, e6) {
    this.fieldNames = t5, this.options = e6, c(this, "entries", []);
  }
};
var tS = 3;
var tk = 250;
var tL = [
  408,
  // Request Timeout
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
];
var tB = async (t5, e6) => {
  let r4 = 0;
  for (; ; ) {
    try {
      let n4 = await fetch(t5, e6);
      if (!tL.includes(n4.status) || ++r4 > tS)
        return n4;
    } catch (t6) {
      if (e6?.signal?.aborted || ++r4 > tS)
        throw t6;
    }
    await tE(r4);
  }
};
async function tE(t5) {
  let e6 = Math.floor(tk * (Math.random() + 1) * 2 ** (t5 - 1));
  await new Promise((t6) => {
    setTimeout(t6, e6);
  });
}
async function tM(t5, e6) {
  let r4 = tx(e6), n4 = [], i3 = 0;
  for (let t6 of r4)
    n4.push(`${t6.from}-${t6.to - 1}`), i3 += t6.to - t6.from;
  let s4 = new URL(t5), a3 = n4.join(",");
  s4.searchParams.set("range", a3);
  let o4 = await tB(s4);
  if (200 !== o4.status)
    throw Error(`Request failed: ${o4.status} ${o4.statusText}`);
  let u4 = await o4.arrayBuffer(), l3 = new Uint8Array(u4);
  if (l3.length !== i3)
    throw Error("Request failed: Unexpected response length");
  let h3 = new tT(), c4 = 0;
  for (let t6 of r4) {
    let e7 = t6.to - t6.from, r5 = c4 + e7, n5 = l3.subarray(c4, r5);
    h3.write(t6.from, n5), c4 = r5;
  }
  return e6.map((t6) => h3.read(t6.from, t6.to - t6.from));
}
var tT = class {
  read(t5, e6) {
    for (let r4 of this.chunks) {
      if (t5 < r4.start)
        break;
      if (t5 > r4.end)
        continue;
      if (t5 + e6 > r4.end)
        break;
      let n4 = t5 - r4.start, i3 = n4 + e6;
      return r4.data.slice(n4, i3);
    }
    throw Error("Missing data");
  }
  write(t5, e6) {
    let r4 = t5, n4 = r4 + e6.length, i3 = 0, s4 = this.chunks.length;
    for (; i3 < s4; i3++) {
      let t6 = this.chunks[i3];
      if (I(t6, "Missing chunk"), !(r4 > t6.end)) {
        if (r4 > t6.start) {
          let n5 = r4 - t6.start, i4 = t6.data.subarray(0, n5);
          e6 = tF(i4, e6), r4 = t6.start;
        }
        break;
      }
    }
    for (; s4 > i3; s4--) {
      let t6 = this.chunks[s4 - 1];
      if (I(t6, "Missing chunk"), !(n4 < t6.start)) {
        if (n4 < t6.end) {
          let r5 = n4 - t6.start, i4 = t6.data.subarray(r5);
          e6 = tF(e6, i4), n4 = t6.end;
        }
        break;
      }
    }
    let a3 = { start: r4, end: n4, data: e6 }, o4 = s4 - i3;
    this.chunks.splice(i3, o4, a3);
  }
  constructor() {
    c(this, "chunks", []);
  }
};
function tF(t5, e6) {
  let r4 = t5.length + e6.length, n4 = new Uint8Array(r4);
  return n4.set(t5, 0), n4.set(e6, t5.length), n4;
}
function tx(t5) {
  I(t5.length > 0, "Must have at least one range");
  let e6 = [...t5].sort((t6, e7) => t6.from - e7.from), r4 = [];
  for (let t6 of e6) {
    let e7 = r4.length - 1, n4 = r4[e7];
    n4 && t6.from <= n4.to ? r4[e7] = { from: n4.from, to: Math.max(n4.to, t6.to) } : r4.push(t6);
  }
  return r4;
}
var tN = class {
  async loadModel() {
    let [t5] = await tM(this.options.url, [this.options.range]);
    return I(t5, "Failed to load model"), tU.deserialize(t5);
  }
  async getModel() {
    return this.modelPromise ?? (this.modelPromise = this.loadModel()), this.model ?? (this.model = await this.modelPromise), this.model;
  }
  async lookupItems(t5) {
    I(t5.length === this.fields.length, "Invalid query length");
    let e6 = await this.getModel(), r4 = t5.reduce((t6, e7, r5) => t6.flatMap((t7) => {
      switch (e7.type) {
        case "All":
          return [t7];
        case "Equals":
          return this.queryEquals(t7, e7, r5);
        case "NotEquals":
          return this.queryNotEquals(t7, e7, r5);
        case "LessThan":
          return this.queryLessThan(t7, e7, r5);
        case "GreaterThan":
          return this.queryGreaterThan(t7, e7, r5);
        case "Contains":
          return this.queryContains(t7, e7, r5);
        case "StartsWith":
          return this.queryStartsWith(t7, e7, r5);
        case "EndsWith":
          return this.queryEndsWith(t7, e7, r5);
        default:
          b(e7);
      }
    }), [e6.entries]), n4 = [];
    for (let t6 of r4)
      for (let e7 of t6) {
        let t7 = {};
        for (let r5 = 0; r5 < this.options.fieldNames.length; r5++) {
          let n5 = this.options.fieldNames[r5], i3 = e7.values[r5];
          t7[n5] = i3;
        }
        n4.push({ pointer: e7.pointer.toString(), data: t7 });
      }
    return n4;
  }
  queryEquals(t5, e6, r4) {
    let n4 = this.getLeftMost(t5, r4, e6.value), i3 = this.getRightMost(t5, r4, e6.value), s4 = t5.slice(n4, i3 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryNotEquals(t5, e6, r4) {
    let n4 = this.getLeftMost(t5, r4, e6.value), i3 = this.getRightMost(t5, r4, e6.value), s4 = [], a3 = t5.slice(0, n4);
    a3.length > 0 && s4.push(a3);
    let o4 = t5.slice(i3 + 1);
    return o4.length > 0 && s4.push(o4), s4;
  }
  queryLessThan(t5, e6, r4) {
    let n4 = this.getRightMost(t5, r4, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getRightMost(t5, r4, e6.value), i4 = t5.slice(0, n5 + 1);
      return i4.length > 0 ? [i4] : [];
    }
    let i3 = this.getLeftMost(t5, r4, e6.value), s4 = t5.slice(0, i3);
    return s4.length > 0 ? [s4] : [];
  }
  queryGreaterThan(t5, e6, r4) {
    let n4 = this.getRightMost(t5, r4, null);
    if (t5 = t5.slice(n4 + 1), e6.inclusive) {
      let n5 = this.getLeftMost(t5, r4, e6.value), i4 = t5.slice(n5);
      return i4.length > 0 ? [i4] : [];
    }
    let i3 = this.getRightMost(t5, r4, e6.value), s4 = t5.slice(i3 + 1);
    return s4.length > 0 ? [s4] : [];
  }
  queryContains(t5, e6, r4) {
    return this.findItems(t5, r4, (t6) => {
      if (t6?.type !== v.String || e6.value?.type !== v.String)
        return false;
      let r5 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), n4 = n4.toLowerCase()), r5.includes(n4);
    });
  }
  queryStartsWith(t5, e6, r4) {
    return this.findItems(t5, r4, (t6) => {
      if (t6?.type !== v.String || e6.value?.type !== v.String)
        return false;
      let r5 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), n4 = n4.toLowerCase()), r5.startsWith(n4);
    });
  }
  queryEndsWith(t5, e6, r4) {
    return this.findItems(t5, r4, (t6) => {
      if (t6?.type !== v.String || e6.value?.type !== v.String)
        return false;
      let r5 = t6.value, n4 = e6.value.value;
      return 0 === this.collation.type && (r5 = r5.toLowerCase(), n4 = n4.toLowerCase()), r5.endsWith(n4);
    });
  }
  /**
  * Returns the index of the left most entry that is equal to the target.
  *
  * ```text
  *   Left most
  *       ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the left most entry that is equal to the target.
  */
  getLeftMost(e6, r4, n4) {
    let i3 = 0, s4 = e6.length;
    for (; i3 < s4; ) {
      let a3 = i3 + s4 >> 1, o4 = e6[a3], u4 = o4.values[r4];
      0 > t.compare(u4, n4, this.collation) ? i3 = a3 + 1 : s4 = a3;
    }
    return i3;
  }
  /**
  * Returns the index of the right most entry that is equal to the target.
  *
  * ```text
  *              Right most
  *                   ↓
  * ┌───┬───┬───┬───┬───┬───┐
  * │ 1 │ 2 │ 2 │ 2 │ 2 │ 3 │
  * └───┴───┴───┴───┴───┴───┘
  * ```
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param target The target value to search for.
  * @returns The index of the right most entry that is equal to the target.
  */
  getRightMost(e6, r4, n4) {
    let i3 = 0, s4 = e6.length;
    for (; i3 < s4; ) {
      let a3 = i3 + s4 >> 1, o4 = e6[a3], u4 = o4.values[r4];
      t.compare(u4, n4, this.collation) > 0 ? s4 = a3 : i3 = a3 + 1;
    }
    return s4 - 1;
  }
  /**
  * Finds all items that are matching the predicate and groups adjacent items together.
  *
  * @param entries The entries array to search in.
  * @param position The position of the value in the entry.
  * @param predicate The predicate to match the values against.
  * @returns An array of chunks that match the predicate.
  */
  findItems(t5, e6, r4) {
    let n4 = [], i3 = 0;
    for (let s4 = 0; s4 < t5.length; s4++) {
      let a3 = t5[s4], o4 = a3.values[e6], u4 = r4(o4);
      if (!u4) {
        if (i3 < s4) {
          let e7 = t5.slice(i3, s4);
          n4.push(e7);
        }
        i3 = s4 + 1;
      }
    }
    if (i3 < t5.length) {
      let e7 = t5.slice(i3);
      n4.push(e7);
    }
    return n4;
  }
  constructor(t5) {
    this.options = t5, c(this, "schema"), c(this, "fields"), c(this, "supportedLookupTypes", [
      "All",
      "Equals",
      "NotEquals",
      "LessThan",
      "GreaterThan",
      "Contains",
      "StartsWith",
      "EndsWith"
      /* EndsWith */
    ]), c(this, "modelPromise"), c(this, "model"), c(this, "collation");
    let e6 = {}, r4 = [];
    for (let t6 of this.options.fieldNames) {
      let n4 = this.options.collectionSchema[t6];
      I(n4, "Missing definition for field", t6), e6[t6] = n4, r4.push({ type: "Identifier", name: t6 });
    }
    this.schema = e6, this.fields = r4, this.collation = this.options.collation;
  }
};
var tA = class e3 {
  static read(r4) {
    let n4 = new e3(), i3 = r4.readUint16();
    for (let e6 = 0; e6 < i3; e6++) {
      let e7 = r4.readString(), i4 = t.read(r4);
      n4.setField(e7, i4);
    }
    return n4;
  }
  write(e6) {
    for (let [r4, n4] of (e6.writeUint16(this.fields.size), this.fields))
      e6.writeString(r4), t.write(e6, n4);
  }
  getData() {
    let t5 = {};
    for (let [e6, r4] of this.fields)
      t5[e6] = r4;
    return t5;
  }
  setField(t5, e6) {
    this.fields.set(t5, e6);
  }
  getField(t5) {
    return this.fields.get(t5);
  }
  constructor() {
    c(this, "fields", /* @__PURE__ */ new Map());
  }
};
var tO = class {
  scanItems() {
    return this.itemsPromise ?? (this.itemsPromise = tB(this.url).then(async (t5) => {
      if (!t5.ok)
        throw Error(`Request failed: ${t5.status} ${t5.statusText}`);
      let e6 = await t5.arrayBuffer(), r4 = new Uint8Array(e6), n4 = new y(r4), i3 = [], s4 = n4.readUint32();
      for (let t6 = 0; t6 < s4; t6++) {
        let t7 = n4.getOffset(), e7 = tA.read(n4), r5 = n4.getOffset() - t7, s5 = new O(this.id, t7, r5), a3 = s5.toString(), o4 = { pointer: a3, data: e7.getData() };
        this.itemLoader.prime(a3, o4), i3.push(o4);
      }
      return i3;
    })), this.itemsPromise;
  }
  resolveItem(t5) {
    return this.itemLoader.load(t5);
  }
  constructor(t5, e6) {
    this.id = t5, this.url = e6, c(this, "itemsPromise"), c(this, "itemLoader", new d.default(async (t6) => {
      let e7 = t6.map((t7) => {
        let e8 = O.fromString(t7);
        return { from: e8.offset, to: e8.offset + e8.length };
      }), r4 = await tM(this.url, e7);
      return r4.map((e8, r5) => {
        let n4 = new y(e8), i3 = tA.read(n4), s4 = t6[r5];
        return I(s4, "Missing pointer"), { pointer: s4, data: i3.getData() };
      });
    }));
  }
};
var tP = class {
  async scanItems() {
    let t5 = await Promise.all(this.chunks.map(async (t6) => t6.scanItems()));
    return t5.flat();
  }
  async resolveItems(t5) {
    return Promise.all(t5.map((t6) => {
      let e6 = O.fromString(t6), r4 = this.chunks[e6.chunkId];
      return I(r4, "Missing chunk"), r4.resolveItem(t6);
    }));
  }
  compareItems(t5, e6) {
    let r4 = O.fromString(t5.pointer), n4 = O.fromString(e6.pointer);
    return r4.compare(n4);
  }
  compareValues(e6, r4, n4) {
    return t.compare(e6, r4, n4);
  }
  constructor(t5) {
    this.options = t5, c(this, "schema"), c(this, "indexes"), c(this, "resolveRichText"), c(this, "resolveVectorSetItem"), c(this, "chunks"), this.chunks = this.options.chunks.map((t6, e6) => new tO(e6, t6)), this.schema = t5.schema, this.indexes = t5.indexes, this.resolveRichText = t5.resolveRichText, this.resolveVectorSetItem = t5.resolveVectorSetItem;
  }
};

// http-url:https://framerusercontent.com/modules/hatmDPYE3RL4HaIXkH7v/iZSLgftQkVD8cDnr1Su9/DllZ9gEH7-1.js
import { jsx as e4 } from "react/jsx-runtime";
import { ComponentPresetsConsumer as r2, Link as t3, motion as n2 } from "./_framer-runtime.js";
import { Fragment as o2, createElement as a2 } from "react";
function i2(e6, ...r4) {
  if (!e6)
    throw Error("Assertion Error" + (r4.length > 0 ? ": " + r4.join(" ") : ""));
}
var u2;
var s2 = ((u2 = s2 || {})[u2.Fragment = 1] = "Fragment", u2[u2.Link = 2] = "Link", u2[u2.Module = 3] = "Module", u2[u2.Tag = 4] = "Tag", u2[u2.Text = 5] = "Text", u2);
function c2(u4) {
  let s4 = /* @__PURE__ */ new Map();
  return (c4) => {
    let l3 = s4.get(c4);
    if (l3)
      return l3;
    let m2 = JSON.parse(c4), f3 = function s5(c5) {
      switch (c5[0]) {
        case 1: {
          let [, ...e6] = c5, r4 = e6.map(s5);
          return /* @__PURE__ */ a2(o2, void 0, ...r4);
        }
        case 2: {
          let [, e6, ...r4] = c5, n4 = r4.map(s5);
          return /* @__PURE__ */ a2(t3, e6, ...n4);
        }
        case 3: {
          let [, t5, n4] = c5, o4 = u4[t5];
          return i2(o4, "Module not found"), /* @__PURE__ */ e4(r2, { componentIdentifier: t5, children: (r4) => /* @__PURE__ */ e4(o4, { ...r4, ...n4 }) });
        }
        case 4: {
          let [, e6, r4, ...t5] = c5, o4 = t5.map(s5);
          if ("a" === e6)
            return /* @__PURE__ */ a2(n2.a, r4, ...o4);
          return /* @__PURE__ */ a2(e6, r4, ...o4);
        }
        case 5: {
          let [, e6] = c5;
          return e6;
        }
      }
    }(m2);
    return s4.set(c4, f3), f3;
  };
}

// http-url:https://framerusercontent.com/modules/hatmDPYE3RL4HaIXkH7v/iZSLgftQkVD8cDnr1Su9/DllZ9gEH7.js
var o3 = { abs4IUpdh: { isNullable: true, type: l2.String }, ASQVyZZL7: { isNullable: true, type: l2.String }, AwEzuh0xW: { isNullable: true, type: l2.ResponsiveImage }, cFnwbKr4r: { isNullable: true, type: l2.String }, fB1R15T7f: { isNullable: true, type: l2.String }, fQAcaDiLx: { isNullable: true, type: l2.String }, HtGAH4iRe: { isNullable: true, type: l2.String }, HUNUPVQoi: { isNullable: true, type: l2.ResponsiveImage }, id: { isNullable: false, type: l2.String }, Kqpm6kUdf: { isNullable: true, type: l2.String }, KXEIv0apB: { isNullable: true, type: l2.String }, LmJ3ltF4J: { isNullable: true, type: l2.String }, LYKiPoQAx: { isNullable: true, type: l2.String }, nextItemId: { isNullable: true, type: l2.String }, oDOmPzxlk: { isNullable: true, type: l2.String }, OpPNyQyAq: { isNullable: true, type: l2.String }, pBTNyYOGT: { isNullable: true, type: l2.String }, previousItemId: { isNullable: true, type: l2.String }, qsgLRPDYm: { isNullable: true, type: l2.String }, ujF0gOCHY: { isNullable: true, type: l2.String }, VOmhGl5CG: { isNullable: true, type: l2.String }, XJOGW5HDN: { isNullable: true, type: l2.String } };
var n3 = ["id"];
var c3 = { type: 1 };
var u3 = ["previousItemId"];
var s3 = ["nextItemId"];
var f2 = ["id", "pBTNyYOGT"];
var d2 = ["pBTNyYOGT", "id"];
var p2 = ["HtGAH4iRe"];
var g2 = { type: 0 };
var y2 = ["ujF0gOCHY"];
var S2 = ["qsgLRPDYm"];
var h2 = ["pBTNyYOGT"];
var N2 = ["AwEzuh0xW"];
var w2 = ["ASQVyZZL7"];
var x2 = ["KXEIv0apB"];
var D2 = ["oDOmPzxlk"];
var H2 = ["abs4IUpdh"];
var L2 = ["VOmhGl5CG"];
var R2 = ["HUNUPVQoi"];
var U2 = ["fQAcaDiLx"];
var E2 = ["LYKiPoQAx"];
var Z2 = ["XJOGW5HDN"];
var I2 = ["LmJ3ltF4J"];
var b2 = ["cFnwbKr4r"];
var T2 = ["fB1R15T7f"];
var V2 = ["OpPNyQyAq"];
var O2 = ["Kqpm6kUdf"];
var A2 = [];
var B2 = (e6) => {
  let l3 = A2[e6];
  if (l3)
    return l3().then((e7) => e7.default);
};
var G2 = {};
var Y2 = c2(G2);
var v2 = new r3();
var P2 = new t4(v2);
var Q2 = { collectionByLocaleId: { default: new tP({ chunks: [new URL("./DllZ9gEH7-chunk-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/")], indexes: [new tN({ collation: c3, collectionSchema: o3, fieldNames: n3, range: { from: 0, to: 97 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: c3, collectionSchema: o3, fieldNames: u3, range: { from: 97, to: 193 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: c3, collectionSchema: o3, fieldNames: s3, range: { from: 193, to: 285 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: c3, collectionSchema: o3, fieldNames: f2, range: { from: 285, to: 439 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: c3, collectionSchema: o3, fieldNames: d2, range: { from: 439, to: 593 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: p2, range: { from: 593, to: 699 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: y2, range: { from: 699, to: 1003 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: S2, range: { from: 1003, to: 1086 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: h2, range: { from: 1086, to: 1192 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: N2, range: { from: 1192, to: 2868 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: w2, range: { from: 2868, to: 3017 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: x2, range: { from: 3017, to: 3127 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: D2, range: { from: 3127, to: 3253 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: H2, range: { from: 3253, to: 4561 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: L2, range: { from: 4561, to: 6115 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: R2, range: { from: 6115, to: 7800 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: U2, range: { from: 7800, to: 7898 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: E2, range: { from: 7898, to: 8035 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: Z2, range: { from: 8035, to: 8124 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: I2, range: { from: 8124, to: 8226 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: b2, range: { from: 8226, to: 8321 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: T2, range: { from: 8321, to: 8446 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: V2, range: { from: 8446, to: 9853 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") }), new tN({ collation: g2, collectionSchema: o3, fieldNames: O2, range: { from: 9853, to: 10923 }, url: new URL("./DllZ9gEH7-indexes-default-0.framercms", import.meta.url).href.replace("/modules/", "/cms/") })], resolveRichText: Y2, resolveVectorSetItem: B2, schema: o3 }) }, displayName: "Service-Single" };
var DllZ9gEH7_default = Q2;
e5(Q2, { HtGAH4iRe: { defaultValue: "", title: "Title", type: l2.String }, ujF0gOCHY: { defaultValue: "", title: "Short Description", type: l2.String }, qsgLRPDYm: { defaultValue: "", title: "Number", type: l2.String }, pBTNyYOGT: { title: "Slug", type: l2.String }, AwEzuh0xW: { title: "Hero Image", type: l2.ResponsiveImage }, ASQVyZZL7: { defaultValue: "", title: "Services", type: l2.String }, KXEIv0apB: { defaultValue: "", title: "Years", type: l2.String }, oDOmPzxlk: { defaultValue: "", title: "Heading1", type: l2.String }, abs4IUpdh: { defaultValue: "", displayTextArea: true, title: "Description1", type: l2.String }, VOmhGl5CG: { defaultValue: "", displayTextArea: true, title: "Description2", type: l2.String }, HUNUPVQoi: { title: "Banner Image", type: l2.ResponsiveImage }, fQAcaDiLx: { defaultValue: "", title: "Client Title", type: l2.String }, LYKiPoQAx: { defaultValue: "", title: "Client Content", type: l2.String }, XJOGW5HDN: { defaultValue: "", title: "Role Title", type: l2.String }, LmJ3ltF4J: { defaultValue: "", title: "Tag 1", type: l2.String }, cFnwbKr4r: { defaultValue: "", title: "Tag 2", type: l2.String }, fB1R15T7f: { defaultValue: "", title: "Heading2", type: l2.String }, OpPNyQyAq: { defaultValue: "", displayTextArea: true, title: "Description3", type: l2.String }, Kqpm6kUdf: { defaultValue: "", displayTextArea: true, title: "Description4", type: l2.String }, previousItemId: { dataIdentifier: "local-module:collection/DllZ9gEH7:default", title: "Previous", type: l2.CollectionReference }, nextItemId: { dataIdentifier: "local-module:collection/DllZ9gEH7:default", title: "Next", type: l2.CollectionReference } });

// http-url:https://framerusercontent.com/modules/oi3QffdU75fTDRX8NNJM/HaWpD3o1ycGDFKJmna4J/aw0OJkQ9o.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "./_framer-runtime.js";
import { LayoutGroup, motion, MotionConfigContext } from "./_framer-runtime.js";
import * as React from "react";
import { useRef } from "react";

// http-url:https://framerusercontent.com/modules/marOpnzx8ghN84r3kH4h/k3PQ3bVeyHxubJ8zlhyl/hejIswYZX.js
import { fontStore } from "./_framer-runtime.js";
fontStore.loadFonts(["FS;Poppins-medium", "FS;Poppins-bold", "FS;Poppins-bold italic", "FS;Poppins-medium italic"]);
var fonts = [{ explicitInter: true, fonts: [{ cssFamilyName: "Poppins", source: "fontshare", style: "normal", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2", weight: "500" }, { cssFamilyName: "Poppins", source: "fontshare", style: "normal", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2", weight: "700" }, { cssFamilyName: "Poppins", source: "fontshare", style: "italic", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2", weight: "700" }, { cssFamilyName: "Poppins", source: "fontshare", style: "italic", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/4HH4RITHYMRL7VREMN2WV2L6LQZKPRWE/ZWMGJ4LKTJ4NT5NKCHS5WLI6CRRRO2SE/OFRM3ATAEVJKZWGG6S4JN4P6SBPN2BLD.woff2", weight: "500" }] }];
var css = [`.framer-57Kkc .framer-styles-preset-1h3rjhh:not(.rich-text-wrapper), .framer-57Kkc .framer-styles-preset-1h3rjhh.rich-text-wrapper h6 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 22px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className = "framer-57Kkc";

// http-url:https://framerusercontent.com/modules/oi3QffdU75fTDRX8NNJM/HaWpD3o1ycGDFKJmna4J/aw0OJkQ9o.js
var enabledGestures = { o2Xn3Tu5z: { hover: true } };
var serializationHash = "framer-R8w1C";
var variantClassNames = { o2Xn3Tu5z: "framer-v-m9ps0b" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 350, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, image, link, newTab, title, width, ...props }) => {
  return { ...props, ftTcjg6OJ: link ?? props.ftTcjg6OJ, U4DH8mY2L: newTab ?? props.U4DH8mY2L, zpjrFTyjt: title ?? props.zpjrFTyjt ?? "Start Now", zy_h1gHvc: image ?? props.zy_h1gHvc ?? { alt: "chess image", pixelHeight: 44, pixelWidth: 44, src: "https://framerusercontent.com/images/kTDmZWy2WOfXHOzZEMXqzCDXvu0.svg?width=44&height=44" } };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const { style, className: className7, layoutId, variant, zy_h1gHvc, zpjrFTyjt, ftTcjg6OJ, U4DH8mY2L, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "o2Xn3Tu5z", enabledGestures, ref: refBinding, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [className];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: ftTcjg6OJ, motionChild: true, nodeId: "o2Xn3Tu5z", openInNewTab: U4DH8mY2L, scopeId: "aw0OJkQ9o", smoothScroll: true, children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-m9ps0b", className7, classNames)} framer-qag6zy`, "data-framer-name": "Primary", layoutDependency, layoutId: "o2Xn3Tu5z", ref: refBinding, style: { borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3, ...style }, ...addPropertyOverrides({ "o2Xn3Tu5z-hover": { "data-framer-name": void 0 } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsx(Image, { background: { alt: "chess image", fit: "fill", loading: getLoadingLazyAtYPosition((componentViewport?.y || 0) + (34 + ((componentViewport?.height || 112) - 68 - 44) / 2)), pixelHeight: 44, pixelWidth: 44, sizes: "44px", ...toResponsiveImage(zy_h1gHvc) }, className: "framer-1ms5taz", layoutDependency, layoutId: "sIiHSLSnj" }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1p9u2mm", "data-framer-name": "Content", layoutDependency, layoutId: "F5eMP_LfE", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h6, { className: "framer-styles-preset-1h3rjhh", "data-styles-preset": "hejIswYZX", children: "Start Now" }) }), className: "framer-hftcvq", fonts: ["Inter"], layoutDependency, layoutId: "LYxT4lcHX", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: zpjrFTyjt, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1vm1jwf", "data-framer-name": "Border", layoutDependency, layoutId: "XjlQFVrSx", style: { background: "linear-gradient(160deg, var(--token-4850efac-c98c-4162-bb80-9931c5e63cff, rgb(69, 69, 69)) 6%, var(--token-eda1288a-b7d8-4058-b6bc-ad0d4d7f1815, rgb(53, 53, 53)) 94%)", backgroundColor: "rgba(0, 0, 0, 0)", borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3 }, variants: { "o2Xn3Tu5z-hover": { background: "linear-gradient(160deg, var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1)) 0%, var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1)) 100%)", backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))" } } }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-im8crp", "data-framer-name": "BG", layoutDependency, layoutId: "HgE7KOlan", style: { backgroundColor: "var(--token-20f2ae48-e039-47f3-8042-3745ae324c8f, rgb(0, 0, 0))", borderBottomLeftRadius: 1e3, borderBottomRightRadius: 1e3, borderTopLeftRadius: 1e3, borderTopRightRadius: 1e3 } })] }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-R8w1C.framer-qag6zy, .framer-R8w1C .framer-qag6zy { display: block; }", ".framer-R8w1C.framer-m9ps0b { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 34px 50px 34px 50px; position: relative; text-decoration: none; width: 276px; will-change: var(--framer-will-change-override, transform); }", ".framer-R8w1C .framer-1ms5taz { flex: none; height: 44px; overflow: hidden; position: relative; width: 44px; z-index: 1; }", ".framer-R8w1C .framer-1p9u2mm { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; z-index: 1; }", ".framer-R8w1C .framer-hftcvq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-R8w1C .framer-1vm1jwf { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ".framer-R8w1C .framer-im8crp { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ...css];
var Frameraw0OJkQ9o = withCSS(Component, css2, "framer-R8w1C");
var aw0OJkQ9o_default = Frameraw0OJkQ9o;
Frameraw0OJkQ9o.displayName = "Secondary Button";
Frameraw0OJkQ9o.defaultProps = { height: 112, width: 276 };
addPropertyControls(Frameraw0OJkQ9o, { zy_h1gHvc: { __defaultAssetReference: "data:framer/asset-reference,kTDmZWy2WOfXHOzZEMXqzCDXvu0.svg?originalFilename=chess-knight-solid.svg&preferredSize=auto", __vekterDefault: { alt: "chess image", assetReference: "data:framer/asset-reference,kTDmZWy2WOfXHOzZEMXqzCDXvu0.svg?originalFilename=chess-knight-solid.svg&preferredSize=auto" }, title: "Image", type: ControlType.ResponsiveImage }, zpjrFTyjt: { defaultValue: "Start Now", displayTextArea: false, title: "Title", type: ControlType.String }, ftTcjg6OJ: { title: "Link", type: ControlType.Link }, U4DH8mY2L: { defaultValue: false, title: "New Tab", type: ControlType.Boolean } });
addFonts(Frameraw0OJkQ9o, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/1kTm9KjY5q0XUvm7vlza/TBUV1Il2ZZ9MZ2CfJBjo/itunLl513.js
import { jsx as _jsx2, jsxs as _jsxs2 } from "react/jsx-runtime";
import { addFonts as addFonts2, addPropertyControls as addPropertyControls2, ControlType as ControlType2, cx as cx2, getFontsFromSharedStyle as getFontsFromSharedStyle2, RichText as RichText2, SVG, useComponentViewport as useComponentViewport2, useLocaleInfo as useLocaleInfo2, useVariantState as useVariantState2, withCSS as withCSS2 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup2, motion as motion2, MotionConfigContext as MotionConfigContext2 } from "./_framer-runtime.js";
import * as React2 from "react";
import { useRef as useRef2 } from "react";

// http-url:https://framerusercontent.com/modules/lE6OFofMm9re87fmqEoY/w72v0HysqD2TlCICjGpU/a5jPDjSIx.js
import { fontStore as fontStore2 } from "./_framer-runtime.js";
fontStore2.loadFonts(["GF;Handjet-500", "GF;Handjet-700"]);
var fonts2 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Handjet", openType: true, source: "google", style: "normal", uiFamilyName: "Handjet", url: "https://fonts.gstatic.com/s/handjet/v22/oY1n8eXHq7n1OnbQrOY_2FrEwYEMLlcdP1mCtZaLaTutCwcIhGZ0lGU0akFcO3XFHQuaUkAsEHFAH2A.woff2", weight: "500" }, { cssFamilyName: "Handjet", openType: true, source: "google", style: "normal", uiFamilyName: "Handjet", url: "https://fonts.gstatic.com/s/handjet/v22/oY1n8eXHq7n1OnbQrOY_2FrEwYEMLlcdP1mCtZaLaTutCwcIhGZ0lGU0akFcO3XFHd6dUkAsEHFAH2A.woff2", weight: "700" }] }];
var css3 = [`.framer-xM92Z .framer-styles-preset-108341r:not(.rich-text-wrapper), .framer-xM92Z .framer-styles-preset-108341r.rich-text-wrapper p { --framer-font-family: "Handjet", sans-serif; --framer-font-family-bold: "Handjet", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 240px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -8px; --framer-line-height: 168px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f98c13ba-4557-4be8-a887-117b0c3d106e, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-xM92Z .framer-styles-preset-108341r:not(.rich-text-wrapper), .framer-xM92Z .framer-styles-preset-108341r.rich-text-wrapper p { --framer-font-family: "Handjet", sans-serif; --framer-font-family-bold: "Handjet", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 192px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -8px; --framer-line-height: 168px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f98c13ba-4557-4be8-a887-117b0c3d106e, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-xM92Z .framer-styles-preset-108341r:not(.rich-text-wrapper), .framer-xM92Z .framer-styles-preset-108341r.rich-text-wrapper p { --framer-font-family: "Handjet", sans-serif; --framer-font-family-bold: "Handjet", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 154px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-letter-spacing: -8px; --framer-line-height: 168px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-f98c13ba-4557-4be8-a887-117b0c3d106e, #333333); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className2 = "framer-xM92Z";

// http-url:https://framerusercontent.com/modules/amQ056MhIg4rHcUmD8qw/zTus9PI94segKn8LMqxb/BPRN7Yv4_.js
import { fontStore as fontStore3 } from "./_framer-runtime.js";
fontStore3.loadFonts(["FS;Poppins-regular", "FS;Poppins-variableVF=IndnaHQiIDQwMA==", "FS;Poppins-variableVF=IndnaHQiIDQwMA==", "FS;Poppins-variableVF=IndnaHQiIDQwMA=="]);
var fonts3 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Poppins", source: "fontshare", style: "normal", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2", weight: "400" }] }];
var css4 = ['.framer-MC3LN .framer-styles-preset-93ddxl:not(.rich-text-wrapper), .framer-MC3LN .framer-styles-preset-93ddxl.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins Variable", "Poppins Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins Variable", "Poppins Variable Placeholder", sans-serif; --framer-font-family-italic: "Poppins Variable", "Poppins Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: normal; --framer-font-variation-axes-bold: "wght" 400; --framer-font-variation-axes-bold-italic: "wght" 400; --framer-font-variation-axes-italic: "wght" 400; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 20px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: #b1b1b1; --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }'];
var className3 = "framer-MC3LN";

// http-url:https://framerusercontent.com/modules/xjIXPHYw5vndA66Hy9CP/o4FDc7LMCNBfMUBRc680/oJO_Fca5I.js
import { fontStore as fontStore4 } from "./_framer-runtime.js";
fontStore4.loadFonts(["FS;Poppins-medium", "FS;Poppins-bold", "FS;Poppins-bold italic", "FS;Poppins-medium italic"]);
var fonts4 = [{ explicitInter: true, fonts: [{ cssFamilyName: "Poppins", source: "fontshare", style: "normal", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/K4RHKGAGLQZBXEZQT2O2AGSLKJF2E4YC/JRUTXNFPWLFGIEVSSEYOW7EP7TYM3V6A/UCDYLFFGLZRGCFY5GYDYM5LDB52BAR5M.woff2", weight: "500" }, { cssFamilyName: "Poppins", source: "fontshare", style: "normal", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/EOHGWBZYYKO6R4PWP4S2B3FFWHHBEZN6/UWQLMF4AFWLXCJQCFV3WRVYC77KZXPRB/FYG6OCH7XOLUUSZTIZE65ATBZWF623O4.woff2", weight: "700" }, { cssFamilyName: "Poppins", source: "fontshare", style: "italic", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/JQL34MORONR7D7BXOVTX3KBGJGEJQ5BJ/CKUZVY5SFANCFAT7FS3MP6ZL4BMEWCJE/NOLRWF3JBJ434MILPG5RB6R2B4HGRSZB.woff2", weight: "700" }, { cssFamilyName: "Poppins", source: "fontshare", style: "italic", uiFamilyName: "Poppins", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/4HH4RITHYMRL7VREMN2WV2L6LQZKPRWE/ZWMGJ4LKTJ4NT5NKCHS5WLI6CRRRO2SE/OFRM3ATAEVJKZWGG6S4JN4P6SBPN2BLD.woff2", weight: "500" }] }];
var css5 = [`.framer-19SXx .framer-styles-preset-lcwyxr:not(.rich-text-wrapper), .framer-19SXx .framer-styles-preset-lcwyxr.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 72px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`, `@media (max-width: 1199px) and (min-width: 810px) { .framer-19SXx .framer-styles-preset-lcwyxr:not(.rich-text-wrapper), .framer-19SXx .framer-styles-preset-lcwyxr.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 45px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 72px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`, `@media (max-width: 809px) and (min-width: 0px) { .framer-19SXx .framer-styles-preset-lcwyxr:not(.rich-text-wrapper), .framer-19SXx .framer-styles-preset-lcwyxr.rich-text-wrapper h2 { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-italic: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 34px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: 0px; --framer-line-height: 40px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`];
var className4 = "framer-19SXx";

// http-url:https://framerusercontent.com/modules/UnulzCbnFP3O4t5Ixcpt/ema1OHrJXpjLOd0nI7jh/ps20dj8dm.js
import { fontStore as fontStore5 } from "./_framer-runtime.js";
fontStore5.loadFonts(["FS;Poppins-regular", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts5 = [{ explicitInter: true, fonts: [{ family: "Poppins", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css6 = [`.framer-7asgf .framer-styles-preset-19eolr6:not(.rich-text-wrapper), .framer-7asgf .framer-styles-preset-19eolr6.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 28px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className5 = "framer-7asgf";

// http-url:https://framerusercontent.com/modules/1kTm9KjY5q0XUvm7vlza/TBUV1Il2ZZ9MZ2CfJBjo/itunLl513.js
var cycleOrder = ["ydPcM7paG", "YQLLvnbq5"];
var serializationHash2 = "framer-cSO6j";
var variantClassNames2 = { ydPcM7paG: "framer-v-wnuzrk", YQLLvnbq5: "framer-v-1nkoa2i" };
function addPropertyOverrides2(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition12 = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: "tween" };
var Transition2 = ({ value, children }) => {
  const config = React2.useContext(MotionConfigContext2);
  const transition = value ?? config.transition;
  const contextValue = React2.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx2(MotionConfigContext2.Provider, { value: contextValue, children });
};
var Variants2 = motion2.create(React2.Fragment);
var humanReadableVariantMap = { Primary: "ydPcM7paG", Secondary: "YQLLvnbq5" };
var getProps2 = ({ height, id, number, shortDescription, title, width, years, ...props }) => {
  return { ...props, iJ17v24FA: years ?? props.iJ17v24FA ?? "5 Years Exp", k1tqaNsjC: number ?? props.k1tqaNsjC ?? "01", KnRV8rK_6: shortDescription ?? props.KnRV8rK_6 ?? "Since beginning my journey as a freelance designer nearly 8 years ago", M00u6146H: title ?? props.M00u6146H ?? "Web Design", variant: humanReadableVariantMap[props.variant] ?? props.variant ?? "ydPcM7paG" };
};
var createLayoutDependency2 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component2 = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  const fallbackRef = useRef2(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React2.useId();
  const { activeLocale, setLocale } = useLocaleInfo2();
  const componentViewport = useComponentViewport2();
  const { style, className: className7, layoutId, variant, iJ17v24FA, M00u6146H, KnRV8rK_6, k1tqaNsjC, ...restProps } = getProps2(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState2({ cycleOrder, defaultVariant: "ydPcM7paG", ref: refBinding, variant, variantClassNames: variantClassNames2 });
  const layoutDependency = createLayoutDependency2(props, variants);
  const sharedStyleClassNames = [className3, className4, className5, className2];
  const scopingClassNames = cx2(serializationHash2, ...sharedStyleClassNames);
  const isDisplayed = () => {
    if (baseVariant === "YQLLvnbq5")
      return false;
    return true;
  };
  return /* @__PURE__ */ _jsx2(LayoutGroup2, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx2(Variants2, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx2(Transition2, { value: transition12, children: /* @__PURE__ */ _jsxs2(motion2.div, { ...restProps, ...gestureHandlers, className: cx2(scopingClassNames, "framer-wnuzrk", className7, classNames), "data-framer-name": "Primary", layoutDependency, layoutId: "ydPcM7paG", ref: refBinding, style: { ...style }, ...addPropertyOverrides2({ YQLLvnbq5: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-h6km9l", "data-framer-name": "Top", layoutDependency, layoutId: "cmN4DUj0W", children: [/* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-hm6irg", "data-framer-name": "Top", layoutDependency, layoutId: "Z7jI92S45", children: [/* @__PURE__ */ _jsx2(motion2.div, { className: "framer-1kp9iuf", "data-border": true, "data-framer-name": "Top", layoutDependency, layoutId: "LVSGpR6CV", style: { "--border-bottom-width": "1px", "--border-color": "var(--token-f98c13ba-4557-4be8-a887-117b0c3d106e, rgb(51, 51, 51))", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, children: /* @__PURE__ */ _jsx2(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-93ddxl", "data-styles-preset": "BPRN7Yv4_", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1)))" }, children: "5 Years Exp" }) }), className: "framer-y4tt5w", "data-framer-name": "5 Years Exp", fonts: ["Inter"], layoutDependency, layoutId: "X95gFaz7e", style: { "--extracted-r6o4lv": "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))", "--framer-paragraph-spacing": "0px" }, text: iJ17v24FA, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-16tmxin", "data-framer-name": "Bottom", layoutDependency, layoutId: "h1GIpz9SC", children: /* @__PURE__ */ _jsx2(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.h2, { className: "framer-styles-preset-lcwyxr", "data-styles-preset": "oJO_Fca5I", children: "Web Design" }) }), className: "framer-4wi7qj", "data-framer-name": "Web Design", fonts: ["Inter"], layoutDependency, layoutId: "hzloCD866", style: { "--framer-paragraph-spacing": "0px" }, text: M00u6146H, verticalAlignment: "top", withExternalLayout: true }) })] }), /* @__PURE__ */ _jsx2(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-19eolr6", "data-styles-preset": "ps20dj8dm", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-be15e49c-ae87-4e96-8dda-87eb3dcb0b79, rgb(187, 187, 187)))" }, children: "Since beginning my journey as a freelance designer nearly 8 years ago" }) }), className: "framer-1gk4mss", "data-framer-name": "Since beginning my journey as a freelance designer nearly 8 years ago", fonts: ["Inter"], layoutDependency, layoutId: "DpuBtBgLB", style: { "--extracted-r6o4lv": "var(--token-be15e49c-ae87-4e96-8dda-87eb3dcb0b79, rgb(187, 187, 187))", "--framer-paragraph-spacing": "0px" }, text: KnRV8rK_6, verticalAlignment: "top", withExternalLayout: true })] }), /* @__PURE__ */ _jsxs2(motion2.div, { className: "framer-1atmle8", "data-framer-name": "Bottom", layoutDependency, layoutId: "Mu9AQ3xQ_", children: [/* @__PURE__ */ _jsx2(RichText2, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx2(React2.Fragment, { children: /* @__PURE__ */ _jsx2(motion2.p, { className: "framer-styles-preset-108341r", "data-styles-preset": "a5jPDjSIx", children: "01" }) }), className: "framer-66fp3b", "data-framer-name": "01", fonts: ["Inter"], layoutDependency, layoutId: "P0Zcclz6M", style: { "--framer-paragraph-spacing": "0px", opacity: 0.5 }, text: k1tqaNsjC, verticalAlignment: "top", withExternalLayout: true }), isDisplayed() && /* @__PURE__ */ _jsx2(motion2.div, { className: "framer-17bjo7u", "data-framer-name": "Arrow", layoutDependency, layoutId: "QLkcGsCUq", children: /* @__PURE__ */ _jsx2(SVG, { className: "framer-7gwydo", "data-framer-name": "Vector", fill: "rgba(0,0,0,1)", intrinsicHeight: 38, intrinsicWidth: 38, layoutDependency, layoutId: "I2089:490;107:352", svg: '<svg width="38" height="38" viewBox="-1 -1 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M35.1201 0.560059V26.4323H32.256V5.42901L2.56492 35.1201L0.560059 33.0197L30.1556 3.42415H9.15232V0.560059H35.1201Z" fill="white"/>\n</svg>\n', withExternalLayout: true }) })] })] }) }) }) });
});
var css7 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-cSO6j.framer-3wwi4d, .framer-cSO6j .framer-3wwi4d { display: block; }", ".framer-cSO6j.framer-wnuzrk { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 564px; }", ".framer-cSO6j .framer-h6km9l { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 38px; height: min-content; justify-content: flex-start; overflow: visible; padding: 104px 48px 0px 52px; position: relative; width: 100%; }", ".framer-cSO6j .framer-hm6irg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-cSO6j .framer-1kp9iuf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 6px 16px 6px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-cSO6j .framer-y4tt5w, .framer-cSO6j .framer-66fp3b { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-cSO6j .framer-16tmxin { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-cSO6j .framer-4wi7qj { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }", ".framer-cSO6j .framer-1gk4mss { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-cSO6j .framer-1atmle8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 40px 10px 0px 26px; position: relative; width: 100%; }", ".framer-cSO6j .framer-17bjo7u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 104px; justify-content: center; overflow: hidden; padding: 0px 10px 10px 0px; position: relative; width: 104px; }", ".framer-cSO6j .framer-7gwydo { flex: none; height: 38px; position: relative; width: 38px; }", ".framer-cSO6j.framer-v-1nkoa2i .framer-h6km9l { padding: 70px 24px 0px 24px; }", ...css4, ...css5, ...css6, ...css3, '.framer-cSO6j[data-border="true"]::after, .framer-cSO6j [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FrameritunLl513 = withCSS2(Component2, css7, "framer-cSO6j");
var itunLl513_default = FrameritunLl513;
FrameritunLl513.displayName = "Service Card";
FrameritunLl513.defaultProps = { height: 534, width: 564 };
addPropertyControls2(FrameritunLl513, { variant: { options: ["ydPcM7paG", "YQLLvnbq5"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType2.Enum }, iJ17v24FA: { defaultValue: "5 Years Exp", title: "Years", type: ControlType2.String }, M00u6146H: { defaultValue: "Web Design", title: "Title", type: ControlType2.String }, KnRV8rK_6: { defaultValue: "Since beginning my journey as a freelance designer nearly 8 years ago", title: "Short Description", type: ControlType2.String }, k1tqaNsjC: { defaultValue: "01", title: "Number", type: ControlType2.String } });
addFonts2(FrameritunLl513, [{ explicitInter: true, fonts: [{ cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { cssFamilyName: "Inter", source: "framer", style: "normal", uiFamilyName: "Inter", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle2(fonts3), ...getFontsFromSharedStyle2(fonts4), ...getFontsFromSharedStyle2(fonts5), ...getFontsFromSharedStyle2(fonts2)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/zFYXBc0kWHrC4aAAmJsV/QZdq1ItWOxMODMGHENFT/p9tCofXcq.js
import { jsx as _jsx3 } from "react/jsx-runtime";
import { addFonts as addFonts3, addPropertyControls as addPropertyControls3, ControlType as ControlType3, cx as cx3, getFontsFromSharedStyle as getFontsFromSharedStyle3, RichText as RichText3, useActiveVariantCallback, useComponentViewport as useComponentViewport3, useLocaleInfo as useLocaleInfo3, useVariantState as useVariantState3, withCSS as withCSS3 } from "./_framer-runtime.js";
import { LayoutGroup as LayoutGroup3, motion as motion3, MotionConfigContext as MotionConfigContext3 } from "./_framer-runtime.js";
import * as React3 from "react";
import { useRef as useRef3 } from "react";

// http-url:https://framerusercontent.com/modules/aKVZNDkq4MNxqhkR4O7D/lcQtqKBUYWAwBugRwInG/W39Cn4fTU.js
import { fontStore as fontStore6 } from "./_framer-runtime.js";
fontStore6.loadFonts(["FS;Poppins-regular", "Inter-Bold", "Inter-BoldItalic", "Inter-Italic"]);
var fonts6 = [{ explicitInter: true, fonts: [{ family: "Poppins", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NC2MP33RO4WQTSTEEAWBJLAEXNCNEQVF/7F4U3COKLHQH4WUH3AXPC7N4UELEWJQN/JMWNCAGBH3TLANIVQPVABVAVNV5QERTH.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/ia3uin3hQWqDrVloC1zEtYHWw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/867QObYax8ANsfX4TGEVU9YiCM.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/DOfvtmE1UplCq161m6Hj8CSQYg.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/pKRFNWFoZl77qYCAIp84lN1h944.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2", weight: "400" }] }];
var css8 = [`.framer-bXbHi .framer-styles-preset-13bhoes:not(.rich-text-wrapper), .framer-bXbHi .framer-styles-preset-13bhoes.rich-text-wrapper p { --framer-font-family: "Poppins", "Poppins Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: 'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0px; --framer-line-height: 24px; --framer-paragraph-spacing: 0px; --framer-text-alignment: start; --framer-text-color: var(--token-be15e49c-ae87-4e96-8dda-87eb3dcb0b79, #bbbbbb); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`];
var className6 = "framer-bXbHi";

// http-url:https://framerusercontent.com/modules/zFYXBc0kWHrC4aAAmJsV/QZdq1ItWOxMODMGHENFT/p9tCofXcq.js
var enabledGestures2 = { QbP9R_x9i: { hover: true } };
var cycleOrder2 = ["dXCtc39oD", "QbP9R_x9i"];
var serializationHash3 = "framer-y6ebI";
var variantClassNames3 = { dXCtc39oD: "framer-v-f5k22", QbP9R_x9i: "framer-v-12r0ltp" };
function addPropertyOverrides3(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition13 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition3 = ({ value, children }) => {
  const config = React3.useContext(MotionConfigContext3);
  const transition = value ?? config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx3(MotionConfigContext3.Provider, { value: contextValue, children });
};
var Variants3 = motion3.create(React3.Fragment);
var humanReadableVariantMap2 = { Primary: "dXCtc39oD", Secondary: "QbP9R_x9i" };
var getProps3 = ({ click, height, id, title, width, ...props }) => {
  return { ...props, GGLVFJuE8: title ?? props.GGLVFJuE8 ?? "Web Design", variant: humanReadableVariantMap2[props.variant] ?? props.variant ?? "dXCtc39oD", Xlj7g17JN: click ?? props.Xlj7g17JN };
};
var createLayoutDependency3 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component3 = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  const fallbackRef = useRef3(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React3.useId();
  const { activeLocale, setLocale } = useLocaleInfo3();
  const componentViewport = useComponentViewport3();
  const { style, className: className7, layoutId, variant, Xlj7g17JN, GGLVFJuE8, ...restProps } = getProps3(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState3({ cycleOrder: cycleOrder2, defaultVariant: "dXCtc39oD", enabledGestures: enabledGestures2, ref: refBinding, variant, variantClassNames: variantClassNames3 });
  const layoutDependency = createLayoutDependency3(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapvbbmza = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (Xlj7g17JN) {
      const res = await Xlj7g17JN(...args);
      if (res === false)
        return false;
    }
  });
  const sharedStyleClassNames = [className6];
  const scopingClassNames = cx3(serializationHash3, ...sharedStyleClassNames);
  return /* @__PURE__ */ _jsx3(LayoutGroup3, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx3(Variants3, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx3(Transition3, { value: transition13, children: /* @__PURE__ */ _jsx3(motion3.div, { ...restProps, ...gestureHandlers, className: cx3(scopingClassNames, "framer-f5k22", className7, classNames), "data-framer-name": "Primary", "data-highlight": true, layoutDependency, layoutId: "dXCtc39oD", onTap: onTapvbbmza, ref: refBinding, style: { backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100, ...style }, variants: { "QbP9R_x9i-hover": { backgroundColor: "var(--token-3498efc0-f9f3-4960-abf6-db6b76d154bd, rgb(225, 255, 1))" }, QbP9R_x9i: { backgroundColor: "rgba(0, 0, 0, 0)" } }, ...addPropertyOverrides3({ "QbP9R_x9i-hover": { "data-framer-name": void 0 }, QbP9R_x9i: { "data-framer-name": "Secondary" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx3(RichText3, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-13bhoes", "data-styles-preset": "W39Cn4fTU", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21)))" }, children: "Web Design" }) }), className: "framer-1ch9omg", "data-framer-name": "Web Design", fonts: ["Inter"], layoutDependency, layoutId: "dEyuiK900", style: { "--extracted-r6o4lv": "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))", "--framer-paragraph-spacing": "0px" }, text: GGLVFJuE8, variants: { "QbP9R_x9i-hover": { "--extracted-r6o4lv": "var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21))" }, QbP9R_x9i: { "--extracted-r6o4lv": "var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, rgb(255, 255, 255))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides3({ "QbP9R_x9i-hover": { children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-13bhoes", "data-styles-preset": "W39Cn4fTU", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-e4c37866-5fc0-445f-9a24-d48104598539, rgb(21, 21, 21)))" }, children: "Web Design" }) }) }, QbP9R_x9i: { children: /* @__PURE__ */ _jsx3(React3.Fragment, { children: /* @__PURE__ */ _jsx3(motion3.p, { className: "framer-styles-preset-13bhoes", "data-styles-preset": "W39Cn4fTU", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-dec04c2a-5334-4aba-a37f-c366f756756f, rgb(255, 255, 255)))" }, children: "Web Design" }) }) } }, baseVariant, gestureVariant) }) }) }) }) });
});
var css9 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-y6ebI.framer-17m6qff, .framer-y6ebI .framer-17m6qff { display: block; }", ".framer-y6ebI.framer-f5k22 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 8px 32px 8px 32px; position: relative; width: min-content; }", ".framer-y6ebI .framer-1ch9omg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ...css8];
var Framerp9tCofXcq = withCSS3(Component3, css9, "framer-y6ebI");
var p9tCofXcq_default = Framerp9tCofXcq;
Framerp9tCofXcq.displayName = "Service Toggle";
Framerp9tCofXcq.defaultProps = { height: 40, width: 159 };
addPropertyControls3(Framerp9tCofXcq, { variant: { options: ["dXCtc39oD", "QbP9R_x9i"], optionTitles: ["Primary", "Secondary"], title: "Variant", type: ControlType3.Enum }, Xlj7g17JN: { title: "Click", type: ControlType3.EventHandler }, GGLVFJuE8: { defaultValue: "Web Design", displayTextArea: false, title: "Title", type: ControlType3.String } });
addFonts3(Framerp9tCofXcq, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle3(fonts6)], { supportsExplicitInterCodegen: true });

// http-url:https://framerusercontent.com/modules/zgpTVvDCoFKqF7mXq1Xq/u0kokH4QgMtyJLaZuIeI/QKVuepKnZ.js
var ServiceToggleFonts = getFonts(p9tCofXcq_default);
var ServiceCardFonts = getFonts(itunLl513_default);
var SecondaryButtonFonts = getFonts(aw0OJkQ9o_default);
var cycleOrder3 = ["D_DsXJjiI", "SGouu_TQA", "AbABClvOP", "P__RdykHw", "FV1pMBXWA", "us9ayQuDN"];
var serializationHash4 = "framer-K8Pq9";
var variantClassNames4 = { AbABClvOP: "framer-v-we4btc", D_DsXJjiI: "framer-v-hcx6xn", FV1pMBXWA: "framer-v-18l05i5", P__RdykHw: "framer-v-a1d2l", SGouu_TQA: "framer-v-1it5bz9", us9ayQuDN: "framer-v-o8aj2p" };
function addPropertyOverrides4(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition14 = { delay: 0, duration: 0.4, ease: [0, 0, 1, 1], type: "tween" };
var QueryData = ({ query, pageSize, children }) => {
  const data = useQueryData(query);
  return children(data);
};
var addImageAlt = (image, alt) => {
  if (!image || typeof image !== "object") {
    return;
  }
  return { ...image, alt };
};
var Transition4 = ({ value, children }) => {
  const config = React4.useContext(MotionConfigContext4);
  const transition = value ?? config.transition;
  const contextValue = React4.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx4(MotionConfigContext4.Provider, { value: contextValue, children });
};
var Variants4 = motion4.create(React4.Fragment);
var humanReadableVariantMap3 = { "Card1 Desktop": "D_DsXJjiI", "Card1 Mobile": "P__RdykHw", "Card2 Desktop": "SGouu_TQA", "Card2 Mobile": "FV1pMBXWA", "Card3 Desktop": "AbABClvOP", "Card3 Mobile": "us9ayQuDN" };
var getProps4 = ({ height, id, width, ...props }) => {
  return { ...props, variant: humanReadableVariantMap3[props.variant] ?? props.variant ?? "D_DsXJjiI" };
};
var createLayoutDependency4 = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component4 = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  const fallbackRef = useRef4(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React4.useId();
  const { activeLocale, setLocale } = useLocaleInfo4();
  const componentViewport = useComponentViewport4();
  const { style, className: className7, layoutId, variant, pBTNyYOGTap6YT7_6B, KXEIv0apBap6YT7_6B, HtGAH4iReap6YT7_6B, ujF0gOCHYap6YT7_6B, qsgLRPDYmap6YT7_6B, idap6YT7_6B, ...restProps } = getProps4(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState4({ cycleOrder: cycleOrder3, defaultVariant: "D_DsXJjiI", ref: refBinding, variant, variantClassNames: variantClassNames4 });
  const layoutDependency = createLayoutDependency4(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback2(baseVariant);
  const Xlj7g17JNzoh7d3 = activeVariantCallback(async (...args) => {
    setVariant("D_DsXJjiI");
  });
  const Xlj7g17JN6c3a77 = activeVariantCallback(async (...args) => {
    setVariant("P__RdykHw");
  });
  const Xlj7g17JNurje5j = activeVariantCallback(async (...args) => {
    setVariant("SGouu_TQA");
  });
  const Xlj7g17JNknlpvm = activeVariantCallback(async (...args) => {
    setVariant("FV1pMBXWA");
  });
  const Xlj7g17JN6qfi9p = activeVariantCallback(async (...args) => {
    setVariant("AbABClvOP");
  });
  const Xlj7g17JN1ylj92e = activeVariantCallback(async (...args) => {
    setVariant("us9ayQuDN");
  });
  const sharedStyleClassNames = [];
  const scopingClassNames = cx4(serializationHash4, ...sharedStyleClassNames);
  const router = useRouter();
  return /* @__PURE__ */ _jsx4(LayoutGroup4, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx4(Variants4, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx4(Transition4, { value: transition14, children: /* @__PURE__ */ _jsxs3(motion4.div, { ...restProps, ...gestureHandlers, className: cx4(scopingClassNames, "framer-hcx6xn", className7, classNames), "data-framer-name": "Card1 Desktop", layoutDependency, layoutId: "D_DsXJjiI", ref: refBinding, style: { borderBottomLeftRadius: 48, borderBottomRightRadius: 48, borderTopLeftRadius: 48, borderTopRightRadius: 48, boxShadow: "8px 16px 32px 0px rgba(77, 77, 77, 0.15)", ...style }, ...addPropertyOverrides4({ AbABClvOP: { "data-framer-name": "Card3 Desktop" }, FV1pMBXWA: { "data-framer-name": "Card2 Mobile" }, P__RdykHw: { "data-framer-name": "Card1 Mobile" }, SGouu_TQA: { "data-framer-name": "Card2 Desktop" }, us9ayQuDN: { "data-framer-name": "Card3 Mobile" } }, baseVariant, gestureVariant), children: [/* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-anwu4g", "data-framer-name": "Top", layoutDependency, layoutId: "uscbe_whZ", style: { borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32 }, children: [/* @__PURE__ */ _jsx4(motion4.div, { className: "framer-fsh2ht", "data-framer-name": "Border", layoutDependency, layoutId: "vejsKMtfz", style: { background: "linear-gradient(160deg, var(--token-4850efac-c98c-4162-bb80-9931c5e63cff, rgb(69, 69, 69)) 6%, var(--token-eda1288a-b7d8-4058-b6bc-ad0d4d7f1815, rgb(53, 53, 53)) 94%)", borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32 } }), /* @__PURE__ */ _jsx4(motion4.div, { className: "framer-xtckdz", "data-framer-name": "BG", layoutDependency, layoutId: "dH1lBogn6", style: { background: "linear-gradient(180deg, var(--token-20f2ae48-e039-47f3-8042-3745ae324c8f, rgb(0, 0, 0)) 0%, var(--token-d9df320a-56a0-4c27-901a-3c1020babb27, rgb(28, 28, 28)) 100%)", borderBottomLeftRadius: 32, borderBottomRightRadius: 32, borderTopLeftRadius: 32, borderTopRightRadius: 32 } }), /* @__PURE__ */ _jsx4(motion4.div, { className: "framer-d9ckr3", "data-framer-name": "Top", layoutDependency, layoutId: "Q5caTwUKB", children: /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-4oe7ta", "data-framer-name": "Content", layoutDependency, layoutId: "CYPm6NQqh", style: { backgroundColor: "var(--token-86078b6c-f96f-4056-8242-4499c67d6005, rgb(17, 17, 17))", borderBottomLeftRadius: 100, borderBottomRightRadius: 100, borderTopLeftRadius: 100, borderTopRightRadius: 100 }, variants: { FV1pMBXWA: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 }, P__RdykHw: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 }, us9ayQuDN: { borderBottomLeftRadius: 24, borderBottomRightRadius: 24, borderTopLeftRadius: 24, borderTopRightRadius: 24 } }, children: [/* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 40, width: `max((max(${componentViewport?.width || "100vw"} - 112px, 1px) - 46px) / 3, 1px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 8, ...addPropertyOverrides4({ FV1pMBXWA: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 0 }, P__RdykHw: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 0 }, us9ayQuDN: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-119u2ve-container", layoutDependency, layoutId: "qHVf8OBNc-container", nodeId: "qHVf8OBNc", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(p9tCofXcq_default, { GGLVFJuE8: "Web Design", height: "100%", id: "qHVf8OBNc", layoutId: "qHVf8OBNc", style: { width: "100%" }, variant: "dXCtc39oD", width: "100%", Xlj7g17JN: Xlj7g17JNzoh7d3, ...addPropertyOverrides4({ AbABClvOP: { variant: "QbP9R_x9i" }, FV1pMBXWA: { variant: "QbP9R_x9i", Xlj7g17JN: Xlj7g17JN6c3a77 }, P__RdykHw: { Xlj7g17JN: Xlj7g17JN6c3a77 }, SGouu_TQA: { variant: "QbP9R_x9i" }, us9ayQuDN: { variant: "QbP9R_x9i", Xlj7g17JN: Xlj7g17JN6c3a77 } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 40, width: `max((max(${componentViewport?.width || "100vw"} - 112px, 1px) - 46px) / 3, 1px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 8, ...addPropertyOverrides4({ FV1pMBXWA: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 55 }, P__RdykHw: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 55 }, us9ayQuDN: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 55 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-lcmusp-container", layoutDependency, layoutId: "GTOx7baSZ-container", nodeId: "GTOx7baSZ", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(p9tCofXcq_default, { GGLVFJuE8: "Branding", height: "100%", id: "GTOx7baSZ", layoutId: "GTOx7baSZ", style: { width: "100%" }, variant: "QbP9R_x9i", width: "100%", Xlj7g17JN: Xlj7g17JNurje5j, ...addPropertyOverrides4({ FV1pMBXWA: { variant: "dXCtc39oD", Xlj7g17JN: Xlj7g17JNknlpvm }, P__RdykHw: { Xlj7g17JN: Xlj7g17JNknlpvm }, SGouu_TQA: { variant: "dXCtc39oD" }, us9ayQuDN: { Xlj7g17JN: Xlj7g17JNknlpvm } }, baseVariant, gestureVariant) }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 40, width: `max((max(${componentViewport?.width || "100vw"} - 112px, 1px) - 46px) / 3, 1px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 8, ...addPropertyOverrides4({ FV1pMBXWA: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 110 }, P__RdykHw: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 110 }, us9ayQuDN: { width: `calc(max(${componentViewport?.width || "100vw"} - 112px, 1px) - 24px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 0 + 24 + 12 + 110 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-q4s6hk-container", layoutDependency, layoutId: "nRr9xtyBp-container", nodeId: "nRr9xtyBp", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(p9tCofXcq_default, { GGLVFJuE8: "Development", height: "100%", id: "nRr9xtyBp", layoutId: "nRr9xtyBp", style: { width: "100%" }, variant: "QbP9R_x9i", width: "100%", Xlj7g17JN: Xlj7g17JN6qfi9p, ...addPropertyOverrides4({ AbABClvOP: { variant: "dXCtc39oD" }, FV1pMBXWA: { Xlj7g17JN: Xlj7g17JN1ylj92e }, P__RdykHw: { Xlj7g17JN: Xlj7g17JN1ylj92e }, us9ayQuDN: { variant: "dXCtc39oD", Xlj7g17JN: Xlj7g17JN1ylj92e } }, baseVariant, gestureVariant) }) }) })] }) }), /* @__PURE__ */ _jsx4(motion4.div, { className: "framer-j9udqv", layoutDependency, layoutId: "ap6YT7_6B", children: /* @__PURE__ */ _jsx4(ChildrenCanSuspend, { children: /* @__PURE__ */ _jsx4(QueryData, { query: { from: { alias: "ap6YT7_6B", data: DllZ9gEH7_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, offset: { type: "LiteralValue", value: 0 }, select: [{ collection: "ap6YT7_6B", name: "pBTNyYOGT", type: "Identifier" }, { collection: "ap6YT7_6B", name: "KXEIv0apB", type: "Identifier" }, { collection: "ap6YT7_6B", name: "HtGAH4iRe", type: "Identifier" }, { collection: "ap6YT7_6B", name: "ujF0gOCHY", type: "Identifier" }, { collection: "ap6YT7_6B", name: "qsgLRPDYm", type: "Identifier" }, { collection: "ap6YT7_6B", name: "id", type: "Identifier" }] }, ...addPropertyOverrides4({ AbABClvOP: { query: { from: { alias: "ap6YT7_6B", data: DllZ9gEH7_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, offset: { type: "LiteralValue", value: 2 }, select: [{ collection: "ap6YT7_6B", name: "pBTNyYOGT", type: "Identifier" }, { collection: "ap6YT7_6B", name: "KXEIv0apB", type: "Identifier" }, { collection: "ap6YT7_6B", name: "HtGAH4iRe", type: "Identifier" }, { collection: "ap6YT7_6B", name: "ujF0gOCHY", type: "Identifier" }, { collection: "ap6YT7_6B", name: "qsgLRPDYm", type: "Identifier" }, { collection: "ap6YT7_6B", name: "id", type: "Identifier" }] } }, FV1pMBXWA: { query: { from: { alias: "ap6YT7_6B", data: DllZ9gEH7_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, offset: { type: "LiteralValue", value: 1 }, select: [{ collection: "ap6YT7_6B", name: "pBTNyYOGT", type: "Identifier" }, { collection: "ap6YT7_6B", name: "KXEIv0apB", type: "Identifier" }, { collection: "ap6YT7_6B", name: "HtGAH4iRe", type: "Identifier" }, { collection: "ap6YT7_6B", name: "ujF0gOCHY", type: "Identifier" }, { collection: "ap6YT7_6B", name: "qsgLRPDYm", type: "Identifier" }, { collection: "ap6YT7_6B", name: "id", type: "Identifier" }] } }, SGouu_TQA: { query: { from: { alias: "ap6YT7_6B", data: DllZ9gEH7_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, offset: { type: "LiteralValue", value: 1 }, select: [{ collection: "ap6YT7_6B", name: "pBTNyYOGT", type: "Identifier" }, { collection: "ap6YT7_6B", name: "KXEIv0apB", type: "Identifier" }, { collection: "ap6YT7_6B", name: "HtGAH4iRe", type: "Identifier" }, { collection: "ap6YT7_6B", name: "ujF0gOCHY", type: "Identifier" }, { collection: "ap6YT7_6B", name: "qsgLRPDYm", type: "Identifier" }, { collection: "ap6YT7_6B", name: "id", type: "Identifier" }] } }, us9ayQuDN: { query: { from: { alias: "ap6YT7_6B", data: DllZ9gEH7_default, type: "Collection" }, limit: { type: "LiteralValue", value: 1 }, offset: { type: "LiteralValue", value: 2 }, select: [{ collection: "ap6YT7_6B", name: "pBTNyYOGT", type: "Identifier" }, { collection: "ap6YT7_6B", name: "KXEIv0apB", type: "Identifier" }, { collection: "ap6YT7_6B", name: "HtGAH4iRe", type: "Identifier" }, { collection: "ap6YT7_6B", name: "ujF0gOCHY", type: "Identifier" }, { collection: "ap6YT7_6B", name: "qsgLRPDYm", type: "Identifier" }, { collection: "ap6YT7_6B", name: "id", type: "Identifier" }] } } }, baseVariant, gestureVariant), children: (collection, paginationInfo, loadMore) => /* @__PURE__ */ _jsx4(_Fragment, { children: collection?.map(({ HtGAH4iRe: HtGAH4iReap6YT7_6B2, id: idap6YT7_6B2, KXEIv0apB: KXEIv0apBap6YT7_6B2, pBTNyYOGT: pBTNyYOGTap6YT7_6B2, qsgLRPDYm: qsgLRPDYmap6YT7_6B2, ujF0gOCHY: ujF0gOCHYap6YT7_6B2 }, index) => {
    pBTNyYOGTap6YT7_6B2 ?? (pBTNyYOGTap6YT7_6B2 = "");
    KXEIv0apBap6YT7_6B2 ?? (KXEIv0apBap6YT7_6B2 = "");
    HtGAH4iReap6YT7_6B2 ?? (HtGAH4iReap6YT7_6B2 = "");
    ujF0gOCHYap6YT7_6B2 ?? (ujF0gOCHYap6YT7_6B2 = "");
    qsgLRPDYmap6YT7_6B2 ?? (qsgLRPDYmap6YT7_6B2 = "");
    return /* @__PURE__ */ _jsx4(LayoutGroup4, { id: `ap6YT7_6B-${idap6YT7_6B2}`, children: /* @__PURE__ */ _jsx4(PathVariablesContext.Provider, { value: { pBTNyYOGT: pBTNyYOGTap6YT7_6B2 }, children: /* @__PURE__ */ _jsx4(Link2, { href: { pathVariables: { pBTNyYOGT: pBTNyYOGTap6YT7_6B2 }, webPageId: "LaHy5Zbd4" }, motionChild: true, nodeId: "YqokeDCKi", scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(motion4.a, { className: "framer-4jrir0 framer-b5q73", layoutDependency, layoutId: "YqokeDCKi", children: /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 632, width: `max(${componentViewport?.width || "100vw"} - 64px, 1px)`, y: (componentViewport?.y || 0) + 32 + 0 + 0 + 80 + 0 + 0 + 0, ...addPropertyOverrides4({ FV1pMBXWA: { y: (componentViewport?.y || 0) + 32 + 0 + 0 + 198 + 0 + 0 + 0 }, P__RdykHw: { y: (componentViewport?.y || 0) + 32 + 0 + 0 + 198 + 0 + 0 + 0 }, us9ayQuDN: { y: (componentViewport?.y || 0) + 32 + 0 + 0 + 198 + 0 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1ocmiac-container", layoutDependency, layoutId: "NwCkfwYql-container", nodeId: "NwCkfwYql", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(itunLl513_default, { height: "100%", id: "NwCkfwYql", iJ17v24FA: KXEIv0apBap6YT7_6B2, k1tqaNsjC: qsgLRPDYmap6YT7_6B2, KnRV8rK_6: ujF0gOCHYap6YT7_6B2, layoutId: "NwCkfwYql", M00u6146H: HtGAH4iReap6YT7_6B2, style: { width: "100%" }, variant: "ydPcM7paG", width: "100%", ...addPropertyOverrides4({ FV1pMBXWA: { variant: "YQLLvnbq5" }, P__RdykHw: { variant: "YQLLvnbq5" }, us9ayQuDN: { variant: "YQLLvnbq5" } }, baseVariant, gestureVariant) }) }) }) }) }) }) }, idap6YT7_6B2);
  }) }) }) }) })] }), /* @__PURE__ */ _jsxs3(motion4.div, { className: "framer-jcsl5h", "data-framer-name": "Bottom", layoutDependency, layoutId: "wVCTbzHvN", children: [/* @__PURE__ */ _jsx4(ResolveLinks, { links: [{ href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }, { href: { hash: ":GO9U9QexB", webPageId: "augiA20Il" }, implicitPathVariables: void 0 }], children: (resolvedLinks) => /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 120, width: `max((${componentViewport?.width || "100vw"} - 76px) / 2, 1px)`, y: (componentViewport?.y || 0) + 32 + 744 + 0, ...addPropertyOverrides4({ FV1pMBXWA: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 0 }, P__RdykHw: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 0 }, us9ayQuDN: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 0 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-meyoi7-container", layoutDependency, layoutId: "BVQ2caxGh-container", nodeId: "BVQ2caxGh", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(aw0OJkQ9o_default, { ftTcjg6OJ: resolvedLinks[0], height: "100%", id: "BVQ2caxGh", JheHhAFEL: "Growth your project", layoutId: "BVQ2caxGh", style: { width: "100%" }, U4DH8mY2L: false, width: "100%", zpjrFTyjt: "Start Now", ...addPropertyOverrides4({ AbABClvOP: { ftTcjg6OJ: resolvedLinks[2] }, FV1pMBXWA: { ftTcjg6OJ: resolvedLinks[4] }, P__RdykHw: { ftTcjg6OJ: resolvedLinks[3] }, SGouu_TQA: { ftTcjg6OJ: resolvedLinks[1] }, us9ayQuDN: { ftTcjg6OJ: resolvedLinks[5] } }, baseVariant, gestureVariant) }) }) }) }), /* @__PURE__ */ _jsx4(ComponentViewportProvider, { height: 120, width: `max((${componentViewport?.width || "100vw"} - 76px) / 2, 1px)`, y: (componentViewport?.y || 0) + 32 + 744 + 0, ...addPropertyOverrides4({ FV1pMBXWA: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 132 }, P__RdykHw: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 132 }, us9ayQuDN: { width: `calc(${componentViewport?.width || "100vw"} - 64px)`, y: (componentViewport?.y || 0) + 32 + 862 + 0 + 132 } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsx4(SmartComponentScopedContainer, { className: "framer-1f9u8qu-container", layoutDependency, layoutId: "knze4aFm3-container", nodeId: "knze4aFm3", rendersWithMotion: true, scopeId: "QKVuepKnZ", children: /* @__PURE__ */ _jsx4(aw0OJkQ9o_default, { ftTcjg6OJ: "cal.com", height: "100%", id: "knze4aFm3", JheHhAFEL: "For other request", layoutId: "knze4aFm3", style: { width: "100%" }, U4DH8mY2L: true, width: "100%", zpjrFTyjt: "Contact Me", zy_h1gHvc: addImageAlt({ pixelHeight: 44, pixelWidth: 44, src: "https://framerusercontent.com/images/tDv92XlzCOp3P1VORyWO52Ipcvk.svg?width=44&height=44" }, "phone image") }) }) })] }), /* @__PURE__ */ _jsx4(motion4.div, { className: "framer-1j2zgc9", "data-framer-name": "Border", layoutDependency, layoutId: "ug047jxGe", style: { background: "linear-gradient(154deg, var(--token-757dcaee-4ce4-40e7-87aa-54cf685cdf11, rgb(6, 34, 51)) 5%, var(--token-cdd37508-322f-478c-95e0-de4629aff502, rgb(79, 96, 31)) 39%, var(--token-db9b5175-bcad-4f22-89e0-440fc61bbe62, rgb(27, 27, 27)) 100%)", borderBottomLeftRadius: 48, borderBottomRightRadius: 48, borderTopLeftRadius: 48, borderTopRightRadius: 48 } }), /* @__PURE__ */ _jsx4(motion4.div, { className: "framer-pu4s41", "data-framer-name": "BG", layoutDependency, layoutId: "DHtafarB1", style: { backgroundColor: "var(--token-20f2ae48-e039-47f3-8042-3745ae324c8f, rgb(0, 0, 0))", borderBottomLeftRadius: 48, borderBottomRightRadius: 48, borderTopLeftRadius: 48, borderTopRightRadius: 48 } })] }) }) }) });
});
var css10 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-K8Pq9.framer-b5q73, .framer-K8Pq9 .framer-b5q73 { display: block; }", ".framer-K8Pq9.framer-hcx6xn { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 628px; overflow: hidden; padding: 32px; position: relative; width: 628px; will-change: var(--framer-will-change-override, transform); }", ".framer-K8Pq9 .framer-anwu4g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 2; }", ".framer-K8Pq9 .framer-fsh2ht, .framer-K8Pq9 .framer-1j2zgc9 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ".framer-K8Pq9 .framer-xtckdz { bottom: 1px; flex: none; left: 1px; overflow: hidden; position: absolute; right: 1px; top: 1px; will-change: var(--framer-will-change-override, transform); z-index: 0; }", ".framer-K8Pq9 .framer-d9ckr3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 24px 24px 0px 24px; position: relative; width: 100%; }", ".framer-K8Pq9 .framer-4oe7ta { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 8px; position: relative; width: 1px; }", ".framer-K8Pq9 .framer-119u2ve-container, .framer-K8Pq9 .framer-lcmusp-container, .framer-K8Pq9 .framer-q4s6hk-container, .framer-K8Pq9 .framer-1ocmiac-container, .framer-K8Pq9 .framer-meyoi7-container, .framer-K8Pq9 .framer-1f9u8qu-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }", ".framer-K8Pq9 .framer-j9udqv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }", ".framer-K8Pq9 .framer-4jrir0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }", ".framer-K8Pq9 .framer-jcsl5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }", ".framer-K8Pq9 .framer-pu4s41 { bottom: 2px; flex: none; left: 2px; overflow: hidden; position: absolute; right: 2px; top: 2px; will-change: var(--framer-will-change-override, transform); z-index: 1; }", ".framer-K8Pq9.framer-v-1it5bz9 .framer-119u2ve-container, .framer-K8Pq9.framer-v-we4btc .framer-119u2ve-container { order: 0; }", ".framer-K8Pq9.framer-v-1it5bz9 .framer-lcmusp-container, .framer-K8Pq9.framer-v-we4btc .framer-lcmusp-container { order: 1; }", ".framer-K8Pq9.framer-v-1it5bz9 .framer-q4s6hk-container, .framer-K8Pq9.framer-v-we4btc .framer-q4s6hk-container { order: 2; }", ".framer-K8Pq9.framer-v-a1d2l.framer-hcx6xn, .framer-K8Pq9.framer-v-18l05i5.framer-hcx6xn, .framer-K8Pq9.framer-v-o8aj2p.framer-hcx6xn { max-width: 360px; width: 360px; }", ".framer-K8Pq9.framer-v-a1d2l .framer-4oe7ta, .framer-K8Pq9.framer-v-18l05i5 .framer-4oe7ta, .framer-K8Pq9.framer-v-o8aj2p .framer-4oe7ta { flex-direction: column; padding: 12px; }", ".framer-K8Pq9.framer-v-a1d2l .framer-119u2ve-container, .framer-K8Pq9.framer-v-a1d2l .framer-lcmusp-container, .framer-K8Pq9.framer-v-a1d2l .framer-q4s6hk-container, .framer-K8Pq9.framer-v-a1d2l .framer-meyoi7-container, .framer-K8Pq9.framer-v-a1d2l .framer-1f9u8qu-container, .framer-K8Pq9.framer-v-18l05i5 .framer-meyoi7-container, .framer-K8Pq9.framer-v-18l05i5 .framer-1f9u8qu-container, .framer-K8Pq9.framer-v-o8aj2p .framer-meyoi7-container, .framer-K8Pq9.framer-v-o8aj2p .framer-1f9u8qu-container { flex: none; width: 100%; }", ".framer-K8Pq9.framer-v-a1d2l .framer-jcsl5h, .framer-K8Pq9.framer-v-18l05i5 .framer-jcsl5h, .framer-K8Pq9.framer-v-o8aj2p .framer-jcsl5h { flex-direction: column; }", ".framer-K8Pq9.framer-v-18l05i5 .framer-119u2ve-container, .framer-K8Pq9.framer-v-o8aj2p .framer-119u2ve-container { flex: none; order: 0; width: 100%; }", ".framer-K8Pq9.framer-v-18l05i5 .framer-lcmusp-container, .framer-K8Pq9.framer-v-o8aj2p .framer-lcmusp-container { flex: none; order: 1; width: 100%; }", ".framer-K8Pq9.framer-v-18l05i5 .framer-q4s6hk-container, .framer-K8Pq9.framer-v-o8aj2p .framer-q4s6hk-container { flex: none; order: 2; width: 100%; }"];
var FramerQKVuepKnZ = withCSS4(Component4, css10, "framer-K8Pq9");
var QKVuepKnZ_default = FramerQKVuepKnZ;
FramerQKVuepKnZ.displayName = "Service Cards";
FramerQKVuepKnZ.defaultProps = { height: 928, width: 628 };
addPropertyControls4(FramerQKVuepKnZ, { variant: { options: ["D_DsXJjiI", "SGouu_TQA", "AbABClvOP", "P__RdykHw", "FV1pMBXWA", "us9ayQuDN"], optionTitles: ["Card1 Desktop", "Card2 Desktop", "Card3 Desktop", "Card1 Mobile", "Card2 Mobile", "Card3 Mobile"], title: "Variant", type: ControlType4.Enum } });
addFonts4(FramerQKVuepKnZ, [{ explicitInter: true, fonts: [] }, ...ServiceToggleFonts, ...ServiceCardFonts, ...SecondaryButtonFonts], { supportsExplicitInterCodegen: true });
var __FramerMetadata__ = { "exports": { "default": { "type": "reactComponent", "name": "FramerQKVuepKnZ", "slots": [], "annotations": { "framerDisplayContentsDiv": "false", "framerComponentViewportWidth": "true", "framerColorSyntax": "true", "framerIntrinsicWidth": "628", "framerIntrinsicHeight": "928", "framerImmutableVariables": "true", "framerCanvasComponentVariantDetails": '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"],"constraints":[null,"628px",null,null]},"SGouu_TQA":{"layout":["fixed","auto"],"constraints":[null,"628px",null,null]},"AbABClvOP":{"layout":["fixed","auto"],"constraints":[null,"628px",null,null]},"P__RdykHw":{"layout":["fixed","auto"],"constraints":[null,"360px",null,null]},"FV1pMBXWA":{"layout":["fixed","auto"],"constraints":[null,"360px",null,null]},"us9ayQuDN":{"layout":["fixed","auto"],"constraints":[null,"360px",null,null]}}}', "framerContractVersion": "1", "framerAutoSizeImages": "true" } }, "Props": { "type": "tsType", "annotations": { "framerContractVersion": "1" } }, "__FramerMetadata__": { "type": "variable" } } };
export {
  __FramerMetadata__,
  QKVuepKnZ_default as default
};
