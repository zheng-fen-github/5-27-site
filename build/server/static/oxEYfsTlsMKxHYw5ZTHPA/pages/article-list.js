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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("K0qR");


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

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "BSzn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Photo({
  id
}) {
  const {
    0: blob,
    1: setBlob
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: uncount,
    1: setUncount
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
      const QURL = "http://zhengfen.top:4040/" + id;
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, blob && __jsx("img", {
    src: URL.createObjectURL(blob),
    alt: "\u7167\u7247",
    className: "jsx-3166343992"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166343992"
  }, ["img.jsx-3166343992{width:100%;}"]));
}

/* harmony default export */ __webpack_exports__["a"] = (Photo);

/***/ }),

/***/ "CsS9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Loading({
  color,
  size
}) {
  let rgba = color ? color : '#72BDE8';
  return __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "content"
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "one"
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "two"
  }), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3746841954", [size, size, rgba]]]) + " " + "three"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3746841954",
    dynamic: [size, size, rgba]
  }, [".content.__jsx-style-dynamic-selector{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", `.content.__jsx-style-dynamic-selector>div.__jsx-style-dynamic-selector{width:${size}px;height:${size}px;border-radius:20px;background:${rgba};margin:0 6px;}`, ".one.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s infinite;animation:go-__jsx-style-dynamic-selector 2s infinite;}", ".two.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.2s infinite;}", ".three.__jsx-style-dynamic-selector{-webkit-animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;animation:go-__jsx-style-dynamic-selector 2s 0.4s infinite;}", "@-webkit-keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}", "@keyframes go-__jsx-style-dynamic-selector{0%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}50%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}}"]));
}

/* harmony default export */ __webpack_exports__["a"] = (Loading);

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

/***/ "K0qR":
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

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./component/public/loading.js
var public_loading = __webpack_require__("CsS9");

// CONCATENATED MODULE: ./component/articleList/PostBu.js

var __jsx = external_react_default.a.createElement;




const PostBu = () => {
  const Open = async e => {
    if (!status) {
      setstatus(true);
      e.target.style.background = '#e65e2c';
    } else {
      let data = new FormData();
      data.append('key', e.target.nextElementSibling.value);

      try {
        setFetching(true);
        const QURL = "http://zhengfen.top:4040/" + 'login/key';
        let res = await fetch(QURL, {
          method: 'POST',
          body: data
        });
        let result = await res.json();

        if (res.ok) {
          router_default.a.push({
            pathname: '/release-article',
            query: {
              key: result
            }
          }, '/release-article');
        } else {
          setFetching(false);
          alert(result);
        }
      } catch (err) {
        setFetching(false);
        console.log(err);
      }
    }
  };

  const {
    0: status,
    1: setstatus
  } = Object(external_react_["useState"])(false);
  const {
    0: fetching,
    1: setFetching
  } = Object(external_react_["useState"])(false);
  return __jsx("div", {
    className: "jsx-2561721662" + " " + "row send-article"
  }, __jsx("div", {
    className: "jsx-2561721662" + " " + "nav-title col-12"
  }, __jsx("h1", {
    className: "jsx-2561721662"
  }, "POST ARTICLE")), __jsx("div", {
    className: "jsx-2561721662" + " " + "article-button col-12 my-5"
  }, __jsx("button", {
    onClick: Open,
    className: "jsx-2561721662" + " " + 'shadow'
  }, !fetching ? 'NEW ARTICLE' : __jsx(public_loading["a" /* default */], {
    color: "white",
    size: "20"
  })), status && __jsx("input", {
    type: "password",
    autoFocus: true,
    name: "key",
    id: "key",
    placeholder: "key",
    className: "jsx-2561721662"
  })), __jsx(style_default.a, {
    id: "2561721662"
  }, [".send-article.jsx-2561721662{position:absolute;left:10%;top:25rem;color:white;}", "h1.jsx-2561721662{font-size:6rem;}", ".article-button.jsx-2561721662 input.jsx-2561721662{margin-left:4rem;height:100%;width:50%;border:none;border-bottom:2px white solid;font-size:4rem;font-weight:700;color:#e65e2c;background:none;outline:none;-webkit-animation:show-jsx-2561721662 1s 1;animation:show-jsx-2561721662 1s 1;}", ".article-button.jsx-2561721662 input.jsx-2561721662:focus{border-color:#e65e2c;}", "button.jsx-2561721662{border:none;background:#326fa0;border-radius:6px;padding:2rem 4rem;font-weight:600;color:white;font-size:2rem;-webkit-transition:.4s;transition:.4s;}", "button.jsx-2561721662:hover{-webkit-transform:translateX(10%);-ms-transform:translateX(10%);transform:translateX(10%);}", "@-webkit-keyframes show-jsx-2561721662{0%{width:0;}100%{width:50%;}}", "@keyframes show-jsx-2561721662{0%{width:0;}100%{width:50%;}}", "@media (max-width:1200px){.send-article.jsx-2561721662{top:17rem;}h1.jsx-2561721662{font-size:3rem;}.article-button.jsx-2561721662 input.jsx-2561721662{font-size:1.5rem;}button.jsx-2561721662{padding:0.8rem 1.4rem;}}", "@media (max-width:600px){.send-article.jsx-2561721662{top:15rem;}h1.jsx-2561721662{font-size:2rem;}button.jsx-2561721662{font-size:1.6rem;}}", "@media (max-width:440px){.send-article.jsx-2561721662{top:10rem;}h1.jsx-2561721662{font-size:2rem;}button.jsx-2561721662{font-size:1.6rem;}}"]));
};

