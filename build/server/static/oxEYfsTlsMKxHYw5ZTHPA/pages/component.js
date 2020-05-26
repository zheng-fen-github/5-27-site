module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("bW9D");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F9Za":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Anima = ({
  color
}) => {
  let colorValue = color ? color : 'black';
  return __jsx("div", {
    className: "anima"
  }, __jsx("div", {
    className: "sanjiaoxing first"
  }), __jsx("div", {
    className: "sanjiaoxing last"
  }), __jsx("div", {
    className: "sanjiaoxing first"
  }), __jsx("div", {
    className: "sanjiaoxing last"
  }), __jsx("div", {
    className: "sanjiaoxing first"
  }), __jsx("div", {
    className: "sanjiaoxing last"
  }), __jsx("style", null, `
                
                .sanjiaoxing {
                    display:inline-block;
                    width:0;
                    height:0;
                    border:solid 30px rgba(0,0,0,0);   
                    border-bottom:solid 30px ${colorValue};                              
                }
                .first {
                    transform-origin:100% 100%;
                    animation:go 2s infinite;                         
                }
                .last {
                    transform-origin:0% 100%;
                    animation:go2 2s infinite;          
                }
                @keyframes go {
                    0% {
                        transform: rotate(0deg) translateX(0);                   
                    }
                    15% {                          
                        transform: rotate(90deg) translateX(0);                                                
                    }
                    45% {
                        transform: rotate(90deg) translateY(0);                         
                    }
                    55% {
                        transform: rotate(90deg) translateY(50%);                        
                    }
                    85% {
                        transform: rotate(90deg) translateY(50%);                        
                    }
                    100% {
                        transform: rotate(0deg) translateY(0%);  
                    }
                }
                @keyframes go2 {
                    0% {
                        transform: rotate(0deg) translateX(0);  
                    }
                    15% {                          
                        transform: rotate(-90deg) translateX(0);                          
                    }
                    45% {
                        transform: rotate(-90deg) translateX(0);                          
                    }
                    55% {
                        transform: rotate(-90deg) translateY(50%);  
                    }
                    85% {
                        transform: rotate(-90deg) translateY(50%);  
                    }                    
                    100% {
                        transform: rotate(0deg) translateY(0%);  
                    }
                }
            `));
};

/* harmony default export */ __webpack_exports__["a"] = (Anima);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "bW9D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./component/component/nav.js

var __jsx = external_react_default.a.createElement;




const Nav = () => {
  let router = Object(router_["useRouter"])().asPath;
  Object(external_react_["useEffect"])(() => {
    let array = ['/', '/photo', '/videoList', '/article-list', '/component'];
    array.find((e, index) => {
      if (e === router) {
        let ul = document.querySelector('.min-nav ul');

        if (ul) {
          ul.children[index].classList.add('liSeled');
        }
      }
    });
  }, []);
  return __jsx("div", {
    className: "jsx-563173826"
  }, __jsx("img", {
    src: "com-bg.jpg",
    alt: "bg",
    className: "jsx-563173826"
  }), __jsx("div", {
    className: "jsx-563173826" + " " + "min-nav row m-0 align-items-center justify-content-center"
  }, __jsx("div", {
    className: "jsx-563173826" + " " + "col-12 col-md-10 col-lg-6"
  }, __jsx("ul", {
    className: "jsx-563173826" + " " + 'd-flex'
  }, __jsx("li", {
    className: "jsx-563173826"
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("h3", {
    className: "jsx-563173826"
  }, "Home"))), __jsx("li", {
    className: "jsx-563173826"
  }, __jsx(link_default.a, {
    href: "/photo"
  }, __jsx("h3", {
    className: "jsx-563173826"
  }, "Photo"))), __jsx("li", {
    className: "jsx-563173826"
  }, __jsx(link_default.a, {
    href: "/videoList"
  }, __jsx("h3", {
    className: "jsx-563173826"
  }, "video"))), __jsx("li", {
    className: "jsx-563173826"
  }, __jsx(link_default.a, {
    href: "/article-list"
  }, __jsx("h3", {
    className: "jsx-563173826"
  }, "Article"))), __jsx("li", {
    className: "jsx-563173826"
  }, __jsx(link_default.a, {
    href: "/component"
  }, __jsx("h3", {
    className: "jsx-563173826"
  }, "Component")))))), __jsx(style_default.a, {
    id: "563173826"
  }, [".min-nav.jsx-563173826{width:100%;min-height:14rem;border-bottom:solid rgba(255,255,255,0.5) 1px;background:rgba(0,0,0,0.2);position:absolute;top:0;left:0;}", "@media (max-width:800px){.min-nav.jsx-563173826{min-height:8%;}}", "img.jsx-563173826{width:100%;}", "ul.jsx-563173826{width:100%;list-style:none;margin:0;}", "li.jsx-563173826{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:.4s;transition:.4s;cursor:pointer;}", "li.jsx-563173826:hover,.liSeled.jsx-563173826{background:rgba(255,255,255,0.3);}"]));
};

