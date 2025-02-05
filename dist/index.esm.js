import React from 'react';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }

  return _assertThisInitialized(self);
}

var initFullStory = function() {
  return (function(m, n, e, t, l, o, g, y) {
    if (e in m) {
      if (m.console && m.console.log) {
        m.console.log(
          'FullStory namespace conflict. Please set window["_fs_namespace"].'
        );
      }

      return;
    }

    g = m[e] = function(a, b, s) {
      g.q ? g.q.push([a, b, s]) : g._api(a, b, s);
    };

    g.q = [];
    o = n.createElement(t);
    o.async = 1;
    o.crossOrigin = 'anonymous';
    o.src = 'https://' + _fs_script + '/s/fs.js';
    y = n.getElementsByTagName(t)[0];
    y.parentNode.insertBefore(o, y);

    g.identify = function(i, v, s) {
      g(
        l,
        {
          uid: i
        },
        s
      );
      if (v) g(l, v, s);
    };

    g.setUserVars = function(v, s) {
      g(l, v, s);
    };

    g.event = function(i, v, s) {
      g(
        'event',
        {
          n: i,
          p: v
        },
        s
      );
    };

    g.shutdown = function() {
      g('rec', !1);
    };

    g.restart = function() {
      g('rec', !0);
    };

    g.log = function(a, b) {
      g('log', [a, b]);
    };

    g.consent = function(a) {
      g('consent', !arguments.length || a);
    };

    g.identifyAccount = function(i, v) {
      o = 'account';
      v = v || {};
      v.acctId = i;
      g(o, v);
    };

    g.clearUserCookie = function() {};

    g._w = {};
    y = 'XMLHttpRequest';
    g._w[y] = m[y];
    y = 'fetch';
    g._w[y] = m[y];
    if (m[y])
      m[y] = function() {
        return g._w[y].apply(this, arguments);
      };
    g._v = '1.1.1';
  })(window, document, window['_fs_namespace'], 'script', 'user');
};

var initMockFullStory = function() {
  window[window['_fs_namespace']] = {
    identify: function identify() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      return {
        method: 'identify',
        args: args
      };
    },
    setUserVars: function setUserVars() {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      return {
        method: 'setUserVars',
        args: args
      };
    },
    event: function event() {
      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }

      return {
        method: 'event',
        args: args
      };
    },
    shutdown: function shutdown() {
      for (
        var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
        _key4 < _len4;
        _key4++
      ) {
        args[_key4] = arguments[_key4];
      }

      return {
        method: 'shutdown',
        args: args
      };
    },
    restart: function restart() {
      for (
        var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
        _key5 < _len5;
        _key5++
      ) {
        args[_key5] = arguments[_key5];
      }

      return {
        method: 'restart',
        args: args
      };
    },
    log: function log() {
      for (
        var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
        _key6 < _len6;
        _key6++
      ) {
        args[_key6] = arguments[_key6];
      }

      return {
        method: 'log',
        args: args
      };
    },
    consent: function consent() {
      for (
        var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
        _key7 < _len7;
        _key7++
      ) {
        args[_key7] = arguments[_key7];
      }

      return {
        method: 'consent',
        args: args
      };
    },
    identifyAccount: function identifyAccount() {
      for (
        var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
        _key8 < _len8;
        _key8++
      ) {
        args[_key8] = arguments[_key8];
      }

      return {
        method: 'identifyAccount',
        args: args
      };
    },
    clearUserCookie: function clearUserCookie() {
      for (
        var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
        _key9 < _len9;
        _key9++
      ) {
        args[_key9] = arguments[_key9];
      }

      return {
        method: 'clearUserCookie',
        args: args
      };
    }
  };
};

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
var includeFullStory =
  process.env.NODE_ENV !== 'test' ? initFullStory : initMockFullStory;
var getWindowFullStory = function getWindowFullStory() {
  return window[window['_fs_namespace']];
};
var FullStoryAPI = function FullStoryAPI(fn) {
  if (canUseDOM && getWindowFullStory()) {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    return getWindowFullStory()[fn].apply(null, args);
  }

  return false;
};
var identify = function identify() {
  for (
    var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
    _key2 < _len2;
    _key2++
  ) {
    args[_key2] = arguments[_key2];
  }

  return FullStoryAPI.apply(void 0, ['identify'].concat(args));
};
var shutdown = function shutdown() {
  for (
    var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
    _key3 < _len3;
    _key3++
  ) {
    args[_key3] = arguments[_key3];
  }

  return FullStoryAPI.apply(void 0, ['shutdown'].concat(args));
};
var restart = function restart() {
  for (
    var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
    _key4 < _len4;
    _key4++
  ) {
    args[_key4] = arguments[_key4];
  }

  return FullStoryAPI.apply(void 0, ['restart'].concat(args));
};
var setUserVars = function setUserVars() {
  for (
    var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
    _key5 < _len5;
    _key5++
  ) {
    args[_key5] = arguments[_key5];
  }

  return FullStoryAPI.apply(void 0, ['setUserVars'].concat(args));
};
var log = function log() {
  for (
    var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
    _key6 < _len6;
    _key6++
  ) {
    args[_key6] = arguments[_key6];
  }

  return FullStoryAPI.apply(void 0, ['log'].concat(args));
};
var getCurrentSessionUrl = function getCurrentSessionUrl() {
  for (
    var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
    _key7 < _len7;
    _key7++
  ) {
    args[_key7] = arguments[_key7];
  }

  return FullStoryAPI.apply(void 0, ['getCurrentSessionUrl'].concat(args));
};
var event = function event() {
  for (
    var _len8 = arguments.length, args = new Array(_len8), _key8 = 0;
    _key8 < _len8;
    _key8++
  ) {
    args[_key8] = arguments[_key8];
  }

  return FullStoryAPI.apply(void 0, ['event'].concat(args));
};
var consent = function consent() {
  for (
    var _len9 = arguments.length, args = new Array(_len9), _key9 = 0;
    _key9 < _len9;
    _key9++
  ) {
    args[_key9] = arguments[_key9];
  }

  return FullStoryAPI.apply(void 0, ['consent'].concat(args));
};
var clearUserCookie = function clearUserCookie() {
  for (
    var _len10 = arguments.length, args = new Array(_len10), _key10 = 0;
    _key10 < _len10;
    _key10++
  ) {
    args[_key10] = arguments[_key10];
  }

  return FullStoryAPI.apply(void 0, ['clearUserCookie'].concat(args));
};

var FullStory = /*#__PURE__*/ (function(_React$Component) {
  _inherits(FullStory, _React$Component);

  function FullStory(props) {
    var _this;

    _classCallCheck(this, FullStory);

    _this = _possibleConstructorReturn(
      this,
      _getPrototypeOf(FullStory).call(this, props)
    );
    var org = props.org,
      debug = props.debug,
      script = props.script,
      host = props.host,
      namespace = props.namespace;

    if (!org || !canUseDOM) {
      return _possibleConstructorReturn(_this);
    }

    if (!getWindowFullStory()) {
      window['_fs_debug'] = debug || false;
      window['_fs_host'] = host || 'fullstory.com';
      window['_fs_script'] = script || 'edge.fullstory.com';
      window['_fs_org'] = org;
      window['_fs_namespace'] = namespace || 'FS';
      includeFullStory();
    }

    return _this;
  }

  _createClass(FullStory, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (!canUseDOM || !getWindowFullStory()) return false;
        getWindowFullStory().shutdown();
        delete window[window['_fs_namespace']];
        delete window['_fs_debug'];
        delete window['_fs_host'];
        delete window['_fs_org'];
        delete window['_fs_namespace'];
        delete window['_fs_script'];
      }
    },
    {
      key: 'render',
      value: function render() {
        return false;
      }
    }
  ]);

  return FullStory;
})(React.Component);

export default FullStory;
export {
  FullStoryAPI,
  clearUserCookie,
  consent,
  event,
  getCurrentSessionUrl,
  getWindowFullStory,
  identify,
  log,
  restart,
  setUserVars,
  shutdown
};
//# sourceMappingURL=index.esm.js.map