/* harmony default export */ var articleList_PostBu = (PostBu);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./component/articleList/nav.js

var nav_jsx = external_react_default.a.createElement;






const Nav = () => {
  let router = Object(router_["useRouter"])().asPath;
  const {
    0: routerStatus,
    1: setRouterStatus
  } = Object(external_react_["useState"])(false);

  const handleRouteChange = url => {
    setRouterStatus(true);
  };

  router_default.a.events.on('routeChangeStart', handleRouteChange);
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
  return nav_jsx("div", {
    className: "jsx-3995435129" + " " + 'col-12 mx-0 px-0'
  }, nav_jsx("img", {
    src: "article-list-bg.jpg",
    alt: "bg",
    className: "jsx-3995435129"
  }), nav_jsx("div", {
    className: "jsx-3995435129" + " " + "main-nav row m-0 align-items-center justify-content-center"
  }, nav_jsx("div", {
    className: "jsx-3995435129" + " " + "col-12 col-md-10  col-ls-6"
  }, nav_jsx("ul", {
    className: "jsx-3995435129" + " " + 'd-flex'
  }, nav_jsx("li", {
    className: "jsx-3995435129"
  }, nav_jsx(link_default.a, {
    href: "/"
  }, nav_jsx("h3", {
    className: "jsx-3995435129"
  }, "Home"))), nav_jsx("li", {
    className: "jsx-3995435129"
  }, nav_jsx(link_default.a, {
    href: "/photo"
  }, nav_jsx("h3", {
    className: "jsx-3995435129"
  }, "Photo"))), nav_jsx("li", {
    className: "jsx-3995435129"
  }, nav_jsx(link_default.a, {
    href: "/videoList"
  }, nav_jsx("h3", {
    className: "jsx-3995435129"
  }, "video"))), nav_jsx("li", {
    className: "jsx-3995435129"
  }, nav_jsx(link_default.a, {
    href: "/article-list"
  }, nav_jsx("h3", {
    className: "jsx-3995435129"
  }, "Article"))), nav_jsx("li", {
    className: "jsx-3995435129"
  }, nav_jsx(link_default.a, {
    href: "/component"
  }, nav_jsx("h3", {
    className: "jsx-3995435129"
  }, "Component")))))), nav_jsx(articleList_PostBu, null), routerStatus && nav_jsx("div", {
    className: "jsx-3995435129" + " " + 'loadAnima'
  }, "           "), nav_jsx(style_default.a, {
    id: "3995435129"
  }, [".main-nav.jsx-3995435129{width:100%;min-height:14rem;border-bottom:solid rgba(255,255,255,0.5) 1px;background:rgba(0,0,0,0.2);position:absolute;top:0;left:0;}", "img.jsx-3995435129{width:100%;}", "ul.jsx-3995435129{width:100%;list-style:none;margin:0;}", "li.jsx-3995435129{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:.4s;transition:.4s;cursor:pointer;}", "li.jsx-3995435129:hover,.liSeled.jsx-3995435129{background:rgba(255,255,255,0.3);}", "@media (max-width:1000px){div.main-nav.jsx-3995435129{min-height:6rem;}}", "@media (max-width:600px){}", ".loadAnima.jsx-3995435129{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-3995435129 2s 10;animation:Loading-jsx-3995435129 2s 10;z-index:9999;}", "@-webkit-keyframes Loading-jsx-3995435129{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}", "@keyframes Loading-jsx-3995435129{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}"]));
};