/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./component/component/code.js

var code_jsx = external_react_default.a.createElement;


const Code = ({
  data,
  clear
}) => {
  const clearEv = e => {
    if (!e.target.closest('.code')) {
      clear(false);
    }
  };

  Object(external_react_["useEffect"])(() => {
    document.addEventListener('click', clearEv);
    return () => {
      document.removeEventListener('click', clearEv);
    };
  }, [data]);

  const share = () => {
    let range = new Range();
    range.setStart(textRef, 0);
    range.setEnd(textRef, 1);
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(range);
    document.execCommand("Copy");
    document.getSelection().removeAllRanges();
    clear(false);
  };

  let textRef;
  return code_jsx("div", {
    className: "jsx-932146319" + " " + 'row code shadow justify-content-center  align-items-center'
  }, code_jsx("div", {
    className: "jsx-932146319" + " " + "col-10"
  }, code_jsx("h2", {
    ref: ref => textRef = ref,
    className: "jsx-932146319"
  }, data)), code_jsx("div", {
    className: "jsx-932146319" + " " + "col-8 justify-content-center row"
  }, code_jsx("button", {
    onClick: share,
    className: "jsx-932146319" + " " + 'col-auto'
  }, "Cody")), code_jsx(style_default.a, {
    id: "932146319"
  }, ["h2.jsx-932146319{white-space:pre;overflow:auto;}", "h2.jsx-932146319::-webkit-scrollbar{display:none;}", ".code.jsx-932146319{background:white;position:fixed;width:50%;min-height:50%;max-height:80%;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:4rem 0;overflow:auto;}", "button.jsx-932146319{padding:0.5rem 3rem;font-size:2rem;font-weight:600;border:none;border-radius:0.6rem;margin:0 2rem;background:#0c82db;color:white;-webkit-transition:.4s;transition:.4s;}", "button.jsx-932146319:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}"]));
};

/* harmony default export */ var component_code = (Code);
// CONCATENATED MODULE: ./component/component/photo.js

var photo_jsx = external_react_default.a.createElement;


function Photo({
  id
}) {
  const {
    0: blob,
    1: setBlob
  } = Object(external_react_["useState"])(null);
  const {
    0: uncount,
    1: setUncount
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    getPhoto();
    return () => {
      setUncount(true);

      if (blob) {
        URL.revokeObjectURL(blob);
      }
    };
  }, [id]);

  const getPhoto = async () => {
    try {
      const QURL = "http://zhengfen.top:4040/" + 'getComponent/getPhoto/' + id;
      let res = await fetch(QURL);

      if (res.ok) {
        let result = await res.blob();

        if (!uncount) {
          setBlob(result);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return photo_jsx(external_react_default.a.Fragment, null, blob && photo_jsx("img", {
    src: URL.createObjectURL(blob),
    alt: "\u7167\u7247",
    className: "jsx-3166343992"
  }), photo_jsx(style_default.a, {
    id: "3166343992"
  }, ["img.jsx-3166343992{width:100%;}"]));
}

/* harmony default export */ var photo = (Photo);
// CONCATENATED MODULE: ./component/component/item.js

var item_jsx = external_react_default.a.createElement;


const Item = external_react_default.a.memo(({
  message,
  setCode,
  type
}) => {
  if (!message.filter) {
    return item_jsx("div", {
      className: "jsx-341982273" + " " + "col-12 col-md-6"
    }, item_jsx("div", {
      className: "jsx-341982273" + " " + "row justify-content-center align-items-center"
    }, type === 'css' ? item_jsx(photo, {
      id: message.Componentphoto
    }) : item_jsx("img", {
      src: `kuangjia/${type}.png`,
      alt: "react",
      className: "jsx-341982273" + " " + 'code-photo'
    })), item_jsx("h2", {
      className: "jsx-341982273" + " " + 'imte-title text-center'
    }, message.ComponentTitle), item_jsx("div", {
      className: "jsx-341982273" + " " + "row justify-content-center my-5"
    }, item_jsx("button", {
      onClick: () => setCode(message.ComponentCode),
      className: "jsx-341982273"
    }, "Cody")), item_jsx(style_default.a, {
      id: "341982273"
    }, ["img.jsx-341982273{width:100%;}", "h2.jsx-341982273{font-size:4rem;font-weight:700;margin:2rem 0;}", ".code-photo.jsx-341982273{width:100px;height:100px;}", "button.jsx-341982273{border:none;background:#fdd303;color:white;border-radius:6px;font-size:2rem;padding:1rem 3rem;font-weight:700;-webkit-transition:.2s;-webkit-transition:.2s;transition:.2s;}", "button.jsx-341982273:hover{padding:1rem 4rem;}"]));
  } else {
    return null;
  }
});
/* harmony default export */ var item = (Item);
// CONCATENATED MODULE: ./component/component/Pagination.js
var Pagination_jsx = external_react_default.a.createElement;


const Pagination = external_react_default.a.memo(({
  codeList,
  setCode,
  type
}) => {
  const {
    0: count,
    1: setCount
  } = Object(external_react_["useState"])(2);
  const {
    0: List,
    1: setList
  } = Object(external_react_["useState"])([]);
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      //     设置滚动事件        
      scrollE();
    });
    return () => window.removeEventListener('scroll', scrollE);
  }, [List]);
  Object(external_react_["useEffect"])(() => {
    //     设置初始数        
    setList(codeList.slice(0, 8));
  }, [codeList]);

  const addList = () => {
    setList(codeList.slice(0, count * 8));
    setCount(pre => pre += 1);
  };

  let eventId = Object(external_react_["useRef"])();

  const scrollE = () => {
    //滚动事件定义        
    if (eventId.current) return;
    eventId.current = setTimeout(() => {
      try {
        let scrollCount = Math.round(window.pageYOffset + window.innerHeight);

        if (scrollCount >= document.documentElement.scrollHeight - 2) {
          document.getElementById('loadmore').click();
        }
      } catch (err) {
        console.log(err);
      }

      eventId.current = null;
    }, 500);
  };

  let typevalue = Object(external_react_["useCallback"])(type === 'JS' ? 'js' : type === 'React' ? 'react' : type === 'CSS' ? 'css' : type === 'HtmlBoostrap' ? 'boot' : null, [type]);
  return Pagination_jsx(external_react_default.a.Fragment, null, List.map(e => Pagination_jsx(item, {
    setCode: setCode,
    type: typevalue,
    key: e._id,
    message: e
  })), Pagination_jsx("button", {
    onClick: addList,
    id: "loadmore",
    className: "d-none"
  }, "click"));
});
/* harmony default export */ var component_Pagination = (Pagination);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./component/public/anima.js
var anima = __webpack_require__("F9Za");

// CONCATENATED MODULE: ./component/component/content.js

var content_jsx = external_react_default.a.createElement;






const Content = ({
  type,
  action,
  data,
  loading
}) => {
  const {
    0: code,
    1: setCode
  } = Object(external_react_["useState"])(null);

  const getphoto = async () => {
    try {
      action({
        type: 'LADING_CONTENN',
        loading: true
      });
      action({
        type: 'ALL_CONTENT',
        data: []
      });
      const QURL = "http://zhengfen.top:4040/" + 'getComponent/get/';
      let get = await fetch(QURL + type);

      if (get.ok) {
        let message = await get.json();
        action({
          type: 'ALL_CONTENT',
          data: message
        });
        action({
          type: 'LADING_CONTENN',
          loading: false
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const arrayResult = Object(external_react_["useCallback"])(data.filter(e => !e.filter), [data]);
  Object(external_react_["useEffect"])(() => {
    getphoto();
  }, [type]);
  return content_jsx("div", {
    className: "jsx-2178904071" + " " + 'row code-content'
  }, data.length > 0 && content_jsx(external_react_default.a.Fragment, null, content_jsx("div", {
    className: "jsx-2178904071" + " " + "col-12 code-count"
  }, content_jsx("h1", {
    className: "jsx-2178904071"
  }, "Showing ", arrayResult.length, " Results")), content_jsx(component_Pagination, {
    type: type,
    codeList: arrayResult,
    setCode: setCode
  })), data.length === 0 && !loading && content_jsx("h1", {
    className: "jsx-2178904071"
  }, "Showing 0 Results  "), loading && content_jsx("div", {
    className: "jsx-2178904071" + " " + "col-12 my-5 d-flex justify-content-center"
  }, content_jsx(anima["a" /* default */], {
    color: "#fdd303"
  })), code && content_jsx(component_code, {
    data: code,
    clear: setCode
  }), content_jsx(style_default.a, {
    id: "2178904071"
  }, ["h3.jsx-2178904071{margin:2rem 1rem;font-size:2rem;}", ".code-count.jsx-2178904071{margin-bottom:10rem;}"]));
};

const stateEvent = state => ({
  data: state.ContentReducer,
  loading: state.TypeReducer.loading
});

const dispatch = dispatch => ({
  action: dispatch
});

/* harmony default export */ var content = (Object(external_react_redux_["connect"])(stateEvent, dispatch)(Content));
// CONCATENATED MODULE: ./component/component/Sidebar.js

var Sidebar_jsx = external_react_default.a.createElement;



const Sidebar = ({
  list,
  action
}) => {
  const filterEvent = value => {
    action({
      type: 'FILTER_CONTENT',
      filterType: value
    });
  };

  const search = e => {
    let value = e.target.previousElementSibling.value;

    if (value === '' || value === ' ') {
      action({
        type: 'SHOW_CONTENT',
        title: value
      });
    }

    action({
      type: 'SEACTH_CONTENT',
      title: value
    });
  };

  return Sidebar_jsx("div", {
    className: "jsx-3610662458" + " " + 'row sidebar shadow justify-content-center'
  }, Sidebar_jsx("div", {
    className: "jsx-3610662458" + " " + "col-10"
  }, Sidebar_jsx("input", {
    type: "text",
    name: "search",
    placeholder: "Search",
    id: "search",
    className: "jsx-3610662458" + " " + 'w-100 p-2 text-center'
  }), Sidebar_jsx("i", {
    onClick: search,
    className: "jsx-3610662458" + " " + 'iconfont icon-search'
  })), Sidebar_jsx("div", {
    className: "jsx-3610662458" + " " + " col-10 col-xs-12 mt-4"
  }, Sidebar_jsx("div", {
    className: "jsx-3610662458" + " " + "row"
  }, list.map((e, index) => Sidebar_jsx("div", {
    key: index,
    className: "jsx-3610662458" + " " + "col-auto col-xs-10 my-4"
  }, Sidebar_jsx("div", {
    className: "jsx-3610662458" + " " + "row align-items-center"
  }, Sidebar_jsx("button", {
    onClick: () => filterEvent(e),
    className: "jsx-3610662458"
  }, Sidebar_jsx("h3", {
    className: "jsx-3610662458"
  }, e))))))), Sidebar_jsx(style_default.a, {
    id: "3610662458"
  }, [".sidebar.jsx-3610662458{padding:8rem 1rem;background:white;border-radius:10px;position:-webkit-sticky;position:sticky;top:200px;-webkit-transform:translateY(-200px);-ms-transform:translateY(-200px);transform:translateY(-200px);}", "@media (max-width:1200px){.sidebar.jsx-3610662458{-webkit-transform:translateY(-100px);-ms-transform:translateY(-100px);transform:translateY(-100px);padding:8rem 1rem;top:100px;}}", "i.jsx-3610662458{position:absolute;left:12%;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);font-size:3rem;color:#b1b9be;cursor:pointer;}", "i.jsx-3610662458:hover{color:#fdd303;}", ".col-10.jsx-3610662458>.row.jsx-3610662458{padding-left:20px;}", "input[name='search'].jsx-3610662458{height:6vh;font-size:2rem;font-weight:600;border-radius:2vh;border:solid #e7eaec 2px;}", "button.jsx-3610662458{padding:0.5rem 1.5rem;border:#e7eaec solid 2px;border-radius:0.4rem;margin:0 2rem;background:#ffffff;}", "button.jsx-3610662458:hover{background:#fdd303;border-color:#fdd303;color:white;}"]));
};

const state = store => ({
  list: store.TypeReducer.list
});

const Sidebar_dispatch = dispatch => ({
  action: dispatch
});

/* harmony default export */ var component_Sidebar = (Object(external_react_redux_["connect"])(state, Sidebar_dispatch)(Sidebar));
// CONCATENATED MODULE: ./component/component/root.js

var root_jsx = external_react_default.a.createElement;





const Root = ({
  action,
  contentType
}) => {
  let value = contentType === 'none' ? 'React' : contentType;
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])(value);

  const selectType = e => {
    let dom = e.target.closest('h3');
    if (!dom) return;
    document.querySelector('li.seled').classList.remove('seled');
    dom.parentElement.classList.add('seled');
    setType(dom.textContent);
  };

  const getphoto = async () => {
    try {
      const QURL = "http://zhengfen.top:4040/" + 'getComponentList/all/';
      let get = await fetch(QURL + type);

      if (get.ok) {
        let message = await get.json();
        action({
          type: 'GET_TYPE',
          list: message.typeList
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const scrollTop = () => {
    let navDom = document.querySelector('.component-nav');
    navDom.scrollIntoView(true);
  };

  Object(external_react_["useEffect"])(() => {
    let activeType = value === 'React' ? 'React' : value === 'CSS' ? 'CSS' : value === 'JS' ? 'JS' : 'HtmlBoostrap';
    let DomList = Array.from(document.querySelectorAll('ul.component-nav>li>h3'));
    DomList.map(dom => {
      if (dom.textContent === activeType) {
        dom.parentElement.classList.add('seled');
      }
    });
    getphoto();
  }, [type]);
  return root_jsx("div", {
    className: "jsx-502979131" + " " + 'row root'
  }, root_jsx("div", {
    className: "jsx-502979131" + " " + "col-10 offset-1"
  }, root_jsx("div", {
    className: "jsx-502979131" + " " + "row p-0"
  }, root_jsx("div", {
    className: "jsx-502979131" + " " + "offset-0 offset-xl-3 col"
  }, root_jsx("ul", {
    onClick: selectType,
    className: "jsx-502979131" + " " + 'd-flex component-nav'
  }, root_jsx("li", {
    className: "jsx-502979131"
  }, root_jsx("h3", {
    className: "jsx-502979131"
  }, "React")), root_jsx("li", {
    className: "jsx-502979131"
  }, root_jsx("h3", {
    className: "jsx-502979131"
  }, "JS")), root_jsx("li", {
    className: "jsx-502979131"
  }, root_jsx("h3", {
    className: "jsx-502979131"
  }, "CSS")), root_jsx("li", {
    className: "jsx-502979131"
  }, root_jsx("h3", {
    className: "jsx-502979131"
  }, "HtmlBoostrap"))))), root_jsx("div", {
    onClick: scrollTop,
    className: "jsx-502979131" + " " + "goTop position-fixed"
  }, root_jsx("i", {
    className: "jsx-502979131" + " " + 'iconfont icon-arrow-forward'
  })), root_jsx("div", {
    className: "jsx-502979131" + " " + "row"
  }, root_jsx("div", {
    className: "jsx-502979131" + " " + "col-12 col-xl-3"
  }, root_jsx(component_Sidebar, null)), root_jsx("div", {
    className: "jsx-502979131" + " " + "offset-0 offset-xl-1 col-12 col-xl-8"
  }, root_jsx(content, {
    type: type
  })))), root_jsx(style_default.a, {
    id: "502979131"
  }, [".root.jsx-502979131{margin:0;margin-bottom:20rem;}", ".goTop.jsx-502979131{top:50%;right:10px;-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);background:black;color:white;width:4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:6px;overflow:hidden;cursor:pointer;}", ".goTop.jsx-502979131:hover{background:white;color:black;}", ".goTop.jsx-502979131 i.jsx-502979131{font-size:3rem;}", "ul.jsx-502979131{list-style:none;background:black;color:white;margin-bottom:10rem;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:-webkit-sticky;position:sticky;top:200px;z-index:5;}", "li.jsx-502979131{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:.4s;transition:.4s;}", "li.seled.jsx-502979131{opacity:0.5;}", "li.jsx-502979131:hover{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}", "h3.jsx-502979131{padding:2rem;font-size:2.5rem;text-align:center;}"]));
};

const root_state = store => ({
  data: store
});

const root_dispatch = dispatch => ({
  action: dispatch
});

/* harmony default export */ var root = (Object(external_react_redux_["connect"])(root_state, root_dispatch)(Root));
// CONCATENATED MODULE: ./component/component/footer.js

var footer_jsx = external_react_default.a.createElement;


const Footer = ({
  color
}) => {
  Object(external_react_["useEffect"])(() => {
    let windowH = window.innerHeight;
    let ctsHeight = document.documentElement.offsetHeight;

    if (ctsHeight < windowH) {
      document.querySelector('footer').classList.add('bottom');
    }
  }, []);
  return footer_jsx("footer", {
    className: style_default.a.dynamic([["2655671405", [color]]]) + " " + 'row mx-0 p-0 '
  }, footer_jsx("div", {
    className: style_default.a.dynamic([["2655671405", [color]]]) + " " + "col-12 py-5 m-0 text-center"
  }, footer_jsx("h3", {
    className: style_default.a.dynamic([["2655671405", [color]]])
  }, "2020 iconsquare All rights reserved")), footer_jsx(style_default.a, {
    id: "2655671405",
    dynamic: [color]
  }, [`footer.__jsx-style-dynamic-selector{background:${color};color:white;}`, "h3.__jsx-style-dynamic-selector{font-size:2rem;}", ".bottom.__jsx-style-dynamic-selector{right:0;left:0;bottom:0;position:fixed;}"]));
};

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// CONCATENATED MODULE: ./component/component/redux/reducer.js


const ContentReducer = (state = [], action) => {
  switch (action.type) {
    case 'ALL_CONTENT':
      return action.data.map(e => {
        e.filter = false;
        return e;
      });

    case 'SHOW_CONTENT':
      return state.map(e => {
        e.filter = false;
        return e;
      });

    case 'FILTER_CONTENT':
      let result = state.map(e => {
        if (e.ComponentType !== action.filterType) {
          e.filter = true;
        } else {
          e.filter = false;
        }

        return e;
      });
      console.log(result);
      return result;

    case 'SEACTH_CONTENT':
      let result2 = state.map(e => {
        if (e.ComponentTitle.includes(action.title)) {
          e.filter = false;
        } else {
          e.filter = true;
        }

        return e;
      });
      return result2;

    default:
      return state;
  }
};

let inisitalState = {
  list: [],
  loading: false
};

const TypeReducer = (state = inisitalState, action) => {
  switch (action.type) {
    case 'GET_TYPE':
      return Object.assign({}, state, {
        list: action.list
      });

    case 'LADING_CONTENN':
      return Object.assign({}, state, {
        loading: action.loading
      });

    default:
      return state;
  }
};

const ComponentApp = Object(external_redux_["combineReducers"])({
  ContentReducer,
  TypeReducer
});
/* harmony default export */ var reducer = (ComponentApp);
// CONCATENATED MODULE: ./component/component/redux/store.js


let store = Object(external_redux_["createStore"])(reducer);
/* harmony default export */ var redux_store = (store);
// CONCATENATED MODULE: ./pages/component.js

var component_jsx = external_react_default.a.createElement;









const Component = ({
  type
}) => {
  const {
    0: routerStatus,
    1: setRouterStatus
  } = Object(external_react_["useState"])(false); // 路由变化事件

  const handleRouteChange = url => {
    setRouterStatus(true);
  };

  router_default.a.events.on('routeChangeStart', handleRouteChange);
  return component_jsx(external_react_default.a.Fragment, null, component_jsx(head_default.a, null, component_jsx("title", {
    className: "jsx-3838248654"
  }, "Create Next App"), component_jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-3838248654"
  }), component_jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_10szvaedj0wj.css",
    className: "jsx-3838248654"
  }), component_jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-3838248654"
  })), component_jsx(external_react_redux_["Provider"], {
    store: redux_store
  }, component_jsx("div", {
    className: "jsx-3838248654" + " " + "container-fluid"
  }, component_jsx("nav", {
    className: "jsx-3838248654"
  }, component_jsx(nav, null)), component_jsx(root, {
    contentType: type
  }), component_jsx(footer, {
    color: "#fdd303"
  }), routerStatus && component_jsx("div", {
    className: "jsx-3838248654" + " " + 'loadAnima'
  }, "           "))), component_jsx(style_default.a, {
    id: "321539951"
  }, ["*,body{margin:0;padding:0;box-sizing:border-box;}", "html{font-size:10px;}", ".container-fluid{padding:0;}", "@media (max-width:760px){html{font-size:6px;}}"]), component_jsx(style_default.a, {
    id: "3522625416"
  }, [".loadAnima.jsx-3838248654{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-3838248654 2s 10;animation:Loading-jsx-3838248654 2s 10;z-index:9999;}", "@-webkit-keyframes Loading-jsx-3838248654{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}", "@keyframes Loading-jsx-3838248654{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}"]));
};

const getServerSideProps = async context => {
  let type = context.query.type ? context.query.type : 'none';
  return {
    props: {
      type
    }
  };
};
/* harmony default export */ var component = __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });