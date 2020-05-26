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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4vsW":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "NVzp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = () => {
  return __jsx("footer", {
    className: "jsx-591253444" + " " + 'row mx-0 '
  }, __jsx("div", {
    className: "jsx-591253444" + " " + "col-12 py-5 m-0 text-center"
  }, __jsx("h3", {
    className: "jsx-591253444"
  }, "2020 iconsquare All rights reserved")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "591253444"
  }, ["footer.jsx-591253444{background:rgba(0,0,0,0.8);color:white;margin-top:10%;}", "h3.jsx-591253444{font-size:2rem;}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "RNiq":
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

// CONCATENATED MODULE: ./component/home/title.js

var __jsx = external_react_default.a.createElement;


const Title = () => {
  return __jsx("div", {
    className: "jsx-2509732717" + " " + 'title row mx-0'
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "col-10 offset-1"
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "row title-container"
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "col-6"
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "row d-flex flex-column pl-4 justify-content-center"
  }, __jsx("h1", {
    className: "jsx-2509732717"
  }, "Instantly"), __jsx("h2", {
    className: "jsx-2509732717"
  }, "most important"), __jsx("p", {
    className: "jsx-2509732717" + " " + 'w-60'
  }, "Cherish every day and try to make yourself happy !!"))), __jsx("div", {
    className: "jsx-2509732717" + " " + "col-6 "
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "row justify-content-center"
  }, __jsx("div", {
    className: "jsx-2509732717" + " " + "col-10 "
  }, __jsx("img", {
    src: "me.jpg",
    alt: "logo",
    className: "jsx-2509732717"
  })))))), __jsx(style_default.a, {
    id: "2509732717"
  }, [".title.jsx-2509732717{height:86%;width:100%;color:white;}", "img.jsx-2509732717{width:100%;position:relative;top:20%;-webkit-animation:photo-jsx-2509732717 1s 1;animation:photo-jsx-2509732717 1s 1;}", ".title-container.jsx-2509732717,.title-container.jsx-2509732717 .row.jsx-2509732717{height:100%;}", "h1.jsx-2509732717{font-size:8rem;-webkit-animation:text-jsx-2509732717 0.6s 1 0s;animation:text-jsx-2509732717 0.6s 1 0s;}", "h2.jsx-2509732717{font-size:4rem;-webkit-animation:text-jsx-2509732717 0.6s 1 0.2s;animation:text-jsx-2509732717 0.6s 1 0.2s;}", "p.jsx-2509732717{font-size:2rem;font-weight:600;-webkit-animation:text-jsx-2509732717 0.6s 1 0.4s;animation:text-jsx-2509732717 0.6s 1 0.4s;}", "@-webkit-keyframes photo-jsx-2509732717{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}", "@keyframes photo-jsx-2509732717{0%{-webkit-transform:scale(0,0);-ms-transform:scale(0,0);transform:scale(0,0);}100%{-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);}}", "@-webkit-keyframes text-jsx-2509732717{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes text-jsx-2509732717{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@media (max-width:660px){h1.jsx-2509732717{font-size:4rem;}h2.jsx-2509732717{font-size:2rem;}}", "@media (max-width:350px){h1.jsx-2509732717{font-size:2rem;}h2.jsx-2509732717{font-size:1rem;}p.jsx-2509732717{line-height:1.8rem;}}"]));
};

/* harmony default export */ var title = (Title);
// CONCATENATED MODULE: ./component/home/nav.js

var nav_jsx = external_react_default.a.createElement;





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
  return nav_jsx("div", {
    className: "jsx-1436645358" + " " + 'nav row mx-0'
  }, nav_jsx("img", {
    src: "nav-bg.jpg",
    alt: "bg",
    className: "jsx-1436645358"
  }), nav_jsx("div", {
    className: "jsx-1436645358" + " " + "content"
  }, nav_jsx("div", {
    className: "jsx-1436645358" + " " + "min-nav row align-items-center justify-content-center"
  }, nav_jsx("div", {
    className: "jsx-1436645358" + " " + "col-10 col-lg-6"
  }, nav_jsx("ul", {
    className: "jsx-1436645358" + " " + 'd-flex'
  }, nav_jsx("li", {
    className: "jsx-1436645358"
  }, nav_jsx(link_default.a, {
    href: "/"
  }, nav_jsx("h3", {
    className: "jsx-1436645358"
  }, "Home"))), nav_jsx("li", {
    className: "jsx-1436645358"
  }, nav_jsx(link_default.a, {
    href: "/photo"
  }, nav_jsx("h3", {
    className: "jsx-1436645358"
  }, "Photo"))), nav_jsx("li", {
    className: "jsx-1436645358"
  }, nav_jsx(link_default.a, {
    href: "/videoList"
  }, nav_jsx("h3", {
    className: "jsx-1436645358"
  }, "video"))), nav_jsx("li", {
    className: "jsx-1436645358"
  }, nav_jsx(link_default.a, {
    href: "/article-list"
  }, nav_jsx("h3", {
    className: "jsx-1436645358"
  }, "Article"))), nav_jsx("li", {
    className: "jsx-1436645358"
  }, nav_jsx(link_default.a, {
    href: "/component"
  }, nav_jsx("h3", {
    className: "jsx-1436645358"
  }, "Component")))))), nav_jsx(title, null)), nav_jsx(style_default.a, {
    id: "1436645358"
  }, [".nav.jsx-1436645358{position:relative;margin-bottom:10%;}", "img.jsx-1436645358{width :100%;}", ".content.jsx-1436645358{position:absolute;left:0;right:0;top:0;bottom:0;}", ".min-nav.jsx-1436645358{width:100%;min-height:14%;border-bottom:solid rgba(255,255,255,0.5) 1px;}", "ul.jsx-1436645358{width:100%;list-style:none;margin:0;}", "li.jsx-1436645358{-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;color:white;padding:1rem;margin:1rem;border-radius:6px;-webkit-transition:.4s;transition:.4s;cursor:pointer;}", "li.jsx-1436645358:hover,.liSeled.jsx-1436645358{background:rgba(255,255,255,0.3);}"]));
};

/* harmony default export */ var nav = (Nav);
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__("4vsW");
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./component/home/messageWindow.js

var messageWindow_jsx = external_react_default.a.createElement;


const MessageWindow = ({
  set
}) => {
  const closeEvent = e => {
    let dom = e.target.closest('.window-root');
    if (!dom) set(false);
  };

  return messageWindow_jsx("div", {
    onClick: closeEvent,
    className: "jsx-361321846" + " " + 'window-message'
  }, messageWindow_jsx("div", {
    className: "jsx-361321846" + " " + "window-root"
  }, messageWindow_jsx("textarea", {
    type: "text",
    name: "message-main",
    autoFocus: true,
    id: "message-main",
    className: "jsx-361321846"
  }), messageWindow_jsx("button", {
    className: "jsx-361321846"
  }, "Send")), messageWindow_jsx(style_default.a, {
    id: "361321846"
  }, [".window-message.jsx-361321846{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.6);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:5;}", ".window-root.jsx-361321846{width:600px;height:360px;background:#17334b;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-radius:25px;overflow:hidden;}", "textarea.jsx-361321846{height:60%;padding:2rem;width:80%;border-radius:12px;font-size:2rem;font-weight:700;}", "button.jsx-361321846{background:white;color:#2b5875;padding:0.5rem 2rem;font-weight:700;font-size:2rem;width:35%;border:none;border-radius:12px;-webkit-transition:.2s;transition:.2s;}", "button.jsx-361321846:hover{width:38%;}"]));
};

/* harmony default export */ var messageWindow = (MessageWindow);
// CONCATENATED MODULE: ./component/home/introd.js

var introd_jsx = external_react_default.a.createElement;



const Introd = () => {
  const scrollEv = () => {
    let value = window.pageYOffset;

    if (value > 400) {
      window.removeEventListener('scroll', scrollEv);
      if (!textDom) return;
      textDom.style.transform = `translate(0 ,0)`;
    } else {
      let count = 400 - value;
      count = count < 0 ? 0 : count;
      if (!textDom) return;
      textDom.style.transform = `translate(0 ,${count}px)`;
    }
  };

  Object(external_react_["useEffect"])(() => {
    if (window.innerWidth > 1200) {
      window.addEventListener('scroll', scrollEv);
    } else {
      textDom.style.transform = `translate(0 ,0)`;
    }
  }, []);
  let textDom;
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])(false);
  return introd_jsx("div", {
    className: "jsx-3323320530" + " " + 'row introd justify-content-center mx-0'
  }, status && introd_jsx(messageWindow, {
    set: setStatus
  }), introd_jsx("div", {
    className: "jsx-3323320530" + " " + "col-10 col-xl-8  position-relative"
  }, introd_jsx("div", {
    className: "jsx-3323320530" + " " + "row"
  }, introd_jsx("div", {
    ref: ref => textDom = ref,
    className: "jsx-3323320530" + " " + "col-12 col-lg-8 text-center text-lg-left text-root"
  }, introd_jsx("h2", {
    className: "jsx-3323320530"
  }, "My name is Zheng Fen, from the beautiful Jieyang in Guangdong Province. ", introd_jsx("br", {
    className: "jsx-3323320530"
  }), "Familiar with developing website and image processing. Video processing If you need my help\u3002 ", introd_jsx("br", {
    className: "jsx-3323320530"
  })), introd_jsx("p", {
    className: "jsx-3323320530" + " " + 'mt-5'
  }, "Please click the right button to send me a message.")), introd_jsx("div", {
    className: "jsx-3323320530" + " " + "col-12 col-lg-4"
  }, introd_jsx("div", {
    className: "jsx-3323320530" + " " + "row h-100  align-items-end justify-content-lg-end justify-content-center"
  }, introd_jsx("button", {
    onClick: () => setStatus(true),
    className: "jsx-3323320530" + " " + 'introd-bu   p-4 shadow-sm'
  }, "Send Message"))))), introd_jsx(style_default.a, {
    id: "3323320530"
  }, [".introd.jsx-3323320530{margin-top:16rem;}", ".text-root.jsx-3323320530{-webkit-transform:translateY(400px);-ms-transform:translateY(400px);transform:translateY(400px);}", "h2.jsx-3323320530{width:100%;font-size:4rem;}", "p.jsx-3323320530{font-size:2rem;font-weight:600;-webkit-text-decoration:underline;text-decoration:underline;}", ".introd-bu.jsx-3323320530{border:none;background:black;color:white;border-radius:6px;font-size:2rem;font-weight:700;-webkit-transition:.2s;transition:.2s;}", ".introd-bu.jsx-3323320530:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}", "@media (max-width:960px){.introd-bu.jsx-3323320530{margin:5rem 0;}}", "@media (max-width:660px){h2.jsx-3323320530{font-size:3rem;}}"]));
};

/* harmony default export */ var introd = (Introd);
// CONCATENATED MODULE: ./component/home/skill.js

var skill_jsx = external_react_default.a.createElement;


const Skill = () => {
  const scrollEv = () => {
    if (skillRef) {
      if (!DomList.current) return;
      let height = window.innerHeight / 2;
      let top = skillRef.getBoundingClientRect().top;

      if (top < height) {
        DomList.current.map(e => e.classList.remove('jin'));
      } else {
        DomList.current.map(e => e.classList.add('jin'));
      }
    }
  };

  let DomList = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', scrollEv);
    DomList.current = Array.from(skillRef.querySelectorAll('.img'));
  }, []);
  let skillRef;
  return skill_jsx("div", {
    ref: ref => skillRef = ref,
    className: "jsx-413782100" + " " + 'skill row justify-content-center mx-0'
  }, skill_jsx("div", {
    className: "jsx-413782100" + " " + "col-6 "
  }, skill_jsx("h2", {
    className: "jsx-413782100" + " " + 'text-center m-5'
  }, "Skill")), skill_jsx("div", {
    className: "jsx-413782100" + " " + "col-10 my-5"
  }, skill_jsx("div", {
    className: "jsx-413782100" + " " + "row justify-content-center mb-5"
  }, skill_jsx("div", {
    className: "jsx-413782100" + " " + "skill-photos d-flex"
  }, skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/react.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/js.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/vue.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/html.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/css.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/boot.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/next.png",
    alt: "",
    className: "jsx-413782100"
  })), skill_jsx("div", {
    className: "jsx-413782100" + " " + "img jin"
  }, skill_jsx("img", {
    src: "/kuangjia/mongo.png",
    alt: "",
    className: "jsx-413782100"
  }))))), skill_jsx(style_default.a, {
    id: "413782100"
  }, [".skill.jsx-413782100{padding:14rem 0;}", "h2.jsx-413782100{font-size:4rem;}", ".img.jsx-413782100{height:100px;width:50px;margin-left:20px;-webkit-transition:.5s;transition:.5s;}", ".skill-photos.jsx-413782100{padding-right:60px;}", "@media (max-width:960px){.img.jsx-413782100{height:75px;width:37.5px;}.skill-photos.jsx-413782100{padding-right:60px;}}", "@media (max-width:520px){.img.jsx-413782100{height:40px;width:20px;}.skill-photos.jsx-413782100{padding-right:40px;}}", ".jin.jsx-413782100{width:2px;}", ".img.jsx-413782100:hover{z-index:2;-webkit-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2);}", "img.jsx-413782100{height:100%;-webkit-filter:drop-shadow(0 0 2px #c1c1c2);filter:drop-shadow(0 0 2px #c1c1c2);}"]));
};

/* harmony default export */ var skill = (Skill);
// CONCATENATED MODULE: ./component/home/photo.js
var photo_jsx = external_react_default.a.createElement;


const Photo = ({
  id,
  name
}) => {
  const {
    0: bolb,
    1: setBolb
  } = Object(external_react_["useState"])(null);
  const {
    0: error,
    1: setError
  } = Object(external_react_["useState"])(false);

  const getphoto = async () => {
    try {
      const QURL = "http://zhengfen.top:4040/" + 'addphoto/getphoto/' + id;
      let get = await fetch(QURL);

      if (get.ok) {
        let blob = await get.blob();
        let img = document.createElement('img');
        img.src = URL.createObjectURL(blob);

        img.onload = () => {
          document.querySelector('.photo-container').append(img);
          canvasFunc(img.offsetWidth, img.offsetHeight, img, setBolb);
        };
      }
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  Object(external_react_["useEffect"])(() => {
    getphoto();
  }, [id]);
  return photo_jsx(external_react_default.a.Fragment, null, bolb && photo_jsx("img", {
    src: URL.createObjectURL(bolb),
    alt: name,
    className: "w-100"
  }), error && photo_jsx("h2", null, "      Wron       "), photo_jsx("div", {
    className: "photo-container",
    style: {
      position: 'fixed',
      left: 0,
      top: 0,
      visibility: 'hidden',
      userSelect: 'none'
    }
  }), photo_jsx("canvas", {
    id: "canvas",
    hidden: true
  }));
};

const canvasFunc = (W, H, img, loadPhoto) => {
  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  let count = Math.min(W, H);
  canvas.width = count;
  canvas.height = count;
  let w = (Math.max(W, H) - count) / 2;
  W > H ? ctx.drawImage(img, -w, 0) : ctx.drawImage(img, 0, -w); //裁减成一比一    

  canvas.toBlob(blob => {
    // 输出图片                     
    loadPhoto(blob);
  }, 'image/png');
};

/* harmony default export */ var home_photo = (Photo);
// CONCATENATED MODULE: ./component/home/PostPhoto.js

var PostPhoto_jsx = external_react_default.a.createElement;



const PostPhoto = ({
  data
}) => {
  const scrollEv = () => {
    let dom = photosDom.current;

    if (dom) {
      let top = dom.getBoundingClientRect().top;

      if (top < 300) {
        dom.querySelector('.left-photos').classList.add('left-photos-show');
      }

      if (top > window.innerHeight - 200) {
        dom.querySelector('.left-photos').classList.remove('left-photos-show');
      }
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', scrollEv);
  }, []);
  let photosDom = external_react_default.a.createRef();
  return PostPhoto_jsx("div", {
    ref: photosDom,
    className: "jsx-556958214" + " " + 'row justify-content-center mx-0'
  }, PostPhoto_jsx("div", {
    className: "jsx-556958214" + " " + "col-10 col-xl-8 "
  }, PostPhoto_jsx("h2", {
    className: "jsx-556958214" + " " + 'text-lg-left text-center'
  }, "Some funny pictures"), PostPhoto_jsx("div", {
    className: "jsx-556958214" + " " + "row overflow-hidden"
  }, PostPhoto_jsx("div", {
    className: "jsx-556958214" + " " + "col-12 col-md-6 mx-0 left-photos"
  }, PostPhoto_jsx("div", {
    className: "jsx-556958214" + " " + "row justify-content-between "
  }, data && data.list.map(photo => PostPhoto_jsx("div", {
    key: photo,
    className: "jsx-556958214" + " " + "col-6 "
  }, PostPhoto_jsx(home_photo, {
    name: "\u56FE\u7247",
    id: photo
  }))))), PostPhoto_jsx("div", {
    className: "jsx-556958214" + " " + "col-12 col-md-6 max-photo mx-0"
  }, PostPhoto_jsx(home_photo, {
    name: "\u56FE\u7247",
    id: data.first
  })))), PostPhoto_jsx(style_default.a, {
    id: "556958214"
  }, ["h2.jsx-556958214{font-size:4rem;margin:5% 0;font-weight:700;}", ".left-photos.jsx-556958214{-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);-webkit-transition:1s;transition:1s;}", ".left-photos-show.jsx-556958214{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", ".justify-content-between.jsx-556958214{margin-bottom:30px;}", ".justify-content-between.jsx-556958214 .col-6.jsx-556958214:nth-child(n+3){margin-top:30px;}", ".max-photo.jsx-556958214 img.jsx-556958214{height:calc(100% - 30px);}"]));
};

/* harmony default export */ var home_PostPhoto = (PostPhoto);
// CONCATENATED MODULE: ./component/home/component.js

var component_jsx = external_react_default.a.createElement;


const Componetn = () => {
  const scrollEv = () => {
    //滚动动画事件
    let dom = componentRef.current;

    if (dom) {
      if (dom.getBoundingClientRect().top < window.innerHeight / 2) {
        let domList = dom.querySelectorAll('.cnt-item');
        Array.from(domList).map(e => e.classList.add('cnt-item-show'));
      }
    }
  };

  let componentRef = external_react_default.a.createRef();
  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', scrollEv);
  }, []);
  return component_jsx("div", {
    ref: componentRef,
    className: "jsx-4047472789" + " " + 'row justify-content-center mx-0'
  }, component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-6 m-5"
  }, component_jsx("h2", {
    className: "jsx-4047472789" + " " + 'text-center'
  }, "View some commonly used Components")), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4"
  }, component_jsx("a", {
    href: "/component?type=React",
    className: "jsx-4047472789"
  }, component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-12 d-flex justify-content-between p-4 pl-5"
  }, component_jsx("h3", {
    className: "jsx-4047472789"
  }, " React Component "), component_jsx("i", {
    className: "jsx-4047472789" + " " + 'iconfont icon-arrow-forward'
  })))), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4"
  }, component_jsx("a", {
    href: "/component?type=JS",
    className: "jsx-4047472789"
  }, component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-12 d-flex justify-content-between p-4 pl-5"
  }, component_jsx("h3", {
    className: "jsx-4047472789"
  }, " JS Component "), component_jsx("i", {
    className: "jsx-4047472789" + " " + 'iconfont icon-arrow-forward'
  })))), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4"
  }, component_jsx("a", {
    href: "/component?type=CSS",
    className: "jsx-4047472789"
  }, component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-12 d-flex justify-content-between p-4 pl-5"
  }, component_jsx("h3", {
    className: "jsx-4047472789"
  }, " CSS Component "), component_jsx("i", {
    className: "jsx-4047472789" + " " + 'iconfont icon-arrow-forward'
  })))), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-8 cnt-item shadow-sm my-4"
  }, component_jsx("a", {
    href: "/component?type=HtmlBootstrap",
    className: "jsx-4047472789"
  }, component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-12  d-flex justify-content-between p-4 pl-5 "
  }, component_jsx("h3", {
    className: "jsx-4047472789"
  }, " HTML Component "), component_jsx("i", {
    className: "jsx-4047472789" + " " + 'iconfont icon-arrow-forward'
  })))), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-8 my-4"
  }, component_jsx("h3", {
    className: "jsx-4047472789" + " " + 'text-center more'
  }, "See more components? Click the button below to jump")), component_jsx("div", {
    className: "jsx-4047472789" + " " + "col-10 col-sm-8 d-flex justify-content-center"
  }, component_jsx("a", {
    href: "/component",
    className: "jsx-4047472789"
  }, component_jsx("button", {
    className: "jsx-4047472789"
  }, "Click Jump !!"))), component_jsx(style_default.a, {
    id: "4047472789"
  }, [".justify-content-center.jsx-4047472789{background:#ebeef5;background:linear-gradient(45deg,#eff2f7,white);background:radial-gradient(#f4f7fc,white);padding:6rem;}", ".cnt-item.jsx-4047472789{background:white;border-radius:6px;-webkit-transition:.4s;transition:.4s;cursor:pointer;-webkit-transform:translateX(20%);-ms-transform:translateX(20%);transform:translateX(20%);}", ".cnt-item-show.jsx-4047472789{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}", ".cnt-item.jsx-4047472789:hover{-webkit-transform:scale(1,1.1);-ms-transform:scale(1,1.1);transform:scale(1,1.1);}", ".cnt-item.jsx-4047472789:hover h3.jsx-4047472789{color:#309cfe;padding-left:5rem;}", ".cnt-item.jsx-4047472789:hover i.jsx-4047472789{color:#309cfe;margin-right:5rem;}", "h2.jsx-4047472789{font-size:4rem;font-weight:700;}", "h3.jsx-4047472789{font-size:2rem;font-weight:700;line-height:2;-webkit-transition:.4s;transition:.4s;}", "h3.more.jsx-4047472789{color:#a0a7af;}", "a.jsx-4047472789,a.jsx-4047472789:hover{color:black;-webkit-text-decoration:none;text-decoration:none;}", "i.jsx-4047472789{font-size:3rem;margin-right:3rem;-webkit-transition:.4s;transition:.4s;}", "button.jsx-4047472789{background:black;border:none;border-radius:6px;color:white;padding:1rem 2rem;font-size:2rem;font-weight:700;-webkit-transition:.2s;transition:.2s;}", "button.jsx-4047472789:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);box-shadow:0 0 4px black;}", "@media (max-width:960px){.cnt-item.jsx-4047472789{-webkit-transform:translateX(5%);-ms-transform:translateX(5%);transform:translateX(5%);}}"]));
};

/* harmony default export */ var component = (Componetn);
// CONCATENATED MODULE: ./component/home/video.js

var video_jsx = external_react_default.a.createElement;


const Video = () => {
  const positionEvent = (count, dom) => {
    try {
      dom.children[0].style.marginLeft = count + 'px';
    } catch (err) {
      console.log(err);
    }
  };

  const leaveEv = e => {
    positionEvent(0, e.currentTarget);
  };

  const enterEv = e => {
    let dom = e.currentTarget;
    let count = dom.clientWidth - dom.children[0].offsetWidth;
    positionEvent(count, dom);
  };

  const scrollEv = () => {
    //滚动动画事件
    let dom = videoRef.current;

    if (dom) {
      if (dom.getBoundingClientRect().top < window.innerHeight - 600) {
        let domList = dom.querySelectorAll('img');
        Array.from(domList).map(e => e.classList.add('show'));
      }
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', scrollEv);
  }, []);
  let videoRef = external_react_default.a.createRef();
  return video_jsx("div", {
    ref: videoRef,
    className: "jsx-134253356" + " " + 'row video justify-content-center mx-0'
  }, video_jsx("div", {
    className: "jsx-134253356" + " " + "col-12 col-sm-10 col-xl-8 my-4"
  }, video_jsx("div", {
    className: "jsx-134253356" + " " + "row video-ctn"
  }, video_jsx("div", {
    className: "jsx-134253356" + " " + "col-12 col-xl-4 text-xl-left text-center"
  }, video_jsx("h2", {
    className: "jsx-134253356"
  }, "Series of videos"), video_jsx("h3", {
    className: "jsx-134253356" + " " + 'my-4'
  }, "Click on you are interested  !")), video_jsx("div", {
    className: "jsx-134253356" + " " + "col-12 col-xl-8 mt-5 mt-xl-0"
  }, video_jsx("div", {
    className: "jsx-134253356" + " " + "row video-root justify-content-center my-xl-4 "
  }, video_jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-134253356" + " " + "col-5 video-item shadow-sm mx-4"
  }, video_jsx("img", {
    src: "app-logo/ar.jpg",
    alt: "ae",
    className: "jsx-134253356"
  })), video_jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-134253356" + " " + "col-5 video-item shadow-sm mx-4 "
  }, video_jsx("img", {
    src: "app-logo/pr.jpg",
    alt: "pr",
    className: "jsx-134253356"
  }))), video_jsx("div", {
    className: "jsx-134253356" + " " + "row video-root justify-content-center my-xl-4 "
  }, video_jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-134253356" + " " + "col-5 video-item shadow-sm mx-4 "
  }, video_jsx("img", {
    src: "app-logo/ps.jpg",
    alt: "ps",
    className: "jsx-134253356"
  })), video_jsx("div", {
    onMouseLeave: leaveEv,
    onMouseEnter: enterEv,
    className: "jsx-134253356" + " " + "col-5 video-item shadow-sm mx-4 "
  }, video_jsx("img", {
    src: "app-logo/all.jpg",
    alt: "all",
    className: "jsx-134253356"
  })))))), video_jsx(style_default.a, {
    id: "134253356"
  }, [".video-ctn.jsx-134253356{border-bottom:2px solid #eaeaea;padding:20rem 0;}", "img.jsx-134253356{height:100%;-webkit-transition:.5s;transition:.5s;margin-left:25px;}", "img.show.jsx-134253356{margin-left:0;}", ".photo.jsx-134253356{width:16vh;margin-left:0;-webkit-transition:1.5s;transition:1.5s;}", "h2.jsx-134253356{font-size:4rem;font-weight:700;-webkit-animation:text-jsx-134253356 0.6s 1 0s;animation:text-jsx-134253356 0.6s 1 0s;}", "h3.jsx-134253356{-webkit-text-decoration:underline;text-decoration:underline;-webkit-animation:text-jsx-134253356 0.6s 1 0.2s;animation:text-jsx-134253356 0.6s 1 0.2s;}", ".video-item.jsx-134253356{height:16vh;padding:0;cursor:pointer;background:rgba(0,0,0,0.8);margin-bottom:4rem;}", "@-webkit-keyframes text-jsx-134253356{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", "@keyframes text-jsx-134253356{0%{-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);opacity:0;}100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}", ".video.jsx-134253356{background:#eff2f7;background:linear-gradient(45deg,white,#fbfcfe);background:radial-gradient(#f4f7fc,white);margin-top:4rem;}", "@media (max-width:960px){.video-root.jsx-134253356{margin:4rem;}}", "@media (max-width:480px){.video-item.jsx-134253356{height:auto;}img.jsx-134253356{width:100%;height:auto;}}"]));
};

/* harmony default export */ var video = (Video);
// EXTERNAL MODULE: ./component/home/footer.js
var footer = __webpack_require__("NVzp");

// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;












const Home = ({
  data
}) => {
  const fontsizeEvent = () => {
    let style = document.documentElement.style;

    if (window.innerWidth < 960) {
      style.fontSize = '6px';
    } else {
      style.fontSize = '10px';
    }
  };

  Object(external_react_["useEffect"])(() => {
    fontsizeEvent();
    window.addEventListener('resize', () => {
      fontsizeEvent();
    });
  }, []);
  const {
    0: routerStatus,
    1: setRouterStatus
  } = Object(external_react_["useState"])(false); // 路由变化事件

  const handleRouteChange = url => {
    setRouterStatus(true);
  };

  router_default.a.events.on('routeChangeStart', handleRouteChange);
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", {
    className: "jsx-1744663337"
  }, "Create Next App"), pages_jsx("link", {
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    integrity: "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
    crossorigin: "anonymous",
    className: "jsx-1744663337"
  }), pages_jsx("link", {
    rel: "stylesheet",
    href: "//at.alicdn.com/t/font_1748919_jonwjrvk6jq.css",
    className: "jsx-1744663337"
  }), pages_jsx("link", {
    rel: "icon",
    href: "/logo.jpg",
    type: "image/x-icon",
    className: "jsx-1744663337"
  })), pages_jsx("div", {
    className: "jsx-1744663337" + " " + "container-fluid px-0 mx-0"
  }, pages_jsx(nav, null), pages_jsx(introd, null), pages_jsx(skill, null), pages_jsx(home_PostPhoto, {
    data: data
  }), pages_jsx(video, null), pages_jsx(component, null), pages_jsx(footer["a" /* default */], null), routerStatus && pages_jsx("div", {
    className: "jsx-1744663337" + " " + 'loadAnima'
  }, "           ")), pages_jsx(style_default.a, {
    id: "3522625416"
  }, [".loadAnima.jsx-1744663337{position:fixed;left:0;top:0;right:0;bottom:0;background:black;-webkit-animation:Loading-jsx-1744663337 2s 10;animation:Loading-jsx-1744663337 2s 10;z-index:9999;}", "@-webkit-keyframes Loading-jsx-1744663337{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}", "@keyframes Loading-jsx-1744663337{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}"]), pages_jsx(style_default.a, {
    id: "2934903432"
  }, ["*,body{margin:0;padding:0;box-sizing:border-box;}", "html{font-size:10px;}"]));
};

async function getServerSideProps() {
  const RURL = "http://zhengfen.top:4040/" + 'addphoto/photoFine';
  let req = await external_node_fetch_default()(RURL);
  let data = await req.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);

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