/* harmony default export */ var nav = (Nav);
// CONCATENATED MODULE: ./component/articleList/min-nav.js

var min_nav_jsx = external_react_default.a.createElement;


const MinNav = ({
  setState,
  setLoad,
  setType,
  list,
  oldState,
  setPage
}) => {
  let dom = Object(external_react_["useRef"])();

  const updateShow = async e => {
    try {
      let activeDom = e.target.closest('li');
      if (!activeDom) return;
      let oldDom = dom.current;
      if (oldDom) oldDom.classList.remove('seled');
      let type = activeDom.children[0].textContent;

      if (type === 'All') {
        setState(oldState.data);
        setPage(oldState.count);
        setType(null);
        return;
      }

      activeDom.classList.add('seled'); //选中的元素添加样式            

      dom.current = activeDom;
      setState([]); //搜索指定文章           

      setLoad(true);
      let data = await gotData(type);

      if (Array.isArray(data.data)) {
        setState(data.data);
        setPage(data.count);
        setType(type);
      }

      setLoad(false);
    } catch (err) {
      if (err) console.log(err);
      console.log('列表元素样式切换失败');
    }
  };

  const searchEvent = async e => {
    e.stopPropagation();
    let actionDom = e.target.closest('li');
    let searchDom = document.querySelector('i.active');

    if (searchDom) {
      let dom = document.querySelector('input[name="search"]');
      let value = dom.value[0].toUpperCase() + dom.value.slice(1);
      setLoad(true);
      let data = await gotData(value);

      if (Array.isArray(data.data)) {
        setState(data.data);
        setPage(data.count);
        setType(value);
        dom.value = '';
        searchDom.classList.remove('active');
        actionDom.click();
      }

      setLoad(false);
      return;
    }

    let dom = document.querySelector('.search-input.focus');

    if (dom) {
      dom.classList.remove('focus');
      actionDom.classList.remove('seled');
    } else {
      dom = document.querySelector('.search-input');
      dom.classList.add('focus');
    }
  };

  const gotData = async type => {
    try {
      const RURL = "http://zhengfen.top:4040/" + 'addArticle/gotArticle/type/' + type + '?page=1';
      let res = await fetch(RURL);
      let result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return {
        err
      };
    }
  };

  const InputSearchEvent = e => {
    let value = e.target.value;
    let dom = document.querySelector('.iconfont.icon-search');

    if (value) {
      dom.classList.add('active');
    } else {
      dom.classList.remove('active');
    }
  };

  return min_nav_jsx("div", {
    className: "jsx-269564655" + " " + 'row m-0'
  }, min_nav_jsx("div", {
    className: "jsx-269564655" + " " + "col-12 .col-md-11 min-nav  p-5 pffset-0 "
  }, min_nav_jsx("ul", {
    onClick: updateShow,
    className: "jsx-269564655" + " " + 'd-flex m-0'
  }, list.map((type, index) => min_nav_jsx("li", {
    key: index,
    className: "jsx-269564655"
  }, min_nav_jsx("h3", {
    className: "jsx-269564655"
  }, type))), min_nav_jsx("li", {
    className: "jsx-269564655"
  }, min_nav_jsx("h3", {
    className: "jsx-269564655"
  }, "All")), min_nav_jsx("li", {
    onClick: searchEvent,
    className: "jsx-269564655"
  }, min_nav_jsx("h3", {
    className: "jsx-269564655"
  }, min_nav_jsx("i", {
    className: "jsx-269564655" + " " + 'iconfont icon-search'
  })))), min_nav_jsx("div", {
    className: "jsx-269564655" + " " + "row  search-input  mx-0"
  }, min_nav_jsx("input", {
    type: "text",
    name: "search",
    placeholder: "Type",
    onInput: InputSearchEvent,
    className: "jsx-269564655"
  }))), min_nav_jsx(style_default.a, {
    id: "269564655"
  }, [".min-nav.jsx-269564655{color:white;background:black;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);position:relative;}", ".search-input.jsx-269564655{background:black;position:absolute;top:0;right:-100%;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:.5s;transition:.5s;padding:2rem 4rem;z-index:20;}", ".search-input.focus.jsx-269564655{right:15%;}", ".search-input.jsx-269564655 input.jsx-269564655{width:100%;margin:0 auto;font-size:2.5rem;text-align:center;}", "ul.jsx-269564655{list-style:none;}", "li.jsx-269564655{-webkit-flex:1;-ms-flex:1;flex:1;cursor:pointer;-webkit-transition:.4s;transition:.4s;text-align:center;}", "li.jsx-269564655:hover,li.seled.jsx-269564655{opacity:0.5;-webkit-transform:translateY(-25%);-ms-transform:translateY(-25%);transform:translateY(-25%);}", "h3.jsx-269564655{font-size:2.5rem;text-align:center;}", "i.jsx-269564655{font-size:2.5rem;}", "i.active.jsx-269564655{color:#133d93;}", "@media (max-width:980px){.min-nav.jsx-269564655{-webkit-transform:translateY(00%);-ms-transform:translateY(00%);transform:translateY(00%);}}", "@media (max-width:1100px){.search-input.jsx-269564655 input.jsx-269564655{font-size:1.2rem;}}", "@media (max-width:800px){h3.jsx-269564655{font-size:2rem;}}", "@media (max-width:400px){h3.jsx-269564655{font-size:1rem;}}"]));
};

/* harmony default export */ var min_nav = (MinNav);
// EXTERNAL MODULE: ./component/public/anima.js
var anima = __webpack_require__("F9Za");

// EXTERNAL MODULE: ./component/public/getPhoto.js
var getPhoto = __webpack_require__("BSzn");

// CONCATENATED MODULE: ./component/articleList/page.js

var page_jsx = external_react_default.a.createElement;


const Page = ({
  count,
  setState,
  type
}) => {
  let item = 1;
  let array = [item];

  while (count > 10) {
    count -= 10;
    array.push(++item);
  }

  let domRef = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    let dom = document.querySelector('.page');
    dom.classList.add('current');
    domRef.current = dom;
  }, []);

  const gotData = async page => {
    try {
      const RURL = "http://zhengfen.top:4040/" + `${type ? 'addArticle/gotArticle/type/' + type + '?page=' : 'addArticle/gotArticleList/'}` + page;
      let res = await fetch(RURL);
      let result = await res.json();
      return result;
    } catch (err) {
      console.log(err);
      return {
        err
      };
    }
  };

  const ClickEvent = async e => {
    let dom = e.target.closest('.page');
    if (!dom || dom.classList.contains('current')) return;
    let page = +dom.children[0].textContent;
    let data = await gotData(page);

    if (Array.isArray(data.data)) {
      setState(data.data);
      domRef.current.classList.remove('current');
      dom.classList.add('current');
      domRef.current = dom;
      let navDom = document.querySelector('.min-nav');
      navDom.scrollIntoView(true);
    }
  };

  return page_jsx("div", {
    className: "jsx-961374113" + " " + 'col-6 mx-auto mt-5'
  }, page_jsx("div", {
    onClick: ClickEvent,
    className: "jsx-961374113" + " " + "row justify-content-center"
  }, array.map((count, index) => page_jsx("div", {
    key: index,
    className: "jsx-961374113" + " " + "col-auto page  mx-2"
  }, page_jsx("h2", {
    className: "jsx-961374113"
  }, " ", count, " ")))), page_jsx(style_default.a, {
    id: "961374113"
  }, [".page.jsx-961374113{border:solid #4f738d 2px;color:#4f738d;width:60px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;}", ".page.jsx-961374113:hover,.page.current.jsx-961374113{background:#4f738d;color:white;}", "h2.jsx-961374113{font-weight:700;}", "@media (max-width:600px){.page.jsx-961374113{width:40px;height:40px;}}"]));
};

/* harmony default export */ var articleList_page = (Page);
// CONCATENATED MODULE: ./component/articleList/contentList.js

var contentList_jsx = external_react_default.a.createElement;





const ContentList = ({
  setState,
  type,
  state,
  loading,
  count
}) => {
  return contentList_jsx("div", {
    className: "jsx-3931549020" + " " + 'row m-0 article-list-root'
  }, state.map(item => contentList_jsx("div", {
    key: item._id,
    className: "jsx-3931549020" + " " + "col-10 offset-1 my-5"
  }, contentList_jsx(Item, {
    content: item
  }))), state.length === 0 && contentList_jsx("div", {
    className: "jsx-3931549020" + " " + "col-10 offset-1 my-5 not-article-container"
  }, contentList_jsx("div", {
    className: "jsx-3931549020" + " " + "row justify-content-center align-items-center"
  }, loading ? contentList_jsx(anima["a" /* default */], null) : contentList_jsx("h1", {
    className: "jsx-3931549020" + " " + 'col-auto'
  }, "  No Articles For Now "))), count > 10 && contentList_jsx(articleList_page, {
    type: type,
    count: count,
    setState: setState
  }), contentList_jsx(style_default.a, {
    id: "3931549020"
  }, [".not-article-container.jsx-3931549020 .row.jsx-3931549020{height:50vh;}"]));
};

const Item = ({
  content
}) => {
  let time = String(new Date(Number(content.createTime)));
  let id = content.ArticleContent.find(item => item.type === 'photo');
  let path = id ? id.filePath : null;
  return contentList_jsx("div", {
    className: "jsx-2442495104" + " " + "col-12 "
  }, contentList_jsx("div", {
    className: "jsx-2442495104" + " " + "row"
  }, contentList_jsx("div", {
    className: "jsx-2442495104" + " " + "col-8"
  }, contentList_jsx("h4", {
    className: "jsx-2442495104" + " " + 'type'
  }, content.ArticleType), contentList_jsx("h3", {
    className: "jsx-2442495104" + " " + "title my-5"
  }, contentList_jsx("a", {
    href: '/article?id=' + content._id,
    target: "_blank",
    className: "jsx-2442495104"
  }, content.ArticleTitle)), contentList_jsx("h4", {
    className: "jsx-2442495104" + " " + 'create-time'
  }, time.slice(0, 10) + ',' + time.slice(10, 15))), contentList_jsx("div", {
    className: "jsx-2442495104" + " " + "col-4"
  }, contentList_jsx("div", {
    className: "jsx-2442495104" + " " + "row align-items-center h-100"
  }, contentList_jsx(getPhoto["a" /* default */], {
    id: 'addArticle/gotArticlePhoto/' + path
  })))), contentList_jsx(style_default.a, {
    id: "2442495104"
  }, [".col-12.jsx-2442495104{border-bottom:2px solid #eaeaea;padding-bottom:5rem;}", "img.jsx-2442495104{width:100%;}", "a.jsx-2442495104{color:#4f738d;}", "a.jsx-2442495104:hover{color:#e65e2c;}", "h3.jsx-2442495104{font-size:3rem;}", "h4.jsx-2442495104{font-size:2rem;margin:1rem 0;color:#878c8b;}"]));
};

/* harmony default export */ var contentList = (ContentList);
// CONCATENATED MODULE: ./component/articleList/footer.js

var footer_jsx = external_react_default.a.createElement;


const Footer = () => {
  return footer_jsx("footer", {
    className: "jsx-46368544" + " " + 'row mx-0 p-0'
  }, footer_jsx("div", {
    className: "jsx-46368544" + " " + "col-12 py-5 mx-0 text-center"
  }, footer_jsx("h3", {
    className: "jsx-46368544"
  }, "2020 Iconsquare All Rights Reserved")), footer_jsx(style_default.a, {
    id: "46368544"
  }, ["footer.jsx-46368544{background:#326fa0;color:white;margin-top:10%;}", "h3.jsx-46368544{font-size:2rem;}"]));
};

/* harmony default export */ var footer = (Footer);
// CONCATENATED MODULE: ./pages/article-list.js

var article_list_jsx = external_react_default.a.createElement;









const ArticleList = ({
  data,
  list,
  count
}) => {
  Object(external_react_["useEffect"])(() => {
    if (!data) {
      router_default.a.push('/500');
    }
  }, []);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(data);
  const {
    0: initState,
    1: setInitState
  } = Object(external_react_["useState"])({
    data,
    count
  });
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const {
    0: page,
    1: setPage
  } = Object(external_react_["useState"])(count);
  const {
    0: type,
    1: setType
  } = Object(external_react_["useState"])(null);
  return article_list_jsx(external_react_default.a.Fragment, null, article_list_jsx(head_default.a, null, article_list_jsx("title", {
    className: "jsx-2020301026"
  }, "Create Next App"), article_list_jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-2020301026"
  }), article_list_jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_piihixc593j.css",
    className: "jsx-2020301026"
  }), article_list_jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-2020301026"
  })), article_list_jsx("div", {
    className: "jsx-2020301026" + " " + "container-fluid"
  }, article_list_jsx("nav", {
    className: "jsx-2020301026" + " " + 'row mx-0'
  }, article_list_jsx(nav, null)), article_list_jsx(min_nav, {
    setState: setState,
    setType: setType,
    setPage: setPage,
    setLoad: setLoading,
    list: list,
    oldState: initState,
    setPage: setPage
  }), article_list_jsx(contentList, {
    state: state,
    type: type,
    setState: setState,
    loading: loading,
    count: page
  }), article_list_jsx(footer, null)), article_list_jsx(style_default.a, {
    id: "2020301026"
  }, ["*,body{margin:0;padding:0;box-sizing:border-box;}", "html{font-size:10px;}", ".container-fluid{padding:0;overflow-x:hidden;}", "@media (max-width:600px){html{font-size:6px;}}", "@media (max-width:400px){html{font-size:5px;}}"]));
};

const getServerSideProps = async () => {
  const RURL = "http://zhengfen.top:4040/" + 'addArticle/gotArticleList/1';
  let res = await external_node_fetch_default()(RURL);
  if (res.status === 404) return {
    props: {
      data: null
    }
  };
  let result = await res.json();
  return {
    props: {
      data: result.data,
      list: result.list,
      count: result.count
    }
  };
};
/* harmony default export */ var article_list = __webpack_exports__["default"] = (ArticleList);

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });