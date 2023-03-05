/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, create(null));
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/bind-context.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/bind-context.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-well-known-symbol.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/define-well-known-symbol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");

var functionToString = Function.toString;

module.exports = shared('inspectSource', function (it) {
  return functionToString.call(it);
});


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : defineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names-external.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names-external.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var regexpExec = __webpack_require__(/*! ./regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__(/*! ./regexp-flags */ "./node_modules/core-js/internals/regexp-flags.js");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.4.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/sloppy-array-method.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/sloppy-array-method.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "./node_modules/core-js/internals/string-trim.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/string-trim.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol() == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/user-agent.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/user-agent.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-version.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/v8-version.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/internals/whitespaces.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/whitespaces.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/internals/wrapped-well-known-symbol.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/wrapped-well-known-symbol.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes;
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ "./node_modules/core-js/internals/not-a-regexp.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ "./node_modules/core-js/internals/correct-is-regexp-logic.js");

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__(/*! ../internals/string-multibyte */ "./node_modules/core-js/internals/string-multibyte.js").charAt;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.replace.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.replace.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ "./node_modules/core-js/internals/is-regexp.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ "./node_modules/core-js/internals/regexp-exec.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/forced-string-trim-method */ "./node_modules/core-js/internals/forced-string-trim-method.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.description.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.description.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var nativeObjectCreate = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternal = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var wrappedWellKnownSymbolModule = __webpack_require__(/*! ../internals/wrapped-well-known-symbol */ "./node_modules/core-js/internals/wrapped-well-known-symbol.js");
var defineWellKnownSymbol = __webpack_require__(/*! ../internals/define-well-known-symbol */ "./node_modules/core-js/internals/define-well-known-symbol.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = NATIVE_SYMBOL && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

if (!USE_SYMBOL_AS_UID) {
  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/js/db/db.json":
/*!***************************!*\
  !*** ./src/js/db/db.json ***!
  \***************************/
/*! exports provided: styles, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"styles\":[{\"1\":[\"Что такое тестирование?\",\" проверка соответствия между реальным и ожидаемым поведением.\",\"assets/voise/0qUs1.mp3\"],\"2\":[\"В чем заключается цель тестирования?\",\"Повысить вероятность того, что приложение, предназначенное для тестирования, будет работать правильно при любых обстоятельствах. _Повысить вероятность того, что приложение, будет соответствовать всем описанным требованиям. _Предоставление актуальной информации о состоянии продукта на данный момент.\",\"assets/voise/0qUs2.mp3\"],\"3\":[\"Гарантирует ли тестирование отсутствие багов в продукте?\",\"Тестирование может показать наличие дефектов в программе, но не доказать их отсутствие. _Тем не менее, важно составлять тест-кейсы, которые будут находить как можно больше багов. Таким образом, при должном тестовом покрытии, тестирование позволяет снизить вероятность наличия дефектов в программном обеспечении.\",\"assets/voise/0qUs3.mp3\",\"https://vc.ru/life/124461-principy-testirovaniya-primenenie-iskazheniya-i-illyuzii\"],\"4\":[\"Расскажите что такое Тест план? И по какой струкутре вы его выстриваете?\",\"это документ, описывающий весь объем работ по тестированию _Отвечает на вопросы: _ •Что мы тестируем? _• Когда? _ •Критерии начала/окончания тестирования. _• Окружение(environment) dev/staging/production? _ • Подходы/техники/инструменты/виды тестирования? _• Браузеры/версии/OS/разрешения экрана? _• Кто? Обязанности? Ресурсы? Обучение? _• Сроки? _• График? _• Стратегия тестирования. _•  Ссылки на документацию. \",\"assets/voise/0qUs4.mp3\"],\"5\":[\"В чем разница между багом и фичей?\",\"Фичей  называют дополнительную, специально придуманную (и, возможно, неочевидную) опцию программы. «багом» можно назвать любой сбой в работе ПО\",\"assets/voise/0qUs5.mp3\"],\"6\":[\"Как протестировать без ТЗ и спецификации?\",\"Информация разниться в разных источниках!  _Возможно ли тестировать без требований? где-то указывают что нет! Потому что именно они определяют, что должен представлять собой тот или иной продукт, и без них он фактически не может быть создан! _    но а как же Ad-hoc testing который не подразумевает никакой подготовки или планирования, здесь нет тестовых сценариев, как и какого-либо ожидания от результата. _Нет нужды разрабатывать и придерживаться какого-либо плана, или вести документацию, нет никаких тест-кейсов (правда, от этого могут возникнуть трудности с тем, чтобы воспроизвести ошибку – никаких планов и документов то нет)_   Преимущества ad-hoc testing _      • Все работает максимально быстро, нет надобности выполнять подготовку. _      • Основные и самые критичные баги находятся сразу же. _      • Новый тестер с таким подходом сможет легко и быстро освоить основные моменты, гораздо быстрее, чем в случае тест-кейсов.   _   Недостатки _ _      • Нет системного подхода, а значит вероятность обнаружения багов ниже, чем при спланированном подходе. _      • Нет системного подхода, а значит вероятность обнаружения багов ниже, чем при спланированном подходе. _      • Очень сложно воспроизвести условия возникновения бага. _      • Обязательно нужны общие знания о продукте, без них такое тестирование невозможно. _ • Сложно планировать ресурсы для тестирования, ведь непонятно, сколько времени и людей нужно, чтобы провести тесты. _ _Однако в любом случае необходимо понимать, кто будет пользоваться продуктом, как он должен выглядеть, из чего состоять и какими обладать функциями. Несмотря на то что эта информация не содержится в спецификациях, в ней как раз и заключены требования к ПО. Их источником служат не составленные по всей форме документы, а знания вашей команды, имеющиеся у заказчика представления, короткие разговоры за обедом, общепринятая практика, нормативно-правовые акты, то есть всё то, что порождает так называемые неявные требования \",\"assets/voise/0qUs6.mp3\"],\"7\":[\"Вы нашли баг, но разработчик говорит, что это фича. Что будете делать?\",\"Изначально перед отправкой баг-репорта стоит его обогатить скриншотами, логами или видео для избежания ситуации ответов от разраба <у разработчика все работает!> В дальнейшем при дискуссии стоит проанализировать данные, на которые опирается разработчик, уточнить об актуальности данной информации и дальше выстроить диалог, основываясь от полученной информации.\",\"assets/voise/0qUs7.mp3\"],\"8\":[\"Что такое неявные требования?\",\"Информацию о необходимом поведении, внешнем виде и свойствах системы, не внесенную в ТЗ и спецификации, а также не включенную в постановку задач, относят к неявным требованиям. Они могут проистекать из незадокументированных запросов от заказчика, законодательных актов и стандартов, устных договоренностей между членами команды разработчиков и даже их личного профессионального опыта. _       В число инструментов, призванных дополнить и структурировать существующую информацию о программном продукте, входит реестр неявных требований. Он представляет собой список всех связанных с системой фактов и ограничений, которые по какой-то причине не собраны в спецификацию.  _       Этот инструмент пригодится не только в тех случаях, когда техническая документация полностью отсутствует, но и в качестве дополнительного источника информации при наличии спецификаций. _     Такой документ создается в три этапа, подразумевающих формирование следующих перечней: _    • Реестр потенциальных источников неявных требований. _    • Реестр источников неявных требований к проекту. _    • Реестр неявных требований.\",\"assets/voise/0qUs8.mp3\",\"https://software-testing.ru/library/around-testing/requirements/3567-requirements\"],\"9\":[\"Из чего состоит процесс тестирования?\",\" 1) Анализ продукта _ 2) Работа с требованиями _ 3)Разработка тест-плана _ 4)Создание тестовой документации _5) Тестирование прототипа _ 6) Основное тестирование _7) Стабилизация _ 8) Эксплуатация\",\"assets/voise/0qUs9.mp3\"],\"10\":[\"Что такое Качество ПО\",\"это совокупность характеристик программного обеспечения, относящихся к его способности удовлетворять установленные и предполагаемые потребности.\",\"assets/voise/0qUs10.mp3\"],\"11\":[\"На каких этапах разработки ПО может проходить тестирование?\",\"В жизненном цикле ПО процесс тестирования в основном стоит за этапом разработки, перед эксплуатацией продукта пользователями. _ Но все зависит от модели разработки и подходов к тестрованию, есть подход left shift test (Тестирование со сдвигом влево) — это подход при котором тестирование выполняется на более ранних этапах жизненного цикла.\",\"assets/voise/0qUs11.mp3\"],\"12\":[\"Что такое тестовое покрытие?\",\"Тестовое покрытие — это плотность покрытия тестами выполняемого ПО или требований к нему. _Чем больше проверок будет создано, тем высшего уровня достигнет тестовое покрытие на любом проекте, стоит еще учитываь о качестве данных проверок. _Но, стоит понимать, что до полного покрытия дойти не выйдет, поскольку протестировать все 100% никогда не получится! _Оценка тестового покрытия содержит сразу несколько методологических подходов, а именно: _     • Покрытие требований; _    • Покрытие программного кода; \",\"assets/voise/0qUs12.mp3\",\"https://testmatick.com/ru/ponyatie-testovogo-pokrytiya/\"],\"13\":[\"Как вы узнаете, было ли создано достаточно тестов для тестирования продукта?\",\"во многих источниках указанно что нужно опираться на несколько показателей _  • Все 100% требований учтены. _  • Ожидаемое число дефектов обнаружено. _  •  Все дефекты, относящиеся к классу Show Stopper или Blocker, устранены, ни у одного из критических дефектов нет статуса «открытый». _   • Все дефекты с высоким приоритетом идентифицированы и исправлены. _   • Defect Rate (скорость дефектообразования) ниже установленного допустимого уровня. _  • Очень небольшое число дефектов среднего уровня критичности «открыты», их разбор проведен. _  • Число «открытых» дефектов среднего уровня, которые не влияют на пользование системой, очень небольшое. _   • Все дефекты с высоким уровнем приоритета закрыты и соответствующие регрессивные сценарии успешно проведены. _  Самый лучшиий вариант это построить матрицу соответствия требований, можно в виде таблицы или чек листа в котором можно отследить стадию завершения тесирования! _Самые частые критерии это _    • Время — В ходе тестирования могут находиться баги с разным приоритетом серьезности, попадаются баги блокеры, которые блокируют дальнейшее прохождение по тест кейсам, время на исправление и перепроверку багов может затянуться. _   • Бюджет — очень популярно на биржах фриланса, когда оплачиваются найденные баги в зависимости от количества и серьезности или оплачивается по количеству пройденных тест кейсов, также выделяется бюджет на написание самих тесткейсов. _    • Все тест кейсы пройдены, найденные баги исправлены и перепроверены — Для того чтобы протестировать приложение, тестировщик для начала должен ознакомиться с требованиями, функциональными спецификациями к приложению, если они конечно есть, или узнать со слов заказчика какое поведение должно быть при разных сценариях использования приложения или фитчи.\",\"assets/voise/0qUs13.mp3\"],\"14\":[\"Если нашли незначительную ошибку и рядом сидит разработчик и может ее быстро исправить, будете документировать или напрямую скажете разработчику исправь ее?\",\"Ошибку лучше зафиксировать в баг-трекинговой системе для дальнейшего отслеживания! _ При необхадимости информацию о данной ошибке при исправлении которой может сломаться другой функционал найдут и выстроят правиьную цепочку собыитий\",\"assets/voise/0qUs14.mp3\"],\"15\":[\"Что такое спецификация ПО?\",\"Спецификация (specifications) — это технический документ, который описывает функции и поведение приложения._ _Помогает получить четкое представление о продукте для его разработки и минимизировать сбои программного обеспечения _Спецификация — это документ с проанализированными требованиями\",\"assets/voise/0qUs15.mp3\",\"https://raznisa.ru/raznica-mezhdu-trebovaniyami-i-specifikaciej-v-razrabotke-programmnogo-obespecheniya/\"],\"16\":[\"Чем отличается Валидация от Верификации\",\"Верификация (verification)— оценка соответствия продукта требованиям (спецификации). _Отвечает на вопрос: “Система работает в соответствии с требованиями?”__Валидация (validation)— оценка соответствия продукта ожиданиям и требованиям пользователей. _Отвечает на вопрос: “Требования удовлетворяют ожидания пользователя?”\",\"assets/voise/0qUs16.mp3\"],\"17\":[\"Какие основные Уровни Тестирования вы знаете?\",\"1. Модульное тестирование (Unit Testing) Тестирование объектов, классов, функций и т.д., обычно выполняемое программистами. _2. Интеграционное тестирование (Integration Testing)- Тестирование взаимодействия между классами, функциями, модулями. Например интеграция система оплаты проезда в метро с помощью банковской карты. _3. Системное тестирование (System Testing) - Проверка как функциональных, так и не функциональных требований в системе. _4. Приемочное тестирование (Acceptance Testing)Проверка соответствия системы требованиям и проводится с целью определения: _ удовлетворяет ли система приемочным критериям; _в итоге приниматеся решения заказчиком или менеджером принимать приложение или нет.\",\"assets/voise/0qUs17.mp3\"],\"18\":[\"что такое Операционное тестирование\",\"Даже если система удовлетворяет всем требованиям, важно убедиться в том, что она удовлетворяет нуждам пользователя и выполняет свою роль в среде своей эксплуатации, как это было определено в бизнес моделе системы. Следует учесть, что и бизнес модель может содержать ошибки. Поэтому так важно провести операционное тестирование как финальный шаг валидации. Кроме этого, тестирование в среде эксплуатации позволяет выявить и нефункциональные проблемы, такие как: конфликт с другими системами, смежными в области бизнеса или в программных и электронных окружениях; недостаточная производительность системы в среде эксплуатации и др. Очевидно, что нахождение подобных вещей на стадии внедрения — критичная и дорогостоящая проблема. Поэтому так важно проведение не только верификации, но и валидации, с самых ранних этапов разработки ПО.\",\"assets/voise/0qUs18.mp3\"],\"19\":[\"Чем отличается sanity от smoke тестирования?\",\"В отличии от дымового (Smoke testing), санитарное тестирование (Sanity testing) направлено вглубь проверяемой функции, в то время как дымовое направлено вширь, для покрытия тестами как можно большего функционала в кратчайшие сроки.\",\"assets/voise/0qUs19.mp3\"],\"20\":[\"Как тестировщик может понять, что баг исправлен?\",\"пройти тест кейс повторно, сделать retest\",\"assets/voise/0qUs20.mp3\"],\"21\":[\"Чем отличается тестирование черного ящика от тестирования белого ящика?\",\"В тестировании черного ящика мы находимся в тех же условиях что и пользователи, не имея документации или любой другой информации как часть команд разработки, в тестировании белого ящика у нас есть доступ ко всем возможным аспектам и ветвя разработки ПО\",\"assets/voise/0qUs21.mp3\"],\"22\":[\"Что такое тест-дизайн и для чего он нужен?\",\"Это этап процесса тестирования ПО, на котором проектируются и создаются тестовые случаи (тест кейсы), в соответствии с определёнными ранее критериями качества и целями тестирования. Роли, ответственные за тест дизайн: • Тест аналитик — определяет «ЧТО тестировать?» • Тест дизайнер — определяет «КАК тестировать?»\",\"assets/voise/0qUs22.mp3\"],\"23\":[\"Что такое обеспечение качества (QA) и Что такое контроль качества (QC)?!\",\"Контроль качества (Quality Control) – это совокупность действий, проводимых над продуктом в процессе разработки, для получения информации о его актуальном состоянии в разрезах: «готовность продукта к выпуску», «соответствие зафиксированным требованиям», «соответствие заявленному уровню качества продукта». _Обеспечение качества (Quality Assurance) - это совокупность мероприятий, охватывающих все технологические этапы разработки, выпуска и эксплуатации программного обеспечения (ПО) информационных систем, предпринимаемых на разных стадиях жизненного цикла ПО, для обеспечения требуемого уровня качества выпускаемого продукта.    \",\"assets/voise/0qUs23.mp3\"],\"24\":[\"Что такое модель зрелости тестирования\",\"TMM основан на модели зрелости возможностей (CMM — Capability Maturity Model). Это подробная модель для улучшения процесса тестирования. Она может быть дополнена любой моделью улучшения процесса или может использоваться как одиночная модель. Модель ТММ имеет два основных компонента: _Набор из 5 уровней, которые определяют возможности тестирования (testing capability) Модель оценки (An Assessment Model) Пять уровней TMM помогают организации определить зрелость своего процесса и определить следующие шаги по улучшению, которые необходимы для достижения более высокого уровня зрелости тестирования. _Уровень 1. Начальный. ПО должно успешно работать На этом уровне области процессов не определены Цель тестирования — убедиться, что ПО работает нормальноНа этом уровне не хватает ресурсов, инструментов и обученного персонала.Нет проверки качества перед поставкой ПО _Уровень 2. Определенный. Разработка целей и политик тестирования и отладки.Этот уровень отличает тестирование от отладки, и они считаются различными действиями Этап тестирования наступает после кодирования Основная цель тестирования — показать, что ПО соответствует спецификации.Основные методы и методики тестирования _Уровень 3: Комплексный. Интеграция тестирования в жизненный цикл ПО. Тестирование интегрируется в весь жизненный цикл. На основании требований определяются цели испытаний Структура тестирования существует Тестирование на уровне профессиональной деятельности _Уровень 4: Управление и измерение. Создание программы тестовых измерений. Тестирование — это измеренный и количественный процесс Проверка на всех этапах разработки признается как тестирование Для повторного использования и регрессионного тестирования есть Test case и они записаны в базу тестов. Дефекты регистрируются и получают уровни серьезности _Уровень 5: Оптимизированный. Оптимизация процесса тестирования.Тестирование управляется и определено Эффективность и стоимость тестирования можно отслеживать Тестирование может постоянно настраиваться и улучшаться Практика контроля качества и предотвращения дефектов Практикуется процесс повторного использования (Reuse)Метрики, связанные с тестированием, также имеют средства поддержки Инструменты обеспечивают поддержку разработки тестовых наборов и сбора дефектов\",\"assets/voise/0qUs24.mp3\"],\"25\":[\"Какие Принципы тестирования вы знаете ?\",\"1. Тестирование демонстрирует наличие дефектов _ Тестирование может показать, что дефекты присутствуют, но не может доказать, что их нет _2. Исчерпывающее тестирование недостижимо _Полное тестирование с использованием всех комбинаций вводов и предусловий физически невыполнимо, за исключением тривиальных случаев. _3. Раннее тестирование _Чтобы найти дефекты как можно раньше, активности по тестированию должны быть начаты как можно раньше в жизненном цикле разработки. _4. Скопление дефектов _Как правило, большая часть дефектов, обнаруженных при тестировании, содержится в небольшом количестве модулей. _5. Парадокс пестицида _Если одни и те же тесты будут прогоняться много раз, в конечном счете этот набор тестовых сценариев больше не будет находить новых дефектов. _6. Тестирование зависит от контекста _Тестирование выполняется по-разному в зависимости от контекста. _7. Заблуждение об отсутствии ошибок _Обнаружение и исправление дефектов не помогут, если созданная система не подходит пользователю и не удовлетворяет его ожиданиям и потребностям.\",\"assets/voise/0qUs25.mp3\"],\"26\":[\"Чем отличается тест-кейс от баг-репорта?\",\"В баг репорте пишется фактический результат а в тест кейсе нет!\",\"assets/voise/0qUs26.mp3\"],\"27\":[\"расскажите про градацию Severity (Серьезность)?\",\" • Блокирующая (Blocker) - Блокирующая ошибка, приводящая приложение в нерабочее состояние, в результате которого дальнейшая работа с тестируемой системой или ее ключевыми функциями становится невозможна. Решение проблемы необходимо для дальнейшего функционирования системы. _ • Критическая (Critical) -Критическая ошибка, неправильно работающая ключевая бизнес логика, дыра в системе безопасности, проблема, приведшая к временному падению сервера или приводящая в нерабочее состояние некоторую часть системы, без возможности решения проблемы, используя другие входные точки. _ • Значительная (Major) -Значительная ошибка, часть основной бизнес логики работает некорректно. Ошибка не критична или есть возможность для работы с тестируемой функцией, используя другие входные точки. _ • Незначительная (Minor) - Незначительная ошибка, не нарушающая бизнес логику тестируемой части приложения, очевидная проблема пользовательского интерфейса. _ • Тривиальная (Trivial) - Тривиальная ошибка, не касающаяся бизнес логики приложения, плохо воспроизводимая проблема, малозаметная посредствам пользовательского интерфейса, проблема сторонних библиотек или сервисов, проблема, не оказывающая никакого влияния на общее качество продукта.\",\"assets/voise/0qUs27.mp3\"],\"28\":[\"что такое Фокус-тест\",\"Тестирование, проводимое с целью получения первичной реакции игроков. Необходимо для оценки удобства использования и того, как продукт принимается целевой аудиторией или сторонними людьми.\",\"assets/voise/0qUs28.mp3\"],\"29\":[\"Чем отличается тест-кейс от чек-листа?\",\"Если коротко, то Чек- лист — это просто список того, что нужно проверить. _Не коротко Тест-кейс — подборный план того, как именно мы будем это проверять, чек-лист это документ, описывающий что должно быть протестировано. При этом чек-лист может быть абсолютно разного уровня детализации. На сколько детальным будет чек-лист зависит от требований к отчетности, уровня знания продукта сотрудниками и сложности продукта. Чек-лист менее формализован чем тест-кейс. .\",\"assets/voise/0qUs29.mp3\"],\"30\":[\"дайте определения тест-кейса! Какие основные поля содержит тест-кейс? Без чего текст-кейсы уже не будет тест-кейсом? речь об основных полях .\",\"Test Case — это документ, описывающий совокупность шагов, конкретных условий и параметров, необходимых для проверки тестируемой функции. _Тест кейс состоит из: _ID (идентификатор) _Title (название) _Type (тип) _Priority (приоритет) _Preconditions (предусловия) _Steps (шаги) _Expected Result (ожидаемый результат) _Post conditions (пост условия) - например очистка данных или возвращение системы в первоначальное состояние. _ Тест кейс без шагов и заголовка уже не тест-кейс\",\"assets/voise/0qUs30.mp3\"],\"31\":[\"Всегда ли нужны тест-кейсы? Обращу внимание, что тут нужно перечислить случае, в которых они не нужны.\",\"Обычно при работе с простыми системами — сайтами, мобильными приложениями и т. д. — нет необходимости в тест-кейсах. Часто в команде бывает только один-два тестировщика, которые хорошо знают свой продукт. В таком случае время, потраченное на создание и поддержку тест-кейсов, никогда не окупится. Лучше создать чеклист со списком функций, которые нужно проверить — это будет более рационально.\",\"assets/voise/0qUs31.mp3\"],\"32\":[\"что такое Требования и по каким принципам нужно проверять Требования ?\",\"  Требования - это спецификация (описание) того, что должно быть реализовано. _Требования описывают то, что необходимо реализовать, без детализации технической стороны решения. Что, а не как. _Требования к требованиям: _1)корректность _2)недвусмысленность _3)полнота _4)непротиворечивость _5)упорядоченность по важности и стабильности _6)проверяемость (тестопригодность) _7)модифицируемость _8)трассируемость _9)понимаемость\",\"assets/voise/0qUs32.mp3\"],\"33\":[\"Классы эквивалентности используются только вместе с граничными значениями или можно применить их отдельно?\",\"Бывают ситуаци когда с классом эквивалентности нельзя применить граничные значение _Пример: есть опции у машин:  _<зимнего пакета>_   Подогрев сидений. _   Подогрев руля. _    Подогрев лобового и заднего стекла. _    Подогрев форсунок стеклоомывателя _    Подогрев боковых зеркал. _<электронные помощники> _Парктроник _Передние и задние датчики системы ParkPilot _контроль слепых зон _ и т.д. _Это две классы эквивалентности но о каких граничных значениях может итди речь ? Пример придумал я по этому :3\",\"assets/voise/0qUs33.mp3\"],\"34\":[\"Тебе пришла задача в тестирование. Как будешь оценивать время на проверку?\",\"Слишком размытая формулировака есть только перечень действий для такой ситауции отталкиваться от количества тестовых сценариев.Я предпочитаю рассчитывать именно так._1) Оцениваем объемы задачи._2) Прикидываем примерное количество-кейсов (проверок) на данную задачу._3) Умножаем кол-во на примерное среднее время прохождение кейсов (для веба это в районе 4х минут, дальше зависит от специфики отрасли)._4) Закладываем риски в 0.66 от оценки\",\"assets/voise/0qUs34.mp3\"],\"35\":[\"раскажите про Жизненный цикл бага\",\"1) Баг создан_2) Назначен на разработчика _3) Приоритизирован _4) Взят в работу _5) Исправлен _6) Тестируется (retest) - если не исправлен то в обратно в пункт 2 _7) Закрыт\",\"assets/voise/0qUs35.mp3\"],\"36\":[\"Как вы будете тестировать карандаш/чайник/чашку/лифт…?\",\"С таким вопросами только на ...\",\"assets/voise/0qUs36.mp3\"],\"37\":[\"Что такое тест кейс?\",\"это артефакт, описывающий совокупность шагов, конкретных условий и параметров, необходимых для проверки реализации тестируемой функции или её части.\",\"assets/voise/0qUs37.mp3\"],\"38\":[\"Что такое тестирование API?\",\"Тестирование API — это тип тестирования программного обеспечения, при котором анализируется интерфейс прикладной программы (API), чтобы убедиться, что он соответствует ожидаемой функциональности, безопасности, производительности и надежности. Тесты выполняются непосредственно в API и в рамках интеграционного тестирования. _При тестировании API фокусируются на анализе бизнес-логики, а также безопасности откликов приложений и данных. Тест API обычно выполняется путем отправки запросов к одной или нескольким конечным точкам API и сравнения ответа с ожидаемыми результатами. _Тестирование API считается критически важным для автоматизации тестирования, потому что API — основной интерфейс логики приложения, и поскольку тесты GUI трудно поддерживать с короткими циклами выпуска и частыми изменениями при гибкой разработке программного обеспечения и использовании подходов DevOp\",\"assets/voise/0qUs38.mp3\"],\"39\":[\"Приведите примеры интеграции через API.\",\"системы бронирования билетов, например, Aviasales. Пользователи ожидают, что самые дешевые варианты перелетов на определенные даты будут доступны и показаны им по запросу. Это требует, чтобы приложение связывалось со всеми авиакомпаниями, чтобы найти наилучшие варианты перелета — это делается через API. В данном случае необходимо выполнить тесты API, чтобы убедиться, что система бронирования билетов успешно взаимодействует с другими компаниями и предоставляет пользователям правильные результаты в соответствующие сроки. Кроме того, если пользователь бронирует рейс и оплачивает его с помощью стороннего платежного сервиса, то должны быть выполнены тесты API, чтобы гарантировать, что платежный сервис и системы бронирования путешествий могут эффективно взаимодействовать, обрабатывать платеж и сохранять конфиденциальные данные пользователя в безопасности.\",\"assets/voise/0qUs39.mp3\",\"https://logrocon.ru/news/api_testing\"],\"40\":[\"В чем разница между SOAP и REST?\",\"REST и SOAP на самом деле не сопоставимы. REST — это архитектурный стиль. SOAP — это формат обмена сообщениями. _Есть сылка чтобы изучить подробннее\",\"assets/voise/0qUs40.mp3\",\"https://habr.com/ru/post/483204/\"],\"41\":[\"Перечислите ключевые элементы HTTP-запроса! У метода Get есть тело запроса ? \",\"url, _методы,_загаловки запроса, _тело запроса ! GET-запросы могут иметь тело. Большинство реализаций проигнорируют его или отклонят запрос. Но даже если сервер, предоставляющий ваш API, разрешает тело, вы не можете его использовать браузеры его отклонят\",\"assets/voise/0qUs41.mp3\"],\"42\":[\"Может ли у ПО быть сразу несколько баз данных?\",\"Если вопрос в возможности то да может, но возникнут проблемы с оптимизацией\",\"assets/voise/0qUs42.mp3\"],\"43\":[\"Что такое реляционная база данных?\",\"Реляционные базы данных представляют собой базы данных, которые используются для хранения и предоставления доступа к взаимосвязанным элементам информации. _Реляционные базы данных основаны на реляционной модели — интуитивно понятном, наглядном табличном способе представления данных. _Каждая строка, содержащая в таблице такой базы данных, представляет собой запись с уникальным идентификатором, который называют ключом. Столбцы таблицы имеют атрибуты данных, а каждая запись обычно содержит значение для каждого атрибута, что дает возможность легко устанавливать взаимосвязь между элементами данных.\",\"assets/voise/0qUs43.mp3\"],\"44\":[\"Приведите несколько примеров, которые объясняют критерии входа для тестирования ПО.\",\"• все дефекты, которые относятся к ранним стадиям проектирования закрыты и проверены;_   • Код проверенный с помощью осуществления «Unit» тестов;_   • Основные функциональные возможности ПО готовы для тестирования;_  • Имеется документация, которая определяет требования;_   • Все тестировщики ознакомлены с архитектурой ПО;_    • Все тестировщики ознакомлены с целями проекта; _   • Готова среда тестирования;_доступные для использования билды;_   • Утверждены план тестирования и/или тестовые случаи.\",\"assets/voise/0qUs44.mp3\"],\"45\":[\"Всегда ли нужна автоматизация?\",\"Автотесты не являются подходящей альтернативой: _    • если сценарии тестов новые и не тестировались вручную _   • если тесты требуют постоянных изменений и в случае _    • если запустить сценарий тестирования нужно только один раз.\",\"assets/voise/0qUs45.mp3\"],\"46\":[\"Приведите несколько причин, которые приводят к багам в ПО.\",\"человеческие ошибки (процесс проектирования и процесс реализации); _изменение требований в то время как ПО под испытанием; _непонимание требований и спецификаций;_отсутствие времени;_плохая приоритизация тестирования;_плохая ориентация в версиях ПО;_сложность самого ПО.\",\"assets/voise/0qUs46.mp3\"],\"47\":[\"чем отличаются между собой дефект,эрор, Баг и сбой \",\" _ • Дефект (он же баг)— это несоответствие фактического результата ожидаемому результату, описанному в требованиях. _ • Error— ошибка пользователя, то есть он пытается использовать программу иным способом. _Пример — вводит буквы в поля, где требуется вводить цифры (возраст, количество товара и т.п.). _ • Bug (defect) — ошибка программиста (или другого члена команды), то есть когда в программе, что-то идёт не так как планировалось и программа выходит из-под контроля. _      Например, когда никак не контролируется ввод пользователя, в результате неверные данные вызывают краши или иные проблемы в работе программы. Либо внутри программа построена так, что изначально не соответствует тому, что от неё ожидается. _ • Failure — сбой (причём необязательно аппаратный) в работе компонента, всей программы или системы. _То есть, существуют такие дефекты, которые приводят к сбоям. И существуют такие, которые не приводят. UI-дефекты например. Но аппаратный сбой, никак не связанный с software, тоже является failure.  \",\"assets/voise/0qUs47.mp3\"],\"48\":[\"Тестирование локализации\",\"тестирование, направленное на проверку корректности и качества адаптации продукта к использованию на том или ином языке с учётом национальных и культурных особенностей.\",\"assets/voise/0qUs48.mp3\"],\"49\":[\"Почему вы решили стать тестировщиком?\",\"Если бы ты жил в Китае и задвал бы такие же вопросы,тебя бы звали Кон-Чен-Ый\",\"assets/voise/0qUs49.mp3\"],\"50\":[\"Почему хотите работать именно у нас?\",\"\",\"assets/voise/0qUs50.mp3\"],\"51\":[\"Кем вы видите себя через 5 лет?\",\"профессионалом своего дела среди единомышленников\",\"assets/voise/0qUs51.mp3\"],\"52\":[\"Что такое тестирование серого ящика?\",\"Тестирование серого ящика предусматривает частичную осведомленность о внутренних процессах. Данный метод - это комбинация тестирования белого и черного ящиков. Специалист стремится найти все проблемы функционирования и ошибки в коде. На этой стадии тестировщик может реализовать сквозной тест.\",\"assets/voise/0qUs52.mp3\"],\"53\":[\"что такое Позитивное тестирование?\",\"Позитивное тестирование помогает убедиться в том, что приложение функционирует должным образом и позволяет проверить, работает ли система в нормальных условиях так, как задумывалось\",\"assets/voise/0qUs53.mp3\"],\"54\":[\"что такое Негативное тестирование?\",\" это тип тестирования ПО, направленный на проверку того, что система или приложение ведут себя должным образом в негативных ситуациях, то есть, когда они получают недопустимые или неожиданные входные данные.\",\"assets/voise/0qUs54.mp3\"],\"55\":[\"зачем проводят Повторное тестирование ?\",\"Чтобы проверить, что тестовые сценарии, не прошедшие во время последнего прогона тестов, работают после исправления дефектов\",\"assets/voise/0qUs55.mp3\"],\"56\":[\"что такое сравнительное тестирование?\",\"тестирование, направленное на сравнительный анализ преимуществ и недостатков разрабатываемого продукта по отношению к его основным конкурентам.\",\"assets/voise/0qUs56.mp3\"],\"57\":[\"что такое UX и UI ? в чем их разница\",\"(  User eXperience — опыт пользователя — ощущение, испытываемое пользователем во время использования цифрового продукта. _ User Interface — пользовательский интерфейс — это инструмент, позволяющий осуществлять взаимодействие «пользователь — приложение».\",\"assets/voise/0qUs57.mp3\"],\"58\":[\"что такое Дымовое тестирование?\",\"короткий цикл тестов для подтверждения, что после сборки кода (нового или исправленного) приложение стартует и выполняет основные функции.\",\"assets/voise/0qUs58.mp3\"],\"59\":[\"Чем отличается Exploratory vs Ad-hoc testing ?\",\"Исследовательское тестирование (exploratory testing) - это одновременное изучение системы, проектирование тестов (тест дизайн) и тестирование. _ Данная техника базируется на опыте тестировщика (experience based). _Ad-hoc тестирование - это особый вид тестирования, не предполагающий никакой подготовки или планирования, здесь нет тестовых сценариев, как и какого-либо ожидания от результата. \",\"assets/voise/0qUs59.mp3\",\"https://www.careerist.com/ru-insights/intuitivnoe-testirovanie-ad-hoc-testing#:~:text=%D0%A7%D1%82%D0%BE%20%D1%8D%D1%82%D0%BE%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%2C%20%D0%BA%D0%B0%D0%BA%D0%B8%D0%B5%20%D0%B5%D1%81%D1%82%D1%8C,%D0%BA%D0%B0%D0%BA%D0%BE%D0%B3%D0%BE%2D%D0%BB%D0%B8%D0%B1%D0%BE%20%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%82%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B0.\"]},{\"1\":[\"Что такое тестирование?\",\" (тестирование ПО) - является одной из техник контроля качества и включает в себя активности:_по планированию работ(Test Management),_проектированию тестов(Test Design), _выполнению тестирования (Test Execution) _ анализу полученных результатов (Test Analysis).\",\"assets/voise/0qUs1.mp3\"],\"2\":[\"Зачем тестировать ПО?\",\"1)Это повысит вероятность того, что приложение: _ • будет соответствовать всем описанным требованиям. _ • будет работать правильно при любых обстоятельствах. _2) И это предоставит актуальную информации о состоянии продукта на данный момент.\",\"assets/voise/1qUs2.mp3\"],\"3\":[\"Какие существуют этапы тестирования?\",\"_1. Анализ продукта _2. Работа с требованиями _3. Разработка стратегии тестирования и планирование процедур контроля качества _4. Создание тестовой документации _5. Тестирование прототипа _6. Основное тестирование _7. Стабилизация _8. Эксплуатация\",\"assets/voise/1qUs3.mp3\"],\"4\":[\"Что такое статическое и динамическое тестирование?\",\"Статическое тестирование отличается от динамического тем, что производится без запуска программного кода продукта. Тестирование осуществляется путем анализа программного кода (code review) или скомпилированного кода.\",\"assets/voise/1qUs4.mp3\"],\"5\":[\"Какие уровни тестирования знаете?\",\"1. Модульное тестирование (Unit Testing) _2. Интеграционное тестирование (Integration Testing) _3. Системное тестирование (System Testing) _4. Операционное тестирование (Release Testing) _5. Приемочное тестирование (Acceptance Testing)\",\"assets/voise/1qUs5.mp3\"],\"6\":[\"Какие техники тест-дизайна знаете?\",\"1. Эквивалентное разделение (Equivalence Partitioning — EP) _2. Анализ граничных значений (Boundary Value Analysis - BVA) _3. Причина / Следствие (Cause / Effect - CE) _4. Предугадывание ошибки (Error Guessing - EG) _5. Исчерпывающее тестирование (Exhaustive Testing - ET) _6.Диаграмма (граф) состояний-переходов (State Transition diagram) _7. Пользовательский сценарий (Use case) _8 Попарное тестирование (Pairwise Testing)\",\"assets/voise/1qUs6.mp3\"],\"7\":[\"Что такое техника анализа классов эквивалентности?\",\"это разделение диапазона возможных вводимых значений на группы эквивалентных по своему влиянию на систему. Эта техника помогает не только сокращать количество тестов, но и сохранять приемлемое тестовое покрытие.\",\"assets/voise/1qUs7.mp3\"],\"8\":[\"Что такое техника анализа граничных значений? В чем ценность этой техники?\",\" значения диапазона входных данных, при которых меняется поведение приложения. Это соседние значения диапазона, но относящиеся к разным эквивалентным классам.\",\"assets/voise/1qUs8.mp3\"],\"9\":[\"Что такое Регрессионное и Confirmation (Подтверждающее ) тестирование, какая между ними разница?\",\"Проводится регрессионное тестирование AUT тогда, когда нужно убедиться что новые (добавленные) функции приложения / исправленные дефекты не оказали влияния на текущую, уже существующую функциональность, работавшую (и протестированную) ранее. _Подтверждающее тестирование (Confirmation Testing) Тестирование, при котором выполняются тестовые сценарии, которые были не пройдены при последнем запуске, с целью подтвердить успешность исправлений. (retest)\",\"assets/voise/1qUs9.mp3\"],\"10\":[\"Что такое Верификация? и Что такое Валидация?\",\" Верификация - процесс оценки соответствия продукта явным требованиям (спецификациям). _Валидация Оценка соответствия продукта ожиданиям и требованиям пользователей.\",\"assets/voise/1qUs10.mp3\"],\"11\":[\"Расскажите про жизненный цикл разработки ПО\",\"1) Идея  _2) Сбор и анализ требований  _3) Документирование требований  _4) Дизайн  _5)Разработка _6) Тестирование _7) Внедрение/развертывание _8) Поддержка (Maintenance) \",\"assets/voise/1qUs11.mp3\"],\"12\":[\"Что такое Configuration Testing?\",\"конфигурационное тестирование (Configuration Testing) – специальный вид тестирования, направленный на проверку работы программного обеспечения при различных конфигурациях системы (заявленных платформах, поддерживаемых драйверах, при различных конфигурациях компьютеров и т. _Цель Тестирования: определить оптимальную конфигурацию оборудования, обеспечивающую требуемые характеристики производительности и времени реакции тестируемой системы. \",\"assets/voise/1qUs12.mp3\",\"http://www.protesting.ru/testing/types/configuration.html\"],\"13\":[\"Что такое Exploratory Testing?\",\"Это вид тестирования, при котором мы одновременно и тестируем, и придумываем тест, опираясь на поведение продукта _Зачем вообще проводить тест таким способом? Причин может быть несколько: _ • пока еще нет готовых тестов (например, продукт новый); _ • результат нужен побыстрее; _ • хотим подстраховаться — проверить и готовыми тестами, и новыми. _4 характеристики исследовательского тестирования _ 1) Параллельное планирование, создание и выполнение в процессе работы. 2) Гибкость в тестировании — тест без определенного сценария. 3) Возможность отклонения от сценария  в любом направлении. _4)Высокая скорость начала тестирования (начинаем тестировать сразу, как получаем задачу — план составлять не нужно).\",\"assets/voise/1qUs13.mp3\",\"https://qaschool.ru/blog/issledovatelskoe-testirovanie-osnovnye-harakteristiki-tipy-i-otlichiya-ot-skriptovogo/#:~:text=%D0%A7%D1%82%D0%BE%20%D0%B6%D0%B5%20%D1%82%D0%B0%D0%BA%D0%BE%D0%B5%20%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5,%D1%82%D0%B5%D1%81%D1%82%2C%20%D0%BE%D0%BF%D0%B8%D1%80%D0%B0%D1%8F%D1%81%D1%8C%20%D0%BD%D0%B0%20%D0%BF%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B0.\"],\"14\":[\"Какие существуют UI-стандарты?\",\"Я предпологаю что речь идет о гайдлайнах _Гайдлайн — это свод правил использования фирменного стиля бренда. _Этот документ необходим, чтобы сохранить единый образ,_ _ Гайдлайн — это руководство по использованию фирменного стиля или по другому то это свод правил использования фирменного стиля бренда. Многие часто путают этот документ с брендбуком. Их основное отличие в том, что в брендбуке, помимо рекомендаций по визуальным атрибутам, содержится ещё и платформа бренда —  философия, ценности, характер и позиционирование ТМ. Другими словами, гайдлайн является частью брендбука. Это внутрикорпоративный документ, полезный дизайнерам, маркетологам, директорам и практически каждому, кто влияет на реализацию визуальной стратегии бренда. _Гайдлайн: _Помогает исключить разрыв бренда. _Упрощает сотрудничество со сторонними агентствами и специалистами._Повышает узнаваемость и сохраняет идентичность ТМ. _Сохраняет визуальный образ при расширении бизнеса по франчайзинговой модели. _Помогает с ребрендингом при сохранении преемственности фирменному стилю. _Гайдлайн — это не просто правила использования фирменного стиля, это целая дизайн-система. Визуальный язык бренда и его техническое отражение в виде макетов, шаблонов, готовых решений в одном документе._Google Material Design для Android - https://m2.material.io/design/guidelines-overview _ Human Interface Guidlines для ios -https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/   __ или тут речь про совсем другое https://habr.com/ru/post/12778/ \",\"assets/voise/1qUs14.mp3\"],\"15\":[\"Что такое Black/Grey/White Box Testing?\",\"Это методы тестирования которые дают понять насколько глубоко можно погрузить в технические аспекты продукта, доступ к Базе данных, к коду продукта, документации: _черный ящик определяет отсутствие доступа к любой внутренний информации! _Белый ящик предполагает что мы имеем доступ к любой информации продукта, это внутренняя информация которая побудит тестировщика сделать дополнительные проверки зная архитектуру и другие нюансы ПО! _серый ящик трактуется в каждой компании по своему, но в целом это когда есть доступ к данным доступ к которым нет у обычных пользователей, на пример есть доступ к базе данных, это не белый ящик где имеем полный доступ ко всему, но и не черный! \",\"assets/voise/1qUs15.mp3\"],\"16\":[\"Что такое Performance Testing?\",\"Тестирование производительности - это набор типов тестирования, направленных на воссоздание пользовательских запросов в системе и сравнение ожидаемых результатов с полученными показателями, а также определение скорости процедур, стабильности, надежности и масштабируемости системы в целом. Полученные результаты позволяют обнаруживать уязвимости с пропускной способностью приложения, временем загрузки, обработкой больших объемов данных и предотвращением их использования в приложении. _Эффективность тестирования_Когда вы игнорируете тестирование производительности перед запуском продукта, предприятия теряют большое количество пользователей и вынуждены тратить значительные средства на дальнейшее исправление ошибок. Чтобы избежать рисков приложения, необходимо проверить следующие факторы: _ Время отклика системы _Неожиданные условия нагрузки _Системная масштабируемость _Пользовательские нагрузки Spike _Стабильность системы _Уровень пропускной способности _Оптимизируйте производительность\",\"assets/voise/1qUs16.mp3\",\"https://www.start-it.ua/post/%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D1%81%D1%82%D0%B8-performance-testing-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D0%B8\"],\"17\":[\"Какие бывают требования?\",\"Явные и не явные, фукнциональные и не фукнциональные\",\"assets/voise/1qUs17.mp3\"],\"18\":[\"Что такое Traceability Matrix (Матрица соответствия требований)?\",\"Это двумерная таблица, содержащая соответсвие функциональных требований (functional requirements) продукта и подготовленных тестовых сценариев (test cases). В заголовках колонок таблицы расположены требования, а в заголовках строк — тестовые сценарии. На пересечении — отметка, означающая, что требование текущей колонки покрыто тестовым сценарием текущей строки. Матрица соответсвия требований используется QA-инженерами для валидации покрытия продукта тестами. МСТ является неотъемлемой частью тест-плана.\",\"assets/voise/1qUs18.mp3\"],\"19\":[\"Какие виды тестирования связаны с изменениями?\",\"1. Дымовое тестирование (Smoke Testing) _2. Регрессионное тестирование (Regression Testing) _3. Повторное тестирование (Re-testing) _4. Тестирование сборки (Build Verification Testing) _5. Санитарное тестирование (Sanity Testing)\",\"assets/voise/1qUs19.mp3\"],\"20\":[\"Что такое End-to-End тест?\",\"Сквозное тестирование (End-to-end, E2E, Chain testing) — это вид тестирования, используемый для проверки программного обеспечения от начала до конца, а также его интеграцию с внешними интерфейсами. Цель сквозного тестирования состоит в проверке всего программного обеспечения на предмет зависимостей, целостности данных и связи с другими системами, интерфейсами и базами данных для проверки успешного выполнения полного производственного сценария _Наряду с программной системой тестирование также обеспечивает проверку пакетной обработки и обработки данных из других вышестоящих и нижестоящих систем. Отсюда и название «End-to-End». Сквозное тестирование обычно проводится после функционального и системного тестирования. Для его проведения используются реальные данные и тестовая среда для имитации рабочего режима. _Зачем нужно сквозное тестирование? _Сквозное тестирование проверяет весь системный флоу(поток) и повышает уверенность за счет своевременного обнаружения проблем и увеличения покрытия тестами подсистем. Современные системы ПО сложны и взаимосвязаны с большим количеством подсистем, которые могут существенно отличаться от существующих систем. Вся система может разрушиться из-за отказа любой подсистемы, что представляет собой серьезный риск. Этого риска мы как раз и стремимся избежать с помощью сквозного тестирования._Инструмент сквозного тестирования _testRigor _В мире сквозного тестирования лидером отрасли является testRigor. Он помогает создавать тесты без кода для веб-интерфейса, нативных и гибридных мобильных приложений, мобильных браузеров и API. С его помощью можно тестировать электронную почту и SMS, загруженные файлы .XLS, .DOC, .PDF и т. д.  _Сквозное тестирование vs системное тестирование _Сквозное тестирование _1)Проверяет программную систему, а также взаимосвязанные подсистемы. _2) Проверяет весь сквозной поток процессов. 3) Для тестирования рассматриваются все интерфейсы и серверные системы. 4) Выполняется после завершения тестирования системы. 5) Сквозное тестирование включает в себя проверку внешних интерфейсов, которую сложно автоматизировать. Следовательно, ручное тестирование предпочтительнее. _Системное тестирование_ 1) Проверяет только программную систему в соответствии со спецификациями требований. 2) Проверяет функциональные возможности и функции системы.3) Рассматриваются функциональное и нефункциональное тестирование 4) Выполняется после интеграционного тестирования. 5) Для тестирования системы можно выполнять как ручное, так и автоматизированное тестирование. _ _  Самая большая трудность при этом типе тестирования состоит в том, что необходимо располагать достаточным количеством информации о всей системе, а также о взаимосвязанных подсистемах. \",\"assets/voise/1qUs20.mp3\"],\"21\":[\"Что такое тестирование безопасности?\",\"это стратегия тестирования, используемая для проверки безопасности системы, а также для анализа рисков, связанных с обеспечением целостного подхода к защите приложения, атак хакеров, вирусов, несанкционированного доступа к конфиденциальным данным. _ Принципы безопасности программного обеспечения _Общая стратегия безопасности основывается на трех основных принципах: _ _1. Конфиденциальность - это сокрытие определенных ресурсов или информации. _Под конфиденциальностью можно понимать ограничение доступа к ресурсу некоторой категории пользователей, или другими словами, при каких условиях пользователь может получить доступ к данному ресурсу. _ _ 2.  Целостность - Существует два основных критерия при определении понятия целостности:_  • Доверие. Ожидается, что ресурс будет изменен только соответствующим способом определенной группой пользователей. _ • Повреждение и восстановление. В случае когда данные повреждаются или неправильно меняются авторизованным или не авторизованным пользователем, вы должны определить на сколько важной является процедура восстановления данных. _  _3.доступность -Доступность представляет собой требования о том, что ресурсы должны быть доступны авторизованному пользователю, внутреннему объекту или устройству. Как правило, чем более критичен ресурс тем выше уровень доступности должен быть. _Виды уязвимостей _ _В настоящее время наиболее распространенными видами уязвимости в безопасности программного обеспечения являются: _ • XSS (Cross-Site Scripting) - это вид уязвимости программного обеспечения (Web приложений), при которой, на генерированной сервером странице, выполняются вредоносные скрипты, с целью атаки клиента. _ • XSRF / CSRF (Request Forgery) - это вид уязвимости, позволяющий использовать недостатки HTTP протокола, при этом злоумышленники работают по следующей схеме: ссылка на вредоносный сайт устанавливается на странице, пользующейся доверием у пользователя, при переходе по вредоносной ссылке выполняется скрипт, сохраняющий личные данные пользователя (пароли, платежные данные и т.д.), либо отправляющий СПАМ сообщения от лица пользователя, либо изменяет доступ к учетной записи пользователя, для получения полного контроля над ней. _ • Code injections (SQL, PHP, ASP и т.д.) - это вид уязвимости, при котором становится возможно осуществить запуск исполняемого кода с целью получения доступа к системным ресурсам, несанкционированного доступа к данным либо выведения системы из строя. _ • Server-Side Includes (SSI) Injection - это вид уязвимости, использующий вставку серверных команд в HTML код или запуск их напрямую с сервера. _ • Authorization Bypass - это вид уязвимости, при котором возможно получить несанкционированный доступ к учетной записи или документам другого пользователя\",\"assets/voise/1qUs21.mp3\",\"http://www.protesting.ru/testing/types/security.html\"],\"22\":[\"Что такое испытание на основе рисков?\",\"Тестирование на основе рисков (risk-based testing) — это метод тестирования программного обеспечения, который базируется на вероятности рисков. _Цель тестирования на основе рисков — сфокусироваться на ключевых функциях и уделить им больше времени. _ _Риск — это непредвиденное событие, которое может отрицательно повлиять на измеряемые критерии успеха проекта. _Так, непредвиденные события могут повлиять на стоимость всего проекта, коммерческие, технические и качественные цели. _  _ • Риски продукта — факторы, которые в конечном итоге приводят к несоответствию конечной функциональности потребностям пользователей и/или ожиданиям клиентов. _ • Риски проекта — проблемы, вызванные внешними зависимостями. Это могут быть проблемы с контрактами, задержки со стороны подрядчика, личные проблемы или ограничения, не связанные с работой._ • Риски процесса — проблемы, связанные с планированием и управлением проектом, в том числе неточные эстимейты, задержки, жесткие дедлайны, недооценка сложности проекта или других важных аспектов. не плохая статья для чьтения https://habr.com/ru/company/simbirsoft/blog/443672/\",\"assets/voise/1qUs22.mp3\"],\"23\":[\"Что такое динамическое тестирование?\",\" это методика, направленная на проверку функционала программы, во время выполнения кода.\",\"assets/voise/1qUs23.mp3\",\"https://testengineer.ru/chto-takoe-risk-testirovanie/\"],\"24\":[\"Что такое «парадокс пестицида»?\",\"Если повторять одни и те же тесты снова и снова, в какой-то момент они перестанут выявлять новые ошибки.\",\"assets/voise/1qUs24.mp3\"],\"25\":[\"Опишите основные фазы STLC (жизненного цикла тестирования)? Дайте определение критери начала (Entry) и завершения (Exit) Criteria.\",\"STLC, или жизненный цикл тестирования — это последовательность действий, проводимых в процессе тестирования, с помощью которых гарантируется качество программного обеспечения и его соответствие требованиям. STLC включает действия по верификации и валидации. Тестирование состоит из серии действий, выполняемых по методике, с целью гарантирования качества продукта. _Entry Criteria (Критерий начала): описывает условия, которые должны быть соблюдены перед тем как начнется тестирование. _ Exit Criteria (Критерий завершения): описывает условия, которые должны быть соблюдены перед тем как тестирование завершится.\",\"assets/voise/1qUs25.mp3\"],\"26\":[\"Представте ситуацию, вам дали 2 одинаковых проекта, т.е с одинаковым приоритетом, одинаковые по сложности и т.п., с какого проекта вы начнёте?\",\"Это ловушка некоторых hr, если ответить 1 или 2 то  ответ не правленый! _Ответ: Не буду угадывать, спрошу у тест-менеджера!. Своебразный вопрос но имеет место быть\",\"assets/voise/1qUs26.mp3\"],\"27\":[\"Какие есть атрибуты баг-репорта? Какие основные поля для заполнения?\",\"баг-репорт -это документ, описывающий последовательность действий, которые привели к некорректной работе системы, с указанием причин и ожидаемого результата. _ _поля в баг репорте _ • ID (идентификатор) _ • Название (Title) _ • Короткое описание (Summary) _ • Проект (Project)_ • Номер версии (Version)_ • Приоритет (Priority)_ • Статус (Status)_ • Автор (Author)_ • Назначен на (Assignee)_ • Окружение (Environment)_ • App/build version (версия билда/приложения)_ • Шаги воспроизведения (Steps to Reproduce) _ • Фактический Результат (Actual Result) _ • Ожидаемый результат (Expected Result) _ • скриншоты _ • видео _ • Логи (браузера, мобилки, сервера)\",\"assets/voise/1qUs27.mp3\"],\"28\":[\"Какова разница между приоритетом и серьезностью?\",\"Серьезность (Severity) — это атрибут, характеризующий влияние дефекта на работоспособность приложения. _Приоритет (Priority) — это атрибут, указывающий на очередность выполнения задачи или устранения дефекта. _Можно сказать, что это инструмент менеджера по планированию работ. Чем выше приоритет, тем быстрее нужно исправить дефект. Severity выставляется тестировщиком Priority — менеджером, тимлидом или заказчиком\",\"assets/voise/1qUs28.mp3\"],\"29\":[\"Приведите примеры серьезного, но не приоритетного бага.\",\"функция в приложении с багом, блокирующим работу всего ПО, которым никто никогда не пользуется,другой вопрос а зачем функция которм никто не пользуется\",\"assets/voise/1qUs29.mp3\"],\"30\":[\"В чем разница между валидацией и верификацией?\",\"Верификация (verification) — оценка соответствия продукта требованиям (спецификации)._Отвечает на вопрос: “Система работает в соответствии с требованиями?”_ _Валидация (validation) — оценка соответствия продукта ожиданиям и требованиям пользователей. _Отвечает на вопрос: “Требования удовлетворяют ожидания пользователя?”\",\"assets/voise/1qUs30.mp3\"],\"31\":[\"Зачем нужна тестовая документация? Какие её виды вы занете?\",\"Тестовая документация — это набор документов, создаваемых перед началом процесса тестирования и непосредственно в процессе. _Эти документы описывают покрытие тестами и процесс выполнения тестов, в них указываются необходимые для тестирования вещи, приводится основная терминология и т. д. _ _Тестовая документация определяет, что для нас важно и почему, какие действия мы должны выполнить и сколько времени у нас есть. Наконец, в документации обозначено, чего должна достичь команда и что сигнализирует об окончании процесса. _Непонимание того, как и почему должна вести себя та или иная функция, приводит к большему количеству ошибок. Неправильная расстановка приоритетов может привести к пропуску багов и предоставлению неполных отчетов. Примеры можно продолжать и продолжать. Перечень тестовой документации это _ _ План тестирования - План тестирования описывает все действия по тестированию в рамках одного проекта. Здесь вы можете найти информацию обо всем, что нужно сделать тестировщику или команде QA в ходе проекта. _ _ Чеклист - то документ, содержащий краткое описание функций, которые должен проверить тестировщик. _ _ Тест-кейс - это артефакт/документ, описывающий совокупность шагов, конкретных условий и параметров, необходимых для проверки тестируемой функции._ _ Сценарий использования (use case) - это более простой и менее официальный документ. Он описывает сценарий взаимодействия с пользовталея с программой . _ Каждый юзкейс основан на предположении о том, что пользователь программы будет делать и где он будет кликать. Это позволяет тестировщикам протестировать предполагаемые пути пользователя._ _ Баг-репорт - это документ, описывающий последовательность действий, которые привели к некорректной работе системы, с указанием причин и ожидаемого результата. _ _Требования - это спецификация (описание) того, что должно быть реализовано.(Требования описывают то, что необходимо реализовать, без детализации технической стороны решения. Что, а не как) \",\"assets/voise/1qUs31.mp3\"],\"32\":[\"Что такое тест-план?\",\"Это документ описывающий весь объём работы по тестированию\",\"assets/voise/1qUs32.mp3\"],\"33\":[\"Какую обязательную информацию должен содержать тест-план? Как правильно его использовать, поддерживать и нужен ли он вообще для большинства проектов?\",\"Тест план содержит обязательно ответ на ниже указанные вопросы: _ Что тестируем? _когда? _Критерии начала/окончания тестирования. _Окружение (environment) dev/staging/production? _Подходы/техники/инструменты/виды тестирования? _Браузеры/версии/OS/разрешения экрана? _Кто? Обязанности? Ресурсы? Обучение? _Сроки? _график? _Стратегия тестирования _Ссылки на документацию. _ _Если тестирование не документируется, это мешает увидеть полную картину проекта. _Без четких целей, пошагового плана по их достижению и указания всех важных условий ожидаемый результат будет неясен. В таких условиях у всех может быть разное понимание общей цели и конечного продукта.  \",\"assets/voise/1qUs33.mp3\"],\"34\":[\"Что такое Сборка?\",\"Тестирование направленное на определение соответствия, выпущенной версии, критериям качества для начала тестирования. По своим целям является аналогом Дымового Тестирования, направленного на приемку новой версии в дальнейшее тестирование или эксплуатацию. Вглубь оно может проникать дальше, в зависимости от требований к качеству выпущенной версии. _Чаще всего это исполняемый файл (содержащий исполняемый код программы). _Предположим, что номер версии сборки выглядит так: 1.35.6.2_ _ 1 Первый идентификатор — основной номер версии. _ 2 Второй идентификатор — дополнительный номер версии. _ 3 Третий идентификатор — номер сборки. _ 4 Четвёртый идентификатор — номер редакции.\",\"assets/voise/1qUs34.mp3\"],\"35\":[\"Что такое тестовый драйвер и тестовая обвязка?\",\"Драйвер (driver) — это компонент ПО или средство тестирования, которое заменяет компонент, обеспечивающий управление и/или вызов компонента или системы. _Обвязка (harness) — это тестовое окружение, включающее в себя заглушки и драйверы, необходимые для проведения теста._ Не уверен в корректности данных определений!\",\"assets/voise/1qUs35.mp3\"],\"36\":[\"Что такое приемочное тестирование? И когда проводится ?\",\"Приемочное тестирование или Приемо-сдаточное испытание. _Формальный процесс тестирования, который проверяет соответствие системы требованиям и проводится с целью: _• определения удовлетворяет ли система приемочным критериям; _• вынесения решения заказчиком или другим уполномоченным лицом принимается приложение или нет. _Приемочное тестирование выполняется на основании набора типичных тестовых случаев и сценариев, разработанных на основании требований к данному приложению. _Решение о проведении приемочного тестирования принимается, когда: _• продукт достиг необходимого уровня качества; _• заказчик ознакомлен с Планом Приемочных Работ (Product Acceptance Plan) или иным документом, где описан набор действий, связанных с проведением приемочного тестирования, дата проведения, ответственные _• Фаза приемочного тестирования длится до тех пор, пока заказчик не выносит решение об отправлении приложения на доработку или выдаче приложения.\",\"assets/voise/1qUs36.mp3\"],\"37\":[\"Что такое <Системное тестирование> ?\",\"это тестирование программного обеспечения выполняемое на полной, интегрированной системе, с целью проверки соответствия системы исходным требованиям, как функциональным, так и не функциональным. Объект тестирования выделен красным цветом. _При этом выявляются дефекты, такие как неверное использование ресурсов системы. _   • непредусмотренные комбинации данных пользовательского уровня _    • непредусмотренные сценарии использования _    • отсутствующая или неверная функциональность, неудобство использования и т.д _во время тестирования рекомендуется использовать окружение максимально приближенное к тому, на которое будет установлен продукт после выдачи\",\"assets/voise/1qUs37.mp3\",\"https://qalight.ua/ru/baza-znaniy/sistemnoe-testirovanie/#:~:text=%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%BD%D0%BE%D0%B5%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%E2%80%93%20%D1%8D%D1%82%D0%BE%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE,%D0%9E%D0%B1%D1%8A%D0%B5%D0%BA%D1%82%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B5%D0%BD%20%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D1%8B%D0%BC%20%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%BC.\"],\"38\":[\"Какие Виды Тестирования вы знаете \",\"Все виды тестирования программного обеспечения, в зависимости от преследуемых целей, можно условно разделить на следующие группы: _    • Функциональные _    • Нефункциональные _    • Связанные с изменениями _ _Функциональные тесты базируются на функциях и особенностях, а также взаимодействии с другими системами, и могут быть представлены на всех уровнях тестирования: компонентном или модульном, интеграционном , системном и приемочном . Функциональные виды тестирования рассматривают внешнее поведение системы. Далее перечислены одни из самых распространенных видов функциональных тестов: _    • Функциональное тестирование  _    • Тестирование безопасности  _    • Тестирование взаимодействия (Interoperability Testing GUI ) _ _Нефункциональное тестирование описывает тесты, необходимые для определения характеристик программного обеспечения, которые могут быть измерены различными величинами. В целом, это тестирование того, Как система работает. Далее перечислены основные виды нефункциональных тестов: _Все виды тестирования производительности: _     • нагрузочное тестирование (Performance and Load Testing) _  • стрессовое тестирование (Stress Testing) _     • тестирование стабильности или надежности (Stability / Reliability Testing)      _      • объемное тестирование (Volume Testing)  Тестирование установки (Installation testing) _ • Тестирование удобства пользования (Usability Testing)  _ • Тестирование на отказ и восстановление (Failover and Recovery Testing)  _ • Конфигурационное тестирование (Configuration Testing)  _ • Тестирование безопасности (Security and Access Control Testing)    _ _Связанные с изменениями виды тестирования _После проведения необходимых изменений, таких как исправление бага/дефекта, программное обеспечение должно быть пере тестировано для подтверждения того факта, что проблема была действительно решена. Ниже перечислены виды тестирования, которые необходимо проводить после установки программного обеспечения, для подтверждения работоспособности приложения или правильности осуществленного исправления дефекта: _ • Дымовое тестирование (Smoke Testing) _ • Регрессионное тестирование (Regression Testing) _ • Тестирование сборки (Build Verification Test) _ • Санитарное тестирование или проверка согласованности/исправности (Sanity Testing)\",\"assets/voise/1qUs38.mp3\"],\"39\":[\"Что такое ООП? Назовите его принципы с примерами?\",\"Объе́ктно-ориенти́рованное программи́рование (ООП) — методология программирования, основанная на представлении программы в виде совокупности объектов, каждый из которых является экземпляром определенного класса, а классы образуют иерархию наследования._Принципы ООП: _Принцип 1. Наследование - механизм, который позволяет описать новый класс на основе существующего (родительского). При этом свойства и функциональность родительского класса заимствуются новым классом. _Для чего нужно наследование и какие преимущества оно дает? _Прежде всего — повторное использование кода. Поля и методы, описанные в родительских классах, можно использовать в классах-потомках. _Если у всех типов автомобилей есть 10 общих полей и 5 одинаковых методов, тебе достаточно вынести их в родительский класс Auto. Ты сможешь использовать их в классах-потомках безо всяких проблем. _ Принцип 2. Абстракция - Это очень простой принцип. Абстракция означает выделение главных, наиболее значимых характеристик предмета и наоборот — отбрасывание второстепенных, незначительных.  _ Скажем, мы создаем картотеку работников компании. Для создания объектов «работник» мы написали класс Employee. Какие характеристики важны для их описания в картотеке компании? ФИО, дата рождения, номер социального страхования, ИНН. Но вряд ли в карточке такого типа нам нужны его рост, цвет глаз и волос. Компании эта информация о сотруднике ни к чему. _Поэтому для класса Employee мы зададим переменные String name, int age, int socialInsuranceNumber и int taxNumber, а от лишней для нас информации вроде цвета глаз откажемся, абстрагируемся. _Инкапсуляция - в Java означает ограничение доступа к данным и возможностям их изменения. _У тебя есть имя и фамилия. Их знают все твои знакомые. Но у них нет доступа к изменению твоего имени и фамилии. Этот процесс, можно сказать, «инкапсулирован» в паспортном столе: поменять имя фамилию можно только там, и сделать это можешь только ты. Остальные «пользователи» имеют доступ к твоему имени и фамилии «только на чтение» :) _Принцип 4. Полиморфизм  — это возможность работать с несколькими типами так, будто это один и тот же тип. При этом поведение объектов будет разным в зависимости от типа, к которому они принадлежат.есть хороший пример на сайте \",\"assets/voise/1qUs39.mp3\",\"https://javarush.com/groups/posts/1966-principih-obhhektno-orientirovannogo-programmirovanija\"],\"40\":[\"Что такое интерфейс? Что такое абстрактный класс? Чем они отличаются?\",\" ответ может дать автотестер коорый пишет на Java : Абстрактный класс — это класс, у которого не реализован один или больше методов (некоторые языки требуют такие методы помечать специальными ключевыми словами). _Интерфейс — это абстрактный класс, у которого ни один метод не реализован, все они публичные и нет переменных класса. _Интерфейс нужен обычно когда описывается только интерфейс (тавтология). Например, один класс хочет дать другому возможность доступа к некоторым своим методам, но не хочет себя «раскрывать». Поэтому он просто реализует интерфейс. _Абстрактный класс нужен, когда нужно семейство классов, у которых есть много общего. Конечно, можно применить и интерфейс, но тогда нужно будет писать много идентичного кода\",\"assets/voise/1qUs40.mp3\"],\"41\":[\"Что такое SOLID? Приведите примеры.\",\"это набор принципов, следуя которым, программный код будет более чистым и гибким. Т. е. это не библиотека или технология, это просто правила, которым должен следовать разработчик в кманде если компания разделяет данный подход .расшифровка _ S: Single Responsibility Principle (Принцип единственной ответственности). _ O: Open-Closed Principle (Принцип открытости-закрытости)._ L: Liskov Substitution Principle (Принцип подстановки Барбары Лисков). _ I: Interface Segregation Principle (Принцип разделения интерфейса). _ D: Dependency Inversion Principle (Принцип инверсии зависимостей). \",\"assets/voise/1qUs41.mp3\",\"https://habr.com/ru/company/ruvds/blog/426413/\"],\"42\":[\"Что такое DRY, KISS, YAGNI?\",\"Это все ринципы для разработки: _1. YAGNI (You Aren’t Gonna Need It / Вам это не понадобится)- Этот принцип прост и очевиден, но ему далеко не все следуют. Если пишете код, то будьте уверены, что он вам понадобится. Не пишите код, если думаете, что он пригодится позже. _ 2. DRY (Don’t Repeat Yourself / Не повторяйтесь) - В проектировании и теории информационных систем единый источник истины (SSOT) – это практика структурирования информационных моделей и схемы данных, которая подразумевает, что все фрагменты данных обрабатываются (или редактируются) только в одном месте… SSOT предоставляют достоверные, актуальные и пригодные к использованию данные. _простыми словами Дублирование кода – пустая трата времени и ресурсов. Вам придется поддерживать одну и ту же логику и тестировать код сразу в двух местах, причем если вы измените код в одном месте, его нужно будет изменить и в другом _3. KISS (Keep It Simple, Stupid / Будь проще) -  Этот принцип гласит, что простые системы будут работать лучше и надежнее. _Не придумывайте к задаче более сложного решения, чем ей требуется! Иногда самое разумное решение оказывается и самым простым. Написание производительного, эффективного и простого кода – это прекрасно. \",\"assets/voise/1qUs42.mp3\",\"https://habr.com/ru/company/itelma/blog/546372/\"],\"43\":[\"Что такое паттерны? Какие паттерны GOF вам известны? Приведите примеры их использования.\",\"Паттерны проектирования описывают общую структуру взаимодействия элементов программной системы, которые реализуют исходную проблему проектирования в конкретном контексте. Наиболее известными паттернами этой категории являются паттерны GoF (Gang of Four). Паттерны GoF включают в себя 23 паттерна. Эти паттерны не зависят от языка реализации, но их реализация зависит от области приложения._Шаблоны проектирования — это готовые шаблоны, позволяющие решать частые проблемы разработки. Существуют проблемы, требующие совершенно новых решений, но большинство уже встречалось разработчикам, поэтому их можно решить, применяя проверенные подходы, или шаблоны. _В число популярных шаблонов проектирования входят Адаптер (Adapter), Мост (Bridge), Декоратор (Decorator), Фасад (Façade), Фабричный метод, Наблюдатель (Observer), Одиночка (Singleton), Стратегия (Strategy) и Шаблонный метод (Template Method). _Шаблоны снижают сложность, предоставляя готовые абстракции Если вы скажете: «В этом фрагменте для создания экземпляров производных классов применяется шаблон 'Фабричный метод'», — другие программисты поймут, что ваш код включает богатый набор взаимодействий и протоколов программирования, специфических для названного шаблона. _Шаблон «Фабричный метод» позволяет создавать экземпляры любого класса, производного от указанного базового класса, причем отдельные производные классы отслеживаются только самим «Фабричным методом». Если вы будете использовать шаблоны, другие программисты легко поймут выбранный вами подход к проектированию без подробного обсуждения кода.\",\"assets/voise/1qUs43.mp3\",\"https://studfile.net/preview/9431262/page:9/\"],\"44\":[\"Что такое Page Object и Page Factory?\",\"Объектная модель страницы (Page Object Model (POM)) — это шаблон проектирования, широко используемый в автоматизации тестирования, который создает репозиторий объектов для элементов веб-интерфейса. Преимущество модели в том, что она уменьшает дублирование кода и улучшает сопровождение тестов. _Фабрика страниц в Selenium (Page Factory) — это встроенная концепция фреймворка Page Object Model для Selenium WebDriver, но она очень оптимизирована. Он используется для инициализации объектов Page или для создания экземпляра самого объекта Page. Он также используется для инициализации элементов класса Page без использования «FindElement/s».\",\"assets/voise/1qUs44.mp3\",\"https://www.guru99.com/page-object-model-pom-page-factory-in-selenium-ultimate-guide.html\"],\"45\":[\"Какая иерархия Collections?\",\"На вершине иерархии в Java Collection Framework располагаются 2 интерфейса: Collection и Map . Эти интерфейсы разделяют все коллекции, входящие во фреймворк на две части по типу хранения данных: простые последовательные наборы элементов и наборы пар «ключ — значение» (словари). просто определение из гугла, дальше не знаю \",\"assets/voise/1qUs45.mp3\"],\"46\":[\"Какая разница между Thread class и Runnable interface?\",\"В Java многопоточность программы организуется с помощью интерфейса Runnable и класса Thread, который наследуется от Runnable. Первый способ более гибкий, второй – проще. Та часть кода, которая должна выполняться в отдельном потоке, выносится в свой класс, имеющий переопределенный метод run().\",\"assets/voise/1qUs46.mp3\"],\"47\":[\"Какая разница между String, Stringbuffer и Stringbuilder?\",\"String – неизменяемая строка. StringBuffer — потокобезопасная изменяемая строка. StringBuilder – изменяемая строка с высокой производительностью, но без синхронизации.\",\"assets/voise/1qUs47.mp3\"],\"48\":[\"Разница между final, finally и finalize?\",\"В чем разница между final, finally и finalize? Основное различие между final, finally и finalize заключается в том, что final — это модификатор доступа, finally — блок в обработке исключений, а finalize — метод класса объекта. \",\"assets/voise/1qUs48.mp3\"],\"49\":[\" Какие принципы тестирования вы знаете ?\",\"• Тестирование демонстрирует наличие дефектов, а не их отсутствие _•Исчерпывающее тестирование недостижимо _•Раннее тестирование сохраняет время и деньги _•Кластеризация дефектов _•Парадокс пестицида _•Тестирование зависит от контекста _•Заблуждение об отсутствии ошибок\",\"assets/voise/1qUs49.mp3\"],\"50\":[\"​​Что такое Selenium и зачем его используют?\",\"Selenium WebDriver — это инструмент, который позволяет производить кросс-браузерное тестирование, то есть проверять, как отображается сайт в разных браузерах.\",\"assets/voise/1qUs50.mp3\"],\"51\":[\"Что такое драйвер браузера?\",\"У программных средств Selenium разные подходы к автоматизации тестирования. WebDriver нужен для управления браузером, как локальным, так и удаленным. Это гибкий инструмент: он легко интегрируется с тестовыми фреймворками и другими инструментами. На его основе можно создать узконаправленные инструменты для кроссбраузерного тестирования. _WebDriver — главный вектор развития Selenium. Вот его основные преимущества: _Поддерживает разные языки программирования (Java, JavaScript, C#, PHP, Ruby, Perl, Python), а значит, его может использовать большое количество разработчиков. _Облегчает кроссбраузерное тестирование и поддерживает различные браузеры: Firefox, Opera, Chrome, Edge. _Есть фреймворки, облегчающие разработку.\",\"assets/voise/1qUs51.mp3\",\"https://blog.skillfactory.ru/glossary/selenium-webdriver/\"],\"52\":[\"Какие виды локаторов страницы существуют? Каковы их преимущества и недостатки?\",\"id=<element_id> - соответствует элементу, у которого атрибут id равен значению element_id. Например, у нас есть элемент, данный локатор должен быть один для элемента,должен но не всегда такой :) _name=<element_name> - соответствует элементу, у которого атрибут name равен значению element_name. _dom=<dom_object> - данный тип локатора позволяет обращаться к элементу так же, как и в DHTML используя DOM-структуру. _link=<link_text> - специально для ссылок используется отдельно зарезервированный тип локаторов, который находит нужную ссылку по ее тексту. _xpath=<xpath_locator> - наиболее универсальный тип локаторов. Как XPath формируется. HTML, как и его более обобщенная форма - XML, представляет собой различное сочетание тегов, которые могут содержать вложенные теги, а те в свою очередь тоже могут содержать теги и т.д. То есть ,выстраивается определенная иерархия, наподобие структуры каталогов в файловой системе. _css=<css_path> - данный тип локаторов основан на описаниях таблиц стилей (CSS), соответственно и синтаксис такой же.   \",\"assets/voise/1qUs52.mp3\"],\"53\":[\"Что такое Selenium Waits? Какие есть и чем отличаются?\",\"Ожидания - непременный атрибут любых UI тестов для динамических приложений. Нужны они для синхронизации работы AUT и тестового скрипта. Скрипт выполняется намного быстрее реакции приложения на команды, поэтому часто в скриптах необходимо дожидаться определенного состояния приложения для дальнейшего с ним взаимодействия. _ бывают разные ожидатели обычно это по селектору, ожидать ответа от сервера, перехаода на другую страницу или навигацияпо странице!\",\"assets/voise/1qUs53.mp3\"],\"54\":[\"Какие exceptions может бросить Selenium? Что они означают и как их обрабатывать?\",\"Есть хорошая статья вот сылка https://testengineer.ru/oshibki-v-selenium-gajd-po-exceptions/ \",\"assets/voise/1qUs54.mp3\",\"https://testengineer.ru/oshibki-v-selenium-gajd-po-exceptions/\"],\"55\":[\"Для чего используют JavaScriptExecutor? Приведите примеры.\",\"JavaScript executor — это интерфейс, предоставляемый Selenium, который предоставляет механизм для выполнения JavaScript через Selenium WebDriver. _Он предоставляет два метода, такие как «executeScript» и «executeAsyncScript», для запуска JavaScript в текущем выбранном фрейме, окне или странице.\",\"assets/voise/1qUs55.mp3\",\"https://atesting.ru/javascriptexecutor-v-selenium-webdriver-metody-s-primerami/\"],\"56\":[\"Что такое Selenium Grid?\",\"Selenium Grid — кластер из нескольких Selenium-серверов, которые позволяют управлять браузером удаленно по сети. Grid позволяет организовать сеть, в которой можно запускать большое количество браузеров на большом количестве компьютеров. Параллельное тестирование позволяет тестировщикам экономить время.\",\"assets/voise/1qUs56.mp3\",\"https://blog.skillfactory.ru/glossary/selenium/#:~:text=Selenium%20Grid%20%E2%80%94%20%D0%BA%D0%BB%D0%B0%D1%81%D1%82%D0%B5%D1%80%20%D0%B8%D0%B7%20%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%B8%D1%85,%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BF%D0%BE%D0%B7%D0%B2%D0%BE%D0%BB%D1%8F%D0%B5%D1%82%20%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D1%89%D0%B8%D0%BA%D0%B0%D0%BC%20%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%82%D1%8C%20%D0%B2%D1%80%D0%B5%D0%BC%D1%8F.\"],\"57\":[\"Какие способы click и send keys Selenium?\",\" click -к ликнуть по элементу, sendkeys - набор текста в полеинпут и тд\",\"assets/voise/1qUs57.mp3\"],\"58\":[\"Как вы запускаете параллельное выполнение тестов? Что такое ThreadLocal?\",\"ThreadLocal — класс, позволяющий имея одну переменную, иметь различное её значение для каждого из потоков. _ Так тут дело так понимаю в многопоточности java с ним я не работал, но проблема в том что и в JS я параллельные тесты не делал :/ \",\"assets/voise/1qUs58.mp3\"],\"59\":[\"Какая разница между Action и Actions?\",\"\",\"assets/voise/1qUs59.mp3\"],\"60\":[\"Как написать метод isElementPresent?\",\"   Одной из наиболее частых проверок в автотестах является проверка присутствия какого-либо объекта на странице. В SeleniumIDE для этого существует метод isElementPresent, а для вебдрайвера такого метода нет, но можно написать свой собственный метод:_    public static boolean isElementPresent(By by) { _      try { _        driver.findElement(by); _        return true; _      } catch (NoSuchElementException e) { _        return false; _  }  _  }\",\"assets/voise/1qUs60.mp3\"],\"61\":[\"Как вычитать данные из динамической веб-таблицы?\",\"не совсем понимаю суть данного вопроса, но если самый банальный ответ, подождать пока данные сформируются и после спарсть их со страницы, если они меняются все время то и это будет спарсить несложно\",\"assets/voise/1qUs61.mp3\"],\"62\":[\"Можете ли вы назвать 10 интерфейсов в Selenium?\",\"1) .keyDown(Key.SHIFT) -зажать кнопку (shift,ctrl) 2) _.sendKeys('a') - нажать на кнопку 3) _keyUp(Key.SHIFT) - разжать кнопку (shift,ctrl) 4) _.click() - нажать! 5) _.scroll(0, 0, 0, 0, iframe)-проскролить, 6)_.wait()- ожидание чего либо 7) _.findElement() - ждет пока динамически добавленный элемент из скрипта не будет добавлен в DOM 8)_.getText()-получает текст из элемента на странице 9) .navigate().refresh()- Обновить текущую страницу 10).close() -закрыть окно\",\"assets/voise/1qUs62.mp3\",\"https://www.selenium.dev/documentation/webdriver/\"],\"63\":[\"Назовите два способа, позволяющих автоматизировать капчу.\",\"есть платные сервисы Решить reCAPTCHA 2 в Selenium и склоняются в интернете в эту сторону Но естьочень хорошая статья \",\"assets/voise/1qUs63.mp3\",\"http://cccp-blog.com/razrabotchiku/kak-obojti-kapchu#kak-obojti-kapchu\"],\"64\":[\"Вспомните типы навигационных команд Selenium.\",\".get(url); - открыть сайт _ driver.navigate().back();-Нажатие кнопки «Назад» в браузере _driver.navigate().forward(); - Нажатие кнопки браузера вперед _ await driver.navigate().refresh(); - Обновить текущую страницу\",\"assets/voise/1qUs64.mp3\",\"https://www.selenium.dev/documentation/webdriver/interactions/navigation/\"],\"65\":[\"Как найти поврежденные ссылки в Selenium WebDriver?\",\"нужно собрать ссылки на странице и сделать http запросы и посмотреть на статус тветы и на получения контента на дрги страницах \",\"assets/voise/1qUs65.mp3\"],\"66\":[\"Какую технику следует рассмотреть, используя весь сценарий, если «нет ни frame id, ни frame name»?\",\"всегда есть возможность использовать селекор XPath, скапировав селктор в DevTools! Крутить Dom элемнетом можно как угодно\",\"assets/voise/1qUs66.mp3\"],\"67\":[\"что такое Интеграционное тестирование ? какие уровни вы знаете и подходы?\",\"Интеграционное тестирование предназначено для проверки связи между компонентами, а также взаимодействия с различными частями системы (операционной системой, оборудованием либо связи между различными системами). _   Уровни интеграционного тестирования: _    • Компонентный интеграционный уровень (Component Integration testing) _        Проверяется взаимодействие между компонентами системы после проведения компонентного тестирования. _    • Системный интеграционный уровень (System Integration Testing) _        Проверяется взаимодействие между разными системами после проведения системного тестирования. _ • Подходы к интеграционному тестированию:_ _ Снизу вверх (Bottom Up Integration) - Все низкоуровневые модули, процедуры или функции собираются воедино и затем тестируются. После чего собирается следующий уровень модулей для проведения интеграционного тестирования. Данный подход считается полезным, если все или практически все модули, разрабатываемого уровня, готовы. Также данный подход помогает определить по результатам тестирования уровень готовности приложения _ • Сверху вниз (Top Down Integration) - Вначале тестируются все высокоуровневые модули, и постепенно один за другим добавляются низкоуровневые. Все модули более низкого уровня симулируются заглушками с аналогичной функциональностью, затем по мере готовности они заменяются реальными активными компонентами. Таким образом мы проводим тестирование сверху вниз. _ • Большой взрыв  - Все или практически все разработанные модули собираются вместе в виде законченной системы или ее основной части, и затем проводится интеграционное тестирование. Такой подход очень хорош для сохранения времени. Однако если тест кейсы и их результаты записаны не верно, то сам процесс интеграции сильно осложнится, что станет преградой для команды тестирования при достижении основной цели интеграционного тестирования\",\"assets/voise/1qUs67.mp3\"],\"68\":[\"Есть 8 бильярдных шаров. Один из них немного тяжелее других. За какое минимальное количество взвешиваний на рычажных весах без гирь можно найти этот шар?\",\"ф2 шага. Нужно разделить все шары на три части: по 3 шара в двух частях, и 2 шара в третьей части. Сначала взвешиваете первые две части по 3 шара. Если одна из частей оказалась тяжелее, то взвешиваем между собой любые 2 шара из нее. Или один из них будет искомым шаром, или не взвешенный, если они оказались равны. В случае равного веса частей при первом взвешивании, более тяжелый шар окажется в третьей части из двух шаров.\",\"assets/voise/1qUs68.mp3\"],\"69\":[\"Почему канализационные люки имеют круглую форму? \",\"за счет равного диаметра круга люк не проваливается в канализацию, второй – круглые люки легче переносить\",\"assets/voise/1qUs69.mp3\"],\"70\":[\"Почему фраза 'сам прочитаешь?' считается уникальной? \",\"\",\"assets/voise/1qUs70.mp3\"],\"71\":[\"Перед вами два мотка веревки. Если взять их концы и поджечь, то каждый моток сгорает за один час. Вопрос: как правильно отмерить 45 минут, применяя 2 таких мотка веревки, при условии, что веревку нет возможности делить?\",\"стоит одновременно поджечь один моток с двух концов, а второй – с одной стороны. Ровно через 30 минут первый моток полностью выгорит, а второму останется гореть 30 минут. Дабы получить желаемые 15 минут, его придется подпалить с обеих сторон. Все просто!\",\"assets/voise/1qUs71.mp3\"],\"72\":[\"Перед вами 50 мопедов с полным баком бензина на 100 километров. Как далеко можно уехать, при условии, что все они стартуют из одной точки?\",\"1) Заводим мопеды одновременно и едем 100 километров. _2)Двигаем мопеды на 50 км, переливаем бензин из половины мопедов в другую половину. Так у нас получается 25 мопедов с полностью заполненным баком топлива. Едем дальше и повторяем данное действие каждые 50 км. Подобным образом можно продвинуться на 350 километров.\",\"assets/voise/1qUs72.mp3\",\"https://tproger.ru/articles/10-logicheskih-zadach-s-sobesedovanij-kotorye-zastavjat-zastrelitsja/\"],\"73\":[\"Какие виды тест планов вы знаете ?\",\"Чаще всего на практике приходится сталкиваться со следующими видами тест планов: _ • Мастер Тест План (Master Plan or Master Test Plan) _ • Тест План (Test Plan), назовем его детальный тест план) _ • План Приемочных Испытаний (Product Acceptance Plan) - документ, описывающий набор действий, связанных с приемочным тестированием (стратегия, дата проведения, ответственные работники и т.д.) \",\"assets/voise/1qUs73.mp3\",\"http://www.protesting.ru/testing/plan.html\"],\"74\":[\"Расскажите о своем последнем проекте.\",\"\",\"assets/voise/1qUs74.mp3\"],\"75\":[\"Для чего используют системы контроля версий?\",\" Системы контроля версий — это программные инструменты, помогающие командам разработчиков управлять изменениями в исходном коде с течением времени. В свете усложнения сред разработки они помогают командам разработчиков работать быстрее и эффективнее.\",\"assets/voise/1qUs75.mp3\"],\"76\":[\"Что такое Git? Каков принцип его работы?\",\"Git — это набор консольных утилит, которые отслеживают и фиксируют изменения в файлах (чаще всего речь идет об исходном коде программ, но вы можете использовать его для любых файлов на ваш вкус). \",\"assets/voise/1qUs76.mp3\"],\"77\":[\"Что такое commits, branches в Git?\",\"Можно сказать, что коммит это основной объект в любой системе управления версиями. В нем содержится описание тех изменений, которые вносит пользователь в код приложения. В Git коммит состоит из нескольких так называемых объектов. _Команда git branch позволяет создавать, просматривать, переименовывать и удалять ветки. Она не дает возможности переключаться между ветками или выполнять слияние разветвленной истории. Именно поэтому команда git branch тесно связана с командами git checkout и git merge .\",\"assets/voise/1qUs77.mp3\"],\"78\":[\"Для чего нужны GitHub, GitLab и другие, базирующиеся на Git, вебхостинги проектов?\",\"GitHub - это репазиторий в которой храниться наши файлы продукта как в откртом досупе так и в закрытом и системой контрлся весриий .  GitLab является конкурентом GitHub, в котором среди многих других проектов размещается разработка ядра Linux Линуса Торвальдса. Поскольку GitLab разрабатывается на той же основе управления версиями (Git), принцип их работы схож. GitLab поддерживает как публичные, так и неограниченное количество частных ветвей разработки. \",\"assets/voise/1qUs78.mp3\"],\"79\":[\"Дайте определения Баг Репорта? опишите структуру баг репорта!\",\"Баг репорт - это документ, описывающий ситуацию или последовательность действий приведшую к некорректной работе объекта тестирования, с указанием причин и ожидаемого результата. ID (идентификатор) _Название (Title) _Короткое описание (Summary)_Проект (Project)_Компонент приложения (Component)_Номер версии (Version)_Серьезность (Severity)_Приоритет (Priority)_Статус (Status)_Автор (Author)_Назначен на (Assignee)_Окружение (Environment)_App/build version _версия билда/приложения) _Шаги воспроизведения (Steps to Reproduce) _Фактический Результат (Actual Result) _Ожидаемый результат (Expected Result) _Screenshots (скриншоты) \",\"assets/voise/1qUs79.mp3\"],\"80\":[\"что такое Операционное тестирование\",\"Даже если система удовлетворяет всем требованиям, важно убедиться в том, что она удовлетворяет нуждам пользователя и выполняет свою роль в среде своей эксплуатации, как это было определено в бизнес моделе системы. Следует учесть, что и бизнес модель может содержать ошибки. Поэтому так важно провести операционное тестирование как финальный шаг валидации. Кроме этого, тестирование в среде эксплуатации позволяет выявить и нефункциональные проблемы, такие как: конфликт с другими системами, смежными в области бизнеса или в программных и электронных окружениях; недостаточная производительность системы в среде эксплуатации и др. Очевидно, что нахождение подобных вещей на стадии внедрения — критичная и дорогостоящая проблема. Поэтому так важно проведение не только верификации, но и валидации, с самых ранних этапов разработки ПО.\",\"assets/voise/1qUs80.mp3\"],\"81\":[\" Что такое CI?\",\"CI — это сборка, деплой и тестирование приложения без участия человека. \",\"assets/voise/1qUs81.mp3\"],\"82\":[\" Как автоматическое тестирование интегрируется в CI?\",\"CI собирает билд, после выполняет прогон атвотестов, после можно настроить на развертывание приложение на тестовом стенде\",\"assets/voise/1qUs82.mp3\"],\"83\":[\" Как настроить Job или Pipeline на знакомом вам CI-инструменте?\",\"\",\"assets/voise/1qUs83.mp3\"],\"84\":[\" Какие инструменты для генерации репорта после выполнения автоматических тестов вы знаете?\",\"\",\"assets/voise/1qUs84.mp3\"],\"85\":[\" Какую информацию должен содержать отчет о выполнении автоматических тестов?\",\"\",\"assets/voise/1qUs85.mp3\"],\"86\":[\"Что такое клиент-серверная архитектура?\",\"«Клиент — сервер» (англ. client–server) — вычислительная или сетевая архитектура, в которой задания или сетевая нагрузка распределены между поставщиками услуг, называемыми серверами, и заказчиками услуг, называемыми клиентами. Фактически клиент и сервер — это программное обеспечение.\",\"\",\"assets/voise/1qUs86.mp3\"],\"87\":[\"Что может выступать в роли клиента?\",\"\",\"assets/voise/1qUs87.mp3\"],\"88\":[\"Что такое REST API, SOAP? В чем разница?\",\"\",\"assets/voise/1qUs88.mp3\"],\"89\":[\"Какие протоколы передачи данных знаете?\",\"\",\"assets/voise/1qUs89.mp3\"],\"90\":[\"Какие способы взаимодействия с API существуют? В чем разница между ними?\",\"\",\"assets/voise/1qUs90.mp3\"],\"91\":[\"Как можно протестировать API, что там нужно проверять?\",\"\",\"assets/voise/1qUs91.mp3\"],\"92\":[\"Как расшифровывается CRUD?\",\"\",\"assets/voise/1qUs92.mp3\"],\"93\":[\"Чем отличается GET от POST?\",\"\",\"assets/voise/1qUs93.mp3\"],\"94\":[\"Какие отличия между XML и JSON?\",\"\",\"assets/voise/1qUs94.mp3\"],\"95\":[\"Какие знаете форматы передачи данных?\",\"\",\"assets/voise/1qUs95.mp3\"],\"96\":[\"Как происходит шифрование?\",\"\",\"assets/voise/1qUs96.mp3\"],\"97\":[\"Какие бывают виды баз данных?\",\"\",\"assets/voise/1qUs97.mp3\"],\"98\":[\"Охарактеризуйте каждый класс status code (1хх; 2xx; 3xx; 4xx; 5xx).\",\"\",\"assets/voise/1qUs98.mp3\"],\"99\":[\"Какие есть HTTP-методы?\",\"\",\"assets/voise/1qUs99.mp3\"],\"100\":[\"Какие знаете Web elements?\",\"\",\"assets/voise/1qUs100.mp3\"],\"101\":[\"Какие браузеры знаете? В чем их отличие?\",\"\",\"assets/voise/1qUs101.mp3\"],\"102\":[\"Для чего необходимы инструменты разработчика в браузере (Chrome DevTools) и как они помогают в тестировании.\",\"\",\"assets/voise/1qUs102.mp3\"],\"103\":[\"Что такое кэш?\",\"\",\"assets/voise/1qUs103.mp3\"],\"104\":[\"Что такое сессия?\",\"\",\"assets/voise/1qUs104.mp3\"],\"105\":[\"Зачем нужны cookies?\",\"\",\"assets/voise/1qUs105.mp3\"],\"106\":[\"Что такое фрейм?\",\"\",\"assets/voise/1qUs106.mp3\"],\"107\":[\"Что такое HTML/CSS/JavaScript?\",\"\",\"assets/voise/1qUs107.mp3\"],\"108\":[\"Какую структуру имеет веб-страница?\",\"\",\"assets/voise/1qUs108.mp3\"],\"109\":[\"Зачем чистить кэш?\",\"\",\"assets/voise/1qUs109.mp3\"],\"110\":[\"Какие виды тестирования можно применить только к Web?\",\"\",\"assets/voise/1qUs110.mp3\"],\"111\":[\"Для чего в веб-страницах используют JavaScript?\",\"\",\"assets/voise/1qUs111.mp3\"],\"112\":[\"Что такое REST?\",\"\",\"assets/voise/1qUs112.mp3\"],\"113\":[\"Что такое AJAX?\",\"\",\"assets/voise/1qUs113.mp3\"],\"114\":[\"Какие мобильные платформы существуют?\",\"\",\"assets/voise/1qUs114.mp3\"],\"115\":[\"Какие версии Android и iOS используются на рынке (минимальные и максимальные)?\",\"\",\"assets/voise/1qUs115.mp3\"],\"116\":[\"Какие версии Android нужно тестировать, если заказчик сказал поддерживать с версии 5.0?\",\"\",\"assets/voise/1qUs116.mp3\"],\"117\":[\"Назовите типы мобильных приложений.\",\"\",\"assets/voise/1qUs117.mp3\"],\"118\":[\"Каков формат файлов сборок приложений для Android и iOS?\",\"\",\"assets/voise/1qUs118.mp3\"],\"119\":[\"Что такое ADB?\",\"\",\"assets/voise/1qUs119.mp3\"],\"120\":[\"Как снять логи с AOS/IOS?\",\"\",\"assets/voise/1qUs120.mp3\"],\"121\":[\"Что нужно проверять при использовании сканера отпечатка и Face ID?\",\"\",\"assets/voise/1qUs121.mp3\"],\"122\":[\"Как я могу запускать тесты Android без Appium?\",\"\",\"assets/voise/1qUs122.mp3\"],\"123\":[\"Объясните концепцию дизайна Appium.\",\"\",\"assets/voise/1qUs123.mp3\"],\"124\":[\"Программа производит чтение с трёх целых чисел, которые интерпретируются как длины сторон треугольника. Далее программа выдает сообщение о том, является ли треугольник неравносторонним, равнобедренным или равносторонним.\",\"\",\"assets/voise/samCh.mp3\"],\"125\":[\"Нужно протестировать консольное приложение, которое на вход принимает 3 целых числа, интерпретируемые как длины сторон треугольника, а на выходе выводит на экран является ли введенный треугольник равнобедренным или равносторонним. Предложите конкретные значения тестовых данных, которые Вы будете использовать для тестирования такого приложения \",\"\",\"assets/voise/samCh.mp3\"],\"126\":[\"Напишите сценарии автоматического тестирования для сортировки по цене и добавлению товара в корзину на сайте https://www.saucedemo.com/ . К вашим тестам добавьте документацию с настройками и разместите ваше решение на GitHub.\",\"звучит как бесплатная работа на компанию\",\"assets/voise/samCh.mp3\"],\"127\":[\"Написать чеклист для функционала корзины в интернет-магазине.\",\"\",\"assets/voise/samCh.mp3\"],\"128\":[\"Написать тестовые наборы данных для поля ввода даты, которое отсеивает пользователей в возрасте до 18 лет.\",\"\",\"assets/voise/samCh.mp3\"],\"129\":[\"Написать чеклист тестирования формы ввода данных платежной карты.\",\"\",\"assets/voise/1qUs129.mp3\"],\"130\":[\"Протестовать «карандаш» относительно различных видов тестирования. \",\"Вы сговорились что-ли?! \",\"assets/voise/1qUs130.mp3\"],\"131\":[\" Есть Input поле, принимающее целые значения от 18 до 99 включительно. Надо протестировать с помощью техники тест-дизайна Boundary Values ​​Analysis и Equivalence Partitioning.\",\"разбиение на классы 0-18, 18-99, 99- 9999 \",\"assets/voise/samCh.mp3\"],\"132\":[\"Есть веб-страница с полями: e-mail, password и кнопкой submit. Необходимо привести примеры отрицательных тест-кейсов, которыми можно проверить эту страницу.\",\"удалить из дом дерева ивставить новый инпут тем  самое тем самым убрав проверки повешанные на этом инпуте\",\"assets/voise/samCh.mp3\"],\"133\":[\" Привести примеры тест-кейсов для функционала, находящегося на нескольких страницах проекта (например, поле поиска).\",\"\",\"assets/voise/samCh.mp3\"],\"134\":[\"Как протестировать процесс оплаты в интернет-магазине?\",\"\",\"assets/voise/1qUs134.mp3\"],\"135\":[\"Как протестировать сломанный тостер?\",\"\",\"assets/voise/1qUs135.mp3\"],\"136\":[\"Объясните для 7-летнего ребенка, что такое база данных.\",\"\",\"assets/voise/1qUs136.mp3\"],\"137\":[\"Определите необходимое количество функциональных тест-кейсов, чтобы проверить Log in форму.\",\"\",\"assets/voise/1qUs134.mp3\"],\"138\":[\"Есть форма регистрации в веб-приложении с полями (first name, last name, username, password, repeat password) и кнопкой Register. Какие проверки нужно провести?\",\"\",\"assets/voise/samCh.mp3\"],\"139\":[\"Поле username должно быть обязательным, но оно не является обязательным. Приведите пример баг-репорта, созданного для этой ошибки.\",\"\",\"assets/voise/samCh.mp3\"],\"140\":[\"Как бы вы провели smoke-testing для приложения типа Telegram?\"],\"141\":[\"Как будет выглядеть баг-репорт, если, к примеру, не работает электрический чайник?\"],\"142\":[\"Есть таблица books с полями: name, price, page_count. Следует выбрать все имена книг, в которых price более 10 единиц и количество страниц от 20 до 100.\",\"\",\"assets/voise/samCh.mp3\"],\"143\":[\" У вас есть функционал калькулятора, который доступен через веб-браузер по ссылке. Он имеет только функцию делить, так сказать, MVP-версию. Диапазоны для вписывания в числитель и делитель от 0,1 до 99,9. Вывод значения происходит автоматически, потому что front-end реализован на React JS. Как вы будете тестировать этот функционал? Какие виды тестирования примените? Какие техники тест-дизайна используете?\",\"\",\"assets/voise/samCh.mp3\"],\"144\":[\"Задание на работу с SQL на сайте стоит посмотреть Сылка в ответе.\",\"https://tproger.ru/articles/5-zadanij-po-sql-s-realnyh-sobesedovanij/\",\"assets/voise/samCh.mp3\"],\"145\":[\" Ваша компания разрабатывает программное обеспечение для медицинских систем, и вы тестируете компонент, управляющий дефибриллятором сердца. Вы заметили, что одно решение в тестовом модуле состоит из 34 независимых атомарных условий. Какой метод тестирования белого ящика следует выбрать для этого и почему?\",\"\",\"assets/voise/samCh.mp3\"]},{\"1\":[\"Назовите обязанности QA?\",\" QA-инженер — специалист, который следит за качеством продукта на всех этапах его разработки. _Задачи QA: _ • Анализирует техническую документацию и требования к продукту на этапе проектирования ПО. _ • Разрабатывает сценарии тестирования. _ • Тестирует MVP — Minimum Viable Product — самую примитивную версию продукта, которая уже может привлечь первых пользователей. _ • Создаёт метрики качества ПО. Их можно разделить на два вида: внутренние и внешние. К первым относят свойства продукта, которые видны только команде проекта: метрики размера, сложности и стиля. Внешние — это свойства, видимые пользователям. Здесь выделяют метрики надёжности, функциональности, применимости и стоимости продукта. _ • Фиксирует найденные ошибки. _ • Отслеживает процессы исправления багов и ошибок. _ • Повторно анализирует качество ПО. _ • Проводит мониторинг метрик качества.\",\"assets/voise/2qUs1.mp3\",\"https://netology.ru/blog/09-2022-who-is-qa#:~:text=QA%2D%D0%B8%D0%BD%D0%B6%D0%B5%D0%BD%D0%B5%D1%80%20%E2%80%94%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9,%D0%BA%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8%20%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D1%82%D1%8C%20%D0%BD%D0%B0%20%D0%B8%D1%85%20%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8.\"],\"2\":[\" Что знаете о тестировании нагрузки? В каком случае следует проводить такое тестирование? На каком этапе готовности продукта?\",\"Тестирование нагрузки — это практика моделирования реального использования или загрузки любого программного обеспечения, веб-сайта, веб-приложения, API или системы для анализа и выявления таких факторов, как отзывчивость, деградация и масштабируемость. После функционального тестирования и при исправлении всех критичнх ошибок в продукте \",\"assets/voise/2qUs2.mp3\"],\"3\":[\"Что такое Таблица принятия решений (decision table) и как её можно использовать?\",\"В таблицах решений представлен набор условий, одновременное выполнение которых должно привести к определенному действию/решению.\",\"assets/voise/2qUs3.mp3\"],\"4\":[\"Что может быть критериями запуска и завершения тестирования?\",\" Критерии запуска: _ • все дефекты, которые относятся к ранним стадиям проектирования закрыты и проверены;_   • Код проверенный с помощью осуществления «Unit» тестов;_   • Основные функциональные возможности ПО готовы для тестирования;_  • Имеется документация, которая определяет требования;_   • Все тестировщики ознакомлены с архитектурой ПО;_    • Все тестировщики ознакомлены с целями проекта; _   • Готова среда тестирования;_доступные для использования билды;_   • Утверждены план тестирования и/или тестовые случаи. _Критерии завершения: _ • Все исправленные дефекты были протестированы повторно _ •  все запланированные тесты выполнены _ • Больше 80% тестов должны быть пройдены успешно_ • Нет открытых дефектов с критичностью (Severity) Critical _ • Нет открытых дефектов с критичностью (Severity) Major\",\"assets/voise/2qUs4.mp3\"],\"5\":[\" Расскажите о вариантах интегрирования тестовой документации в проект, инструментах для работы с ней.\",\"Есть баг трекинговые системы jira с возможностью устанавливать дополнения в виде zephyr! zephyr - добавляет удобную и рентабельную систему управления тестированием к JIRA созданно  \",\"assets/voise/2qUs5.mp3\"],\"6\":[\"Как организовать сквозное тестирование (e2e)?\",\"Скзваное тестирование требует подготовки, чем сложнее система чем больше инеграций возоимодейсвтуюших систем тем больше ресурсов нам понадобится этапы организации следю друг за другом самый первый этап это подбор и выделения ресурсов, за ним следует Анализ требоований и оценка трудозатрат! Далее идет один из боьших проецссов это: _ • Подготовка стратегий тестирования. -> согласования команды E2E. -> подготовка плана E2E.  _ • подготовка сипска сценариев. -> подготовка тестовой среды -> разработка и согласование тест-кейсов -> это все вылевается в подгатовку в тестовых данных _ Псоле происходит прием результатов интеграционного и функционального тестирование -> и выполнения E2E \",\"assets/voise/2qUs6.mp3\",\"https://habr.com/ru/company/mvideo/blog/559542/\"],\"7\":[\"Напишите чек лист для тестирования реляционной базы данных ?\",\"_ 1 Убедиться, что данные, которые отображаются на сайте, - это те же самые данные, что находятся на сервере.,_ 2 Убедиться, что каждый столбец имеет ограничения входных значений (значения, превышающие это ограничение, не должны приниматься). ,_ 3 Убедиться, что в таблицы базы данных можно вводить граничные значения, полученные от клиента.,_ 4 Проверить функциональность хранимых процедур БД (название, параметры, возвращаемые значения, синтаксис и т.д.).,_ 5 Убедиться, что при внесении изменений в БД данные в ней обновляются (создание,  удаление и редактирование записей).,_ 6 Убедиться, что пользователь не узнает о том, что в базе данных какая-либо ошибка (со стороны бекенда).,_ 7 Проверить, что пользователь не может войти в базу данных без аутентификации.,_ 8 Убедиться, что запросы в БД выполняются без каких-либо сбоев. ,_ 9 Проверить, что все таблицы имеют корректный внешний/первичный ключ. ,_ 10 Убедиться, что сервер базы данных может обрабатывать отрицательные числа.,_ 11 Проверить время ответа сервера базы данных.,_ 12 ВСЕ таблицы базы данных должны сопровождаться кратким описанием.,_ 13 Проверить, что структура БД сопровождается спецификацией (таблицы, колонки, хранимые процедуры, индексы, типы данных, флаги и т.д.).,_ 14 Проверить, что изменения, сделанные пользователем, сохраняются только по завершении процесса (если в процессе работы произошел сбой, изменения должны быть проигнорированы).,_ 15 Проверить, что клиент работает с необходимой ему базой данных (в большинстве случаев сайты на бекенде взаимодействуют с несколькими базами данных),_ 16 Убедиться, что клиент не может изменять значения на NULL (в таблицах, в которых стоит запрет на внесения нулевых значений)\",\"assets/voise/2qUs7.mp3\",\"http://losieva.blogspot.com/2016/07/david-tzemach.html\"],\"8\":[\"Приведите примеры подходов для тестирования локализации.\",\"\",\"assets/voise/2qUs8.mp3\"],\"9\":[\"Что такое A/B тестирование?\",\"\",\"assets/voise/2qUs9.mp3\"],\"10\":[\"Что такое mock/stub? Какие знаете инструменты для работы с ними?\",\"\",\"assets/voise/2qUs10.mp3\"],\"11\":[\"Когда нужно использовать технику Pairwise?\",\"\",\"assets/voise/2qUs11.mp3\"],\"12\":[\"Что такое fuzz-тестирование и где его используют?\",\"\",\"assets/voise/2qUs12.mp3\"],\"13\":[\"Что такое REgexp?\",\"\",\"assets/voise/2qUs13.mp3\"],\"14\":[\"Как меняется стоимость дефекта при тестировании программного обеспечения?\",\"\",\"assets/voise/2qUs14.mp3\"],\"15\":[\"Каковы пути анализа бизнеса клиента? Как определить целесообразность того или иного функционала?\",\"\",\"assets/voise/2qUs15.mp3\"],\"16\":[\"Назовите последовательность выполнения CI/CD процесса на проекте.\",\"\",\"assets/voise/2qUs16.mp3\"],\"17\":[\"Какое должно быть процентное соотношение между положительным и отрицательным тестированием на проекте?\",\"\",\"assets/voise/2qUs17.mp3\"],\"18\":[\"Какой вид тестирования целесообразнее проводить до релиза?\",\"\",\"assets/voise/2qUs18.mp3\"],\"19\":[\"Есть ли разница между bug leakage и bug release?\",\"\",\"assets/voise/2qUs19.mp3\"],\"20\":[\"Может ли быть ситуация, когда критерии завершения (exit criteria) не выполнены? Что должно происходить в этом случае?\",\"Следует выделить 3 основных критерия для остановки: _ • Время — В ходе тестирования могут находиться баги с разным приоритетом серьезности, попадаются баги блокеры, которые блокируют дальнейшее прохождение по тест кейсам, время на исправление и перепроверку багов может затянуться. Так как продукт или новую фитчу обещали к определенной дате то проджект менеджер вместе с тим лидом или тестировщиком принимает решение какие баги все таки стоить исправить, а какие можно отложить до следующего релиза в порядке приоритета и серьезности багов. Таким образом тестирование завершается по истечении времени. _ • Бюджет — очень популярно на биржах фриланса, когда оплачиваются найденные баги в зависимости от количества и серьезности или оплачивается по количеству пройденных тест кейсов, также выделяется бюджет на написание самих тесткейсов. И когда бюджет опустошен, то все работы по тестированию прекращаються. Как и на фриланс бирже заказчик иногда просто оплачивает время работы аутсорсного тестировщика и иногда не вписываясь в бюджет, просматривает написанные тест кейсы и какие-то выкидывает в силу не влезания в бюджет. _ • Все тест кейсы пройдены, найденные баги исправлены и перепроверены — Для того чтобы протестировать приложение, тестировщик для начала должен ознакомиться с требованиями, функциональными спецификациями к приложению, если они конечно есть, или узнать со слов заказчика какое поведение должно быть при разных сценариях использования приложения или фитчи. Затем заняться составлением тестовой документации — написанием тест кейсов, написать тест план если нужно, покрывая весь функционал и требования к приложению. Также обсудить и решить в команде или самостоятельно не требуется ли проводить нефункциональное тестирование, такое как нагрузочное тестирование (Performance and Load Testing), тестирование удобства пользовавия (Usability Testing) и т.д. Так как у каждого приложения есть «узкие места», на которые следует обратить внимание при тестировании. Далее начать выполнять, проходить тест кейсы и в момент, когда все тест кейсы пройдены и найденные баги исправлены и перепроверены, можно завершать тестирование.\",\"assets/voise/2qUs20.mp3\",\"https://software-testing.org/testing/kriterii-vyhoda-zaversheniya-testirovaniya-exit-criteria-kogda-ostanovitsya-testirovat.html#:~:text=%D0%A1%D0%BB%D0%B5%D0%B4%D1%83%D0%B5%D1%82%20%D0%B2%D1%8B%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D1%8C%203%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D1%85%20%D0%BA%D1%80%D0%B8%D1%82%D0%B5%D1%80%D0%B8%D1%8F,%D0%BD%D0%B0%D0%B9%D0%B4%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%B1%D0%B0%D0%B3%D0%B8%20%D0%B8%D1%81%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%8B%20%D0%B8%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%B5%D0%BD%D1%8B\"],\"21\":[\"Что мы действительно должны покрывать тест-кейсами, а что считается избыточным расходом времени и денег? Когда нецелесообразно писать тест-кейсы?\",\"\",\"assets/voise/2qUs21.mp3\"],\"22\":[\"Для какого функционала труднее всего написать тест-кейсы?\",\"\",\"assets/voise/2qUs22.mp3\"],\"23\":[\"Как посчитать Cyclomatic complexity?\",\"\",\"assets/voise/2qUs23.mp3\"],\"24\":[\"В чем основная разница между defect detection percentage и defect removal efficiency?\",\"\",\"assets/voise/2qUs24.mp3\"],\"25\":[\"Какие модели risk-based testing вы знаете?\",\"\",\"assets/voise/2qUs25.mp3\"],\"26\":[\"Что такое тестирование API? Какими инструментами пользуются для его выполнения?\",\"\",\"assets/voise/2qUs26.mp3\"],\"27\":[\"Что такое performance testing? Какими инструментами пользуются для его выполнения?\",\"\",\"assets/voise/2qUs27.mp3\"],\"28\":[\"Что такое load и stress testing? Какими инструментами пользуются для их выполнения?\",\"\",\"assets/voise/2qUs28.mp3\"],\"29\":[\"Что такое contract testing?\",\"\",\"assets/voise/2qUs29.mp3\"],\"30\":[\"Какая разница между Scrum и Kanban?\",\"\",\"assets/voise/2qUs30.mp3\"],\"31\":[\"Расскажите о ритуалах, ценностях и ролях в Scrum.\",\"\",\"assets/voise/2qUs31.mp3\"],\"32\":[\"Как выбор методологии может повлиять на качество разработки?\",\"\",\"assets/voise/2qUs32.mp3\"],\"33\":[\" Нулевой спринт в Scrum. Для тестирования есть задание под названием Настройка среды. Что здесь нужно выполнять?\",\"\",\"assets/voise/2qUs33.mp3\"],\"34\":[\"Расскажите, как вы будете строить и внедрять стратегию по автоматизации тестирования используя Selenium.\",\"\",\"assets/voise/2qUs34.mp3\"],\"35\":[\"Как взаимодействуют клиентская библиотека Selenium, драйвер браузера и сам браузер?\",\"\",\"assets/voise/2qUs35.mp3\"],\"36\":[\"Для чего используют browser capabilities, arguments и options?\",\"\",\"assets/voise/2qUs36.mp3\"],\"37\":[\"Что такое iframe и как с ним работать в Selenium?\",\"\",\"assets/voise/2qUs37.mp3\"],\"38\":[\"Как обрабатывать браузерные сообщения (alerts)?\",\"\",\"assets/voise/2qUs38.mp3\"],\"39\":[\"Что такое Appium?\",\"\",\"assets/voise/2qUs39.mp3\"],\"40\":[\"Что такое Electron-based applications? Как использовать Selenium и Appium для их тестирования?\",\"\",\"assets/voise/2qUs40.mp3\"],\"41\":[\"Как взаимодействовать с запросами, отправляемыми из браузера?\",\"\",\"assets/voise/2qUs41.mp3\"],\"42\":[\"Как взаимодействовать с cookies, LocalStorage и SessionStorage?\",\"\",\"assets/voise/2qUs42.mp3\"],\"43\":[\"Что такое и чем отличаются виртуальная машина, симулятор и эмулятор?\",\"\",\"assets/voise/2qUs43.mp3\"],\"44\":[\"Что такое контейнер и чем он отличается от виртуальной машины?\",\"\",\"assets/voise/2qUs44.mp3\"],\"45\":[\"Как используют виртуальные машины и контейнеры в автоматизации?\",\"\",\"assets/voise/2qUs45.mp3\"],\"46\":[\"​​Что такое IaaS и PaaS? Приведите примеры.\",\"\",\"assets/voise/2qUs46.mp3\"],\"47\":[\"Что такое Configuration Management?\",\"\",\"assets/voise/2qUs47.mp3\"],\"48\":[\"Что такое Provisioning?\",\"\",\"assets/voise/2qUs48.mp3\"],\"49\":[\" Какие команды Linux Shell вам известны? Как с помощью команд Linux Shell найти лог-файл и строчку с ошибкой в ​​файле?\",\"\",\"assets/voise/2qUs49.mp3\"],\"50\":[\"Какие команды Windows CMD вам известны? Как с помощью команд Windows CMD найти IP-адрес машины?\",\"\",\"assets/voise/2qUs50.mp3\"],\"51\":[\"Что такое SSH и как им пользоваться?\",\"\",\"assets/voise/2qUs51.mp3\"],\"52\":[\"Что такое bash и batch скрипты? Зачем их используют?\",\"\",\"assets/voise/2qUs52.mp3\"],\"53\":[\"Какая разница между авторизацией и аутентификацией?\",\"\",\"assets/voise/2qUs53.mp3\"],\"54\":[\"Как происходит авторизация на сервере?\",\"\",\"assets/voise/2qUs54.mp3\"],\"55\":[\"Какие статус-коды ошибок бывают? Может ли сервер отправить код 400, если проблема на его стороне?\",\"\",\"assets/voise/2qUs55.mp3\"],\"56\":[\"Как выполнить Debug страницы в браузере?\",\"\",\"assets/voise/2qUs56.mp3\"],\"57\":[\"Как протестировать адаптивную верстку?\",\"\",\"assets/voise/2qUs57.mp3\"],\"58\":[\"Что такое WebSocket и как проверить обрыв соединения?\",\"\",\"assets/voise/2qUs58.mp3\"],\"59\":[\"Каковы есть основные виды уязвимости веб-приложений?\",\"\",\"assets/voise/2qUs59.mp3\"],\"60\":[\"Какие инструменты для тестирования Web performance client-side знаете?\",\"\",\"assets/voise/2qUs60.mp3\"],\"61\":[\"Какова разница между методами GET и POST?\",\"\",\"assets/voise/2qUs61.mp3\"],\"62\":[\"Какая разница между методами PUT и PATCH?\",\"\",\"assets/voise/2qUs62.mp3\"],\"63\":[\"Какие знаете сниферы?\",\"\",\"assets/voise/2qUs63.mp3\"],\"64\":[\"Какова разница между DROP и TRUNCATE?\",\"\",\"assets/voise/2qUs64.mp3\"],\"65\":[\"Что такое case function?\",\"\",\"assets/voise/2qUs65.mp3\"],\"66\":[\"Что такое collation?\",\"\",\"assets/voise/2qUs66.mp3\"],\"67\":[\"Что такое схема GraphQL?\",\"\",\"assets/voise/2qUs67.mp3\"],\"68\":[\"Объясните разницу между OLTP и OLAP.\",\"\",\"assets/voise/2qUs68.mp3\"],\"69\":[\"Вспомните разные типы репликации в SQL Server?\",\"\",\"assets/voise/2qUs69.mp3\"],\"70\":[\"Что вы понимаете под Self Join? Приведите примеры.\",\"\",\"assets/voise/2qUs70.mp3\"],\"71\":[\"Что такое cursor и как им пользоваться?\",\"\",\"assets/voise/2qUs71.mp3\"],\"72\":[\"Что основное нужно проверить при тестировании мобильного приложения?\",\"\",\"assets/voise/2qUs72.mp3\"],\"73\":[\"Что такое Manifest.xml в .apk файле и какие данные там указывают?\",\"\",\"assets/voise/2qUs73.mp3\"],\"74\":[\"Что такое режим разработчика Do not keep activities?\",\"\",\"assets/voise/2qUs74.mp3\"],\"75\":[\"Как происходит перехват трафика http/https для мобильных устройств?\",\"\",\"assets/voise/2qUs75.mp3\"],\"76\":[\"В каком виде хранятся данные в мобильных приложениях локально?\",\"\",\"assets/voise/2qUs76.mp3\"],\"77\":[\"Как тестировать миграцию локальных данных?\",\"\",\"assets/voise/2qUs77.mp3\"],\"78\":[\"Каковы основные компоненты Android-приложений (активити / фрагмент / сервис / интент-фильтр)?\",\"\",\"assets/voise/2qUs78.mp3\"],\"79\":[\"Опишите жизненный цикл разработки ПО.\",\"\",\"assets/voise/2qUs79.mp3\"],\"80\":[\"Что такое утечки памяти? Как найти?\",\"\",\"assets/voise/2qUs80.mp3\"],\"81\":[\"Как протестировать билд на Android?\",\"\",\"assets/voise/2qUs81.mp3\"],\"82\":[\"Что такое Testflight? Как тестировать с его помощью?\",\"\",\"assets/voise/2qUs82.mp3\"],\"83\":[\"Как работает Android? Какая у него архитектура?\",\"\",\"assets/voise/2qUs83.mp3\"],\"84\":[\"Как происходит деплой программ IOS/AOS?\",\"\",\"assets/voise/2qUs84.mp3\"],\"85\":[\" Что делать, если разработчик не соглашается, что указанный баг действительно является багом? А если в требованиях использована неоднозначная формулировка? Если бизнес-аналитик, PM и представитель клиента сейчас недоступны, чтобы подсказать? Как можно предотвратить такую ​​ситуацию?\",\"\",\"assets/voise/samCh.mp3\"],\"86\":[\"Сложилась ситуация, когда команда тестирования не успевает закончить свою работу в дедлайн. Как правильно действовать в этом случае? А если релиз передвинуть нельзя? А если никакие фичи из релиза забрать нельзя?\",\"\",\"assets/voise/samCh.mp3\"],\"87\":[\"Что делать, если проект уже начался, а QA-инженер там начал работать только когда начали разрабатываться бизнес-фичи? Какие этапы тестирования теперь нужно наверстать и нужно ли это? Как это сделать максимально грамотно без ущерба для загрузки по тестированию новых фич? Какие риски имеет позднее вовлечение QA-инженера в разработку?\",\"\",\"assets/voise/samCh.mp3\"],\"88\":[\"Веб-страница с полями e-mail, password и кнопкой submit. Назовите отрицательные тест-кейсы, по которым можно проверить эту страницу.\",\"\",\"assets/voise/samCh.mp3\"],\"89\":[\" Предположим, что после нажатия кнопки submit страница перезагружается и ранее введенные данные исчезают. Как проверить, что информация отправлена ​​в базу данных?\",\"\",\"assets/voise/samCh.mp3\"],\"90\":[\"Как проверить, что данные отправились на сервер, если у нас нет доступа к бэкенду?\",\"\",\"assets/voise/samCh.mp3\"],\"91\":[\"Приведите примеры улучшений для приведенной веб-страницы (любая на выбор).\",\"\",\"assets/voise/samCh.mp3\"],\"92\":[\"Составить Smoke Test Suite для DOU.ua.\",\"\",\"assets/voise/samCh.mp3\"],\"93\":[\"Протестовать функционал банкомата с помощью техники State Transition Diagram.\",\"\",\"assets/voise/samCh.mp3\"],\"94\":[\"Написать предельные значения для ввода в форму оплаты товара на сайте.\",\"\",\"assets/voise/samCh.mp3\"],\"95\":[\"Есть метод POST, который регистрирует нового пользователя на сайте, есть тело запроса, содержащее данные о почте, телефоне, имени пользователя и адресе проживания. Какие кейсы для проверки можете привести?\",\"\",\"assets/voise/samCh.mp3\"],\"96\":[\"На что следует акцентировать внимание при автоматизации методов API? Что следует проверять?\",\"\",\"assets/voise/samCh.mp3\"],\"97\":[\"Вы тестируете логин-форму, вводите логин и пароль, нажимаете кнопку логин и ничего не происходит. Ваши действия?\",\"\",\"assets/voise/samCh.mp3\"],\"98\":[\"Что такое Тестовое Покрытие (Test Coverage)\",\"это одна из метрик оценки качества тестирования, представляющая из себя плотность покрытия тестами требований либо исполняемого кода.\",\"http://www.protesting.ru/testing/testcoverage.html\",\"\",\"assets/voise/samCh.mp3\"],\"99\":[\"Вам нужно сделать Regression Testing за два дня. Как вы это сделаете, если Regression Run охватывает 1000 тест-кейсов?\",\"\",\"assets/voise/samCh.mp3\"],\"100\":[\"Вы тестируете интернет-магазин, который продаёт карандаши. В заказе нужно указать количество карандашей (максимум для заказа – 1000 штук). В зависимости от заказанного количества карандашей отличается цена: _1–100 – 10 грн за шт. _101-200 – 9 грн за шт. _201-300 – 8 грн за шт. _С каждой новой сотней цена уменьшается на 1 гривну. Задание: используя тест-дизайн, опишите все необходимые тест-кейсы, которые будут максимально покрывать описанную функциональность.\",\"\",\"assets/voise/samCh.mp3\"],\"101\":[\"Есть приложение типа мессенджера, пользователь заходит в чат и отсылает файл (видит сообщение Failed to send...) Когда это может быть баг, а когда нет?\",\"\",\"assets/voise/samCh.mp3\"],\"102\":[\"Есть веб-приложение интернет-магазина (регистрация, логин, поиск товаров, корзина и покупки). Программу поддерживают следующие браузеры: Chrome, Safari, Edge. У нас есть ограниченное время на тестирование. Расскажите, как вы будете проверять приложение?\",\"\",\"assets/voise/samCh.mp3\"],\"103\":[\"Напишите автоматические тестовые сценарии для проверки API операций создания и просмотра GitHub Gists. Интегрируйте ваш проект с известной вам CI-системой.\",\"\",\"assets/voise/samCh.mp3\"]},{\"1\":[\"Как вы преодолеете трудности из-за отсутствия надлежащей документации для тестирования?\",\"\",\"assets/voise/3qUs1.mp3\"],\"2\":[\"Какой подход является наилучшим для старта QA в проекте?\",\"\",\"assets/voise/3qUs2.mp3\"],\"3\":[\"Какие препятствия могут возникнуть в обеспечении качества для Agile Tester?\",\"\",\"assets/voise/3qUs3.mp3\"],\"4\":[\"Что такое Definition of Done?\",\"\",\"assets/voise/3qUs4.mp3\"],\"5\":[\"Когда можно считать, что тестирование окончено?\",\"\",\"assets/voise/3qUs5.mp3\"],\"6\":[\"Что такое RCA в тестировании? Нужно ли его проводить?\",\"\",\"assets/voise/3qUs6.mp3\"],\"7\":[\"Какой подход вы используете для Test Cases Review?\",\"\",\"assets/voise/3qUs7.mp3\"],\"8\":[\"Какие виды рисков существуют? Что такое Mitigation Plan?\",\"\",\"assets/voise/3qUs8.mp3\"],\"9\":[\"На основе чего нужно составлять стратегию для проведения тестирования нагрузки?\",\"\",\"assets/voise/3qUs9.mp3\"],\"10\":[\"Как часто следует ревьюировать тестовую документацию?\",\"\",\"assets/voise/3qUs10.mp3\"],\"11\":[\"Как можно быстро сделать выборку необходимых проверок для смоук-тестирования?\",\"\",\"assets/voise/3qUs11.mp3\"],\"12\":[\"Как запланировать загруженность команды тестировщиков?\",\"\",\"assets/voise/3qUs12.mp3\"],\"13\":[\"Какую ценность несет анализ результатов тестирования команде и проекту в целом?\",\"\",\"assets/voise/3qUs13.mp3\"],\"14\":[\"Как можно подкорректировать флоу разработки, чтобы получать более чистые результаты на выходе и уменьшить количество багов на проде?\",\"\",\"assets/voise/3qUs14.mp3\"],\"15\":[\"Расскажите о метриках качества, которые вы применяли. Зачем они нужны?\",\"\",\"assets/voise/3qUs15.mp3\"],\"16\":[\"Как провести эстимейт задачи? Каковы техники оценки объема тестирования существуют?\",\"\",\"assets/voise/3qUs16.mp3\"],\"17\":[\"Как можно посчитать покрытие тестами функционала?\",\"\",\"assets/voise/3qUs17.mp3\"],\"18\":[\"Какое оптимальное количество шагов в тестовом сценарии?\",\"\",\"assets/voise/3qUs18.mp3\"],\"19\":[\"Как избежать появления регрессивных дефектов?\",\"\",\"assets/voise/3qUs19.mp3\"],\"20\":[\"Что такое тестирование со смещением влево (Shift left testing)?\",\"\",\"assets/voise/3qUs20.mp3\"],\"21\":[\"Как будете тестировать программу, если для продукта нет документации?\",\"\",\"assets/voise/3qUs21.mp3\"],\"22\":[\"В чем смысл юнит-тестов?\",\"\",\"assets/voise/3qUs22.mp3\"],\"23\":[\"Какие минусы полной автоматизации тестирования?\",\"\",\"assets/voise/3qUs23.mp3\"],\"24\":[\"Что такое ROI и как его считать?\",\"\",\"assets/voise/3qUs24.mp3\"],\"25\":[\"Что такое CI/CD? Какие плюсы и минусы этого подхода?\",\"\",\"assets/voise/3qUs25.mp3\"],\"26\":[\"TOP OWASP: какие знаете уязвимости и методы защиты?\",\"\",\"assets/voise/3qUs26.mp3\"],\"27\":[\"Что вы думаете по поводу BDD? Когда следует использовать, а когда будет только хуже? Если все же следует использовать, то для UI или API автоматизированного тестирования?\",\"\",\"assets/voise/samCh.mp3\"],\"28\":[\"Что такое сокеты и как их тестировать, вручную и автоматизировано? Зачем их используют?\",\"\",\"assets/voise/3qUs28.mp3\"],\"29\":[\"Когда следует делать стресс-тестирование на проектах? От чего отталкиваться, когда строите сценарий для такого тестирования? Что учесть при выборе инструмента?\",\"\",\"assets/voise/samCh.mp3\"],\"30\":[\"Как проверить безопасность на веб-странице?\",\"\",\"assets/voise/3qUs30.mp3\"],\"31\":[\"Расскажите об алгоритмах шифрования трафика.\",\"\",\"assets/voise/3qUs31.mp3\"],\"32\":[\"Что такое NIC?\",\"\",\"assets/voise/3qUs32.mp3\"],\"33\":[\"Для чего нужен протокол RTP?\",\"\",\"assets/voise/3qUs33.mp3\"],\"34\":[\"Что, по вашему мнению, лучше – SIP или PRI?\",\"\",\"assets/voise/3qUs34.mp3\"],\"35\":[\"Что такое NAT?\",\"\",\"assets/voise/3qUs35.mp3\"],\"36\":[\"Зачем нужно автоматизировать?  назовите плюсы и минусы автоматизации\",\"Главная цель внедрения автоматизации бизнеса в работу компании – оптимизация деятельности, помогает свести к минимуму рутинные задачи. Это особенно важно для процессов, которые непосредственно влияют на достижение результата. Минимизирует человеческий фактор. Иногда ошибки, вызванные человеческим фактором, могут дорого стоить. _  Повторяемость – все написанные тесты всегда будут выполняться однообразно, то есть исключен «человеческий фактор» _  Преимущества автоматизации тестирования:_ _  Быстрое выполнение – автоматизированному скрипту не нужно сверяться с инструкциями и документациями, это сильно экономит время выполнения. _  Меньшие затраты на поддержку – когда автоматические скрипты уже написаны, на их поддержку и анализ результатов требуется, как правило, меньшее время чем на проведение того же объема тестирования вручную. _  Отчеты – автоматически рассылаемые и сохраняемые отчеты о результатах тестирования. _  Выполнение без вмешательства – во время выполнения тестов инженер-тестировщик может заниматься другими полезными делами, или тесты могут выполняться в нерабочее время (этот метод предпочтительнее, так как нагрузка на локальные сети ночью снижена). _   Недостатки автоматизации_ Повторяемость – все написанные тесты всегда будут выполняться однообразно. Это одновременно является и недостатком, так как тестировщик, выполняя тест вручную, может обратить внимание на некоторые детали и, проведя несколько дополнительных операций, найти дефект. Скрипт этого сделать не может. _Затраты на поддержку – несмотря на то, что в случае автоматизированных тестов они меньше, чем затраты на ручное тестирование того же функционала – они все же есть. Чем чаще изменяется приложение, тем они выше. _ Большие затраты на разработку – разработка автоматизированных тестов это сложный процесс, так как фактически идет разработка приложения, которое тестирует другое приложение. _ Стоимость инструмента для автоматизации – в случае если используется лицензионное ПО, его стоимость может быть достаточно высока. _ Пропуск мелких ошибок - автоматический скрипт может пропускать мелкие ошибки на проверку которых он не запрограммирован. Это могут быть неточности в позиционировании окон, ошибки в надписях, которые не проверяются, ошибки контролов и форм с которыми не осуществляется взаимодействие во время выполнения скрипта. \",\"assets/voise/3qUs36.mp3\"],\"37\":[\"Сформулируйте негативные сценарии для POST-запроса, который создаёт нового пользователя.\",\"\",\"assets/voise/3qUs37.mp3\"],\"38\":[\"Как вы регулируете конфликтные ситуации между QA и разработчиками?\",\"\",\"assets/voise/3qUs38.mp3\"],\"39\":[\"Какое минимальное количество тест-кейсов необходимо, чтобы убедиться в корректной работе этой(на которой ты находишься) веб-страницы?\",\"\",\"assets/voise/samCh.mp3\"],\"40\":[\" Продайте мне тестирование как клиенту, не желающему его покупать. Кратко и структурированно опишите вашу работу на каждом из этапов разработки ПО, используя профессиональные термины (не лить воду).\",\"\",\"assets/voise/samCh.mp3\"],\"41\":[\"У вас есть онлайн-калькулятор. Вы вводите 1+1 и получаете 3. Расскажите, как вы будете искать причину проблемы.\",\"\",\"assets/voise/samCh.mp3\"],\"42\":[\"Могут ли быть такие виды архитектур? Клиент -> сервер -> База данных  Чего может быть недостаточно для правильной работы архитектур?\",\"\",\"assets/voise/samCh.mp3\"],\"43\":[\"Есть веб-страница с полями e-mail, password и кнопкой submit. Предположим, что после нажатия кнопки submit страница перезагружается и ранее введенные данные исчезают. Как проверить, что данные отправлены в базу данных?\",\"\",\"assets/voise/samCh.mp3\"],\"44\":[\"Есть проект, на котором нет тестовой документации, но проекту уже год. Мануальным QA не хватает времени на тестирование, они очень устали, есть желание уволиться. Какое решение по команде можно принять? \",\"\",\"assets/voise/samCh.mp3\"]}]}");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_startaStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/startaStage */ "./src/js/modules/startaStage.js");
/* harmony import */ var _modules_upWindowuser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/upWindowuser */ "./src/js/modules/upWindowuser.js");
/* harmony import */ var _modules_dblClicChanje__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dblClicChanje */ "./src/js/modules/dblClicChanje.js");
/* harmony import */ var _modules_togallVois__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/togallVois */ "./src/js/modules/togallVois.js");
/* harmony import */ var _modules_openAllQuestion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/openAllQuestion */ "./src/js/modules/openAllQuestion.js");
/* harmony import */ var _modules_lostMicrophone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/lostMicrophone */ "./src/js/modules/lostMicrophone.js");
/* harmony import */ var _modules_whereStay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/whereStay */ "./src/js/modules/whereStay.js");







window.addEventListener('DOMContentLoaded', function () {
  Object(_modules_startaStage__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_togallVois__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_modules_dblClicChanje__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_openAllQuestion__WEBPACK_IMPORTED_MODULE_4__["default"])();
  Object(_modules_lostMicrophone__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_modules_whereStay__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_modules_upWindowuser__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/app.js":
/*!*******************************!*\
  !*** ./src/js/modules/app.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_multiPlepresButtons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/multiPlepresButtons */ "./src/js/services/multiPlepresButtons.js");
/* harmony import */ var _services_chech__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/chech */ "./src/js/services/chech.js");
/* harmony import */ var _services_automationSizeInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/automationSizeInput */ "./src/js/services/automationSizeInput.js");
/* harmony import */ var _services_voiceQuestion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/voiceQuestion */ "./src/js/services/voiceQuestion.js");








var count = 1;

var app = function app(selStart, selStop, selRemove, selTextare, selPahtVoid, selLocal, selBtnResp, selVoisIcPuls) {
  var recognizer = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)(); // var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
  // const recognizer =  new SpeechRecognition(); 
  // Ставим опцию, чтобы распознавание началось ещё до того, как пользователь закончит говорить

  recognizer.interimResults = true; // Какой язык будем распознавать?

  recognizer.lang = 'ru-Ru';
  global.recog = recognizer;
  var btnStartVoise = document.querySelector(selStart);
  var letstop = document.querySelector(selStop);
  var remove = document.querySelector(selRemove);
  var textare = document.querySelector(selTextare);
  var btnResp = document.querySelector(selBtnResp);
  var material_fb = document.querySelector('.icon-material_fb');
  var resal = true;
  var setinte;
  btnResp.addEventListener('click', function (e) {
    e.preventDefault();
    this.classList.toggle("active");
    var panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
  remove.addEventListener('click', function (e) {
    e.preventDefault();
    var target = null;

    if (e.target.localName === "button") {
      target = e.target.parentNode.nextElementSibling;
    } else {
      target = e.target.parentNode.parentNode.nextElementSibling;
    }

    target.value = '';
    target.innerHTML = '';
    localStorage.setItem(selLocal, '');
  });

  recognizer.onend = function () {
    console.log("Распознавание голоса закончено" + selStart);
    Object(_services_multiPlepresButtons__WEBPACK_IMPORTED_MODULE_4__["default"])(false, selStart);
    if (!resal) return;
    recognizer.start();
  };

  recognizer.onstart = function (e) {
    var el = textare;

    if (el.scrollHeight > 100) {
      el.style.cssText = 'height:' + el.scrollHeight + 'px';
    }

    if (!textare.value) {
      el.style.cssText = 'height:100px;';
    }

    console.log("Распознавание голоса запущено" + selStart);
    Object(_services_multiPlepresButtons__WEBPACK_IMPORTED_MODULE_4__["default"])(true, selStart);
  };

  recognizer.onerror = function (_ref) {
    var error = _ref.error;
    console.error(error);
  }; // const audio = new Audio();
  // audio.preload = 'auto';
  // audio.src = `./${selPahtVoid}`;


  var icon_material_li = document.querySelector('.icon-material_li');

  if (selStart == '.start-stop1' && !icon_material_li.classList.contains('icon-material_li_mute')) {
    Object(_services_voiceQuestion__WEBPACK_IMPORTED_MODULE_7__["default"])(document.querySelector('.start-stop1').offsetParent.children[0], false); // audio.addEventListener('play', function(e){
  } //Если полььзователь включает звук у аудио то у дургих он отключается


  document.querySelectorAll("#aud").forEach(function (item) {
    item.onplay = function (event) {
      document.querySelectorAll("audio").forEach(function (audio) {
        if (audio == event.target) {} else {
          audio.pause();
        }
      });
    };
  });
  btnStartVoise.addEventListener('click', function (event) {
    event.preventDefault(); //set localStorage Where Stay user 

    localStorage.setItem('WhereStayUser', selLocal);
    material_fb.classList.add('icon-material_Pulsev');
    resal = true;
    var target = null;

    if (event.srcElement.nodeName === "IMG") {
      target = event.srcElement.offsetParent.parentElement.nextElementSibling;
    } else {
      target = event.target.parentElement.nextElementSibling;
    }

    document.querySelector(selVoisIcPuls).classList.add('iconActive');
    recognizer.start();

    recognizer.onresult = function (event) {
      var result = event.results[event.resultIndex];

      if (result.isFinal) {
        console.log('Вы сказали в тоге: ' + result[0].transcript);

        if (localStorage.getItem(selLocal) !== null) {
          // …то отображаем его содержимое в нашем редакторе
          var local = localStorage.getItem(selLocal),
              cor = "".concat(local, " ").concat(result[0].transcript);
          localStorage.setItem(selLocal, Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(cor));
          target.value = [Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(cor.trim())];
        } else {
          var _local = localStorage.getItem(selLocal),
              _cor = "".concat(_local, " ").concat(result[0].transcript);

          target.innerText = Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(_cor.trim());
          localStorage.setItem(selLocal, Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(_cor.trim()));
        }
      } else {
        console.log('Промежуточный результат: ', result[0].transcript);

        if (localStorage.getItem(selLocal) !== null) {
          // …то отображаем его содержимое в нашем редакторе
          var _local2 = localStorage.getItem(selLocal),
              _cor2 = "".concat(_local2, " ").concat(result[0].transcript);

          target.value = Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(_cor2.trim());
        } else {
          var _local3 = localStorage.getItem(selLocal),
              _cor3 = "".concat(_local3, " ").concat(result[0].transcript);

          target.value = Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(_cor3.trim());
        }
      }
    };
  });
  letstop.addEventListener('click', function (event) {
    event.preventDefault();
    clearTimeout(setinte);
    material_fb.classList.remove('icon-material_Pulsev');

    if (event.target.localName === "button") {
      event.target.parentNode.children[2].children[0].classList.remove('iconActive');
    } else {
      if (event.srcElement.offsetParent.form[1].children[0].attributes[0].ownerElement.className.slice(5) === 'iconActive') {
        event.srcElement.offsetParent.form[1].children[0].attributes[0].ownerElement.classList.remove('iconActive');
      }
    }

    btnStartVoise.classList.add('start');
    resal = false;
    recognizer.abort();
  });
  textare.addEventListener('input', function (event) {
    event.preventDefault();
    localStorage.setItem(selLocal, Object(_services_chech__WEBPACK_IMPORTED_MODULE_5__["default"])(textare.value));
  });

  function stop(params) {
    resal = false; // recognizer.abort();

    params.abort();
  }

  Object(_services_automationSizeInput__WEBPACK_IMPORTED_MODULE_6__["default"])(textare);
};

/* harmony default export */ __webpack_exports__["default"] = (app);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/js/modules/dblClicChanje.js":
/*!*****************************************!*\
  !*** ./src/js/modules/dblClicChanje.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_quetionAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/quetionAdd */ "./src/js/services/quetionAdd.js");


var dblClicChanje = function dblClicChanje() {
  var button = document.querySelector('.stateBtn');
  button.addEventListener('click', function (e) {
    Object(_services_quetionAdd__WEBPACK_IMPORTED_MODULE_0__["default"])(false);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (dblClicChanje);

/***/ }),

/***/ "./src/js/modules/lostMicrophone.js":
/*!******************************************!*\
  !*** ./src/js/modules/lostMicrophone.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_9__);











var lostMicrophone = function lostMicrophone() {
  var btnLostMicrophone = document.querySelector('.fab-buttons__link');
  btnLostMicrophone.addEventListener('click', function (e) {
    e.preventDefault();
    var list = document.querySelectorAll('.start-stop');

    if (!list[0].classList.contains('btnDeactiv') && !list[2].classList.contains('btnDeactiv')) {
      return console.log('кнопка не нажата');
    } else {
      console.log('какая-то кнопка нажата');
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var iterator = _step.value;
        var li = iterator.className.split(' ');

        if (li.length[4] == undefined && !li.includes("btnDeactiv")) {
          setTimeout(function () {
            iterator.scrollIntoView({
              block: "center",
              behavior: "smooth"
            });
          }, 200);
        }
      };

      for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }); // btnDeactiv
};

/* harmony default export */ __webpack_exports__["default"] = (lostMicrophone);

/***/ }),

/***/ "./src/js/modules/openAllQuestion.js":
/*!*******************************************!*\
  !*** ./src/js/modules/openAllQuestion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);








var openAllQuestion = function openAllQuestion() {
  var icon_material_Open_all = document.querySelector('.icon-material_gp');
  icon_material_Open_all.addEventListener('click', function (e) {
    e.preventDefault(); // quetionAdd(true, true)

    var body = document.querySelector('body');
    var listAll = document.querySelectorAll('.wrapper');
    var titleQuestionvois = document.querySelector('.wrapperTutle');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var iterator = _step.value;

        if (iterator.classList.contains('hide') && iterator.classList.contains('quetion1') !== 'quetion1') {
          titleQuestionvois.classList.add('relev');
          iterator.classList.remove('hide');
          setTimeout(function () {
            iterator.scrollIntoView({
              block: "center",
              behavior: "smooth"
            });
          }, 1200);
          body.style.height = body.offsetHeight + 350 + "px";
        }
      };

      for (var _iterator = listAll[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (openAllQuestion);

/***/ }),

/***/ "./src/js/modules/standardQuestions.js":
/*!*********************************************!*\
  !*** ./src/js/modules/standardQuestions.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/js/modules/app.js");
/* harmony import */ var _services_chech__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chech */ "./src/js/services/chech.js");
/* harmony import */ var _services_matchSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/matchSearch */ "./src/js/services/matchSearch.js");
/* harmony import */ var _db_db_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../db/db.json */ "./src/js/db/db.json");
var _db_db_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/db.json */ "./src/js/db/db.json", 1);




 // const db = require("../assets/db.json")

var standardQuestions = function standardQuestions(selector) {
  var selectorCit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'standart';

  var _loop = function _loop(key) {
    var element = selector[key];

    if (Object.hasOwnProperty.call(selector, key)) {
      var div = document.createElement('div');
      div.classList.add('tinRightIn');
      div.innerHTML = "\n      <div class=\"wrapper ".concat(selectorCit, "question").concat(key, " ").concat('quetion' + key === 'quetion1' ? 'q' : 'hide', " \">\n      <form action=\"#\">\n          <div class=\"row\">\n            <div class=\"quesion\">\n              <div class=\"quesionNum\">").concat(key, "</div>\n              <p id=\"textQuesion\">").concat(element[0], "</p> \n            </div>\n            <div class=\"wrap-button\">\n              <!-- <p id=\"textQuesion\">Enter Text</p>  -->\n                \n               <audio controls class=\"audio\"  style=\"width:100%;max-width:260px;\" id=\"aud\">\n                <source src=\"").concat(element[2] ? element[2] : 'assets/voise/samCh.mp3', "\" type=\"audio/mp3\">\n                <source src=\"").concat(element[2] ? element[2] : 'assets/voise/samCh.mp3', "\">\n                <p>Your browser doesn't support HTML5 audio. Here is a \n                <a href=\"viper.mp3\">link to the audio</a> instead.</p>\n              </audio>\n              <button class=\"btn-remove btn btn-remove").concat(key, "\">\n              <img class=\"icon\" src=\"assets/img/cors.png\" alt=\"remove\">\n              </button>\n              <button class=\"btn-remove btn start-stop start-stop").concat(key, "\">\n              <img class=\"icon\" id=\"voisIconi").concat(key, "\" src=\"assets/img/micro.png\" alt=\"vois\">\n              \n              </button>\n              <button class=\"btn-remove btn pause pause").concat(key, "\">\n              <img class=\"icon\" src=\"assets/img/mute.png\" alt=\"stop\">\n              \n              </button>\n            </div>\n            <textarea class=\"lasss lasss").concat(key, "\" value=\"\"></textarea>\n        \n          </div>\n        \n        </form> \n        <!-- .wrapper -->\n        <div class=\"respons\">\n        <button id=\"btnResp").concat(key, "\" class=\"accordion\">\u041E\u0442\u0432\u0435\u0442</button>\n         <div class=\"panel\">\n            <p class=\"textOler\">").concat(element[1] ? Object(_services_matchSearch__WEBPACK_IMPORTED_MODULE_3__["default"])(element[1]) : 'ответа пока нет', "</p>\n        </div>\n        </div>\n  \n      </div>\n      \n      "); //  <p  style="text-align: center;" >Ответ</p>
      //  document.querySelector('.quetion1').classList.remove('hide')

      document.querySelector('.wrapperPagestart').append(div);
      setTimeout(function () {
        Object(_app__WEBPACK_IMPORTED_MODULE_1__["default"])('.start-stop' + key, '.pause' + key, '.btn-remove' + key, '.lasss' + key, element[2], selectorCit + 'question' + key, '#btnResp' + key, '#voisIconi' + key); // проверяется для внесения от инпутов из локалки

        if (localStorage.getItem(selectorCit + 'question' + key) !== null) {
          // …то отображаем его содержимое в нашем редакторе
          var local = localStorage.getItem(selectorCit + 'question' + key),
              cor = "".concat(local);
          localStorage.setItem(selectorCit + 'question' + key, Object(_services_chech__WEBPACK_IMPORTED_MODULE_2__["default"])(local));
          document.querySelector('.lasss' + key).value = cor;
        } // quetionAdd(`quetion${key}`)

      }, 1000);
    }
  };

  for (var key in selector) {
    _loop(key);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (standardQuestions);

/***/ }),

/***/ "./src/js/modules/startaStage.js":
/*!***************************************!*\
  !*** ./src/js/modules/startaStage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _standardQuestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standardQuestions */ "./src/js/modules/standardQuestions.js");
/* harmony import */ var _db_db_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/db.json */ "./src/js/db/db.json");
var _db_db_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/db.json */ "./src/js/db/db.json", 1);




var startaStage = function startaStage(selectFun) {
  var btnsStart = document.querySelectorAll('.button'),
      wrapperTutle = document.querySelector('.wrapperTutle'),
      buttonHolder = document.querySelector('.buttonHolder');
  var body = document.body,
      html = document.documentElement;
  var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  btnsStart.forEach(function (item) {
    item.addEventListener('click', function (e) {
      wrapperTutle.classList.add('pps');
      setTimeout(function () {
        setTimeout(function () {
          wrapperTutle.classList.remove('pps');
          buttonHolder.classList.remove('hide');
          btnsStart.forEach(function (span) {
            span.nextElementSibling.classList.remove('textActiveLevel');
          });
          e.target.nextElementSibling.classList.add('textActiveLevel');
        }, 1000);
        var navel = document.querySelector('#navel'),
            burger_men = document.querySelector('#burger_men'),
            btnBurge_men = document.querySelector('#btnBurge_men'),
            spanBurger_man = document.querySelector('#spanBurger_man'),
            overlowBurger = document.querySelector('#overlowBurger');

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          // код для мобильных устройств
          if (navel.classList.contains('burger-menu_nav')) {
            var menu = document.querySelector('.burger-menu');
            menu.classList.remove('burger-menu_active');
          } else {
            navel.classList.add('burger-menu_nav');
            burger_men.classList.add('burger-menu');
            btnBurge_men.classList.add('burger-menu_button');
            spanBurger_man.classList.add('burger-menu_lines');
            overlowBurger.classList.add('burger-menu_overlay');
            burgerMenu('.burger-menu');
          }
        } else {
          buttonHolder.classList.add('holeOut');

          if (navel.classList.contains('burger-menu_nav')) {
            navel.classList.remove('burger-menu_nav');
            burger_men.classList.remove('burger-menu');
            btnBurge_men.classList.remove('burger-menu_button');
            spanBurger_man.classList.remove('burger-menu_lines');
            overlowBurger.classList.remove('burger-menu_overlay');
          } // код для обычных устройств


          buttonHolder.classList.remove('holeOut');
          buttonHolder.classList.add('hide');
          buttonHolder.classList.add('buttonHolderStatic');
          buttonHolder.classList.add('bord');
          buttonHolder.classList.add('gridAct');
        }
      }, 300);
      var sel = 'tick';
      var selectorListQ = _db_db_json__WEBPACK_IMPORTED_MODULE_2__['styles'][0];

      if (e.target.classList.contains('tick')) {
        selectorListQ = _db_db_json__WEBPACK_IMPORTED_MODULE_2__['styles'][0];
        sel = 'tick';
      }

      if (e.target.classList.contains('cross')) {
        selectorListQ = _db_db_json__WEBPACK_IMPORTED_MODULE_2__['styles'][1];
        sel = 'cross';
      }

      if (e.target.classList.contains('heart')) {
        selectorListQ = _db_db_json__WEBPACK_IMPORTED_MODULE_2__['styles'][2];
        sel = 'heart';
      }

      if (e.target.classList.contains('flower')) {
        selectorListQ = _db_db_json__WEBPACK_IMPORTED_MODULE_2__['styles'][3];
        sel = 'flower';
      }

      setTimeout(function () {
        var list = document.querySelectorAll('.tinRightIn');

        if (list) {
          // при смене уровня сложности меняет на стандартную высоту страницы 
          list.forEach(function (element) {
            element.children[0].children[0][2].click();
            element.remove();
          });
          document.body.style.height = height;
        }

        localStorage.setItem('sel', sel); //   console.log(Object.keys(selectorListQ).length);

        Object(_standardQuestions__WEBPACK_IMPORTED_MODULE_1__["default"])(selectorListQ, sel);
      }, 1300);
    });
  });

  function burgerMenu(selector) {
    var menu = document.querySelector(selector);
    var button = document.querySelector('.burger-menu_button');
    var butto1 = document.querySelector('.burger-menu_lines');
    var links = document.querySelector('.burger-menu_link');
    var overlay = document.querySelector('.burger-menu_overlay');
    button.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMenu();
    });
    butto1.addEventListener('click', function (e) {
      e.preventDefault();
      toggleMenu();
      menu.classList.contains('losharablt');

      if (menu.classList.contains('burger-menu_active')) {
        menu.classList.remove('burger-menu_active');
      } else {
        menu.classList.add('burger-menu_active');
      }
    });
    overlay.addEventListener('click', function () {
      return toggleMenu();
    });

    function toggleMenu() {
      if (menu.classList.contains('burger-menu_active')) {
        menu.classList.remove('burger-menu_active');
      } else {
        menu.classList.add('burger-menu_active');
      } // if (menu.classList.contains('burger-menu_active')) {
      //   document.querySelector('body').style='overlow= hidden';
      // } else {
      //   document.querySelector('body').style='overlow= visible';
      // }

    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (startaStage);

/***/ }),

/***/ "./src/js/modules/togallVois.js":
/*!**************************************!*\
  !*** ./src/js/modules/togallVois.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var togallVois = function togallVois() {
  var doc = document.querySelectorAll('.fab-buttons');
  doc[0].children[2].addEventListener('click', function (e) {
    e.preventDefault();
    toggaleButton('.icon-material_li', 'icon-material_li_mute');
    var icon_material_li = document.querySelector('.icon-material_tw');

    if (icon_material_li.classList.contains('icon-material_tw_NonStop')) {
      icon_material_li.classList.remove('icon-material_tw_NonStop');
    }
  });
  doc[0].children[1].addEventListener('click', function (e) {
    e.preventDefault();
    toggaleButton('.icon-material_tw', 'icon-material_tw_NonStop');
  });

  function toggaleButton(elemSelector, toggalClass) {
    var icon_material_li = document.querySelector(elemSelector);
    icon_material_li.classList.toggle(toggalClass);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (togallVois);

/***/ }),

/***/ "./src/js/modules/upWindowuser.js":
/*!****************************************!*\
  !*** ./src/js/modules/upWindowuser.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var upWindowuser = function upWindowuser() {
  var div = document.createElement('div');
  div.classList.add('upButton');
  div.innerHTML = "<a style=\"display: block;\" src=\"\" href=\"\"><img src=\"assets/img/Up.png\" alt=\"\"></a>";
  div.classList.add('hide');
  document.addEventListener('scroll', function (e) {
    var userwiz = window.pageYOffset;

    if (userwiz > 1200) {
      div.classList.remove('hide');
    } else {
      div.classList.add('hide');
    }
  });
  document.querySelector('.staet').append(div);
  div.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('.wrapperTutle').scrollIntoView({
      block: "center",
      behavior: "smooth"
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (upWindowuser);

/***/ }),

/***/ "./src/js/modules/whereStay.js":
/*!*************************************!*\
  !*** ./src/js/modules/whereStay.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _db_db_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../db/db.json */ "./src/js/db/db.json");
var _db_db_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../db/db.json */ "./src/js/db/db.json", 1);



var whereStay = function whereStay() {
  var doc = document.querySelectorAll('.fab-buttons');
  doc[0].children[4].addEventListener('click', function (e) {
    e.preventDefault();
    var sel = localStorage.getItem('WhereStayUser');

    if (sel) {
      var selectorQuestionLevel = sel.replace(/(question)(\d)+/, '');
      var numberQuestion = sel.replace(/(tick|cross|heart|flower)(question)/, ''); // if (selectorQuestionLevel === 'tick') {
      //   selectorListQ = db['styles'][0]
      //   // sel = 'tick'
      // } 
      // if (selectorQuestionLevel === 'cross') {
      //   selectorListQ = db['styles'][1]
      //   // sel = 'cross'
      // }
      // if (selectorQuestionLevel === 'heart') {
      //   selectorListQ = db['styles'][2]
      //   // sel = 'heart'
      // }
      // if (selectorQuestionLevel === 'flower') {
      //   selectorListQ = db['styles'][3]
      //   // sel = 'flower'
      // }

      var listAll = document.querySelectorAll('.wrapper');
      var titleQuestionvois = document.querySelector('.wrapperTutle');

      if (listAll) {
        document.querySelector(".".concat(selectorQuestionLevel)).click();
      }

      setTimeout(function () {
        listAll = document.querySelectorAll('.wrapper');

        var _loop = function _loop(index) {
          var iterator = listAll[index];

          if (iterator && iterator.classList.contains('hide') && iterator.classList.contains('quetion1') !== 'quetion1') {
            titleQuestionvois.classList.add('relev');
            iterator.classList.remove('hide');
            setTimeout(function () {
              iterator.scrollIntoView({
                block: "center",
                behavior: "smooth"
              });
            }, 1200); //  body.style.height = body.offsetHeight +350+"px"
          }
        };

        for (var index = 0; index <= numberQuestion; index++) {
          _loop(index);
        }
      }, 1500);
    } else {
      console.log('new User');
    }

    localStorage.setItem('QuestAWhereStay', false);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (whereStay);

/***/ }),

/***/ "./src/js/services/automationSizeInput.js":
/*!************************************************!*\
  !*** ./src/js/services/automationSizeInput.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_0__);


var automationSizeInput = function automationSizeInput(textare) {
  var krVar = {
    // id атрибут тега textarea
    textareaId: 'comment',
    // время пересчета (1000=1сек).
    repeat: 1000,
    // коэффициент. Увеличите, если появляется прокрутка.
    cof: 40
  };
  var KR = {
    timeout: 0,
    textarea: textare,
    init: function init() {
      if (!KR.textarea) return;
      KR.textarea.onfocus = KR.doit;
      KR.textarea.onblur = KR.stop;
    },
    doit: function doit() {
      // устанавливаем нужное количество строк
      KR.textarea.rows = KR.countLines(KR.textarea.value);
      clearTimeout(KR.timeout);
      KR.timeout = setTimeout(function () {
        KR.doit();
      }, krVar.repeat);
    },
    stop: function stop() {
      clearTimeout(KR.timeout);
    },
    //функция подсчета строк
    countLines: function countLines(strtocount) {
      var hard_lines = 0;
      var str = strtocount.split("\n");
      hard_lines = str.length;
      var tx = KR.textarea;
      var letter_width = tx.clientHeight / tx.rows * krVar.cof / 100; // приблизительная ширина одной буквы в пикселях

      var chars_in_line = tx.clientWidth / letter_width; //сколько букв в строке

      var lines = 0;
      var temp = 0; // hard_lines-1 = количество элементов в массиве

      for (i = 0; i <= hard_lines - 1; i++) {
        temp = str[i].length / chars_in_line;
        if (temp > 0) lines += temp;
      }

      return lines + hard_lines;
    }
  };
  if (window.addEventListener) window.addEventListener("load", KR.init, false);else if (window.attachEvent) window.attachEvent("onload", KR.init);
};

/* harmony default export */ __webpack_exports__["default"] = (automationSizeInput);

/***/ }),

/***/ "./src/js/services/chech.js":
/*!**********************************!*\
  !*** ./src/js/services/chech.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);


var chech = function chech(text) {
  if (text.at(0) === ',') {
    return text.slice(1);
  } else if (text.at(0) === 'n' && text.at(1) === 'u' && text.at(2) === 'l' && text.at(3) === 'l') {
    return text.slice(5);
  } else {
    return text;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (chech);

/***/ }),

/***/ "./src/js/services/matchSearch.js":
/*!****************************************!*\
  !*** ./src/js/services/matchSearch.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _replaceAt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./replaceAt */ "./src/js/services/replaceAt.js");


var matchSearch = function matchSearch(text) {
  var p = text;

  for (var i = 0; i < p.length; i++) {
    var element = p[i];

    if (element === '_') {
      p = Object(_replaceAt__WEBPACK_IMPORTED_MODULE_0__["default"])(p, i, '<br>');
    }

    if (element === '~') {
      p = Object(_replaceAt__WEBPACK_IMPORTED_MODULE_0__["default"])(p, i, '<br>');
    }
  }

  return p;
};

/* harmony default export */ __webpack_exports__["default"] = (matchSearch);

/***/ }),

/***/ "./src/js/services/multiPlepresButtons.js":
/*!************************************************!*\
  !*** ./src/js/services/multiPlepresButtons.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var multiPlepresButtons = function multiPlepresButtons() {
  var disable = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var selectorActivBtn = arguments.length > 1 ? arguments[1] : undefined;
  var button = document.querySelector(selectorActivBtn),
      allButton = document.querySelectorAll('.start-stop');

  if (disable) {
    allButton.forEach(function (item) {
      item.setAttribute('disabled', true);

      if (item == button) {} else {
        item.classList.add('btnDeactiv');
      }
    });
  } else {
    allButton.forEach(function (item) {
      item.classList.remove('btnDeactiv');
      item.removeAttribute('disabled');
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (multiPlepresButtons);

/***/ }),

/***/ "./src/js/services/quetionAdd.js":
/*!***************************************!*\
  !*** ./src/js/services/quetionAdd.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _voiceQuestion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./voiceQuestion */ "./src/js/services/voiceQuestion.js");










var quetionAdd = function quetionAdd(vioseSkib) {
  var body = document.querySelector('body');
  var NonStop = document.querySelector('.icon-material_tw');

  if (NonStop.classList.contains('icon-material_tw_NonStop')) {
    (function () {
      var listAll = document.querySelectorAll('.wrapper');
      var li = document.querySelector('.wrapperTutle');

      var _loop = function _loop(i) {
        var iterator = listAll[i];
        var sel = iterator.children[0][2];
        sel.click();

        if (iterator.classList.contains('hide') && iterator.classList.contains('quetion1') !== 'quetion1') {
          var elementBefor = listAll[i - 1];
          var elementAfter = listAll[i + 1];
          setTimeout(function () {
            if (!vioseSkib) {
              Object(_voiceQuestion__WEBPACK_IMPORTED_MODULE_8__["default"])(iterator.children[0].firstElementChild.children[1].children[0], false);
            }
          }, 1000); // тут начинается включение полс перерыва

          iterator.children[0].firstElementChild.children[1].children[0].onended = function () {
            listAll.forEach(function (item) {
              return item.children[0][2].click();
            });
            setTimeout(function () {
              if (elementAfter.classList.contains('hide')) {
                iterator.children[0][1].click();
              }
            }, 800);
          }; //end paused


          li.classList.add('relev');
          iterator.classList.remove('hide');
          setTimeout(function () {
            iterator.scrollIntoView({
              block: "center",
              behavior: "smooth"
            });
          }, 1200);
          body.style.height = body.offsetHeight + 350 + "px";
          return "break"; //end if iteration element 
        } //end for 1  

      };

      for (var i = 0; i < listAll.length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }
    })();
  } else {
    var listAll = document.querySelectorAll('.wrapper');
    var li = document.querySelector('.wrapperTutle');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop2 = function _loop2() {
        var iterator = _step.value;

        if (iterator.classList.contains('hide') && iterator.classList.contains('quetion1') !== 'quetion1') {
          li.classList.add('relev');

          if (!vioseSkib) {
            Object(_voiceQuestion__WEBPACK_IMPORTED_MODULE_8__["default"])(iterator.children[0].firstElementChild.children[1].children[0], false);
          }

          iterator.classList.remove('hide');
          setTimeout(function () {
            iterator.scrollIntoView({
              block: "center",
              behavior: "smooth"
            });
          }, 1200);
          body.style.height = body.offsetHeight + 350 + "px";
          return "break";
        } //end forof

      };

      for (var _iterator = listAll[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ret2 = _loop2();

        if (_ret2 === "break") break;
      } // end else NonStop

    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (quetionAdd);

/***/ }),

/***/ "./src/js/services/replaceAt.js":
/*!**************************************!*\
  !*** ./src/js/services/replaceAt.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var replaceAt = function replaceAt(text, index, replacement) {
  return text.substring(0, index) + replacement + text.substring(index + 1, +text.length);
};

/* harmony default export */ __webpack_exports__["default"] = (replaceAt);

/***/ }),

/***/ "./src/js/services/voiceQuestion.js":
/*!******************************************!*\
  !*** ./src/js/services/voiceQuestion.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_0__);


var voiceQuestion = function voiceQuestion(iterator, vioseSkib) {
  var icon_material_li = document.querySelector('.icon-material_li');

  if (vioseSkib) {
    return console.log('somalet');
  }

  if (!icon_material_li.classList.contains('icon-material_li_mute')) {
    document.querySelectorAll("audio").forEach(function (audio) {
      return audio.pause();
    });
    iterator.volume = 1.0;
    iterator.play();
  }
};

/* harmony default export */ __webpack_exports__["default"] = (voiceQuestion);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map