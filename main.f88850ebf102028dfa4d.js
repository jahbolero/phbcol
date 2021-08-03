(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    HbP6: function (t, e, n) {
      var r, i;
      'undefined' != typeof window ? window : global,
        void 0 ===
          (i =
            'function' ==
            typeof (r = function () {
              var t = function (e, n) {
                'use strict';
                var r = Object.create(t.prototype),
                  i = 0,
                  o = 0,
                  s = 0,
                  a = 0,
                  u = [],
                  l = !0,
                  c =
                    window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    function (t) {
                      return setTimeout(t, 1e3 / 60);
                    },
                  f = null,
                  p = !1;
                try {
                  var h = Object.defineProperty({}, 'passive', {
                    get: function () {
                      p = !0;
                    },
                  });
                  window.addEventListener('testPassive', null, h),
                    window.removeEventListener('testPassive', null, h);
                } catch (T) {}
                var d =
                    window.cancelAnimationFrame ||
                    window.mozCancelAnimationFrame ||
                    clearTimeout,
                  y =
                    window.transformProp ||
                    (function () {
                      var t = document.createElement('div');
                      if (null === t.style.transform) {
                        var e = ['Webkit', 'Moz', 'ms'];
                        for (var n in e)
                          if (void 0 !== t.style[e[n] + 'Transform'])
                            return e[n] + 'Transform';
                      }
                      return 'transform';
                    })();
                (r.options = {
                  speed: -2,
                  center: !1,
                  wrapper: null,
                  relativeToWrapper: !1,
                  round: !0,
                  vertical: !0,
                  horizontal: !1,
                  callback: function () {},
                }),
                  n &&
                    Object.keys(n).forEach(function (t) {
                      r.options[t] = n[t];
                    }),
                  e || (e = '.rellax');
                var v =
                  'string' == typeof e ? document.querySelectorAll(e) : [e];
                if (v.length > 0) {
                  if (
                    ((r.elems = v),
                    r.options.wrapper && !r.options.wrapper.nodeType)
                  ) {
                    var m = document.querySelector(r.options.wrapper);
                    if (!m)
                      return void console.warn(
                        "Rellax: The wrapper you're trying to use doesn't exist."
                      );
                    r.options.wrapper = m;
                  }
                  var g = function () {
                      for (var t = 0; t < u.length; t++)
                        r.elems[t].style.cssText = u[t].style;
                      (u = []),
                        (o = window.innerHeight),
                        (a = window.innerWidth),
                        w(),
                        (function () {
                          for (var t = 0; t < r.elems.length; t++) {
                            var e = _(r.elems[t]);
                            u.push(e);
                          }
                        })(),
                        C(),
                        l &&
                          (window.addEventListener('resize', g), (l = !1), E());
                    },
                    _ = function (t) {
                      var e = t.getAttribute('data-rellax-percentage'),
                        n = t.getAttribute('data-rellax-speed'),
                        i = t.getAttribute('data-rellax-zindex') || 0,
                        s = t.getAttribute('data-rellax-min'),
                        u = t.getAttribute('data-rellax-max'),
                        l = r.options.wrapper
                          ? r.options.wrapper.scrollTop
                          : window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop;
                      r.options.relativeToWrapper &&
                        (l =
                          (window.pageYOffset ||
                            document.documentElement.scrollTop ||
                            document.body.scrollTop) -
                          r.options.wrapper.offsetTop);
                      var c =
                          r.options.vertical && (e || r.options.center) ? l : 0,
                        f =
                          r.options.horizontal && (e || r.options.center)
                            ? r.options.wrapper
                              ? r.options.wrapper.scrollLeft
                              : window.pageXOffset ||
                                document.documentElement.scrollLeft ||
                                document.body.scrollLeft
                            : 0,
                        p = c + t.getBoundingClientRect().top,
                        h = t.clientHeight || t.offsetHeight || t.scrollHeight,
                        d = f + t.getBoundingClientRect().left,
                        y = t.clientWidth || t.offsetWidth || t.scrollWidth,
                        v = e || (c - p + o) / (h + o),
                        m = e || (f - d + a) / (y + a);
                      r.options.center && ((m = 0.5), (v = 0.5));
                      var g = n || r.options.speed,
                        _ = b(m, v, g),
                        w = t.style.cssText,
                        S = '',
                        E = /transform\s*:/i.exec(w);
                      if (E) {
                        var C = w.slice(E.index),
                          T = C.indexOf(';');
                        S = T
                          ? ' ' + C.slice(11, T).replace(/\s/g, '')
                          : ' ' + C.slice(11).replace(/\s/g, '');
                      }
                      return {
                        baseX: _.x,
                        baseY: _.y,
                        top: p,
                        left: d,
                        height: h,
                        width: y,
                        speed: g,
                        style: w,
                        transform: S,
                        zindex: i,
                        min: s,
                        max: u,
                      };
                    },
                    w = function () {
                      var t = i,
                        e = s;
                      if (
                        ((i = r.options.wrapper
                          ? r.options.wrapper.scrollTop
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollTop || window.pageYOffset),
                        (s = r.options.wrapper
                          ? r.options.wrapper.scrollLeft
                          : (
                              document.documentElement ||
                              document.body.parentNode ||
                              document.body
                            ).scrollLeft || window.pageXOffset),
                        r.options.relativeToWrapper)
                      ) {
                        var n =
                          (
                            document.documentElement ||
                            document.body.parentNode ||
                            document.body
                          ).scrollTop || window.pageYOffset;
                        i = n - r.options.wrapper.offsetTop;
                      }
                      return (
                        !(t == i || !r.options.vertical) ||
                        !(e == s || !r.options.horizontal)
                      );
                    },
                    b = function (t, e, n) {
                      var i = {},
                        o = n * (100 * (1 - t)),
                        s = n * (100 * (1 - e));
                      return (
                        (i.x = r.options.round
                          ? Math.round(o)
                          : Math.round(100 * o) / 100),
                        (i.y = r.options.round
                          ? Math.round(s)
                          : Math.round(100 * s) / 100),
                        i
                      );
                    },
                    S = function () {
                      window.removeEventListener('resize', S),
                        window.removeEventListener('orientationchange', S),
                        (r.options.wrapper
                          ? r.options.wrapper
                          : window
                        ).removeEventListener('scroll', S),
                        (r.options.wrapper
                          ? r.options.wrapper
                          : document
                        ).removeEventListener('touchmove', S),
                        (f = c(E));
                    },
                    E = function () {
                      w() && !1 === l
                        ? (C(), (f = c(E)))
                        : ((f = null),
                          window.addEventListener('resize', S),
                          window.addEventListener('orientationchange', S),
                          (r.options.wrapper
                            ? r.options.wrapper
                            : window
                          ).addEventListener(
                            'scroll',
                            S,
                            !!p && { passive: !0 }
                          ),
                          (r.options.wrapper
                            ? r.options.wrapper
                            : document
                          ).addEventListener(
                            'touchmove',
                            S,
                            !!p && { passive: !0 }
                          ));
                    },
                    C = function () {
                      for (var t, e = 0; e < r.elems.length; e++) {
                        var n =
                            (t = b(
                              (s - u[e].left + a) / (u[e].width + a),
                              (i - u[e].top + o) / (u[e].height + o),
                              u[e].speed
                            )).y - u[e].baseY,
                          l = t.x - u[e].baseX;
                        null !== u[e].min &&
                          (r.options.vertical &&
                            !r.options.horizontal &&
                            (n = n <= u[e].min ? u[e].min : n),
                          r.options.horizontal &&
                            !r.options.vertical &&
                            (l = l <= u[e].min ? u[e].min : l)),
                          null !== u[e].max &&
                            (r.options.vertical &&
                              !r.options.horizontal &&
                              (n = n >= u[e].max ? u[e].max : n),
                            r.options.horizontal &&
                              !r.options.vertical &&
                              (l = l >= u[e].max ? u[e].max : l)),
                          (r.elems[e].style[y] =
                            'translate3d(' +
                            (r.options.horizontal ? l : '0') +
                            'px,' +
                            (r.options.vertical ? n : '0') +
                            'px,' +
                            u[e].zindex +
                            'px) ' +
                            u[e].transform);
                      }
                      r.options.callback(t);
                    };
                  return (
                    (r.destroy = function () {
                      for (var t = 0; t < r.elems.length; t++)
                        r.elems[t].style.cssText = u[t].style;
                      l || (window.removeEventListener('resize', g), (l = !0)),
                        d(f),
                        (f = null);
                    }),
                    g(),
                    (r.refresh = g),
                    r
                  );
                }
                console.warn(
                  "Rellax: The elements you're trying to select don't exist."
                );
              };
              return t;
            })
              ? r.apply(e, [])
              : r) || (t.exports = i);
    },
    crnd: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'crnd');
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function s(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
        );
      }
      function a(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            s.push(r.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function u() {
        for (var t = [], e = 0; e < arguments.length; e++)
          t = t.concat(a(arguments[e]));
        return t;
      }
      var l =
        Array.isArray ||
        function (t) {
          return t && 'number' == typeof t.length;
        };
      function c(t) {
        return null !== t && 'object' == typeof t;
      }
      function f(t) {
        return 'function' == typeof t;
      }
      function p(t) {
        return (
          Error.call(this),
          (this.message = t
            ? t.length +
              ' errors occurred during unsubscription:\n' +
              t
                .map(function (t, e) {
                  return e + 1 + ') ' + t.toString();
                })
                .join('\n  ')
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = t),
          this
        );
      }
      p.prototype = Object.create(Error.prototype);
      var h = p,
        d = (function () {
          function t(t) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          return (
            (t.prototype.unsubscribe = function () {
              var e;
              if (!this.closed) {
                var n = this._parentOrParents,
                  r = this._unsubscribe,
                  i = this._subscriptions;
                if (
                  ((this.closed = !0),
                  (this._parentOrParents = null),
                  (this._subscriptions = null),
                  n instanceof t)
                )
                  n.remove(this);
                else if (null !== n)
                  for (var o = 0; o < n.length; ++o) n[o].remove(this);
                if (f(r))
                  try {
                    r.call(this);
                  } catch (u) {
                    e = u instanceof h ? y(u.errors) : [u];
                  }
                if (l(i)) {
                  o = -1;
                  for (var s = i.length; ++o < s; ) {
                    var a = i[o];
                    if (c(a))
                      try {
                        a.unsubscribe();
                      } catch (u) {
                        (e = e || []),
                          u instanceof h
                            ? (e = e.concat(y(u.errors)))
                            : e.push(u);
                      }
                  }
                }
                if (e) throw new h(e);
              }
            }),
            (t.prototype.add = function (e) {
              var n = e;
              if (!e) return t.EMPTY;
              switch (typeof e) {
                case 'function':
                  n = new t(e);
                case 'object':
                  if (
                    n === this ||
                    n.closed ||
                    'function' != typeof n.unsubscribe
                  )
                    return n;
                  if (this.closed) return n.unsubscribe(), n;
                  if (!(n instanceof t)) {
                    var r = n;
                    (n = new t())._subscriptions = [r];
                  }
                  break;
                default:
                  throw new Error(
                    'unrecognized teardown ' + e + ' added to Subscription.'
                  );
              }
              var i = n._parentOrParents;
              if (null === i) n._parentOrParents = this;
              else if (i instanceof t) {
                if (i === this) return n;
                n._parentOrParents = [i, this];
              } else {
                if (-1 !== i.indexOf(this)) return n;
                i.push(this);
              }
              var o = this._subscriptions;
              return null === o ? (this._subscriptions = [n]) : o.push(n), n;
            }),
            (t.prototype.remove = function (t) {
              var e = this._subscriptions;
              if (e) {
                var n = e.indexOf(t);
                -1 !== n && e.splice(n, 1);
              }
            }),
            (t.EMPTY = (function (t) {
              return (t.closed = !0), t;
            })(new t())),
            t
          );
        })();
      function y(t) {
        return t.reduce(function (t, e) {
          return t.concat(e instanceof h ? e.errors : e);
        }, []);
      }
      var v = !1,
        m = {
          Promise: void 0,
          set useDeprecatedSynchronousErrorHandling(t) {
            v = t;
          },
          get useDeprecatedSynchronousErrorHandling() {
            return v;
          },
        };
      function g(t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
      var _ = {
          closed: !0,
          next: function (t) {},
          error: function (t) {
            if (m.useDeprecatedSynchronousErrorHandling) throw t;
            g(t);
          },
          complete: function () {},
        },
        w =
          'function' == typeof Symbol
            ? Symbol('rxSubscriber')
            : '@@rxSubscriber_' + Math.random(),
        b = (function (t) {
          function e(n, r, i) {
            var o = t.call(this) || this;
            switch (
              ((o.syncErrorValue = null),
              (o.syncErrorThrown = !1),
              (o.syncErrorThrowable = !1),
              (o.isStopped = !1),
              arguments.length)
            ) {
              case 0:
                o.destination = _;
                break;
              case 1:
                if (!n) {
                  o.destination = _;
                  break;
                }
                if ('object' == typeof n) {
                  n instanceof e
                    ? ((o.syncErrorThrowable = n.syncErrorThrowable),
                      (o.destination = n),
                      n.add(o))
                    : ((o.syncErrorThrowable = !0),
                      (o.destination = new S(o, n)));
                  break;
                }
              default:
                (o.syncErrorThrowable = !0),
                  (o.destination = new S(o, n, r, i));
            }
            return o;
          }
          return (
            i(e, t),
            (e.prototype[w] = function () {
              return this;
            }),
            (e.create = function (t, n, r) {
              var i = new e(t, n, r);
              return (i.syncErrorThrowable = !1), i;
            }),
            (e.prototype.next = function (t) {
              this.isStopped || this._next(t);
            }),
            (e.prototype.error = function (t) {
              this.isStopped || ((this.isStopped = !0), this._error(t));
            }),
            (e.prototype.complete = function () {
              this.isStopped || ((this.isStopped = !0), this._complete());
            }),
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), t.prototype.unsubscribe.call(this));
            }),
            (e.prototype._next = function (t) {
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              this.destination.error(t), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.destination.complete(), this.unsubscribe();
            }),
            (e.prototype._unsubscribeAndRecycle = function () {
              var t = this._parentOrParents;
              return (
                (this._parentOrParents = null),
                this.unsubscribe(),
                (this.closed = !1),
                (this.isStopped = !1),
                (this._parentOrParents = t),
                this
              );
            }),
            e
          );
        })(d),
        S = (function (t) {
          function e(e, n, r, i) {
            var o,
              s = t.call(this) || this;
            s._parentSubscriber = e;
            var a = s;
            return (
              f(n)
                ? (o = n)
                : n &&
                  ((o = n.next),
                  (r = n.error),
                  (i = n.complete),
                  n !== _ &&
                    (f((a = Object.create(n)).unsubscribe) &&
                      s.add(a.unsubscribe.bind(a)),
                    (a.unsubscribe = s.unsubscribe.bind(s)))),
              (s._context = a),
              (s._next = o),
              (s._error = r),
              (s._complete = i),
              s
            );
          }
          return (
            i(e, t),
            (e.prototype.next = function (t) {
              if (!this.isStopped && this._next) {
                var e = this._parentSubscriber;
                m.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                  ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
                  : this.__tryOrUnsub(this._next, t);
              }
            }),
            (e.prototype.error = function (t) {
              if (!this.isStopped) {
                var e = this._parentSubscriber,
                  n = m.useDeprecatedSynchronousErrorHandling;
                if (this._error)
                  n && e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, this._error, t),
                      this.unsubscribe())
                    : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                else if (e.syncErrorThrowable)
                  n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : g(t),
                    this.unsubscribe();
                else {
                  if ((this.unsubscribe(), n)) throw t;
                  g(t);
                }
              }
            }),
            (e.prototype.complete = function () {
              var t = this;
              if (!this.isStopped) {
                var e = this._parentSubscriber;
                if (this._complete) {
                  var n = function () {
                    return t._complete.call(t._context);
                  };
                  m.useDeprecatedSynchronousErrorHandling &&
                  e.syncErrorThrowable
                    ? (this.__tryOrSetError(e, n), this.unsubscribe())
                    : (this.__tryOrUnsub(n), this.unsubscribe());
                } else this.unsubscribe();
              }
            }),
            (e.prototype.__tryOrUnsub = function (t, e) {
              try {
                t.call(this._context, e);
              } catch (n) {
                if (
                  (this.unsubscribe(), m.useDeprecatedSynchronousErrorHandling)
                )
                  throw n;
                g(n);
              }
            }),
            (e.prototype.__tryOrSetError = function (t, e, n) {
              if (!m.useDeprecatedSynchronousErrorHandling)
                throw new Error('bad call');
              try {
                e.call(this._context, n);
              } catch (r) {
                return m.useDeprecatedSynchronousErrorHandling
                  ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
                  : (g(r), !0);
              }
              return !1;
            }),
            (e.prototype._unsubscribe = function () {
              var t = this._parentSubscriber;
              (this._context = null),
                (this._parentSubscriber = null),
                t.unsubscribe();
            }),
            e
          );
        })(b),
        E =
          ('function' == typeof Symbol && Symbol.observable) || '@@observable';
      function C() {}
      function T() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return x(t);
      }
      function x(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function (e) {
                return t.reduce(function (t, e) {
                  return e(t);
                }, e);
              }
          : C;
      }
      var k = (function () {
        function t(t) {
          (this._isScalar = !1), t && (this._subscribe = t);
        }
        return (
          (t.prototype.lift = function (e) {
            var n = new t();
            return (n.source = this), (n.operator = e), n;
          }),
          (t.prototype.subscribe = function (t, e, n) {
            var r = this.operator,
              i = (function (t, e, n) {
                if (t) {
                  if (t instanceof b) return t;
                  if (t[w]) return t[w]();
                }
                return t || e || n ? new b(t, e, n) : new b(_);
              })(t, e, n);
            if (
              (i.add(
                r
                  ? r.call(i, this.source)
                  : this.source ||
                    (m.useDeprecatedSynchronousErrorHandling &&
                      !i.syncErrorThrowable)
                  ? this._subscribe(i)
                  : this._trySubscribe(i)
              ),
              m.useDeprecatedSynchronousErrorHandling &&
                i.syncErrorThrowable &&
                ((i.syncErrorThrowable = !1), i.syncErrorThrown))
            )
              throw i.syncErrorValue;
            return i;
          }),
          (t.prototype._trySubscribe = function (t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              m.useDeprecatedSynchronousErrorHandling &&
                ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    var e = t.destination;
                    if (t.closed || t.isStopped) return !1;
                    t = e && e instanceof b ? e : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }),
          (t.prototype.forEach = function (t, e) {
            var n = this;
            return new (e = A(e))(function (e, r) {
              var i;
              i = n.subscribe(
                function (e) {
                  try {
                    t(e);
                  } catch (n) {
                    r(n), i && i.unsubscribe();
                  }
                },
                r,
                e
              );
            });
          }),
          (t.prototype._subscribe = function (t) {
            var e = this.source;
            return e && e.subscribe(t);
          }),
          (t.prototype[E] = function () {
            return this;
          }),
          (t.prototype.pipe = function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            return 0 === t.length ? this : x(t)(this);
          }),
          (t.prototype.toPromise = function (t) {
            var e = this;
            return new (t = A(t))(function (t, n) {
              var r;
              e.subscribe(
                function (t) {
                  return (r = t);
                },
                function (t) {
                  return n(t);
                },
                function () {
                  return t(r);
                }
              );
            });
          }),
          (t.create = function (e) {
            return new t(e);
          }),
          t
        );
      })();
      function A(t) {
        if ((t || (t = m.Promise || Promise), !t))
          throw new Error('no Promise impl found');
        return t;
      }
      function P() {
        return (
          Error.call(this),
          (this.message = 'object unsubscribed'),
          (this.name = 'ObjectUnsubscribedError'),
          this
        );
      }
      P.prototype = Object.create(Error.prototype);
      var R = P,
        O = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.subject = e), (r.subscriber = n), (r.closed = !1), r;
          }
          return (
            i(e, t),
            (e.prototype.unsubscribe = function () {
              if (!this.closed) {
                this.closed = !0;
                var t = this.subject,
                  e = t.observers;
                if (
                  ((this.subject = null),
                  e && 0 !== e.length && !t.isStopped && !t.closed)
                ) {
                  var n = e.indexOf(this.subscriber);
                  -1 !== n && e.splice(n, 1);
                }
              }
            }),
            e
          );
        })(d),
        I = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.destination = e), n;
          }
          return i(e, t), e;
        })(b),
        N = (function (t) {
          function e() {
            var e = t.call(this) || this;
            return (
              (e.observers = []),
              (e.closed = !1),
              (e.isStopped = !1),
              (e.hasError = !1),
              (e.thrownError = null),
              e
            );
          }
          return (
            i(e, t),
            (e.prototype[w] = function () {
              return new I(this);
            }),
            (e.prototype.lift = function (t) {
              var e = new j(this, this);
              return (e.operator = t), e;
            }),
            (e.prototype.next = function (t) {
              if (this.closed) throw new R();
              if (!this.isStopped)
                for (
                  var e = this.observers, n = e.length, r = e.slice(), i = 0;
                  i < n;
                  i++
                )
                  r[i].next(t);
            }),
            (e.prototype.error = function (t) {
              if (this.closed) throw new R();
              (this.hasError = !0),
                (this.thrownError = t),
                (this.isStopped = !0);
              for (
                var e = this.observers, n = e.length, r = e.slice(), i = 0;
                i < n;
                i++
              )
                r[i].error(t);
              this.observers.length = 0;
            }),
            (e.prototype.complete = function () {
              if (this.closed) throw new R();
              this.isStopped = !0;
              for (
                var t = this.observers, e = t.length, n = t.slice(), r = 0;
                r < e;
                r++
              )
                n[r].complete();
              this.observers.length = 0;
            }),
            (e.prototype.unsubscribe = function () {
              (this.isStopped = !0),
                (this.closed = !0),
                (this.observers = null);
            }),
            (e.prototype._trySubscribe = function (e) {
              if (this.closed) throw new R();
              return t.prototype._trySubscribe.call(this, e);
            }),
            (e.prototype._subscribe = function (t) {
              if (this.closed) throw new R();
              return this.hasError
                ? (t.error(this.thrownError), d.EMPTY)
                : this.isStopped
                ? (t.complete(), d.EMPTY)
                : (this.observers.push(t), new O(this, t));
            }),
            (e.prototype.asObservable = function () {
              var t = new k();
              return (t.source = this), t;
            }),
            (e.create = function (t, e) {
              return new j(t, e);
            }),
            e
          );
        })(k),
        j = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r.destination = e), (r.source = n), r;
          }
          return (
            i(e, t),
            (e.prototype.next = function (t) {
              var e = this.destination;
              e && e.next && e.next(t);
            }),
            (e.prototype.error = function (t) {
              var e = this.destination;
              e && e.error && this.destination.error(t);
            }),
            (e.prototype.complete = function () {
              var t = this.destination;
              t && t.complete && this.destination.complete();
            }),
            (e.prototype._subscribe = function (t) {
              return this.source ? this.source.subscribe(t) : d.EMPTY;
            }),
            e
          );
        })(N);
      function D(t) {
        return t && 'function' == typeof t.schedule;
      }
      var F = (function (t) {
          function e(e, n, r) {
            var i = t.call(this) || this;
            return (
              (i.parent = e),
              (i.outerValue = n),
              (i.outerIndex = r),
              (i.index = 0),
              i
            );
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              this.parent.notifyNext(
                this.outerValue,
                t,
                this.outerIndex,
                this.index++,
                this
              );
            }),
            (e.prototype._error = function (t) {
              this.parent.notifyError(t, this), this.unsubscribe();
            }),
            (e.prototype._complete = function () {
              this.parent.notifyComplete(this), this.unsubscribe();
            }),
            e
          );
        })(b),
        L = function (t) {
          return function (e) {
            for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
            e.complete();
          };
        };
      function M() {
        return 'function' == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : '@@iterator';
      }
      var U = M(),
        H = function (t) {
          return t && 'number' == typeof t.length && 'function' != typeof t;
        };
      function V(t) {
        return (
          !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then
        );
      }
      var q = function (t) {
        if (t && 'function' == typeof t[E])
          return (
            (r = t),
            function (t) {
              var e = r[E]();
              if ('function' != typeof e.subscribe)
                throw new TypeError(
                  'Provided object does not correctly implement Symbol.observable'
                );
              return e.subscribe(t);
            }
          );
        if (H(t)) return L(t);
        if (V(t))
          return (
            (n = t),
            function (t) {
              return (
                n
                  .then(
                    function (e) {
                      t.closed || (t.next(e), t.complete());
                    },
                    function (e) {
                      return t.error(e);
                    }
                  )
                  .then(null, g),
                t
              );
            }
          );
        if (t && 'function' == typeof t[U])
          return (
            (e = t),
            function (t) {
              for (var n = e[U](); ; ) {
                var r = n.next();
                if (r.done) {
                  t.complete();
                  break;
                }
                if ((t.next(r.value), t.closed)) break;
              }
              return (
                'function' == typeof n.return &&
                  t.add(function () {
                    n.return && n.return();
                  }),
                t
              );
            }
          );
        var e,
          n,
          r,
          i = c(t) ? 'an invalid object' : "'" + t + "'";
        throw new TypeError(
          'You provided ' +
            i +
            ' where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.'
        );
      };
      function B(t, e, n, r, i) {
        if ((void 0 === i && (i = new F(t, n, r)), !i.closed))
          return e instanceof k ? e.subscribe(i) : q(e)(i);
      }
      var z = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          i(e, t),
          (e.prototype.notifyNext = function (t, e, n, r, i) {
            this.destination.next(e);
          }),
          (e.prototype.notifyError = function (t, e) {
            this.destination.error(t);
          }),
          (e.prototype.notifyComplete = function (t) {
            this.destination.complete();
          }),
          e
        );
      })(b);
      function W(t, e) {
        return function (n) {
          if ('function' != typeof t)
            throw new TypeError(
              'argument is not a function. Are you looking for `mapTo()`?'
            );
          return n.lift(new Q(t, e));
        };
      }
      var Q = (function () {
          function t(t, e) {
            (this.project = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new K(t, this.project, this.thisArg));
            }),
            t
          );
        })(),
        K = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.project = n), (i.count = 0), (i.thisArg = r || i), i;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.project.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(b);
      function Z(t, e) {
        return new k(function (n) {
          var r = new d(),
            i = 0;
          return (
            r.add(
              e.schedule(function () {
                i !== t.length
                  ? (n.next(t[i++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function G(t, e) {
        return e
          ? (function (t, e) {
              if (null != t) {
                if (
                  (function (t) {
                    return t && 'function' == typeof t[E];
                  })(t)
                )
                  return (function (t, e) {
                    return new k(function (n) {
                      var r = new d();
                      return (
                        r.add(
                          e.schedule(function () {
                            var i = t[E]();
                            r.add(
                              i.subscribe({
                                next: function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      return n.next(t);
                                    })
                                  );
                                },
                                error: function (t) {
                                  r.add(
                                    e.schedule(function () {
                                      return n.error(t);
                                    })
                                  );
                                },
                                complete: function () {
                                  r.add(
                                    e.schedule(function () {
                                      return n.complete();
                                    })
                                  );
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (V(t))
                  return (function (t, e) {
                    return new k(function (n) {
                      var r = new d();
                      return (
                        r.add(
                          e.schedule(function () {
                            return t.then(
                              function (t) {
                                r.add(
                                  e.schedule(function () {
                                    n.next(t),
                                      r.add(
                                        e.schedule(function () {
                                          return n.complete();
                                        })
                                      );
                                  })
                                );
                              },
                              function (t) {
                                r.add(
                                  e.schedule(function () {
                                    return n.error(t);
                                  })
                                );
                              }
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(t, e);
                if (H(t)) return Z(t, e);
                if (
                  (function (t) {
                    return t && 'function' == typeof t[U];
                  })(t) ||
                  'string' == typeof t
                )
                  return (function (t, e) {
                    if (!t) throw new Error('Iterable cannot be null');
                    return new k(function (n) {
                      var r,
                        i = new d();
                      return (
                        i.add(function () {
                          r && 'function' == typeof r.return && r.return();
                        }),
                        i.add(
                          e.schedule(function () {
                            (r = t[U]()),
                              i.add(
                                e.schedule(function () {
                                  if (!n.closed) {
                                    var t, e;
                                    try {
                                      var i = r.next();
                                      (t = i.value), (e = i.done);
                                    } catch (o) {
                                      return void n.error(o);
                                    }
                                    e
                                      ? n.complete()
                                      : (n.next(t), this.schedule());
                                  }
                                })
                              );
                          })
                        ),
                        i
                      );
                    });
                  })(t, e);
              }
              throw new TypeError(
                ((null !== t && typeof t) || t) + ' is not observable'
              );
            })(t, e)
          : t instanceof k
          ? t
          : new k(q(t));
      }
      function $(t, e, n) {
        return (
          void 0 === n && (n = Number.POSITIVE_INFINITY),
          'function' == typeof e
            ? function (r) {
                return r.pipe(
                  $(function (n, r) {
                    return G(t(n, r)).pipe(
                      W(function (t, i) {
                        return e(n, t, r, i);
                      })
                    );
                  }, n)
                );
              }
            : ('number' == typeof e && (n = e),
              function (e) {
                return e.lift(new Y(t, n));
              })
        );
      }
      var Y = (function () {
          function t(t, e) {
            void 0 === e && (e = Number.POSITIVE_INFINITY),
              (this.project = t),
              (this.concurrent = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new J(t, this.project, this.concurrent));
            }),
            t
          );
        })(),
        J = (function (t) {
          function e(e, n, r) {
            void 0 === r && (r = Number.POSITIVE_INFINITY);
            var i = t.call(this, e) || this;
            return (
              (i.project = n),
              (i.concurrent = r),
              (i.hasCompleted = !1),
              (i.buffer = []),
              (i.active = 0),
              (i.index = 0),
              i
            );
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              this.active < this.concurrent
                ? this._tryNext(t)
                : this.buffer.push(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this.active++, this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = new F(this, void 0, void 0);
              this.destination.add(r), B(this, t, e, n, r);
            }),
            (e.prototype._complete = function () {
              (this.hasCompleted = !0),
                0 === this.active &&
                  0 === this.buffer.length &&
                  this.destination.complete(),
                this.unsubscribe();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            (e.prototype.notifyComplete = function (t) {
              var e = this.buffer;
              this.remove(t),
                this.active--,
                e.length > 0
                  ? this._next(e.shift())
                  : 0 === this.active &&
                    this.hasCompleted &&
                    this.destination.complete();
            }),
            e
          );
        })(z);
      function X(t) {
        return t;
      }
      function tt(t) {
        return void 0 === t && (t = Number.POSITIVE_INFINITY), $(X, t);
      }
      function et(t, e) {
        return e ? Z(t, e) : new k(L(t));
      }
      function nt() {
        return function (t) {
          return t.lift(new rt(t));
        };
      }
      var rt = (function () {
          function t(t) {
            this.connectable = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = this.connectable;
              n._refCount++;
              var r = new it(t, n),
                i = e.subscribe(r);
              return r.closed || (r.connection = n.connect()), i;
            }),
            t
          );
        })(),
        it = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            i(e, t),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._refCount;
                if (e <= 0) this.connection = null;
                else if (((t._refCount = e - 1), e > 1)) this.connection = null;
                else {
                  var n = this.connection,
                    r = t._connection;
                  (this.connection = null),
                    !r || (n && r !== n) || r.unsubscribe();
                }
              } else this.connection = null;
            }),
            e
          );
        })(b),
        ot = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.source = e),
              (r.subjectFactory = n),
              (r._refCount = 0),
              (r._isComplete = !1),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype._subscribe = function (t) {
              return this.getSubject().subscribe(t);
            }),
            (e.prototype.getSubject = function () {
              var t = this._subject;
              return (
                (t && !t.isStopped) || (this._subject = this.subjectFactory()),
                this._subject
              );
            }),
            (e.prototype.connect = function () {
              var t = this._connection;
              return (
                t ||
                  ((this._isComplete = !1),
                  (t = this._connection = new d()).add(
                    this.source.subscribe(new at(this.getSubject(), this))
                  ),
                  t.closed && ((this._connection = null), (t = d.EMPTY))),
                t
              );
            }),
            (e.prototype.refCount = function () {
              return nt()(this);
            }),
            e
          );
        })(k).prototype,
        st = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: ot._subscribe },
          _isComplete: { value: ot._isComplete, writable: !0 },
          getSubject: { value: ot.getSubject },
          connect: { value: ot.connect },
          refCount: { value: ot.refCount },
        },
        at = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.connectable = n), r;
          }
          return (
            i(e, t),
            (e.prototype._error = function (e) {
              this._unsubscribe(), t.prototype._error.call(this, e);
            }),
            (e.prototype._complete = function () {
              (this.connectable._isComplete = !0),
                this._unsubscribe(),
                t.prototype._complete.call(this);
            }),
            (e.prototype._unsubscribe = function () {
              var t = this.connectable;
              if (t) {
                this.connectable = null;
                var e = t._connection;
                (t._refCount = 0),
                  (t._subject = null),
                  (t._connection = null),
                  e && e.unsubscribe();
              }
            }),
            e
          );
        })(I);
      function ut() {
        return new N();
      }
      var lt = '__parameters__';
      function ct(t, e, n) {
        var r = (function (t) {
          return function () {
            for (var e = [], n = 0; n < arguments.length; n++)
              e[n] = arguments[n];
            if (t) {
              var r = t.apply(void 0, u(e));
              for (var i in r) this[i] = r[i];
            }
          };
        })(e);
        function i() {
          for (var t, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          if (this instanceof i) return r.apply(this, e), this;
          var o = new ((t = i).bind.apply(t, u([void 0], e)))();
          return (s.annotation = o), s;
          function s(t, e, n) {
            for (
              var r = t.hasOwnProperty(lt)
                ? t[lt]
                : Object.defineProperty(t, lt, { value: [] })[lt];
              r.length <= n;

            )
              r.push(null);
            return (r[n] = r[n] || []).push(o), t;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = t),
          (i.annotationCls = i),
          i
        );
      }
      var ft = ct('Inject', function (t) {
          return { token: t };
        }),
        pt = ct('Optional'),
        ht = ct('Self'),
        dt = ct('SkipSelf'),
        yt = (function (t) {
          return (
            (t[(t.Default = 0)] = 'Default'),
            (t[(t.Host = 1)] = 'Host'),
            (t[(t.Self = 2)] = 'Self'),
            (t[(t.SkipSelf = 4)] = 'SkipSelf'),
            (t[(t.Optional = 8)] = 'Optional'),
            t
          );
        })({});
      function vt(t) {
        for (var e in t) if (t[e] === vt) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function mt(t) {
        return {
          token: t.token,
          providedIn: t.providedIn || null,
          factory: t.factory,
          value: void 0,
        };
      }
      function gt(t) {
        return {
          factory: t.factory,
          providers: t.providers || [],
          imports: t.imports || [],
        };
      }
      function _t(t) {
        return wt(t, t[St]) || wt(t, t[Tt]);
      }
      function wt(t, e) {
        return e && e.token === t ? e : null;
      }
      function bt(t) {
        return t && (t.hasOwnProperty(Et) || t.hasOwnProperty(xt))
          ? t[Et]
          : null;
      }
      var St = vt({ '\u0275prov': vt }),
        Et = vt({ '\u0275inj': vt }),
        Ct = vt({ '\u0275provFallback': vt }),
        Tt = vt({ ngInjectableDef: vt }),
        xt = vt({ ngInjectorDef: vt });
      function kt(t) {
        if ('string' == typeof t) return t;
        if (Array.isArray(t)) return '[' + t.map(kt).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return '' + t.overriddenName;
        if (t.name) return '' + t.name;
        var e = t.toString();
        if (null == e) return '' + e;
        var n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      function At(t, e) {
        return null == t || '' === t
          ? null === e
            ? ''
            : e
          : null == e || '' === e
          ? t
          : t + ' ' + e;
      }
      var Pt = vt({ __forward_ref__: vt });
      function Rt(t) {
        return (
          (t.__forward_ref__ = Rt),
          (t.toString = function () {
            return kt(this());
          }),
          t
        );
      }
      function Ot(t) {
        return 'function' == typeof (e = t) &&
          e.hasOwnProperty(Pt) &&
          e.__forward_ref__ === Rt
          ? t()
          : t;
        var e;
      }
      var It,
        Nt = 'undefined' != typeof globalThis && globalThis,
        jt = 'undefined' != typeof window && window,
        Dt =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Ft = 'undefined' != typeof global && global,
        Lt = Nt || Ft || jt || Dt,
        Mt = vt({ '\u0275cmp': vt }),
        Ut = vt({ '\u0275dir': vt }),
        Ht = vt({ '\u0275pipe': vt }),
        Vt = vt({ '\u0275mod': vt }),
        qt = vt({ '\u0275loc': vt }),
        Bt = vt({ '\u0275fac': vt }),
        zt = vt({ __NG_ELEMENT_ID__: vt }),
        Wt = (function () {
          function t(t, e) {
            (this._desc = t),
              (this.ngMetadataName = 'InjectionToken'),
              (this.ɵprov = void 0),
              'number' == typeof e
                ? (this.__NG_ELEMENT_ID__ = e)
                : void 0 !== e &&
                  (this.ɵprov = mt({
                    token: this,
                    providedIn: e.providedIn || 'root',
                    factory: e.factory,
                  }));
          }
          return (
            (t.prototype.toString = function () {
              return 'InjectionToken ' + this._desc;
            }),
            t
          );
        })(),
        Qt = new Wt('INJECTOR', -1),
        Kt = {},
        Zt = /\n/gm,
        Gt = vt({ provide: String, useValue: vt }),
        $t = void 0;
      function Yt(t) {
        var e = $t;
        return ($t = t), e;
      }
      function Jt(t) {
        var e = It;
        return (It = t), e;
      }
      function Xt(t, e) {
        if ((void 0 === e && (e = yt.Default), void 0 === $t))
          throw new Error('inject() must be called from an injection context');
        return null === $t
          ? ee(t, void 0, e)
          : $t.get(t, e & yt.Optional ? null : void 0, e);
      }
      function te(t, e) {
        return void 0 === e && (e = yt.Default), (It || Xt)(Ot(t), e);
      }
      function ee(t, e, n) {
        var r = _t(t);
        if (r && 'root' == r.providedIn)
          return void 0 === r.value ? (r.value = r.factory()) : r.value;
        if (n & yt.Optional) return null;
        if (void 0 !== e) return e;
        throw new Error('Injector: NOT_FOUND [' + kt(t) + ']');
      }
      function ne(t) {
        for (var e = [], n = 0; n < t.length; n++) {
          var r = Ot(t[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error('Arguments array must have arguments.');
            for (var i = void 0, o = yt.Default, s = 0; s < r.length; s++) {
              var a = r[s];
              a instanceof pt || 'Optional' === a.ngMetadataName || a === pt
                ? (o |= yt.Optional)
                : a instanceof dt || 'SkipSelf' === a.ngMetadataName || a === dt
                ? (o |= yt.SkipSelf)
                : a instanceof ht || 'Self' === a.ngMetadataName || a === ht
                ? (o |= yt.Self)
                : (i = a instanceof ft || a === ft ? a.token : a);
            }
            e.push(te(i, o));
          } else e.push(te(r));
        }
        return e;
      }
      var re = (function () {
        function t() {}
        return (
          (t.prototype.get = function (t, e) {
            if ((void 0 === e && (e = Kt), e === Kt)) {
              var n = new Error(
                'NullInjectorError: No provider for ' + kt(t) + '!'
              );
              throw ((n.name = 'NullInjectorError'), n);
            }
            return e;
          }),
          t
        );
      })();
      var ie = (function () {
          return function () {};
        })(),
        oe = (function () {
          return function () {};
        })();
      function se(t, e) {
        t.forEach(function (t) {
          return Array.isArray(t) ? se(t, e) : e(t);
        });
      }
      function ae(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function ue(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      function le(t, e) {
        for (var n = [], r = 0; r < t; r++) n.push(e);
        return n;
      }
      function ce(t, e, n) {
        var r = pe(t, e);
        return (
          r >= 0
            ? (t[1 | r] = n)
            : (function (t, e, n, r) {
                var i = t.length;
                if (i == e) t.push(n, r);
                else if (1 === i) t.push(r, t[0]), (t[0] = n);
                else {
                  for (i--, t.push(t[i - 1], t[i]); i > e; )
                    (t[i] = t[i - 2]), i--;
                  (t[e] = n), (t[e + 1] = r);
                }
              })(t, (r = ~r), e, n),
          r
        );
      }
      function fe(t, e) {
        var n = pe(t, e);
        if (n >= 0) return t[1 | n];
      }
      function pe(t, e) {
        return (function (t, e, n) {
          for (var r = 0, i = t.length >> 1; i !== r; ) {
            var o = r + ((i - r) >> 1),
              s = t[o << 1];
            if (e === s) return o << 1;
            s > e ? (i = o) : (r = o + 1);
          }
          return ~(i << 1);
        })(t, e);
      }
      var he = (function (t) {
          return (
            (t[(t.OnPush = 0)] = 'OnPush'), (t[(t.Default = 1)] = 'Default'), t
          );
        })({}),
        de = (function (t) {
          return (
            (t[(t.Emulated = 0)] = 'Emulated'),
            (t[(t.Native = 1)] = 'Native'),
            (t[(t.None = 2)] = 'None'),
            (t[(t.ShadowDom = 3)] = 'ShadowDom'),
            t
          );
        })({});
      function ye(t) {
        return '' + { toString: t };
      }
      var ve = {},
        me = [],
        ge = 0;
      function _e(t) {
        var e = t.type,
          n = e.prototype,
          r = {},
          i = {
            type: e,
            providersResolver: null,
            decls: t.decls,
            vars: t.vars,
            factory: null,
            template: t.template || null,
            consts: t.consts || null,
            ngContentSelectors: t.ngContentSelectors,
            hostBindings: t.hostBindings || null,
            hostVars: t.hostVars || 0,
            hostAttrs: t.hostAttrs || null,
            contentQueries: t.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: t.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: t.changeDetection === he.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: t.selectors || me,
            viewQuery: t.viewQuery || null,
            features: t.features || null,
            data: t.data || {},
            encapsulation: t.encapsulation || de.Emulated,
            id: 'c',
            styles: t.styles || me,
            _: null,
            setInput: null,
            schemas: t.schemas || null,
            tView: null,
          };
        return (
          (i._ = ye(function () {
            var e = t.directives,
              n = t.features,
              o = t.pipes;
            (i.id += ge++),
              (i.inputs = Ce(t.inputs, r)),
              (i.outputs = Ce(t.outputs)),
              n &&
                n.forEach(function (t) {
                  return t(i);
                }),
              (i.directiveDefs = e
                ? function () {
                    return ('function' == typeof e ? e() : e).map(we);
                  }
                : null),
              (i.pipeDefs = o
                ? function () {
                    return ('function' == typeof o ? o() : o).map(be);
                  }
                : null);
          })),
          i
        );
      }
      function we(t) {
        return (
          xe(t) ||
          (function (t) {
            return t[Ut] || null;
          })(t)
        );
      }
      function be(t) {
        return (function (t) {
          return t[Ht] || null;
        })(t);
      }
      var Se = {};
      function Ee(t) {
        var e = {
          type: t.type,
          bootstrap: t.bootstrap || me,
          declarations: t.declarations || me,
          imports: t.imports || me,
          exports: t.exports || me,
          transitiveCompileScopes: null,
          schemas: t.schemas || null,
          id: t.id || null,
        };
        return (
          null != t.id &&
            ye(function () {
              Se[t.id] = t.type;
            }),
          e
        );
      }
      function Ce(t, e) {
        if (null == t) return ve;
        var n = {};
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var i = t[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])),
              (n[i] = r),
              e && (e[i] = o);
          }
        return n;
      }
      var Te = _e;
      function xe(t) {
        return t[Mt] || null;
      }
      function ke(t, e) {
        return t.hasOwnProperty(Bt) ? t[Bt] : null;
      }
      function Ae(t, e) {
        var n = t[Vt] || null;
        if (!n && !0 === e)
          throw new Error(
            'Type ' + kt(t) + " does not have '\u0275mod' property."
          );
        return n;
      }
      function Pe(t) {
        return Array.isArray(t) && 'object' == typeof t[1];
      }
      function Re(t) {
        return Array.isArray(t) && !0 === t[1];
      }
      function Oe(t) {
        return 0 != (8 & t.flags);
      }
      function Ie(t) {
        return 2 == (2 & t.flags);
      }
      function Ne(t) {
        return 1 == (1 & t.flags);
      }
      function je(t) {
        return null !== t.template;
      }
      function De(t) {
        return 0 != (512 & t[2]);
      }
      var Fe = {
        lFrame: Je(null),
        bindingsEnabled: !0,
        checkNoChangesMode: !1,
      };
      function Le() {
        return Fe.bindingsEnabled;
      }
      function Me() {
        return Fe.lFrame.lView;
      }
      function Ue() {
        return Fe.lFrame.tView;
      }
      function He() {
        return Fe.lFrame.previousOrParentTNode;
      }
      function Ve(t, e) {
        (Fe.lFrame.previousOrParentTNode = t), (Fe.lFrame.isParent = e);
      }
      function qe() {
        return Fe.lFrame.isParent;
      }
      function Be() {
        Fe.lFrame.isParent = !1;
      }
      function ze() {
        return Fe.checkNoChangesMode;
      }
      function We(t) {
        Fe.checkNoChangesMode = t;
      }
      function Qe(t, e) {
        var n = Fe.lFrame;
        (n.bindingIndex = n.bindingRootIndex = t),
          (n.currentDirectiveIndex = e);
      }
      function Ke() {
        return Fe.lFrame.currentQueryIndex;
      }
      function Ze(t) {
        Fe.lFrame.currentQueryIndex = t;
      }
      function Ge(t, e) {
        var n = Ye();
        (Fe.lFrame = n), (n.previousOrParentTNode = e), (n.lView = t);
      }
      function $e(t, e) {
        var n = Ye(),
          r = t[1];
        (Fe.lFrame = n),
          (n.previousOrParentTNode = e),
          (n.lView = t),
          (n.tView = r),
          (n.contextLView = t),
          (n.bindingIndex = r.bindingStartIndex);
      }
      function Ye() {
        var t = Fe.lFrame,
          e = null === t ? null : t.child;
        return null === e ? Je(t) : e;
      }
      function Je(t) {
        var e = {
          previousOrParentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: 0,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentSanitizer: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: t,
          child: null,
        };
        return null !== t && (t.child = e), e;
      }
      function Xe() {
        var t = Fe.lFrame;
        return (
          (Fe.lFrame = t.parent),
          (t.previousOrParentTNode = null),
          (t.lView = null),
          t
        );
      }
      var tn = Xe;
      function en() {
        var t = Xe();
        (t.isParent = !0),
          (t.tView = null),
          (t.selectedIndex = 0),
          (t.contextLView = null),
          (t.elementDepthCount = 0),
          (t.currentDirectiveIndex = -1),
          (t.currentNamespace = null),
          (t.currentSanitizer = null),
          (t.bindingRootIndex = -1),
          (t.bindingIndex = -1),
          (t.currentQueryIndex = 0);
      }
      function nn() {
        return Fe.lFrame.selectedIndex;
      }
      function rn(t) {
        Fe.lFrame.selectedIndex = t;
      }
      function on(t, e) {
        for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
          var i = t.data[n];
          i.afterContentInit &&
            (t.contentHooks || (t.contentHooks = [])).push(
              -n,
              i.afterContentInit
            ),
            i.afterContentChecked &&
              ((t.contentHooks || (t.contentHooks = [])).push(
                n,
                i.afterContentChecked
              ),
              (t.contentCheckHooks || (t.contentCheckHooks = [])).push(
                n,
                i.afterContentChecked
              )),
            i.afterViewInit &&
              (t.viewHooks || (t.viewHooks = [])).push(-n, i.afterViewInit),
            i.afterViewChecked &&
              ((t.viewHooks || (t.viewHooks = [])).push(n, i.afterViewChecked),
              (t.viewCheckHooks || (t.viewCheckHooks = [])).push(
                n,
                i.afterViewChecked
              )),
            null != i.onDestroy &&
              (t.destroyHooks || (t.destroyHooks = [])).push(n, i.onDestroy);
        }
      }
      function sn(t, e, n) {
        ln(t, e, 3, n);
      }
      function an(t, e, n, r) {
        (3 & t[2]) === n && ln(t, e, n, r);
      }
      function un(t, e) {
        var n = t[2];
        (3 & n) === e && ((n &= 1023), (t[2] = n += 1));
      }
      function ln(t, e, n, r) {
        for (
          var i = null != r ? r : -1,
            o = 0,
            s = void 0 !== r ? 65535 & t[18] : 0;
          s < e.length;
          s++
        )
          if ('number' == typeof e[s + 1]) {
            if (((o = e[s]), null != r && o >= r)) break;
          } else
            e[s] < 0 && (t[18] += 65536),
              (o < i || -1 == i) &&
                (cn(t, n, e, s), (t[18] = (4294901760 & t[18]) + s + 2)),
              s++;
      }
      function cn(t, e, n, r) {
        var i = n[r] < 0,
          o = n[r + 1],
          s = t[i ? -n[r] : n[r]];
        i
          ? t[2] >> 10 < t[18] >> 16 &&
            (3 & t[2]) === e &&
            ((t[2] += 1024), o.call(s))
          : o.call(s);
      }
      var fn = (function () {
          return function (t, e, n) {
            (this.factory = t),
              (this.resolving = !1),
              (this.canSeeViewProviders = e),
              (this.injectImpl = n);
          };
        })(),
        pn = void 0;
      function hn(t) {
        return !!t.listen;
      }
      var dn = {
        createRenderer: function (t, e) {
          return void 0 !== pn
            ? pn
            : 'undefined' != typeof document
            ? document
            : void 0;
        },
      };
      function yn(t, e, n) {
        for (var r = hn(t), i = 0; i < n.length; ) {
          var o = n[i];
          if ('number' == typeof o) {
            if (0 !== o) break;
            i++;
            var s = n[i++],
              a = n[i++],
              u = n[i++];
            r ? t.setAttribute(e, a, u, s) : e.setAttributeNS(s, a, u);
          } else
            (u = n[++i]),
              64 === (a = o).charCodeAt(0)
                ? r && t.setProperty(e, a, u)
                : r
                ? t.setAttribute(e, a, u)
                : e.setAttribute(a, u),
              i++;
        }
        return i;
      }
      function vn(t) {
        return 3 === t || 4 === t || 6 === t;
      }
      function mn(t, e) {
        if (null === e || 0 === e.length);
        else if (null === t || 0 === t.length) t = e.slice();
        else
          for (var n = -1, r = 0; r < e.length; r++) {
            var i = e[r];
            'number' == typeof i
              ? (n = i)
              : 0 === n ||
                gn(t, n, i, null, -1 === n || 2 === n ? e[++r] : null);
          }
        return t;
      }
      function gn(t, e, n, r, i) {
        var o = 0,
          s = t.length;
        if (-1 === e) s = -1;
        else
          for (; o < t.length; ) {
            var a = t[o++];
            if ('number' == typeof a) {
              if (a === e) {
                s = -1;
                break;
              }
              if (a > e) {
                s = o - 1;
                break;
              }
            }
          }
        for (; o < t.length; ) {
          var u = t[o];
          if ('number' == typeof u) break;
          if (u === n) {
            if (null === r) return void (null !== i && (t[o + 1] = i));
            if (r === t[o + 1]) return void (t[o + 2] = i);
          }
          o++, null !== r && o++, null !== i && o++;
        }
        -1 !== s && (t.splice(s, 0, e), (o = s + 1)),
          t.splice(o++, 0, n),
          null !== r && t.splice(o++, 0, r),
          null !== i && t.splice(o++, 0, i);
      }
      function _n(t) {
        return -1 !== t;
      }
      function wn(t) {
        return 32767 & t;
      }
      function bn(t) {
        return t >> 16;
      }
      function Sn(t, e) {
        for (var n = bn(t), r = e; n > 0; ) (r = r[15]), n--;
        return r;
      }
      function En(t) {
        return 'string' == typeof t ? t : null == t ? '' : '' + t;
      }
      function Cn(t) {
        return 'function' == typeof t
          ? t.name || t.toString()
          : 'object' == typeof t && null != t && 'function' == typeof t.type
          ? t.type.name || t.type.toString()
          : En(t);
      }
      var Tn = (function () {
        return (
          ('undefined' != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Lt);
      })();
      function xn(t) {
        return { name: 'window', target: t.ownerDocument.defaultView };
      }
      function kn(t) {
        return t instanceof Function ? t() : t;
      }
      var An = !0;
      function Pn(t) {
        var e = An;
        return (An = t), e;
      }
      var Rn = 0;
      function On(t, e) {
        var n = Nn(t, e);
        if (-1 !== n) return n;
        var r = e[1];
        r.firstCreatePass &&
          ((t.injectorIndex = e.length),
          In(r.data, t),
          In(e, null),
          In(r.blueprint, null));
        var i = jn(t, e),
          o = t.injectorIndex;
        if (_n(i))
          for (var s = wn(i), a = Sn(i, e), u = a[1].data, l = 0; l < 8; l++)
            e[o + l] = a[s + l] | u[s + l];
        return (e[o + 8] = i), o;
      }
      function In(t, e) {
        t.push(0, 0, 0, 0, 0, 0, 0, 0, e);
      }
      function Nn(t, e) {
        return -1 === t.injectorIndex ||
          (t.parent && t.parent.injectorIndex === t.injectorIndex) ||
          null == e[t.injectorIndex + 8]
          ? -1
          : t.injectorIndex;
      }
      function jn(t, e) {
        if (t.parent && -1 !== t.parent.injectorIndex)
          return t.parent.injectorIndex;
        for (var n = e[6], r = 1; n && -1 === n.injectorIndex; )
          (n = (e = e[15]) ? e[6] : null), r++;
        return n ? n.injectorIndex | (r << 16) : -1;
      }
      function Dn(t, e, n) {
        !(function (t, e, n) {
          var r = 'string' != typeof n ? n[zt] : n.charCodeAt(0) || 0;
          null == r && (r = n[zt] = Rn++);
          var i = 255 & r,
            o = 1 << i,
            s = 64 & i,
            a = 32 & i,
            u = e.data;
          128 & i
            ? s
              ? a
                ? (u[t + 7] |= o)
                : (u[t + 6] |= o)
              : a
              ? (u[t + 5] |= o)
              : (u[t + 4] |= o)
            : s
            ? a
              ? (u[t + 3] |= o)
              : (u[t + 2] |= o)
            : a
            ? (u[t + 1] |= o)
            : (u[t] |= o);
        })(t, e, n);
      }
      function Fn(t, e, n, r, i) {
        if ((void 0 === r && (r = yt.Default), null !== t)) {
          var o = (function (t) {
            if ('string' == typeof t) return t.charCodeAt(0) || 0;
            var e = t[zt];
            return 'number' == typeof e && e > 0 ? 255 & e : e;
          })(n);
          if ('function' == typeof o) {
            Ge(e, t);
            try {
              var s = o();
              if (null != s || r & yt.Optional) return s;
              throw new Error('No provider for ' + Cn(n) + '!');
            } finally {
              tn();
            }
          } else if ('number' == typeof o) {
            if (-1 === o) return new Bn(t, e);
            var a = null,
              u = Nn(t, e),
              l = -1,
              c = r & yt.Host ? e[16][6] : null;
            for (
              (-1 === u || r & yt.SkipSelf) &&
              ((l = -1 === u ? jn(t, e) : e[u + 8]),
              qn(r, !1) ? ((a = e[1]), (u = wn(l)), (e = Sn(l, e))) : (u = -1));
              -1 !== u;

            ) {
              l = e[u + 8];
              var f = e[1];
              if (Vn(o, u, f.data)) {
                var p = Mn(u, e, n, a, r, c);
                if (p !== Ln) return p;
              }
              qn(r, e[1].data[u + 8] === c) && Vn(o, u, e)
                ? ((a = f), (u = wn(l)), (e = Sn(l, e)))
                : (u = -1);
            }
          }
        }
        if (
          (r & yt.Optional && void 0 === i && (i = null),
          0 == (r & (yt.Self | yt.Host)))
        ) {
          var h = e[9],
            d = Jt(void 0);
          try {
            return h ? h.get(n, i, r & yt.Optional) : ee(n, i, r & yt.Optional);
          } finally {
            Jt(d);
          }
        }
        if (r & yt.Optional) return i;
        throw new Error('NodeInjector: NOT_FOUND [' + Cn(n) + ']');
      }
      var Ln = {};
      function Mn(t, e, n, r, i, o) {
        var s = e[1],
          a = s.data[t + 8],
          u = Un(
            a,
            s,
            n,
            null == r ? Ie(a) && An : r != s && 3 === a.type,
            i & yt.Host && o === a
          );
        return null !== u ? Hn(e, s, u, a) : Ln;
      }
      function Un(t, e, n, r, i) {
        for (
          var o = t.providerIndexes,
            s = e.data,
            a = 65535 & o,
            u = t.directiveStart,
            l = o >> 16,
            c = i ? a + l : t.directiveEnd,
            f = r ? a : a + l;
          f < c;
          f++
        ) {
          var p = s[f];
          if ((f < u && n === p) || (f >= u && p.type === n)) return f;
        }
        if (i) {
          var h = s[u];
          if (h && je(h) && h.type === n) return u;
        }
        return null;
      }
      function Hn(t, e, n, r) {
        var i = t[n],
          o = e.data;
        if (i instanceof fn) {
          var s = i;
          if (s.resolving) throw new Error('Circular dep for ' + Cn(o[n]));
          var a = Pn(s.canSeeViewProviders);
          s.resolving = !0;
          var u = void 0;
          s.injectImpl && (u = Jt(s.injectImpl)), Ge(t, r);
          try {
            (i = t[n] = s.factory(void 0, o, t, r)),
              e.firstCreatePass &&
                n >= r.directiveStart &&
                (function (t, e, n) {
                  var r = e.onChanges,
                    i = e.onInit,
                    o = e.doCheck;
                  r &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      t,
                      r
                    )),
                    i &&
                      (n.preOrderHooks || (n.preOrderHooks = [])).push(-t, i),
                    o &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, o),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(t, o));
                })(n, o[n], e);
          } finally {
            s.injectImpl && Jt(u), Pn(a), (s.resolving = !1), tn();
          }
        }
        return i;
      }
      function Vn(t, e, n) {
        var r = 64 & t,
          i = 32 & t;
        return !!(
          (128 & t
            ? r
              ? i
                ? n[e + 7]
                : n[e + 6]
              : i
              ? n[e + 5]
              : n[e + 4]
            : r
            ? i
              ? n[e + 3]
              : n[e + 2]
            : i
            ? n[e + 1]
            : n[e]) &
          (1 << t)
        );
      }
      function qn(t, e) {
        return !(t & yt.Self || (t & yt.Host && e));
      }
      var Bn = (function () {
        function t(t, e) {
          (this._tNode = t), (this._lView = e);
        }
        return (
          (t.prototype.get = function (t, e) {
            return Fn(this._tNode, this._lView, t, void 0, e);
          }),
          t
        );
      })();
      function zn(t) {
        return t.ngDebugContext;
      }
      function Wn(t) {
        return t.ngOriginalError;
      }
      function Qn(t) {
        for (var e = [], n = 1; n < arguments.length; n++)
          e[n - 1] = arguments[n];
        t.error.apply(t, u(e));
      }
      var Kn = (function () {
          function t() {
            this._console = console;
          }
          return (
            (t.prototype.handleError = function (t) {
              var e = this._findOriginalError(t),
                n = this._findContext(t),
                r = (function (t) {
                  return t.ngErrorLogger || Qn;
                })(t);
              r(this._console, 'ERROR', t),
                e && r(this._console, 'ORIGINAL ERROR', e),
                n && r(this._console, 'ERROR CONTEXT', n);
            }),
            (t.prototype._findContext = function (t) {
              return t ? (zn(t) ? zn(t) : this._findContext(Wn(t))) : null;
            }),
            (t.prototype._findOriginalError = function (t) {
              for (var e = Wn(t); e && Wn(e); ) e = Wn(e);
              return e;
            }),
            t
          );
        })(),
        Zn = (function () {
          function t(t) {
            this.changingThisBreaksApplicationSecurity = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                'SafeValue must use [property]=binding: ' +
                this.changingThisBreaksApplicationSecurity +
                ' (see http://g.co/ng/security#xss)'
              );
            }),
            t
          );
        })(),
        Gn = !0,
        $n = !1;
      function Yn() {
        return ($n = !0), Gn;
      }
      function Jn(t) {
        for (; Array.isArray(t); ) t = t[0];
        return t;
      }
      function Xn(t, e) {
        return Jn(e[t + 19]);
      }
      function tr(t, e) {
        return Jn(e[t.index]);
      }
      function er(t, e) {
        return t.data[e + 19];
      }
      function nr(t, e) {
        var n = e[t];
        return Pe(n) ? n : n[0];
      }
      function rr(t) {
        var e = (function (t) {
          return t.__ngContext__ || null;
        })(t);
        return e ? (Array.isArray(e) ? e : e.lView) : null;
      }
      function ir(t) {
        return 4 == (4 & t[2]);
      }
      function or(t) {
        return 128 == (128 & t[2]);
      }
      function sr(t, e) {
        return null === t || null == e ? null : t[e];
      }
      function ar(t) {
        t[18] = 0;
      }
      function ur(t, e) {
        t.__ngContext__ = e;
      }
      function lr(t) {
        throw new Error(
          'Multiple components match node with tagname ' + t.tagName
        );
      }
      function cr() {
        throw new Error('Cannot mix multi providers and regular providers');
      }
      function fr(t, e, n) {
        for (var r = t.length; ; ) {
          var i = t.indexOf(e, n);
          if (-1 === i) return i;
          if (0 === i || t.charCodeAt(i - 1) <= 32) {
            var o = e.length;
            if (i + o === r || t.charCodeAt(i + o) <= 32) return i;
          }
          n = i + 1;
        }
      }
      function pr(t, e, n) {
        for (var r = 0; r < t.length; ) {
          var i = t[r++];
          if (n && 'class' === i) {
            if (-1 !== fr((i = t[r]).toLowerCase(), e, 0)) return !0;
          } else if (1 === i) {
            for (; r < t.length && 'string' == typeof (i = t[r++]); )
              if (i.toLowerCase() === e) return !0;
            return !1;
          }
        }
        return !1;
      }
      function hr(t, e, n) {
        return e === (0 !== t.type || n ? t.tagName : 'ng-template');
      }
      function dr(t, e, n) {
        for (
          var r = 4,
            i = t.attrs || [],
            o = (function (t) {
              for (var e = 0; e < t.length; e++) if (vn(t[e])) return e;
              return t.length;
            })(i),
            s = !1,
            a = 0;
          a < e.length;
          a++
        ) {
          var u = e[a];
          if ('number' != typeof u) {
            if (!s)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ('' !== u && !hr(t, u, n)) || ('' === u && 1 === e.length))
                ) {
                  if (yr(r)) return !1;
                  s = !0;
                }
              } else {
                var l = 8 & r ? u : e[++a];
                if (8 & r && null !== t.attrs) {
                  if (!pr(t.attrs, l, n)) {
                    if (yr(r)) return !1;
                    s = !0;
                  }
                  continue;
                }
                var c = vr(
                  8 & r ? 'class' : u,
                  i,
                  0 == t.type && 'ng-template' !== t.tagName,
                  n
                );
                if (-1 === c) {
                  if (yr(r)) return !1;
                  s = !0;
                  continue;
                }
                if ('' !== l) {
                  var f;
                  f = c > o ? '' : i[c + 1].toLowerCase();
                  var p = 8 & r ? f : null;
                  if ((p && -1 !== fr(p, l, 0)) || (2 & r && l !== f)) {
                    if (yr(r)) return !1;
                    s = !0;
                  }
                }
              }
          } else {
            if (!s && !yr(r) && !yr(u)) return !1;
            if (s && yr(u)) continue;
            (s = !1), (r = u | (1 & r));
          }
        }
        return yr(r) || s;
      }
      function yr(t) {
        return 0 == (1 & t);
      }
      function vr(t, e, n, r) {
        if (null === e) return -1;
        var i = 0;
        if (r || !n) {
          for (var o = !1; i < e.length; ) {
            var s = e[i];
            if (s === t) return i;
            if (3 === s || 6 === s) o = !0;
            else {
              if (1 === s || 2 === s) {
                for (var a = e[++i]; 'string' == typeof a; ) a = e[++i];
                continue;
              }
              if (4 === s) break;
              if (0 === s) {
                i += 4;
                continue;
              }
            }
            i += o ? 1 : 2;
          }
          return -1;
        }
        return (function (t, e) {
          var n = t.indexOf(4);
          if (n > -1)
            for (n++; n < t.length; ) {
              if (t[n] === e) return n;
              n++;
            }
          return -1;
        })(e, t);
      }
      function mr(t, e, n) {
        void 0 === n && (n = !1);
        for (var r = 0; r < e.length; r++) if (dr(t, e[r], n)) return !0;
        return !1;
      }
      function gr(t, e) {
        return t ? ':not(' + e.trim() + ')' : e;
      }
      function _r(t) {
        for (var e = t[0], n = 1, r = 2, i = '', o = !1; n < t.length; ) {
          var s = t[n];
          if ('string' == typeof s)
            if (2 & r) {
              var a = t[++n];
              i += '[' + s + (a.length > 0 ? '="' + a + '"' : '') + ']';
            } else 8 & r ? (i += '.' + s) : 4 & r && (i += ' ' + s);
          else
            '' === i || yr(s) || ((e += gr(o, i)), (i = '')),
              (r = s),
              (o = o || !yr(r));
          n++;
        }
        return '' !== i && (e += gr(o, i)), e;
      }
      var wr = {};
      function br(t) {
        var e = t[3];
        return Re(e) ? e[3] : e;
      }
      function Sr(t, e) {
        return (t << 17) | (e << 2);
      }
      function Er(t) {
        return (t >> 17) & 32767;
      }
      function Cr(t) {
        return 2 | t;
      }
      function Tr(t) {
        return (131068 & t) >> 2;
      }
      function xr(t, e) {
        return (-131069 & t) | (e << 2);
      }
      function kr(t) {
        return 1 | t;
      }
      function Ar(t, e) {
        var n = t.contentQueries;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r + 1];
            if (-1 !== i) {
              var o = t.data[i];
              Ze(n[r]), o.contentQueries(2, e[i], i);
            }
          }
      }
      function Pr(t, e, n) {
        return hn(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Rr(t, e, n, r, i, o, s, a, u, l) {
        var c = e.blueprint.slice();
        return (
          (c[0] = i),
          (c[2] = 140 | r),
          ar(c),
          (c[3] = c[15] = t),
          (c[8] = n),
          (c[10] = s || (t && t[10])),
          (c[11] = a || (t && t[11])),
          (c[12] = u || (t && t[12]) || null),
          (c[9] = l || (t && t[9]) || null),
          (c[6] = o),
          (c[16] = 2 == e.type ? t[16] : c),
          c
        );
      }
      function Or(t, e, n, r, i, o) {
        var s = n + 19,
          a =
            t.data[s] ||
            (function (t, e, n, r, i, o) {
              var s = He(),
                a = qe(),
                u = a ? s : s && s.parent,
                l = (t.data[n] = Mr(0, u && u !== e ? u : null, r, n, i, o));
              return (
                null === t.firstChild && (t.firstChild = l),
                s &&
                  (!a || null != s.child || (null === l.parent && 2 !== s.type)
                    ? a || (s.next = l)
                    : (s.child = l)),
                l
              );
            })(t, e, s, r, i, o);
        return Ve(a, !0), a;
      }
      function Ir(t, e, n) {
        $e(e, e[6]);
        try {
          var r = t.viewQuery;
          null !== r && ii(1, r, n);
          var i = t.template;
          null !== i && Dr(t, e, i, 1, n),
            t.firstCreatePass && (t.firstCreatePass = !1),
            t.staticContentQueries && Ar(t, e),
            t.staticViewQueries && ii(2, t.viewQuery, n);
          var o = t.components;
          null !== o &&
            (function (t, e) {
              for (var n = 0; n < e.length; n++) Xr(t, e[n]);
            })(e, o);
        } finally {
          (e[2] &= -5), en();
        }
      }
      function Nr(t, e, n, r) {
        var i = e[2];
        if (256 != (256 & i)) {
          $e(e, e[6]);
          var o = ze();
          try {
            ar(e),
              (Fe.lFrame.bindingIndex = t.bindingStartIndex),
              null !== n && Dr(t, e, n, 2, r);
            var s = 3 == (3 & i);
            if (!o)
              if (s) {
                var a = t.preOrderCheckHooks;
                null !== a && sn(e, a, null);
              } else {
                var u = t.preOrderHooks;
                null !== u && an(e, u, 0, null), un(e, 0);
              }
            if (
              ((function (t) {
                for (var e = t[13]; null !== e; ) {
                  var n = void 0;
                  if (Re(e) && (n = e[2]) >> 1 == -1) {
                    for (var r = 9; r < e.length; r++) {
                      var i = e[r],
                        o = i[1];
                      or(i) && Nr(o, i, o.template, i[8]);
                    }
                    0 != (1 & n) && Yr(e, t[16]);
                  }
                  e = e[4];
                }
              })(e),
              null !== t.contentQueries && Ar(t, e),
              !o)
            )
              if (s) {
                var l = t.contentCheckHooks;
                null !== l && sn(e, l);
              } else {
                var c = t.contentHooks;
                null !== c && an(e, c, 1), un(e, 1);
              }
            !(function (t, e) {
              try {
                var n = t.expandoInstructions;
                if (null !== n)
                  for (
                    var r = t.expandoStartIndex, i = -1, o = 0;
                    o < n.length;
                    o++
                  ) {
                    var s = n[o];
                    'number' == typeof s
                      ? s <= 0
                        ? (rn(0 - s), (i = r += 9 + n[++o]))
                        : (r += s)
                      : (null !== s && (Qe(r, i), s(2, e[i])), i++);
                  }
              } finally {
                rn(-1);
              }
            })(t, e);
            var f = t.components;
            null !== f &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) Jr(t, e[n]);
              })(e, f);
            var p = t.viewQuery;
            if ((null !== p && ii(2, p, r), !o))
              if (s) {
                var h = t.viewCheckHooks;
                null !== h && sn(e, h);
              } else {
                var d = t.viewHooks;
                null !== d && an(e, d, 2), un(e, 2);
              }
            !0 === t.firstUpdatePass && (t.firstUpdatePass = !1),
              o || (e[2] &= -73);
          } finally {
            en();
          }
        }
      }
      function jr(t, e, n, r) {
        var i = e[10],
          o = !ze(),
          s = ir(e);
        try {
          o && !s && i.begin && i.begin(), s && Ir(t, e, r), Nr(t, e, n, r);
        } finally {
          o && !s && i.end && i.end();
        }
      }
      function Dr(t, e, n, r, i) {
        var o = nn();
        try {
          rn(-1),
            2 & r &&
              e.length > 19 &&
              (function (t, e, n, r) {
                if (!r)
                  if (3 == (3 & e[2])) {
                    var i = t.preOrderCheckHooks;
                    null !== i && sn(e, i, 0);
                  } else {
                    var o = t.preOrderHooks;
                    null !== o && an(e, o, 0, 0);
                  }
                rn(0);
              })(t, e, 0, ze()),
            n(r, i);
        } finally {
          rn(o);
        }
      }
      function Fr(t) {
        return (
          t.tView ||
          (t.tView = Lr(
            1,
            -1,
            t.template,
            t.decls,
            t.vars,
            t.directiveDefs,
            t.pipeDefs,
            t.viewQuery,
            t.schemas,
            t.consts
          ))
        );
      }
      function Lr(t, e, n, r, i, o, s, a, u, l) {
        var c = 19 + r,
          f = c + i,
          p = (function (t, e) {
            for (var n = [], r = 0; r < e; r++) n.push(r < t ? null : wr);
            return n;
          })(c, f);
        return (p[1] = {
          type: t,
          id: e,
          blueprint: p,
          template: n,
          queries: null,
          viewQuery: a,
          node: null,
          data: p.slice().fill(null, c),
          bindingStartIndex: c,
          expandoStartIndex: f,
          expandoInstructions: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: 'function' == typeof o ? o() : o,
          pipeRegistry: 'function' == typeof s ? s() : s,
          firstChild: null,
          schemas: u,
          consts: l,
        });
      }
      function Mr(t, e, n, r, i, o) {
        return {
          type: n,
          index: r,
          injectorIndex: e ? e.injectorIndex : -1,
          directiveStart: -1,
          directiveEnd: -1,
          directiveStylingLast: -1,
          propertyBindings: null,
          flags: 0,
          providerIndexes: 0,
          tagName: i,
          attrs: o,
          mergedAttrs: null,
          localNames: null,
          initialInputs: void 0,
          inputs: null,
          outputs: null,
          tViews: null,
          next: null,
          projectionNext: null,
          child: null,
          parent: e,
          projection: null,
          styles: null,
          residualStyles: void 0,
          classes: null,
          residualClasses: void 0,
          classBindings: 0,
          styleBindings: 0,
        };
      }
      function Ur(t, e, n) {
        for (var r in t)
          if (t.hasOwnProperty(r)) {
            var i = t[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(e, i)
              : (n[r] = [e, i]);
          }
        return n;
      }
      function Hr(t, e) {
        var n = t.expandoInstructions;
        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars);
      }
      function Vr(t, e, n) {
        for (var r = 0; r < n; r++)
          e.push(wr), t.blueprint.push(wr), t.data.push(null);
      }
      function qr(t, e) {
        null !== t.hostBindings && t.hostBindings(1, e);
      }
      function Br(t, e, n) {
        var r = 19 - e.index,
          i = t.data.length - (65535 & e.providerIndexes);
        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, i, n);
      }
      function zr(t, e) {
        (e.flags |= 2), (t.components || (t.components = [])).push(e.index);
      }
      function Wr(t, e, n) {
        if (n) {
          if (e.exportAs)
            for (var r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
          je(e) && (n[''] = t);
        }
      }
      function Qr(t, e, n) {
        (t.flags |= 1),
          (t.directiveStart = e),
          (t.directiveEnd = e + n),
          (t.providerIndexes = e);
      }
      function Kr(t, e, n) {
        t.data.push(n);
        var r = n.factory || (n.factory = ke(n.type)),
          i = new fn(r, je(n), null);
        t.blueprint.push(i), e.push(i);
      }
      function Zr(t, e, n) {
        var r = tr(e, t),
          i = Fr(n),
          o = t[10],
          s = ti(
            t,
            Rr(t, i, null, n.onPush ? 64 : 16, r, e, o, o.createRenderer(r, n))
          );
        t[e.index] = s;
      }
      function Gr(t, e, n, r, i, o) {
        var s = o[e];
        if (null !== s)
          for (var a = r.setInput, u = 0; u < s.length; ) {
            var l = s[u++],
              c = s[u++],
              f = s[u++];
            null !== a ? r.setInput(n, f, l, c) : (n[c] = f);
          }
      }
      function $r(t, e) {
        for (var n = null, r = 0; r < e.length; ) {
          var i = e[r];
          if (0 !== i)
            if (5 !== i) {
              if ('number' == typeof i) break;
              t.hasOwnProperty(i) &&
                (null === n && (n = []), n.push(i, t[i], e[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function Yr(t, e) {
        for (var n = t[5], r = 0; r < n.length; r++) {
          var i = n[r],
            o = i[3][3][16];
          if (o !== e && 0 == (16 & o[2])) {
            var s = i[1];
            Nr(s, i, s.template, i[8]);
          }
        }
      }
      function Jr(t, e) {
        var n = nr(e, t);
        if (or(n) && 80 & n[2]) {
          var r = n[1];
          Nr(r, n, r.template, n[8]);
        }
      }
      function Xr(t, e) {
        var n = nr(e, t),
          r = n[1];
        !(function (t, e) {
          for (var n = e.length; n < t.blueprint.length; n++)
            e.push(t.blueprint[n]);
        })(r, n),
          Ir(r, n, n[8]);
      }
      function ti(t, e) {
        return t[13] ? (t[14][4] = e) : (t[13] = e), (t[14] = e), e;
      }
      function ei(t) {
        for (; t; ) {
          t[2] |= 64;
          var e = br(t);
          if (De(t) && !e) return t;
          t = e;
        }
        return null;
      }
      function ni(t, e, n) {
        var r = e[10];
        r.begin && r.begin();
        try {
          Nr(t, e, t.template, n);
        } catch (i) {
          throw (ui(e, i), i);
        } finally {
          r.end && r.end();
        }
      }
      function ri(t) {
        !(function (t) {
          for (var e = 0; e < t.components.length; e++) {
            var n = t.components[e],
              r = rr(n),
              i = r[1];
            jr(i, r, i.template, n);
          }
        })(t[8]);
      }
      function ii(t, e, n) {
        Ze(0), e(t, n);
      }
      var oi = (function () {
        return Promise.resolve(null);
      })();
      function si(t) {
        return t[7] || (t[7] = []);
      }
      function ai(t) {
        return t.cleanup || (t.cleanup = []);
      }
      function ui(t, e) {
        var n = t[9],
          r = n ? n.get(Kn, null) : null;
        r && r.handleError(e);
      }
      function li(t, e) {
        var n = e[3];
        return -1 === t.index ? (Re(n) ? n : null) : n;
      }
      function ci(t, e) {
        var n = li(t, e);
        return n ? Si(e[11], n[7]) : null;
      }
      function fi(t, e, n, r, i) {
        if (null != r) {
          var o = void 0,
            s = !1;
          Re(r) ? (o = r) : Pe(r) && ((s = !0), (r = r[0]));
          var a = Jn(r);
          0 === t && null !== n
            ? null == i
              ? wi(e, n, a)
              : _i(e, n, a, i || null)
            : 1 === t && null !== n
            ? _i(e, n, a, i || null)
            : 2 === t
            ? (function (t, e, n) {
                var r = Si(t, e);
                r &&
                  (function (t, e, n, r) {
                    hn(t) ? t.removeChild(e, n, r) : e.removeChild(n);
                  })(t, r, e, n);
              })(e, a, s)
            : 3 === t && e.destroyNode(a),
            null != o &&
              (function (t, e, n, r, i) {
                var o = n[7];
                o !== Jn(n) && fi(e, t, r, o, i);
                for (var s = 9; s < n.length; s++) {
                  var a = n[s];
                  ki(a[1], a, t, e, r, o);
                }
              })(e, t, o, n, i);
        }
      }
      function pi(t, e, n, r) {
        var i = ci(t.node, e);
        i && ki(t, e, e[11], n ? 1 : 2, i, r);
      }
      function hi(t, e) {
        var n = t[5],
          r = n.indexOf(e);
        n.splice(r, 1);
      }
      function di(t, e) {
        if (!(t.length <= 9)) {
          var n = 9 + e,
            r = t[n];
          if (r) {
            var i = r[17];
            null !== i && i !== t && hi(i, r), e > 0 && (t[n - 1][4] = r[4]);
            var o = ue(t, 9 + e);
            pi(r[1], r, !1, null);
            var s = o[5];
            null !== s && s.detachView(o[1]),
              (r[3] = null),
              (r[4] = null),
              (r[2] &= -129);
          }
          return r;
        }
      }
      function yi(t, e) {
        if (!(256 & e[2])) {
          var n = e[11];
          hn(n) && n.destroyNode && ki(t, e, n, 3, null, null),
            (function (t) {
              var e = t[13];
              if (!e) return mi(t[1], t);
              for (; e; ) {
                var n = null;
                if (Pe(e)) n = e[13];
                else {
                  var r = e[9];
                  r && (n = r);
                }
                if (!n) {
                  for (; e && !e[4] && e !== t; )
                    Pe(e) && mi(e[1], e), (e = vi(e, t));
                  null === e && (e = t), Pe(e) && mi(e[1], e), (n = e && e[4]);
                }
                e = n;
              }
            })(e);
        }
      }
      function vi(t, e) {
        var n;
        return Pe(t) && (n = t[6]) && 2 === n.type
          ? li(n, t)
          : t[3] === e
          ? null
          : t[3];
      }
      function mi(t, e) {
        if (!(256 & e[2])) {
          (e[2] &= -129),
            (e[2] |= 256),
            (function (t, e) {
              var n;
              if (null != t && null != (n = t.destroyHooks))
                for (var r = 0; r < n.length; r += 2) {
                  var i = e[n[r]];
                  i instanceof fn || n[r + 1].call(i);
                }
            })(t, e),
            (function (t, e) {
              var n = t.cleanup;
              if (null !== n) {
                for (var r = e[7], i = 0; i < n.length - 1; i += 2)
                  if ('string' == typeof n[i]) {
                    var o = n[i + 1],
                      s = 'function' == typeof o ? o(e) : Jn(e[o]),
                      a = n[i + 3];
                    'boolean' == typeof a
                      ? s.removeEventListener(n[i], r[n[i + 2]], a)
                      : a >= 0
                      ? r[a]()
                      : r[-a].unsubscribe(),
                      (i += 2);
                  } else n[i].call(r[n[i + 1]]);
                e[7] = null;
              }
            })(t, e);
          var n = e[6];
          n && 3 === n.type && hn(e[11]) && e[11].destroy();
          var r = e[17];
          if (null !== r && Re(e[3])) {
            r !== e[3] && hi(r, e);
            var i = e[5];
            null !== i && i.detachView(t);
          }
        }
      }
      function gi(t, e, n) {
        for (var r = e.parent; null != r && (4 === r.type || 5 === r.type); )
          r = (e = r).parent;
        if (null == r) {
          var i = n[6];
          return 2 === i.type ? ci(i, n) : n[0];
        }
        if (e && 5 === e.type && 4 & e.flags) return tr(e, n).parentNode;
        if (2 & r.flags) {
          var o = t.data,
            s = o[o[r.index].directiveStart].encapsulation;
          if (s !== de.ShadowDom && s !== de.Native) return null;
        }
        return tr(r, n);
      }
      function _i(t, e, n, r) {
        hn(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0);
      }
      function wi(t, e, n) {
        hn(t) ? t.appendChild(e, n) : e.appendChild(n);
      }
      function bi(t, e, n, r) {
        null !== r ? _i(t, e, n, r) : wi(t, e, n);
      }
      function Si(t, e) {
        return hn(t) ? t.parentNode(e) : e.parentNode;
      }
      function Ei(t, e) {
        if (2 === t.type) {
          var n = li(t, e);
          return null === n ? null : Ti(n.indexOf(e, 9) - 9, n);
        }
        return 4 === t.type || 5 === t.type ? tr(t, e) : null;
      }
      function Ci(t, e, n, r) {
        var i = gi(t, r, e);
        if (null != i) {
          var o = e[11],
            s = Ei(r.parent || e[6], e);
          if (Array.isArray(n))
            for (var a = 0; a < n.length; a++) bi(o, i, n[a], s);
          else bi(o, i, n, s);
        }
      }
      function Ti(t, e) {
        var n = 9 + t + 1;
        if (n < e.length) {
          var r = e[n],
            i = r[1].firstChild;
          if (null !== i)
            return (function t(e, n) {
              if (null !== n) {
                var r = n.type;
                if (3 === r) return tr(n, e);
                if (0 === r) return Ti(-1, e[n.index]);
                if (4 === r || 5 === r) {
                  var i = n.child;
                  if (null !== i) return t(e, i);
                  var o = e[n.index];
                  return Re(o) ? Ti(-1, o) : Jn(o);
                }
                var s = e[16],
                  a = s[6],
                  u = br(s),
                  l = a.projection[n.projection];
                return null != l ? t(u, l) : t(e, n.next);
              }
              return null;
            })(r, i);
        }
        return e[7];
      }
      function xi(t, e, n, r, i, o, s) {
        for (; null != n; ) {
          var a = r[n.index],
            u = n.type;
          s && 0 === e && (a && ur(Jn(a), r), (n.flags |= 4)),
            64 != (64 & n.flags) &&
              (4 === u || 5 === u
                ? (xi(t, e, n.child, r, i, o, !1), fi(e, t, i, a, o))
                : 1 === u
                ? Ai(t, e, r, n, i, o)
                : fi(e, t, i, a, o)),
            (n = s ? n.projectionNext : n.next);
        }
      }
      function ki(t, e, n, r, i, o) {
        xi(n, r, t.node.child, e, i, o, !1);
      }
      function Ai(t, e, n, r, i, o) {
        var s = n[16],
          a = s[6].projection[r.projection];
        if (Array.isArray(a))
          for (var u = 0; u < a.length; u++) fi(e, t, i, a[u], o);
        else xi(t, e, a, s[3], i, o, !0);
      }
      function Pi(t, e, n) {
        hn(t) ? t.setAttribute(e, 'style', n) : (e.style.cssText = n);
      }
      function Ri(t, e, n) {
        hn(t)
          ? '' === n
            ? t.removeAttribute(e, 'class')
            : t.setAttribute(e, 'class', n)
          : (e.className = n);
      }
      var Oi,
        Ii,
        Ni,
        ji = (function () {
          function t(t, e) {
            (this._lView = t),
              (this._cdRefInjectingView = e),
              (this._appRef = null),
              (this._viewContainerRef = null),
              (this._tViewNode = null);
          }
          return (
            Object.defineProperty(t.prototype, 'rootNodes', {
              get: function () {
                var t = this._lView;
                return null == t[0]
                  ? (function t(e, n, r, i, o) {
                      for (void 0 === o && (o = !1); null !== r; ) {
                        var s = n[r.index];
                        if ((null !== s && i.push(Jn(s)), Re(s)))
                          for (var a = 9; a < s.length; a++) {
                            var u = s[a],
                              l = u[1].firstChild;
                            null !== l && t(u[1], u, l, i);
                          }
                        var c = r.type;
                        if (4 === c || 5 === c) t(e, n, r.child, i);
                        else if (1 === c) {
                          var f = n[16],
                            p = f[6],
                            h = br(f),
                            d = p.projection[r.projection];
                          null !== d && null !== h && t(h[1], h, d, i, !0);
                        }
                        r = o ? r.projectionNext : r.next;
                      }
                      return i;
                    })(t[1], t, t[6].child, [])
                  : [];
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'context', {
              get: function () {
                return this._lView[8];
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'destroyed', {
              get: function () {
                return 256 == (256 & this._lView[2]);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function () {
              if (this._appRef) this._appRef.detachView(this);
              else if (this._viewContainerRef) {
                var t = this._viewContainerRef.indexOf(this);
                t > -1 && this._viewContainerRef.detach(t),
                  (this._viewContainerRef = null);
              }
              yi(this._lView[1], this._lView);
            }),
            (t.prototype.onDestroy = function (t) {
              var e, n, r;
              (e = this._lView[1]),
                (r = t),
                si((n = this._lView)).push(r),
                e.firstCreatePass && ai(e).push(n[7].length - 1, null);
            }),
            (t.prototype.markForCheck = function () {
              ei(this._cdRefInjectingView || this._lView);
            }),
            (t.prototype.detach = function () {
              this._lView[2] &= -129;
            }),
            (t.prototype.reattach = function () {
              this._lView[2] |= 128;
            }),
            (t.prototype.detectChanges = function () {
              ni(this._lView[1], this._lView, this.context);
            }),
            (t.prototype.checkNoChanges = function () {
              !(function (t, e, n) {
                We(!0);
                try {
                  ni(t, e, n);
                } finally {
                  We(!1);
                }
              })(this._lView[1], this._lView, this.context);
            }),
            (t.prototype.attachToViewContainerRef = function (t) {
              if (this._appRef)
                throw new Error(
                  'This view is already attached directly to the ApplicationRef!'
                );
              this._viewContainerRef = t;
            }),
            (t.prototype.detachFromAppRef = function () {
              var t;
              (this._appRef = null),
                ki(this._lView[1], (t = this._lView), t[11], 2, null, null);
            }),
            (t.prototype.attachToAppRef = function (t) {
              if (this._viewContainerRef)
                throw new Error(
                  'This view is already attached to a ViewContainer!'
                );
              this._appRef = t;
            }),
            t
          );
        })(),
        Di = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n._view = e), n;
          }
          return (
            i(e, t),
            (e.prototype.detectChanges = function () {
              ri(this._view);
            }),
            (e.prototype.checkNoChanges = function () {
              !(function (t) {
                We(!0);
                try {
                  ri(t);
                } finally {
                  We(!1);
                }
              })(this._view);
            }),
            Object.defineProperty(e.prototype, 'context', {
              get: function () {
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            e
          );
        })(ji);
      function Fi(t, e, n) {
        return (
          Oi ||
            (Oi = (function (t) {
              function e() {
                return (null !== t && t.apply(this, arguments)) || this;
              }
              return i(e, t), e;
            })(t)),
          new Oi(tr(e, n))
        );
      }
      function Li(t, e, n, r) {
        return (
          Ii ||
            (Ii = (function (t) {
              function e(e, n, r) {
                var i = t.call(this) || this;
                return (
                  (i._declarationView = e),
                  (i._declarationTContainer = n),
                  (i.elementRef = r),
                  i
                );
              }
              return (
                i(e, t),
                (e.prototype.createEmbeddedView = function (t) {
                  var e = this._declarationTContainer.tViews,
                    n = Rr(this._declarationView, e, t, 16, null, e.node);
                  n[17] =
                    this._declarationView[this._declarationTContainer.index];
                  var r = this._declarationView[5];
                  null !== r && (n[5] = r.createEmbeddedView(e)), Ir(e, n, t);
                  var i = new ji(n);
                  return (i._tViewNode = n[6]), i;
                }),
                e
              );
            })(t)),
          0 === n.type ? new Ii(r, n, Fi(e, n, r)) : null
        );
      }
      function Mi(t, e, n, r) {
        var o;
        Ni ||
          (Ni = (function (t) {
            function n(e, n, r) {
              var i = t.call(this) || this;
              return (
                (i._lContainer = e), (i._hostTNode = n), (i._hostView = r), i
              );
            }
            return (
              i(n, t),
              Object.defineProperty(n.prototype, 'element', {
                get: function () {
                  return Fi(e, this._hostTNode, this._hostView);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, 'injector', {
                get: function () {
                  return new Bn(this._hostTNode, this._hostView);
                },
                enumerable: !0,
                configurable: !0,
              }),
              Object.defineProperty(n.prototype, 'parentInjector', {
                get: function () {
                  var t = jn(this._hostTNode, this._hostView),
                    e = Sn(t, this._hostView),
                    n = (function (t, e, n) {
                      if (n.parent && -1 !== n.parent.injectorIndex) {
                        for (
                          var r = n.parent.injectorIndex, i = n.parent;
                          null != i.parent && r == i.parent.injectorIndex;

                        )
                          i = i.parent;
                        return i;
                      }
                      for (var o = bn(t), s = e, a = e[6]; o > 1; )
                        (a = (s = s[15])[6]), o--;
                      return a;
                    })(t, this._hostView, this._hostTNode);
                  return _n(t) && null != n
                    ? new Bn(n, e)
                    : new Bn(null, this._hostView);
                },
                enumerable: !0,
                configurable: !0,
              }),
              (n.prototype.clear = function () {
                for (; this.length > 0; ) this.remove(this.length - 1);
              }),
              (n.prototype.get = function (t) {
                return (
                  (null !== this._lContainer[8] && this._lContainer[8][t]) ||
                  null
                );
              }),
              Object.defineProperty(n.prototype, 'length', {
                get: function () {
                  return this._lContainer.length - 9;
                },
                enumerable: !0,
                configurable: !0,
              }),
              (n.prototype.createEmbeddedView = function (t, e, n) {
                var r = t.createEmbeddedView(e || {});
                return this.insert(r, n), r;
              }),
              (n.prototype.createComponent = function (t, e, n, r, i) {
                var o = n || this.parentInjector;
                if (!i && null == t.ngModule && o) {
                  var s = o.get(ie, null);
                  s && (i = s);
                }
                var a = t.create(o, r, void 0, i);
                return this.insert(a.hostView, e), a;
              }),
              (n.prototype.insert = function (t, e) {
                var n = t._lView,
                  r = n[1];
                if (t.destroyed)
                  throw new Error(
                    'Cannot insert a destroyed View in a ViewContainer!'
                  );
                if ((this.allocateContainerIfNeeded(), Re(n[3]))) {
                  var i = this.indexOf(t);
                  if (-1 !== i) this.detach(i);
                  else {
                    var o = n[3],
                      s = new Ni(o, o[6], o[3]);
                    s.detach(s.indexOf(t));
                  }
                }
                var a = this._adjustIndex(e);
                return (
                  (function (t, e, n, r) {
                    var i = 9 + r,
                      o = n.length;
                    r > 0 && (n[i - 1][4] = e),
                      r < o - 9
                        ? ((e[4] = n[i]), ae(n, 9 + r, e))
                        : (n.push(e), (e[4] = null)),
                      (e[3] = n);
                    var s = e[17];
                    null !== s &&
                      n !== s &&
                      (function (t, e) {
                        var n = t[5],
                          r = e[3][3][16];
                        16 != (16 & r[2]) && e[16] !== r && (t[2] |= 1),
                          null === n ? (t[5] = [e]) : n.push(e);
                      })(s, e);
                    var a = e[5];
                    null !== a && a.insertView(t), (e[2] |= 128);
                  })(r, n, this._lContainer, a),
                  pi(r, n, !0, Ti(a, this._lContainer)),
                  t.attachToViewContainerRef(this),
                  ae(this._lContainer[8], a, t),
                  t
                );
              }),
              (n.prototype.move = function (t, e) {
                if (t.destroyed)
                  throw new Error(
                    'Cannot move a destroyed View in a ViewContainer!'
                  );
                return this.insert(t, e);
              }),
              (n.prototype.indexOf = function (t) {
                var e = this._lContainer[8];
                return null !== e ? e.indexOf(t) : -1;
              }),
              (n.prototype.remove = function (t) {
                this.allocateContainerIfNeeded();
                var e = this._adjustIndex(t, -1);
                (function (t, e) {
                  var n = di(t, e);
                  n && yi(n[1], n);
                })(this._lContainer, e),
                  ue(this._lContainer[8], e);
              }),
              (n.prototype.detach = function (t) {
                this.allocateContainerIfNeeded();
                var e = this._adjustIndex(t, -1),
                  n = di(this._lContainer, e);
                return n && null != ue(this._lContainer[8], e)
                  ? new ji(n)
                  : null;
              }),
              (n.prototype._adjustIndex = function (t, e) {
                return void 0 === e && (e = 0), null == t ? this.length + e : t;
              }),
              (n.prototype.allocateContainerIfNeeded = function () {
                null === this._lContainer[8] && (this._lContainer[8] = []);
              }),
              n
            );
          })(t));
        var s = r[n.index];
        if (Re(s))
          !(function (t, e) {
            t[2] = -2;
          })((o = s));
        else {
          var a = void 0;
          if (4 === n.type) a = Jn(s);
          else if (((a = r[11].createComment('')), De(r))) {
            var u = r[11],
              l = tr(n, r);
            _i(
              u,
              Si(u, l),
              a,
              (function (t, e) {
                return hn(t) ? t.nextSibling(e) : e.nextSibling;
              })(u, l)
            );
          } else Ci(r[1], r, a, n);
          (r[n.index] = o =
            (function (t, e, n, r) {
              return new Array(t, !0, -2, e, null, null, r, n, null);
            })(s, r, a, n)),
            ti(r, o);
        }
        return new Ni(o, n, r);
      }
      var Ui = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return Hi();
            }),
            t
          );
        })(),
        Hi = function (t) {
          return (
            void 0 === t && (t = !1),
            (function (t, e, n) {
              if (!n && Ie(t)) {
                var r = nr(t.index, e);
                return new ji(r, r);
              }
              return 3 === t.type ||
                0 === t.type ||
                4 === t.type ||
                5 === t.type
                ? new ji(e[16], e)
                : null;
            })(He(), Me(), t)
          );
        },
        Vi = new Wt('Set Injector scope.'),
        qi = {},
        Bi = {},
        zi = [],
        Wi = void 0;
      function Qi() {
        return void 0 === Wi && (Wi = new re()), Wi;
      }
      function Ki(t, e, n, r) {
        return (
          void 0 === e && (e = null),
          void 0 === n && (n = null),
          (e = e || Qi()),
          new Zi(t, n, e, r)
        );
      }
      var Zi = (function () {
        function t(t, e, n, r) {
          var i = this;
          void 0 === r && (r = null),
            (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          var o = [];
          e &&
            se(e, function (n) {
              return i.processProvider(n, t, e);
            }),
            se([t], function (t) {
              return i.processInjectorType(t, [], o);
            }),
            this.records.set(Qt, $i(void 0, this));
          var s = this.records.get(Vi);
          (this.scope = null != s ? s.value : null),
            this.injectorDefTypes.forEach(function (t) {
              return i.get(t);
            }),
            (this.source = r || ('object' == typeof t ? null : kt(t)));
        }
        return (
          Object.defineProperty(t.prototype, 'destroyed', {
            get: function () {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.destroy = function () {
            this.assertNotDestroyed(), (this._destroyed = !0);
            try {
              this.onDestroy.forEach(function (t) {
                return t.ngOnDestroy();
              });
            } finally {
              this.records.clear(),
                this.onDestroy.clear(),
                this.injectorDefTypes.clear();
            }
          }),
          (t.prototype.get = function (t, e, n) {
            void 0 === e && (e = Kt),
              void 0 === n && (n = yt.Default),
              this.assertNotDestroyed();
            var r,
              i = Yt(this);
            try {
              if (!(n & yt.SkipSelf)) {
                var o = this.records.get(t);
                if (void 0 === o) {
                  var s =
                    ('function' == typeof (r = t) ||
                      ('object' == typeof r && r instanceof Wt)) &&
                    _t(t);
                  (o =
                    s && this.injectableDefInScope(s) ? $i(Gi(t), qi) : null),
                    this.records.set(t, o);
                }
                if (null != o) return this.hydrate(t, o);
              }
              return (n & yt.Self ? Qi() : this.parent).get(
                t,
                (e = n & yt.Optional && e === Kt ? null : e)
              );
            } catch (a) {
              if ('NullInjectorError' === a.name) {
                if (
                  ((a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(kt(t)),
                  i)
                )
                  throw a;
                return (function (t, e, n, r) {
                  var i = t.ngTempTokenPath;
                  throw (
                    (e.__source && i.unshift(e.__source),
                    (t.message = (function (t, e, n, r) {
                      void 0 === r && (r = null),
                        (t =
                          t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1)
                            ? t.substr(2)
                            : t);
                      var i = kt(e);
                      if (Array.isArray(e)) i = e.map(kt).join(' -> ');
                      else if ('object' == typeof e) {
                        var o = [];
                        for (var s in e)
                          if (e.hasOwnProperty(s)) {
                            var a = e[s];
                            o.push(
                              s +
                                ':' +
                                ('string' == typeof a
                                  ? JSON.stringify(a)
                                  : kt(a))
                            );
                          }
                        i = '{' + o.join(', ') + '}';
                      }
                      return (
                        n +
                        (r ? '(' + r + ')' : '') +
                        '[' +
                        i +
                        ']: ' +
                        t.replace(Zt, '\n  ')
                      );
                    })('\n' + t.message, i, n, r)),
                    (t.ngTokenPath = i),
                    (t.ngTempTokenPath = null),
                    t)
                  );
                })(a, t, 'R3InjectorError', this.source);
              }
              throw a;
            } finally {
              Yt(i);
            }
          }),
          (t.prototype.toString = function () {
            var t = [];
            return (
              this.records.forEach(function (e, n) {
                return t.push(kt(n));
              }),
              'R3Injector[' + t.join(', ') + ']'
            );
          }),
          (t.prototype.assertNotDestroyed = function () {
            if (this._destroyed)
              throw new Error('Injector has already been destroyed.');
          }),
          (t.prototype.processInjectorType = function (t, e, n) {
            var r = this;
            if (!(t = Ot(t))) return !1;
            var i = bt(t),
              o = (null == i && t.ngModule) || void 0,
              s = void 0 === o ? t : o,
              a = -1 !== n.indexOf(s);
            if ((void 0 !== o && (i = bt(o)), null == i)) return !1;
            if (null != i.imports && !a) {
              var u;
              n.push(s);
              try {
                se(i.imports, function (t) {
                  r.processInjectorType(t, e, n) &&
                    (void 0 === u && (u = []), u.push(t));
                });
              } finally {
              }
              if (void 0 !== u)
                for (
                  var l = function (t) {
                      var e = u[t],
                        n = e.ngModule,
                        i = e.providers;
                      se(i, function (t) {
                        return r.processProvider(t, n, i || zi);
                      });
                    },
                    c = 0;
                  c < u.length;
                  c++
                )
                  l(c);
            }
            this.injectorDefTypes.add(s),
              this.records.set(s, $i(i.factory, qi));
            var f = i.providers;
            if (null != f && !a) {
              var p = t;
              se(f, function (t) {
                return r.processProvider(t, p, f);
              });
            }
            return void 0 !== o && void 0 !== t.providers;
          }),
          (t.prototype.processProvider = function (t, e, n) {
            var r = Ji((t = Ot(t))) ? t : Ot(t && t.provide),
              i = (function (t, e, n) {
                return Yi(t)
                  ? $i(void 0, t.useValue)
                  : $i(
                      (function (t, e, n) {
                        var r,
                          i = void 0;
                        if (Ji(t)) {
                          var o = Ot(t);
                          return ke(o) || Gi(o);
                        }
                        if (Yi(t))
                          i = function () {
                            return Ot(t.useValue);
                          };
                        else if ((r = t) && r.useFactory)
                          i = function () {
                            return t.useFactory.apply(t, u(ne(t.deps || [])));
                          };
                        else if (
                          (function (t) {
                            return !(!t || !t.useExisting);
                          })(t)
                        )
                          i = function () {
                            return te(Ot(t.useExisting));
                          };
                        else {
                          var s = Ot(t && (t.useClass || t.provide));
                          if (
                            (s ||
                              (function (t, e, n) {
                                var r = '';
                                throw (
                                  (t &&
                                    e &&
                                    (r =
                                      ' - only instances of Provider and Type are allowed, got: [' +
                                      e
                                        .map(function (t) {
                                          return t == n ? '?' + n + '?' : '...';
                                        })
                                        .join(', ') +
                                      ']'),
                                  new Error(
                                    "Invalid provider for the NgModule '" +
                                      kt(t) +
                                      "'" +
                                      r
                                  ))
                                );
                              })(e, n, t),
                            !(function (t) {
                              return !!t.deps;
                            })(t))
                          )
                            return ke(s) || Gi(s);
                          i = function () {
                            return new (s.bind.apply(
                              s,
                              u([void 0], ne(t.deps))
                            ))();
                          };
                        }
                        return i;
                      })(t, e, n),
                      qi
                    );
              })(t, e, n);
            if (Ji(t) || !0 !== t.multi) {
              var o = this.records.get(r);
              o && void 0 !== o.multi && cr();
            } else {
              var s = this.records.get(r);
              s
                ? void 0 === s.multi && cr()
                : (((s = $i(void 0, qi, !0)).factory = function () {
                    return ne(s.multi);
                  }),
                  this.records.set(r, s)),
                (r = t),
                s.multi.push(t);
            }
            this.records.set(r, i);
          }),
          (t.prototype.hydrate = function (t, e) {
            var n;
            return (
              e.value === Bi
                ? (function (t) {
                    throw new Error(
                      'Cannot instantiate cyclic dependency! ' + t
                    );
                  })(kt(t))
                : e.value === qi && ((e.value = Bi), (e.value = e.factory())),
              'object' == typeof e.value &&
                e.value &&
                null !== (n = e.value) &&
                'object' == typeof n &&
                'function' == typeof n.ngOnDestroy &&
                this.onDestroy.add(e.value),
              e.value
            );
          }),
          (t.prototype.injectableDefInScope = function (t) {
            return (
              !!t.providedIn &&
              ('string' == typeof t.providedIn
                ? 'any' === t.providedIn || t.providedIn === this.scope
                : this.injectorDefTypes.has(t.providedIn))
            );
          }),
          t
        );
      })();
      function Gi(t) {
        var e = _t(t),
          n = null !== e ? e.factory : ke(t);
        if (null !== n) return n;
        var r = bt(t);
        if (null !== r) return r.factory;
        if (t instanceof Wt)
          throw new Error(
            'Token ' + kt(t) + ' is missing a \u0275prov definition.'
          );
        if (t instanceof Function)
          return (function (t) {
            var e = t.length;
            if (e > 0) {
              var n = le(e, '?');
              throw new Error(
                "Can't resolve all parameters for " +
                  kt(t) +
                  ': (' +
                  n.join(', ') +
                  ').'
              );
            }
            var r = (function (t) {
              var e = t && (t[St] || t[Tt] || (t[Ct] && t[Ct]()));
              if (e) {
                var n = (function (t) {
                  if (t.hasOwnProperty('name')) return t.name;
                  var e = ('' + t).match(/^function\s*([^\s(]+)/);
                  return null === e ? '' : e[1];
                })(t);
                return (
                  console.warn(
                    'DEPRECATED: DI is instantiating a token "' +
                      n +
                      '" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in v10. Please add @Injectable() to the "' +
                      n +
                      '" class.'
                  ),
                  e
                );
              }
              return null;
            })(t);
            return null !== r
              ? function () {
                  return r.factory(t);
                }
              : function () {
                  return new t();
                };
          })(t);
        throw new Error('unreachable');
      }
      function $i(t, e, n) {
        return (
          void 0 === n && (n = !1),
          { factory: t, value: e, multi: n ? [] : void 0 }
        );
      }
      function Yi(t) {
        return null !== t && 'object' == typeof t && Gt in t;
      }
      function Ji(t) {
        return 'function' == typeof t;
      }
      var Xi = function (t, e, n) {
          return Ki({ name: n }, e, t, n);
        },
        to = (function () {
          function t() {}
          return (
            (t.create = function (t, e) {
              return Array.isArray(t)
                ? Xi(t, e, '')
                : Xi(t.providers, t.parent, t.name || '');
            }),
            (t.THROW_IF_NOT_FOUND = Kt),
            (t.NULL = new re()),
            (t.ɵprov = mt({
              token: t,
              providedIn: 'any',
              factory: function () {
                return te(Qt);
              },
            })),
            (t.__NG_ELEMENT_ID__ = -1),
            t
          );
        })(),
        eo = new Wt('AnalyzeForEntryComponents'),
        no = new Map(),
        ro = new Set();
      function io(t) {
        return 'string' == typeof t ? t : t.text();
      }
      function oo(t, e) {
        for (var n = t.styles, r = t.classes, i = 0, o = 0; o < e.length; o++) {
          var s = e[o];
          'number' == typeof s
            ? (i = s)
            : 1 == i
            ? (r = At(r, s))
            : 2 == i && (n = At(n, s + ': ' + e[++o] + ';'));
        }
        null !== n && (t.styles = n), null !== r && (t.classes = r);
      }
      var so = null;
      function ao() {
        if (!so) {
          var t = Lt.Symbol;
          if (t && t.iterator) so = t.iterator;
          else
            for (
              var e = Object.getOwnPropertyNames(Map.prototype), n = 0;
              n < e.length;
              ++n
            ) {
              var r = e[n];
              'entries' !== r &&
                'size' !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (so = r);
            }
        }
        return so;
      }
      function uo(t, e) {
        return (
          t === e ||
          ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e))
        );
      }
      function lo(t) {
        return (
          !!co(t) && (Array.isArray(t) || (!(t instanceof Map) && ao() in t))
        );
      }
      function co(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function fo(t, e, n) {
        return !Object.is(t[e], n) && ((t[e] = n), !0);
      }
      function po(t, e, n, r) {
        var i = Me();
        return (
          fo(i, Fe.lFrame.bindingIndex++, e) &&
            (function (t, e, n, r, i, o, s) {
              var a = Xn(t, i),
                u = i[11];
              if (null == n)
                hn(u) ? u.removeAttribute(a, e, s) : a.removeAttribute(e);
              else {
                var l = er(r, t),
                  c = null == o ? En(n) : o(n, l.tagName || '', e);
                hn(u)
                  ? u.setAttribute(a, e, c, s)
                  : s
                  ? a.setAttributeNS(s, e, c)
                  : a.setAttribute(e, c);
              }
            })(nn(), t, e, Ue(), i, n, r),
          po
        );
      }
      function ho(t, e) {
        void 0 === e && (e = yt.Default);
        var n = Me();
        return null == n ? te(t, e) : Fn(He(), n, Ot(t), e);
      }
      function yo() {
        throw new Error('invalid');
      }
      function vo(t, e, n, r, i) {
        var o = e.inputs,
          s = i ? 'class' : 'style';
        !(function (t, e, n, r, i) {
          for (var o = 0; o < n.length; ) {
            var s = n[o++],
              a = n[o++],
              u = e[s],
              l = t.data[s];
            null !== l.setInput ? l.setInput(u, i, r, a) : (u[a] = i);
          }
        })(t, n, o[s] || (i && o.className), s, r);
      }
      function mo(t, e, n, r) {
        var i = Me(),
          o = Ue(),
          s = 19 + t,
          a = i[11],
          u = (i[s] = Pr(e, a, Fe.lFrame.currentNamespace)),
          l = o.firstCreatePass
            ? (function (t, e, n, r, i, o, s) {
                var a = e.consts,
                  u = sr(a, o),
                  l = Or(e, n[6], t, 3, i, u);
                return (
                  (function (t, e, n, r) {
                    if (Le()) {
                      var i = (function (t, e, n) {
                          var r = t.directiveRegistry,
                            i = null;
                          if (r)
                            for (var o = 0; o < r.length; o++) {
                              var s = r[o];
                              mr(n, s.selectors, !1) &&
                                (i || (i = []),
                                Dn(On(n, e), t, s.type),
                                je(s)
                                  ? (2 & n.flags && lr(n),
                                    zr(t, n),
                                    i.unshift(s))
                                  : i.push(s));
                            }
                          return i;
                        })(t, e, n),
                        o = null === r ? null : { '': -1 };
                      if (null !== i) {
                        var s = 0;
                        !0, Qr(n, t.data.length, i.length);
                        for (var a = 0; a < i.length; a++)
                          (c = i[a]).providersResolver &&
                            c.providersResolver(c);
                        Br(t, n, i.length);
                        var u = !1,
                          l = !1;
                        for (a = 0; a < i.length; a++) {
                          var c;
                          (n.mergedAttrs = mn(
                            n.mergedAttrs,
                            (c = i[a]).hostAttrs
                          )),
                            Kr(t, e, c),
                            Wr(t.data.length - 1, c, o),
                            null !== c.contentQueries && (n.flags |= 8),
                            (null === c.hostBindings &&
                              null === c.hostAttrs &&
                              0 === c.hostVars) ||
                              (n.flags |= 128),
                            !u &&
                              (c.onChanges || c.onInit || c.doCheck) &&
                              ((t.preOrderHooks || (t.preOrderHooks = [])).push(
                                n.index - 19
                              ),
                              (u = !0)),
                            l ||
                              (!c.onChanges && !c.doCheck) ||
                              ((
                                t.preOrderCheckHooks ||
                                (t.preOrderCheckHooks = [])
                              ).push(n.index - 19),
                              (l = !0)),
                            Hr(t, c),
                            (s += c.hostVars);
                        }
                        !(function (t, e) {
                          for (
                            var n = e.directiveEnd,
                              r = t.data,
                              i = e.attrs,
                              o = [],
                              s = null,
                              a = null,
                              u = e.directiveStart;
                            u < n;
                            u++
                          ) {
                            var l = r[u],
                              c = l.inputs;
                            o.push(null !== i ? $r(c, i) : null),
                              (s = Ur(c, u, s)),
                              (a = Ur(l.outputs, u, a));
                          }
                          null !== s &&
                            ((s.hasOwnProperty('class') ||
                              s.hasOwnProperty('className')) &&
                              (e.flags |= 16),
                            s.hasOwnProperty('style') && (e.flags |= 32)),
                            (e.initialInputs = o),
                            (e.inputs = s),
                            (e.outputs = a);
                        })(t, n),
                          Vr(t, e, s);
                      }
                      o &&
                        (function (t, e, n) {
                          if (e)
                            for (
                              var r = (t.localNames = []), i = 0;
                              i < e.length;
                              i += 2
                            ) {
                              var o = n[e[i + 1]];
                              if (null == o)
                                throw new Error(
                                  "Export of name '" + e[i + 1] + "' not found!"
                                );
                              r.push(e[i], o);
                            }
                        })(n, r, o);
                    }
                    n.mergedAttrs = mn(n.mergedAttrs, n.attrs);
                  })(e, n, l, sr(a, s)),
                  null !== l.mergedAttrs && oo(l, l.mergedAttrs),
                  null !== e.queries && e.queries.elementStart(e, l),
                  l
                );
              })(t, o, i, 0, e, n, r)
            : o.data[s];
        Ve(l, !0);
        var c = l.mergedAttrs;
        null !== c && yn(a, u, c);
        var f = l.classes;
        null !== f && Ri(a, u, f);
        var p = l.styles;
        null !== p && Pi(a, u, p),
          Ci(o, i, u, l),
          0 === Fe.lFrame.elementDepthCount && ur(u, i),
          Fe.lFrame.elementDepthCount++,
          Ne(l) &&
            ((function (t, e, n) {
              Le() &&
                ((function (t, e, n, r) {
                  var i = n.directiveStart,
                    o = n.directiveEnd;
                  t.firstCreatePass || On(n, e), ur(r, e);
                  for (var s = n.initialInputs, a = i; a < o; a++) {
                    var u = t.data[a],
                      l = je(u);
                    l && Zr(e, n, u);
                    var c = Hn(e, t, a, n);
                    ur(c, e),
                      null !== s && Gr(0, a - i, c, u, 0, s),
                      l && (nr(n.index, e)[8] = c);
                  }
                })(t, e, n, tr(n, e)),
                128 == (128 & n.flags) &&
                  (function (t, e, n) {
                    var r = n.directiveStart,
                      i = n.directiveEnd,
                      o = t.expandoInstructions,
                      s = t.firstCreatePass,
                      a = n.index - 19;
                    try {
                      rn(a);
                      for (var u = r; u < i; u++) {
                        var l = t.data[u];
                        null !== l.hostBindings ||
                        0 !== l.hostVars ||
                        null !== l.hostAttrs
                          ? qr(l, e[u])
                          : s && o.push(null);
                      }
                    } finally {
                      rn(-1);
                    }
                  })(t, e, n));
            })(o, i, l),
            (function (t, e, n) {
              if (Oe(e))
                for (var r = e.directiveEnd, i = e.directiveStart; i < r; i++) {
                  var o = t.data[i];
                  o.contentQueries && o.contentQueries(1, n[i], i);
                }
            })(o, l, i)),
          null !== r &&
            (function (t, e, n) {
              void 0 === n && (n = tr);
              var r = e.localNames;
              if (null !== r)
                for (var i = e.index + 1, o = 0; o < r.length; o += 2) {
                  var s = r[o + 1],
                    a = -1 === s ? n(e, t) : t[s];
                  t[i++] = a;
                }
            })(i, l);
      }
      function go() {
        var t = He();
        qe() ? Be() : Ve((t = t.parent), !1);
        var e = t;
        Fe.lFrame.elementDepthCount--;
        var n = Ue();
        n.firstCreatePass && (on(n, t), Oe(t) && n.queries.elementEnd(t)),
          null !== e.classes &&
            (function (t) {
              return 0 != (16 & t.flags);
            })(e) &&
            vo(n, e, Me(), e.classes, !0),
          null !== e.styles &&
            (function (t) {
              return 0 != (32 & t.flags);
            })(e) &&
            vo(n, e, Me(), e.styles, !1);
      }
      function _o(t, e, n, r) {
        mo(t, e, n, r), go();
      }
      function wo(t) {
        return !!t && 'function' == typeof t.then;
      }
      function bo(t, e, n, r) {
        void 0 === n && (n = !1);
        var i = Me(),
          o = Ue(),
          s = He();
        return (
          (function (t, e, n, r, i, o, s, a) {
            void 0 === s && (s = !1);
            var u = Ne(r),
              l = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
              c = si(e),
              f = !0;
            if (3 === r.type) {
              var p = tr(r, e),
                h = a ? a(p) : ve,
                d = h.target || p,
                y = c.length,
                v = a
                  ? function (t) {
                      return a(Jn(t[r.index])).target;
                    }
                  : r.index;
              if (hn(n)) {
                var m = null;
                if (
                  (!a &&
                    u &&
                    (m = (function (t, e, n, r) {
                      var i = t.cleanup;
                      if (null != i)
                        for (var o = 0; o < i.length - 1; o += 2) {
                          var s = i[o];
                          if (s === n && i[o + 1] === r) {
                            var a = e[7],
                              u = i[o + 2];
                            return a.length > u ? a[u] : null;
                          }
                          'string' == typeof s && (o += 2);
                        }
                      return null;
                    })(t, e, i, r.index)),
                  null !== m)
                )
                  ((m.__ngLastListenerFn__ || m).__ngNextListenerFn__ = o),
                    (m.__ngLastListenerFn__ = o),
                    (f = !1);
                else {
                  o = Eo(r, e, o, !1);
                  var g = n.listen(h.name || d, i, o);
                  c.push(o, g), l && l.push(i, v, y, y + 1);
                }
              } else
                (o = Eo(r, e, o, !0)),
                  d.addEventListener(i, o, s),
                  c.push(o),
                  l && l.push(i, v, y, s);
            }
            var _,
              w = r.outputs;
            if (f && null !== w && (_ = w[i])) {
              var b = _.length;
              if (b)
                for (var S = 0; S < b; S += 2) {
                  var E = e[_[S]][_[S + 1]].subscribe(o),
                    C = c.length;
                  c.push(o, E), l && l.push(i, r.index, C, -(C + 1));
                }
            }
          })(o, i, i[11], s, t, e, n, r),
          bo
        );
      }
      function So(t, e, n) {
        try {
          return !1 !== e(n);
        } catch (r) {
          return ui(t, r), !1;
        }
      }
      function Eo(t, e, n, r) {
        return function i(o) {
          if (o === Function) return n;
          var s = 2 & t.flags ? nr(t.index, e) : e;
          0 == (32 & e[2]) && ei(s);
          for (var a = So(e, n, o), u = i.__ngNextListenerFn__; u; )
            (a = So(e, u, o) && a), (u = u.__ngNextListenerFn__);
          return r && !1 === a && (o.preventDefault(), (o.returnValue = !1)), a;
        };
      }
      var Co = [];
      function To(t, e, n, r, i) {
        for (
          var o = t[n + 1], s = null === e, a = r ? Er(o) : Tr(o), u = !1;
          0 !== a && (!1 === u || s);

        ) {
          var l = t[a + 1];
          xo(t[a], e) && ((u = !0), (t[a + 1] = r ? kr(l) : Cr(l))),
            (a = r ? Er(l) : Tr(l));
        }
        u && (t[n + 1] = r ? Cr(o) : kr(o));
      }
      function xo(t, e) {
        return (
          null === t ||
          null == e ||
          (Array.isArray(t) ? t[1] : t) === e ||
          (!(!Array.isArray(t) || 'string' != typeof e) && pe(t, e) >= 0)
        );
      }
      var ko = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
      function Ao(t) {
        return t.substring(ko.key, ko.keyEnd);
      }
      function Po(t, e) {
        var n = ko.textEnd;
        return n === e
          ? -1
          : ((e = ko.keyEnd =
              (function (t, e, n) {
                for (; e < n && t.charCodeAt(e) > 32; ) e++;
                return e;
              })(t, (ko.key = e), n)),
            Ro(t, e, n));
      }
      function Ro(t, e, n) {
        for (; e < n && t.charCodeAt(e) <= 32; ) e++;
        return e;
      }
      function Oo(t) {
        !(function (t, e, n, r) {
          var i,
            o,
            s = Ue(),
            a =
              (2,
              (o = (i = Fe.lFrame).bindingIndex),
              (i.bindingIndex = i.bindingIndex + 2),
              o);
          s.firstUpdatePass &&
            (function (t, e, n, r) {
              var i = t.data;
              if (null === i[n + 1]) {
                var o = i[nn() + 19],
                  s = No(t, n);
                Uo(o, !0) && null === e && !s && (e = !1),
                  (e = (function (t, e, n, r) {
                    var i = (function (t) {
                        var e = Fe.lFrame.currentDirectiveIndex;
                        return -1 === e ? null : t[e];
                      })(t),
                      o = e.residualClasses;
                    if (null === i)
                      0 === e.classBindings &&
                        ((n = Do((n = jo(null, t, e, n, !0)), e.attrs, !0)),
                        (o = null));
                    else {
                      var s = e.directiveStylingLast;
                      if (-1 === s || t[s] !== i)
                        if (((n = jo(i, t, e, n, !0)), null === o)) {
                          var a = (function (t, e, n) {
                            var r = e.classBindings;
                            if (0 !== Tr(r)) return t[Er(r)];
                          })(t, e);
                          void 0 !== a &&
                            Array.isArray(a) &&
                            (function (t, e, n, r) {
                              t[Er(e.classBindings)] = r;
                            })(
                              t,
                              e,
                              0,
                              (a = Do(
                                (a = jo(null, t, e, a[1], !0)),
                                e.attrs,
                                !0
                              ))
                            );
                        } else
                          o = (function (t, e, n) {
                            for (
                              var r = void 0,
                                i = e.directiveEnd,
                                o = 1 + e.directiveStylingLast;
                              o < i;
                              o++
                            )
                              r = Do(r, t[o].hostAttrs, !0);
                            return Do(r, e.attrs, !0);
                          })(t, e);
                    }
                    return void 0 !== o && (e.residualClasses = o), n;
                  })(i, o, e)),
                  (function (t, e, n, r, i, o) {
                    var s = e.classBindings,
                      a = Er(s),
                      u = Tr(s);
                    t[r] = n;
                    var l,
                      c = !1;
                    if (
                      (Array.isArray(n)
                        ? (null === (l = n[1]) || pe(n, l) > 0) && (c = !0)
                        : (l = n),
                      i)
                    )
                      if (0 !== u) {
                        var f = Er(t[a + 1]);
                        (t[r + 1] = Sr(f, a)),
                          0 !== f && (t[f + 1] = xr(t[f + 1], r)),
                          (t[a + 1] = (131071 & t[a + 1]) | (r << 17));
                      } else
                        (t[r + 1] = Sr(a, 0)),
                          0 !== a && (t[a + 1] = xr(t[a + 1], r)),
                          (a = r);
                    else
                      (t[r + 1] = Sr(u, 0)),
                        0 === a ? (a = r) : (t[u + 1] = xr(t[u + 1], r)),
                        (u = r);
                    c && (t[r + 1] = Cr(t[r + 1])),
                      To(t, l, r, !0),
                      To(t, l, r, !1),
                      (function (t, e, n, r, i) {
                        var o = t.residualClasses;
                        null != o &&
                          'string' == typeof e &&
                          pe(o, e) >= 0 &&
                          (n[r + 1] = kr(n[r + 1]));
                      })(e, l, t, r),
                      (s = Sr(a, u)),
                      (e.classBindings = s);
                  })(i, o, e, n, s);
              }
            })(s, null, a);
          var u = Me();
          if (n !== wr && fo(u, a, n)) {
            var l = s.data[nn() + 19];
            if (Uo(l, !0) && !No(s, a)) {
              var c = l.classes;
              null !== c && (n = At(c, n || '')), vo(s, l, u, n, !0);
            } else
              !(function (t, e, n, r, i, o, s, a) {
                i === wr && (i = Co);
                for (
                  var u = 0,
                    l = 0,
                    c = 0 < i.length ? i[0] : null,
                    f = 0 < o.length ? o[0] : null;
                  null !== c || null !== f;

                ) {
                  var p = u < i.length ? i[u + 1] : void 0,
                    h = l < o.length ? o[l + 1] : void 0,
                    d = null,
                    y = void 0;
                  c === f
                    ? ((u += 2), (l += 2), p !== h && ((d = f), (y = h)))
                    : null === f || (null !== c && c < f)
                    ? ((u += 2), (d = c))
                    : ((l += 2), (d = f), (y = h)),
                    null !== d && Fo(t, e, n, r, d, y, !0, a),
                    (c = u < i.length ? i[u] : null),
                    (f = l < o.length ? o[l] : null);
                }
              })(
                s,
                l,
                u,
                u[11],
                u[a + 1],
                (u[a + 1] = (function (t, e, n) {
                  if (null == n || '' === n) return Co;
                  var r = [],
                    i = (function (t) {
                      return t instanceof Zn
                        ? t.changingThisBreaksApplicationSecurity
                        : t;
                    })(n);
                  if (Array.isArray(i))
                    for (var o = 0; o < i.length; o++) t(r, i[o], !0);
                  else if ('object' == typeof i)
                    for (var s in i) i.hasOwnProperty(s) && t(r, s, i[s]);
                  else 'string' == typeof i && e(r, i);
                  return r;
                })(t, e, n)),
                0,
                a
              );
          }
        })(ce, Io, t);
      }
      function Io(t, e) {
        for (
          var n = (function (t) {
            return (
              (function (t) {
                (ko.key = 0),
                  (ko.keyEnd = 0),
                  (ko.value = 0),
                  (ko.valueEnd = 0),
                  (ko.textEnd = t.length);
              })(t),
              Po(t, Ro(t, 0, ko.textEnd))
            );
          })(e);
          n >= 0;
          n = Po(e, n)
        )
          ce(t, Ao(e), !0);
      }
      function No(t, e) {
        return e >= t.expandoStartIndex;
      }
      function jo(t, e, n, r, i) {
        var o = null,
          s = n.directiveEnd,
          a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < s && ((r = Do(r, (o = e[a]).hostAttrs, i)), o !== t);

        )
          a++;
        return null !== t && (n.directiveStylingLast = a), r;
      }
      function Do(t, e, n) {
        var r = n ? 1 : 2,
          i = -1;
        if (null !== e)
          for (var o = 0; o < e.length; o++) {
            var s = e[o];
            'number' == typeof s
              ? (i = s)
              : i === r &&
                (Array.isArray(t) || (t = void 0 === t ? [] : ['', t]),
                ce(t, s, !!n || e[++o]));
          }
        return void 0 === t ? null : t;
      }
      function Fo(t, e, n, r, i, o, s, a) {
        if (3 === e.type) {
          var u = t.data,
            l = u[a + 1];
          Mo(1 == (1 & l) ? Lo(u, e, n, i, Tr(l), s) : void 0) ||
            (Mo(o) ||
              ((function (t) {
                return 2 == (2 & t);
              })(l) &&
                (o = Lo(u, null, n, i, a, s))),
            (function (t, e, n, r, i) {
              var o = hn(t);
              if (e)
                i
                  ? o
                    ? t.addClass(n, r)
                    : n.classList.add(r)
                  : o
                  ? t.removeClass(n, r)
                  : n.classList.remove(r);
              else {
                var s = -1 == r.indexOf('-') ? void 0 : 2;
                null == i
                  ? o
                    ? t.removeStyle(n, r, s)
                    : n.style.removeProperty(r)
                  : o
                  ? t.setStyle(n, r, i, s)
                  : n.style.setProperty(r, i);
              }
            })(r, s, Xn(nn(), n), i, o));
        }
      }
      function Lo(t, e, n, r, i, o) {
        for (var s = null === e, a = void 0; i > 0; ) {
          var u = t[i],
            l = Array.isArray(u),
            c = l ? u[1] : u,
            f = null === c,
            p = n[i + 1];
          p === wr && (p = f ? Co : void 0);
          var h = f ? fe(p, r) : c === r ? p : void 0;
          if ((l && !Mo(h) && (h = fe(u, r)), Mo(h) && ((a = h), s))) return a;
          var d = t[i + 1];
          i = s ? Er(d) : Tr(d);
        }
        if (null !== e) {
          var y = o ? e.residualClasses : e.residualStyles;
          null != y && (a = fe(y, r));
        }
        return a;
      }
      function Mo(t) {
        return void 0 !== t;
      }
      function Uo(t, e) {
        return 0 != (t.flags & (e ? 16 : 32));
      }
      function Ho(t, e) {
        void 0 === e && (e = '');
        var n = Me(),
          r = Ue(),
          i = t + 19,
          o = r.firstCreatePass ? Or(r, n[6], t, 3, null, null) : r.data[i],
          s = (n[i] = (function (t, e) {
            return hn(e) ? e.createText(t) : e.createTextNode(t);
          })(e, n[11]));
        Ci(r, n, s, o), Ve(o, !1);
      }
      function Vo(t, e) {
        var n = rr(t)[1],
          r = n.data.length - 1;
        on(n, { directiveStart: r, directiveEnd: r + 1 });
      }
      var qo = (function () {
          return function () {};
        })(),
        Bo = (function () {
          return function () {};
        })(),
        zo = (function () {
          function t() {}
          return (
            (t.prototype.resolveComponentFactory = function (t) {
              throw (function (t) {
                var e = Error(
                  'No component factory found for ' +
                    kt(t) +
                    '. Did you add it to @NgModule.entryComponents?'
                );
                return (e.ngComponent = t), e;
              })(t);
            }),
            t
          );
        })(),
        Wo = (function () {
          function t() {}
          return (t.NULL = new zo()), t;
        })(),
        Qo = (function () {
          function t(t) {
            this.nativeElement = t;
          }
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return Ko(t);
            }),
            t
          );
        })(),
        Ko = function (t) {
          return Fi(t, He(), Me());
        },
        Zo = (function () {
          return function () {};
        })(),
        Go = (function (t) {
          return (
            (t[(t.Important = 1)] = 'Important'),
            (t[(t.DashCase = 2)] = 'DashCase'),
            t
          );
        })({}),
        $o = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return Yo();
            }),
            t
          );
        })(),
        Yo = function () {
          var t = Me(),
            e = nr(He().index, t);
          return (function (t) {
            var e = t[11];
            if (hn(e)) return e;
            throw new Error(
              'Cannot inject Renderer2 when the application uses Renderer3!'
            );
          })(Pe(e) ? e : t);
        },
        Jo = (function () {
          function t() {}
          return (
            (t.ɵprov = mt({
              token: t,
              providedIn: 'root',
              factory: function () {
                return null;
              },
            })),
            t
          );
        })(),
        Xo = new ((function () {
          return function (t) {
            (this.full = t),
              (this.major = t.split('.')[0]),
              (this.minor = t.split('.')[1]),
              (this.patch = t.split('.').slice(2).join('.'));
          };
        })())('9.0.4'),
        ts = (function () {
          function t() {}
          return (
            (t.prototype.supports = function (t) {
              return lo(t);
            }),
            (t.prototype.create = function (t) {
              return new ns(t);
            }),
            t
          );
        })(),
        es = function (t, e) {
          return e;
        },
        ns = (function () {
          function t(t) {
            (this.length = 0),
              (this._linkedRecords = null),
              (this._unlinkedRecords = null),
              (this._previousItHead = null),
              (this._itHead = null),
              (this._itTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._movesHead = null),
              (this._movesTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null),
              (this._identityChangesHead = null),
              (this._identityChangesTail = null),
              (this._trackByFn = t || es);
          }
          return (
            (t.prototype.forEachItem = function (t) {
              var e;
              for (e = this._itHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachOperation = function (t) {
              for (
                var e = this._itHead, n = this._removalsHead, r = 0, i = null;
                e || n;

              ) {
                var o = !n || (e && e.currentIndex < ss(n, r, i)) ? e : n,
                  s = ss(o, r, i),
                  a = o.currentIndex;
                if (o === n) r--, (n = n._nextRemoved);
                else if (((e = e._next), null == o.previousIndex)) r++;
                else {
                  i || (i = []);
                  var u = s - r,
                    l = a - r;
                  if (u != l) {
                    for (var c = 0; c < u; c++) {
                      var f = c < i.length ? i[c] : (i[c] = 0),
                        p = f + c;
                      l <= p && p < u && (i[c] = f + 1);
                    }
                    i[o.previousIndex] = l - u;
                  }
                }
                s !== a && t(o, s, a);
              }
            }),
            (t.prototype.forEachPreviousItem = function (t) {
              var e;
              for (e = this._previousItHead; null !== e; e = e._nextPrevious)
                t(e);
            }),
            (t.prototype.forEachAddedItem = function (t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachMovedItem = function (t) {
              var e;
              for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
            }),
            (t.prototype.forEachRemovedItem = function (t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.forEachIdentityChange = function (t) {
              var e;
              for (
                e = this._identityChangesHead;
                null !== e;
                e = e._nextIdentityChange
              )
                t(e);
            }),
            (t.prototype.diff = function (t) {
              if ((null == t && (t = []), !lo(t)))
                throw new Error(
                  "Error trying to diff '" +
                    kt(t) +
                    "'. Only arrays and iterables are allowed"
                );
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function () {}),
            (t.prototype.check = function (t) {
              var e = this;
              this._reset();
              var n,
                r,
                i,
                o = this._itHead,
                s = !1;
              if (Array.isArray(t)) {
                this.length = t.length;
                for (var a = 0; a < this.length; a++)
                  (i = this._trackByFn(a, (r = t[a]))),
                    null !== o && uo(o.trackById, i)
                      ? (s && (o = this._verifyReinsertion(o, r, i, a)),
                        uo(o.item, r) || this._addIdentityChange(o, r))
                      : ((o = this._mismatch(o, r, i, a)), (s = !0)),
                    (o = o._next);
              } else
                (n = 0),
                  (function (t, e) {
                    if (Array.isArray(t))
                      for (var n = 0; n < t.length; n++) e(t[n]);
                    else
                      for (
                        var r = t[ao()](), i = void 0;
                        !(i = r.next()).done;

                      )
                        e(i.value);
                  })(t, function (t) {
                    (i = e._trackByFn(n, t)),
                      null !== o && uo(o.trackById, i)
                        ? (s && (o = e._verifyReinsertion(o, t, i, n)),
                          uo(o.item, t) || e._addIdentityChange(o, t))
                        : ((o = e._mismatch(o, t, i, n)), (s = !0)),
                      (o = o._next),
                      n++;
                  }),
                  (this.length = n);
              return this._truncate(o), (this.collection = t), this.isDirty;
            }),
            Object.defineProperty(t.prototype, 'isDirty', {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._movesHead ||
                  null !== this._removalsHead ||
                  null !== this._identityChangesHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype._reset = function () {
              if (this.isDirty) {
                var t = void 0,
                  e = void 0;
                for (
                  t = this._previousItHead = this._itHead;
                  null !== t;
                  t = t._next
                )
                  t._nextPrevious = t._next;
                for (t = this._additionsHead; null !== t; t = t._nextAdded)
                  t.previousIndex = t.currentIndex;
                for (
                  this._additionsHead = this._additionsTail = null,
                    t = this._movesHead;
                  null !== t;
                  t = e
                )
                  (t.previousIndex = t.currentIndex), (e = t._nextMoved);
                (this._movesHead = this._movesTail = null),
                  (this._removalsHead = this._removalsTail = null),
                  (this._identityChangesHead = this._identityChangesTail =
                    null);
              }
            }),
            (t.prototype._mismatch = function (t, e, n, r) {
              var i;
              return (
                null === t
                  ? (i = this._itTail)
                  : ((i = t._prev), this._remove(t)),
                null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
                  ? (uo(t.item, e) || this._addIdentityChange(t, e),
                    this._moveAfter(t, i, r))
                  : null !==
                    (t =
                      null === this._unlinkedRecords
                        ? null
                        : this._unlinkedRecords.get(n, null))
                  ? (uo(t.item, e) || this._addIdentityChange(t, e),
                    this._reinsertAfter(t, i, r))
                  : (t = this._addAfter(new rs(e, n), i, r)),
                t
              );
            }),
            (t.prototype._verifyReinsertion = function (t, e, n, r) {
              var i =
                null === this._unlinkedRecords
                  ? null
                  : this._unlinkedRecords.get(n, null);
              return (
                null !== i
                  ? (t = this._reinsertAfter(i, t._prev, r))
                  : t.currentIndex != r &&
                    ((t.currentIndex = r), this._addToMoves(t, r)),
                t
              );
            }),
            (t.prototype._truncate = function (t) {
              for (; null !== t; ) {
                var e = t._next;
                this._addToRemovals(this._unlink(t)), (t = e);
              }
              null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
                null !== this._additionsTail &&
                  (this._additionsTail._nextAdded = null),
                null !== this._movesTail && (this._movesTail._nextMoved = null),
                null !== this._itTail && (this._itTail._next = null),
                null !== this._removalsTail &&
                  (this._removalsTail._nextRemoved = null),
                null !== this._identityChangesTail &&
                  (this._identityChangesTail._nextIdentityChange = null);
            }),
            (t.prototype._reinsertAfter = function (t, e, n) {
              null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
              var r = t._prevRemoved,
                i = t._nextRemoved;
              return (
                null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
                null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
              );
            }),
            (t.prototype._moveAfter = function (t, e, n) {
              return (
                this._unlink(t),
                this._insertAfter(t, e, n),
                this._addToMoves(t, n),
                t
              );
            }),
            (t.prototype._addAfter = function (t, e, n) {
              return (
                this._insertAfter(t, e, n),
                (this._additionsTail =
                  null === this._additionsTail
                    ? (this._additionsHead = t)
                    : (this._additionsTail._nextAdded = t)),
                t
              );
            }),
            (t.prototype._insertAfter = function (t, e, n) {
              var r = null === e ? this._itHead : e._next;
              return (
                (t._next = r),
                (t._prev = e),
                null === r ? (this._itTail = t) : (r._prev = t),
                null === e ? (this._itHead = t) : (e._next = t),
                null === this._linkedRecords &&
                  (this._linkedRecords = new os()),
                this._linkedRecords.put(t),
                (t.currentIndex = n),
                t
              );
            }),
            (t.prototype._remove = function (t) {
              return this._addToRemovals(this._unlink(t));
            }),
            (t.prototype._unlink = function (t) {
              null !== this._linkedRecords && this._linkedRecords.remove(t);
              var e = t._prev,
                n = t._next;
              return (
                null === e ? (this._itHead = n) : (e._next = n),
                null === n ? (this._itTail = e) : (n._prev = e),
                t
              );
            }),
            (t.prototype._addToMoves = function (t, e) {
              return t.previousIndex === e
                ? t
                : ((this._movesTail =
                    null === this._movesTail
                      ? (this._movesHead = t)
                      : (this._movesTail._nextMoved = t)),
                  t);
            }),
            (t.prototype._addToRemovals = function (t) {
              return (
                null === this._unlinkedRecords &&
                  (this._unlinkedRecords = new os()),
                this._unlinkedRecords.put(t),
                (t.currentIndex = null),
                (t._nextRemoved = null),
                null === this._removalsTail
                  ? ((this._removalsTail = this._removalsHead = t),
                    (t._prevRemoved = null))
                  : ((t._prevRemoved = this._removalsTail),
                    (this._removalsTail = this._removalsTail._nextRemoved = t)),
                t
              );
            }),
            (t.prototype._addIdentityChange = function (t, e) {
              return (
                (t.item = e),
                (this._identityChangesTail =
                  null === this._identityChangesTail
                    ? (this._identityChangesHead = t)
                    : (this._identityChangesTail._nextIdentityChange = t)),
                t
              );
            }),
            t
          );
        })(),
        rs = (function () {
          return function (t, e) {
            (this.item = t),
              (this.trackById = e),
              (this.currentIndex = null),
              (this.previousIndex = null),
              (this._nextPrevious = null),
              (this._prev = null),
              (this._next = null),
              (this._prevDup = null),
              (this._nextDup = null),
              (this._prevRemoved = null),
              (this._nextRemoved = null),
              (this._nextAdded = null),
              (this._nextMoved = null),
              (this._nextIdentityChange = null);
          };
        })(),
        is = (function () {
          function t() {
            (this._head = null), (this._tail = null);
          }
          return (
            (t.prototype.add = function (t) {
              null === this._head
                ? ((this._head = this._tail = t),
                  (t._nextDup = null),
                  (t._prevDup = null))
                : ((this._tail._nextDup = t),
                  (t._prevDup = this._tail),
                  (t._nextDup = null),
                  (this._tail = t));
            }),
            (t.prototype.get = function (t, e) {
              var n;
              for (n = this._head; null !== n; n = n._nextDup)
                if ((null === e || e <= n.currentIndex) && uo(n.trackById, t))
                  return n;
              return null;
            }),
            (t.prototype.remove = function (t) {
              var e = t._prevDup,
                n = t._nextDup;
              return (
                null === e ? (this._head = n) : (e._nextDup = n),
                null === n ? (this._tail = e) : (n._prevDup = e),
                null === this._head
              );
            }),
            t
          );
        })(),
        os = (function () {
          function t() {
            this.map = new Map();
          }
          return (
            (t.prototype.put = function (t) {
              var e = t.trackById,
                n = this.map.get(e);
              n || ((n = new is()), this.map.set(e, n)), n.add(t);
            }),
            (t.prototype.get = function (t, e) {
              var n = this.map.get(t);
              return n ? n.get(t, e) : null;
            }),
            (t.prototype.remove = function (t) {
              var e = t.trackById;
              return this.map.get(e).remove(t) && this.map.delete(e), t;
            }),
            Object.defineProperty(t.prototype, 'isEmpty', {
              get: function () {
                return 0 === this.map.size;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.clear = function () {
              this.map.clear();
            }),
            t
          );
        })();
      function ss(t, e, n) {
        var r = t.previousIndex;
        if (null === r) return r;
        var i = 0;
        return n && r < n.length && (i = n[r]), r + e + i;
      }
      var as = (function () {
          function t() {}
          return (
            (t.prototype.supports = function (t) {
              return t instanceof Map || co(t);
            }),
            (t.prototype.create = function () {
              return new us();
            }),
            t
          );
        })(),
        us = (function () {
          function t() {
            (this._records = new Map()),
              (this._mapHead = null),
              (this._appendAfter = null),
              (this._previousMapHead = null),
              (this._changesHead = null),
              (this._changesTail = null),
              (this._additionsHead = null),
              (this._additionsTail = null),
              (this._removalsHead = null),
              (this._removalsTail = null);
          }
          return (
            Object.defineProperty(t.prototype, 'isDirty', {
              get: function () {
                return (
                  null !== this._additionsHead ||
                  null !== this._changesHead ||
                  null !== this._removalsHead
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.forEachItem = function (t) {
              var e;
              for (e = this._mapHead; null !== e; e = e._next) t(e);
            }),
            (t.prototype.forEachPreviousItem = function (t) {
              var e;
              for (e = this._previousMapHead; null !== e; e = e._nextPrevious)
                t(e);
            }),
            (t.prototype.forEachChangedItem = function (t) {
              var e;
              for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
            }),
            (t.prototype.forEachAddedItem = function (t) {
              var e;
              for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
            }),
            (t.prototype.forEachRemovedItem = function (t) {
              var e;
              for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
            }),
            (t.prototype.diff = function (t) {
              if (t) {
                if (!(t instanceof Map || co(t)))
                  throw new Error(
                    "Error trying to diff '" +
                      kt(t) +
                      "'. Only maps and objects are allowed"
                  );
              } else t = new Map();
              return this.check(t) ? this : null;
            }),
            (t.prototype.onDestroy = function () {}),
            (t.prototype.check = function (t) {
              var e = this;
              this._reset();
              var n = this._mapHead;
              if (
                ((this._appendAfter = null),
                this._forEach(t, function (t, r) {
                  if (n && n.key === r)
                    e._maybeAddToChanges(n, t),
                      (e._appendAfter = n),
                      (n = n._next);
                  else {
                    var i = e._getOrCreateRecordForKey(r, t);
                    n = e._insertBeforeOrAppend(n, i);
                  }
                }),
                n)
              ) {
                n._prev && (n._prev._next = null), (this._removalsHead = n);
                for (var r = n; null !== r; r = r._nextRemoved)
                  r === this._mapHead && (this._mapHead = null),
                    this._records.delete(r.key),
                    (r._nextRemoved = r._next),
                    (r.previousValue = r.currentValue),
                    (r.currentValue = null),
                    (r._prev = null),
                    (r._next = null);
              }
              return (
                this._changesTail && (this._changesTail._nextChanged = null),
                this._additionsTail && (this._additionsTail._nextAdded = null),
                this.isDirty
              );
            }),
            (t.prototype._insertBeforeOrAppend = function (t, e) {
              if (t) {
                var n = t._prev;
                return (
                  (e._next = t),
                  (e._prev = n),
                  (t._prev = e),
                  n && (n._next = e),
                  t === this._mapHead && (this._mapHead = e),
                  (this._appendAfter = t),
                  t
                );
              }
              return (
                this._appendAfter
                  ? ((this._appendAfter._next = e),
                    (e._prev = this._appendAfter))
                  : (this._mapHead = e),
                (this._appendAfter = e),
                null
              );
            }),
            (t.prototype._getOrCreateRecordForKey = function (t, e) {
              if (this._records.has(t)) {
                var n = this._records.get(t);
                this._maybeAddToChanges(n, e);
                var r = n._prev,
                  i = n._next;
                return (
                  r && (r._next = i),
                  i && (i._prev = r),
                  (n._next = null),
                  (n._prev = null),
                  n
                );
              }
              var o = new ls(t);
              return (
                this._records.set(t, o),
                (o.currentValue = e),
                this._addToAdditions(o),
                o
              );
            }),
            (t.prototype._reset = function () {
              if (this.isDirty) {
                var t = void 0;
                for (
                  this._previousMapHead = this._mapHead,
                    t = this._previousMapHead;
                  null !== t;
                  t = t._next
                )
                  t._nextPrevious = t._next;
                for (t = this._changesHead; null !== t; t = t._nextChanged)
                  t.previousValue = t.currentValue;
                for (t = this._additionsHead; null != t; t = t._nextAdded)
                  t.previousValue = t.currentValue;
                (this._changesHead = this._changesTail = null),
                  (this._additionsHead = this._additionsTail = null),
                  (this._removalsHead = null);
              }
            }),
            (t.prototype._maybeAddToChanges = function (t, e) {
              uo(e, t.currentValue) ||
                ((t.previousValue = t.currentValue),
                (t.currentValue = e),
                this._addToChanges(t));
            }),
            (t.prototype._addToAdditions = function (t) {
              null === this._additionsHead
                ? (this._additionsHead = this._additionsTail = t)
                : ((this._additionsTail._nextAdded = t),
                  (this._additionsTail = t));
            }),
            (t.prototype._addToChanges = function (t) {
              null === this._changesHead
                ? (this._changesHead = this._changesTail = t)
                : ((this._changesTail._nextChanged = t),
                  (this._changesTail = t));
            }),
            (t.prototype._forEach = function (t, e) {
              t instanceof Map
                ? t.forEach(e)
                : Object.keys(t).forEach(function (n) {
                    return e(t[n], n);
                  });
            }),
            t
          );
        })(),
        ls = (function () {
          return function (t) {
            (this.key = t),
              (this.previousValue = null),
              (this.currentValue = null),
              (this._nextPrevious = null),
              (this._next = null),
              (this._prev = null),
              (this._nextAdded = null),
              (this._nextRemoved = null),
              (this._nextChanged = null);
          };
        })(),
        cs = (function () {
          function t(t) {
            this.factories = t;
          }
          return (
            (t.create = function (e, n) {
              if (null != n) {
                var r = n.factories.slice();
                e = e.concat(r);
              }
              return new t(e);
            }),
            (t.extend = function (e) {
              return {
                provide: t,
                useFactory: function (n) {
                  if (!n)
                    throw new Error(
                      'Cannot extend IterableDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new dt(), new pt()]],
              };
            }),
            (t.prototype.find = function (t) {
              var e,
                n = this.factories.find(function (e) {
                  return e.supports(t);
                });
              if (null != n) return n;
              throw new Error(
                "Cannot find a differ supporting object '" +
                  t +
                  "' of type '" +
                  ((e = t).name || typeof e) +
                  "'"
              );
            }),
            (t.ɵprov = mt({
              token: t,
              providedIn: 'root',
              factory: function () {
                return new t([new ts()]);
              },
            })),
            t
          );
        })(),
        fs = (function () {
          function t(t) {
            this.factories = t;
          }
          return (
            (t.create = function (e, n) {
              if (n) {
                var r = n.factories.slice();
                e = e.concat(r);
              }
              return new t(e);
            }),
            (t.extend = function (e) {
              return {
                provide: t,
                useFactory: function (n) {
                  if (!n)
                    throw new Error(
                      'Cannot extend KeyValueDiffers without a parent injector'
                    );
                  return t.create(e, n);
                },
                deps: [[t, new dt(), new pt()]],
              };
            }),
            (t.prototype.find = function (t) {
              var e = this.factories.find(function (e) {
                return e.supports(t);
              });
              if (e) return e;
              throw new Error(
                "Cannot find a differ supporting object '" + t + "'"
              );
            }),
            (t.ɵprov = mt({
              token: t,
              providedIn: 'root',
              factory: function () {
                return new t([new as()]);
              },
            })),
            t
          );
        })(),
        ps = [new as()],
        hs = new cs([new ts()]),
        ds = new fs(ps),
        ys = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return vs(t, Qo);
            }),
            t
          );
        })(),
        vs = function (t, e) {
          return Li(t, e, He(), Me());
        },
        ms = (function () {
          function t() {}
          return (
            (t.__NG_ELEMENT_ID__ = function () {
              return gs(t, Qo);
            }),
            t
          );
        })(),
        gs = function (t, e) {
          return Mi(t, e, He(), Me());
        },
        _s = {},
        ws = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.ngModule = e), n;
          }
          return (
            i(e, t),
            (e.prototype.resolveComponentFactory = function (t) {
              var e = xe(t);
              return new Es(e, this.ngModule);
            }),
            e
          );
        })(Wo);
      function bs(t) {
        var e = [];
        for (var n in t)
          t.hasOwnProperty(n) && e.push({ propName: t[n], templateName: n });
        return e;
      }
      var Ss = new Wt('SCHEDULER_TOKEN', {
          providedIn: 'root',
          factory: function () {
            return Tn;
          },
        }),
        Es = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.componentDef = e),
              (r.ngModule = n),
              (r.componentType = e.type),
              (r.selector = e.selectors.map(_r).join(',')),
              (r.ngContentSelectors = e.ngContentSelectors
                ? e.ngContentSelectors
                : []),
              (r.isBoundToModule = !!n),
              r
            );
          }
          return (
            i(e, t),
            Object.defineProperty(e.prototype, 'inputs', {
              get: function () {
                return bs(this.componentDef.inputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'outputs', {
              get: function () {
                return bs(this.componentDef.outputs);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.create = function (t, e, n, r) {
              var i,
                o,
                s = (r = r || this.ngModule)
                  ? (function (t, e) {
                      return {
                        get: function (n, r, i) {
                          var o = t.get(n, _s, i);
                          return o !== _s || r === _s ? o : e.get(n, r, i);
                        },
                      };
                    })(t, r.injector)
                  : t,
                a = s.get(Zo, dn),
                u = s.get(Jo, null),
                l = a.createRenderer(null, this.componentDef),
                c = this.componentDef.selectors[0][0] || 'div',
                f = n
                  ? (function (t, e, n) {
                      if (hn(t))
                        return t.selectRootElement(e, n === de.ShadowDom);
                      var r = 'string' == typeof e ? t.querySelector(e) : e;
                      return (r.textContent = ''), r;
                    })(l, n, this.componentDef.encapsulation)
                  : Pr(
                      c,
                      a.createRenderer(null, this.componentDef),
                      (function (t) {
                        var e = t.toLowerCase();
                        return 'svg' === e
                          ? 'http://www.w3.org/2000/svg'
                          : 'math' === e
                          ? 'http://www.w3.org/1998/MathML/'
                          : null;
                      })(c)
                    ),
                p = this.componentDef.onPush ? 576 : 528,
                h =
                  'string' == typeof n &&
                  /^#root-ng-internal-isolated-\d+/.test(n),
                d = {
                  components: [],
                  scheduler: Tn,
                  clean: oi,
                  playerHandler: null,
                  flags: 0,
                },
                y = Lr(0, -1, null, 1, 0, null, null, null, null, null),
                v = Rr(null, y, d, p, null, null, a, l, u, s);
              $e(v, null);
              try {
                var m = (function (t, e, n, r, i, o) {
                  var s = n[1];
                  n[19] = t;
                  var a = Or(s, null, 0, 3, null, null),
                    u = (a.mergedAttrs = e.hostAttrs);
                  null !== u &&
                    (oo(a, u),
                    null !== t &&
                      (yn(i, t, u),
                      null !== a.classes && Ri(i, t, a.classes),
                      null !== a.styles && Pi(i, t, a.styles)));
                  var l = r.createRenderer(t, e),
                    c = Rr(
                      n,
                      Fr(e),
                      null,
                      e.onPush ? 64 : 16,
                      n[19],
                      a,
                      r,
                      l,
                      void 0
                    );
                  return (
                    s.firstCreatePass &&
                      (Dn(On(a, n), s, e.type), zr(s, a), Qr(a, n.length, 1)),
                    ti(n, c),
                    (n[19] = c)
                  );
                })(f, this.componentDef, v, a, l);
                if (f)
                  if (n) yn(l, f, ['ng-version', Xo.full]);
                  else {
                    var g = (function (t) {
                        for (var e = [], n = [], r = 1, i = 2; r < t.length; ) {
                          var o = t[r];
                          if ('string' == typeof o)
                            2 === i
                              ? '' !== o && e.push(o, t[++r])
                              : 8 === i && n.push(o);
                          else {
                            if (!yr(i)) break;
                            i = o;
                          }
                          r++;
                        }
                        return { attrs: e, classes: n };
                      })(this.componentDef.selectors[0]),
                      _ = g.attrs,
                      w = g.classes;
                    _ && yn(l, f, _),
                      w && w.length > 0 && Ri(l, f, w.join(' '));
                  }
                (o = er(v[1], 0)),
                  e &&
                    (o.projection = e.map(function (t) {
                      return Array.from(t);
                    })),
                  (i = (function (t, e, n, r, i) {
                    var o = n[1],
                      s = (function (t, e, n) {
                        var r = He();
                        t.firstCreatePass &&
                          (n.providersResolver && n.providersResolver(n),
                          Br(t, r, 1),
                          Kr(t, e, n));
                        var i = Hn(e, t, e.length - 1, r);
                        ur(i, e);
                        var o = tr(r, e);
                        return o && ur(o, e), i;
                      })(o, n, e);
                    r.components.push(s),
                      (t[8] = s),
                      i &&
                        i.forEach(function (t) {
                          return t(s, e);
                        }),
                      e.contentQueries && e.contentQueries(1, s, n.length - 1);
                    var a = He();
                    if (
                      o.firstCreatePass &&
                      (null !== e.hostBindings || null !== e.hostAttrs)
                    ) {
                      rn(a.index - 19);
                      var u = n[1];
                      Hr(u, e), Vr(u, n, e.hostVars), qr(e, s);
                    }
                    return s;
                  })(m, this.componentDef, v, d, [Vo])),
                  Ir(y, v, null);
              } finally {
                en();
              }
              var b = new Cs(this.componentType, i, Fi(Qo, o, v), v, o);
              return (n && !h) || (b.hostView._tViewNode.child = o), b;
            }),
            e
          );
        })(Bo),
        Cs = (function (t) {
          function e(e, n, r, i, o) {
            var s,
              a,
              u,
              l = t.call(this) || this;
            return (
              (l.location = r),
              (l._rootLView = i),
              (l._tNode = o),
              (l.destroyCbs = []),
              (l.instance = n),
              (l.hostView = l.changeDetectorRef = new Di(i)),
              (l.hostView._tViewNode =
                (null,
                -1,
                (a = i),
                null == (u = (s = i[1]).node) &&
                  (s.node = u = Mr(0, null, 2, -1, null, null)),
                (a[6] = u))),
              (l.componentType = e),
              l
            );
          }
          return (
            i(e, t),
            Object.defineProperty(e.prototype, 'injector', {
              get: function () {
                return new Bn(this._tNode, this._rootLView);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.destroy = function () {
              this.destroyCbs &&
                (this.destroyCbs.forEach(function (t) {
                  return t();
                }),
                (this.destroyCbs = null),
                !this.hostView.destroyed && this.hostView.destroy());
            }),
            (e.prototype.onDestroy = function (t) {
              this.destroyCbs && this.destroyCbs.push(t);
            }),
            e
          );
        })(qo),
        Ts = void 0,
        xs = [
          'en',
          [['a', 'p'], ['AM', 'PM'], Ts],
          [['AM', 'PM'], Ts, Ts],
          [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            [
              'Sunday',
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
          ],
          Ts,
          [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
            [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
            ],
          ],
          Ts,
          [
            ['B', 'A'],
            ['BC', 'AD'],
            ['Before Christ', 'Anno Domini'],
          ],
          0,
          [6, 0],
          ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
          ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
          ['{1}, {0}', Ts, "{1} 'at' {0}", Ts],
          [
            '.',
            ',',
            ';',
            '%',
            '+',
            '-',
            'E',
            '\xd7',
            '\u2030',
            '\u221e',
            'NaN',
            ':',
          ],
          ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
          'USD',
          '$',
          'US Dollar',
          {},
          function (t) {
            var e = Math.floor(Math.abs(t)),
              n = t.toString().replace(/^[^.]*\.?/, '').length;
            return 1 === e && 0 === n ? 1 : 5;
          },
        ],
        ks = {};
      function As(t) {
        return (
          t in ks ||
            (ks[t] =
              Lt.ng &&
              Lt.ng.common &&
              Lt.ng.common.locales &&
              Lt.ng.common.locales[t]),
          ks[t]
        );
      }
      var Ps = (function (t) {
        return (
          (t[(t.LocaleId = 0)] = 'LocaleId'),
          (t[(t.DayPeriodsFormat = 1)] = 'DayPeriodsFormat'),
          (t[(t.DayPeriodsStandalone = 2)] = 'DayPeriodsStandalone'),
          (t[(t.DaysFormat = 3)] = 'DaysFormat'),
          (t[(t.DaysStandalone = 4)] = 'DaysStandalone'),
          (t[(t.MonthsFormat = 5)] = 'MonthsFormat'),
          (t[(t.MonthsStandalone = 6)] = 'MonthsStandalone'),
          (t[(t.Eras = 7)] = 'Eras'),
          (t[(t.FirstDayOfWeek = 8)] = 'FirstDayOfWeek'),
          (t[(t.WeekendRange = 9)] = 'WeekendRange'),
          (t[(t.DateFormat = 10)] = 'DateFormat'),
          (t[(t.TimeFormat = 11)] = 'TimeFormat'),
          (t[(t.DateTimeFormat = 12)] = 'DateTimeFormat'),
          (t[(t.NumberSymbols = 13)] = 'NumberSymbols'),
          (t[(t.NumberFormats = 14)] = 'NumberFormats'),
          (t[(t.CurrencyCode = 15)] = 'CurrencyCode'),
          (t[(t.CurrencySymbol = 16)] = 'CurrencySymbol'),
          (t[(t.CurrencyName = 17)] = 'CurrencyName'),
          (t[(t.Currencies = 18)] = 'Currencies'),
          (t[(t.PluralCase = 19)] = 'PluralCase'),
          (t[(t.ExtraData = 20)] = 'ExtraData'),
          t
        );
      })({});
      function Rs(t) {
        var e, n;
        (n = 'Expected localeId to be defined'),
          null == (e = t) &&
            (function (t, e, n, r) {
              throw new Error(
                'ASSERTION ERROR: ' +
                  t +
                  ' [Expected=> null != ' +
                  e +
                  ' <=Actual]'
              );
            })(n, e),
          'string' == typeof t && t.toLowerCase().replace(/_/g, '-');
      }
      var Os = new Map(),
        Is = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            (r._parent = n),
              (r._bootstrapComponents = []),
              (r.injector = r),
              (r.destroyCbs = []),
              (r.componentFactoryResolver = new ws(r));
            var i = Ae(e),
              o = e[qt] || null;
            return (
              o && Rs(o),
              (r._bootstrapComponents = kn(i.bootstrap)),
              (r._r3Injector = Ki(
                e,
                n,
                [
                  { provide: ie, useValue: r },
                  { provide: Wo, useValue: r.componentFactoryResolver },
                ],
                kt(e)
              )),
              (r.instance = r.get(e)),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.get = function (t, e, n) {
              return (
                void 0 === e && (e = to.THROW_IF_NOT_FOUND),
                void 0 === n && (n = yt.Default),
                t === to || t === ie || t === Qt
                  ? this
                  : this._r3Injector.get(t, e, n)
              );
            }),
            (e.prototype.destroy = function () {
              var t = this._r3Injector;
              !t.destroyed && t.destroy(),
                this.destroyCbs.forEach(function (t) {
                  return t();
                }),
                (this.destroyCbs = null);
            }),
            (e.prototype.onDestroy = function (t) {
              this.destroyCbs.push(t);
            }),
            e
          );
        })(ie),
        Ns = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n.moduleType = e),
              null !== Ae(e) &&
                (function t(e) {
                  if (null !== e.ɵmod.id) {
                    var n = e.ɵmod.id;
                    (function (t, e, n) {
                      if (e && e !== n)
                        throw new Error(
                          'Duplicate module registered for ' +
                            t +
                            ' - ' +
                            kt(e) +
                            ' vs ' +
                            kt(e.name)
                        );
                    })(n, Os.get(n), e),
                      Os.set(n, e);
                  }
                  var r = e.ɵmod.imports;
                  r instanceof Function && (r = r()),
                    r &&
                      r.forEach(function (e) {
                        return t(e);
                      });
                })(e),
              n
            );
          }
          return (
            i(e, t),
            (e.prototype.create = function (t) {
              return new Is(this.moduleType, t);
            }),
            e
          );
        })(oe),
        js = (function (t) {
          function e(e) {
            void 0 === e && (e = !1);
            var n = t.call(this) || this;
            return (n.__isAsync = e), n;
          }
          return (
            i(e, t),
            (e.prototype.emit = function (e) {
              t.prototype.next.call(this, e);
            }),
            (e.prototype.subscribe = function (e, n, r) {
              var i,
                o = function (t) {
                  return null;
                },
                s = function () {
                  return null;
                };
              e && 'object' == typeof e
                ? ((i = this.__isAsync
                    ? function (t) {
                        setTimeout(function () {
                          return e.next(t);
                        });
                      }
                    : function (t) {
                        e.next(t);
                      }),
                  e.error &&
                    (o = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return e.error(t);
                          });
                        }
                      : function (t) {
                          e.error(t);
                        }),
                  e.complete &&
                    (s = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return e.complete();
                          });
                        }
                      : function () {
                          e.complete();
                        }))
                : ((i = this.__isAsync
                    ? function (t) {
                        setTimeout(function () {
                          return e(t);
                        });
                      }
                    : function (t) {
                        e(t);
                      }),
                  n &&
                    (o = this.__isAsync
                      ? function (t) {
                          setTimeout(function () {
                            return n(t);
                          });
                        }
                      : function (t) {
                          n(t);
                        }),
                  r &&
                    (s = this.__isAsync
                      ? function () {
                          setTimeout(function () {
                            return r();
                          });
                        }
                      : function () {
                          r();
                        }));
              var a = t.prototype.subscribe.call(this, i, o, s);
              return e instanceof d && e.add(a), a;
            }),
            e
          );
        })(N);
      function Ds() {
        return this._results[ao()]();
      }
      var Fs = (function () {
          function t() {
            (this.dirty = !0),
              (this._results = []),
              (this.changes = new js()),
              (this.length = 0);
            var e = ao(),
              n = t.prototype;
            n[e] || (n[e] = Ds);
          }
          return (
            (t.prototype.map = function (t) {
              return this._results.map(t);
            }),
            (t.prototype.filter = function (t) {
              return this._results.filter(t);
            }),
            (t.prototype.find = function (t) {
              return this._results.find(t);
            }),
            (t.prototype.reduce = function (t, e) {
              return this._results.reduce(t, e);
            }),
            (t.prototype.forEach = function (t) {
              this._results.forEach(t);
            }),
            (t.prototype.some = function (t) {
              return this._results.some(t);
            }),
            (t.prototype.toArray = function () {
              return this._results.slice();
            }),
            (t.prototype.toString = function () {
              return this._results.toString();
            }),
            (t.prototype.reset = function (t) {
              (this._results = (function t(e, n) {
                void 0 === n && (n = e);
                for (var r = 0; r < e.length; r++) {
                  var i = e[r];
                  Array.isArray(i)
                    ? (n === e && (n = e.slice(0, r)), t(i, n))
                    : n !== e && n.push(i);
                }
                return n;
              })(t)),
                (this.dirty = !1),
                (this.length = this._results.length),
                (this.last = this._results[this.length - 1]),
                (this.first = this._results[0]);
            }),
            (t.prototype.notifyOnChanges = function () {
              this.changes.emit(this);
            }),
            (t.prototype.setDirty = function () {
              this.dirty = !0;
            }),
            (t.prototype.destroy = function () {
              this.changes.complete(), this.changes.unsubscribe();
            }),
            t
          );
        })(),
        Ls = (function () {
          function t(t) {
            (this.queryList = t), (this.matches = null);
          }
          return (
            (t.prototype.clone = function () {
              return new t(this.queryList);
            }),
            (t.prototype.setDirty = function () {
              this.queryList.setDirty();
            }),
            t
          );
        })(),
        Ms = (function () {
          function t(t) {
            void 0 === t && (t = []), (this.queries = t);
          }
          return (
            (t.prototype.createEmbeddedView = function (e) {
              var n = e.queries;
              if (null !== n) {
                for (
                  var r =
                      null !== e.contentQueries
                        ? e.contentQueries[0]
                        : n.length,
                    i = [],
                    o = 0;
                  o < r;
                  o++
                ) {
                  var s = n.getByIndex(o);
                  i.push(this.queries[s.indexInDeclarationView].clone());
                }
                return new t(i);
              }
              return null;
            }),
            (t.prototype.insertView = function (t) {
              this.dirtyQueriesWithMatches(t);
            }),
            (t.prototype.detachView = function (t) {
              this.dirtyQueriesWithMatches(t);
            }),
            (t.prototype.dirtyQueriesWithMatches = function (t) {
              for (var e = 0; e < this.queries.length; e++)
                null !== Zs(t, e).matches && this.queries[e].setDirty();
            }),
            t
          );
        })(),
        Us = (function () {
          return function (t, e, n, r) {
            void 0 === r && (r = null),
              (this.predicate = t),
              (this.descendants = e),
              (this.isStatic = n),
              (this.read = r);
          };
        })(),
        Hs = (function () {
          function t(t) {
            void 0 === t && (t = []), (this.queries = t);
          }
          return (
            (t.prototype.elementStart = function (t, e) {
              for (var n = 0; n < this.queries.length; n++)
                this.queries[n].elementStart(t, e);
            }),
            (t.prototype.elementEnd = function (t) {
              for (var e = 0; e < this.queries.length; e++)
                this.queries[e].elementEnd(t);
            }),
            (t.prototype.embeddedTView = function (e) {
              for (var n = null, r = 0; r < this.length; r++) {
                var i = null !== n ? n.length : 0,
                  o = this.getByIndex(r).embeddedTView(e, i);
                o &&
                  ((o.indexInDeclarationView = r),
                  null !== n ? n.push(o) : (n = [o]));
              }
              return null !== n ? new t(n) : null;
            }),
            (t.prototype.template = function (t, e) {
              for (var n = 0; n < this.queries.length; n++)
                this.queries[n].template(t, e);
            }),
            (t.prototype.getByIndex = function (t) {
              return this.queries[t];
            }),
            Object.defineProperty(t.prototype, 'length', {
              get: function () {
                return this.queries.length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.track = function (t) {
              this.queries.push(t);
            }),
            t
          );
        })(),
        Vs = (function () {
          function t(t, e) {
            void 0 === e && (e = -1),
              (this.metadata = t),
              (this.matches = null),
              (this.indexInDeclarationView = -1),
              (this.crossesNgTemplate = !1),
              (this._appliesToNextNode = !0),
              (this._declarationNodeIndex = e);
          }
          return (
            (t.prototype.elementStart = function (t, e) {
              this.isApplyingToNode(e) && this.matchTNode(t, e);
            }),
            (t.prototype.elementEnd = function (t) {
              this._declarationNodeIndex === t.index &&
                (this._appliesToNextNode = !1);
            }),
            (t.prototype.template = function (t, e) {
              this.elementStart(t, e);
            }),
            (t.prototype.embeddedTView = function (e, n) {
              return this.isApplyingToNode(e)
                ? ((this.crossesNgTemplate = !0),
                  this.addMatch(-e.index, n),
                  new t(this.metadata))
                : null;
            }),
            (t.prototype.isApplyingToNode = function (t) {
              if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                for (
                  var e = this._declarationNodeIndex, n = t.parent;
                  null !== n && 4 === n.type && n.index !== e;

                )
                  n = n.parent;
                return e === (null !== n ? n.index : -1);
              }
              return this._appliesToNextNode;
            }),
            (t.prototype.matchTNode = function (t, e) {
              if (Array.isArray(this.metadata.predicate))
                for (var n = this.metadata.predicate, r = 0; r < n.length; r++)
                  this.matchTNodeWithReadOption(t, e, qs(e, n[r]));
              else {
                var i = this.metadata.predicate;
                i === ys
                  ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1)
                  : this.matchTNodeWithReadOption(t, e, Un(e, t, i, !1, !1));
              }
            }),
            (t.prototype.matchTNodeWithReadOption = function (t, e, n) {
              if (null !== n) {
                var r = this.metadata.read;
                if (null !== r)
                  if (r === Qo || r === ms || (r === ys && 0 === e.type))
                    this.addMatch(e.index, -2);
                  else {
                    var i = Un(e, t, r, !1, !1);
                    null !== i && this.addMatch(e.index, i);
                  }
                else this.addMatch(e.index, n);
              }
            }),
            (t.prototype.addMatch = function (t, e) {
              null === this.matches
                ? (this.matches = [t, e])
                : this.matches.push(t, e);
            }),
            t
          );
        })();
      function qs(t, e) {
        var n = t.localNames;
        if (null !== n)
          for (var r = 0; r < n.length; r += 2) if (n[r] === e) return n[r + 1];
        return null;
      }
      function Bs(t, e, n, r) {
        return -1 === n
          ? (function (t, e) {
              return 3 === t.type || 4 === t.type
                ? Fi(Qo, t, e)
                : 0 === t.type
                ? Li(ys, Qo, t, e)
                : null;
            })(e, t)
          : -2 === n
          ? (function (t, e, n) {
              return n === Qo
                ? Fi(Qo, e, t)
                : n === ys
                ? Li(ys, Qo, e, t)
                : n === ms
                ? Mi(ms, Qo, e, t)
                : void 0;
            })(t, e, r)
          : Hn(t, t[1], n, e);
      }
      function zs(t, e, n, r) {
        var i = e[5].queries[r];
        if (null === i.matches) {
          for (
            var o = t.data, s = n.matches, a = [], u = 0;
            u < s.length;
            u += 2
          ) {
            var l = s[u];
            a.push(l < 0 ? null : Bs(e, o[l], s[u + 1], n.metadata.read));
          }
          i.matches = a;
        }
        return i.matches;
      }
      function Ws(t) {
        var e = Me(),
          n = Ue(),
          r = Ke();
        Ze(r + 1);
        var i = Zs(n, r);
        if (t.dirty && ir(e) === i.metadata.isStatic) {
          if (null === i.matches) t.reset([]);
          else {
            var o = i.crossesNgTemplate
              ? (function t(e, n, r, i) {
                  var o = e.queries.getByIndex(r),
                    s = o.matches;
                  if (null !== s)
                    for (var a = zs(e, n, o, r), u = 0; u < s.length; u += 2) {
                      var l = s[u];
                      if (l > 0) i.push(a[u / 2]);
                      else {
                        for (
                          var c = s[u + 1], f = n[-l], p = 9;
                          p < f.length;
                          p++
                        )
                          (y = f[p])[17] === y[3] && t(y[1], y, c, i);
                        if (null !== f[5])
                          for (var h = f[5], d = 0; d < h.length; d++) {
                            var y;
                            t((y = h[d])[1], y, c, i);
                          }
                      }
                    }
                  return i;
                })(n, e, r, [])
              : zs(n, e, i, r);
            t.reset(o), t.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Qs(t, e, n, r, i, o) {
        t.firstCreatePass &&
          ((function (t, e, n) {
            null === t.queries && (t.queries = new Hs()),
              t.queries.track(new Vs(e, -1));
          })(t, new Us(n, r, o, i)),
          o && (t.staticViewQueries = !0)),
          (function (t, e) {
            var n = new Fs();
            !(function (t, e, n, r) {
              var i = si(e);
              i.push(n), t.firstCreatePass && ai(t).push(r, i.length - 1);
            })(t, e, n, n.destroy),
              null === e[5] && (e[5] = new Ms()),
              e[5].queries.push(new Ls(n));
          })(t, e);
      }
      function Ks() {
        return (t = Me()), (e = Ke()), t[5].queries[e].queryList;
        var t, e;
      }
      function Zs(t, e) {
        return t.queries.getByIndex(e);
      }
      var Gs = new Wt('Application Initializer'),
        $s = (function () {
          function t(t) {
            var e = this;
            (this.appInits = t),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise(function (t, n) {
                (e.resolve = t), (e.reject = n);
              }));
          }
          return (
            (t.prototype.runInitializers = function () {
              var t = this;
              if (!this.initialized) {
                var e = [],
                  n = function () {
                    (t.done = !0), t.resolve();
                  };
                if (this.appInits)
                  for (var r = 0; r < this.appInits.length; r++) {
                    var i = this.appInits[r]();
                    wo(i) && e.push(i);
                  }
                Promise.all(e)
                  .then(function () {
                    n();
                  })
                  .catch(function (e) {
                    t.reject(e);
                  }),
                  0 === e.length && n(),
                  (this.initialized = !0);
              }
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(Gs, 8));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        Ys = new Wt('AppId'),
        Js = {
          provide: Ys,
          useFactory: function () {
            return '' + Xs() + Xs() + Xs();
          },
          deps: [],
        };
      function Xs() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      var ta = new Wt('Platform Initializer'),
        ea = new Wt('Platform ID'),
        na = new Wt('appBootstrapListener'),
        ra = (function () {
          function t() {}
          return (
            (t.prototype.log = function (t) {
              console.log(t);
            }),
            (t.prototype.warn = function (t) {
              console.warn(t);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        ia = new Wt('LocaleId'),
        oa = new Wt('DefaultCurrencyCode'),
        sa = (function () {
          return function (t, e) {
            (this.ngModuleFactory = t), (this.componentFactories = e);
          };
        })(),
        aa = function (t) {
          return new Ns(t);
        },
        ua = aa,
        la = function (t) {
          return Promise.resolve(aa(t));
        },
        ca = function (t) {
          var e = aa(t),
            n = kn(Ae(t).declarations).reduce(function (t, e) {
              var n = xe(e);
              return n && t.push(new Es(n)), t;
            }, []);
          return new sa(e, n);
        },
        fa = ca,
        pa = function (t) {
          return Promise.resolve(ca(t));
        },
        ha = (function () {
          function t() {
            (this.compileModuleSync = ua),
              (this.compileModuleAsync = la),
              (this.compileModuleAndAllComponentsSync = fa),
              (this.compileModuleAndAllComponentsAsync = pa);
          }
          return (
            (t.prototype.clearCache = function () {}),
            (t.prototype.clearCacheFor = function (t) {}),
            (t.prototype.getModuleId = function (t) {}),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        da = new Wt('compilerOptions'),
        ya = (function () {
          return Promise.resolve(0);
        })();
      function va(t) {
        'undefined' == typeof Zone
          ? ya.then(function () {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      var ma = (function () {
        function t(t) {
          var e,
            n,
            r = t.enableLongStackTrace,
            i = void 0 !== r && r,
            o = t.shouldCoalesceEventChangeDetection,
            s = void 0 !== o && o;
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new js(!1)),
            (this.onMicrotaskEmpty = new js(!1)),
            (this.onStable = new js(!1)),
            (this.onError = new js(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec &&
              (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            i &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = s),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              var t = Lt.requestAnimationFrame,
                e = Lt.cancelAnimationFrame;
              if ('undefined' != typeof Zone && t && e) {
                var n = t[Zone.__symbol__('OriginalDelegate')];
                n && (t = n);
                var r = e[Zone.__symbol__('OriginalDelegate')];
                r && (e = r);
              }
              return {
                nativeRequestAnimationFrame: t,
                nativeCancelAnimationFrame: e,
              };
            })().nativeRequestAnimationFrame),
            (n =
              !!(e = this).shouldCoalesceEventChangeDetection &&
              e.nativeRequestAnimationFrame &&
              function () {
                !(function (t) {
                  -1 === t.lastRequestAnimationFrameId &&
                    ((t.lastRequestAnimationFrameId =
                      t.nativeRequestAnimationFrame.call(Lt, function () {
                        (t.lastRequestAnimationFrameId = -1), ba(t), wa(t);
                      })),
                    ba(t));
                })(e);
              }),
            (e._inner = e._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0, maybeDelayChangeDetection: n },
              onInvokeTask: function (t, r, i, o, s, a) {
                try {
                  return Sa(e), t.invokeTask(i, o, s, a);
                } finally {
                  n && 'eventTask' === o.type && n(), Ea(e);
                }
              },
              onInvoke: function (t, n, r, i, o, s, a) {
                try {
                  return Sa(e), t.invoke(r, i, o, s, a);
                } finally {
                  Ea(e);
                }
              },
              onHasTask: function (t, n, r, i) {
                t.hasTask(r, i),
                  n === r &&
                    ('microTask' == i.change
                      ? ((e._hasPendingMicrotasks = i.microTask), ba(e), wa(e))
                      : 'macroTask' == i.change &&
                        (e.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: function (t, n, r, i) {
                return (
                  t.handleError(r, i),
                  e.runOutsideAngular(function () {
                    return e.onError.emit(i);
                  }),
                  !1
                );
              },
            }));
        }
        return (
          (t.isInAngularZone = function () {
            return !0 === Zone.current.get('isAngularZone');
          }),
          (t.assertInAngularZone = function () {
            if (!t.isInAngularZone())
              throw new Error('Expected to be in Angular Zone, but it is not!');
          }),
          (t.assertNotInAngularZone = function () {
            if (t.isInAngularZone())
              throw new Error('Expected to not be in Angular Zone, but it is!');
          }),
          (t.prototype.run = function (t, e, n) {
            return this._inner.run(t, e, n);
          }),
          (t.prototype.runTask = function (t, e, n, r) {
            var i = this._inner,
              o = i.scheduleEventTask('NgZoneEvent: ' + r, t, _a, ga, ga);
            try {
              return i.runTask(o, e, n);
            } finally {
              i.cancelTask(o);
            }
          }),
          (t.prototype.runGuarded = function (t, e, n) {
            return this._inner.runGuarded(t, e, n);
          }),
          (t.prototype.runOutsideAngular = function (t) {
            return this._outer.run(t);
          }),
          t
        );
      })();
      function ga() {}
      var _a = {};
      function wa(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(function () {
                  return t.onStable.emit(null);
                });
              } finally {
                t.isStable = !0;
              }
          }
      }
      function ba(t) {
        t.hasPendingMicrotasks = !!(
          t._hasPendingMicrotasks ||
          (t.shouldCoalesceEventChangeDetection &&
            -1 !== t.lastRequestAnimationFrameId)
        );
      }
      function Sa(t) {
        t._nesting++,
          t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function Ea(t) {
        t._nesting--, wa(t);
      }
      var Ca,
        Ta = (function () {
          function t() {
            (this.hasPendingMicrotasks = !1),
              (this.hasPendingMacrotasks = !1),
              (this.isStable = !0),
              (this.onUnstable = new js()),
              (this.onMicrotaskEmpty = new js()),
              (this.onStable = new js()),
              (this.onError = new js());
          }
          return (
            (t.prototype.run = function (t, e, n) {
              return t.apply(e, n);
            }),
            (t.prototype.runGuarded = function (t, e, n) {
              return t.apply(e, n);
            }),
            (t.prototype.runOutsideAngular = function (t) {
              return t();
            }),
            (t.prototype.runTask = function (t, e, n, r) {
              return t.apply(e, n);
            }),
            t
          );
        })(),
        xa = (function () {
          function t(t) {
            var e = this;
            (this._ngZone = t),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              t.run(function () {
                e.taskTrackingZone =
                  'undefined' == typeof Zone
                    ? null
                    : Zone.current.get('TaskTrackingZone');
              });
          }
          return (
            (t.prototype._watchAngularEvents = function () {
              var t = this;
              this._ngZone.onUnstable.subscribe({
                next: function () {
                  (t._didWork = !0), (t._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(function () {
                  t._ngZone.onStable.subscribe({
                    next: function () {
                      ma.assertNotInAngularZone(),
                        va(function () {
                          (t._isZoneStable = !0), t._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }),
            (t.prototype.increasePendingRequestCount = function () {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }),
            (t.prototype.decreasePendingRequestCount = function () {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error('pending async requests below zero');
              return this._runCallbacksIfReady(), this._pendingCount;
            }),
            (t.prototype.isStable = function () {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }),
            (t.prototype._runCallbacksIfReady = function () {
              var t = this;
              if (this.isStable())
                va(function () {
                  for (; 0 !== t._callbacks.length; ) {
                    var e = t._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(t._didWork);
                  }
                  t._didWork = !1;
                });
              else {
                var e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(function (t) {
                  return (
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                  );
                })),
                  (this._didWork = !0);
              }
            }),
            (t.prototype.getPendingTasks = function () {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map(function (t) {
                    return {
                      source: t.source,
                      creationLocation: t.creationLocation,
                      data: t.data,
                    };
                  })
                : [];
            }),
            (t.prototype.addCallback = function (t, e, n) {
              var r = this,
                i = -1;
              e &&
                e > 0 &&
                (i = setTimeout(function () {
                  (r._callbacks = r._callbacks.filter(function (t) {
                    return t.timeoutId !== i;
                  })),
                    t(r._didWork, r.getPendingTasks());
                }, e)),
                this._callbacks.push({ doneCb: t, timeoutId: i, updateCb: n });
            }),
            (t.prototype.whenStable = function (t, e, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(t, e, n), this._runCallbacksIfReady();
            }),
            (t.prototype.getPendingRequestCount = function () {
              return this._pendingCount;
            }),
            (t.prototype.findProviders = function (t, e, n) {
              return [];
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(ma));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        ka = (function () {
          function t() {
            (this._applications = new Map()), Aa.addToWindow(this);
          }
          return (
            (t.prototype.registerApplication = function (t, e) {
              this._applications.set(t, e);
            }),
            (t.prototype.unregisterApplication = function (t) {
              this._applications.delete(t);
            }),
            (t.prototype.unregisterAllApplications = function () {
              this._applications.clear();
            }),
            (t.prototype.getTestability = function (t) {
              return this._applications.get(t) || null;
            }),
            (t.prototype.getAllTestabilities = function () {
              return Array.from(this._applications.values());
            }),
            (t.prototype.getAllRootElements = function () {
              return Array.from(this._applications.keys());
            }),
            (t.prototype.findTestabilityInTree = function (t, e) {
              return (
                void 0 === e && (e = !0), Aa.findTestabilityInTree(this, t, e)
              );
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        Aa = new ((function () {
          function t() {}
          return (
            (t.prototype.addToWindow = function (t) {}),
            (t.prototype.findTestabilityInTree = function (t, e, n) {
              return null;
            }),
            t
          );
        })())(),
        Pa = function (t, e, n) {
          var r = new Ns(n);
          if (0 === no.size) return Promise.resolve(r);
          var i,
            o,
            s =
              ((i = t
                .get(da, [])
                .concat(e)
                .map(function (t) {
                  return t.providers;
                })),
              (o = []),
              i.forEach(function (t) {
                return t && o.push.apply(o, u(t));
              }),
              o);
          if (0 === s.length) return Promise.resolve(r);
          var a = (function () {
              var t = Lt.ng;
              if (!t || !t.ɵcompilerFacade)
                throw new Error(
                  "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
                );
              return t.ɵcompilerFacade;
            })(),
            l = to.create({ providers: s }).get(a.ResourceLoader);
          return (function (t) {
            var e = [],
              n = new Map();
            function r(t) {
              var e = n.get(t);
              if (!e) {
                var r = (function (t) {
                  return Promise.resolve(l.get(t));
                })(t);
                n.set(t, (e = r.then(io)));
              }
              return e;
            }
            return (
              no.forEach(function (t, n) {
                var i = [];
                t.templateUrl &&
                  i.push(
                    r(t.templateUrl).then(function (e) {
                      t.template = e;
                    })
                  );
                var o = t.styleUrls,
                  s = t.styles || (t.styles = []),
                  a = t.styles.length;
                o &&
                  o.forEach(function (e, n) {
                    s.push(''),
                      i.push(
                        r(e).then(function (r) {
                          (s[a + n] = r),
                            o.splice(o.indexOf(e), 1),
                            0 == o.length && (t.styleUrls = void 0);
                        })
                      );
                  });
                var u = Promise.all(i).then(function () {
                  return (function (t) {
                    ro.delete(t);
                  })(n);
                });
                e.push(u);
              }),
              (no = new Map()),
              Promise.all(e).then(function () {})
            );
          })().then(function () {
            return r;
          });
        },
        Ra = new Wt('AllowMultipleToken'),
        Oa = (function () {
          return function (t, e) {
            (this.name = t), (this.token = e);
          };
        })();
      function Ia(t, e, n) {
        void 0 === n && (n = []);
        var r = 'Platform: ' + e,
          i = new Wt(r);
        return function (e) {
          void 0 === e && (e = []);
          var o = Na();
          if (!o || o.injector.get(Ra, !1))
            if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }));
            else {
              var s = n
                .concat(e)
                .concat(
                  { provide: i, useValue: !0 },
                  { provide: Vi, useValue: 'platform' }
                );
              !(function (t) {
                if (Ca && !Ca.destroyed && !Ca.injector.get(Ra, !1))
                  throw new Error(
                    'There can be only one platform. Destroy the previous one to create a new one.'
                  );
                Ca = t.get(ja);
                var e = t.get(ta, null);
                e &&
                  e.forEach(function (t) {
                    return t();
                  });
              })(to.create({ providers: s, name: r }));
            }
          return (function (t) {
            var e = Na();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error(
                'A platform with a different configuration has been created. Please destroy it first.'
              );
            return e;
          })(i);
        };
      }
      function Na() {
        return Ca && !Ca.destroyed ? Ca : null;
      }
      var ja = (function () {
        function t(t) {
          (this._injector = t),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        return (
          (t.prototype.bootstrapModuleFactory = function (t, e) {
            var n,
              r,
              i = this,
              o =
                ((r = (e && e.ngZoneEventCoalescing) || !1),
                'noop' === (n = e ? e.ngZone : void 0)
                  ? new Ta()
                  : ('zone.js' === n ? void 0 : n) ||
                    new ma({
                      enableLongStackTrace: Yn(),
                      shouldCoalesceEventChangeDetection: r,
                    })),
              s = [{ provide: ma, useValue: o }];
            return o.run(function () {
              var e = to.create({
                  providers: s,
                  parent: i.injector,
                  name: t.moduleType.name,
                }),
                n = t.create(e),
                r = n.injector.get(Kn, null);
              if (!r)
                throw new Error(
                  'No ErrorHandler. Is platform module (BrowserModule) included?'
                );
              return (
                n.onDestroy(function () {
                  return La(i._modules, n);
                }),
                o.runOutsideAngular(function () {
                  return o.onError.subscribe({
                    next: function (t) {
                      r.handleError(t);
                    },
                  });
                }),
                (function (t, e, r) {
                  try {
                    var o =
                      ((s = n.injector.get($s)).runInitializers(),
                      s.donePromise.then(function () {
                        return (
                          Rs(n.injector.get(ia, 'en-US') || 'en-US'),
                          i._moduleDoBootstrap(n),
                          n
                        );
                      }));
                    return wo(o)
                      ? o.catch(function (n) {
                          throw (
                            (e.runOutsideAngular(function () {
                              return t.handleError(n);
                            }),
                            n)
                          );
                        })
                      : o;
                  } catch (a) {
                    throw (
                      (e.runOutsideAngular(function () {
                        return t.handleError(a);
                      }),
                      a)
                    );
                  }
                  var s;
                })(r, o)
              );
            });
          }),
          (t.prototype.bootstrapModule = function (t, e) {
            var n = this;
            void 0 === e && (e = []);
            var r = Da({}, e);
            return Pa(this.injector, r, t).then(function (t) {
              return n.bootstrapModuleFactory(t, r);
            });
          }),
          (t.prototype._moduleDoBootstrap = function (t) {
            var e = t.injector.get(Fa);
            if (t._bootstrapComponents.length > 0)
              t._bootstrapComponents.forEach(function (t) {
                return e.bootstrap(t);
              });
            else {
              if (!t.instance.ngDoBootstrap)
                throw new Error(
                  'The module ' +
                    kt(t.instance.constructor) +
                    ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.'
                );
              t.instance.ngDoBootstrap(e);
            }
            this._modules.push(t);
          }),
          (t.prototype.onDestroy = function (t) {
            this._destroyListeners.push(t);
          }),
          Object.defineProperty(t.prototype, 'injector', {
            get: function () {
              return this._injector;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.destroy = function () {
            if (this._destroyed)
              throw new Error('The platform has already been destroyed!');
            this._modules.slice().forEach(function (t) {
              return t.destroy();
            }),
              this._destroyListeners.forEach(function (t) {
                return t();
              }),
              (this._destroyed = !0);
          }),
          Object.defineProperty(t.prototype, 'destroyed', {
            get: function () {
              return this._destroyed;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.ɵfac = function (e) {
            return new (e || t)(te(to));
          }),
          (t.ɵprov = mt({
            token: t,
            factory: function (e) {
              return t.ɵfac(e);
            },
          })),
          t
        );
      })();
      function Da(t, e) {
        return Array.isArray(e) ? e.reduce(Da, t) : o(o({}, t), e);
      }
      var Fa = (function () {
        function t(t, e, n, r, i, o) {
          var s = this;
          (this._zone = t),
            (this._console = e),
            (this._injector = n),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = i),
            (this._initStatus = o),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = Yn()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: function () {
                s._zone.run(function () {
                  s.tick();
                });
              },
            });
          var a = new k(function (t) {
              (s._stable =
                s._zone.isStable &&
                !s._zone.hasPendingMacrotasks &&
                !s._zone.hasPendingMicrotasks),
                s._zone.runOutsideAngular(function () {
                  t.next(s._stable), t.complete();
                });
            }),
            u = new k(function (t) {
              var e;
              s._zone.runOutsideAngular(function () {
                e = s._zone.onStable.subscribe(function () {
                  ma.assertNotInAngularZone(),
                    va(function () {
                      s._stable ||
                        s._zone.hasPendingMacrotasks ||
                        s._zone.hasPendingMicrotasks ||
                        ((s._stable = !0), t.next(!0));
                    });
                });
              });
              var n = s._zone.onUnstable.subscribe(function () {
                ma.assertInAngularZone(),
                  s._stable &&
                    ((s._stable = !1),
                    s._zone.runOutsideAngular(function () {
                      t.next(!1);
                    }));
              });
              return function () {
                e.unsubscribe(), n.unsubscribe();
              };
            });
          this.isStable = (function () {
            for (var t = [], e = 0; e < arguments.length; e++)
              t[e] = arguments[e];
            var n = Number.POSITIVE_INFINITY,
              r = null,
              i = t[t.length - 1];
            return (
              D(i)
                ? ((r = t.pop()),
                  t.length > 1 &&
                    'number' == typeof t[t.length - 1] &&
                    (n = t.pop()))
                : 'number' == typeof i && (n = t.pop()),
              null === r && 1 === t.length && t[0] instanceof k
                ? t[0]
                : tt(n)(et(t, r))
            );
          })(
            a,
            u.pipe(function (t) {
              return nt()(
                ((e = ut),
                function (t) {
                  var n;
                  n =
                    'function' == typeof e
                      ? e
                      : function () {
                          return e;
                        };
                  var r = Object.create(t, st);
                  return (r.source = t), (r.subjectFactory = n), r;
                })(t)
              );
              var e;
            })
          );
        }
        return (
          (t.prototype.bootstrap = function (t, e) {
            var n,
              r = this;
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            (n =
              t instanceof Bo
                ? t
                : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            var i = n.isBoundToModule ? void 0 : this._injector.get(ie),
              o = n.create(to.NULL, [], e || n.selector, i);
            o.onDestroy(function () {
              r._unloadComponent(o);
            });
            var s = o.injector.get(xa, null);
            return (
              s &&
                o.injector
                  .get(ka)
                  .registerApplication(o.location.nativeElement, s),
              this._loadComponent(o),
              Yn() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              o
            );
          }),
          (t.prototype.tick = function () {
            var t,
              e,
              n,
              r,
              i = this;
            if (this._runningTick)
              throw new Error('ApplicationRef.tick is called recursively');
            try {
              this._runningTick = !0;
              try {
                for (
                  var o = s(this._views), a = o.next();
                  !a.done;
                  a = o.next()
                )
                  a.value.detectChanges();
              } catch (c) {
                t = { error: c };
              } finally {
                try {
                  a && !a.done && (e = o.return) && e.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              if (this._enforceNoNewChanges)
                try {
                  for (
                    var u = s(this._views), l = u.next();
                    !l.done;
                    l = u.next()
                  )
                    l.value.checkNoChanges();
                } catch (f) {
                  n = { error: f };
                } finally {
                  try {
                    l && !l.done && (r = u.return) && r.call(u);
                  } finally {
                    if (n) throw n.error;
                  }
                }
            } catch (p) {
              this._zone.runOutsideAngular(function () {
                return i._exceptionHandler.handleError(p);
              });
            } finally {
              this._runningTick = !1;
            }
          }),
          (t.prototype.attachView = function (t) {
            var e = t;
            this._views.push(e), e.attachToAppRef(this);
          }),
          (t.prototype.detachView = function (t) {
            var e = t;
            La(this._views, e), e.detachFromAppRef();
          }),
          (t.prototype._loadComponent = function (t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(na, [])
                .concat(this._bootstrapListeners)
                .forEach(function (e) {
                  return e(t);
                });
          }),
          (t.prototype._unloadComponent = function (t) {
            this.detachView(t.hostView), La(this.components, t);
          }),
          (t.prototype.ngOnDestroy = function () {
            this._views.slice().forEach(function (t) {
              return t.destroy();
            });
          }),
          Object.defineProperty(t.prototype, 'viewCount', {
            get: function () {
              return this._views.length;
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.ɵfac = function (e) {
            return new (e || t)(te(ma), te(ra), te(to), te(Kn), te(Wo), te($s));
          }),
          (t.ɵprov = mt({
            token: t,
            factory: function (e) {
              return t.ɵfac(e);
            },
          })),
          t
        );
      })();
      function La(t, e) {
        var n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      var Ma = (function () {
          return function () {};
        })(),
        Ua = (function () {
          return function () {};
        })(),
        Ha = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' },
        Va = (function () {
          function t(t, e) {
            (this._compiler = t), (this._config = e || Ha);
          }
          return (
            (t.prototype.load = function (t) {
              return this.loadAndCompile(t);
            }),
            (t.prototype.loadAndCompile = function (t) {
              var e = this,
                r = a(t.split('#'), 2),
                i = r[0],
                o = r[1];
              return (
                void 0 === o && (o = 'default'),
                n('crnd')(i)
                  .then(function (t) {
                    return t[o];
                  })
                  .then(function (t) {
                    return qa(t, i, o);
                  })
                  .then(function (t) {
                    return e._compiler.compileModuleAsync(t);
                  })
              );
            }),
            (t.prototype.loadFactory = function (t) {
              var e = a(t.split('#'), 2),
                r = e[0],
                i = e[1],
                o = 'NgFactory';
              return (
                void 0 === i && ((i = 'default'), (o = '')),
                n('crnd')(
                  this._config.factoryPathPrefix +
                    r +
                    this._config.factoryPathSuffix
                )
                  .then(function (t) {
                    return t[i + o];
                  })
                  .then(function (t) {
                    return qa(t, r, i);
                  })
              );
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(ha), te(Ua, 8));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })();
      function qa(t, e, n) {
        if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
        return t;
      }
      var Ba = Ia(null, 'core', [
          { provide: ea, useValue: 'unknown' },
          { provide: ja, deps: [to] },
          { provide: ka, deps: [] },
          { provide: ra, deps: [] },
        ]),
        za = [
          { provide: Fa, useClass: Fa, deps: [ma, ra, to, Kn, Wo, $s] },
          {
            provide: Ss,
            deps: [ma],
            useFactory: function (t) {
              var e = [];
              return (
                t.onStable.subscribe(function () {
                  for (; e.length; ) e.pop()();
                }),
                function (t) {
                  e.push(t);
                }
              );
            },
          },
          { provide: $s, useClass: $s, deps: [[new pt(), Gs]] },
          { provide: ha, useClass: ha, deps: [] },
          Js,
          {
            provide: cs,
            useFactory: function () {
              return hs;
            },
            deps: [],
          },
          {
            provide: fs,
            useFactory: function () {
              return ds;
            },
            deps: [],
          },
          {
            provide: ia,
            useFactory: function (t) {
              return (
                Rs(
                  (t =
                    t ||
                    ('undefined' != typeof $localize && $localize.locale) ||
                    'en-US')
                ),
                t
              );
            },
            deps: [[new ft(ia), new pt(), new dt()]],
          },
          { provide: oa, useValue: 'USD' },
        ],
        Wa = (function () {
          function t(t) {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)(te(Fa));
              },
              providers: za,
            })),
            t
          );
        })(),
        Qa = null;
      function Ka() {
        return Qa;
      }
      var Za = (function () {
          return function () {};
        })(),
        Ga = new Wt('DocumentToken'),
        $a = (function () {
          function t() {}
          return (
            (t.ɵprov = mt({ factory: Ya, token: t, providedIn: 'platform' })),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            t
          );
        })();
      function Ya() {
        return te(Xa);
      }
      var Ja = new Wt('Location Initialized'),
        Xa = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._doc = e), n._init(), n;
          }
          return (
            i(e, t),
            (e.prototype._init = function () {
              (this.location = Ka().getLocation()),
                (this._history = Ka().getHistory());
            }),
            (e.prototype.getBaseHrefFromDOM = function () {
              return Ka().getBaseHref(this._doc);
            }),
            (e.prototype.onPopState = function (t) {
              Ka()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('popstate', t, !1);
            }),
            (e.prototype.onHashChange = function (t) {
              Ka()
                .getGlobalEventTarget(this._doc, 'window')
                .addEventListener('hashchange', t, !1);
            }),
            Object.defineProperty(e.prototype, 'href', {
              get: function () {
                return this.location.href;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'protocol', {
              get: function () {
                return this.location.protocol;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'hostname', {
              get: function () {
                return this.location.hostname;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'port', {
              get: function () {
                return this.location.port;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'pathname', {
              get: function () {
                return this.location.pathname;
              },
              set: function (t) {
                this.location.pathname = t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'search', {
              get: function () {
                return this.location.search;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'hash', {
              get: function () {
                return this.location.hash;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype.pushState = function (t, e, n) {
              tu()
                ? this._history.pushState(t, e, n)
                : (this.location.hash = n);
            }),
            (e.prototype.replaceState = function (t, e, n) {
              tu()
                ? this._history.replaceState(t, e, n)
                : (this.location.hash = n);
            }),
            (e.prototype.forward = function () {
              this._history.forward();
            }),
            (e.prototype.back = function () {
              this._history.back();
            }),
            (e.prototype.getState = function () {
              return this._history.state;
            }),
            (e.ɵprov = mt({ factory: eu, token: e, providedIn: 'platform' })),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Ga));
            }),
            e
          );
        })($a);
      function tu() {
        return !!window.history.pushState;
      }
      function eu() {
        return new Xa(te(Ga));
      }
      function nu(t, e) {
        if (0 == t.length) return e;
        if (0 == e.length) return t;
        var n = 0;
        return (
          t.endsWith('/') && n++,
          e.startsWith('/') && n++,
          2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
        );
      }
      function ru(t) {
        var e = t.match(/#|\?|$/),
          n = (e && e.index) || t.length;
        return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
      }
      function iu(t) {
        return t && '?' !== t[0] ? '?' + t : t;
      }
      var ou = (function () {
        function t() {}
        return (
          (t.ɵprov = mt({ factory: su, token: t, providedIn: 'root' })),
          (t.ɵfac = function (e) {
            return new (e || t)();
          }),
          t
        );
      })();
      function su(t) {
        var e = te(Ga).location;
        return new uu(te($a), (e && e.origin) || '');
      }
      var au = new Wt('appBaseHref'),
        uu = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            if (
              ((r._platformLocation = e),
              null == n && (n = r._platformLocation.getBaseHrefFromDOM()),
              null == n)
            )
              throw new Error(
                'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
              );
            return (r._baseHref = n), r;
          }
          return (
            i(e, t),
            (e.prototype.onPopState = function (t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function () {
              return this._baseHref;
            }),
            (e.prototype.prepareExternalUrl = function (t) {
              return nu(this._baseHref, t);
            }),
            (e.prototype.path = function (t) {
              void 0 === t && (t = !1);
              var e =
                  this._platformLocation.pathname +
                  iu(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && t ? '' + e + n : e;
            }),
            (e.prototype.pushState = function (t, e, n, r) {
              var i = this.prepareExternalUrl(n + iu(r));
              this._platformLocation.pushState(t, e, i);
            }),
            (e.prototype.replaceState = function (t, e, n, r) {
              var i = this.prepareExternalUrl(n + iu(r));
              this._platformLocation.replaceState(t, e, i);
            }),
            (e.prototype.forward = function () {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function () {
              this._platformLocation.back();
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te($a), te(au, 8));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(ou),
        lu = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r._platformLocation = e),
              (r._baseHref = ''),
              null != n && (r._baseHref = n),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.onPopState = function (t) {
              this._platformLocation.onPopState(t),
                this._platformLocation.onHashChange(t);
            }),
            (e.prototype.getBaseHref = function () {
              return this._baseHref;
            }),
            (e.prototype.path = function (t) {
              void 0 === t && (t = !1);
              var e = this._platformLocation.hash;
              return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
            }),
            (e.prototype.prepareExternalUrl = function (t) {
              var e = nu(this._baseHref, t);
              return e.length > 0 ? '#' + e : e;
            }),
            (e.prototype.pushState = function (t, e, n, r) {
              var i = this.prepareExternalUrl(n + iu(r));
              0 == i.length && (i = this._platformLocation.pathname),
                this._platformLocation.pushState(t, e, i);
            }),
            (e.prototype.replaceState = function (t, e, n, r) {
              var i = this.prepareExternalUrl(n + iu(r));
              0 == i.length && (i = this._platformLocation.pathname),
                this._platformLocation.replaceState(t, e, i);
            }),
            (e.prototype.forward = function () {
              this._platformLocation.forward();
            }),
            (e.prototype.back = function () {
              this._platformLocation.back();
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te($a), te(au, 8));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(ou),
        cu = (function () {
          function t(t, e) {
            var n = this;
            (this._subject = new js()),
              (this._urlChangeListeners = []),
              (this._platformStrategy = t);
            var r = this._platformStrategy.getBaseHref();
            (this._platformLocation = e),
              (this._baseHref = ru(pu(r))),
              this._platformStrategy.onPopState(function (t) {
                n._subject.emit({
                  url: n.path(!0),
                  pop: !0,
                  state: t.state,
                  type: t.type,
                });
              });
          }
          var e;
          return (
            (e = t),
            (t.prototype.path = function (t) {
              return (
                void 0 === t && (t = !1),
                this.normalize(this._platformStrategy.path(t))
              );
            }),
            (t.prototype.getState = function () {
              return this._platformLocation.getState();
            }),
            (t.prototype.isCurrentPathEqualTo = function (t, e) {
              return (
                void 0 === e && (e = ''),
                this.path() == this.normalize(t + iu(e))
              );
            }),
            (t.prototype.normalize = function (t) {
              return e.stripTrailingSlash(
                (function (t, e) {
                  return t && e.startsWith(t) ? e.substring(t.length) : e;
                })(this._baseHref, pu(t))
              );
            }),
            (t.prototype.prepareExternalUrl = function (t) {
              return (
                t && '/' !== t[0] && (t = '/' + t),
                this._platformStrategy.prepareExternalUrl(t)
              );
            }),
            (t.prototype.go = function (t, e, n) {
              void 0 === e && (e = ''),
                void 0 === n && (n = null),
                this._platformStrategy.pushState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + iu(e)),
                  n
                );
            }),
            (t.prototype.replaceState = function (t, e, n) {
              void 0 === e && (e = ''),
                void 0 === n && (n = null),
                this._platformStrategy.replaceState(n, '', t, e),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(t + iu(e)),
                  n
                );
            }),
            (t.prototype.forward = function () {
              this._platformStrategy.forward();
            }),
            (t.prototype.back = function () {
              this._platformStrategy.back();
            }),
            (t.prototype.onUrlChange = function (t) {
              var e = this;
              this._urlChangeListeners.push(t),
                this.subscribe(function (t) {
                  e._notifyUrlChangeListeners(t.url, t.state);
                });
            }),
            (t.prototype._notifyUrlChangeListeners = function (t, e) {
              void 0 === t && (t = ''),
                this._urlChangeListeners.forEach(function (n) {
                  return n(t, e);
                });
            }),
            (t.prototype.subscribe = function (t, e, n) {
              return this._subject.subscribe({
                next: t,
                error: e,
                complete: n,
              });
            }),
            (t.normalizeQueryParams = iu),
            (t.joinWithSlash = nu),
            (t.stripTrailingSlash = ru),
            (t.ɵprov = mt({ factory: fu, token: t, providedIn: 'root' })),
            (t.ɵfac = function (e) {
              return new (e || t)(te(ou), te($a));
            }),
            t
          );
        })();
      function fu() {
        return new cu(te(ou), te($a));
      }
      function pu(t) {
        return t.replace(/\/index.html$/, '');
      }
      var hu,
        du = (function (t) {
          return (
            (t[(t.Zero = 0)] = 'Zero'),
            (t[(t.One = 1)] = 'One'),
            (t[(t.Two = 2)] = 'Two'),
            (t[(t.Few = 3)] = 'Few'),
            (t[(t.Many = 4)] = 'Many'),
            (t[(t.Other = 5)] = 'Other'),
            t
          );
        })({}),
        yu = (function () {
          return function () {};
        })(),
        vu = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n.locale = e), n;
          }
          return (
            i(e, t),
            (e.prototype.getPluralCategory = function (t, e) {
              switch (
                (function (t) {
                  return (function (t) {
                    var e = (function (t) {
                        return t.toLowerCase().replace(/_/g, '-');
                      })(t),
                      n = As(e);
                    if (n) return n;
                    var r = e.split('-')[0];
                    if ((n = As(r))) return n;
                    if ('en' === r) return xs;
                    throw new Error(
                      'Missing locale data for the locale "' + t + '".'
                    );
                  })(t)[Ps.PluralCase];
                })(e || this.locale)(t)
              ) {
                case du.Zero:
                  return 'zero';
                case du.One:
                  return 'one';
                case du.Two:
                  return 'two';
                case du.Few:
                  return 'few';
                case du.Many:
                  return 'many';
                default:
                  return 'other';
              }
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te(ia));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(yu),
        mu = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [{ provide: yu, useClass: vu }],
            })),
            t
          );
        })(),
        gu = (function () {
          function t() {}
          return (
            (t.ɵprov = mt({
              token: t,
              providedIn: 'root',
              factory: function () {
                return new _u(te(Ga), window, te(Kn));
              },
            })),
            t
          );
        })(),
        _u = (function () {
          function t(t, e, n) {
            (this.document = t),
              (this.window = e),
              (this.errorHandler = n),
              (this.offset = function () {
                return [0, 0];
              });
          }
          return (
            (t.prototype.setOffset = function (t) {
              this.offset = Array.isArray(t)
                ? function () {
                    return t;
                  }
                : t;
            }),
            (t.prototype.getScrollPosition = function () {
              return this.supportScrollRestoration()
                ? [this.window.scrollX, this.window.scrollY]
                : [0, 0];
            }),
            (t.prototype.scrollToPosition = function (t) {
              this.supportScrollRestoration() &&
                this.window.scrollTo(t[0], t[1]);
            }),
            (t.prototype.scrollToAnchor = function (t) {
              if (this.supportScrollRestoration()) {
                t =
                  this.window.CSS && this.window.CSS.escape
                    ? this.window.CSS.escape(t)
                    : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
                try {
                  var e = this.document.querySelector('#' + t);
                  if (e) return void this.scrollToElement(e);
                  var n = this.document.querySelector("[name='" + t + "']");
                  if (n) return void this.scrollToElement(n);
                } catch (r) {
                  this.errorHandler.handleError(r);
                }
              }
            }),
            (t.prototype.setHistoryScrollRestoration = function (t) {
              if (this.supportScrollRestoration()) {
                var e = this.window.history;
                e && e.scrollRestoration && (e.scrollRestoration = t);
              }
            }),
            (t.prototype.scrollToElement = function (t) {
              var e = t.getBoundingClientRect(),
                n = e.left + this.window.pageXOffset,
                r = e.top + this.window.pageYOffset,
                i = this.offset();
              this.window.scrollTo(n - i[0], r - i[1]);
            }),
            (t.prototype.supportScrollRestoration = function () {
              try {
                return !!this.window && !!this.window.scrollTo;
              } catch (t) {
                return !1;
              }
            }),
            t
          );
        })(),
        wu = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i(e, t),
            (e.makeCurrent = function () {
              var t;
              (t = new e()), Qa || (Qa = t);
            }),
            (e.prototype.getProperty = function (t, e) {
              return t[e];
            }),
            (e.prototype.log = function (t) {
              window.console && window.console.log && window.console.log(t);
            }),
            (e.prototype.logGroup = function (t) {
              window.console && window.console.group && window.console.group(t);
            }),
            (e.prototype.logGroupEnd = function () {
              window.console &&
                window.console.groupEnd &&
                window.console.groupEnd();
            }),
            (e.prototype.onAndCancel = function (t, e, n) {
              return (
                t.addEventListener(e, n, !1),
                function () {
                  t.removeEventListener(e, n, !1);
                }
              );
            }),
            (e.prototype.dispatchEvent = function (t, e) {
              t.dispatchEvent(e);
            }),
            (e.prototype.remove = function (t) {
              return t.parentNode && t.parentNode.removeChild(t), t;
            }),
            (e.prototype.getValue = function (t) {
              return t.value;
            }),
            (e.prototype.createElement = function (t, e) {
              return (e = e || this.getDefaultDocument()).createElement(t);
            }),
            (e.prototype.createHtmlDocument = function () {
              return document.implementation.createHTMLDocument('fakeTitle');
            }),
            (e.prototype.getDefaultDocument = function () {
              return document;
            }),
            (e.prototype.isElementNode = function (t) {
              return t.nodeType === Node.ELEMENT_NODE;
            }),
            (e.prototype.isShadowRoot = function (t) {
              return t instanceof DocumentFragment;
            }),
            (e.prototype.getGlobalEventTarget = function (t, e) {
              return 'window' === e
                ? window
                : 'document' === e
                ? t
                : 'body' === e
                ? t.body
                : null;
            }),
            (e.prototype.getHistory = function () {
              return window.history;
            }),
            (e.prototype.getLocation = function () {
              return window.location;
            }),
            (e.prototype.getBaseHref = function (t) {
              var e,
                n =
                  bu || (bu = document.querySelector('base'))
                    ? bu.getAttribute('href')
                    : null;
              return null == n
                ? null
                : ((e = n),
                  hu || (hu = document.createElement('a')),
                  hu.setAttribute('href', e),
                  '/' === hu.pathname.charAt(0)
                    ? hu.pathname
                    : '/' + hu.pathname);
            }),
            (e.prototype.resetBaseElement = function () {
              bu = null;
            }),
            (e.prototype.getUserAgent = function () {
              return window.navigator.userAgent;
            }),
            (e.prototype.performanceNow = function () {
              return window.performance && window.performance.now
                ? window.performance.now()
                : new Date().getTime();
            }),
            (e.prototype.supportsCookies = function () {
              return !0;
            }),
            (e.prototype.getCookie = function (t) {
              return (function (t, e) {
                var n, r;
                e = encodeURIComponent(e);
                try {
                  for (
                    var i = s(t.split(';')), o = i.next();
                    !o.done;
                    o = i.next()
                  ) {
                    var u = o.value,
                      l = u.indexOf('='),
                      c = a(
                        -1 == l ? [u, ''] : [u.slice(0, l), u.slice(l + 1)],
                        2
                      ),
                      f = c[1];
                    if (c[0].trim() === e) return decodeURIComponent(f);
                  }
                } catch (p) {
                  n = { error: p };
                } finally {
                  try {
                    o && !o.done && (r = i.return) && r.call(i);
                  } finally {
                    if (n) throw n.error;
                  }
                }
                return null;
              })(document.cookie, t);
            }),
            e
          );
        })(
          (function (t) {
            function e() {
              return t.call(this) || this;
            }
            return (
              i(e, t),
              (e.prototype.supportsDOMEvents = function () {
                return !0;
              }),
              e
            );
          })(Za)
        ),
        bu = null,
        Su = new Wt('TRANSITION_ID'),
        Eu = [
          {
            provide: Gs,
            useFactory: function (t, e, n) {
              return function () {
                n.get($s).donePromise.then(function () {
                  var n = Ka();
                  Array.prototype.slice
                    .apply(e.querySelectorAll('style[ng-transition]'))
                    .filter(function (e) {
                      return e.getAttribute('ng-transition') === t;
                    })
                    .forEach(function (t) {
                      return n.remove(t);
                    });
                });
              };
            },
            deps: [Su, Ga, to],
            multi: !0,
          },
        ],
        Cu = (function () {
          function t() {}
          return (
            (t.init = function () {
              var e;
              (e = new t()), (Aa = e);
            }),
            (t.prototype.addToWindow = function (t) {
              (Lt.getAngularTestability = function (e, n) {
                void 0 === n && (n = !0);
                var r = t.findTestabilityInTree(e, n);
                if (null == r)
                  throw new Error('Could not find testability for element.');
                return r;
              }),
                (Lt.getAllAngularTestabilities = function () {
                  return t.getAllTestabilities();
                }),
                (Lt.getAllAngularRootElements = function () {
                  return t.getAllRootElements();
                }),
                Lt.frameworkStabilizers || (Lt.frameworkStabilizers = []),
                Lt.frameworkStabilizers.push(function (t) {
                  var e = Lt.getAllAngularTestabilities(),
                    n = e.length,
                    r = !1,
                    i = function (e) {
                      (r = r || e), 0 == --n && t(r);
                    };
                  e.forEach(function (t) {
                    t.whenStable(i);
                  });
                });
            }),
            (t.prototype.findTestabilityInTree = function (t, e, n) {
              if (null == e) return null;
              var r = t.getTestability(e);
              return null != r
                ? r
                : n
                ? Ka().isShadowRoot(e)
                  ? this.findTestabilityInTree(t, e.host, !0)
                  : this.findTestabilityInTree(t, e.parentElement, !0)
                : null;
            }),
            t
          );
        })(),
        Tu = new Wt('EventManagerPlugins'),
        xu = (function () {
          function t(t, e) {
            var n = this;
            (this._zone = e),
              (this._eventNameToPlugin = new Map()),
              t.forEach(function (t) {
                return (t.manager = n);
              }),
              (this._plugins = t.slice().reverse());
          }
          return (
            (t.prototype.addEventListener = function (t, e, n) {
              return this._findPluginFor(e).addEventListener(t, e, n);
            }),
            (t.prototype.addGlobalEventListener = function (t, e, n) {
              return this._findPluginFor(e).addGlobalEventListener(t, e, n);
            }),
            (t.prototype.getZone = function () {
              return this._zone;
            }),
            (t.prototype._findPluginFor = function (t) {
              var e = this._eventNameToPlugin.get(t);
              if (e) return e;
              for (var n = this._plugins, r = 0; r < n.length; r++) {
                var i = n[r];
                if (i.supports(t)) return this._eventNameToPlugin.set(t, i), i;
              }
              throw new Error('No event manager plugin found for event ' + t);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(Tu), te(ma));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        ku = (function () {
          function t(t) {
            this._doc = t;
          }
          return (
            (t.prototype.addGlobalEventListener = function (t, e, n) {
              var r = Ka().getGlobalEventTarget(this._doc, t);
              if (!r)
                throw new Error(
                  'Unsupported event target ' + r + ' for event ' + e
                );
              return this.addEventListener(r, e, n);
            }),
            t
          );
        })(),
        Au = (function () {
          function t() {
            this._stylesSet = new Set();
          }
          return (
            (t.prototype.addStyles = function (t) {
              var e = this,
                n = new Set();
              t.forEach(function (t) {
                e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t));
              }),
                this.onStylesAdded(n);
            }),
            (t.prototype.onStylesAdded = function (t) {}),
            (t.prototype.getAllStyles = function () {
              return Array.from(this._stylesSet);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        Pu = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (
              (n._doc = e),
              (n._hostNodes = new Set()),
              (n._styleNodes = new Set()),
              n._hostNodes.add(e.head),
              n
            );
          }
          return (
            i(e, t),
            (e.prototype._addStylesToHost = function (t, e) {
              var n = this;
              t.forEach(function (t) {
                var r = n._doc.createElement('style');
                (r.textContent = t), n._styleNodes.add(e.appendChild(r));
              });
            }),
            (e.prototype.addHost = function (t) {
              this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
            }),
            (e.prototype.removeHost = function (t) {
              this._hostNodes.delete(t);
            }),
            (e.prototype.onStylesAdded = function (t) {
              var e = this;
              this._hostNodes.forEach(function (n) {
                return e._addStylesToHost(t, n);
              });
            }),
            (e.prototype.ngOnDestroy = function () {
              this._styleNodes.forEach(function (t) {
                return Ka().remove(t);
              });
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Ga));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(Au),
        Ru = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/',
        },
        Ou = /%COMP%/g;
      function Iu(t, e, n) {
        for (var r = 0; r < e.length; r++) {
          var i = e[r];
          Array.isArray(i) ? Iu(t, i, n) : ((i = i.replace(Ou, t)), n.push(i));
        }
        return n;
      }
      function Nu(t) {
        return function (e) {
          if ('__ngUnwrap__' === e) return t;
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      var ju = (function () {
          function t(t, e, n) {
            (this.eventManager = t),
              (this.sharedStylesHost = e),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Du(t));
          }
          return (
            (t.prototype.createRenderer = function (t, e) {
              if (!t || !e) return this.defaultRenderer;
              switch (e.encapsulation) {
                case de.Emulated:
                  var n = this.rendererByCompId.get(e.id);
                  return (
                    n ||
                      ((n = new Fu(
                        this.eventManager,
                        this.sharedStylesHost,
                        e,
                        this.appId
                      )),
                      this.rendererByCompId.set(e.id, n)),
                    n.applyToHost(t),
                    n
                  );
                case de.Native:
                case de.ShadowDom:
                  return new Lu(this.eventManager, this.sharedStylesHost, t, e);
                default:
                  if (!this.rendererByCompId.has(e.id)) {
                    var r = Iu(e.id, e.styles, []);
                    this.sharedStylesHost.addStyles(r),
                      this.rendererByCompId.set(e.id, this.defaultRenderer);
                  }
                  return this.defaultRenderer;
              }
            }),
            (t.prototype.begin = function () {}),
            (t.prototype.end = function () {}),
            (t.ɵfac = function (e) {
              return new (e || t)(te(xu), te(Pu), te(Ys));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        Du = (function () {
          function t(t) {
            (this.eventManager = t), (this.data = Object.create(null));
          }
          return (
            (t.prototype.destroy = function () {}),
            (t.prototype.createElement = function (t, e) {
              return e
                ? document.createElementNS(Ru[e] || e, t)
                : document.createElement(t);
            }),
            (t.prototype.createComment = function (t) {
              return document.createComment(t);
            }),
            (t.prototype.createText = function (t) {
              return document.createTextNode(t);
            }),
            (t.prototype.appendChild = function (t, e) {
              t.appendChild(e);
            }),
            (t.prototype.insertBefore = function (t, e, n) {
              t && t.insertBefore(e, n);
            }),
            (t.prototype.removeChild = function (t, e) {
              t && t.removeChild(e);
            }),
            (t.prototype.selectRootElement = function (t, e) {
              var n = 'string' == typeof t ? document.querySelector(t) : t;
              if (!n)
                throw new Error(
                  'The selector "' + t + '" did not match any elements'
                );
              return e || (n.textContent = ''), n;
            }),
            (t.prototype.parentNode = function (t) {
              return t.parentNode;
            }),
            (t.prototype.nextSibling = function (t) {
              return t.nextSibling;
            }),
            (t.prototype.setAttribute = function (t, e, n, r) {
              if (r) {
                e = r + ':' + e;
                var i = Ru[r];
                i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n);
              } else t.setAttribute(e, n);
            }),
            (t.prototype.removeAttribute = function (t, e, n) {
              if (n) {
                var r = Ru[n];
                r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ':' + e);
              } else t.removeAttribute(e);
            }),
            (t.prototype.addClass = function (t, e) {
              t.classList.add(e);
            }),
            (t.prototype.removeClass = function (t, e) {
              t.classList.remove(e);
            }),
            (t.prototype.setStyle = function (t, e, n, r) {
              r & Go.DashCase
                ? t.style.setProperty(e, n, r & Go.Important ? 'important' : '')
                : (t.style[e] = n);
            }),
            (t.prototype.removeStyle = function (t, e, n) {
              n & Go.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
            }),
            (t.prototype.setProperty = function (t, e, n) {
              t[e] = n;
            }),
            (t.prototype.setValue = function (t, e) {
              t.nodeValue = e;
            }),
            (t.prototype.listen = function (t, e, n) {
              return 'string' == typeof t
                ? this.eventManager.addGlobalEventListener(t, e, Nu(n))
                : this.eventManager.addEventListener(t, e, Nu(n));
            }),
            t
          );
        })(),
        Fu = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            o.component = r;
            var s = Iu(i + '-' + r.id, r.styles, []);
            return (
              n.addStyles(s),
              (o.contentAttr = '_ngcontent-%COMP%'.replace(Ou, i + '-' + r.id)),
              (o.hostAttr = (function (t) {
                return '_nghost-%COMP%'.replace(Ou, t);
              })(i + '-' + r.id)),
              o
            );
          }
          return (
            i(e, t),
            (e.prototype.applyToHost = function (e) {
              t.prototype.setAttribute.call(this, e, this.hostAttr, '');
            }),
            (e.prototype.createElement = function (e, n) {
              var r = t.prototype.createElement.call(this, e, n);
              return (
                t.prototype.setAttribute.call(this, r, this.contentAttr, ''), r
              );
            }),
            e
          );
        })(Du),
        Lu = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            (o.sharedStylesHost = n),
              (o.hostEl = r),
              (o.component = i),
              (o.shadowRoot =
                i.encapsulation === de.ShadowDom
                  ? r.attachShadow({ mode: 'open' })
                  : r.createShadowRoot()),
              o.sharedStylesHost.addHost(o.shadowRoot);
            for (var s = Iu(i.id, i.styles, []), a = 0; a < s.length; a++) {
              var u = document.createElement('style');
              (u.textContent = s[a]), o.shadowRoot.appendChild(u);
            }
            return o;
          }
          return (
            i(e, t),
            (e.prototype.nodeOrShadowRoot = function (t) {
              return t === this.hostEl ? this.shadowRoot : t;
            }),
            (e.prototype.destroy = function () {
              this.sharedStylesHost.removeHost(this.shadowRoot);
            }),
            (e.prototype.appendChild = function (e, n) {
              return t.prototype.appendChild.call(
                this,
                this.nodeOrShadowRoot(e),
                n
              );
            }),
            (e.prototype.insertBefore = function (e, n, r) {
              return t.prototype.insertBefore.call(
                this,
                this.nodeOrShadowRoot(e),
                n,
                r
              );
            }),
            (e.prototype.removeChild = function (e, n) {
              return t.prototype.removeChild.call(
                this,
                this.nodeOrShadowRoot(e),
                n
              );
            }),
            (e.prototype.parentNode = function (e) {
              return this.nodeOrShadowRoot(
                t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e))
              );
            }),
            e
          );
        })(Du),
        Mu = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          return (
            i(e, t),
            (e.prototype.supports = function (t) {
              return !0;
            }),
            (e.prototype.addEventListener = function (t, e, n) {
              var r = this;
              return (
                t.addEventListener(e, n, !1),
                function () {
                  return r.removeEventListener(t, e, n);
                }
              );
            }),
            (e.prototype.removeEventListener = function (t, e, n) {
              return t.removeEventListener(e, n);
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Ga));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(ku),
        Uu = ['alt', 'control', 'meta', 'shift'],
        Hu = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS',
        },
        Vu = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock',
        },
        qu = {
          alt: function (t) {
            return t.altKey;
          },
          control: function (t) {
            return t.ctrlKey;
          },
          meta: function (t) {
            return t.metaKey;
          },
          shift: function (t) {
            return t.shiftKey;
          },
        },
        Bu = (function (t) {
          function e(e) {
            return t.call(this, e) || this;
          }
          var n;
          return (
            i(e, t),
            (n = e),
            (e.prototype.supports = function (t) {
              return null != n.parseEventName(t);
            }),
            (e.prototype.addEventListener = function (t, e, r) {
              var i = n.parseEventName(e),
                o = n.eventCallback(i.fullKey, r, this.manager.getZone());
              return this.manager.getZone().runOutsideAngular(function () {
                return Ka().onAndCancel(t, i.domEventName, o);
              });
            }),
            (e.parseEventName = function (t) {
              var e = t.toLowerCase().split('.'),
                r = e.shift();
              if (0 === e.length || ('keydown' !== r && 'keyup' !== r))
                return null;
              var i = n._normalizeKey(e.pop()),
                o = '';
              if (
                (Uu.forEach(function (t) {
                  var n = e.indexOf(t);
                  n > -1 && (e.splice(n, 1), (o += t + '.'));
                }),
                (o += i),
                0 != e.length || 0 === i.length)
              )
                return null;
              var s = {};
              return (s.domEventName = r), (s.fullKey = o), s;
            }),
            (e.getEventFullKey = function (t) {
              var e = '',
                n = (function (t) {
                  var e = t.key;
                  if (null == e) {
                    if (null == (e = t.keyIdentifier)) return 'Unidentified';
                    e.startsWith('U+') &&
                      ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
                      3 === t.location && Vu.hasOwnProperty(e) && (e = Vu[e]));
                  }
                  return Hu[e] || e;
                })(t);
              return (
                ' ' === (n = n.toLowerCase())
                  ? (n = 'space')
                  : '.' === n && (n = 'dot'),
                Uu.forEach(function (r) {
                  r != n && (0, qu[r])(t) && (e += r + '.');
                }),
                (e += n)
              );
            }),
            (e.eventCallback = function (t, e, r) {
              return function (i) {
                n.getEventFullKey(i) === t &&
                  r.runGuarded(function () {
                    return e(i);
                  });
              };
            }),
            (e._normalizeKey = function (t) {
              switch (t) {
                case 'esc':
                  return 'escape';
                default:
                  return t;
              }
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Ga));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(ku),
        zu = Ia(Ba, 'browser', [
          { provide: ea, useValue: 'browser' },
          {
            provide: ta,
            useValue: function () {
              wu.makeCurrent(), Cu.init();
            },
            multi: !0,
          },
          {
            provide: Ga,
            useFactory: function () {
              return (
                (function (t) {
                  pn = t;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Wu = [
          [],
          { provide: Vi, useValue: 'root' },
          {
            provide: Kn,
            useFactory: function () {
              return new Kn();
            },
            deps: [],
          },
          { provide: Tu, useClass: Mu, multi: !0, deps: [Ga, ma, ea] },
          { provide: Tu, useClass: Bu, multi: !0, deps: [Ga] },
          [],
          { provide: ju, useClass: ju, deps: [xu, Pu, Ys] },
          { provide: Zo, useExisting: ju },
          { provide: Au, useExisting: Pu },
          { provide: Pu, useClass: Pu, deps: [Ga] },
          { provide: xa, useClass: xa, deps: [ma] },
          { provide: xu, useClass: xu, deps: [Tu, ma] },
          [],
        ],
        Qu = (function () {
          function t(t) {
            if (t)
              throw new Error(
                'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
              );
          }
          var e;
          return (
            (e = t),
            (t.withServerTransition = function (t) {
              return {
                ngModule: e,
                providers: [
                  { provide: Ys, useValue: t.appId },
                  { provide: Su, useExisting: Ys },
                  Eu,
                ],
              };
            }),
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (n) {
                return new (n || t)(te(e, 12));
              },
              providers: Wu,
              imports: [mu, Wa],
            })),
            t
          );
        })();
      'undefined' != typeof window && window;
      var Ku = (function () {
          return function () {};
        })(),
        Zu = (function () {
          return function () {};
        })();
      function Gu(t, e) {
        return void 0 === e && (e = null), { type: 2, steps: t, options: e };
      }
      function $u(t) {
        return { type: 6, styles: t, offset: null };
      }
      function Yu(t) {
        Promise.resolve(null).then(t);
      }
      var Ju = (function () {
          function t(t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this._destroyed = !1),
              (this._finished = !1),
              (this.parentPlayer = null),
              (this.totalTime = t + e);
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.init = function () {}),
            (t.prototype.play = function () {
              this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
                (this._started = !0);
            }),
            (t.prototype.triggerMicrotask = function () {
              var t = this;
              Yu(function () {
                return t._onFinish();
              });
            }),
            (t.prototype._onStart = function () {
              this._onStartFns.forEach(function (t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.pause = function () {}),
            (t.prototype.restart = function () {}),
            (t.prototype.finish = function () {
              this._onFinish();
            }),
            (t.prototype.destroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this.hasStarted() || this._onStart(),
                this.finish(),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function () {}),
            (t.prototype.setPosition = function (t) {}),
            (t.prototype.getPosition = function () {
              return 0;
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Xu = (function () {
          function t(t) {
            var e = this;
            (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this._onDestroyFns = []),
              (this.parentPlayer = null),
              (this.totalTime = 0),
              (this.players = t);
            var n = 0,
              r = 0,
              i = 0,
              o = this.players.length;
            0 == o
              ? Yu(function () {
                  return e._onFinish();
                })
              : this.players.forEach(function (t) {
                  t.onDone(function () {
                    ++n == o && e._onFinish();
                  }),
                    t.onDestroy(function () {
                      ++r == o && e._onDestroy();
                    }),
                    t.onStart(function () {
                      ++i == o && e._onStart();
                    });
                }),
              (this.totalTime = this.players.reduce(function (t, e) {
                return Math.max(t, e.totalTime);
              }, 0));
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function () {
              this.players.forEach(function (t) {
                return t.init();
              });
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype._onStart = function () {
              this.hasStarted() ||
                ((this._started = !0),
                this._onStartFns.forEach(function (t) {
                  return t();
                }),
                (this._onStartFns = []));
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.play = function () {
              this.parentPlayer || this.init(),
                this._onStart(),
                this.players.forEach(function (t) {
                  return t.play();
                });
            }),
            (t.prototype.pause = function () {
              this.players.forEach(function (t) {
                return t.pause();
              });
            }),
            (t.prototype.restart = function () {
              this.players.forEach(function (t) {
                return t.restart();
              });
            }),
            (t.prototype.finish = function () {
              this._onFinish(),
                this.players.forEach(function (t) {
                  return t.finish();
                });
            }),
            (t.prototype.destroy = function () {
              this._onDestroy();
            }),
            (t.prototype._onDestroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this._onFinish(),
                this.players.forEach(function (t) {
                  return t.destroy();
                }),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.reset = function () {
              this.players.forEach(function (t) {
                return t.reset();
              }),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype.setPosition = function (t) {
              var e = t * this.totalTime;
              this.players.forEach(function (t) {
                var n = t.totalTime ? Math.min(1, e / t.totalTime) : 1;
                t.setPosition(n);
              });
            }),
            (t.prototype.getPosition = function () {
              var t = 0;
              return (
                this.players.forEach(function (e) {
                  var n = e.getPosition();
                  t = Math.min(n, t);
                }),
                t
              );
            }),
            (t.prototype.beforeDestroy = function () {
              this.players.forEach(function (t) {
                t.beforeDestroy && t.beforeDestroy();
              });
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })();
      function tl() {
        return (
          'undefined' != typeof process &&
          '[object process]' === {}.toString.call(process)
        );
      }
      function el(t) {
        switch (t.length) {
          case 0:
            return new Ju();
          case 1:
            return t[0];
          default:
            return new Xu(t);
        }
      }
      function nl(t, e, n, r, i, o) {
        void 0 === i && (i = {}), void 0 === o && (o = {});
        var s = [],
          a = [],
          u = -1,
          l = null;
        if (
          (r.forEach(function (t) {
            var n = t.offset,
              r = n == u,
              c = (r && l) || {};
            Object.keys(t).forEach(function (n) {
              var r = n,
                a = t[n];
              if ('offset' !== n)
                switch (((r = e.normalizePropertyName(r, s)), a)) {
                  case '!':
                    a = i[n];
                    break;
                  case '*':
                    a = o[n];
                    break;
                  default:
                    a = e.normalizeStyleValue(n, r, a, s);
                }
              c[r] = a;
            }),
              r || a.push(c),
              (l = c),
              (u = n);
          }),
          s.length)
        )
          throw new Error(
            'Unable to animate due to the following errors:\n - ' +
              s.join('\n - ')
          );
        return a;
      }
      function rl(t, e, n, r) {
        switch (e) {
          case 'start':
            t.onStart(function () {
              return r(n && il(n, 'start', t));
            });
            break;
          case 'done':
            t.onDone(function () {
              return r(n && il(n, 'done', t));
            });
            break;
          case 'destroy':
            t.onDestroy(function () {
              return r(n && il(n, 'destroy', t));
            });
        }
      }
      function il(t, e, n) {
        var r = n.totalTime,
          i = ol(
            t.element,
            t.triggerName,
            t.fromState,
            t.toState,
            e || t.phaseName,
            null == r ? t.totalTime : r,
            !!n.disabled
          ),
          o = t._data;
        return null != o && (i._data = o), i;
      }
      function ol(t, e, n, r, i, o, s) {
        return (
          void 0 === i && (i = ''),
          void 0 === o && (o = 0),
          {
            element: t,
            triggerName: e,
            fromState: n,
            toState: r,
            phaseName: i,
            totalTime: o,
            disabled: !!s,
          }
        );
      }
      function sl(t, e, n) {
        var r;
        return (
          t instanceof Map
            ? (r = t.get(e)) || t.set(e, (r = n))
            : (r = t[e]) || (r = t[e] = n),
          r
        );
      }
      function al(t) {
        var e = t.indexOf(':');
        return [t.substring(1, e), t.substr(e + 1)];
      }
      var ul = function (t, e) {
          return !1;
        },
        ll = function (t, e) {
          return !1;
        },
        cl = function (t, e, n) {
          return [];
        },
        fl = tl();
      (fl || 'undefined' != typeof Element) &&
        ((ul = function (t, e) {
          return t.contains(e);
        }),
        (ll = (function () {
          if (fl || Element.prototype.matches)
            return function (t, e) {
              return t.matches(e);
            };
          var t = Element.prototype,
            e =
              t.matchesSelector ||
              t.mozMatchesSelector ||
              t.msMatchesSelector ||
              t.oMatchesSelector ||
              t.webkitMatchesSelector;
          return e
            ? function (t, n) {
                return e.apply(t, [n]);
              }
            : ll;
        })()),
        (cl = function (t, e, n) {
          var r = [];
          if (n) r.push.apply(r, u(t.querySelectorAll(e)));
          else {
            var i = t.querySelector(e);
            i && r.push(i);
          }
          return r;
        }));
      var pl = null,
        hl = !1;
      function dl(t) {
        pl ||
          ((pl = ('undefined' != typeof document ? document.body : null) || {}),
          (hl = !!pl.style && 'WebkitAppearance' in pl.style));
        var e = !0;
        return (
          pl.style &&
            !(function (t) {
              return 'ebkit' == t.substring(1, 6);
            })(t) &&
            !(e = t in pl.style) &&
            hl &&
            (e =
              'Webkit' + t.charAt(0).toUpperCase() + t.substr(1) in pl.style),
          e
        );
      }
      var yl = ll,
        vl = ul,
        ml = cl;
      function gl(t) {
        var e = {};
        return (
          Object.keys(t).forEach(function (n) {
            var r = n.replace(/([a-z])([A-Z])/g, '$1-$2');
            e[r] = t[n];
          }),
          e
        );
      }
      var _l = (function () {
          function t() {}
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return dl(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return yl(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return vl(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return ml(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return n || '';
            }),
            (t.prototype.animate = function (t, e, n, r, i, o, s) {
              return void 0 === o && (o = []), new Ju(n, r);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        wl = (function () {
          function t() {}
          return (t.NOOP = new _l()), t;
        })();
      function bl(t) {
        if ('number' == typeof t) return t;
        var e = t.match(/^(-?[\.\d]+)(m?s)/);
        return !e || e.length < 2 ? 0 : Sl(parseFloat(e[1]), e[2]);
      }
      function Sl(t, e) {
        switch (e) {
          case 's':
            return 1e3 * t;
          default:
            return t;
        }
      }
      function El(t, e, n) {
        return t.hasOwnProperty('duration')
          ? t
          : (function (t, e, n) {
              var r,
                i = 0,
                o = '';
              if ('string' == typeof t) {
                var s = t.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === s)
                  return (
                    e.push('The provided timing value "' + t + '" is invalid.'),
                    { duration: 0, delay: 0, easing: '' }
                  );
                r = Sl(parseFloat(s[1]), s[2]);
                var a = s[3];
                null != a && (i = Sl(parseFloat(a), s[4]));
                var u = s[5];
                u && (o = u);
              } else r = t;
              if (!n) {
                var l = !1,
                  c = e.length;
                r < 0 &&
                  (e.push(
                    'Duration values below 0 are not allowed for this animation step.'
                  ),
                  (l = !0)),
                  i < 0 &&
                    (e.push(
                      'Delay values below 0 are not allowed for this animation step.'
                    ),
                    (l = !0)),
                  l &&
                    e.splice(
                      c,
                      0,
                      'The provided timing value "' + t + '" is invalid.'
                    );
              }
              return { duration: r, delay: i, easing: o };
            })(t, e, n);
      }
      function Cl(t, e) {
        return (
          void 0 === e && (e = {}),
          Object.keys(t).forEach(function (n) {
            e[n] = t[n];
          }),
          e
        );
      }
      function Tl(t, e, n) {
        if ((void 0 === n && (n = {}), e)) for (var r in t) n[r] = t[r];
        else Cl(t, n);
        return n;
      }
      function xl(t, e, n) {
        return n ? e + ':' + n + ';' : '';
      }
      function kl(t) {
        for (var e = '', n = 0; n < t.style.length; n++)
          e += xl(0, (r = t.style.item(n)), t.style.getPropertyValue(r));
        for (var r in t.style)
          t.style.hasOwnProperty(r) &&
            !r.startsWith('_') &&
            (e += xl(
              0,
              r.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
              t.style[r]
            ));
        t.setAttribute('style', e);
      }
      function Al(t, e, n) {
        t.style &&
          (Object.keys(e).forEach(function (r) {
            var i = Fl(r);
            n && !n.hasOwnProperty(r) && (n[r] = t.style[i]),
              (t.style[i] = e[r]);
          }),
          tl() && kl(t));
      }
      function Pl(t, e) {
        t.style &&
          (Object.keys(e).forEach(function (e) {
            var n = Fl(e);
            t.style[n] = '';
          }),
          tl() && kl(t));
      }
      function Rl(t) {
        return Array.isArray(t) ? (1 == t.length ? t[0] : Gu(t)) : t;
      }
      var Ol = new RegExp('{{\\s*(.+?)\\s*}}', 'g');
      function Il(t) {
        var e = [];
        if ('string' == typeof t) {
          for (var n = void 0; (n = Ol.exec(t)); ) e.push(n[1]);
          Ol.lastIndex = 0;
        }
        return e;
      }
      function Nl(t, e, n) {
        var r = t.toString(),
          i = r.replace(Ol, function (t, r) {
            var i = e[r];
            return (
              e.hasOwnProperty(r) ||
                (n.push('Please provide a value for the animation param ' + r),
                (i = '')),
              i.toString()
            );
          });
        return i == r ? t : i;
      }
      function jl(t) {
        for (var e = [], n = t.next(); !n.done; )
          e.push(n.value), (n = t.next());
        return e;
      }
      var Dl = /-+([a-z0-9])/g;
      function Fl(t) {
        return t.replace(Dl, function () {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return t[1].toUpperCase();
        });
      }
      function Ll(t, e) {
        return 0 === t || 0 === e;
      }
      function Ml(t, e, n) {
        var r = Object.keys(n);
        if (r.length && e.length) {
          var i = e[0],
            o = [];
          if (
            (r.forEach(function (t) {
              i.hasOwnProperty(t) || o.push(t), (i[t] = n[t]);
            }),
            o.length)
          )
            for (
              var s = function () {
                  var n = e[a];
                  o.forEach(function (e) {
                    n[e] = Hl(t, e);
                  });
                },
                a = 1;
              a < e.length;
              a++
            )
              s();
        }
        return e;
      }
      function Ul(t, e, n) {
        switch (e.type) {
          case 7:
            return t.visitTrigger(e, n);
          case 0:
            return t.visitState(e, n);
          case 1:
            return t.visitTransition(e, n);
          case 2:
            return t.visitSequence(e, n);
          case 3:
            return t.visitGroup(e, n);
          case 4:
            return t.visitAnimate(e, n);
          case 5:
            return t.visitKeyframes(e, n);
          case 6:
            return t.visitStyle(e, n);
          case 8:
            return t.visitReference(e, n);
          case 9:
            return t.visitAnimateChild(e, n);
          case 10:
            return t.visitAnimateRef(e, n);
          case 11:
            return t.visitQuery(e, n);
          case 12:
            return t.visitStagger(e, n);
          default:
            throw new Error(
              'Unable to resolve animation metadata node #' + e.type
            );
        }
      }
      function Hl(t, e) {
        return window.getComputedStyle(t)[e];
      }
      var Vl = new Set(['true', '1']),
        ql = new Set(['false', '0']);
      function Bl(t, e) {
        var n = Vl.has(t) || ql.has(t),
          r = Vl.has(e) || ql.has(e);
        return function (i, o) {
          var s = '*' == t || t == i,
            a = '*' == e || e == o;
          return (
            !s && n && 'boolean' == typeof i && (s = i ? Vl.has(t) : ql.has(t)),
            !a && r && 'boolean' == typeof o && (a = o ? Vl.has(e) : ql.has(e)),
            s && a
          );
        };
      }
      var zl = new RegExp('s*:selfs*,?', 'g');
      function Wl(t, e, n) {
        return new Ql(t).build(e, n);
      }
      var Ql = (function () {
          function t(t) {
            this._driver = t;
          }
          return (
            (t.prototype.build = function (t, e) {
              var n = new Kl(e);
              return this._resetContextStyleTimingState(n), Ul(this, Rl(t), n);
            }),
            (t.prototype._resetContextStyleTimingState = function (t) {
              (t.currentQuerySelector = ''),
                (t.collectedStyles = {}),
                (t.collectedStyles[''] = {}),
                (t.currentTime = 0);
            }),
            (t.prototype.visitTrigger = function (t, e) {
              var n = this,
                r = (e.queryCount = 0),
                i = (e.depCount = 0),
                o = [],
                s = [];
              return (
                '@' == t.name.charAt(0) &&
                  e.errors.push(
                    "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
                  ),
                t.definitions.forEach(function (t) {
                  if ((n._resetContextStyleTimingState(e), 0 == t.type)) {
                    var a = t,
                      u = a.name;
                    u
                      .toString()
                      .split(/\s*,\s*/)
                      .forEach(function (t) {
                        (a.name = t), o.push(n.visitState(a, e));
                      }),
                      (a.name = u);
                  } else if (1 == t.type) {
                    var l = n.visitTransition(t, e);
                    (r += l.queryCount), (i += l.depCount), s.push(l);
                  } else
                    e.errors.push(
                      'only state() and transition() definitions can sit inside of a trigger()'
                    );
                }),
                {
                  type: 7,
                  name: t.name,
                  states: o,
                  transitions: s,
                  queryCount: r,
                  depCount: i,
                  options: null,
                }
              );
            }),
            (t.prototype.visitState = function (t, e) {
              var n = this.visitStyle(t.styles, e),
                r = (t.options && t.options.params) || null;
              if (n.containsDynamicStyles) {
                var i = new Set(),
                  o = r || {};
                if (
                  (n.styles.forEach(function (t) {
                    if (Zl(t)) {
                      var e = t;
                      Object.keys(e).forEach(function (t) {
                        Il(e[t]).forEach(function (t) {
                          o.hasOwnProperty(t) || i.add(t);
                        });
                      });
                    }
                  }),
                  i.size)
                ) {
                  var s = jl(i.values());
                  e.errors.push(
                    'state("' +
                      t.name +
                      '", ...) must define default values for all the following style substitutions: ' +
                      s.join(', ')
                  );
                }
              }
              return {
                type: 0,
                name: t.name,
                style: n,
                options: r ? { params: r } : null,
              };
            }),
            (t.prototype.visitTransition = function (t, e) {
              (e.queryCount = 0), (e.depCount = 0);
              var n,
                r,
                i,
                o = Ul(this, Rl(t.animation), e);
              return {
                type: 1,
                matchers:
                  ((n = t.expr),
                  (r = e.errors),
                  (i = []),
                  'string' == typeof n
                    ? n.split(/\s*,\s*/).forEach(function (t) {
                        return (function (t, e, n) {
                          if (':' == t[0]) {
                            var r = (function (t, e) {
                              switch (t) {
                                case ':enter':
                                  return 'void => *';
                                case ':leave':
                                  return '* => void';
                                case ':increment':
                                  return function (t, e) {
                                    return parseFloat(e) > parseFloat(t);
                                  };
                                case ':decrement':
                                  return function (t, e) {
                                    return parseFloat(e) < parseFloat(t);
                                  };
                                default:
                                  return (
                                    e.push(
                                      'The transition alias value "' +
                                        t +
                                        '" is not supported'
                                    ),
                                    '* => *'
                                  );
                              }
                            })(t, n);
                            if ('function' == typeof r) return void e.push(r);
                            t = r;
                          }
                          var i = t.match(
                            /^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/
                          );
                          if (null == i || i.length < 4)
                            return (
                              n.push(
                                'The provided transition expression "' +
                                  t +
                                  '" is not supported'
                              ),
                              e
                            );
                          var o = i[1],
                            s = i[2],
                            a = i[3];
                          e.push(Bl(o, a)),
                            '<' != s[0] ||
                              ('*' == o && '*' == a) ||
                              e.push(Bl(a, o));
                        })(t, i, r);
                      })
                    : i.push(n),
                  i),
                animation: o,
                queryCount: e.queryCount,
                depCount: e.depCount,
                options: Gl(t.options),
              };
            }),
            (t.prototype.visitSequence = function (t, e) {
              var n = this;
              return {
                type: 2,
                steps: t.steps.map(function (t) {
                  return Ul(n, t, e);
                }),
                options: Gl(t.options),
              };
            }),
            (t.prototype.visitGroup = function (t, e) {
              var n = this,
                r = e.currentTime,
                i = 0,
                o = t.steps.map(function (t) {
                  e.currentTime = r;
                  var o = Ul(n, t, e);
                  return (i = Math.max(i, e.currentTime)), o;
                });
              return (
                (e.currentTime = i),
                { type: 3, steps: o, options: Gl(t.options) }
              );
            }),
            (t.prototype.visitAnimate = function (t, e) {
              var n,
                r = (function (t, e) {
                  var n = null;
                  if (t.hasOwnProperty('duration')) n = t;
                  else if ('number' == typeof t)
                    return $l(El(t, e).duration, 0, '');
                  var r = t;
                  if (
                    r.split(/\s+/).some(function (t) {
                      return '{' == t.charAt(0) && '{' == t.charAt(1);
                    })
                  ) {
                    var i = $l(0, 0, '');
                    return (i.dynamic = !0), (i.strValue = r), i;
                  }
                  return $l((n = n || El(r, e)).duration, n.delay, n.easing);
                })(t.timings, e.errors);
              e.currentAnimateTimings = r;
              var i = t.styles ? t.styles : $u({});
              if (5 == i.type) n = this.visitKeyframes(i, e);
              else {
                var o = t.styles,
                  s = !1;
                if (!o) {
                  s = !0;
                  var a = {};
                  r.easing && (a.easing = r.easing), (o = $u(a));
                }
                e.currentTime += r.duration + r.delay;
                var u = this.visitStyle(o, e);
                (u.isEmptyStep = s), (n = u);
              }
              return (
                (e.currentAnimateTimings = null),
                { type: 4, timings: r, style: n, options: null }
              );
            }),
            (t.prototype.visitStyle = function (t, e) {
              var n = this._makeStyleAst(t, e);
              return this._validateStyleAst(n, e), n;
            }),
            (t.prototype._makeStyleAst = function (t, e) {
              var n = [];
              Array.isArray(t.styles)
                ? t.styles.forEach(function (t) {
                    'string' == typeof t
                      ? '*' == t
                        ? n.push(t)
                        : e.errors.push(
                            'The provided style string value ' +
                              t +
                              ' is not allowed.'
                          )
                      : n.push(t);
                  })
                : n.push(t.styles);
              var r = !1,
                i = null;
              return (
                n.forEach(function (t) {
                  if (Zl(t)) {
                    var e = t,
                      n = e.easing;
                    if ((n && ((i = n), delete e.easing), !r))
                      for (var o in e)
                        if (e[o].toString().indexOf('{{') >= 0) {
                          r = !0;
                          break;
                        }
                  }
                }),
                {
                  type: 6,
                  styles: n,
                  easing: i,
                  offset: t.offset,
                  containsDynamicStyles: r,
                  options: null,
                }
              );
            }),
            (t.prototype._validateStyleAst = function (t, e) {
              var n = this,
                r = e.currentAnimateTimings,
                i = e.currentTime,
                o = e.currentTime;
              r && o > 0 && (o -= r.duration + r.delay),
                t.styles.forEach(function (t) {
                  'string' != typeof t &&
                    Object.keys(t).forEach(function (r) {
                      if (n._driver.validateStyleProperty(r)) {
                        var s,
                          a,
                          u,
                          l = e.collectedStyles[e.currentQuerySelector],
                          c = l[r],
                          f = !0;
                        c &&
                          (o != i &&
                            o >= c.startTime &&
                            i <= c.endTime &&
                            (e.errors.push(
                              'The CSS property "' +
                                r +
                                '" that exists between the times of "' +
                                c.startTime +
                                'ms" and "' +
                                c.endTime +
                                'ms" is also being animated in a parallel animation between the times of "' +
                                o +
                                'ms" and "' +
                                i +
                                'ms"'
                            ),
                            (f = !1)),
                          (o = c.startTime)),
                          f && (l[r] = { startTime: o, endTime: i }),
                          e.options &&
                            ((s = e.errors),
                            (a = e.options.params || {}),
                            (u = Il(t[r])).length &&
                              u.forEach(function (t) {
                                a.hasOwnProperty(t) ||
                                  s.push(
                                    'Unable to resolve the local animation param ' +
                                      t +
                                      ' in the given list of values'
                                  );
                              }));
                      } else
                        e.errors.push(
                          'The provided animation property "' +
                            r +
                            '" is not a supported CSS property for animations'
                        );
                    });
                });
            }),
            (t.prototype.visitKeyframes = function (t, e) {
              var n = this,
                r = { type: 5, styles: [], options: null };
              if (!e.currentAnimateTimings)
                return (
                  e.errors.push(
                    'keyframes() must be placed inside of a call to animate()'
                  ),
                  r
                );
              var i = 0,
                o = [],
                s = !1,
                a = !1,
                u = 0,
                l = t.steps.map(function (t) {
                  var r = n._makeStyleAst(t, e),
                    l =
                      null != r.offset
                        ? r.offset
                        : (function (t) {
                            if ('string' == typeof t) return null;
                            var e = null;
                            if (Array.isArray(t))
                              t.forEach(function (t) {
                                if (Zl(t) && t.hasOwnProperty('offset')) {
                                  var n = t;
                                  (e = parseFloat(n.offset)), delete n.offset;
                                }
                              });
                            else if (Zl(t) && t.hasOwnProperty('offset')) {
                              var n = t;
                              (e = parseFloat(n.offset)), delete n.offset;
                            }
                            return e;
                          })(r.styles),
                    c = 0;
                  return (
                    null != l && (i++, (c = r.offset = l)),
                    (a = a || c < 0 || c > 1),
                    (s = s || c < u),
                    (u = c),
                    o.push(c),
                    r
                  );
                });
              a &&
                e.errors.push(
                  'Please ensure that all keyframe offsets are between 0 and 1'
                ),
                s &&
                  e.errors.push(
                    'Please ensure that all keyframe offsets are in order'
                  );
              var c = t.steps.length,
                f = 0;
              i > 0 && i < c
                ? e.errors.push(
                    'Not all style() steps within the declared keyframes() contain offsets'
                  )
                : 0 == i && (f = 1 / (c - 1));
              var p = c - 1,
                h = e.currentTime,
                d = e.currentAnimateTimings,
                y = d.duration;
              return (
                l.forEach(function (t, i) {
                  var s = f > 0 ? (i == p ? 1 : f * i) : o[i],
                    a = s * y;
                  (e.currentTime = h + d.delay + a),
                    (d.duration = a),
                    n._validateStyleAst(t, e),
                    (t.offset = s),
                    r.styles.push(t);
                }),
                r
              );
            }),
            (t.prototype.visitReference = function (t, e) {
              return {
                type: 8,
                animation: Ul(this, Rl(t.animation), e),
                options: Gl(t.options),
              };
            }),
            (t.prototype.visitAnimateChild = function (t, e) {
              return e.depCount++, { type: 9, options: Gl(t.options) };
            }),
            (t.prototype.visitAnimateRef = function (t, e) {
              return {
                type: 10,
                animation: this.visitReference(t.animation, e),
                options: Gl(t.options),
              };
            }),
            (t.prototype.visitQuery = function (t, e) {
              var n = e.currentQuerySelector,
                r = t.options || {};
              e.queryCount++, (e.currentQuery = t);
              var i = a(
                  (function (t) {
                    var e = !!t.split(/\s*,\s*/).find(function (t) {
                      return ':self' == t;
                    });
                    return (
                      e && (t = t.replace(zl, '')),
                      [
                        (t = t
                          .replace(/@\*/g, '.ng-trigger')
                          .replace(/@\w+/g, function (t) {
                            return '.ng-trigger-' + t.substr(1);
                          })
                          .replace(/:animating/g, '.ng-animating')),
                        e,
                      ]
                    );
                  })(t.selector),
                  2
                ),
                o = i[0],
                s = i[1];
              (e.currentQuerySelector = n.length ? n + ' ' + o : o),
                sl(e.collectedStyles, e.currentQuerySelector, {});
              var u = Ul(this, Rl(t.animation), e);
              return (
                (e.currentQuery = null),
                (e.currentQuerySelector = n),
                {
                  type: 11,
                  selector: o,
                  limit: r.limit || 0,
                  optional: !!r.optional,
                  includeSelf: s,
                  animation: u,
                  originalSelector: t.selector,
                  options: Gl(t.options),
                }
              );
            }),
            (t.prototype.visitStagger = function (t, e) {
              e.currentQuery ||
                e.errors.push('stagger() can only be used inside of query()');
              var n =
                'full' === t.timings
                  ? { duration: 0, delay: 0, easing: 'full' }
                  : El(t.timings, e.errors, !0);
              return {
                type: 12,
                animation: Ul(this, Rl(t.animation), e),
                timings: n,
                options: null,
              };
            }),
            t
          );
        })(),
        Kl = (function () {
          return function (t) {
            (this.errors = t),
              (this.queryCount = 0),
              (this.depCount = 0),
              (this.currentTransition = null),
              (this.currentQuery = null),
              (this.currentQuerySelector = null),
              (this.currentAnimateTimings = null),
              (this.currentTime = 0),
              (this.collectedStyles = {}),
              (this.options = null);
          };
        })();
      function Zl(t) {
        return !Array.isArray(t) && 'object' == typeof t;
      }
      function Gl(t) {
        var e;
        return (
          t
            ? (t = Cl(t)).params && (t.params = (e = t.params) ? Cl(e) : null)
            : (t = {}),
          t
        );
      }
      function $l(t, e, n) {
        return { duration: t, delay: e, easing: n };
      }
      function Yl(t, e, n, r, i, o, s, a) {
        return (
          void 0 === s && (s = null),
          void 0 === a && (a = !1),
          {
            type: 1,
            element: t,
            keyframes: e,
            preStyleProps: n,
            postStyleProps: r,
            duration: i,
            delay: o,
            totalTime: i + o,
            easing: s,
            subTimeline: a,
          }
        );
      }
      var Jl = (function () {
          function t() {
            this._map = new Map();
          }
          return (
            (t.prototype.consume = function (t) {
              var e = this._map.get(t);
              return e ? this._map.delete(t) : (e = []), e;
            }),
            (t.prototype.append = function (t, e) {
              var n = this._map.get(t);
              n || this._map.set(t, (n = [])), n.push.apply(n, u(e));
            }),
            (t.prototype.has = function (t) {
              return this._map.has(t);
            }),
            (t.prototype.clear = function () {
              this._map.clear();
            }),
            t
          );
        })(),
        Xl = new RegExp(':enter', 'g'),
        tc = new RegExp(':leave', 'g');
      function ec(t, e, n, r, i, o, s, a, u, l) {
        return (
          void 0 === o && (o = {}),
          void 0 === s && (s = {}),
          void 0 === l && (l = []),
          new nc().buildKeyframes(t, e, n, r, i, o, s, a, u, l)
        );
      }
      var nc = (function () {
          function t() {}
          return (
            (t.prototype.buildKeyframes = function (
              t,
              e,
              n,
              r,
              i,
              o,
              s,
              a,
              u,
              l
            ) {
              void 0 === l && (l = []), (u = u || new Jl());
              var c = new ic(t, e, u, r, i, l, []);
              (c.options = a),
                c.currentTimeline.setStyles([o], null, c.errors, a),
                Ul(this, n, c);
              var f = c.timelines.filter(function (t) {
                return t.containsAnimation();
              });
              if (f.length && Object.keys(s).length) {
                var p = f[f.length - 1];
                p.allowOnlyTimelineStyles() ||
                  p.setStyles([s], null, c.errors, a);
              }
              return f.length
                ? f.map(function (t) {
                    return t.buildKeyframes();
                  })
                : [Yl(e, [], [], [], 0, 0, '', !1)];
            }),
            (t.prototype.visitTrigger = function (t, e) {}),
            (t.prototype.visitState = function (t, e) {}),
            (t.prototype.visitTransition = function (t, e) {}),
            (t.prototype.visitAnimateChild = function (t, e) {
              var n = e.subInstructions.consume(e.element);
              if (n) {
                var r = e.createSubContext(t.options),
                  i = e.currentTimeline.currentTime,
                  o = this._visitSubInstructions(n, r, r.options);
                i != o && e.transformIntoNewTimeline(o);
              }
              e.previousNode = t;
            }),
            (t.prototype.visitAnimateRef = function (t, e) {
              var n = e.createSubContext(t.options);
              n.transformIntoNewTimeline(),
                this.visitReference(t.animation, n),
                e.transformIntoNewTimeline(n.currentTimeline.currentTime),
                (e.previousNode = t);
            }),
            (t.prototype._visitSubInstructions = function (t, e, n) {
              var r = e.currentTimeline.currentTime,
                i = null != n.duration ? bl(n.duration) : null,
                o = null != n.delay ? bl(n.delay) : null;
              return (
                0 !== i &&
                  t.forEach(function (t) {
                    var n = e.appendInstructionToTimeline(t, i, o);
                    r = Math.max(r, n.duration + n.delay);
                  }),
                r
              );
            }),
            (t.prototype.visitReference = function (t, e) {
              e.updateOptions(t.options, !0),
                Ul(this, t.animation, e),
                (e.previousNode = t);
            }),
            (t.prototype.visitSequence = function (t, e) {
              var n = this,
                r = e.subContextCount,
                i = e,
                o = t.options;
              if (
                o &&
                (o.params || o.delay) &&
                ((i = e.createSubContext(o)).transformIntoNewTimeline(),
                null != o.delay)
              ) {
                6 == i.previousNode.type &&
                  (i.currentTimeline.snapshotCurrentStyles(),
                  (i.previousNode = rc));
                var s = bl(o.delay);
                i.delayNextStep(s);
              }
              t.steps.length &&
                (t.steps.forEach(function (t) {
                  return Ul(n, t, i);
                }),
                i.currentTimeline.applyStylesToKeyframe(),
                i.subContextCount > r && i.transformIntoNewTimeline()),
                (e.previousNode = t);
            }),
            (t.prototype.visitGroup = function (t, e) {
              var n = this,
                r = [],
                i = e.currentTimeline.currentTime,
                o = t.options && t.options.delay ? bl(t.options.delay) : 0;
              t.steps.forEach(function (s) {
                var a = e.createSubContext(t.options);
                o && a.delayNextStep(o),
                  Ul(n, s, a),
                  (i = Math.max(i, a.currentTimeline.currentTime)),
                  r.push(a.currentTimeline);
              }),
                r.forEach(function (t) {
                  return e.currentTimeline.mergeTimelineCollectedStyles(t);
                }),
                e.transformIntoNewTimeline(i),
                (e.previousNode = t);
            }),
            (t.prototype._visitTiming = function (t, e) {
              if (t.dynamic) {
                var n = t.strValue;
                return El(e.params ? Nl(n, e.params, e.errors) : n, e.errors);
              }
              return { duration: t.duration, delay: t.delay, easing: t.easing };
            }),
            (t.prototype.visitAnimate = function (t, e) {
              var n = (e.currentAnimateTimings = this._visitTiming(
                  t.timings,
                  e
                )),
                r = e.currentTimeline;
              n.delay && (e.incrementTime(n.delay), r.snapshotCurrentStyles());
              var i = t.style;
              5 == i.type
                ? this.visitKeyframes(i, e)
                : (e.incrementTime(n.duration),
                  this.visitStyle(i, e),
                  r.applyStylesToKeyframe()),
                (e.currentAnimateTimings = null),
                (e.previousNode = t);
            }),
            (t.prototype.visitStyle = function (t, e) {
              var n = e.currentTimeline,
                r = e.currentAnimateTimings;
              !r && n.getCurrentStyleProperties().length && n.forwardFrame();
              var i = (r && r.easing) || t.easing;
              t.isEmptyStep
                ? n.applyEmptyStep(i)
                : n.setStyles(t.styles, i, e.errors, e.options),
                (e.previousNode = t);
            }),
            (t.prototype.visitKeyframes = function (t, e) {
              var n = e.currentAnimateTimings,
                r = e.currentTimeline.duration,
                i = n.duration,
                o = e.createSubContext().currentTimeline;
              (o.easing = n.easing),
                t.styles.forEach(function (t) {
                  o.forwardTime((t.offset || 0) * i),
                    o.setStyles(t.styles, t.easing, e.errors, e.options),
                    o.applyStylesToKeyframe();
                }),
                e.currentTimeline.mergeTimelineCollectedStyles(o),
                e.transformIntoNewTimeline(r + i),
                (e.previousNode = t);
            }),
            (t.prototype.visitQuery = function (t, e) {
              var n = this,
                r = e.currentTimeline.currentTime,
                i = t.options || {},
                o = i.delay ? bl(i.delay) : 0;
              o &&
                (6 === e.previousNode.type ||
                  (0 == r &&
                    e.currentTimeline.getCurrentStyleProperties().length)) &&
                (e.currentTimeline.snapshotCurrentStyles(),
                (e.previousNode = rc));
              var s = r,
                a = e.invokeQuery(
                  t.selector,
                  t.originalSelector,
                  t.limit,
                  t.includeSelf,
                  !!i.optional,
                  e.errors
                );
              e.currentQueryTotal = a.length;
              var u = null;
              a.forEach(function (r, i) {
                e.currentQueryIndex = i;
                var a = e.createSubContext(t.options, r);
                o && a.delayNextStep(o),
                  r === e.element && (u = a.currentTimeline),
                  Ul(n, t.animation, a),
                  a.currentTimeline.applyStylesToKeyframe(),
                  (s = Math.max(s, a.currentTimeline.currentTime));
              }),
                (e.currentQueryIndex = 0),
                (e.currentQueryTotal = 0),
                e.transformIntoNewTimeline(s),
                u &&
                  (e.currentTimeline.mergeTimelineCollectedStyles(u),
                  e.currentTimeline.snapshotCurrentStyles()),
                (e.previousNode = t);
            }),
            (t.prototype.visitStagger = function (t, e) {
              var n = e.parentContext,
                r = e.currentTimeline,
                i = t.timings,
                o = Math.abs(i.duration),
                s = o * (e.currentQueryTotal - 1),
                a = o * e.currentQueryIndex;
              switch (i.duration < 0 ? 'reverse' : i.easing) {
                case 'reverse':
                  a = s - a;
                  break;
                case 'full':
                  a = n.currentStaggerTime;
              }
              var u = e.currentTimeline;
              a && u.delayNextStep(a);
              var l = u.currentTime;
              Ul(this, t.animation, e),
                (e.previousNode = t),
                (n.currentStaggerTime =
                  r.currentTime -
                  l +
                  (r.startTime - n.currentTimeline.startTime));
            }),
            t
          );
        })(),
        rc = {},
        ic = (function () {
          function t(t, e, n, r, i, o, s, a) {
            (this._driver = t),
              (this.element = e),
              (this.subInstructions = n),
              (this._enterClassName = r),
              (this._leaveClassName = i),
              (this.errors = o),
              (this.timelines = s),
              (this.parentContext = null),
              (this.currentAnimateTimings = null),
              (this.previousNode = rc),
              (this.subContextCount = 0),
              (this.options = {}),
              (this.currentQueryIndex = 0),
              (this.currentQueryTotal = 0),
              (this.currentStaggerTime = 0),
              (this.currentTimeline = a || new oc(this._driver, e, 0)),
              s.push(this.currentTimeline);
          }
          return (
            Object.defineProperty(t.prototype, 'params', {
              get: function () {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.updateOptions = function (t, e) {
              var n = this;
              if (t) {
                var r = t,
                  i = this.options;
                null != r.duration && (i.duration = bl(r.duration)),
                  null != r.delay && (i.delay = bl(r.delay));
                var o = r.params;
                if (o) {
                  var s = i.params;
                  s || (s = this.options.params = {}),
                    Object.keys(o).forEach(function (t) {
                      (e && s.hasOwnProperty(t)) ||
                        (s[t] = Nl(o[t], s, n.errors));
                    });
                }
              }
            }),
            (t.prototype._copyOptions = function () {
              var t = {};
              if (this.options) {
                var e = this.options.params;
                if (e) {
                  var n = (t.params = {});
                  Object.keys(e).forEach(function (t) {
                    n[t] = e[t];
                  });
                }
              }
              return t;
            }),
            (t.prototype.createSubContext = function (e, n, r) {
              void 0 === e && (e = null);
              var i = n || this.element,
                o = new t(
                  this._driver,
                  i,
                  this.subInstructions,
                  this._enterClassName,
                  this._leaveClassName,
                  this.errors,
                  this.timelines,
                  this.currentTimeline.fork(i, r || 0)
                );
              return (
                (o.previousNode = this.previousNode),
                (o.currentAnimateTimings = this.currentAnimateTimings),
                (o.options = this._copyOptions()),
                o.updateOptions(e),
                (o.currentQueryIndex = this.currentQueryIndex),
                (o.currentQueryTotal = this.currentQueryTotal),
                (o.parentContext = this),
                this.subContextCount++,
                o
              );
            }),
            (t.prototype.transformIntoNewTimeline = function (t) {
              return (
                (this.previousNode = rc),
                (this.currentTimeline = this.currentTimeline.fork(
                  this.element,
                  t
                )),
                this.timelines.push(this.currentTimeline),
                this.currentTimeline
              );
            }),
            (t.prototype.appendInstructionToTimeline = function (t, e, n) {
              var r = {
                  duration: null != e ? e : t.duration,
                  delay:
                    this.currentTimeline.currentTime +
                    (null != n ? n : 0) +
                    t.delay,
                  easing: '',
                },
                i = new sc(
                  this._driver,
                  t.element,
                  t.keyframes,
                  t.preStyleProps,
                  t.postStyleProps,
                  r,
                  t.stretchStartingKeyframe
                );
              return this.timelines.push(i), r;
            }),
            (t.prototype.incrementTime = function (t) {
              this.currentTimeline.forwardTime(
                this.currentTimeline.duration + t
              );
            }),
            (t.prototype.delayNextStep = function (t) {
              t > 0 && this.currentTimeline.delayNextStep(t);
            }),
            (t.prototype.invokeQuery = function (t, e, n, r, i, o) {
              var s = [];
              if ((r && s.push(this.element), t.length > 0)) {
                t = (t = t.replace(Xl, '.' + this._enterClassName)).replace(
                  tc,
                  '.' + this._leaveClassName
                );
                var a = this._driver.query(this.element, t, 1 != n);
                0 !== n &&
                  (a = n < 0 ? a.slice(a.length + n, a.length) : a.slice(0, n)),
                  s.push.apply(s, u(a));
              }
              return (
                i ||
                  0 != s.length ||
                  o.push(
                    '`query("' +
                      e +
                      '")` returned zero elements. (Use `query("' +
                      e +
                      '", { optional: true })` if you wish to allow this.)'
                  ),
                s
              );
            }),
            t
          );
        })(),
        oc = (function () {
          function t(t, e, n, r) {
            (this._driver = t),
              (this.element = e),
              (this.startTime = n),
              (this._elementTimelineStylesLookup = r),
              (this.duration = 0),
              (this._previousKeyframe = {}),
              (this._currentKeyframe = {}),
              (this._keyframes = new Map()),
              (this._styleSummary = {}),
              (this._pendingStyles = {}),
              (this._backFill = {}),
              (this._currentEmptyStepKeyframe = null),
              this._elementTimelineStylesLookup ||
                (this._elementTimelineStylesLookup = new Map()),
              (this._localTimelineStyles = Object.create(this._backFill, {})),
              (this._globalTimelineStyles =
                this._elementTimelineStylesLookup.get(e)),
              this._globalTimelineStyles ||
                ((this._globalTimelineStyles = this._localTimelineStyles),
                this._elementTimelineStylesLookup.set(
                  e,
                  this._localTimelineStyles
                )),
              this._loadKeyframe();
          }
          return (
            (t.prototype.containsAnimation = function () {
              switch (this._keyframes.size) {
                case 0:
                  return !1;
                case 1:
                  return this.getCurrentStyleProperties().length > 0;
                default:
                  return !0;
              }
            }),
            (t.prototype.getCurrentStyleProperties = function () {
              return Object.keys(this._currentKeyframe);
            }),
            Object.defineProperty(t.prototype, 'currentTime', {
              get: function () {
                return this.startTime + this.duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.delayNextStep = function (t) {
              var e =
                1 == this._keyframes.size &&
                Object.keys(this._pendingStyles).length;
              this.duration || e
                ? (this.forwardTime(this.currentTime + t),
                  e && this.snapshotCurrentStyles())
                : (this.startTime += t);
            }),
            (t.prototype.fork = function (e, n) {
              return (
                this.applyStylesToKeyframe(),
                new t(
                  this._driver,
                  e,
                  n || this.currentTime,
                  this._elementTimelineStylesLookup
                )
              );
            }),
            (t.prototype._loadKeyframe = function () {
              this._currentKeyframe &&
                (this._previousKeyframe = this._currentKeyframe),
                (this._currentKeyframe = this._keyframes.get(this.duration)),
                this._currentKeyframe ||
                  ((this._currentKeyframe = Object.create(this._backFill, {})),
                  this._keyframes.set(this.duration, this._currentKeyframe));
            }),
            (t.prototype.forwardFrame = function () {
              (this.duration += 1), this._loadKeyframe();
            }),
            (t.prototype.forwardTime = function (t) {
              this.applyStylesToKeyframe(),
                (this.duration = t),
                this._loadKeyframe();
            }),
            (t.prototype._updateStyle = function (t, e) {
              (this._localTimelineStyles[t] = e),
                (this._globalTimelineStyles[t] = e),
                (this._styleSummary[t] = { time: this.currentTime, value: e });
            }),
            (t.prototype.allowOnlyTimelineStyles = function () {
              return this._currentEmptyStepKeyframe !== this._currentKeyframe;
            }),
            (t.prototype.applyEmptyStep = function (t) {
              var e = this;
              t && (this._previousKeyframe.easing = t),
                Object.keys(this._globalTimelineStyles).forEach(function (t) {
                  (e._backFill[t] = e._globalTimelineStyles[t] || '*'),
                    (e._currentKeyframe[t] = '*');
                }),
                (this._currentEmptyStepKeyframe = this._currentKeyframe);
            }),
            (t.prototype.setStyles = function (t, e, n, r) {
              var i = this;
              e && (this._previousKeyframe.easing = e);
              var o = (r && r.params) || {},
                s = (function (t, e) {
                  var n,
                    r = {};
                  return (
                    t.forEach(function (t) {
                      '*' === t
                        ? (n = n || Object.keys(e)).forEach(function (t) {
                            r[t] = '*';
                          })
                        : Tl(t, !1, r);
                    }),
                    r
                  );
                })(t, this._globalTimelineStyles);
              Object.keys(s).forEach(function (t) {
                var e = Nl(s[t], o, n);
                (i._pendingStyles[t] = e),
                  i._localTimelineStyles.hasOwnProperty(t) ||
                    (i._backFill[t] = i._globalTimelineStyles.hasOwnProperty(t)
                      ? i._globalTimelineStyles[t]
                      : '*'),
                  i._updateStyle(t, e);
              });
            }),
            (t.prototype.applyStylesToKeyframe = function () {
              var t = this,
                e = this._pendingStyles,
                n = Object.keys(e);
              0 != n.length &&
                ((this._pendingStyles = {}),
                n.forEach(function (n) {
                  t._currentKeyframe[n] = e[n];
                }),
                Object.keys(this._localTimelineStyles).forEach(function (e) {
                  t._currentKeyframe.hasOwnProperty(e) ||
                    (t._currentKeyframe[e] = t._localTimelineStyles[e]);
                }));
            }),
            (t.prototype.snapshotCurrentStyles = function () {
              var t = this;
              Object.keys(this._localTimelineStyles).forEach(function (e) {
                var n = t._localTimelineStyles[e];
                (t._pendingStyles[e] = n), t._updateStyle(e, n);
              });
            }),
            (t.prototype.getFinalKeyframe = function () {
              return this._keyframes.get(this.duration);
            }),
            Object.defineProperty(t.prototype, 'properties', {
              get: function () {
                var t = [];
                for (var e in this._currentKeyframe) t.push(e);
                return t;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.mergeTimelineCollectedStyles = function (t) {
              var e = this;
              Object.keys(t._styleSummary).forEach(function (n) {
                var r = e._styleSummary[n],
                  i = t._styleSummary[n];
                (!r || i.time > r.time) && e._updateStyle(n, i.value);
              });
            }),
            (t.prototype.buildKeyframes = function () {
              var t = this;
              this.applyStylesToKeyframe();
              var e = new Set(),
                n = new Set(),
                r = 1 === this._keyframes.size && 0 === this.duration,
                i = [];
              this._keyframes.forEach(function (o, s) {
                var a = Tl(o, !0);
                Object.keys(a).forEach(function (t) {
                  var r = a[t];
                  '!' == r ? e.add(t) : '*' == r && n.add(t);
                }),
                  r || (a.offset = s / t.duration),
                  i.push(a);
              });
              var o = e.size ? jl(e.values()) : [],
                s = n.size ? jl(n.values()) : [];
              if (r) {
                var a = i[0],
                  u = Cl(a);
                (a.offset = 0), (u.offset = 1), (i = [a, u]);
              }
              return Yl(
                this.element,
                i,
                o,
                s,
                this.duration,
                this.startTime,
                this.easing,
                !1
              );
            }),
            t
          );
        })(),
        sc = (function (t) {
          function e(e, n, r, i, o, s, a) {
            void 0 === a && (a = !1);
            var u = t.call(this, e, n, s.delay) || this;
            return (
              (u.element = n),
              (u.keyframes = r),
              (u.preStyleProps = i),
              (u.postStyleProps = o),
              (u._stretchStartingKeyframe = a),
              (u.timings = {
                duration: s.duration,
                delay: s.delay,
                easing: s.easing,
              }),
              u
            );
          }
          return (
            i(e, t),
            (e.prototype.containsAnimation = function () {
              return this.keyframes.length > 1;
            }),
            (e.prototype.buildKeyframes = function () {
              var t = this.keyframes,
                e = this.timings,
                n = e.delay,
                r = e.duration,
                i = e.easing;
              if (this._stretchStartingKeyframe && n) {
                var o = [],
                  s = r + n,
                  a = n / s,
                  u = Tl(t[0], !1);
                (u.offset = 0), o.push(u);
                var l = Tl(t[0], !1);
                (l.offset = ac(a)), o.push(l);
                for (var c = t.length - 1, f = 1; f <= c; f++) {
                  var p = Tl(t[f], !1);
                  (p.offset = ac((n + p.offset * r) / s)), o.push(p);
                }
                (r = s), (n = 0), (i = ''), (t = o);
              }
              return Yl(
                this.element,
                t,
                this.preStyleProps,
                this.postStyleProps,
                r,
                n,
                i,
                !0
              );
            }),
            e
          );
        })(oc);
      function ac(t, e) {
        void 0 === e && (e = 3);
        var n = Math.pow(10, e - 1);
        return Math.round(t * n) / n;
      }
      var uc = (function () {
          return function () {};
        })(),
        lc = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            i(e, t),
            (e.prototype.normalizePropertyName = function (t, e) {
              return Fl(t);
            }),
            (e.prototype.normalizeStyleValue = function (t, e, n, r) {
              var i = '',
                o = n.toString().trim();
              if (cc[e] && 0 !== n && '0' !== n)
                if ('number' == typeof n) i = 'px';
                else {
                  var s = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
                  s &&
                    0 == s[1].length &&
                    r.push(
                      'Please provide a CSS unit value for ' + t + ':' + n
                    );
                }
              return o + i;
            }),
            e
          );
        })(uc),
        cc = (function () {
          return (function (t) {
            var e = {};
            return (
              t.forEach(function (t) {
                return (e[t] = !0);
              }),
              e
            );
          })(
            'width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective'.split(
              ','
            )
          );
        })();
      function fc(t, e, n, r, i, o, s, a, u, l, c, f, p) {
        return {
          type: 0,
          element: t,
          triggerName: e,
          isRemovalTransition: i,
          fromState: n,
          fromStyles: o,
          toState: r,
          toStyles: s,
          timelines: a,
          queriedElements: u,
          preStyleProps: l,
          postStyleProps: c,
          totalTime: f,
          errors: p,
        };
      }
      var pc = {},
        hc = (function () {
          function t(t, e, n) {
            (this._triggerName = t), (this.ast = e), (this._stateStyles = n);
          }
          return (
            (t.prototype.match = function (t, e, n, r) {
              return (function (t, e, n, r, i) {
                return t.some(function (t) {
                  return t(e, n, r, i);
                });
              })(this.ast.matchers, t, e, n, r);
            }),
            (t.prototype.buildStyles = function (t, e, n) {
              var r = this._stateStyles['*'],
                i = this._stateStyles[t],
                o = r ? r.buildStyles(e, n) : {};
              return i ? i.buildStyles(e, n) : o;
            }),
            (t.prototype.build = function (t, e, n, r, i, s, a, u, l, c) {
              var f = [],
                p = (this.ast.options && this.ast.options.params) || pc,
                h = this.buildStyles(n, (a && a.params) || pc, f),
                d = (u && u.params) || pc,
                y = this.buildStyles(r, d, f),
                v = new Set(),
                m = new Map(),
                g = new Map(),
                _ = 'void' === r,
                w = { params: o(o({}, p), d) },
                b = c ? [] : ec(t, e, this.ast.animation, i, s, h, y, w, l, f),
                S = 0;
              if (
                (b.forEach(function (t) {
                  S = Math.max(t.duration + t.delay, S);
                }),
                f.length)
              )
                return fc(
                  e,
                  this._triggerName,
                  n,
                  r,
                  _,
                  h,
                  y,
                  [],
                  [],
                  m,
                  g,
                  S,
                  f
                );
              b.forEach(function (t) {
                var n = t.element,
                  r = sl(m, n, {});
                t.preStyleProps.forEach(function (t) {
                  return (r[t] = !0);
                });
                var i = sl(g, n, {});
                t.postStyleProps.forEach(function (t) {
                  return (i[t] = !0);
                }),
                  n !== e && v.add(n);
              });
              var E = jl(v.values());
              return fc(e, this._triggerName, n, r, _, h, y, b, E, m, g, S);
            }),
            t
          );
        })(),
        dc = (function () {
          function t(t, e) {
            (this.styles = t), (this.defaultParams = e);
          }
          return (
            (t.prototype.buildStyles = function (t, e) {
              var n = {},
                r = Cl(this.defaultParams);
              return (
                Object.keys(t).forEach(function (e) {
                  var n = t[e];
                  null != n && (r[e] = n);
                }),
                this.styles.styles.forEach(function (t) {
                  if ('string' != typeof t) {
                    var i = t;
                    Object.keys(i).forEach(function (t) {
                      var o = i[t];
                      o.length > 1 && (o = Nl(o, r, e)), (n[t] = o);
                    });
                  }
                }),
                n
              );
            }),
            t
          );
        })(),
        yc = (function () {
          function t(t, e) {
            var n = this;
            (this.name = t),
              (this.ast = e),
              (this.transitionFactories = []),
              (this.states = {}),
              e.states.forEach(function (t) {
                n.states[t.name] = new dc(
                  t.style,
                  (t.options && t.options.params) || {}
                );
              }),
              vc(this.states, 'true', '1'),
              vc(this.states, 'false', '0'),
              e.transitions.forEach(function (e) {
                n.transitionFactories.push(new hc(t, e, n.states));
              }),
              (this.fallbackTransition = new hc(
                t,
                {
                  type: 1,
                  animation: { type: 2, steps: [], options: null },
                  matchers: [
                    function (t, e) {
                      return !0;
                    },
                  ],
                  options: null,
                  queryCount: 0,
                  depCount: 0,
                },
                this.states
              ));
          }
          return (
            Object.defineProperty(t.prototype, 'containsQueries', {
              get: function () {
                return this.ast.queryCount > 0;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.matchTransition = function (t, e, n, r) {
              return (
                this.transitionFactories.find(function (i) {
                  return i.match(t, e, n, r);
                }) || null
              );
            }),
            (t.prototype.matchStyles = function (t, e, n) {
              return this.fallbackTransition.buildStyles(t, e, n);
            }),
            t
          );
        })();
      function vc(t, e, n) {
        t.hasOwnProperty(e)
          ? t.hasOwnProperty(n) || (t[n] = t[e])
          : t.hasOwnProperty(n) && (t[e] = t[n]);
      }
      var mc = new Jl(),
        gc = (function () {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this._driver = e),
              (this._normalizer = n),
              (this._animations = {}),
              (this._playersById = {}),
              (this.players = []);
          }
          return (
            (t.prototype.register = function (t, e) {
              var n = [],
                r = Wl(this._driver, e, n);
              if (n.length)
                throw new Error(
                  'Unable to build the animation due to the following errors: ' +
                    n.join('\n')
                );
              this._animations[t] = r;
            }),
            (t.prototype._buildPlayer = function (t, e, n) {
              var r = t.element,
                i = nl(0, this._normalizer, 0, t.keyframes, e, n);
              return this._driver.animate(
                r,
                i,
                t.duration,
                t.delay,
                t.easing,
                [],
                !0
              );
            }),
            (t.prototype.create = function (t, e, n) {
              var r = this;
              void 0 === n && (n = {});
              var i,
                o = [],
                s = this._animations[t],
                a = new Map();
              if (
                (s
                  ? (i = ec(
                      this._driver,
                      e,
                      s,
                      'ng-enter',
                      'ng-leave',
                      {},
                      {},
                      n,
                      mc,
                      o
                    )).forEach(function (t) {
                      var e = sl(a, t.element, {});
                      t.postStyleProps.forEach(function (t) {
                        return (e[t] = null);
                      });
                    })
                  : (o.push(
                      "The requested animation doesn't exist or has already been destroyed"
                    ),
                    (i = [])),
                o.length)
              )
                throw new Error(
                  'Unable to create the animation due to the following errors: ' +
                    o.join('\n')
                );
              a.forEach(function (t, e) {
                Object.keys(t).forEach(function (n) {
                  t[n] = r._driver.computeStyle(e, n, '*');
                });
              });
              var u = el(
                i.map(function (t) {
                  var e = a.get(t.element);
                  return r._buildPlayer(t, {}, e);
                })
              );
              return (
                (this._playersById[t] = u),
                u.onDestroy(function () {
                  return r.destroy(t);
                }),
                this.players.push(u),
                u
              );
            }),
            (t.prototype.destroy = function (t) {
              var e = this._getPlayer(t);
              e.destroy(), delete this._playersById[t];
              var n = this.players.indexOf(e);
              n >= 0 && this.players.splice(n, 1);
            }),
            (t.prototype._getPlayer = function (t) {
              var e = this._playersById[t];
              if (!e)
                throw new Error(
                  'Unable to find the timeline player referenced by ' + t
                );
              return e;
            }),
            (t.prototype.listen = function (t, e, n, r) {
              var i = ol(e, '', '', '');
              return rl(this._getPlayer(t), n, i, r), function () {};
            }),
            (t.prototype.command = function (t, e, n, r) {
              if ('register' != n)
                if ('create' != n) {
                  var i = this._getPlayer(t);
                  switch (n) {
                    case 'play':
                      i.play();
                      break;
                    case 'pause':
                      i.pause();
                      break;
                    case 'reset':
                      i.reset();
                      break;
                    case 'restart':
                      i.restart();
                      break;
                    case 'finish':
                      i.finish();
                      break;
                    case 'init':
                      i.init();
                      break;
                    case 'setPosition':
                      i.setPosition(parseFloat(r[0]));
                      break;
                    case 'destroy':
                      this.destroy(t);
                  }
                } else this.create(t, e, r[0] || {});
              else this.register(t, r[0]);
            }),
            t
          );
        })(),
        _c = [],
        wc = {
          namespaceId: '',
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        bc = {
          namespaceId: '',
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        },
        Sc = (function () {
          function t(t, e) {
            void 0 === e && (e = ''), (this.namespaceId = e);
            var n,
              r = t && t.hasOwnProperty('value');
            if (((this.value = null != (n = r ? t.value : t) ? n : null), r)) {
              var i = Cl(t);
              delete i.value, (this.options = i);
            } else this.options = {};
            this.options.params || (this.options.params = {});
          }
          return (
            Object.defineProperty(t.prototype, 'params', {
              get: function () {
                return this.options.params;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.absorbOptions = function (t) {
              var e = t.params;
              if (e) {
                var n = this.options.params;
                Object.keys(e).forEach(function (t) {
                  null == n[t] && (n[t] = e[t]);
                });
              }
            }),
            t
          );
        })(),
        Ec = new Sc('void'),
        Cc = (function () {
          function t(t, e, n) {
            (this.id = t),
              (this.hostElement = e),
              (this._engine = n),
              (this.players = []),
              (this._triggers = {}),
              (this._queue = []),
              (this._elementListeners = new Map()),
              (this._hostClassName = 'ng-tns-' + t),
              Oc(e, this._hostClassName);
          }
          return (
            (t.prototype.listen = function (t, e, n, r) {
              var i,
                o = this;
              if (!this._triggers.hasOwnProperty(e))
                throw new Error(
                  'Unable to listen on the animation trigger event "' +
                    n +
                    '" because the animation trigger "' +
                    e +
                    '" doesn\'t exist!'
                );
              if (null == n || 0 == n.length)
                throw new Error(
                  'Unable to listen on the animation trigger "' +
                    e +
                    '" because the provided event is undefined!'
                );
              if ('start' != (i = n) && 'done' != i)
                throw new Error(
                  'The provided animation trigger event "' +
                    n +
                    '" for the animation trigger "' +
                    e +
                    '" is not supported!'
                );
              var s = sl(this._elementListeners, t, []),
                a = { name: e, phase: n, callback: r };
              s.push(a);
              var u = sl(this._engine.statesByElement, t, {});
              return (
                u.hasOwnProperty(e) ||
                  (Oc(t, 'ng-trigger'), Oc(t, 'ng-trigger-' + e), (u[e] = Ec)),
                function () {
                  o._engine.afterFlush(function () {
                    var t = s.indexOf(a);
                    t >= 0 && s.splice(t, 1), o._triggers[e] || delete u[e];
                  });
                }
              );
            }),
            (t.prototype.register = function (t, e) {
              return !this._triggers[t] && ((this._triggers[t] = e), !0);
            }),
            (t.prototype._getTrigger = function (t) {
              var e = this._triggers[t];
              if (!e)
                throw new Error(
                  'The provided animation trigger "' +
                    t +
                    '" has not been registered!'
                );
              return e;
            }),
            (t.prototype.trigger = function (t, e, n, r) {
              var i = this;
              void 0 === r && (r = !0);
              var o = this._getTrigger(e),
                s = new xc(this.id, e, t),
                a = this._engine.statesByElement.get(t);
              a ||
                (Oc(t, 'ng-trigger'),
                Oc(t, 'ng-trigger-' + e),
                this._engine.statesByElement.set(t, (a = {})));
              var u = a[e],
                l = new Sc(n, this.id);
              if (
                (!(n && n.hasOwnProperty('value')) &&
                  u &&
                  l.absorbOptions(u.options),
                (a[e] = l),
                u || (u = Ec),
                'void' === l.value || u.value !== l.value)
              ) {
                var c = sl(this._engine.playersByElement, t, []);
                c.forEach(function (t) {
                  t.namespaceId == i.id &&
                    t.triggerName == e &&
                    t.queued &&
                    t.destroy();
                });
                var f = o.matchTransition(u.value, l.value, t, l.params),
                  p = !1;
                if (!f) {
                  if (!r) return;
                  (f = o.fallbackTransition), (p = !0);
                }
                return (
                  this._engine.totalQueuedPlayers++,
                  this._queue.push({
                    element: t,
                    triggerName: e,
                    transition: f,
                    fromState: u,
                    toState: l,
                    player: s,
                    isFallbackTransition: p,
                  }),
                  p ||
                    (Oc(t, 'ng-animate-queued'),
                    s.onStart(function () {
                      Ic(t, 'ng-animate-queued');
                    })),
                  s.onDone(function () {
                    var e = i.players.indexOf(s);
                    e >= 0 && i.players.splice(e, 1);
                    var n = i._engine.playersByElement.get(t);
                    if (n) {
                      var r = n.indexOf(s);
                      r >= 0 && n.splice(r, 1);
                    }
                  }),
                  this.players.push(s),
                  c.push(s),
                  s
                );
              }
              if (
                !(function (t, e) {
                  var n = Object.keys(t),
                    r = Object.keys(e);
                  if (n.length != r.length) return !1;
                  for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (!e.hasOwnProperty(o) || t[o] !== e[o]) return !1;
                  }
                  return !0;
                })(u.params, l.params)
              ) {
                var h = [],
                  d = o.matchStyles(u.value, u.params, h),
                  y = o.matchStyles(l.value, l.params, h);
                h.length
                  ? this._engine.reportError(h)
                  : this._engine.afterFlush(function () {
                      Pl(t, d), Al(t, y);
                    });
              }
            }),
            (t.prototype.deregister = function (t) {
              var e = this;
              delete this._triggers[t],
                this._engine.statesByElement.forEach(function (e, n) {
                  delete e[t];
                }),
                this._elementListeners.forEach(function (n, r) {
                  e._elementListeners.set(
                    r,
                    n.filter(function (e) {
                      return e.name != t;
                    })
                  );
                });
            }),
            (t.prototype.clearElementCache = function (t) {
              this._engine.statesByElement.delete(t),
                this._elementListeners.delete(t);
              var e = this._engine.playersByElement.get(t);
              e &&
                (e.forEach(function (t) {
                  return t.destroy();
                }),
                this._engine.playersByElement.delete(t));
            }),
            (t.prototype._signalRemovalForInnerTriggers = function (t, e) {
              var n = this,
                r = this._engine.driver.query(t, '.ng-trigger', !0);
              r.forEach(function (t) {
                if (!t.__ng_removed) {
                  var r = n._engine.fetchNamespacesByElement(t);
                  r.size
                    ? r.forEach(function (n) {
                        return n.triggerLeaveAnimation(t, e, !1, !0);
                      })
                    : n.clearElementCache(t);
                }
              }),
                this._engine.afterFlushAnimationsDone(function () {
                  return r.forEach(function (t) {
                    return n.clearElementCache(t);
                  });
                });
            }),
            (t.prototype.triggerLeaveAnimation = function (t, e, n, r) {
              var i = this,
                o = this._engine.statesByElement.get(t);
              if (o) {
                var s = [];
                if (
                  (Object.keys(o).forEach(function (e) {
                    if (i._triggers[e]) {
                      var n = i.trigger(t, e, 'void', r);
                      n && s.push(n);
                    }
                  }),
                  s.length)
                )
                  return (
                    this._engine.markElementAsRemoved(this.id, t, !0, e),
                    n &&
                      el(s).onDone(function () {
                        return i._engine.processLeaveNode(t);
                      }),
                    !0
                  );
              }
              return !1;
            }),
            (t.prototype.prepareLeaveAnimationListeners = function (t) {
              var e = this,
                n = this._elementListeners.get(t);
              if (n) {
                var r = new Set();
                n.forEach(function (n) {
                  var i = n.name;
                  if (!r.has(i)) {
                    r.add(i);
                    var o = e._triggers[i].fallbackTransition,
                      s = e._engine.statesByElement.get(t)[i] || Ec,
                      a = new Sc('void'),
                      u = new xc(e.id, i, t);
                    e._engine.totalQueuedPlayers++,
                      e._queue.push({
                        element: t,
                        triggerName: i,
                        transition: o,
                        fromState: s,
                        toState: a,
                        player: u,
                        isFallbackTransition: !0,
                      });
                  }
                });
              }
            }),
            (t.prototype.removeNode = function (t, e) {
              var n = this,
                r = this._engine;
              if (
                (t.childElementCount &&
                  this._signalRemovalForInnerTriggers(t, e),
                !this.triggerLeaveAnimation(t, e, !0))
              ) {
                var i = !1;
                if (r.totalAnimations) {
                  var o = r.players.length
                    ? r.playersByQueriedElement.get(t)
                    : [];
                  if (o && o.length) i = !0;
                  else
                    for (var s = t; (s = s.parentNode); )
                      if (r.statesByElement.get(s)) {
                        i = !0;
                        break;
                      }
                }
                if ((this.prepareLeaveAnimationListeners(t), i))
                  r.markElementAsRemoved(this.id, t, !1, e);
                else {
                  var a = t.__ng_removed;
                  (a && a !== wc) ||
                    (r.afterFlush(function () {
                      return n.clearElementCache(t);
                    }),
                    r.destroyInnerAnimations(t),
                    r._onRemovalComplete(t, e));
                }
              }
            }),
            (t.prototype.insertNode = function (t, e) {
              Oc(t, this._hostClassName);
            }),
            (t.prototype.drainQueuedTransitions = function (t) {
              var e = this,
                n = [];
              return (
                this._queue.forEach(function (r) {
                  var i = r.player;
                  if (!i.destroyed) {
                    var o = r.element,
                      s = e._elementListeners.get(o);
                    s &&
                      s.forEach(function (e) {
                        if (e.name == r.triggerName) {
                          var n = ol(
                            o,
                            r.triggerName,
                            r.fromState.value,
                            r.toState.value
                          );
                          (n._data = t), rl(r.player, e.phase, n, e.callback);
                        }
                      }),
                      i.markedForDestroy
                        ? e._engine.afterFlush(function () {
                            i.destroy();
                          })
                        : n.push(r);
                  }
                }),
                (this._queue = []),
                n.sort(function (t, n) {
                  var r = t.transition.ast.depCount,
                    i = n.transition.ast.depCount;
                  return 0 == r || 0 == i
                    ? r - i
                    : e._engine.driver.containsElement(t.element, n.element)
                    ? 1
                    : -1;
                })
              );
            }),
            (t.prototype.destroy = function (t) {
              this.players.forEach(function (t) {
                return t.destroy();
              }),
                this._signalRemovalForInnerTriggers(this.hostElement, t);
            }),
            (t.prototype.elementContainsData = function (t) {
              var e = !1;
              return (
                this._elementListeners.has(t) && (e = !0),
                !!this._queue.find(function (e) {
                  return e.element === t;
                }) || e
              );
            }),
            t
          );
        })(),
        Tc = (function () {
          function t(t, e, n) {
            (this.bodyNode = t),
              (this.driver = e),
              (this._normalizer = n),
              (this.players = []),
              (this.newHostElements = new Map()),
              (this.playersByElement = new Map()),
              (this.playersByQueriedElement = new Map()),
              (this.statesByElement = new Map()),
              (this.disabledNodes = new Set()),
              (this.totalAnimations = 0),
              (this.totalQueuedPlayers = 0),
              (this._namespaceLookup = {}),
              (this._namespaceList = []),
              (this._flushFns = []),
              (this._whenQuietFns = []),
              (this.namespacesByHostElement = new Map()),
              (this.collectedEnterElements = []),
              (this.collectedLeaveElements = []),
              (this.onRemovalComplete = function (t, e) {});
          }
          return (
            (t.prototype._onRemovalComplete = function (t, e) {
              this.onRemovalComplete(t, e);
            }),
            Object.defineProperty(t.prototype, 'queuedPlayers', {
              get: function () {
                var t = [];
                return (
                  this._namespaceList.forEach(function (e) {
                    e.players.forEach(function (e) {
                      e.queued && t.push(e);
                    });
                  }),
                  t
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.createNamespace = function (t, e) {
              var n = new Cc(t, e, this);
              return (
                e.parentNode
                  ? this._balanceNamespaceList(n, e)
                  : (this.newHostElements.set(e, n),
                    this.collectEnterElement(e)),
                (this._namespaceLookup[t] = n)
              );
            }),
            (t.prototype._balanceNamespaceList = function (t, e) {
              var n = this._namespaceList.length - 1;
              if (n >= 0) {
                for (var r = !1, i = n; i >= 0; i--)
                  if (
                    this.driver.containsElement(
                      this._namespaceList[i].hostElement,
                      e
                    )
                  ) {
                    this._namespaceList.splice(i + 1, 0, t), (r = !0);
                    break;
                  }
                r || this._namespaceList.splice(0, 0, t);
              } else this._namespaceList.push(t);
              return this.namespacesByHostElement.set(e, t), t;
            }),
            (t.prototype.register = function (t, e) {
              var n = this._namespaceLookup[t];
              return n || (n = this.createNamespace(t, e)), n;
            }),
            (t.prototype.registerTrigger = function (t, e, n) {
              var r = this._namespaceLookup[t];
              r && r.register(e, n) && this.totalAnimations++;
            }),
            (t.prototype.destroy = function (t, e) {
              var n = this;
              if (t) {
                var r = this._fetchNamespace(t);
                this.afterFlush(function () {
                  n.namespacesByHostElement.delete(r.hostElement),
                    delete n._namespaceLookup[t];
                  var e = n._namespaceList.indexOf(r);
                  e >= 0 && n._namespaceList.splice(e, 1);
                }),
                  this.afterFlushAnimationsDone(function () {
                    return r.destroy(e);
                  });
              }
            }),
            (t.prototype._fetchNamespace = function (t) {
              return this._namespaceLookup[t];
            }),
            (t.prototype.fetchNamespacesByElement = function (t) {
              var e = new Set(),
                n = this.statesByElement.get(t);
              if (n)
                for (var r = Object.keys(n), i = 0; i < r.length; i++) {
                  var o = n[r[i]].namespaceId;
                  if (o) {
                    var s = this._fetchNamespace(o);
                    s && e.add(s);
                  }
                }
              return e;
            }),
            (t.prototype.trigger = function (t, e, n, r) {
              if (kc(e)) {
                var i = this._fetchNamespace(t);
                if (i) return i.trigger(e, n, r), !0;
              }
              return !1;
            }),
            (t.prototype.insertNode = function (t, e, n, r) {
              if (kc(e)) {
                var i = e.__ng_removed;
                if (i && i.setForRemoval) {
                  (i.setForRemoval = !1), (i.setForMove = !0);
                  var o = this.collectedLeaveElements.indexOf(e);
                  o >= 0 && this.collectedLeaveElements.splice(o, 1);
                }
                if (t) {
                  var s = this._fetchNamespace(t);
                  s && s.insertNode(e, n);
                }
                r && this.collectEnterElement(e);
              }
            }),
            (t.prototype.collectEnterElement = function (t) {
              this.collectedEnterElements.push(t);
            }),
            (t.prototype.markElementAsDisabled = function (t, e) {
              e
                ? this.disabledNodes.has(t) ||
                  (this.disabledNodes.add(t), Oc(t, 'ng-animate-disabled'))
                : this.disabledNodes.has(t) &&
                  (this.disabledNodes.delete(t), Ic(t, 'ng-animate-disabled'));
            }),
            (t.prototype.removeNode = function (t, e, n, r) {
              if (kc(e)) {
                var i = t ? this._fetchNamespace(t) : null;
                if (
                  (i
                    ? i.removeNode(e, r)
                    : this.markElementAsRemoved(t, e, !1, r),
                  n)
                ) {
                  var o = this.namespacesByHostElement.get(e);
                  o && o.id !== t && o.removeNode(e, r);
                }
              } else this._onRemovalComplete(e, r);
            }),
            (t.prototype.markElementAsRemoved = function (t, e, n, r) {
              this.collectedLeaveElements.push(e),
                (e.__ng_removed = {
                  namespaceId: t,
                  setForRemoval: r,
                  hasAnimation: n,
                  removedBeforeQueried: !1,
                });
            }),
            (t.prototype.listen = function (t, e, n, r, i) {
              return kc(e)
                ? this._fetchNamespace(t).listen(e, n, r, i)
                : function () {};
            }),
            (t.prototype._buildInstruction = function (t, e, n, r, i) {
              return t.transition.build(
                this.driver,
                t.element,
                t.fromState.value,
                t.toState.value,
                n,
                r,
                t.fromState.options,
                t.toState.options,
                e,
                i
              );
            }),
            (t.prototype.destroyInnerAnimations = function (t) {
              var e = this,
                n = this.driver.query(t, '.ng-trigger', !0);
              n.forEach(function (t) {
                return e.destroyActiveAnimationsForElement(t);
              }),
                0 != this.playersByQueriedElement.size &&
                  (n = this.driver.query(t, '.ng-animating', !0)).forEach(
                    function (t) {
                      return e.finishActiveQueriedAnimationOnElement(t);
                    }
                  );
            }),
            (t.prototype.destroyActiveAnimationsForElement = function (t) {
              var e = this.playersByElement.get(t);
              e &&
                e.forEach(function (t) {
                  t.queued ? (t.markedForDestroy = !0) : t.destroy();
                });
            }),
            (t.prototype.finishActiveQueriedAnimationOnElement = function (t) {
              var e = this.playersByQueriedElement.get(t);
              e &&
                e.forEach(function (t) {
                  return t.finish();
                });
            }),
            (t.prototype.whenRenderingDone = function () {
              var t = this;
              return new Promise(function (e) {
                if (t.players.length)
                  return el(t.players).onDone(function () {
                    return e();
                  });
                e();
              });
            }),
            (t.prototype.processLeaveNode = function (t) {
              var e = this,
                n = t.__ng_removed;
              if (n && n.setForRemoval) {
                if (((t.__ng_removed = wc), n.namespaceId)) {
                  this.destroyInnerAnimations(t);
                  var r = this._fetchNamespace(n.namespaceId);
                  r && r.clearElementCache(t);
                }
                this._onRemovalComplete(t, n.setForRemoval);
              }
              this.driver.matchesElement(t, '.ng-animate-disabled') &&
                this.markElementAsDisabled(t, !1),
                this.driver
                  .query(t, '.ng-animate-disabled', !0)
                  .forEach(function (t) {
                    e.markElementAsDisabled(t, !1);
                  });
            }),
            (t.prototype.flush = function (t) {
              var e = this;
              void 0 === t && (t = -1);
              var n = [];
              if (
                (this.newHostElements.size &&
                  (this.newHostElements.forEach(function (t, n) {
                    return e._balanceNamespaceList(t, n);
                  }),
                  this.newHostElements.clear()),
                this.totalAnimations && this.collectedEnterElements.length)
              )
                for (var r = 0; r < this.collectedEnterElements.length; r++)
                  Oc(this.collectedEnterElements[r], 'ng-star-inserted');
              if (
                this._namespaceList.length &&
                (this.totalQueuedPlayers || this.collectedLeaveElements.length)
              ) {
                var i = [];
                try {
                  n = this._flushAnimations(i, t);
                } finally {
                  for (r = 0; r < i.length; r++) i[r]();
                }
              } else
                for (r = 0; r < this.collectedLeaveElements.length; r++)
                  this.processLeaveNode(this.collectedLeaveElements[r]);
              if (
                ((this.totalQueuedPlayers = 0),
                (this.collectedEnterElements.length = 0),
                (this.collectedLeaveElements.length = 0),
                this._flushFns.forEach(function (t) {
                  return t();
                }),
                (this._flushFns = []),
                this._whenQuietFns.length)
              ) {
                var o = this._whenQuietFns;
                (this._whenQuietFns = []),
                  n.length
                    ? el(n).onDone(function () {
                        o.forEach(function (t) {
                          return t();
                        });
                      })
                    : o.forEach(function (t) {
                        return t();
                      });
              }
            }),
            (t.prototype.reportError = function (t) {
              throw new Error(
                'Unable to process animations due to the following failed trigger transitions\n ' +
                  t.join('\n')
              );
            }),
            (t.prototype._flushAnimations = function (t, e) {
              var n = this,
                r = new Jl(),
                i = [],
                s = new Map(),
                a = [],
                l = new Map(),
                c = new Map(),
                f = new Map(),
                p = new Set();
              this.disabledNodes.forEach(function (t) {
                p.add(t);
                for (
                  var e = n.driver.query(t, '.ng-animate-queued', !0), r = 0;
                  r < e.length;
                  r++
                )
                  p.add(e[r]);
              });
              var h = this.bodyNode,
                d = Array.from(this.statesByElement.keys()),
                y = Rc(d, this.collectedEnterElements),
                v = new Map(),
                m = 0;
              y.forEach(function (t, e) {
                var n = 'ng-enter' + m++;
                v.set(e, n),
                  t.forEach(function (t) {
                    return Oc(t, n);
                  });
              });
              for (
                var g = [], _ = new Set(), w = new Set(), b = 0;
                b < this.collectedLeaveElements.length;
                b++
              )
                (M = (L = this.collectedLeaveElements[b]).__ng_removed) &&
                  M.setForRemoval &&
                  (g.push(L),
                  _.add(L),
                  M.hasAnimation
                    ? this.driver
                        .query(L, '.ng-star-inserted', !0)
                        .forEach(function (t) {
                          return _.add(t);
                        })
                    : w.add(L));
              var S = new Map(),
                E = Rc(d, Array.from(_));
              E.forEach(function (t, e) {
                var n = 'ng-leave' + m++;
                S.set(e, n),
                  t.forEach(function (t) {
                    return Oc(t, n);
                  });
              }),
                t.push(function () {
                  y.forEach(function (t, e) {
                    var n = v.get(e);
                    t.forEach(function (t) {
                      return Ic(t, n);
                    });
                  }),
                    E.forEach(function (t, e) {
                      var n = S.get(e);
                      t.forEach(function (t) {
                        return Ic(t, n);
                      });
                    }),
                    g.forEach(function (t) {
                      n.processLeaveNode(t);
                    });
                });
              for (
                var C = [], T = [], x = this._namespaceList.length - 1;
                x >= 0;
                x--
              )
                this._namespaceList[x]
                  .drainQueuedTransitions(e)
                  .forEach(function (t) {
                    var e = t.player,
                      o = t.element;
                    if ((C.push(e), n.collectedEnterElements.length)) {
                      var s = o.__ng_removed;
                      if (s && s.setForMove) return void e.destroy();
                    }
                    var u = !h || !n.driver.containsElement(h, o),
                      p = S.get(o),
                      d = v.get(o),
                      y = n._buildInstruction(t, r, d, p, u);
                    if (y.errors && y.errors.length) T.push(y);
                    else {
                      if (u)
                        return (
                          e.onStart(function () {
                            return Pl(o, y.fromStyles);
                          }),
                          e.onDestroy(function () {
                            return Al(o, y.toStyles);
                          }),
                          void i.push(e)
                        );
                      if (t.isFallbackTransition)
                        return (
                          e.onStart(function () {
                            return Pl(o, y.fromStyles);
                          }),
                          e.onDestroy(function () {
                            return Al(o, y.toStyles);
                          }),
                          void i.push(e)
                        );
                      y.timelines.forEach(function (t) {
                        return (t.stretchStartingKeyframe = !0);
                      }),
                        r.append(o, y.timelines),
                        a.push({ instruction: y, player: e, element: o }),
                        y.queriedElements.forEach(function (t) {
                          return sl(l, t, []).push(e);
                        }),
                        y.preStyleProps.forEach(function (t, e) {
                          var n = Object.keys(t);
                          if (n.length) {
                            var r = c.get(e);
                            r || c.set(e, (r = new Set())),
                              n.forEach(function (t) {
                                return r.add(t);
                              });
                          }
                        }),
                        y.postStyleProps.forEach(function (t, e) {
                          var n = Object.keys(t),
                            r = f.get(e);
                          r || f.set(e, (r = new Set())),
                            n.forEach(function (t) {
                              return r.add(t);
                            });
                        });
                    }
                  });
              if (T.length) {
                var k = [];
                T.forEach(function (t) {
                  k.push('@' + t.triggerName + ' has failed due to:\n'),
                    t.errors.forEach(function (t) {
                      return k.push('- ' + t + '\n');
                    });
                }),
                  C.forEach(function (t) {
                    return t.destroy();
                  }),
                  this.reportError(k);
              }
              var A = new Map(),
                P = new Map();
              a.forEach(function (t) {
                var e = t.element;
                r.has(e) &&
                  (P.set(e, e),
                  n._beforeAnimationBuild(
                    t.player.namespaceId,
                    t.instruction,
                    A
                  ));
              }),
                i.forEach(function (t) {
                  var e = t.element;
                  n._getPreviousPlayers(
                    e,
                    !1,
                    t.namespaceId,
                    t.triggerName,
                    null
                  ).forEach(function (t) {
                    sl(A, e, []).push(t), t.destroy();
                  });
                });
              var R = g.filter(function (t) {
                  return jc(t, c, f);
                }),
                O = new Map();
              Pc(O, this.driver, w, f, '*').forEach(function (t) {
                jc(t, c, f) && R.push(t);
              });
              var I = new Map();
              y.forEach(function (t, e) {
                Pc(I, n.driver, new Set(t), c, '!');
              }),
                R.forEach(function (t) {
                  var e = O.get(t),
                    n = I.get(t);
                  O.set(t, o(o({}, e), n));
                });
              var N = [],
                j = [],
                D = {};
              a.forEach(function (t) {
                var e = t.element,
                  o = t.player,
                  a = t.instruction;
                if (r.has(e)) {
                  if (p.has(e))
                    return (
                      o.onDestroy(function () {
                        return Al(e, a.toStyles);
                      }),
                      (o.disabled = !0),
                      o.overrideTotalTime(a.totalTime),
                      void i.push(o)
                    );
                  var u = D;
                  if (P.size > 1) {
                    for (var l = e, c = []; (l = l.parentNode); ) {
                      var f = P.get(l);
                      if (f) {
                        u = f;
                        break;
                      }
                      c.push(l);
                    }
                    c.forEach(function (t) {
                      return P.set(t, u);
                    });
                  }
                  var h = n._buildAnimation(o.namespaceId, a, A, s, I, O);
                  if ((o.setRealPlayer(h), u === D)) N.push(o);
                  else {
                    var d = n.playersByElement.get(u);
                    d && d.length && (o.parentPlayer = el(d)), i.push(o);
                  }
                } else
                  Pl(e, a.fromStyles),
                    o.onDestroy(function () {
                      return Al(e, a.toStyles);
                    }),
                    j.push(o),
                    p.has(e) && i.push(o);
              }),
                j.forEach(function (t) {
                  var e = s.get(t.element);
                  if (e && e.length) {
                    var n = el(e);
                    t.setRealPlayer(n);
                  }
                }),
                i.forEach(function (t) {
                  t.parentPlayer
                    ? t.syncPlayerEvents(t.parentPlayer)
                    : t.destroy();
                });
              for (var F = 0; F < g.length; F++) {
                var L,
                  M = (L = g[F]).__ng_removed;
                if ((Ic(L, 'ng-leave'), !M || !M.hasAnimation)) {
                  var U = [];
                  if (l.size) {
                    var H = l.get(L);
                    H && H.length && U.push.apply(U, u(H));
                    for (
                      var V = this.driver.query(L, '.ng-animating', !0), q = 0;
                      q < V.length;
                      q++
                    ) {
                      var B = l.get(V[q]);
                      B && B.length && U.push.apply(U, u(B));
                    }
                  }
                  var z = U.filter(function (t) {
                    return !t.destroyed;
                  });
                  z.length ? Nc(this, L, z) : this.processLeaveNode(L);
                }
              }
              return (
                (g.length = 0),
                N.forEach(function (t) {
                  n.players.push(t),
                    t.onDone(function () {
                      t.destroy();
                      var e = n.players.indexOf(t);
                      n.players.splice(e, 1);
                    }),
                    t.play();
                }),
                N
              );
            }),
            (t.prototype.elementContainsData = function (t, e) {
              var n = !1,
                r = e.__ng_removed;
              return (
                r && r.setForRemoval && (n = !0),
                this.playersByElement.has(e) && (n = !0),
                this.playersByQueriedElement.has(e) && (n = !0),
                this.statesByElement.has(e) && (n = !0),
                this._fetchNamespace(t).elementContainsData(e) || n
              );
            }),
            (t.prototype.afterFlush = function (t) {
              this._flushFns.push(t);
            }),
            (t.prototype.afterFlushAnimationsDone = function (t) {
              this._whenQuietFns.push(t);
            }),
            (t.prototype._getPreviousPlayers = function (t, e, n, r, i) {
              var o = [];
              if (e) {
                var s = this.playersByQueriedElement.get(t);
                s && (o = s);
              } else {
                var a = this.playersByElement.get(t);
                if (a) {
                  var u = !i || 'void' == i;
                  a.forEach(function (t) {
                    t.queued || ((u || t.triggerName == r) && o.push(t));
                  });
                }
              }
              return (
                (n || r) &&
                  (o = o.filter(function (t) {
                    return !(
                      (n && n != t.namespaceId) ||
                      (r && r != t.triggerName)
                    );
                  })),
                o
              );
            }),
            (t.prototype._beforeAnimationBuild = function (t, e, n) {
              var r,
                i,
                o = e.element,
                a = e.isRemovalTransition ? void 0 : t,
                u = e.isRemovalTransition ? void 0 : e.triggerName,
                l = function (t) {
                  var r = t.element,
                    i = r !== o,
                    s = sl(n, r, []);
                  c._getPreviousPlayers(r, i, a, u, e.toState).forEach(
                    function (t) {
                      var e = t.getRealPlayer();
                      e.beforeDestroy && e.beforeDestroy(),
                        t.destroy(),
                        s.push(t);
                    }
                  );
                },
                c = this;
              try {
                for (
                  var f = s(e.timelines), p = f.next();
                  !p.done;
                  p = f.next()
                )
                  l(p.value);
              } catch (h) {
                r = { error: h };
              } finally {
                try {
                  p && !p.done && (i = f.return) && i.call(f);
                } finally {
                  if (r) throw r.error;
                }
              }
              Pl(o, e.fromStyles);
            }),
            (t.prototype._buildAnimation = function (t, e, n, r, i, o) {
              var s = this,
                a = e.triggerName,
                u = e.element,
                l = [],
                c = new Set(),
                f = new Set(),
                p = e.timelines.map(function (e) {
                  var p = e.element;
                  c.add(p);
                  var h = p.__ng_removed;
                  if (h && h.removedBeforeQueried)
                    return new Ju(e.duration, e.delay);
                  var d,
                    y,
                    v = p !== u,
                    m = ((d = (n.get(p) || _c).map(function (t) {
                      return t.getRealPlayer();
                    })),
                    (y = []),
                    (function t(e, n) {
                      for (var r = 0; r < e.length; r++) {
                        var i = e[r];
                        i instanceof Xu ? t(i.players, n) : n.push(i);
                      }
                    })(d, y),
                    y).filter(function (t) {
                      return !!t.element && t.element === p;
                    }),
                    g = i.get(p),
                    _ = o.get(p),
                    w = nl(0, s._normalizer, 0, e.keyframes, g, _),
                    b = s._buildPlayer(e, w, m);
                  if ((e.subTimeline && r && f.add(p), v)) {
                    var S = new xc(t, a, p);
                    S.setRealPlayer(b), l.push(S);
                  }
                  return b;
                });
              l.forEach(function (t) {
                sl(s.playersByQueriedElement, t.element, []).push(t),
                  t.onDone(function () {
                    return (function (t, e, n) {
                      var r;
                      if (t instanceof Map) {
                        if ((r = t.get(e))) {
                          if (r.length) {
                            var i = r.indexOf(n);
                            r.splice(i, 1);
                          }
                          0 == r.length && t.delete(e);
                        }
                      } else (r = t[e]) && (r.length && ((i = r.indexOf(n)), r.splice(i, 1)), 0 == r.length && delete t[e]);
                      return r;
                    })(s.playersByQueriedElement, t.element, t);
                  });
              }),
                c.forEach(function (t) {
                  return Oc(t, 'ng-animating');
                });
              var h = el(p);
              return (
                h.onDestroy(function () {
                  c.forEach(function (t) {
                    return Ic(t, 'ng-animating');
                  }),
                    Al(u, e.toStyles);
                }),
                f.forEach(function (t) {
                  sl(r, t, []).push(h);
                }),
                h
              );
            }),
            (t.prototype._buildPlayer = function (t, e, n) {
              return e.length > 0
                ? this.driver.animate(
                    t.element,
                    e,
                    t.duration,
                    t.delay,
                    t.easing,
                    n
                  )
                : new Ju(t.duration, t.delay);
            }),
            t
          );
        })(),
        xc = (function () {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.triggerName = e),
              (this.element = n),
              (this._player = new Ju()),
              (this._containsRealPlayer = !1),
              (this._queuedCallbacks = {}),
              (this.destroyed = !1),
              (this.markedForDestroy = !1),
              (this.disabled = !1),
              (this.queued = !0),
              (this.totalTime = 0);
          }
          return (
            (t.prototype.setRealPlayer = function (t) {
              var e = this;
              this._containsRealPlayer ||
                ((this._player = t),
                Object.keys(this._queuedCallbacks).forEach(function (n) {
                  e._queuedCallbacks[n].forEach(function (e) {
                    return rl(t, n, void 0, e);
                  });
                }),
                (this._queuedCallbacks = {}),
                (this._containsRealPlayer = !0),
                this.overrideTotalTime(t.totalTime),
                (this.queued = !1));
            }),
            (t.prototype.getRealPlayer = function () {
              return this._player;
            }),
            (t.prototype.overrideTotalTime = function (t) {
              this.totalTime = t;
            }),
            (t.prototype.syncPlayerEvents = function (t) {
              var e = this,
                n = this._player;
              n.triggerCallback &&
                t.onStart(function () {
                  return n.triggerCallback('start');
                }),
                t.onDone(function () {
                  return e.finish();
                }),
                t.onDestroy(function () {
                  return e.destroy();
                });
            }),
            (t.prototype._queueEvent = function (t, e) {
              sl(this._queuedCallbacks, t, []).push(e);
            }),
            (t.prototype.onDone = function (t) {
              this.queued && this._queueEvent('done', t),
                this._player.onDone(t);
            }),
            (t.prototype.onStart = function (t) {
              this.queued && this._queueEvent('start', t),
                this._player.onStart(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this.queued && this._queueEvent('destroy', t),
                this._player.onDestroy(t);
            }),
            (t.prototype.init = function () {
              this._player.init();
            }),
            (t.prototype.hasStarted = function () {
              return !this.queued && this._player.hasStarted();
            }),
            (t.prototype.play = function () {
              !this.queued && this._player.play();
            }),
            (t.prototype.pause = function () {
              !this.queued && this._player.pause();
            }),
            (t.prototype.restart = function () {
              !this.queued && this._player.restart();
            }),
            (t.prototype.finish = function () {
              this._player.finish();
            }),
            (t.prototype.destroy = function () {
              (this.destroyed = !0), this._player.destroy();
            }),
            (t.prototype.reset = function () {
              !this.queued && this._player.reset();
            }),
            (t.prototype.setPosition = function (t) {
              this.queued || this._player.setPosition(t);
            }),
            (t.prototype.getPosition = function () {
              return this.queued ? 0 : this._player.getPosition();
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = this._player;
              e.triggerCallback && e.triggerCallback(t);
            }),
            t
          );
        })();
      function kc(t) {
        return t && 1 === t.nodeType;
      }
      function Ac(t, e) {
        var n = t.style.display;
        return (t.style.display = null != e ? e : 'none'), n;
      }
      function Pc(t, e, n, r, i) {
        var o = [];
        n.forEach(function (t) {
          return o.push(Ac(t));
        });
        var s = [];
        r.forEach(function (n, r) {
          var o = {};
          n.forEach(function (t) {
            var n = (o[t] = e.computeStyle(r, t, i));
            (n && 0 != n.length) || ((r.__ng_removed = bc), s.push(r));
          }),
            t.set(r, o);
        });
        var a = 0;
        return (
          n.forEach(function (t) {
            return Ac(t, o[a++]);
          }),
          s
        );
      }
      function Rc(t, e) {
        var n = new Map();
        if (
          (t.forEach(function (t) {
            return n.set(t, []);
          }),
          0 == e.length)
        )
          return n;
        var r = new Set(e),
          i = new Map();
        return (
          e.forEach(function (t) {
            var e = (function t(e) {
              if (!e) return 1;
              var o = i.get(e);
              if (o) return o;
              var s = e.parentNode;
              return (o = n.has(s) ? s : r.has(s) ? 1 : t(s)), i.set(e, o), o;
            })(t);
            1 !== e && n.get(e).push(t);
          }),
          n
        );
      }
      function Oc(t, e) {
        if (t.classList) t.classList.add(e);
        else {
          var n = t.$$classes;
          n || (n = t.$$classes = {}), (n[e] = !0);
        }
      }
      function Ic(t, e) {
        if (t.classList) t.classList.remove(e);
        else {
          var n = t.$$classes;
          n && delete n[e];
        }
      }
      function Nc(t, e, n) {
        el(n).onDone(function () {
          return t.processLeaveNode(e);
        });
      }
      function jc(t, e, n) {
        var r = n.get(t);
        if (!r) return !1;
        var i = e.get(t);
        return (
          i
            ? r.forEach(function (t) {
                return i.add(t);
              })
            : e.set(t, r),
          n.delete(t),
          !0
        );
      }
      var Dc = (function () {
        function t(t, e, n) {
          var r = this;
          (this.bodyNode = t),
            (this._driver = e),
            (this._triggerCache = {}),
            (this.onRemovalComplete = function (t, e) {}),
            (this._transitionEngine = new Tc(t, e, n)),
            (this._timelineEngine = new gc(t, e, n)),
            (this._transitionEngine.onRemovalComplete = function (t, e) {
              return r.onRemovalComplete(t, e);
            });
        }
        return (
          (t.prototype.registerTrigger = function (t, e, n, r, i) {
            var o = t + '-' + r,
              s = this._triggerCache[o];
            if (!s) {
              var a = [],
                u = Wl(this._driver, i, a);
              if (a.length)
                throw new Error(
                  'The animation trigger "' +
                    r +
                    '" has failed to build due to the following errors:\n - ' +
                    a.join('\n - ')
                );
              (s = (function (t, e) {
                return new yc(t, e);
              })(r, u)),
                (this._triggerCache[o] = s);
            }
            this._transitionEngine.registerTrigger(e, r, s);
          }),
          (t.prototype.register = function (t, e) {
            this._transitionEngine.register(t, e);
          }),
          (t.prototype.destroy = function (t, e) {
            this._transitionEngine.destroy(t, e);
          }),
          (t.prototype.onInsert = function (t, e, n, r) {
            this._transitionEngine.insertNode(t, e, n, r);
          }),
          (t.prototype.onRemove = function (t, e, n, r) {
            this._transitionEngine.removeNode(t, e, r || !1, n);
          }),
          (t.prototype.disableAnimations = function (t, e) {
            this._transitionEngine.markElementAsDisabled(t, e);
          }),
          (t.prototype.process = function (t, e, n, r) {
            if ('@' == n.charAt(0)) {
              var i = a(al(n), 2);
              this._timelineEngine.command(i[0], e, i[1], r);
            } else this._transitionEngine.trigger(t, e, n, r);
          }),
          (t.prototype.listen = function (t, e, n, r, i) {
            if ('@' == n.charAt(0)) {
              var o = a(al(n), 2);
              return this._timelineEngine.listen(o[0], e, o[1], i);
            }
            return this._transitionEngine.listen(t, e, n, r, i);
          }),
          (t.prototype.flush = function (t) {
            void 0 === t && (t = -1), this._transitionEngine.flush(t);
          }),
          Object.defineProperty(t.prototype, 'players', {
            get: function () {
              return this._transitionEngine.players.concat(
                this._timelineEngine.players
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.whenRenderingDone = function () {
            return this._transitionEngine.whenRenderingDone();
          }),
          t
        );
      })();
      function Fc(t, e) {
        var n = null,
          r = null;
        return (
          Array.isArray(e) && e.length
            ? ((n = Mc(e[0])), e.length > 1 && (r = Mc(e[e.length - 1])))
            : e && (n = Mc(e)),
          n || r ? new Lc(t, n, r) : null
        );
      }
      var Lc = (function () {
        function t(e, n, r) {
          (this._element = e),
            (this._startStyles = n),
            (this._endStyles = r),
            (this._state = 0);
          var i = t.initialStylesByElement.get(e);
          i || t.initialStylesByElement.set(e, (i = {})),
            (this._initialStyles = i);
        }
        return (
          (t.prototype.start = function () {
            this._state < 1 &&
              (this._startStyles &&
                Al(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }),
          (t.prototype.finish = function () {
            this.start(),
              this._state < 2 &&
                (Al(this._element, this._initialStyles),
                this._endStyles &&
                  (Al(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }),
          (t.prototype.destroy = function () {
            this.finish(),
              this._state < 3 &&
                (t.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  (Pl(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  (Pl(this._element, this._endStyles),
                  (this._endStyles = null)),
                Al(this._element, this._initialStyles),
                (this._state = 3));
          }),
          (t.initialStylesByElement = new WeakMap()),
          t
        );
      })();
      function Mc(t) {
        for (var e = null, n = Object.keys(t), r = 0; r < n.length; r++) {
          var i = n[r];
          Uc(i) && ((e = e || {})[i] = t[i]);
        }
        return e;
      }
      function Uc(t) {
        return 'display' === t || 'position' === t;
      }
      var Hc = (function () {
        function t(t, e, n, r, i, o, s) {
          var a = this;
          (this._element = t),
            (this._name = e),
            (this._duration = n),
            (this._delay = r),
            (this._easing = i),
            (this._fillMode = o),
            (this._onDoneFn = s),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = function (t) {
              return a._handleCallback(t);
            });
        }
        return (
          (t.prototype.apply = function () {
            var t, e, n;
            (e =
              this._duration +
              'ms ' +
              this._easing +
              ' ' +
              this._delay +
              'ms 1 normal ' +
              this._fillMode +
              ' ' +
              this._name),
              (n = Qc((t = this._element), '').trim()).length &&
                ((function (t, e) {
                  for (var n = 0; n < t.length; n++) ',' === t.charAt(n) && 0;
                })(n),
                (e = n + ', ' + e)),
              Wc(t, '', e),
              zc(this._element, this._eventFn, !1),
              (this._startTime = Date.now());
          }),
          (t.prototype.pause = function () {
            Vc(this._element, this._name, 'paused');
          }),
          (t.prototype.resume = function () {
            Vc(this._element, this._name, 'running');
          }),
          (t.prototype.setPosition = function (t) {
            var e = qc(this._element, this._name);
            (this._position = t * this._duration),
              Wc(this._element, 'Delay', '-' + this._position + 'ms', e);
          }),
          (t.prototype.getPosition = function () {
            return this._position;
          }),
          (t.prototype._handleCallback = function (t) {
            var e = t._ngTestManualTimestamp || Date.now(),
              n = 1e3 * parseFloat(t.elapsedTime.toFixed(3));
            t.animationName == this._name &&
              Math.max(e - this._startTime, 0) >= this._delay &&
              n >= this._duration &&
              this.finish();
          }),
          (t.prototype.finish = function () {
            this._finished ||
              ((this._finished = !0),
              this._onDoneFn(),
              zc(this._element, this._eventFn, !0));
          }),
          (t.prototype.destroy = function () {
            var t, e, n, r;
            this._destroyed ||
              ((this._destroyed = !0),
              this.finish(),
              (e = this._name),
              (r = Bc((n = Qc((t = this._element), '').split(',')), e)) >= 0 &&
                (n.splice(r, 1), Wc(t, '', n.join(','))));
          }),
          t
        );
      })();
      function Vc(t, e, n) {
        Wc(t, 'PlayState', n, qc(t, e));
      }
      function qc(t, e) {
        var n = Qc(t, '');
        return n.indexOf(',') > 0 ? Bc(n.split(','), e) : Bc([n], e);
      }
      function Bc(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].indexOf(e) >= 0) return n;
        return -1;
      }
      function zc(t, e, n) {
        n
          ? t.removeEventListener('animationend', e)
          : t.addEventListener('animationend', e);
      }
      function Wc(t, e, n, r) {
        var i = 'animation' + e;
        if (null != r) {
          var o = t.style[i];
          if (o.length) {
            var s = o.split(',');
            (s[r] = n), (n = s.join(','));
          }
        }
        t.style[i] = n;
      }
      function Qc(t, e) {
        return t.style['animation' + e];
      }
      var Kc = (function () {
          function t(t, e, n, r, i, o, s, a) {
            (this.element = t),
              (this.keyframes = e),
              (this.animationName = n),
              (this._duration = r),
              (this._delay = i),
              (this._finalStyles = s),
              (this._specialStyles = a),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._started = !1),
              (this.currentSnapshot = {}),
              (this._state = 0),
              (this.easing = o || 'linear'),
              (this.totalTime = r + i),
              this._buildStyler();
          }
          return (
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.destroy = function () {
              this.init(),
                this._state >= 4 ||
                  ((this._state = 4),
                  this._styler.destroy(),
                  this._flushStartFns(),
                  this._flushDoneFns(),
                  this._specialStyles && this._specialStyles.destroy(),
                  this._onDestroyFns.forEach(function (t) {
                    return t();
                  }),
                  (this._onDestroyFns = []));
            }),
            (t.prototype._flushDoneFns = function () {
              this._onDoneFns.forEach(function (t) {
                return t();
              }),
                (this._onDoneFns = []);
            }),
            (t.prototype._flushStartFns = function () {
              this._onStartFns.forEach(function (t) {
                return t();
              }),
                (this._onStartFns = []);
            }),
            (t.prototype.finish = function () {
              this.init(),
                this._state >= 3 ||
                  ((this._state = 3),
                  this._styler.finish(),
                  this._flushStartFns(),
                  this._specialStyles && this._specialStyles.finish(),
                  this._flushDoneFns());
            }),
            (t.prototype.setPosition = function (t) {
              this._styler.setPosition(t);
            }),
            (t.prototype.getPosition = function () {
              return this._styler.getPosition();
            }),
            (t.prototype.hasStarted = function () {
              return this._state >= 2;
            }),
            (t.prototype.init = function () {
              this._state >= 1 ||
                ((this._state = 1),
                this._styler.apply(),
                this._delay && this._styler.pause());
            }),
            (t.prototype.play = function () {
              this.init(),
                this.hasStarted() ||
                  (this._flushStartFns(),
                  (this._state = 2),
                  this._specialStyles && this._specialStyles.start()),
                this._styler.resume();
            }),
            (t.prototype.pause = function () {
              this.init(), this._styler.pause();
            }),
            (t.prototype.restart = function () {
              this.reset(), this.play();
            }),
            (t.prototype.reset = function () {
              this._styler.destroy(), this._buildStyler(), this._styler.apply();
            }),
            (t.prototype._buildStyler = function () {
              var t = this;
              this._styler = new Hc(
                this.element,
                this.animationName,
                this._duration,
                this._delay,
                this.easing,
                'forwards',
                function () {
                  return t.finish();
                }
              );
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            (t.prototype.beforeDestroy = function () {
              var t = this;
              this.init();
              var e = {};
              if (this.hasStarted()) {
                var n = this._state >= 3;
                Object.keys(this._finalStyles).forEach(function (r) {
                  'offset' != r &&
                    (e[r] = n ? t._finalStyles[r] : Hl(t.element, r));
                });
              }
              this.currentSnapshot = e;
            }),
            t
          );
        })(),
        Zc = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r.element = e),
              (r._startingStyles = {}),
              (r.__initialized = !1),
              (r._styles = gl(n)),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.init = function () {
              var e = this;
              !this.__initialized &&
                this._startingStyles &&
                ((this.__initialized = !0),
                Object.keys(this._styles).forEach(function (t) {
                  e._startingStyles[t] = e.element.style[t];
                }),
                t.prototype.init.call(this));
            }),
            (e.prototype.play = function () {
              var e = this;
              this._startingStyles &&
                (this.init(),
                Object.keys(this._styles).forEach(function (t) {
                  return e.element.style.setProperty(t, e._styles[t]);
                }),
                t.prototype.play.call(this));
            }),
            (e.prototype.destroy = function () {
              var e = this;
              this._startingStyles &&
                (Object.keys(this._startingStyles).forEach(function (t) {
                  var n = e._startingStyles[t];
                  n
                    ? e.element.style.setProperty(t, n)
                    : e.element.style.removeProperty(t);
                }),
                (this._startingStyles = null),
                t.prototype.destroy.call(this));
            }),
            e
          );
        })(Ju),
        Gc = (function () {
          function t() {
            (this._count = 0),
              (this._head = document.querySelector('head')),
              (this._warningIssued = !1);
          }
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return dl(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return yl(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return vl(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return ml(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.buildKeyframeElement = function (t, e, n) {
              n = n.map(function (t) {
                return gl(t);
              });
              var r = '@keyframes ' + e + ' {\n',
                i = '';
              n.forEach(function (t) {
                i = ' ';
                var e = parseFloat(t.offset);
                (r += '' + i + 100 * e + '% {\n'),
                  (i += ' '),
                  Object.keys(t).forEach(function (e) {
                    var n = t[e];
                    switch (e) {
                      case 'offset':
                        return;
                      case 'easing':
                        return void (
                          n &&
                          (r += i + 'animation-timing-function: ' + n + ';\n')
                        );
                      default:
                        return void (r += '' + i + e + ': ' + n + ';\n');
                    }
                  }),
                  (r += i + '}\n');
              }),
                (r += '}\n');
              var o = document.createElement('style');
              return (o.innerHTML = r), o;
            }),
            (t.prototype.animate = function (t, e, n, r, i, o, s) {
              void 0 === o && (o = []), s && this._notifyFaultyScrubber();
              var a = o.filter(function (t) {
                  return t instanceof Kc;
                }),
                u = {};
              Ll(n, r) &&
                a.forEach(function (t) {
                  var e = t.currentSnapshot;
                  Object.keys(e).forEach(function (t) {
                    return (u[t] = e[t]);
                  });
                });
              var l = (function (t) {
                var e = {};
                return (
                  t &&
                    (Array.isArray(t) ? t : [t]).forEach(function (t) {
                      Object.keys(t).forEach(function (n) {
                        'offset' != n && 'easing' != n && (e[n] = t[n]);
                      });
                    }),
                  e
                );
              })((e = Ml(t, e, u)));
              if (0 == n) return new Zc(t, l);
              var c = 'gen_css_kf_' + this._count++,
                f = this.buildKeyframeElement(t, c, e);
              document.querySelector('head').appendChild(f);
              var p = Fc(t, e),
                h = new Kc(t, e, c, n, r, i, l, p);
              return (
                h.onDestroy(function () {
                  var t;
                  (t = f).parentNode.removeChild(t);
                }),
                h
              );
            }),
            (t.prototype._notifyFaultyScrubber = function () {
              this._warningIssued ||
                (console.warn(
                  '@angular/animations: please load the web-animations.js polyfill to allow programmatic access...\n',
                  '  visit http://bit.ly/IWukam to learn more about using the web-animation-js polyfill.'
                ),
                (this._warningIssued = !0));
            }),
            t
          );
        })(),
        $c = (function () {
          function t(t, e, n, r) {
            (this.element = t),
              (this.keyframes = e),
              (this.options = n),
              (this._specialStyles = r),
              (this._onDoneFns = []),
              (this._onStartFns = []),
              (this._onDestroyFns = []),
              (this._initialized = !1),
              (this._finished = !1),
              (this._started = !1),
              (this._destroyed = !1),
              (this.time = 0),
              (this.parentPlayer = null),
              (this.currentSnapshot = {}),
              (this._duration = n.duration),
              (this._delay = n.delay || 0),
              (this.time = this._duration + this._delay);
          }
          return (
            (t.prototype._onFinish = function () {
              this._finished ||
                ((this._finished = !0),
                this._onDoneFns.forEach(function (t) {
                  return t();
                }),
                (this._onDoneFns = []));
            }),
            (t.prototype.init = function () {
              this._buildPlayer(), this._preparePlayerBeforeStart();
            }),
            (t.prototype._buildPlayer = function () {
              var t = this;
              if (!this._initialized) {
                this._initialized = !0;
                var e = this.keyframes;
                (this.domPlayer = this._triggerWebAnimation(
                  this.element,
                  e,
                  this.options
                )),
                  (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
                  this.domPlayer.addEventListener('finish', function () {
                    return t._onFinish();
                  });
              }
            }),
            (t.prototype._preparePlayerBeforeStart = function () {
              this._delay
                ? this._resetDomPlayerState()
                : this.domPlayer.pause();
            }),
            (t.prototype._triggerWebAnimation = function (t, e, n) {
              return t.animate(e, n);
            }),
            (t.prototype.onStart = function (t) {
              this._onStartFns.push(t);
            }),
            (t.prototype.onDone = function (t) {
              this._onDoneFns.push(t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._onDestroyFns.push(t);
            }),
            (t.prototype.play = function () {
              this._buildPlayer(),
                this.hasStarted() ||
                  (this._onStartFns.forEach(function (t) {
                    return t();
                  }),
                  (this._onStartFns = []),
                  (this._started = !0),
                  this._specialStyles && this._specialStyles.start()),
                this.domPlayer.play();
            }),
            (t.prototype.pause = function () {
              this.init(), this.domPlayer.pause();
            }),
            (t.prototype.finish = function () {
              this.init(),
                this._specialStyles && this._specialStyles.finish(),
                this._onFinish(),
                this.domPlayer.finish();
            }),
            (t.prototype.reset = function () {
              this._resetDomPlayerState(),
                (this._destroyed = !1),
                (this._finished = !1),
                (this._started = !1);
            }),
            (t.prototype._resetDomPlayerState = function () {
              this.domPlayer && this.domPlayer.cancel();
            }),
            (t.prototype.restart = function () {
              this.reset(), this.play();
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.destroy = function () {
              this._destroyed ||
                ((this._destroyed = !0),
                this._resetDomPlayerState(),
                this._onFinish(),
                this._specialStyles && this._specialStyles.destroy(),
                this._onDestroyFns.forEach(function (t) {
                  return t();
                }),
                (this._onDestroyFns = []));
            }),
            (t.prototype.setPosition = function (t) {
              this.domPlayer.currentTime = t * this.time;
            }),
            (t.prototype.getPosition = function () {
              return this.domPlayer.currentTime / this.time;
            }),
            Object.defineProperty(t.prototype, 'totalTime', {
              get: function () {
                return this._delay + this._duration;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.beforeDestroy = function () {
              var t = this,
                e = {};
              this.hasStarted() &&
                Object.keys(this._finalKeyframe).forEach(function (n) {
                  'offset' != n &&
                    (e[n] = t._finished
                      ? t._finalKeyframe[n]
                      : Hl(t.element, n));
                }),
                (this.currentSnapshot = e);
            }),
            (t.prototype.triggerCallback = function (t) {
              var e = 'start' == t ? this._onStartFns : this._onDoneFns;
              e.forEach(function (t) {
                return t();
              }),
                (e.length = 0);
            }),
            t
          );
        })(),
        Yc = (function () {
          function t() {
            (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
              Jc().toString()
            )),
              (this._cssKeyframesDriver = new Gc());
          }
          return (
            (t.prototype.validateStyleProperty = function (t) {
              return dl(t);
            }),
            (t.prototype.matchesElement = function (t, e) {
              return yl(t, e);
            }),
            (t.prototype.containsElement = function (t, e) {
              return vl(t, e);
            }),
            (t.prototype.query = function (t, e, n) {
              return ml(t, e, n);
            }),
            (t.prototype.computeStyle = function (t, e, n) {
              return window.getComputedStyle(t)[e];
            }),
            (t.prototype.overrideWebAnimationsSupport = function (t) {
              this._isNativeImpl = t;
            }),
            (t.prototype.animate = function (t, e, n, r, i, o, s) {
              if ((void 0 === o && (o = []), !s && !this._isNativeImpl))
                return this._cssKeyframesDriver.animate(t, e, n, r, i, o);
              var a = {
                duration: n,
                delay: r,
                fill: 0 == r ? 'both' : 'forwards',
              };
              i && (a.easing = i);
              var u = {},
                l = o.filter(function (t) {
                  return t instanceof $c;
                });
              Ll(n, r) &&
                l.forEach(function (t) {
                  var e = t.currentSnapshot;
                  Object.keys(e).forEach(function (t) {
                    return (u[t] = e[t]);
                  });
                });
              var c = Fc(
                t,
                (e = Ml(
                  t,
                  (e = e.map(function (t) {
                    return Tl(t, !1);
                  })),
                  u
                ))
              );
              return new $c(t, e, a, c);
            }),
            t
          );
        })();
      function Jc() {
        return (
          ('undefined' != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      var Xc = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (
              (r._nextAnimationId = 0),
              (r._renderer = e.createRenderer(n.body, {
                id: '0',
                encapsulation: de.None,
                styles: [],
                data: { animation: [] },
              })),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype.build = function (t) {
              var e = this._nextAnimationId.toString();
              this._nextAnimationId++;
              var n = Array.isArray(t) ? Gu(t) : t;
              return (
                nf(this._renderer, null, e, 'register', [n]),
                new tf(e, this._renderer)
              );
            }),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Zo), te(Ga));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(Ku),
        tf = (function (t) {
          function e(e, n) {
            var r = t.call(this) || this;
            return (r._id = e), (r._renderer = n), r;
          }
          return (
            i(e, t),
            (e.prototype.create = function (t, e) {
              return new ef(this._id, t, e || {}, this._renderer);
            }),
            e
          );
        })(Zu),
        ef = (function () {
          function t(t, e, n, r) {
            (this.id = t),
              (this.element = e),
              (this._renderer = r),
              (this.parentPlayer = null),
              (this._started = !1),
              (this.totalTime = 0),
              this._command('create', n);
          }
          return (
            (t.prototype._listen = function (t, e) {
              return this._renderer.listen(
                this.element,
                '@@' + this.id + ':' + t,
                e
              );
            }),
            (t.prototype._command = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++)
                e[n - 1] = arguments[n];
              return nf(this._renderer, this.element, this.id, t, e);
            }),
            (t.prototype.onDone = function (t) {
              this._listen('done', t);
            }),
            (t.prototype.onStart = function (t) {
              this._listen('start', t);
            }),
            (t.prototype.onDestroy = function (t) {
              this._listen('destroy', t);
            }),
            (t.prototype.init = function () {
              this._command('init');
            }),
            (t.prototype.hasStarted = function () {
              return this._started;
            }),
            (t.prototype.play = function () {
              this._command('play'), (this._started = !0);
            }),
            (t.prototype.pause = function () {
              this._command('pause');
            }),
            (t.prototype.restart = function () {
              this._command('restart');
            }),
            (t.prototype.finish = function () {
              this._command('finish');
            }),
            (t.prototype.destroy = function () {
              this._command('destroy');
            }),
            (t.prototype.reset = function () {
              this._command('reset');
            }),
            (t.prototype.setPosition = function (t) {
              this._command('setPosition', t);
            }),
            (t.prototype.getPosition = function () {
              return 0;
            }),
            t
          );
        })();
      function nf(t, e, n, r, i) {
        return t.setProperty(e, '@@' + n + ':' + r, i);
      }
      var rf = (function () {
          function t(t, e, n) {
            (this.delegate = t),
              (this.engine = e),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (e.onRemovalComplete = function (t, e) {
                e && e.parentNode(t) && e.removeChild(t.parentNode, t);
              });
          }
          return (
            (t.prototype.createRenderer = function (t, e) {
              var n = this,
                r = this.delegate.createRenderer(t, e);
              if (!(t && e && e.data && e.data.animation)) {
                var i = this._rendererCache.get(r);
                return (
                  i ||
                    ((i = new of('', r, this.engine)),
                    this._rendererCache.set(r, i)),
                  i
                );
              }
              var o = e.id,
                s = e.id + '-' + this._currentId;
              this._currentId++, this.engine.register(s, t);
              var a = function (e) {
                Array.isArray(e)
                  ? e.forEach(a)
                  : n.engine.registerTrigger(o, s, t, e.name, e);
              };
              return (
                e.data.animation.forEach(a), new sf(this, s, r, this.engine)
              );
            }),
            (t.prototype.begin = function () {
              this._cdRecurDepth++,
                this.delegate.begin && this.delegate.begin();
            }),
            (t.prototype._scheduleCountTask = function () {
              var t = this;
              this.promise.then(function () {
                t._microtaskId++;
              });
            }),
            (t.prototype.scheduleListenerCallback = function (t, e, n) {
              var r = this;
              t >= 0 && t < this._microtaskId
                ? this._zone.run(function () {
                    return e(n);
                  })
                : (0 == this._animationCallbacksBuffer.length &&
                    Promise.resolve(null).then(function () {
                      r._zone.run(function () {
                        r._animationCallbacksBuffer.forEach(function (t) {
                          var e = a(t, 2);
                          (0, e[0])(e[1]);
                        }),
                          (r._animationCallbacksBuffer = []);
                      });
                    }),
                  this._animationCallbacksBuffer.push([e, n]));
            }),
            (t.prototype.end = function () {
              var t = this;
              this._cdRecurDepth--,
                0 == this._cdRecurDepth &&
                  this._zone.runOutsideAngular(function () {
                    t._scheduleCountTask(), t.engine.flush(t._microtaskId);
                  }),
                this.delegate.end && this.delegate.end();
            }),
            (t.prototype.whenRenderingDone = function () {
              return this.engine.whenRenderingDone();
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(Zo), te(Dc), te(ma));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        of = (function () {
          function t(t, e, n) {
            (this.namespaceId = t),
              (this.delegate = e),
              (this.engine = n),
              (this.destroyNode = this.delegate.destroyNode
                ? function (t) {
                    return e.destroyNode(t);
                  }
                : null);
          }
          return (
            Object.defineProperty(t.prototype, 'data', {
              get: function () {
                return this.delegate.data;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.destroy = function () {
              this.engine.destroy(this.namespaceId, this.delegate),
                this.delegate.destroy();
            }),
            (t.prototype.createElement = function (t, e) {
              return this.delegate.createElement(t, e);
            }),
            (t.prototype.createComment = function (t) {
              return this.delegate.createComment(t);
            }),
            (t.prototype.createText = function (t) {
              return this.delegate.createText(t);
            }),
            (t.prototype.appendChild = function (t, e) {
              this.delegate.appendChild(t, e),
                this.engine.onInsert(this.namespaceId, e, t, !1);
            }),
            (t.prototype.insertBefore = function (t, e, n) {
              this.delegate.insertBefore(t, e, n),
                this.engine.onInsert(this.namespaceId, e, t, !0);
            }),
            (t.prototype.removeChild = function (t, e, n) {
              this.engine.onRemove(this.namespaceId, e, this.delegate, n);
            }),
            (t.prototype.selectRootElement = function (t, e) {
              return this.delegate.selectRootElement(t, e);
            }),
            (t.prototype.parentNode = function (t) {
              return this.delegate.parentNode(t);
            }),
            (t.prototype.nextSibling = function (t) {
              return this.delegate.nextSibling(t);
            }),
            (t.prototype.setAttribute = function (t, e, n, r) {
              this.delegate.setAttribute(t, e, n, r);
            }),
            (t.prototype.removeAttribute = function (t, e, n) {
              this.delegate.removeAttribute(t, e, n);
            }),
            (t.prototype.addClass = function (t, e) {
              this.delegate.addClass(t, e);
            }),
            (t.prototype.removeClass = function (t, e) {
              this.delegate.removeClass(t, e);
            }),
            (t.prototype.setStyle = function (t, e, n, r) {
              this.delegate.setStyle(t, e, n, r);
            }),
            (t.prototype.removeStyle = function (t, e, n) {
              this.delegate.removeStyle(t, e, n);
            }),
            (t.prototype.setProperty = function (t, e, n) {
              '@' == e.charAt(0) && '@.disabled' == e
                ? this.disableAnimations(t, !!n)
                : this.delegate.setProperty(t, e, n);
            }),
            (t.prototype.setValue = function (t, e) {
              this.delegate.setValue(t, e);
            }),
            (t.prototype.listen = function (t, e, n) {
              return this.delegate.listen(t, e, n);
            }),
            (t.prototype.disableAnimations = function (t, e) {
              this.engine.disableAnimations(t, e);
            }),
            t
          );
        })(),
        sf = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, n, r, i) || this;
            return (o.factory = e), (o.namespaceId = n), o;
          }
          return (
            i(e, t),
            (e.prototype.setProperty = function (t, e, n) {
              '@' == e.charAt(0)
                ? '.' == e.charAt(1) && '@.disabled' == e
                  ? this.disableAnimations(t, (n = void 0 === n || !!n))
                  : this.engine.process(this.namespaceId, t, e.substr(1), n)
                : this.delegate.setProperty(t, e, n);
            }),
            (e.prototype.listen = function (t, e, n) {
              var r,
                i,
                o,
                s = this;
              if ('@' == e.charAt(0)) {
                var u = (function (t) {
                    switch (t) {
                      case 'body':
                        return document.body;
                      case 'document':
                        return document;
                      case 'window':
                        return window;
                      default:
                        return t;
                    }
                  })(t),
                  l = e.substr(1),
                  c = '';
                return (
                  '@' != l.charAt(0) &&
                    ((l = (r = a(
                      ((i = l),
                      (o = i.indexOf('.')),
                      [i.substring(0, o), i.substr(o + 1)]),
                      2
                    ))[0]),
                    (c = r[1])),
                  this.engine.listen(this.namespaceId, u, l, c, function (t) {
                    s.factory.scheduleListenerCallback(t._data || -1, n, t);
                  })
                );
              }
              return this.delegate.listen(t, e, n);
            }),
            e
          );
        })(of),
        af = (function (t) {
          function e(e, n, r) {
            return t.call(this, e.body, n, r) || this;
          }
          return (
            i(e, t),
            (e.ɵfac = function (t) {
              return new (t || e)(te(Ga), te(wl), te(uc));
            }),
            (e.ɵprov = mt({
              token: e,
              factory: function (t) {
                return e.ɵfac(t);
              },
            })),
            e
          );
        })(Dc),
        uf = new Wt('AnimationModuleType'),
        lf = [
          { provide: Ku, useClass: Xc },
          {
            provide: uc,
            useFactory: function () {
              return new lc();
            },
          },
          { provide: Dc, useClass: af },
          {
            provide: Zo,
            useFactory: function (t, e, n) {
              return new rf(t, e, n);
            },
            deps: [ju, Dc, ma],
          },
        ],
        cf = u(
          [
            {
              provide: wl,
              useFactory: function () {
                return 'function' == typeof Jc() ? new Yc() : new Gc();
              },
            },
            { provide: uf, useValue: 'BrowserAnimations' },
          ],
          lf
        ),
        ff =
          (u(
            [
              { provide: wl, useClass: _l },
              { provide: uf, useValue: 'NoopAnimations' },
            ],
            lf
          ),
          (function () {
            function t() {}
            return (
              (t.ɵmod = Ee({ type: t })),
              (t.ɵinj = gt({
                factory: function (e) {
                  return new (e || t)();
                },
                providers: cf,
                imports: [Qu],
              })),
              t
            );
          })()),
        pf = (function () {
          function t() {
            this._accessors = [];
          }
          return (
            (t.prototype.add = function (t, e) {
              this._accessors.push([t, e]);
            }),
            (t.prototype.remove = function (t) {
              for (var e = this._accessors.length - 1; e >= 0; --e)
                if (this._accessors[e][1] === t)
                  return void this._accessors.splice(e, 1);
            }),
            (t.prototype.select = function (t) {
              var e = this;
              this._accessors.forEach(function (n) {
                e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value);
              });
            }),
            (t.prototype._isSameGroup = function (t, e) {
              return (
                !!t[0].control &&
                t[0]._parent === e._control._parent &&
                t[1].name === e.name
              );
            }),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        hf = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        df = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [pf],
              imports: [hf],
            })),
            t
          );
        })(),
        yf = (function (t) {
          function e(e) {
            var n = t.call(this) || this;
            return (n._value = e), n;
          }
          return (
            i(e, t),
            Object.defineProperty(e.prototype, 'value', {
              get: function () {
                return this.getValue();
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._subscribe = function (e) {
              var n = t.prototype._subscribe.call(this, e);
              return n && !n.closed && e.next(this._value), n;
            }),
            (e.prototype.getValue = function () {
              if (this.hasError) throw this.thrownError;
              if (this.closed) throw new R();
              return this._value;
            }),
            (e.prototype.next = function (e) {
              t.prototype.next.call(this, (this._value = e));
            }),
            e
          );
        })(N),
        vf = {};
      function mf() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = null,
          r = null;
        return (
          D(t[t.length - 1]) && (r = t.pop()),
          'function' == typeof t[t.length - 1] && (n = t.pop()),
          1 === t.length && l(t[0]) && (t = t[0]),
          et(t, r).lift(new gf(n))
        );
      }
      var gf = (function () {
          function t(t) {
            this.resultSelector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new _f(t, this.resultSelector));
            }),
            t
          );
        })(),
        _f = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (
              (r.resultSelector = n),
              (r.active = 0),
              (r.values = []),
              (r.observables = []),
              r
            );
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              this.values.push(vf), this.observables.push(t);
            }),
            (e.prototype._complete = function () {
              var t = this.observables,
                e = t.length;
              if (0 === e) this.destination.complete();
              else {
                (this.active = e), (this.toRespond = e);
                for (var n = 0; n < e; n++) {
                  var r = t[n];
                  this.add(B(this, r, r, n));
                }
              }
            }),
            (e.prototype.notifyComplete = function (t) {
              0 == (this.active -= 1) && this.destination.complete();
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              var o = this.values,
                s = this.toRespond
                  ? o[n] === vf
                    ? --this.toRespond
                    : this.toRespond
                  : 0;
              (o[n] = e),
                0 === s &&
                  (this.resultSelector
                    ? this._tryResultSelector(o)
                    : this.destination.next(o.slice()));
            }),
            (e.prototype._tryResultSelector = function (t) {
              var e;
              try {
                e = this.resultSelector.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(z);
      function wf(t, e, n, r) {
        return (
          f(n) && ((r = n), (n = void 0)),
          r
            ? wf(t, e, n).pipe(
                W(function (t) {
                  return l(t) ? r.apply(void 0, t) : r(t);
                })
              )
            : new k(function (r) {
                !(function t(e, n, r, i, o) {
                  var s;
                  if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.addEventListener &&
                        'function' == typeof t.removeEventListener
                      );
                    })(e)
                  ) {
                    var a = e;
                    e.addEventListener(n, r, o),
                      (s = function () {
                        return a.removeEventListener(n, r, o);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.on &&
                        'function' == typeof t.off
                      );
                    })(e)
                  ) {
                    var u = e;
                    e.on(n, r),
                      (s = function () {
                        return u.off(n, r);
                      });
                  } else if (
                    (function (t) {
                      return (
                        t &&
                        'function' == typeof t.addListener &&
                        'function' == typeof t.removeListener
                      );
                    })(e)
                  ) {
                    var l = e;
                    e.addListener(n, r),
                      (s = function () {
                        return l.removeListener(n, r);
                      });
                  } else {
                    if (!e || !e.length)
                      throw new TypeError('Invalid event target');
                    for (var c = 0, f = e.length; c < f; c++)
                      t(e[c], n, r, i, o);
                  }
                  i.add(s);
                })(
                  t,
                  e,
                  function (t) {
                    r.next(
                      arguments.length > 1
                        ? Array.prototype.slice.call(arguments)
                        : t
                    );
                  },
                  r,
                  n
                );
              })
        );
      }
      function bf() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = t[t.length - 1];
        return D(n) ? (t.pop(), Z(t, n)) : et(t);
      }
      function Sf() {
        return tt(1);
      }
      function Ef() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return Sf()(bf.apply(void 0, t));
      }
      function Cf(t, e) {
        return 'function' == typeof e
          ? function (n) {
              return n.pipe(
                Cf(function (n, r) {
                  return G(t(n, r)).pipe(
                    W(function (t, i) {
                      return e(n, t, r, i);
                    })
                  );
                })
              );
            }
          : function (e) {
              return e.lift(new Tf(t));
            };
      }
      var Tf = (function () {
          function t(t) {
            this.project = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new xf(t, this.project));
            }),
            t
          );
        })(),
        xf = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.project = n), (r.index = 0), r;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.project(t, n);
              } catch (r) {
                return void this.destination.error(r);
              }
              this._innerSub(e, t, n);
            }),
            (e.prototype._innerSub = function (t, e, n) {
              var r = this.innerSubscription;
              r && r.unsubscribe();
              var i = new F(this, void 0, void 0);
              this.destination.add(i),
                (this.innerSubscription = B(this, t, e, n, i));
            }),
            (e.prototype._complete = function () {
              var e = this.innerSubscription;
              (e && !e.closed) || t.prototype._complete.call(this),
                this.unsubscribe();
            }),
            (e.prototype._unsubscribe = function () {
              this.innerSubscription = null;
            }),
            (e.prototype.notifyComplete = function (e) {
              this.destination.remove(e),
                (this.innerSubscription = null),
                this.isStopped && t.prototype._complete.call(this);
            }),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.destination.next(e);
            }),
            e
          );
        })(z);
      function kf(t) {
        return function (e) {
          return e.lift(new Af(t));
        };
      }
      var Af = (function () {
          function t(t) {
            this.notifier = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              var n = new Pf(t),
                r = B(n, this.notifier);
              return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n;
            }),
            t
          );
        })(),
        Pf = (function (t) {
          function e(e) {
            var n = t.call(this, e) || this;
            return (n.seenValue = !1), n;
          }
          return (
            i(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              (this.seenValue = !0), this.complete();
            }),
            (e.prototype.notifyComplete = function () {}),
            e
          );
        })(z);
      function Rf(t, e) {
        return function (n) {
          return n.lift(new Of(t, e));
        };
      }
      var Of = (function () {
          function t(t, e) {
            (this.predicate = t), (this.thisArg = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new If(t, this.predicate, this.thisArg));
            }),
            t
          );
        })(),
        If = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.predicate = n), (i.thisArg = r), (i.count = 0), i;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              var e;
              try {
                e = this.predicate.call(this.thisArg, t, this.count++);
              } catch (n) {
                return void this.destination.error(n);
              }
              e && this.destination.next(t);
            }),
            e
          );
        })(b);
      function Nf() {
        return (
          Error.call(this),
          (this.message = 'argument out of range'),
          (this.name = 'ArgumentOutOfRangeError'),
          this
        );
      }
      Nf.prototype = Object.create(Error.prototype);
      var jf = Nf,
        Df = new k(function (t) {
          return t.complete();
        });
      function Ff(t) {
        return t
          ? (function (t) {
              return new k(function (e) {
                return t.schedule(function () {
                  return e.complete();
                });
              });
            })(t)
          : Df;
      }
      function Lf(t) {
        return function (e) {
          return 0 === t ? Ff() : e.lift(new Mf(t));
        };
      }
      var Mf = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new jf();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Uf(t, this.total));
            }),
            t
          );
        })(),
        Uf = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.count = 0), r;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              var e = this.total,
                n = ++this.count;
              n <= e &&
                (this.destination.next(t),
                n === e && (this.destination.complete(), this.unsubscribe()));
            }),
            e
          );
        })(b);
      function Hf(t, e, n) {
        return function (r) {
          return r.lift(new Vf(t, e, n));
        };
      }
      var Vf = (function () {
          function t(t, e, n) {
            (this.nextOrObserver = t), (this.error = e), (this.complete = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new qf(t, this.nextOrObserver, this.error, this.complete)
              );
            }),
            t
          );
        })(),
        qf = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o._tapNext = C),
              (o._tapError = C),
              (o._tapComplete = C),
              (o._tapError = r || C),
              (o._tapComplete = i || C),
              f(n)
                ? ((o._context = o), (o._tapNext = n))
                : n &&
                  ((o._context = n),
                  (o._tapNext = n.next || C),
                  (o._tapError = n.error || C),
                  (o._tapComplete = n.complete || C)),
              o
            );
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              try {
                this._tapNext.call(this._context, t);
              } catch (e) {
                return void this.destination.error(e);
              }
              this.destination.next(t);
            }),
            (e.prototype._error = function (t) {
              try {
                this._tapError.call(this._context, t);
              } catch (t) {
                return void this.destination.error(t);
              }
              this.destination.error(t);
            }),
            (e.prototype._complete = function () {
              try {
                this._tapComplete.call(this._context);
              } catch (t) {
                return void this.destination.error(t);
              }
              return this.destination.complete();
            }),
            e
          );
        })(b);
      function Bf() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return function (e) {
          var n;
          return (
            'function' == typeof t[t.length - 1] && (n = t.pop()),
            e.lift(new zf(t, n))
          );
        };
      }
      var zf = (function () {
          function t(t, e) {
            (this.observables = t), (this.project = e);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Wf(t, this.observables, this.project));
            }),
            t
          );
        })(),
        Wf = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            (i.observables = n), (i.project = r), (i.toRespond = []);
            var o = n.length;
            i.values = new Array(o);
            for (var s = 0; s < o; s++) i.toRespond.push(s);
            for (s = 0; s < o; s++) {
              var a = n[s];
              i.add(B(i, a, a, s));
            }
            return i;
          }
          return (
            i(e, t),
            (e.prototype.notifyNext = function (t, e, n, r, i) {
              this.values[n] = e;
              var o = this.toRespond;
              if (o.length > 0) {
                var s = o.indexOf(n);
                -1 !== s && o.splice(s, 1);
              }
            }),
            (e.prototype.notifyComplete = function () {}),
            (e.prototype._next = function (t) {
              if (0 === this.toRespond.length) {
                var e = [t].concat(this.values);
                this.project ? this._tryProject(e) : this.destination.next(e);
              }
            }),
            (e.prototype._tryProject = function (t) {
              var e;
              try {
                e = this.project.apply(this, t);
              } catch (n) {
                return void this.destination.error(n);
              }
              this.destination.next(e);
            }),
            e
          );
        })(z),
        Qf = ['*'],
        Kf = ['dialog'];
      function Zf(t) {
        return null != t;
      }
      'undefined' == typeof Element ||
        Element.prototype.closest ||
        (Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        (Element.prototype.closest = function (t) {
          var e = this;
          if (!document.documentElement.contains(e)) return null;
          do {
            if (e.matches(t)) return e;
            e = e.parentElement || e.parentNode;
          } while (null !== e && 1 === e.nodeType);
          return null;
        }));
      var Gf = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        $f = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Yf = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        Jf = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Xf = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        tp = (function (t) {
          return (
            (t[(t.Tab = 9)] = 'Tab'),
            (t[(t.Enter = 13)] = 'Enter'),
            (t[(t.Escape = 27)] = 'Escape'),
            (t[(t.Space = 32)] = 'Space'),
            (t[(t.PageUp = 33)] = 'PageUp'),
            (t[(t.PageDown = 34)] = 'PageDown'),
            (t[(t.End = 35)] = 'End'),
            (t[(t.Home = 36)] = 'Home'),
            (t[(t.ArrowLeft = 37)] = 'ArrowLeft'),
            (t[(t.ArrowUp = 38)] = 'ArrowUp'),
            (t[(t.ArrowRight = 39)] = 'ArrowRight'),
            (t[(t.ArrowDown = 40)] = 'ArrowDown'),
            t
          );
        })({}),
        ep = [
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled]):not([type="hidden"])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[contenteditable]',
          '[tabindex]:not([tabindex="-1"])',
        ].join(', ');
      function np(t) {
        var e = Array.from(t.querySelectorAll(ep)).filter(function (t) {
          return -1 !== t.tabIndex;
        });
        return [e[0], e[e.length - 1]];
      }
      var rp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu, df]],
            })),
            t
          );
        })(),
        ip = (function () {
          function t() {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵdir = Te({ type: t, selectors: [['', 8, 'navbar']] })),
            t
          );
        })(),
        op = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        sp = (function () {
          function t() {
            (this.backdrop = !0), (this.keyboard = !0);
          }
          return (
            (t.ɵprov = mt({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root',
            })),
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            t
          );
        })(),
        ap = (function () {
          return function (t, e, n) {
            (this.nodes = t), (this.viewRef = e), (this.componentRef = n);
          };
        })(),
        up = function () {},
        lp = (function () {
          function t(t) {
            this._document = t;
          }
          return (
            (t.prototype.compensate = function () {
              var t = this._getWidth();
              return this._isPresent(t) ? this._adjustBody(t) : up;
            }),
            (t.prototype._adjustBody = function (t) {
              var e = this._document.body,
                n = e.style.paddingRight,
                r = parseFloat(window.getComputedStyle(e)['padding-right']);
              return (
                (e.style['padding-right'] = r + t + 'px'),
                function () {
                  return (e.style['padding-right'] = n);
                }
              );
            }),
            (t.prototype._isPresent = function (t) {
              var e = this._document.body.getBoundingClientRect();
              return window.innerWidth - (e.left + e.right) >= t - 0.1 * t;
            }),
            (t.prototype._getWidth = function () {
              var t = this._document.createElement('div');
              t.className = 'modal-scrollbar-measure';
              var e = this._document.body;
              e.appendChild(t);
              var n = t.getBoundingClientRect().width - t.clientWidth;
              return e.removeChild(t), n;
            }),
            (t.ɵprov = mt({
              factory: function () {
                return new t(te(Ga));
              },
              token: t,
              providedIn: 'root',
            })),
            (t.ɵfac = function (e) {
              return new (e || t)(te(Ga));
            }),
            t
          );
        })(),
        cp = (function () {
          function t() {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = _e({
              type: t,
              selectors: [['ngb-modal-backdrop']],
              hostAttrs: [2, 'z-index', '1050'],
              hostVars: 2,
              hostBindings: function (t, e) {
                2 & t &&
                  Oo(
                    'modal-backdrop fade show' +
                      (e.backdropClass ? ' ' + e.backdropClass : '')
                  );
              },
              inputs: { backdropClass: 'backdropClass' },
              decls: 0,
              vars: 0,
              template: function (t, e) {},
              encapsulation: 2,
            })),
            t
          );
        })(),
        fp = (function () {
          function t() {}
          return (
            (t.prototype.close = function (t) {}),
            (t.prototype.dismiss = function (t) {}),
            t
          );
        })(),
        pp = (function () {
          function t(t, e, n, r) {
            var i = this;
            (this._windowCmptRef = t),
              (this._contentRef = e),
              (this._backdropCmptRef = n),
              (this._beforeDismiss = r),
              t.instance.dismissEvent.subscribe(function (t) {
                i.dismiss(t);
              }),
              (this.result = new Promise(function (t, e) {
                (i._resolve = t), (i._reject = e);
              })),
              this.result.then(null, function () {});
          }
          return (
            Object.defineProperty(t.prototype, 'componentInstance', {
              get: function () {
                if (this._contentRef && this._contentRef.componentRef)
                  return this._contentRef.componentRef.instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.close = function (t) {
              this._windowCmptRef &&
                (this._resolve(t), this._removeModalElements());
            }),
            (t.prototype._dismiss = function (t) {
              this._reject(t), this._removeModalElements();
            }),
            (t.prototype.dismiss = function (t) {
              var e = this;
              if (this._windowCmptRef)
                if (this._beforeDismiss) {
                  var n = this._beforeDismiss();
                  n && n.then
                    ? n.then(
                        function (n) {
                          !1 !== n && e._dismiss(t);
                        },
                        function () {}
                      )
                    : !1 !== n && this._dismiss(t);
                } else this._dismiss(t);
            }),
            (t.prototype._removeModalElements = function () {
              var t = this._windowCmptRef.location.nativeElement;
              if (
                (t.parentNode.removeChild(t),
                this._windowCmptRef.destroy(),
                this._backdropCmptRef)
              ) {
                var e = this._backdropCmptRef.location.nativeElement;
                e.parentNode.removeChild(e), this._backdropCmptRef.destroy();
              }
              this._contentRef &&
                this._contentRef.viewRef &&
                this._contentRef.viewRef.destroy(),
                (this._windowCmptRef = null),
                (this._backdropCmptRef = null),
                (this._contentRef = null);
            }),
            t
          );
        })(),
        hp = (function (t) {
          return (
            (t[(t.BACKDROP_CLICK = 0)] = 'BACKDROP_CLICK'),
            (t[(t.ESC = 1)] = 'ESC'),
            t
          );
        })({}),
        dp = (function () {
          function t(t, e, n) {
            (this._document = t),
              (this._elRef = e),
              (this._zone = n),
              (this._closed$ = new N()),
              (this.backdrop = !0),
              (this.keyboard = !0),
              (this.dismissEvent = new js());
          }
          return (
            (t.prototype.dismiss = function (t) {
              this.dismissEvent.emit(t);
            }),
            (t.prototype.ngOnInit = function () {
              this._elWithFocus = this._document.activeElement;
            }),
            (t.prototype.ngAfterViewInit = function () {
              var t = this,
                e = this._elRef.nativeElement;
              if (
                (this._zone.runOutsideAngular(function () {
                  wf(e, 'keydown')
                    .pipe(
                      kf(t._closed$),
                      Rf(function (e) {
                        return e.which === tp.Escape && t.keyboard;
                      })
                    )
                    .subscribe(function (e) {
                      return requestAnimationFrame(function () {
                        e.defaultPrevented ||
                          t._zone.run(function () {
                            return t.dismiss(hp.ESC);
                          });
                      });
                    });
                  var n = !1;
                  wf(t._dialogEl.nativeElement, 'mousedown')
                    .pipe(
                      kf(t._closed$),
                      Hf(function () {
                        return (n = !1);
                      }),
                      Cf(function () {
                        return wf(e, 'mouseup').pipe(kf(t._closed$), Lf(1));
                      }),
                      Rf(function (t) {
                        return e === t.target;
                      })
                    )
                    .subscribe(function () {
                      n = !0;
                    }),
                    wf(e, 'click')
                      .pipe(kf(t._closed$))
                      .subscribe(function (r) {
                        !0 !== t.backdrop ||
                          e !== r.target ||
                          n ||
                          t._zone.run(function () {
                            return t.dismiss(hp.BACKDROP_CLICK);
                          }),
                          (n = !1);
                      });
                }),
                !e.contains(document.activeElement))
              ) {
                var n = e.querySelector('[ngbAutofocus]'),
                  r = np(e)[0];
                (n || r || e).focus();
              }
            }),
            (t.prototype.ngOnDestroy = function () {
              var t,
                e = this,
                n = this._document.body,
                r = this._elWithFocus;
              (t = r && r.focus && n.contains(r) ? r : n),
                this._zone.runOutsideAngular(function () {
                  setTimeout(function () {
                    return t.focus();
                  }),
                    (e._elWithFocus = null);
                }),
                this._closed$.next();
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(ho(Ga), ho(Qo), ho(ma));
            }),
            (t.ɵcmp = _e({
              type: t,
              selectors: [['ngb-modal-window']],
              viewQuery: function (t, e) {
                var n, r;
                1 & t && ((r = Kf), !0, Qs(Ue(), Me(), r, !0, void 0, !0)),
                  2 & t && Ws((n = Ks())) && (e._dialogEl = n.first);
              },
              hostAttrs: ['role', 'dialog', 'tabindex', '-1'],
              hostVars: 4,
              hostBindings: function (t, e) {
                2 & t &&
                  (po('aria-modal', !0)('aria-labelledby', e.ariaLabelledBy),
                  Oo(
                    'modal fade show d-block' +
                      (e.windowClass ? ' ' + e.windowClass : '')
                  ));
              },
              inputs: {
                backdrop: 'backdrop',
                keyboard: 'keyboard',
                ariaLabelledBy: 'ariaLabelledBy',
                centered: 'centered',
                scrollable: 'scrollable',
                size: 'size',
                windowClass: 'windowClass',
              },
              outputs: { dismissEvent: 'dismiss' },
              ngContentSelectors: Qf,
              decls: 4,
              vars: 2,
              consts: [
                ['role', 'document'],
                ['dialog', ''],
                [1, 'modal-content'],
              ],
              template: function (t, e) {
                1 & t &&
                  ((function (t) {
                    var e = Me()[16][6];
                    if (!e.projection)
                      for (
                        var n = (e.projection = le(1, null)),
                          r = n.slice(),
                          i = e.child;
                        null !== i;

                      ) {
                        r[0] ? (r[0].projectionNext = i) : (n[0] = i),
                          (r[0] = i),
                          (i = i.next);
                      }
                  })(),
                  mo(0, 'div', 0, 1),
                  mo(2, 'div', 2),
                  (function (t, e, n) {
                    void 0 === e && (e = 0);
                    var r = Me(),
                      i = Ue(),
                      o = Or(i, r[6], t, 1, null, n || null);
                    null === o.projection && (o.projection = e),
                      Be(),
                      (function (t, e, n) {
                        Ai(
                          e[11],
                          0,
                          e,
                          n,
                          gi(t, n, e),
                          Ei(n.parent || e[6], e)
                        );
                      })(i, r, o);
                  })(3),
                  go(),
                  go()),
                  2 & t &&
                    Oo(
                      'modal-dialog' +
                        (e.size ? ' modal-' + e.size : '') +
                        (e.centered ? ' modal-dialog-centered' : '') +
                        (e.scrollable ? ' modal-dialog-scrollable' : '')
                    );
              },
              styles: [
                'ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}',
              ],
              encapsulation: 2,
            })),
            t
          );
        })(),
        yp = (function () {
          function t(t, e, n, r, i, o) {
            var s = this;
            (this._applicationRef = t),
              (this._injector = e),
              (this._document = n),
              (this._scrollBar = r),
              (this._rendererFactory = i),
              (this._ngZone = o),
              (this._activeWindowCmptHasChanged = new N()),
              (this._ariaHiddenValues = new Map()),
              (this._backdropAttributes = ['backdropClass']),
              (this._modalRefs = []),
              (this._windowAttributes = [
                'ariaLabelledBy',
                'backdrop',
                'centered',
                'keyboard',
                'scrollable',
                'size',
                'windowClass',
              ]),
              (this._windowCmpts = []),
              this._activeWindowCmptHasChanged.subscribe(function () {
                if (s._windowCmpts.length) {
                  var t = s._windowCmpts[s._windowCmpts.length - 1];
                  (e = t.location.nativeElement),
                    (n = s._activeWindowCmptHasChanged),
                    void 0 === r && (r = !1),
                    s._ngZone.runOutsideAngular(function () {
                      var t = wf(e, 'focusin').pipe(
                        kf(n),
                        W(function (t) {
                          return t.target;
                        })
                      );
                      wf(e, 'keydown')
                        .pipe(
                          kf(n),
                          Rf(function (t) {
                            return t.which === tp.Tab;
                          }),
                          Bf(t)
                        )
                        .subscribe(function (t) {
                          var n = a(t, 2),
                            r = n[0],
                            i = n[1],
                            o = a(np(e), 2),
                            s = o[0],
                            u = o[1];
                          (i !== s && i !== e) ||
                            !r.shiftKey ||
                            (u.focus(), r.preventDefault()),
                            i !== u ||
                              r.shiftKey ||
                              (s.focus(), r.preventDefault());
                        }),
                        r &&
                          wf(e, 'click')
                            .pipe(
                              kf(n),
                              Bf(t),
                              W(function (t) {
                                return t[1];
                              })
                            )
                            .subscribe(function (t) {
                              return t.focus();
                            });
                    }),
                    s._revertAriaHidden(),
                    s._setAriaHidden(t.location.nativeElement);
                }
                var e, n, r;
              });
          }
          return (
            (t.prototype.open = function (t, e, n, r) {
              var i = this,
                o =
                  r.container instanceof HTMLElement
                    ? r.container
                    : Zf(r.container)
                    ? this._document.querySelector(r.container)
                    : this._document.body,
                s = this._rendererFactory.createRenderer(null, null),
                a = this._scrollBar.compensate(),
                u = function () {
                  i._modalRefs.length ||
                    (s.removeClass(i._document.body, 'modal-open'),
                    i._revertAriaHidden());
                };
              if (!o)
                throw new Error(
                  'The specified modal container "' +
                    (r.container || 'body') +
                    '" was not found in the DOM.'
                );
              var l = new fp(),
                c = this._getContentRef(t, r.injector || e, n, l, r),
                f = !1 !== r.backdrop ? this._attachBackdrop(t, o) : null,
                p = this._attachWindowComponent(t, o, c),
                h = new pp(p, c, f, r.beforeDismiss);
              return (
                this._registerModalRef(h),
                this._registerWindowCmpt(p),
                h.result.then(a, a),
                h.result.then(u, u),
                (l.close = function (t) {
                  h.close(t);
                }),
                (l.dismiss = function (t) {
                  h.dismiss(t);
                }),
                this._applyWindowOptions(p.instance, r),
                1 === this._modalRefs.length &&
                  s.addClass(this._document.body, 'modal-open'),
                f && f.instance && this._applyBackdropOptions(f.instance, r),
                h
              );
            }),
            (t.prototype.dismissAll = function (t) {
              this._modalRefs.forEach(function (e) {
                return e.dismiss(t);
              });
            }),
            (t.prototype.hasOpenModals = function () {
              return this._modalRefs.length > 0;
            }),
            (t.prototype._attachBackdrop = function (t, e) {
              var n = t.resolveComponentFactory(cp).create(this._injector);
              return (
                this._applicationRef.attachView(n.hostView),
                e.appendChild(n.location.nativeElement),
                n
              );
            }),
            (t.prototype._attachWindowComponent = function (t, e, n) {
              var r = t
                .resolveComponentFactory(dp)
                .create(this._injector, n.nodes);
              return (
                this._applicationRef.attachView(r.hostView),
                e.appendChild(r.location.nativeElement),
                r
              );
            }),
            (t.prototype._applyWindowOptions = function (t, e) {
              this._windowAttributes.forEach(function (n) {
                Zf(e[n]) && (t[n] = e[n]);
              });
            }),
            (t.prototype._applyBackdropOptions = function (t, e) {
              this._backdropAttributes.forEach(function (n) {
                Zf(e[n]) && (t[n] = e[n]);
              });
            }),
            (t.prototype._getContentRef = function (t, e, n, r, i) {
              return n
                ? n instanceof ys
                  ? this._createFromTemplateRef(n, r)
                  : 'string' == typeof n
                  ? this._createFromString(n)
                  : this._createFromComponent(t, e, n, r, i)
                : new ap([]);
            }),
            (t.prototype._createFromTemplateRef = function (t, e) {
              var n = t.createEmbeddedView({
                $implicit: e,
                close: function (t) {
                  e.close(t);
                },
                dismiss: function (t) {
                  e.dismiss(t);
                },
              });
              return (
                this._applicationRef.attachView(n), new ap([n.rootNodes], n)
              );
            }),
            (t.prototype._createFromString = function (t) {
              var e = this._document.createTextNode('' + t);
              return new ap([[e]]);
            }),
            (t.prototype._createFromComponent = function (t, e, n, r, i) {
              var o = t.resolveComponentFactory(n),
                s = to.create({
                  providers: [{ provide: fp, useValue: r }],
                  parent: e,
                }),
                a = o.create(s),
                u = a.location.nativeElement;
              return (
                i.scrollable && u.classList.add('component-host-scrollable'),
                this._applicationRef.attachView(a.hostView),
                new ap([[u]], a.hostView, a)
              );
            }),
            (t.prototype._setAriaHidden = function (t) {
              var e = this,
                n = t.parentElement;
              n &&
                t !== this._document.body &&
                (Array.from(n.children).forEach(function (n) {
                  n !== t &&
                    'SCRIPT' !== n.nodeName &&
                    (e._ariaHiddenValues.set(n, n.getAttribute('aria-hidden')),
                    n.setAttribute('aria-hidden', 'true'));
                }),
                this._setAriaHidden(n));
            }),
            (t.prototype._revertAriaHidden = function () {
              this._ariaHiddenValues.forEach(function (t, e) {
                t
                  ? e.setAttribute('aria-hidden', t)
                  : e.removeAttribute('aria-hidden');
              }),
                this._ariaHiddenValues.clear();
            }),
            (t.prototype._registerModalRef = function (t) {
              var e = this,
                n = function () {
                  var n = e._modalRefs.indexOf(t);
                  n > -1 && e._modalRefs.splice(n, 1);
                };
              this._modalRefs.push(t), t.result.then(n, n);
            }),
            (t.prototype._registerWindowCmpt = function (t) {
              var e = this;
              this._windowCmpts.push(t),
                this._activeWindowCmptHasChanged.next(),
                t.onDestroy(function () {
                  var n = e._windowCmpts.indexOf(t);
                  n > -1 &&
                    (e._windowCmpts.splice(n, 1),
                    e._activeWindowCmptHasChanged.next());
                });
            }),
            (t.ɵprov = mt({
              factory: function () {
                return new t(te(Fa), te(Qt), te(Ga), te(lp), te(Zo), te(ma));
              },
              token: t,
              providedIn: 'root',
            })),
            (t.ɵfac = function (e) {
              return new (e || t)(
                te(Fa),
                te(to),
                te(Ga),
                te(lp),
                te(Zo),
                te(ma)
              );
            }),
            t
          );
        })(),
        vp = (function () {
          function t(t, e, n, r) {
            (this._moduleCFR = t),
              (this._injector = e),
              (this._modalStack = n),
              (this._config = r);
          }
          return (
            (t.prototype.open = function (t, e) {
              void 0 === e && (e = {});
              var n = Object.assign({}, this._config, e);
              return this._modalStack.open(
                this._moduleCFR,
                this._injector,
                t,
                n
              );
            }),
            (t.prototype.dismissAll = function (t) {
              this._modalStack.dismissAll(t);
            }),
            (t.prototype.hasOpenModals = function () {
              return this._modalStack.hasOpenModals();
            }),
            (t.ɵprov = mt({
              factory: function () {
                return new t(te(Wo), te(Qt), te(yp), te(sp));
              },
              token: t,
              providedIn: 'root',
            })),
            (t.ɵfac = function (e) {
              return new (e || t)(te(Wo), te(to), te(yp), te(sp));
            }),
            t
          );
        })(),
        mp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [vp],
            })),
            t
          );
        })(),
        gp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        _p = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        wp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        bp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Sp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Ep = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Cp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Tp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        xp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
            })),
            t
          );
        })(),
        kp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu]],
            })),
            t
          );
        })(),
        Ap = [
          Gf,
          $f,
          Yf,
          Jf,
          Xf,
          rp,
          op,
          mp,
          gp,
          _p,
          wp,
          bp,
          Sp,
          Cp,
          Tp,
          xp,
          kp,
          Ep,
        ],
        Pp = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [
                Ap,
                Gf,
                $f,
                Yf,
                Jf,
                Xf,
                rp,
                op,
                mp,
                gp,
                _p,
                wp,
                bp,
                Sp,
                Cp,
                Tp,
                xp,
                kp,
                Ep,
              ],
            })),
            t
          );
        })();
      function Rp() {
        return (
          Error.call(this),
          (this.message = 'no elements in sequence'),
          (this.name = 'EmptyError'),
          this
        );
      }
      Rp.prototype = Object.create(Error.prototype);
      var Op = Rp;
      function Ip(t) {
        return new k(function (e) {
          var n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? G(n) : Ff()).subscribe(e);
        });
      }
      function Np(t) {
        return function (e) {
          return 0 === t ? Ff() : e.lift(new jp(t));
        };
      }
      var jp = (function () {
          function t(t) {
            if (((this.total = t), this.total < 0)) throw new jf();
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Dp(t, this.total));
            }),
            t
          );
        })(),
        Dp = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.total = n), (r.ring = new Array()), (r.count = 0), r;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              var e = this.ring,
                n = this.total,
                r = this.count++;
              e.length < n ? e.push(t) : (e[r % n] = t);
            }),
            (e.prototype._complete = function () {
              var t = this.destination,
                e = this.count;
              if (e > 0)
                for (
                  var n = this.count >= this.total ? this.total : this.count,
                    r = this.ring,
                    i = 0;
                  i < n;
                  i++
                ) {
                  var o = e++ % n;
                  t.next(r[o]);
                }
              t.complete();
            }),
            e
          );
        })(b);
      function Fp(t) {
        return (
          void 0 === t && (t = Up),
          function (e) {
            return e.lift(new Lp(t));
          }
        );
      }
      var Lp = (function () {
          function t(t) {
            this.errorFactory = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Mp(t, this.errorFactory));
            }),
            t
          );
        })(),
        Mp = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.errorFactory = n), (r.hasValue = !1), r;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              (this.hasValue = !0), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              if (this.hasValue) return this.destination.complete();
              var t = void 0;
              try {
                t = this.errorFactory();
              } catch (e) {
                t = e;
              }
              this.destination.error(t);
            }),
            e
          );
        })(b);
      function Up() {
        return new Op();
      }
      function Hp(t) {
        return (
          void 0 === t && (t = null),
          function (e) {
            return e.lift(new Vp(t));
          }
        );
      }
      var Vp = (function () {
          function t(t) {
            this.defaultValue = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new qp(t, this.defaultValue));
            }),
            t
          );
        })(),
        qp = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return (r.defaultValue = n), (r.isEmpty = !0), r;
          }
          return (
            i(e, t),
            (e.prototype._next = function (t) {
              (this.isEmpty = !1), this.destination.next(t);
            }),
            (e.prototype._complete = function () {
              this.isEmpty && this.destination.next(this.defaultValue),
                this.destination.complete();
            }),
            e
          );
        })(b);
      function Bp(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Rf(function (e, n) {
                  return t(e, n, r);
                })
              : X,
            Np(1),
            n
              ? Hp(e)
              : Fp(function () {
                  return new Op();
                })
          );
        };
      }
      function zp(t) {
        return function (e) {
          var n = new Wp(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      var Wp = (function () {
          function t(t) {
            this.selector = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new Qp(t, this.selector, this.caught));
            }),
            t
          );
        })(),
        Qp = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e) || this;
            return (i.selector = n), (i.caught = r), i;
          }
          return (
            i(e, t),
            (e.prototype.error = function (e) {
              if (!this.isStopped) {
                var n = void 0;
                try {
                  n = this.selector(e, this.caught);
                } catch (i) {
                  return void t.prototype.error.call(this, i);
                }
                this._unsubscribeAndRecycle();
                var r = new F(this, void 0, void 0);
                this.add(r), B(this, n, void 0, void 0, r);
              }
            }),
            e
          );
        })(z);
      function Kp(t, e) {
        var n = arguments.length >= 2;
        return function (r) {
          return r.pipe(
            t
              ? Rf(function (e, n) {
                  return t(e, n, r);
                })
              : X,
            Lf(1),
            n
              ? Hp(e)
              : Fp(function () {
                  return new Op();
                })
          );
        };
      }
      var Zp = (function () {
          function t(t, e, n) {
            (this.predicate = t), (this.thisArg = e), (this.source = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Gp(t, this.predicate, this.thisArg, this.source)
              );
            }),
            t
          );
        })(),
        Gp = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.predicate = n),
              (o.thisArg = r),
              (o.source = i),
              (o.index = 0),
              (o.thisArg = r || o),
              o
            );
          }
          return (
            i(e, t),
            (e.prototype.notifyComplete = function (t) {
              this.destination.next(t), this.destination.complete();
            }),
            (e.prototype._next = function (t) {
              var e = !1;
              try {
                e = this.predicate.call(
                  this.thisArg,
                  t,
                  this.index++,
                  this.source
                );
              } catch (n) {
                return void this.destination.error(n);
              }
              e || this.notifyComplete(!1);
            }),
            (e.prototype._complete = function () {
              this.notifyComplete(!0);
            }),
            e
          );
        })(b);
      function $p(t, e) {
        var n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Yp(t, e, n));
          }
        );
      }
      var Yp = (function () {
          function t(t, e, n) {
            void 0 === n && (n = !1),
              (this.accumulator = t),
              (this.seed = e),
              (this.hasSeed = n);
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(
                new Jp(t, this.accumulator, this.seed, this.hasSeed)
              );
            }),
            t
          );
        })(),
        Jp = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e) || this;
            return (
              (o.accumulator = n),
              (o._seed = r),
              (o.hasSeed = i),
              (o.index = 0),
              o
            );
          }
          return (
            i(e, t),
            Object.defineProperty(e.prototype, 'seed', {
              get: function () {
                return this._seed;
              },
              set: function (t) {
                (this.hasSeed = !0), (this._seed = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (e.prototype._next = function (t) {
              if (this.hasSeed) return this._tryNext(t);
              (this.seed = t), this.destination.next(t);
            }),
            (e.prototype._tryNext = function (t) {
              var e,
                n = this.index++;
              try {
                e = this.accumulator(this.seed, t, n);
              } catch (r) {
                this.destination.error(r);
              }
              (this.seed = e), this.destination.next(e);
            }),
            e
          );
        })(b);
      function Xp(t, e) {
        return $(t, e, 1);
      }
      var th = (function () {
          function t(t) {
            this.callback = t;
          }
          return (
            (t.prototype.call = function (t, e) {
              return e.subscribe(new eh(t, this.callback));
            }),
            t
          );
        })(),
        eh = (function (t) {
          function e(e, n) {
            var r = t.call(this, e) || this;
            return r.add(new d(n)), r;
          }
          return i(e, t), e;
        })(b),
        nh = (function () {
          return function (t, e) {
            (this.id = t), (this.url = e);
          };
        })(),
        rh = (function (t) {
          function e(e, n, r, i) {
            void 0 === r && (r = 'imperative'), void 0 === i && (i = null);
            var o = t.call(this, e, n) || this;
            return (o.navigationTrigger = r), (o.restoredState = i), o;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'NavigationStart(id: ' + this.id + ", url: '" + this.url + "')"
              );
            }),
            e
          );
        })(nh),
        ih = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e, n) || this;
            return (i.urlAfterRedirects = r), i;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'NavigationEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "')"
              );
            }),
            e
          );
        })(nh),
        oh = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e, n) || this;
            return (i.reason = r), i;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'NavigationCancel(id: ' + this.id + ", url: '" + this.url + "')"
              );
            }),
            e
          );
        })(nh),
        sh = (function (t) {
          function e(e, n, r) {
            var i = t.call(this, e, n) || this;
            return (i.error = r), i;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'NavigationError(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', error: " +
                this.error +
                ')'
              );
            }),
            e
          );
        })(nh),
        ah = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e, n) || this;
            return (o.urlAfterRedirects = r), (o.state = i), o;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'RoutesRecognized(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(nh),
        uh = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e, n) || this;
            return (o.urlAfterRedirects = r), (o.state = i), o;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'GuardsCheckStart(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(nh),
        lh = (function (t) {
          function e(e, n, r, i, o) {
            var s = t.call(this, e, n) || this;
            return (
              (s.urlAfterRedirects = r),
              (s.state = i),
              (s.shouldActivate = o),
              s
            );
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'GuardsCheckEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ', shouldActivate: ' +
                this.shouldActivate +
                ')'
              );
            }),
            e
          );
        })(nh),
        ch = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e, n) || this;
            return (o.urlAfterRedirects = r), (o.state = i), o;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'ResolveStart(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(nh),
        fh = (function (t) {
          function e(e, n, r, i) {
            var o = t.call(this, e, n) || this;
            return (o.urlAfterRedirects = r), (o.state = i), o;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return (
                'ResolveEnd(id: ' +
                this.id +
                ", url: '" +
                this.url +
                "', urlAfterRedirects: '" +
                this.urlAfterRedirects +
                "', state: " +
                this.state +
                ')'
              );
            }),
            e
          );
        })(nh),
        ph = (function () {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function () {
              return 'RouteConfigLoadStart(path: ' + this.route.path + ')';
            }),
            t
          );
        })(),
        hh = (function () {
          function t(t) {
            this.route = t;
          }
          return (
            (t.prototype.toString = function () {
              return 'RouteConfigLoadEnd(path: ' + this.route.path + ')';
            }),
            t
          );
        })(),
        dh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ChildActivationStart(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  '') +
                "')"
              );
            }),
            t
          );
        })(),
        yh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ChildActivationEnd(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  '') +
                "')"
              );
            }),
            t
          );
        })(),
        vh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ActivationStart(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  '') +
                "')"
              );
            }),
            t
          );
        })(),
        mh = (function () {
          function t(t) {
            this.snapshot = t;
          }
          return (
            (t.prototype.toString = function () {
              return (
                "ActivationEnd(path: '" +
                ((this.snapshot.routeConfig &&
                  this.snapshot.routeConfig.path) ||
                  '') +
                "')"
              );
            }),
            t
          );
        })(),
        gh = (function () {
          function t(t, e, n) {
            (this.routerEvent = t), (this.position = e), (this.anchor = n);
          }
          return (
            (t.prototype.toString = function () {
              return (
                "Scroll(anchor: '" +
                this.anchor +
                "', position: '" +
                (this.position
                  ? this.position[0] + ', ' + this.position[1]
                  : null) +
                "')"
              );
            }),
            t
          );
        })(),
        _h = (function () {
          function t() {}
          return (
            (t.ɵfac = function (e) {
              return new (e || t)();
            }),
            (t.ɵcmp = _e({
              type: t,
              selectors: [['ng-component']],
              decls: 1,
              vars: 0,
              template: function (t, e) {
                1 & t && _o(0, 'router-outlet');
              },
              directives: function () {
                return [Sy];
              },
              encapsulation: 2,
            })),
            t
          );
        })(),
        wh = (function () {
          function t(t) {
            this.params = t || {};
          }
          return (
            (t.prototype.has = function (t) {
              return this.params.hasOwnProperty(t);
            }),
            (t.prototype.get = function (t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e[0] : e;
              }
              return null;
            }),
            (t.prototype.getAll = function (t) {
              if (this.has(t)) {
                var e = this.params[t];
                return Array.isArray(e) ? e : [e];
              }
              return [];
            }),
            Object.defineProperty(t.prototype, 'keys', {
              get: function () {
                return Object.keys(this.params);
              },
              enumerable: !0,
              configurable: !0,
            }),
            t
          );
        })();
      function bh(t) {
        return new wh(t);
      }
      function Sh(t) {
        var e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Eh(t, e, n) {
        var r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length))
          return null;
        for (var i = {}, o = 0; o < r.length; o++) {
          var s = r[o],
            a = t[o];
          if (s.startsWith(':')) i[s.substring(1)] = a;
          else if (s !== a.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: i };
      }
      var Ch = (function () {
        return function (t, e) {
          (this.routes = t), (this.module = e);
        };
      })();
      function Th(t, e) {
        void 0 === e && (e = '');
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          xh(r, kh(e, r));
        }
      }
      function xh(t, e) {
        if (!t)
          throw new Error(
            "\n      Invalid configuration of route '" +
              e +
              "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    "
          );
        if (Array.isArray(t))
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': Array cannot be specified"
          );
        if (
          !t.component &&
          !t.children &&
          !t.loadChildren &&
          t.outlet &&
          'primary' !== t.outlet
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': a componentless route without children or loadChildren cannot have a named outlet set"
          );
        if (t.redirectTo && t.children)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and children cannot be used together"
          );
        if (t.redirectTo && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and loadChildren cannot be used together"
          );
        if (t.children && t.loadChildren)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': children and loadChildren cannot be used together"
          );
        if (t.redirectTo && t.component)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': redirectTo and component cannot be used together"
          );
        if (t.path && t.matcher)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path and matcher cannot be used together"
          );
        if (
          void 0 === t.redirectTo &&
          !t.component &&
          !t.children &&
          !t.loadChildren
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "'. One of the following must be provided: component, redirectTo, children or loadChildren"
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': routes must have either a path or a matcher specified"
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': path cannot start with a slash"
          );
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            'Invalid configuration of route \'{path: "' +
              e +
              '", redirectTo: "' +
              t.redirectTo +
              "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'."
          );
        if (
          void 0 !== t.pathMatch &&
          'full' !== t.pathMatch &&
          'prefix' !== t.pathMatch
        )
          throw new Error(
            "Invalid configuration of route '" +
              e +
              "': pathMatch can only be set to 'prefix' or 'full'"
          );
        t.children && Th(t.children, e);
      }
      function kh(t, e) {
        return e
          ? t || e.path
            ? t && !e.path
              ? t + '/'
              : !t && e.path
              ? e.path
              : t + '/' + e.path
            : ''
          : t;
      }
      function Ah(t) {
        var e = t.children && t.children.map(Ah),
          n = e ? o(o({}, t), { children: e }) : o({}, t);
        return (
          !n.component &&
            (e || n.loadChildren) &&
            n.outlet &&
            'primary' !== n.outlet &&
            (n.component = _h),
          n
        );
      }
      function Ph(t, e) {
        var n,
          r = Object.keys(t),
          i = Object.keys(e);
        if (!r || !i || r.length != i.length) return !1;
        for (var o = 0; o < r.length; o++)
          if (!Rh(t[(n = r[o])], e[n])) return !1;
        return !0;
      }
      function Rh(t, e) {
        return Array.isArray(t) && Array.isArray(e)
          ? t.length == e.length &&
              t.every(function (t) {
                return e.indexOf(t) > -1;
              })
          : t === e;
      }
      function Oh(t) {
        return Array.prototype.concat.apply([], t);
      }
      function Ih(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function Nh(t, e) {
        for (var n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function jh(t) {
        return (e = t) && 'function' == typeof e.subscribe
          ? t
          : wo(t)
          ? G(Promise.resolve(t))
          : bf(t);
        var e;
      }
      function Dh(t, e, n) {
        return n
          ? (function (t, e) {
              return Ph(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!Uh(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (var r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return (
                Object.keys(e).length <= Object.keys(t).length &&
                Object.keys(e).every(function (n) {
                  return Rh(t[n], e[n]);
                })
              );
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, i) {
                  if (n.segments.length > i.length)
                    return (
                      !!Uh((s = n.segments.slice(0, i.length)), i) &&
                      !r.hasChildren()
                    );
                  if (n.segments.length === i.length) {
                    if (!Uh(n.segments, i)) return !1;
                    for (var o in r.children) {
                      if (!n.children[o]) return !1;
                      if (!t(n.children[o], r.children[o])) return !1;
                    }
                    return !0;
                  }
                  var s = i.slice(0, n.segments.length),
                    a = i.slice(n.segments.length);
                  return (
                    !!Uh(n.segments, s) &&
                    !!n.children.primary &&
                    e(n.children.primary, r, a)
                  );
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      var Fh = (function () {
          function t(t, e, n) {
            (this.root = t), (this.queryParams = e), (this.fragment = n);
          }
          return (
            Object.defineProperty(t.prototype, 'queryParamMap', {
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = bh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return Bh.serialize(this);
            }),
            t
          );
        })(),
        Lh = (function () {
          function t(t, e) {
            var n = this;
            (this.segments = t),
              (this.children = e),
              (this.parent = null),
              Nh(e, function (t, e) {
                return (t.parent = n);
              });
          }
          return (
            (t.prototype.hasChildren = function () {
              return this.numberOfChildren > 0;
            }),
            Object.defineProperty(t.prototype, 'numberOfChildren', {
              get: function () {
                return Object.keys(this.children).length;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return zh(this);
            }),
            t
          );
        })(),
        Mh = (function () {
          function t(t, e) {
            (this.path = t), (this.parameters = e);
          }
          return (
            Object.defineProperty(t.prototype, 'parameterMap', {
              get: function () {
                return (
                  this._parameterMap ||
                    (this._parameterMap = bh(this.parameters)),
                  this._parameterMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return $h(this);
            }),
            t
          );
        })();
      function Uh(t, e) {
        return (
          t.length === e.length &&
          t.every(function (t, n) {
            return t.path === e[n].path;
          })
        );
      }
      function Hh(t, e) {
        var n = [];
        return (
          Nh(t.children, function (t, r) {
            'primary' === r && (n = n.concat(e(t, r)));
          }),
          Nh(t.children, function (t, r) {
            'primary' !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      var Vh = (function () {
          return function () {};
        })(),
        qh = (function () {
          function t() {}
          return (
            (t.prototype.parse = function (t) {
              var e = new ed(t);
              return new Fh(
                e.parseRootSegment(),
                e.parseQueryParams(),
                e.parseFragment()
              );
            }),
            (t.prototype.serialize = function (t) {
              var e, n;
              return (
                '/' +
                (function t(e, n) {
                  if (!e.hasChildren()) return zh(e);
                  if (n) {
                    var r = e.children.primary ? t(e.children.primary, !1) : '',
                      i = [];
                    return (
                      Nh(e.children, function (e, n) {
                        'primary' !== n && i.push(n + ':' + t(e, !1));
                      }),
                      i.length > 0 ? r + '(' + i.join('//') + ')' : r
                    );
                  }
                  var o = Hh(e, function (n, r) {
                    return 'primary' === r
                      ? [t(e.children.primary, !1)]
                      : [r + ':' + t(n, !1)];
                  });
                  return zh(e) + '/(' + o.join('//') + ')';
                })(t.root, !0) +
                ((e = t.queryParams),
                (n = Object.keys(e).map(function (t) {
                  var n = e[t];
                  return Array.isArray(n)
                    ? n
                        .map(function (e) {
                          return Qh(t) + '=' + Qh(e);
                        })
                        .join('&')
                    : Qh(t) + '=' + Qh(n);
                })).length
                  ? '?' + n.join('&')
                  : '') +
                ('string' == typeof t.fragment
                  ? '#' + encodeURI(t.fragment)
                  : '')
              );
            }),
            t
          );
        })(),
        Bh = new qh();
      function zh(t) {
        return t.segments
          .map(function (t) {
            return $h(t);
          })
          .join('/');
      }
      function Wh(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function Qh(t) {
        return Wh(t).replace(/%3B/gi, ';');
      }
      function Kh(t) {
        return Wh(t)
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/%26/gi, '&');
      }
      function Zh(t) {
        return decodeURIComponent(t);
      }
      function Gh(t) {
        return Zh(t.replace(/\+/g, '%20'));
      }
      function $h(t) {
        return (
          '' +
          Kh(t.path) +
          ((e = t.parameters),
          Object.keys(e)
            .map(function (t) {
              return ';' + Kh(t) + '=' + Kh(e[t]);
            })
            .join(''))
        );
        var e;
      }
      var Yh = /^[^\/()?;=#]+/;
      function Jh(t) {
        var e = t.match(Yh);
        return e ? e[0] : '';
      }
      var Xh = /^[^=?&#]+/,
        td = /^[^?&#]+/,
        ed = (function () {
          function t(t) {
            (this.url = t), (this.remaining = t);
          }
          return (
            (t.prototype.parseRootSegment = function () {
              return (
                this.consumeOptional('/'),
                '' === this.remaining ||
                this.peekStartsWith('?') ||
                this.peekStartsWith('#')
                  ? new Lh([], {})
                  : new Lh([], this.parseChildren())
              );
            }),
            (t.prototype.parseQueryParams = function () {
              var t = {};
              if (this.consumeOptional('?'))
                do {
                  this.parseQueryParam(t);
                } while (this.consumeOptional('&'));
              return t;
            }),
            (t.prototype.parseFragment = function () {
              return this.consumeOptional('#')
                ? decodeURIComponent(this.remaining)
                : null;
            }),
            (t.prototype.parseChildren = function () {
              if ('' === this.remaining) return {};
              this.consumeOptional('/');
              var t = [];
              for (
                this.peekStartsWith('(') || t.push(this.parseSegment());
                this.peekStartsWith('/') &&
                !this.peekStartsWith('//') &&
                !this.peekStartsWith('/(');

              )
                this.capture('/'), t.push(this.parseSegment());
              var e = {};
              this.peekStartsWith('/(') &&
                (this.capture('/'), (e = this.parseParens(!0)));
              var n = {};
              return (
                this.peekStartsWith('(') && (n = this.parseParens(!1)),
                (t.length > 0 || Object.keys(e).length > 0) &&
                  (n.primary = new Lh(t, e)),
                n
              );
            }),
            (t.prototype.parseSegment = function () {
              var t = Jh(this.remaining);
              if ('' === t && this.peekStartsWith(';'))
                throw new Error(
                  "Empty path url segment cannot have parameters: '" +
                    this.remaining +
                    "'."
                );
              return this.capture(t), new Mh(Zh(t), this.parseMatrixParams());
            }),
            (t.prototype.parseMatrixParams = function () {
              for (var t = {}; this.consumeOptional(';'); ) this.parseParam(t);
              return t;
            }),
            (t.prototype.parseParam = function (t) {
              var e = Jh(this.remaining);
              if (e) {
                this.capture(e);
                var n = '';
                if (this.consumeOptional('=')) {
                  var r = Jh(this.remaining);
                  r && this.capture((n = r));
                }
                t[Zh(e)] = Zh(n);
              }
            }),
            (t.prototype.parseQueryParam = function (t) {
              var e,
                n = (e = this.remaining.match(Xh)) ? e[0] : '';
              if (n) {
                this.capture(n);
                var r = '';
                if (this.consumeOptional('=')) {
                  var i = (function (t) {
                    var e = t.match(td);
                    return e ? e[0] : '';
                  })(this.remaining);
                  i && this.capture((r = i));
                }
                var o = Gh(n),
                  s = Gh(r);
                if (t.hasOwnProperty(o)) {
                  var a = t[o];
                  Array.isArray(a) || (t[o] = a = [a]), a.push(s);
                } else t[o] = s;
              }
            }),
            (t.prototype.parseParens = function (t) {
              var e = {};
              for (
                this.capture('(');
                !this.consumeOptional(')') && this.remaining.length > 0;

              ) {
                var n = Jh(this.remaining),
                  r = this.remaining[n.length];
                if ('/' !== r && ')' !== r && ';' !== r)
                  throw new Error("Cannot parse url '" + this.url + "'");
                var i = void 0;
                n.indexOf(':') > -1
                  ? ((i = n.substr(0, n.indexOf(':'))),
                    this.capture(i),
                    this.capture(':'))
                  : t && (i = 'primary');
                var o = this.parseChildren();
                (e[i] =
                  1 === Object.keys(o).length ? o.primary : new Lh([], o)),
                  this.consumeOptional('//');
              }
              return e;
            }),
            (t.prototype.peekStartsWith = function (t) {
              return this.remaining.startsWith(t);
            }),
            (t.prototype.consumeOptional = function (t) {
              return (
                !!this.peekStartsWith(t) &&
                ((this.remaining = this.remaining.substring(t.length)), !0)
              );
            }),
            (t.prototype.capture = function (t) {
              if (!this.consumeOptional(t))
                throw new Error('Expected "' + t + '".');
            }),
            t
          );
        })(),
        nd = (function () {
          function t(t) {
            this._root = t;
          }
          return (
            Object.defineProperty(t.prototype, 'root', {
              get: function () {
                return this._root.value;
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.parent = function (t) {
              var e = this.pathFromRoot(t);
              return e.length > 1 ? e[e.length - 2] : null;
            }),
            (t.prototype.children = function (t) {
              var e = rd(t, this._root);
              return e
                ? e.children.map(function (t) {
                    return t.value;
                  })
                : [];
            }),
            (t.prototype.firstChild = function (t) {
              var e = rd(t, this._root);
              return e && e.children.length > 0 ? e.children[0].value : null;
            }),
            (t.prototype.siblings = function (t) {
              var e = id(t, this._root);
              return e.length < 2
                ? []
                : e[e.length - 2].children
                    .map(function (t) {
                      return t.value;
                    })
                    .filter(function (e) {
                      return e !== t;
                    });
            }),
            (t.prototype.pathFromRoot = function (t) {
              return id(t, this._root).map(function (t) {
                return t.value;
              });
            }),
            t
          );
        })();
      function rd(t, e) {
        var n, r;
        if (t === e.value) return e;
        try {
          for (var i = s(e.children), o = i.next(); !o.done; o = i.next()) {
            var a = rd(t, o.value);
            if (a) return a;
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }
      function id(t, e) {
        var n, r;
        if (t === e.value) return [e];
        try {
          for (var i = s(e.children), o = i.next(); !o.done; o = i.next()) {
            var a = id(t, o.value);
            if (a.length) return a.unshift(e), a;
          }
        } catch (u) {
          n = { error: u };
        } finally {
          try {
            o && !o.done && (r = i.return) && r.call(i);
          } finally {
            if (n) throw n.error;
          }
        }
        return [];
      }
      var od = (function () {
        function t(t, e) {
          (this.value = t), (this.children = e);
        }
        return (
          (t.prototype.toString = function () {
            return 'TreeNode(' + this.value + ')';
          }),
          t
        );
      })();
      function sd(t) {
        var e = {};
        return (
          t &&
            t.children.forEach(function (t) {
              return (e[t.value.outlet] = t);
            }),
          e
        );
      }
      var ad = (function (t) {
        function e(e, n) {
          var r = t.call(this, e) || this;
          return (r.snapshot = n), hd(r, e), r;
        }
        return (
          i(e, t),
          (e.prototype.toString = function () {
            return this.snapshot.toString();
          }),
          e
        );
      })(nd);
      function ud(t, e) {
        var n = (function (t, e) {
            var n = new fd(
              [],
              {},
              {},
              '',
              {},
              'primary',
              e,
              null,
              t.root,
              -1,
              {}
            );
            return new pd('', new od(n, []));
          })(t, e),
          r = new yf([new Mh('', {})]),
          i = new yf({}),
          o = new yf({}),
          s = new yf({}),
          a = new yf(''),
          u = new ld(r, i, s, a, o, 'primary', e, n.root);
        return (u.snapshot = n.root), new ad(new od(u, []), n);
      }
      var ld = (function () {
        function t(t, e, n, r, i, o, s, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = o),
            (this.component = s),
            (this._futureSnapshot = a);
        }
        return (
          Object.defineProperty(t.prototype, 'routeConfig', {
            get: function () {
              return this._futureSnapshot.routeConfig;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'root', {
            get: function () {
              return this._routerState.root;
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'parent', {
            get: function () {
              return this._routerState.parent(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'firstChild', {
            get: function () {
              return this._routerState.firstChild(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'children', {
            get: function () {
              return this._routerState.children(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'pathFromRoot', {
            get: function () {
              return this._routerState.pathFromRoot(this);
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'paramMap', {
            get: function () {
              return (
                this._paramMap ||
                  (this._paramMap = this.params.pipe(
                    W(function (t) {
                      return bh(t);
                    })
                  )),
                this._paramMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          Object.defineProperty(t.prototype, 'queryParamMap', {
            get: function () {
              return (
                this._queryParamMap ||
                  (this._queryParamMap = this.queryParams.pipe(
                    W(function (t) {
                      return bh(t);
                    })
                  )),
                this._queryParamMap
              );
            },
            enumerable: !0,
            configurable: !0,
          }),
          (t.prototype.toString = function () {
            return this.snapshot
              ? this.snapshot.toString()
              : 'Future(' + this._futureSnapshot + ')';
          }),
          t
        );
      })();
      function cd(t, e) {
        void 0 === e && (e = 'emptyOnly');
        var n = t.pathFromRoot,
          r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            var i = n[r],
              s = n[r - 1];
            if (i.routeConfig && '' === i.routeConfig.path) r--;
            else {
              if (s.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            function (t, e) {
              return {
                params: o(o({}, t.params), e.params),
                data: o(o({}, t.data), e.data),
                resolve: o(o({}, t.resolve), e._resolvedData),
              };
            },
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      var fd = (function () {
          function t(t, e, n, r, i, o, s, a, u, l, c) {
            (this.url = t),
              (this.params = e),
              (this.queryParams = n),
              (this.fragment = r),
              (this.data = i),
              (this.outlet = o),
              (this.component = s),
              (this.routeConfig = a),
              (this._urlSegment = u),
              (this._lastPathIndex = l),
              (this._resolve = c);
          }
          return (
            Object.defineProperty(t.prototype, 'root', {
              get: function () {
                return this._routerState.root;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'parent', {
              get: function () {
                return this._routerState.parent(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'firstChild', {
              get: function () {
                return this._routerState.firstChild(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'children', {
              get: function () {
                return this._routerState.children(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'pathFromRoot', {
              get: function () {
                return this._routerState.pathFromRoot(this);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'paramMap', {
              get: function () {
                return (
                  this._paramMap || (this._paramMap = bh(this.params)),
                  this._paramMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'queryParamMap', {
              get: function () {
                return (
                  this._queryParamMap ||
                    (this._queryParamMap = bh(this.queryParams)),
                  this._queryParamMap
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.toString = function () {
              return (
                "Route(url:'" +
                this.url
                  .map(function (t) {
                    return t.toString();
                  })
                  .join('/') +
                "', path:'" +
                (this.routeConfig ? this.routeConfig.path : '') +
                "')"
              );
            }),
            t
          );
        })(),
        pd = (function (t) {
          function e(e, n) {
            var r = t.call(this, n) || this;
            return (r.url = e), hd(r, n), r;
          }
          return (
            i(e, t),
            (e.prototype.toString = function () {
              return dd(this._root);
            }),
            e
          );
        })(nd);
      function hd(t, e) {
        (e.value._routerState = t),
          e.children.forEach(function (e) {
            return hd(t, e);
          });
      }
      function dd(t) {
        var e =
          t.children.length > 0
            ? ' { ' + t.children.map(dd).join(', ') + ' } '
            : '';
        return '' + t.value + e;
      }
      function yd(t) {
        if (t.snapshot) {
          var e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Ph(e.queryParams, n.queryParams) ||
              t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Ph(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (var n = 0; n < t.length; ++n) if (!Ph(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Ph(e.data, n.data) || t.data.next(n.data);
        } else
          (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function vd(t, e) {
        var n, r;
        return (
          Ph(t.params, e.params) &&
          Uh((n = t.url), (r = e.url)) &&
          n.every(function (t, e) {
            return Ph(t.parameters, r[e].parameters);
          }) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || vd(t.parent, e.parent))
        );
      }
      function md(t) {
        return (
          'object' == typeof t && null != t && !t.outlets && !t.segmentPath
        );
      }
      function gd(t, e, n, r, i) {
        var o = {};
        return (
          r &&
            Nh(r, function (t, e) {
              o[e] = Array.isArray(t)
                ? t.map(function (t) {
                    return '' + t;
                  })
                : '' + t;
            }),
          new Fh(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  var i = {};
                  return (
                    Nh(e.children, function (e, o) {
                      i[o] = e === n ? r : t(e, n, r);
                    }),
                    new Lh(e.segments, i)
                  );
                })(n.root, t, e),
            o,
            i
          )
        );
      }
      var _d = (function () {
          function t(t, e, n) {
            if (
              ((this.isAbsolute = t),
              (this.numberOfDoubleDots = e),
              (this.commands = n),
              t && n.length > 0 && md(n[0]))
            )
              throw new Error('Root segment cannot have matrix parameters');
            var r = n.find(function (t) {
              return 'object' == typeof t && null != t && t.outlets;
            });
            if (r && r !== Ih(n))
              throw new Error('{outlets:{}} has to be the last command');
          }
          return (
            (t.prototype.toRoot = function () {
              return (
                this.isAbsolute &&
                1 === this.commands.length &&
                '/' == this.commands[0]
              );
            }),
            t
          );
        })(),
        wd = (function () {
          return function (t, e, n) {
            (this.segmentGroup = t),
              (this.processChildren = e),
              (this.index = n);
          };
        })();
      function bd(t) {
        return 'object' == typeof t && null != t && t.outlets
          ? t.outlets.primary
          : '' + t;
      }
      function Sd(t, e, n) {
        if (
          (t || (t = new Lh([], {})),
          0 === t.segments.length && t.hasChildren())
        )
          return Ed(t, e, n);
        var r = (function (t, e, n) {
            for (
              var r = 0,
                i = e,
                o = { match: !1, pathIndex: 0, commandIndex: 0 };
              i < t.segments.length;

            ) {
              if (r >= n.length) return o;
              var s = t.segments[i],
                a = bd(n[r]),
                u = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === a) break;
              if (a && u && 'object' == typeof u && void 0 === u.outlets) {
                if (!kd(a, u, s)) return o;
                r += 2;
              } else {
                if (!kd(a, {}, s)) return o;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(t, e, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          var o = new Lh(t.segments.slice(0, r.pathIndex), {});
          return (
            (o.children.primary = new Lh(
              t.segments.slice(r.pathIndex),
              t.children
            )),
            Ed(o, 0, i)
          );
        }
        return r.match && 0 === i.length
          ? new Lh(t.segments, {})
          : r.match && !t.hasChildren()
          ? Cd(t, e, n)
          : r.match
          ? Ed(t, 0, i)
          : Cd(t, e, n);
      }
      function Ed(t, e, n) {
        if (0 === n.length) return new Lh(t.segments, {});
        var r = (function (t) {
            var e, n;
            return 'object' != typeof t[0]
              ? (((e = {}).primary = t), e)
              : void 0 === t[0].outlets
              ? (((n = {}).primary = t), n)
              : t[0].outlets;
          })(n),
          i = {};
        return (
          Nh(r, function (n, r) {
            null !== n && (i[r] = Sd(t.children[r], e, n));
          }),
          Nh(t.children, function (t, e) {
            void 0 === r[e] && (i[e] = t);
          }),
          new Lh(t.segments, i)
        );
      }
      function Cd(t, e, n) {
        for (var r = t.segments.slice(0, e), i = 0; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            var o = Td(n[i].outlets);
            return new Lh(r, o);
          }
          if (0 === i && md(n[0]))
            r.push(new Mh(t.segments[e].path, n[0])), i++;
          else {
            var s = bd(n[i]),
              a = i < n.length - 1 ? n[i + 1] : null;
            s && a && md(a)
              ? (r.push(new Mh(s, xd(a))), (i += 2))
              : (r.push(new Mh(s, {})), i++);
          }
        }
        return new Lh(r, {});
      }
      function Td(t) {
        var e = {};
        return (
          Nh(t, function (t, n) {
            null !== t && (e[n] = Cd(new Lh([], {}), 0, t));
          }),
          e
        );
      }
      function xd(t) {
        var e = {};
        return (
          Nh(t, function (t, n) {
            return (e[n] = '' + t);
          }),
          e
        );
      }
      function kd(t, e, n) {
        return t == n.path && Ph(e, n.parameters);
      }
      var Ad = (function () {
        function t(t, e, n, r) {
          (this.routeReuseStrategy = t),
            (this.futureState = e),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        return (
          (t.prototype.activate = function (t) {
            var e = this.futureState._root,
              n = this.currState ? this.currState._root : null;
            this.deactivateChildRoutes(e, n, t),
              yd(this.futureState.root),
              this.activateChildRoutes(e, n, t);
          }),
          (t.prototype.deactivateChildRoutes = function (t, e, n) {
            var r = this,
              i = sd(e);
            t.children.forEach(function (t) {
              var e = t.value.outlet;
              r.deactivateRoutes(t, i[e], n), delete i[e];
            }),
              Nh(i, function (t, e) {
                r.deactivateRouteAndItsChildren(t, n);
              });
          }),
          (t.prototype.deactivateRoutes = function (t, e, n) {
            var r = t.value,
              i = e ? e.value : null;
            if (r === i)
              if (r.component) {
                var o = n.getContext(r.outlet);
                o && this.deactivateChildRoutes(t, e, o.children);
              } else this.deactivateChildRoutes(t, e, n);
            else i && this.deactivateRouteAndItsChildren(e, n);
          }),
          (t.prototype.deactivateRouteAndItsChildren = function (t, e) {
            this.routeReuseStrategy.shouldDetach(t.value.snapshot)
              ? this.detachAndStoreRouteSubtree(t, e)
              : this.deactivateRouteAndOutlet(t, e);
          }),
          (t.prototype.detachAndStoreRouteSubtree = function (t, e) {
            var n = e.getContext(t.value.outlet);
            if (n && n.outlet) {
              var r = n.outlet.detach(),
                i = n.children.onOutletDeactivated();
              this.routeReuseStrategy.store(t.value.snapshot, {
                componentRef: r,
                route: t,
                contexts: i,
              });
            }
          }),
          (t.prototype.deactivateRouteAndOutlet = function (t, e) {
            var n = this,
              r = e.getContext(t.value.outlet);
            if (r) {
              var i = sd(t),
                o = t.value.component ? r.children : e;
              Nh(i, function (t, e) {
                return n.deactivateRouteAndItsChildren(t, o);
              }),
                r.outlet &&
                  (r.outlet.deactivate(), r.children.onOutletDeactivated());
            }
          }),
          (t.prototype.activateChildRoutes = function (t, e, n) {
            var r = this,
              i = sd(e);
            t.children.forEach(function (t) {
              r.activateRoutes(t, i[t.value.outlet], n),
                r.forwardEvent(new mh(t.value.snapshot));
            }),
              t.children.length && this.forwardEvent(new yh(t.value.snapshot));
          }),
          (t.prototype.activateRoutes = function (t, e, n) {
            var r = t.value,
              i = e ? e.value : null;
            if ((yd(r), r === i))
              if (r.component) {
                var o = n.getOrCreateContext(r.outlet);
                this.activateChildRoutes(t, e, o.children);
              } else this.activateChildRoutes(t, e, n);
            else if (r.component)
              if (
                ((o = n.getOrCreateContext(r.outlet)),
                this.routeReuseStrategy.shouldAttach(r.snapshot))
              ) {
                var s = this.routeReuseStrategy.retrieve(r.snapshot);
                this.routeReuseStrategy.store(r.snapshot, null),
                  o.children.onOutletReAttached(s.contexts),
                  (o.attachRef = s.componentRef),
                  (o.route = s.route.value),
                  o.outlet && o.outlet.attach(s.componentRef, s.route.value),
                  Pd(s.route);
              } else {
                var a = (function (t) {
                    for (var e = t.parent; e; e = e.parent) {
                      var n = e.routeConfig;
                      if (n && n._loadedConfig) return n._loadedConfig;
                      if (n && n.component) return null;
                    }
                    return null;
                  })(r.snapshot),
                  u = a ? a.module.componentFactoryResolver : null;
                (o.attachRef = null),
                  (o.route = r),
                  (o.resolver = u),
                  o.outlet && o.outlet.activateWith(r, u),
                  this.activateChildRoutes(t, null, o.children);
              }
            else this.activateChildRoutes(t, null, n);
          }),
          t
        );
      })();
      function Pd(t) {
        yd(t.value), t.children.forEach(Pd);
      }
      function Rd(t) {
        return 'function' == typeof t;
      }
      function Od(t) {
        return t instanceof Fh;
      }
      var Id = (function () {
          return function (t) {
            this.segmentGroup = t || null;
          };
        })(),
        Nd = (function () {
          return function (t) {
            this.urlTree = t;
          };
        })();
      function jd(t) {
        return new k(function (e) {
          return e.error(new Id(t));
        });
      }
      function Dd(t) {
        return new k(function (e) {
          return e.error(new Nd(t));
        });
      }
      function Fd(t) {
        return new k(function (e) {
          return e.error(
            new Error(
              "Only absolute redirects can have named outlets. redirectTo: '" +
                t +
                "'"
            )
          );
        });
      }
      var Ld = (function () {
        function t(t, e, n, r, i) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = i),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(ie));
        }
        return (
          (t.prototype.apply = function () {
            var t = this;
            return this.expandSegmentGroup(
              this.ngModule,
              this.config,
              this.urlTree.root,
              'primary'
            )
              .pipe(
                W(function (e) {
                  return t.createUrlTree(
                    e,
                    t.urlTree.queryParams,
                    t.urlTree.fragment
                  );
                })
              )
              .pipe(
                zp(function (e) {
                  if (e instanceof Nd)
                    return (t.allowRedirects = !1), t.match(e.urlTree);
                  if (e instanceof Id) throw t.noMatchError(e);
                  throw e;
                })
              );
          }),
          (t.prototype.match = function (t) {
            var e = this;
            return this.expandSegmentGroup(
              this.ngModule,
              this.config,
              t.root,
              'primary'
            )
              .pipe(
                W(function (n) {
                  return e.createUrlTree(n, t.queryParams, t.fragment);
                })
              )
              .pipe(
                zp(function (t) {
                  if (t instanceof Id) throw e.noMatchError(t);
                  throw t;
                })
              );
          }),
          (t.prototype.noMatchError = function (t) {
            return new Error(
              "Cannot match any routes. URL Segment: '" + t.segmentGroup + "'"
            );
          }),
          (t.prototype.createUrlTree = function (t, e, n) {
            var r,
              i =
                t.segments.length > 0
                  ? new Lh([], (((r = {}).primary = t), r))
                  : t;
            return new Fh(i, e, n);
          }),
          (t.prototype.expandSegmentGroup = function (t, e, n, r) {
            return 0 === n.segments.length && n.hasChildren()
              ? this.expandChildren(t, e, n).pipe(
                  W(function (t) {
                    return new Lh([], t);
                  })
                )
              : this.expandSegment(t, n, e, n.segments, r, !0);
          }),
          (t.prototype.expandChildren = function (t, e, n) {
            var r = this;
            return (function (n, i) {
              if (0 === Object.keys(n).length) return bf({});
              var o = [],
                s = [],
                a = {};
              return (
                Nh(n, function (n, i) {
                  var u,
                    l,
                    c = ((u = i),
                    (l = n),
                    r.expandSegmentGroup(t, e, l, u)).pipe(
                      W(function (t) {
                        return (a[i] = t);
                      })
                    );
                  'primary' === i ? o.push(c) : s.push(c);
                }),
                bf.apply(null, o.concat(s)).pipe(
                  Sf(),
                  Bp(),
                  W(function () {
                    return a;
                  })
                )
              );
            })(n.children);
          }),
          (t.prototype.expandSegment = function (t, e, n, r, i, o) {
            var s = this;
            return bf.apply(void 0, u(n)).pipe(
              W(function (a) {
                return s.expandSegmentAgainstRoute(t, e, n, a, r, i, o).pipe(
                  zp(function (t) {
                    if (t instanceof Id) return bf(null);
                    throw t;
                  })
                );
              }),
              Sf(),
              Kp(function (t) {
                return !!t;
              }),
              zp(function (t, n) {
                if (t instanceof Op || 'EmptyError' === t.name) {
                  if (s.noLeftoversInUrl(e, r, i)) return bf(new Lh([], {}));
                  throw new Id(e);
                }
                throw t;
              })
            );
          }),
          (t.prototype.noLeftoversInUrl = function (t, e, n) {
            return 0 === e.length && !t.children[n];
          }),
          (t.prototype.expandSegmentAgainstRoute = function (
            t,
            e,
            n,
            r,
            i,
            o,
            s
          ) {
            return Vd(r) !== o
              ? jd(e)
              : void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(t, e, r, i)
              : s && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o)
              : jd(e);
          }),
          (t.prototype.expandSegmentAgainstRouteUsingRedirect = function (
            t,
            e,
            n,
            r,
            i,
            o
          ) {
            return '**' === r.path
              ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(
                  t,
                  n,
                  r,
                  o
                )
              : this.expandRegularSegmentAgainstRouteUsingRedirect(
                  t,
                  e,
                  n,
                  r,
                  i,
                  o
                );
          }),
          (t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect =
            function (t, e, n, r) {
              var i = this,
                o = this.applyRedirectCommands([], n.redirectTo, {});
              return n.redirectTo.startsWith('/')
                ? Dd(o)
                : this.lineralizeSegments(n, o).pipe(
                    $(function (n) {
                      var o = new Lh(n, {});
                      return i.expandSegment(t, o, e, n, r, !1);
                    })
                  );
            }),
          (t.prototype.expandRegularSegmentAgainstRouteUsingRedirect =
            function (t, e, n, r, i, o) {
              var s = this,
                a = Md(e, r, i),
                u = a.consumedSegments,
                l = a.lastChild,
                c = a.positionalParamSegments;
              if (!a.matched) return jd(e);
              var f = this.applyRedirectCommands(u, r.redirectTo, c);
              return r.redirectTo.startsWith('/')
                ? Dd(f)
                : this.lineralizeSegments(r, f).pipe(
                    $(function (r) {
                      return s.expandSegment(
                        t,
                        e,
                        n,
                        r.concat(i.slice(l)),
                        o,
                        !1
                      );
                    })
                  );
            }),
          (t.prototype.matchSegmentAgainstRoute = function (t, e, n, r) {
            var i = this;
            if ('**' === n.path)
              return n.loadChildren
                ? this.configLoader.load(t.injector, n).pipe(
                    W(function (t) {
                      return (n._loadedConfig = t), new Lh(r, {});
                    })
                  )
                : bf(new Lh(r, {}));
            var a = Md(e, n, r),
              u = a.consumedSegments,
              l = a.lastChild;
            if (!a.matched) return jd(e);
            var c = r.slice(l);
            return this.getChildConfig(t, n, r).pipe(
              $(function (t) {
                var n = t.module,
                  r = t.routes,
                  a = (function (t, e, n, r) {
                    return n.length > 0 &&
                      (function (t, e, n) {
                        return n.some(function (n) {
                          return Hd(t, e, n) && 'primary' !== Vd(n);
                        });
                      })(t, n, r)
                      ? {
                          segmentGroup: Ud(
                            new Lh(
                              e,
                              (function (t, e) {
                                var n,
                                  r,
                                  i = {};
                                i.primary = e;
                                try {
                                  for (
                                    var o = s(t), a = o.next();
                                    !a.done;
                                    a = o.next()
                                  ) {
                                    var u = a.value;
                                    '' === u.path &&
                                      'primary' !== Vd(u) &&
                                      (i[Vd(u)] = new Lh([], {}));
                                  }
                                } catch (l) {
                                  n = { error: l };
                                } finally {
                                  try {
                                    a && !a.done && (r = o.return) && r.call(o);
                                  } finally {
                                    if (n) throw n.error;
                                  }
                                }
                                return i;
                              })(r, new Lh(n, t.children))
                            )
                          ),
                          slicedSegments: [],
                        }
                      : 0 === n.length &&
                        (function (t, e, n) {
                          return n.some(function (n) {
                            return Hd(t, e, n);
                          });
                        })(t, n, r)
                      ? {
                          segmentGroup: Ud(
                            new Lh(
                              t.segments,
                              (function (t, e, n, r) {
                                var i,
                                  a,
                                  u = {};
                                try {
                                  for (
                                    var l = s(n), c = l.next();
                                    !c.done;
                                    c = l.next()
                                  ) {
                                    var f = c.value;
                                    Hd(t, e, f) &&
                                      !r[Vd(f)] &&
                                      (u[Vd(f)] = new Lh([], {}));
                                  }
                                } catch (p) {
                                  i = { error: p };
                                } finally {
                                  try {
                                    c && !c.done && (a = l.return) && a.call(l);
                                  } finally {
                                    if (i) throw i.error;
                                  }
                                }
                                return o(o({}, r), u);
                              })(t, n, r, t.children)
                            )
                          ),
                          slicedSegments: n,
                        }
                      : { segmentGroup: t, slicedSegments: n };
                  })(e, u, c, r),
                  l = a.segmentGroup,
                  f = a.slicedSegments;
                return 0 === f.length && l.hasChildren()
                  ? i.expandChildren(n, r, l).pipe(
                      W(function (t) {
                        return new Lh(u, t);
                      })
                    )
                  : 0 === r.length && 0 === f.length
                  ? bf(new Lh(u, {}))
                  : i.expandSegment(n, l, r, f, 'primary', !0).pipe(
                      W(function (t) {
                        return new Lh(u.concat(t.segments), t.children);
                      })
                    );
              })
            );
          }),
          (t.prototype.getChildConfig = function (t, e, n) {
            var r = this;
            return e.children
              ? bf(new Ch(e.children, t))
              : e.loadChildren
              ? void 0 !== e._loadedConfig
                ? bf(e._loadedConfig)
                : (function (t, e, n) {
                    var r,
                      i = e.canLoad;
                    return i && 0 !== i.length
                      ? G(i)
                          .pipe(
                            W(function (r) {
                              var i,
                                o = t.get(r);
                              if (
                                (function (t) {
                                  return t && Rd(t.canLoad);
                                })(o)
                              )
                                i = o.canLoad(e, n);
                              else {
                                if (!Rd(o))
                                  throw new Error('Invalid CanLoad guard');
                                i = o(e, n);
                              }
                              return jh(i);
                            })
                          )
                          .pipe(
                            Sf(),
                            ((r = function (t) {
                              return !0 === t;
                            }),
                            function (t) {
                              return t.lift(new Zp(r, void 0, t));
                            })
                          )
                      : bf(!0);
                  })(t.injector, e, n).pipe(
                    $(function (n) {
                      return n
                        ? r.configLoader.load(t.injector, e).pipe(
                            W(function (t) {
                              return (e._loadedConfig = t), t;
                            })
                          )
                        : (function (t) {
                            return new k(function (e) {
                              return e.error(
                                Sh(
                                  'Cannot load children because the guard of the route "path: \'' +
                                    t.path +
                                    '\'" returned false'
                                )
                              );
                            });
                          })(e);
                    })
                  )
              : bf(new Ch([], t));
          }),
          (t.prototype.lineralizeSegments = function (t, e) {
            for (var n = [], r = e.root; ; ) {
              if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
                return bf(n);
              if (r.numberOfChildren > 1 || !r.children.primary)
                return Fd(t.redirectTo);
              r = r.children.primary;
            }
          }),
          (t.prototype.applyRedirectCommands = function (t, e, n) {
            return this.applyRedirectCreatreUrlTree(
              e,
              this.urlSerializer.parse(e),
              t,
              n
            );
          }),
          (t.prototype.applyRedirectCreatreUrlTree = function (t, e, n, r) {
            var i = this.createSegmentGroup(t, e.root, n, r);
            return new Fh(
              i,
              this.createQueryParams(e.queryParams, this.urlTree.queryParams),
              e.fragment
            );
          }),
          (t.prototype.createQueryParams = function (t, e) {
            var n = {};
            return (
              Nh(t, function (t, r) {
                if ('string' == typeof t && t.startsWith(':')) {
                  var i = t.substring(1);
                  n[r] = e[i];
                } else n[r] = t;
              }),
              n
            );
          }),
          (t.prototype.createSegmentGroup = function (t, e, n, r) {
            var i = this,
              o = this.createSegments(t, e.segments, n, r),
              s = {};
            return (
              Nh(e.children, function (e, o) {
                s[o] = i.createSegmentGroup(t, e, n, r);
              }),
              new Lh(o, s)
            );
          }),
          (t.prototype.createSegments = function (t, e, n, r) {
            var i = this;
            return e.map(function (e) {
              return e.path.startsWith(':')
                ? i.findPosParam(t, e, r)
                : i.findOrReturn(e, n);
            });
          }),
          (t.prototype.findPosParam = function (t, e, n) {
            var r = n[e.path.substring(1)];
            if (!r)
              throw new Error(
                "Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'."
              );
            return r;
          }),
          (t.prototype.findOrReturn = function (t, e) {
            var n,
              r,
              i = 0;
            try {
              for (var o = s(e), a = o.next(); !a.done; a = o.next()) {
                var u = a.value;
                if (u.path === t.path) return e.splice(i), u;
                i++;
              }
            } catch (l) {
              n = { error: l };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return t;
          }),
          t
        );
      })();
      function Md(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? {
                matched: !1,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              }
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                positionalParamSegments: {},
              };
        var r = (e.matcher || Eh)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams,
            }
          : {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      }
      function Ud(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          var e = t.children.primary;
          return new Lh(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Hd(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 !== n.redirectTo
        );
      }
      function Vd(t) {
        return t.outlet || 'primary';
      }
      var qd = (function () {
          return function (t) {
            (this.path = t), (this.route = this.path[this.path.length - 1]);
          };
        })(),
        Bd = (function () {
          return function (t, e) {
            (this.component = t), (this.route = e);
          };
        })();
      function zd(t, e, n) {
        var r = (function (t) {
          if (!t) return null;
          for (var e = t.parent; e; e = e.parent) {
            var n = e.routeConfig;
            if (n && n._loadedConfig) return n._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function Wd(t, e, n, r, i) {
        void 0 === i &&
          (i = { canDeactivateChecks: [], canActivateChecks: [] });
        var o = sd(e);
        return (
          t.children.forEach(function (t) {
            !(function (t, e, n, r, i) {
              void 0 === i &&
                (i = { canDeactivateChecks: [], canActivateChecks: [] });
              var o = t.value,
                s = e ? e.value : null,
                a = n ? n.getContext(t.value.outlet) : null;
              if (s && o.routeConfig === s.routeConfig) {
                var u = (function (t, e, n) {
                  if ('function' == typeof n) return n(t, e);
                  switch (n) {
                    case 'pathParamsChange':
                      return !Uh(t.url, e.url);
                    case 'pathParamsOrQueryParamsChange':
                      return (
                        !Uh(t.url, e.url) || !Ph(t.queryParams, e.queryParams)
                      );
                    case 'always':
                      return !0;
                    case 'paramsOrQueryParamsChange':
                      return !vd(t, e) || !Ph(t.queryParams, e.queryParams);
                    case 'paramsChange':
                    default:
                      return !vd(t, e);
                  }
                })(s, o, o.routeConfig.runGuardsAndResolvers);
                u
                  ? i.canActivateChecks.push(new qd(r))
                  : ((o.data = s.data), (o._resolvedData = s._resolvedData)),
                  Wd(t, e, o.component ? (a ? a.children : null) : n, r, i),
                  u &&
                    i.canDeactivateChecks.push(
                      new Bd((a && a.outlet && a.outlet.component) || null, s)
                    );
              } else
                s && Qd(e, a, i),
                  i.canActivateChecks.push(new qd(r)),
                  Wd(t, null, o.component ? (a ? a.children : null) : n, r, i);
            })(t, o[t.value.outlet], n, r.concat([t.value]), i),
              delete o[t.value.outlet];
          }),
          Nh(o, function (t, e) {
            return Qd(t, n.getContext(e), i);
          }),
          i
        );
      }
      function Qd(t, e, n) {
        var r = sd(t),
          i = t.value;
        Nh(r, function (t, r) {
          Qd(t, i.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new Bd(
              i.component && e && e.outlet && e.outlet.isActivated
                ? e.outlet.component
                : null,
              i
            )
          );
      }
      var Kd = Symbol('INITIAL_VALUE');
      function Zd() {
        return Cf(function (t) {
          return mf
            .apply(
              void 0,
              u(
                t.map(function (t) {
                  return t.pipe(
                    Lf(1),
                    (function () {
                      for (var t = [], e = 0; e < arguments.length; e++)
                        t[e] = arguments[e];
                      var n = t[t.length - 1];
                      return D(n)
                        ? (t.pop(),
                          function (e) {
                            return Ef(t, e, n);
                          })
                        : function (e) {
                            return Ef(t, e);
                          };
                    })(Kd)
                  );
                })
              )
            )
            .pipe(
              $p(function (t, e) {
                var n = !1;
                return e.reduce(function (t, r, i) {
                  if (t !== Kd) return t;
                  if ((r === Kd && (n = !0), !n)) {
                    if (!1 === r) return r;
                    if (i === e.length - 1 || Od(r)) return r;
                  }
                  return t;
                }, t);
              }, Kd),
              Rf(function (t) {
                return t !== Kd;
              }),
              W(function (t) {
                return Od(t) ? t : !0 === t;
              }),
              Lf(1)
            );
        });
      }
      function Gd(t, e) {
        return null !== t && e && e(new vh(t)), bf(!0);
      }
      function $d(t, e) {
        return null !== t && e && e(new dh(t)), bf(!0);
      }
      function Yd(t, e, n) {
        var r = e.routeConfig ? e.routeConfig.canActivate : null;
        return r && 0 !== r.length
          ? bf(
              r.map(function (r) {
                return Ip(function () {
                  var i,
                    o = zd(r, e, n);
                  if (
                    (function (t) {
                      return t && Rd(t.canActivate);
                    })(o)
                  )
                    i = jh(o.canActivate(e, t));
                  else {
                    if (!Rd(o)) throw new Error('Invalid CanActivate guard');
                    i = jh(o(e, t));
                  }
                  return i.pipe(Kp());
                });
              })
            ).pipe(Zd())
          : bf(!0);
      }
      function Jd(t, e, n) {
        var r = e[e.length - 1],
          i = e
            .slice(0, e.length - 1)
            .reverse()
            .map(function (t) {
              return (function (t) {
                var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t);
            })
            .filter(function (t) {
              return null !== t;
            })
            .map(function (e) {
              return Ip(function () {
                return bf(
                  e.guards.map(function (i) {
                    var o,
                      s = zd(i, e.node, n);
                    if (
                      (function (t) {
                        return t && Rd(t.canActivateChild);
                      })(s)
                    )
                      o = jh(s.canActivateChild(r, t));
                    else {
                      if (!Rd(s))
                        throw new Error('Invalid CanActivateChild guard');
                      o = jh(s(r, t));
                    }
                    return o.pipe(Kp());
                  })
                ).pipe(Zd());
              });
            });
        return bf(i).pipe(Zd());
      }
      var Xd = (function () {
          return function () {};
        })(),
        ty = (function () {
          function t(t, e, n, r, i, o) {
            (this.rootComponentType = t),
              (this.config = e),
              (this.urlTree = n),
              (this.url = r),
              (this.paramsInheritanceStrategy = i),
              (this.relativeLinkResolution = o);
          }
          return (
            (t.prototype.recognize = function () {
              try {
                var t = ry(
                    this.urlTree.root,
                    [],
                    [],
                    this.config,
                    this.relativeLinkResolution
                  ).segmentGroup,
                  e = this.processSegmentGroup(this.config, t, 'primary'),
                  n = new fd(
                    [],
                    Object.freeze({}),
                    Object.freeze(o({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    {},
                    'primary',
                    this.rootComponentType,
                    null,
                    this.urlTree.root,
                    -1,
                    {}
                  ),
                  r = new od(n, e),
                  i = new pd(this.url, r);
                return this.inheritParamsAndData(i._root), bf(i);
              } catch (s) {
                return new k(function (t) {
                  return t.error(s);
                });
              }
            }),
            (t.prototype.inheritParamsAndData = function (t) {
              var e = this,
                n = t.value,
                r = cd(n, this.paramsInheritanceStrategy);
              (n.params = Object.freeze(r.params)),
                (n.data = Object.freeze(r.data)),
                t.children.forEach(function (t) {
                  return e.inheritParamsAndData(t);
                });
            }),
            (t.prototype.processSegmentGroup = function (t, e, n) {
              return 0 === e.segments.length && e.hasChildren()
                ? this.processChildren(t, e)
                : this.processSegment(t, e, e.segments, n);
            }),
            (t.prototype.processChildren = function (t, e) {
              var n,
                r = this,
                i = Hh(e, function (e, n) {
                  return r.processSegmentGroup(t, e, n);
                });
              return (
                (n = {}),
                i.forEach(function (t) {
                  var e = n[t.value.outlet];
                  if (e) {
                    var r = e.url
                        .map(function (t) {
                          return t.toString();
                        })
                        .join('/'),
                      i = t.value.url
                        .map(function (t) {
                          return t.toString();
                        })
                        .join('/');
                    throw new Error(
                      "Two segments cannot have the same outlet name: '" +
                        r +
                        "' and '" +
                        i +
                        "'."
                    );
                  }
                  n[t.value.outlet] = t.value;
                }),
                (function (t) {
                  t.sort(function (t, e) {
                    return 'primary' === t.value.outlet
                      ? -1
                      : 'primary' === e.value.outlet
                      ? 1
                      : t.value.outlet.localeCompare(e.value.outlet);
                  });
                })(i),
                i
              );
            }),
            (t.prototype.processSegment = function (t, e, n, r) {
              var i, o;
              try {
                for (var a = s(t), u = a.next(); !u.done; u = a.next()) {
                  var l = u.value;
                  try {
                    return this.processSegmentAgainstRoute(l, e, n, r);
                  } catch (c) {
                    if (!(c instanceof Xd)) throw c;
                  }
                }
              } catch (f) {
                i = { error: f };
              } finally {
                try {
                  u && !u.done && (o = a.return) && o.call(a);
                } finally {
                  if (i) throw i.error;
                }
              }
              if (this.noLeftoversInUrl(e, n, r)) return [];
              throw new Xd();
            }),
            (t.prototype.noLeftoversInUrl = function (t, e, n) {
              return 0 === e.length && !t.children[n];
            }),
            (t.prototype.processSegmentAgainstRoute = function (t, e, n, r) {
              if (t.redirectTo) throw new Xd();
              if ((t.outlet || 'primary') !== r) throw new Xd();
              var i,
                s = [],
                a = [];
              if ('**' === t.path) {
                var u = n.length > 0 ? Ih(n).parameters : {};
                i = new fd(
                  n,
                  u,
                  Object.freeze(o({}, this.urlTree.queryParams)),
                  this.urlTree.fragment,
                  sy(t),
                  r,
                  t.component,
                  t,
                  ey(e),
                  ny(e) + n.length,
                  ay(t)
                );
              } else {
                var l = (function (t, e, n) {
                  if ('' === e.path) {
                    if (
                      'full' === e.pathMatch &&
                      (t.hasChildren() || n.length > 0)
                    )
                      throw new Xd();
                    return {
                      consumedSegments: [],
                      lastChild: 0,
                      parameters: {},
                    };
                  }
                  var r = (e.matcher || Eh)(n, t, e);
                  if (!r) throw new Xd();
                  var i = {};
                  Nh(r.posParams, function (t, e) {
                    i[e] = t.path;
                  });
                  var s =
                    r.consumed.length > 0
                      ? o(
                          o({}, i),
                          r.consumed[r.consumed.length - 1].parameters
                        )
                      : i;
                  return {
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    parameters: s,
                  };
                })(e, t, n);
                (s = l.consumedSegments),
                  (a = n.slice(l.lastChild)),
                  (i = new fd(
                    s,
                    l.parameters,
                    Object.freeze(o({}, this.urlTree.queryParams)),
                    this.urlTree.fragment,
                    sy(t),
                    r,
                    t.component,
                    t,
                    ey(e),
                    ny(e) + s.length,
                    ay(t)
                  ));
              }
              var c = (function (t) {
                  return t.children
                    ? t.children
                    : t.loadChildren
                    ? t._loadedConfig.routes
                    : [];
                })(t),
                f = ry(e, s, a, c, this.relativeLinkResolution),
                p = f.segmentGroup,
                h = f.slicedSegments;
              if (0 === h.length && p.hasChildren()) {
                var d = this.processChildren(c, p);
                return [new od(i, d)];
              }
              if (0 === c.length && 0 === h.length) return [new od(i, [])];
              var y = this.processSegment(c, p, h, 'primary');
              return [new od(i, y)];
            }),
            t
          );
        })();
      function ey(t) {
        for (var e = t; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function ny(t) {
        for (
          var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0;
          e._sourceSegment;

        )
          n += (e = e._sourceSegment)._segmentIndexShift
            ? e._segmentIndexShift
            : 0;
        return n - 1;
      }
      function ry(t, e, n, r, i) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some(function (n) {
              return iy(t, e, n) && 'primary' !== oy(n);
            });
          })(t, n, r)
        ) {
          var a = new Lh(
            e,
            (function (t, e, n, r) {
              var i,
                o,
                a = {};
              (a.primary = r),
                (r._sourceSegment = t),
                (r._segmentIndexShift = e.length);
              try {
                for (var u = s(n), l = u.next(); !l.done; l = u.next()) {
                  var c = l.value;
                  if ('' === c.path && 'primary' !== oy(c)) {
                    var f = new Lh([], {});
                    (f._sourceSegment = t),
                      (f._segmentIndexShift = e.length),
                      (a[oy(c)] = f);
                  }
                }
              } catch (p) {
                i = { error: p };
              } finally {
                try {
                  l && !l.done && (o = u.return) && o.call(u);
                } finally {
                  if (i) throw i.error;
                }
              }
              return a;
            })(t, e, r, new Lh(n, t.children))
          );
          return (
            (a._sourceSegment = t),
            (a._segmentIndexShift = e.length),
            { segmentGroup: a, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some(function (n) {
              return iy(t, e, n);
            });
          })(t, n, r)
        ) {
          var u = new Lh(
            t.segments,
            (function (t, e, n, r, i, a) {
              var u,
                l,
                c = {};
              try {
                for (var f = s(r), p = f.next(); !p.done; p = f.next()) {
                  var h = p.value;
                  if (iy(t, n, h) && !i[oy(h)]) {
                    var d = new Lh([], {});
                    (d._sourceSegment = t),
                      (d._segmentIndexShift =
                        'legacy' === a ? t.segments.length : e.length),
                      (c[oy(h)] = d);
                  }
                }
              } catch (y) {
                u = { error: y };
              } finally {
                try {
                  p && !p.done && (l = f.return) && l.call(f);
                } finally {
                  if (u) throw u.error;
                }
              }
              return o(o({}, i), c);
            })(t, e, n, r, t.children, i)
          );
          return (
            (u._sourceSegment = t),
            (u._segmentIndexShift = e.length),
            { segmentGroup: u, slicedSegments: n }
          );
        }
        var l = new Lh(t.segments, t.children);
        return (
          (l._sourceSegment = t),
          (l._segmentIndexShift = e.length),
          { segmentGroup: l, slicedSegments: n }
        );
      }
      function iy(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) &&
          '' === n.path &&
          void 0 === n.redirectTo
        );
      }
      function oy(t) {
        return t.outlet || 'primary';
      }
      function sy(t) {
        return t.data || {};
      }
      function ay(t) {
        return t.resolve || {};
      }
      function uy(t, e, n, r) {
        var i = zd(t, e, r);
        return jh(i.resolve ? i.resolve(e, n) : i(e, n));
      }
      function ly(t) {
        return function (e) {
          return e.pipe(
            Cf(function (e) {
              var n = t(e);
              return n
                ? G(n).pipe(
                    W(function () {
                      return e;
                    })
                  )
                : G([e]);
            })
          );
        };
      }
      var cy = (function () {
          return function () {};
        })(),
        fy = (function () {
          function t() {}
          return (
            (t.prototype.shouldDetach = function (t) {
              return !1;
            }),
            (t.prototype.store = function (t, e) {}),
            (t.prototype.shouldAttach = function (t) {
              return !1;
            }),
            (t.prototype.retrieve = function (t) {
              return null;
            }),
            (t.prototype.shouldReuseRoute = function (t, e) {
              return t.routeConfig === e.routeConfig;
            }),
            t
          );
        })(),
        py = new Wt('ROUTES'),
        hy = (function () {
          function t(t, e, n, r) {
            (this.loader = t),
              (this.compiler = e),
              (this.onLoadStartListener = n),
              (this.onLoadEndListener = r);
          }
          return (
            (t.prototype.load = function (t, e) {
              var n = this;
              return (
                this.onLoadStartListener && this.onLoadStartListener(e),
                this.loadModuleFactory(e.loadChildren).pipe(
                  W(function (r) {
                    n.onLoadEndListener && n.onLoadEndListener(e);
                    var i = r.create(t);
                    return new Ch(Oh(i.injector.get(py)).map(Ah), i);
                  })
                )
              );
            }),
            (t.prototype.loadModuleFactory = function (t) {
              var e = this;
              return 'string' == typeof t
                ? G(this.loader.load(t))
                : jh(t()).pipe(
                    $(function (t) {
                      return t instanceof oe
                        ? bf(t)
                        : G(e.compiler.compileModuleAsync(t));
                    })
                  );
            }),
            t
          );
        })(),
        dy = (function () {
          return function () {};
        })(),
        yy = (function () {
          function t() {}
          return (
            (t.prototype.shouldProcessUrl = function (t) {
              return !0;
            }),
            (t.prototype.extract = function (t) {
              return t;
            }),
            (t.prototype.merge = function (t, e) {
              return t;
            }),
            t
          );
        })();
      function vy(t) {
        throw t;
      }
      function my(t, e, n) {
        return e.parse('/');
      }
      function gy(t, e) {
        return bf(null);
      }
      var _y = (function () {
          function t(t, e, n, r, i, o, s, a) {
            var u = this;
            (this.rootComponentType = t),
              (this.urlSerializer = e),
              (this.rootContexts = n),
              (this.location = r),
              (this.config = a),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new N()),
              (this.errorHandler = vy),
              (this.malformedUriErrorHandler = my),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: gy,
                afterPreactivation: gy,
              }),
              (this.urlHandlingStrategy = new yy()),
              (this.routeReuseStrategy = new fy()),
              (this.onSameUrlNavigation = 'ignore'),
              (this.paramsInheritanceStrategy = 'emptyOnly'),
              (this.urlUpdateStrategy = 'deferred'),
              (this.relativeLinkResolution = 'legacy'),
              (this.ngModule = i.get(ie)),
              (this.console = i.get(ra));
            var l = i.get(ma);
            (this.isNgZoneEnabled = l instanceof ma),
              this.resetConfig(a),
              (this.currentUrlTree = new Fh(new Lh([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new hy(
                o,
                s,
                function (t) {
                  return u.triggerEvent(new ph(t));
                },
                function (t) {
                  return u.triggerEvent(new hh(t));
                }
              )),
              (this.routerState = ud(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new yf({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: 'imperative',
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          return (
            (t.prototype.setupNavigations = function (t) {
              var e = this,
                n = this.events;
              return t.pipe(
                Rf(function (t) {
                  return 0 !== t.id;
                }),
                W(function (t) {
                  return o(o({}, t), {
                    extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl),
                  });
                }),
                Cf(function (t) {
                  var r,
                    i,
                    a,
                    u,
                    l = !1,
                    c = !1;
                  return bf(t).pipe(
                    Hf(function (t) {
                      e.currentNavigation = {
                        id: t.id,
                        initialUrl: t.currentRawUrl,
                        extractedUrl: t.extractedUrl,
                        trigger: t.source,
                        extras: t.extras,
                        previousNavigation: e.lastSuccessfulNavigation
                          ? o(o({}, e.lastSuccessfulNavigation), {
                              previousNavigation: null,
                            })
                          : null,
                      };
                    }),
                    Cf(function (t) {
                      var r,
                        i,
                        s,
                        a,
                        u =
                          !e.navigated ||
                          t.extractedUrl.toString() !==
                            e.browserUrlTree.toString();
                      if (
                        ('reload' === e.onSameUrlNavigation || u) &&
                        e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                      )
                        return bf(t).pipe(
                          Cf(function (t) {
                            var r = e.transitions.getValue();
                            return (
                              n.next(
                                new rh(
                                  t.id,
                                  e.serializeUrl(t.extractedUrl),
                                  t.source,
                                  t.restoredState
                                )
                              ),
                              r !== e.transitions.getValue() ? Df : [t]
                            );
                          }),
                          Cf(function (t) {
                            return Promise.resolve(t);
                          }),
                          ((r = e.ngModule.injector),
                          (i = e.configLoader),
                          (s = e.urlSerializer),
                          (a = e.config),
                          function (t) {
                            return t.pipe(
                              Cf(function (t) {
                                return (function (t, e, n, r, i) {
                                  return new Ld(t, e, n, r, i).apply();
                                })(r, i, s, t.extractedUrl, a).pipe(
                                  W(function (e) {
                                    return o(o({}, t), {
                                      urlAfterRedirects: e,
                                    });
                                  })
                                );
                              })
                            );
                          }),
                          Hf(function (t) {
                            e.currentNavigation = o(
                              o({}, e.currentNavigation),
                              { finalUrl: t.urlAfterRedirects }
                            );
                          }),
                          (function (t, n, r, i, s) {
                            return function (r) {
                              return r.pipe(
                                $(function (r) {
                                  return (function (t, e, n, r, i, o) {
                                    return (
                                      void 0 === i && (i = 'emptyOnly'),
                                      void 0 === o && (o = 'legacy'),
                                      new ty(t, e, n, r, i, o).recognize()
                                    );
                                  })(
                                    t,
                                    n,
                                    r.urlAfterRedirects,
                                    ((a = r.urlAfterRedirects),
                                    e.serializeUrl(a)),
                                    i,
                                    s
                                  ).pipe(
                                    W(function (t) {
                                      return o(o({}, r), { targetSnapshot: t });
                                    })
                                  );
                                  var a;
                                })
                              );
                            };
                          })(
                            e.rootComponentType,
                            e.config,
                            0,
                            e.paramsInheritanceStrategy,
                            e.relativeLinkResolution
                          ),
                          Hf(function (t) {
                            'eager' === e.urlUpdateStrategy &&
                              (t.extras.skipLocationChange ||
                                e.setBrowserUrl(
                                  t.urlAfterRedirects,
                                  !!t.extras.replaceUrl,
                                  t.id,
                                  t.extras.state
                                ),
                              (e.browserUrlTree = t.urlAfterRedirects));
                          }),
                          Hf(function (t) {
                            var r = new ah(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            n.next(r);
                          })
                        );
                      if (
                        u &&
                        e.rawUrlTree &&
                        e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)
                      ) {
                        var l = t.extractedUrl,
                          c = t.source,
                          f = t.restoredState,
                          p = t.extras,
                          h = new rh(t.id, e.serializeUrl(l), c, f);
                        n.next(h);
                        var d = ud(l, e.rootComponentType).snapshot;
                        return bf(
                          o(o({}, t), {
                            targetSnapshot: d,
                            urlAfterRedirects: l,
                            extras: o(o({}, p), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (e.rawUrlTree = t.rawUrl),
                        (e.browserUrlTree = t.urlAfterRedirects),
                        t.resolve(null),
                        Df
                      );
                    }),
                    ly(function (t) {
                      var n = t.extras;
                      return e.hooks.beforePreactivation(t.targetSnapshot, {
                        navigationId: t.id,
                        appliedUrlTree: t.extractedUrl,
                        rawUrlTree: t.rawUrl,
                        skipLocationChange: !!n.skipLocationChange,
                        replaceUrl: !!n.replaceUrl,
                      });
                    }),
                    Hf(function (t) {
                      var n = new uh(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot
                      );
                      e.triggerEvent(n);
                    }),
                    W(function (t) {
                      return o(o({}, t), {
                        guards:
                          ((n = t.targetSnapshot),
                          (r = t.currentSnapshot),
                          (i = e.rootContexts),
                          (s = n._root),
                          Wd(s, r ? r._root : null, i, [s.value])),
                      });
                      var n, r, i, s;
                    }),
                    (function (t, e) {
                      return function (n) {
                        return n.pipe(
                          $(function (n) {
                            var r = n.targetSnapshot,
                              i = n.currentSnapshot,
                              s = n.guards,
                              a = s.canActivateChecks,
                              u = s.canDeactivateChecks;
                            return 0 === u.length && 0 === a.length
                              ? bf(o(o({}, n), { guardsResult: !0 }))
                              : (function (t, e, n, r) {
                                  return G(t).pipe(
                                    $(function (t) {
                                      return (function (t, e, n, r, i) {
                                        var o =
                                          e && e.routeConfig
                                            ? e.routeConfig.canDeactivate
                                            : null;
                                        return o && 0 !== o.length
                                          ? bf(
                                              o.map(function (o) {
                                                var s,
                                                  a = zd(o, e, i);
                                                if (
                                                  (function (t) {
                                                    return (
                                                      t && Rd(t.canDeactivate)
                                                    );
                                                  })(a)
                                                )
                                                  s = jh(
                                                    a.canDeactivate(t, e, n, r)
                                                  );
                                                else {
                                                  if (!Rd(a))
                                                    throw new Error(
                                                      'Invalid CanDeactivate guard'
                                                    );
                                                  s = jh(a(t, e, n, r));
                                                }
                                                return s.pipe(Kp());
                                              })
                                            ).pipe(Zd())
                                          : bf(!0);
                                      })(t.component, t.route, n, e, r);
                                    }),
                                    Kp(function (t) {
                                      return !0 !== t;
                                    }, !0)
                                  );
                                })(u, r, i, t).pipe(
                                  $(function (n) {
                                    return n && 'boolean' == typeof n
                                      ? (function (t, e, n, r) {
                                          return G(e).pipe(
                                            Xp(function (e) {
                                              return G([
                                                $d(e.route.parent, r),
                                                Gd(e.route, r),
                                                Jd(t, e.path, n),
                                                Yd(t, e.route, n),
                                              ]).pipe(
                                                Sf(),
                                                Kp(function (t) {
                                                  return !0 !== t;
                                                }, !0)
                                              );
                                            }),
                                            Kp(function (t) {
                                              return !0 !== t;
                                            }, !0)
                                          );
                                        })(r, a, t, e)
                                      : bf(n);
                                  }),
                                  W(function (t) {
                                    return o(o({}, n), { guardsResult: t });
                                  })
                                );
                          })
                        );
                      };
                    })(e.ngModule.injector, function (t) {
                      return e.triggerEvent(t);
                    }),
                    Hf(function (t) {
                      if (Od(t.guardsResult)) {
                        var n = Sh(
                          'Redirecting to "' +
                            e.serializeUrl(t.guardsResult) +
                            '"'
                        );
                        throw ((n.url = t.guardsResult), n);
                      }
                    }),
                    Hf(function (t) {
                      var n = new lh(
                        t.id,
                        e.serializeUrl(t.extractedUrl),
                        e.serializeUrl(t.urlAfterRedirects),
                        t.targetSnapshot,
                        !!t.guardsResult
                      );
                      e.triggerEvent(n);
                    }),
                    Rf(function (t) {
                      if (!t.guardsResult) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new oh(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          ''
                        );
                        return n.next(r), t.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    ly(function (t) {
                      if (t.guards.canActivateChecks.length)
                        return bf(t).pipe(
                          Hf(function (t) {
                            var n = new ch(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.triggerEvent(n);
                          }),
                          ((n = e.paramsInheritanceStrategy),
                          (r = e.ngModule.injector),
                          function (t) {
                            return t.pipe(
                              $(function (t) {
                                var e = t.targetSnapshot,
                                  i = t.guards.canActivateChecks;
                                return i.length
                                  ? G(i).pipe(
                                      Xp(function (t) {
                                        return (function (t, e, n, r) {
                                          return (function (t, e, n, r) {
                                            var i = Object.keys(t);
                                            if (0 === i.length) return bf({});
                                            if (1 === i.length) {
                                              var o = i[0];
                                              return uy(t[o], e, n, r).pipe(
                                                W(function (t) {
                                                  var e;
                                                  return ((e = {})[o] = t), e;
                                                })
                                              );
                                            }
                                            var s = {};
                                            return G(i)
                                              .pipe(
                                                $(function (i) {
                                                  return uy(t[i], e, n, r).pipe(
                                                    W(function (t) {
                                                      return (s[i] = t), t;
                                                    })
                                                  );
                                                })
                                              )
                                              .pipe(
                                                Bp(),
                                                W(function () {
                                                  return s;
                                                })
                                              );
                                          })(t._resolve, t, e, r).pipe(
                                            W(function (e) {
                                              return (
                                                (t._resolvedData = e),
                                                (t.data = o(
                                                  o({}, t.data),
                                                  cd(t, n).resolve
                                                )),
                                                null
                                              );
                                            })
                                          );
                                        })(t.route, e, n, r);
                                      }),
                                      (function (t, e) {
                                        return arguments.length >= 2
                                          ? function (n) {
                                              return T(
                                                $p(t, e),
                                                Np(1),
                                                Hp(e)
                                              )(n);
                                            }
                                          : function (e) {
                                              return T(
                                                $p(function (e, n, r) {
                                                  return t(e, n, r + 1);
                                                }),
                                                Np(1)
                                              )(e);
                                            };
                                      })(function (t, e) {
                                        return t;
                                      }),
                                      W(function (e) {
                                        return t;
                                      })
                                    )
                                  : bf(t);
                              })
                            );
                          }),
                          Hf(function (t) {
                            var n = new fh(
                              t.id,
                              e.serializeUrl(t.extractedUrl),
                              e.serializeUrl(t.urlAfterRedirects),
                              t.targetSnapshot
                            );
                            e.triggerEvent(n);
                          })
                        );
                      var n, r;
                    }),
                    ly(function (t) {
                      var n = t.extras;
                      return e.hooks.afterPreactivation(t.targetSnapshot, {
                        navigationId: t.id,
                        appliedUrlTree: t.extractedUrl,
                        rawUrlTree: t.rawUrl,
                        skipLocationChange: !!n.skipLocationChange,
                        replaceUrl: !!n.replaceUrl,
                      });
                    }),
                    W(function (t) {
                      var n,
                        r,
                        i,
                        a =
                          ((i = (function t(e, n, r) {
                            if (
                              r &&
                              e.shouldReuseRoute(n.value, r.value.snapshot)
                            ) {
                              (l = r.value)._futureSnapshot = n.value;
                              var i = (function (e, n, r) {
                                return n.children.map(function (n) {
                                  var i, o;
                                  try {
                                    for (
                                      var a = s(r.children), u = a.next();
                                      !u.done;
                                      u = a.next()
                                    ) {
                                      var l = u.value;
                                      if (
                                        e.shouldReuseRoute(
                                          l.value.snapshot,
                                          n.value
                                        )
                                      )
                                        return t(e, n, l);
                                    }
                                  } catch (c) {
                                    i = { error: c };
                                  } finally {
                                    try {
                                      u &&
                                        !u.done &&
                                        (o = a.return) &&
                                        o.call(a);
                                    } finally {
                                      if (i) throw i.error;
                                    }
                                  }
                                  return t(e, n);
                                });
                              })(e, n, r);
                              return new od(l, i);
                            }
                            var o = e.retrieve(n.value);
                            if (o) {
                              var a = o.route;
                              return (
                                (function t(e, n) {
                                  if (
                                    e.value.routeConfig !== n.value.routeConfig
                                  )
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                    );
                                  if (e.children.length !== n.children.length)
                                    throw new Error(
                                      'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                    );
                                  n.value._futureSnapshot = e.value;
                                  for (var r = 0; r < e.children.length; ++r)
                                    t(e.children[r], n.children[r]);
                                })(n, a),
                                a
                              );
                            }
                            var u,
                              l = new ld(
                                new yf((u = n.value).url),
                                new yf(u.params),
                                new yf(u.queryParams),
                                new yf(u.fragment),
                                new yf(u.data),
                                u.outlet,
                                u.component,
                                u
                              );
                            return (
                              (i = n.children.map(function (n) {
                                return t(e, n);
                              })),
                              new od(l, i)
                            );
                          })(
                            e.routeReuseStrategy,
                            (n = t.targetSnapshot)._root,
                            (r = t.currentRouterState) ? r._root : void 0
                          )),
                          new ad(i, n));
                      return o(o({}, t), { targetRouterState: a });
                    }),
                    Hf(function (t) {
                      (e.currentUrlTree = t.urlAfterRedirects),
                        (e.rawUrlTree = e.urlHandlingStrategy.merge(
                          e.currentUrlTree,
                          t.rawUrl
                        )),
                        (e.routerState = t.targetRouterState),
                        'deferred' === e.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            e.setBrowserUrl(
                              e.rawUrlTree,
                              !!t.extras.replaceUrl,
                              t.id,
                              t.extras.state
                            ),
                          (e.browserUrlTree = t.urlAfterRedirects));
                    }),
                    ((i = e.rootContexts),
                    (a = e.routeReuseStrategy),
                    (u = function (t) {
                      return e.triggerEvent(t);
                    }),
                    W(function (t) {
                      return (
                        new Ad(
                          a,
                          t.targetRouterState,
                          t.currentRouterState,
                          u
                        ).activate(i),
                        t
                      );
                    })),
                    Hf({
                      next: function () {
                        l = !0;
                      },
                      complete: function () {
                        l = !0;
                      },
                    }),
                    ((r = function () {
                      if (!l && !c) {
                        e.resetUrlToCurrentUrlTree();
                        var r = new oh(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          'Navigation ID ' +
                            t.id +
                            ' is not equal to the current navigation id ' +
                            e.navigationId
                        );
                        n.next(r), t.resolve(!1);
                      }
                      e.currentNavigation = null;
                    }),
                    function (t) {
                      return t.lift(new th(r));
                    }),
                    zp(function (r) {
                      if (((c = !0), (a = r) && a.ngNavigationCancelingError)) {
                        var i = Od(r.url);
                        i ||
                          ((e.navigated = !0),
                          e.resetStateAndUrl(
                            t.currentRouterState,
                            t.currentUrlTree,
                            t.rawUrl
                          ));
                        var o = new oh(
                          t.id,
                          e.serializeUrl(t.extractedUrl),
                          r.message
                        );
                        n.next(o),
                          i
                            ? setTimeout(function () {
                                var n = e.urlHandlingStrategy.merge(
                                  r.url,
                                  e.rawUrlTree
                                );
                                return e.scheduleNavigation(
                                  n,
                                  'imperative',
                                  null,
                                  {
                                    skipLocationChange:
                                      t.extras.skipLocationChange,
                                    replaceUrl: 'eager' === e.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: t.resolve,
                                    reject: t.reject,
                                    promise: t.promise,
                                  }
                                );
                              }, 0)
                            : t.resolve(!1);
                      } else {
                        e.resetStateAndUrl(
                          t.currentRouterState,
                          t.currentUrlTree,
                          t.rawUrl
                        );
                        var s = new sh(t.id, e.serializeUrl(t.extractedUrl), r);
                        n.next(s);
                        try {
                          t.resolve(e.errorHandler(r));
                        } catch (u) {
                          t.reject(u);
                        }
                      }
                      var a;
                      return Df;
                    })
                  );
                })
              );
            }),
            (t.prototype.resetRootComponentType = function (t) {
              (this.rootComponentType = t),
                (this.routerState.root.component = this.rootComponentType);
            }),
            (t.prototype.getTransition = function () {
              var t = this.transitions.value;
              return (t.urlAfterRedirects = this.browserUrlTree), t;
            }),
            (t.prototype.setTransition = function (t) {
              this.transitions.next(o(o({}, this.getTransition()), t));
            }),
            (t.prototype.initialNavigation = function () {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }),
            (t.prototype.setUpLocationChangeListener = function () {
              var t = this;
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe(function (
                  e
                ) {
                  var n = t.parseUrl(e.url),
                    r = 'popstate' === e.type ? 'popstate' : 'hashchange',
                    i = e.state && e.state.navigationId ? e.state : null;
                  setTimeout(function () {
                    t.scheduleNavigation(n, r, i, { replaceUrl: !0 });
                  }, 0);
                }));
            }),
            Object.defineProperty(t.prototype, 'url', {
              get: function () {
                return this.serializeUrl(this.currentUrlTree);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getCurrentNavigation = function () {
              return this.currentNavigation;
            }),
            (t.prototype.triggerEvent = function (t) {
              this.events.next(t);
            }),
            (t.prototype.resetConfig = function (t) {
              Th(t),
                (this.config = t.map(Ah)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.dispose();
            }),
            (t.prototype.dispose = function () {
              this.locationSubscription &&
                (this.locationSubscription.unsubscribe(),
                (this.locationSubscription = null));
            }),
            (t.prototype.createUrlTree = function (t, e) {
              void 0 === e && (e = {});
              var n = e.relativeTo,
                r = e.queryParams,
                i = e.fragment,
                s = e.preserveQueryParams,
                a = e.queryParamsHandling,
                l = e.preserveFragment;
              Yn() &&
                s &&
                console &&
                console.warn &&
                console.warn(
                  'preserveQueryParams is deprecated, use queryParamsHandling instead.'
                );
              var c = n || this.routerState.root,
                f = l ? this.currentUrlTree.fragment : i,
                p = null;
              if (a)
                switch (a) {
                  case 'merge':
                    p = o(o({}, this.currentUrlTree.queryParams), r);
                    break;
                  case 'preserve':
                    p = this.currentUrlTree.queryParams;
                    break;
                  default:
                    p = r || null;
                }
              else p = s ? this.currentUrlTree.queryParams : r || null;
              return (
                null !== p && (p = this.removeEmptyProps(p)),
                (function (t, e, n, r, i) {
                  if (0 === n.length) return gd(e.root, e.root, e, r, i);
                  var o = (function (t) {
                    if (
                      'string' == typeof t[0] &&
                      1 === t.length &&
                      '/' === t[0]
                    )
                      return new _d(!0, 0, t);
                    var e = 0,
                      n = !1,
                      r = t.reduce(function (t, r, i) {
                        if ('object' == typeof r && null != r) {
                          if (r.outlets) {
                            var o = {};
                            return (
                              Nh(r.outlets, function (t, e) {
                                o[e] = 'string' == typeof t ? t.split('/') : t;
                              }),
                              u(t, [{ outlets: o }])
                            );
                          }
                          if (r.segmentPath) return u(t, [r.segmentPath]);
                        }
                        return 'string' != typeof r
                          ? u(t, [r])
                          : 0 === i
                          ? (r.split('/').forEach(function (r, i) {
                              (0 == i && '.' === r) ||
                                (0 == i && '' === r
                                  ? (n = !0)
                                  : '..' === r
                                  ? e++
                                  : '' != r && t.push(r));
                            }),
                            t)
                          : u(t, [r]);
                      }, []);
                    return new _d(n, e, r);
                  })(n);
                  if (o.toRoot()) return gd(e.root, new Lh([], {}), e, r, i);
                  var s = (function (t, e, n) {
                      if (t.isAbsolute) return new wd(e.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex)
                        return new wd(n.snapshot._urlSegment, !0, 0);
                      var r = md(t.commands[0]) ? 0 : 1;
                      return (function (t, e, n) {
                        for (var r = t, i = e, o = n; o > i; ) {
                          if (((o -= i), !(r = r.parent)))
                            throw new Error("Invalid number of '../'");
                          i = r.segments.length;
                        }
                        return new wd(r, !1, i - o);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        t.numberOfDoubleDots
                      );
                    })(o, e, t),
                    a = s.processChildren
                      ? Ed(s.segmentGroup, s.index, o.commands)
                      : Sd(s.segmentGroup, s.index, o.commands);
                  return gd(s.segmentGroup, a, e, r, i);
                })(c, this.currentUrlTree, t, p, f)
              );
            }),
            (t.prototype.navigateByUrl = function (t, e) {
              void 0 === e && (e = { skipLocationChange: !1 }),
                Yn() &&
                  this.isNgZoneEnabled &&
                  !ma.isInAngularZone() &&
                  this.console.warn(
                    "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
                  );
              var n = Od(t) ? t : this.parseUrl(t),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, 'imperative', null, e);
            }),
            (t.prototype.navigate = function (t, e) {
              return (
                void 0 === e && (e = { skipLocationChange: !1 }),
                (function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (null == n)
                      throw new Error(
                        'The requested path contains ' +
                          n +
                          ' segment at index ' +
                          e
                      );
                  }
                })(t),
                this.navigateByUrl(this.createUrlTree(t, e), e)
              );
            }),
            (t.prototype.serializeUrl = function (t) {
              return this.urlSerializer.serialize(t);
            }),
            (t.prototype.parseUrl = function (t) {
              var e;
              try {
                e = this.urlSerializer.parse(t);
              } catch (n) {
                e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
              }
              return e;
            }),
            (t.prototype.isActive = function (t, e) {
              if (Od(t)) return Dh(this.currentUrlTree, t, e);
              var n = this.parseUrl(t);
              return Dh(this.currentUrlTree, n, e);
            }),
            (t.prototype.removeEmptyProps = function (t) {
              return Object.keys(t).reduce(function (e, n) {
                var r = t[n];
                return null != r && (e[n] = r), e;
              }, {});
            }),
            (t.prototype.processNavigations = function () {
              var t = this;
              this.navigations.subscribe(
                function (e) {
                  (t.navigated = !0),
                    (t.lastSuccessfulId = e.id),
                    t.events.next(
                      new ih(
                        e.id,
                        t.serializeUrl(e.extractedUrl),
                        t.serializeUrl(t.currentUrlTree)
                      )
                    ),
                    (t.lastSuccessfulNavigation = t.currentNavigation),
                    (t.currentNavigation = null),
                    e.resolve(!0);
                },
                function (e) {
                  t.console.warn('Unhandled Navigation Error: ');
                }
              );
            }),
            (t.prototype.scheduleNavigation = function (t, e, n, r, i) {
              var o,
                s,
                a,
                u = this.getTransition();
              if (
                u &&
                'imperative' !== e &&
                'imperative' === u.source &&
                u.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                u &&
                'hashchange' == e &&
                'popstate' === u.source &&
                u.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              if (
                u &&
                'popstate' == e &&
                'hashchange' === u.source &&
                u.rawUrl.toString() === t.toString()
              )
                return Promise.resolve(!0);
              i
                ? ((o = i.resolve), (s = i.reject), (a = i.promise))
                : (a = new Promise(function (t, e) {
                    (o = t), (s = e);
                  }));
              var l = ++this.navigationId;
              return (
                this.setTransition({
                  id: l,
                  source: e,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: t,
                  extras: r,
                  resolve: o,
                  reject: s,
                  promise: a,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                a.catch(function (t) {
                  return Promise.reject(t);
                })
              );
            }),
            (t.prototype.setBrowserUrl = function (t, e, n, r) {
              var i = this.urlSerializer.serialize(t);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(i) || e
                  ? this.location.replaceState(
                      i,
                      '',
                      o(o({}, r), { navigationId: n })
                    )
                  : this.location.go(i, '', o(o({}, r), { navigationId: n }));
            }),
            (t.prototype.resetStateAndUrl = function (t, e, n) {
              (this.routerState = t),
                (this.currentUrlTree = e),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }),
            (t.prototype.resetUrlToCurrentUrlTree = function () {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                '',
                { navigationId: this.lastSuccessfulId }
              );
            }),
            (t.ɵfac = function (t) {
              yo();
            }),
            (t.ɵdir = Te({ type: t })),
            t
          );
        })(),
        wy = (function () {
          return function () {
            (this.outlet = null),
              (this.route = null),
              (this.resolver = null),
              (this.children = new by()),
              (this.attachRef = null);
          };
        })(),
        by = (function () {
          function t() {
            this.contexts = new Map();
          }
          return (
            (t.prototype.onChildOutletCreated = function (t, e) {
              var n = this.getOrCreateContext(t);
              (n.outlet = e), this.contexts.set(t, n);
            }),
            (t.prototype.onChildOutletDestroyed = function (t) {
              var e = this.getContext(t);
              e && (e.outlet = null);
            }),
            (t.prototype.onOutletDeactivated = function () {
              var t = this.contexts;
              return (this.contexts = new Map()), t;
            }),
            (t.prototype.onOutletReAttached = function (t) {
              this.contexts = t;
            }),
            (t.prototype.getOrCreateContext = function (t) {
              var e = this.getContext(t);
              return e || ((e = new wy()), this.contexts.set(t, e)), e;
            }),
            (t.prototype.getContext = function (t) {
              return this.contexts.get(t) || null;
            }),
            t
          );
        })(),
        Sy = (function () {
          function t(t, e, n, r, i) {
            (this.parentContexts = t),
              (this.location = e),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new js()),
              (this.deactivateEvents = new js()),
              (this.name = r || 'primary'),
              t.onChildOutletCreated(this.name, this);
          }
          return (
            (t.prototype.ngOnDestroy = function () {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }),
            (t.prototype.ngOnInit = function () {
              if (!this.activated) {
                var t = this.parentContexts.getContext(this.name);
                t &&
                  t.route &&
                  (t.attachRef
                    ? this.attach(t.attachRef, t.route)
                    : this.activateWith(t.route, t.resolver || null));
              }
            }),
            Object.defineProperty(t.prototype, 'isActivated', {
              get: function () {
                return !!this.activated;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'component', {
              get: function () {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this.activated.instance;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activatedRoute', {
              get: function () {
                if (!this.activated) throw new Error('Outlet is not activated');
                return this._activatedRoute;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, 'activatedRouteData', {
              get: function () {
                return this._activatedRoute
                  ? this._activatedRoute.snapshot.data
                  : {};
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.detach = function () {
              if (!this.activated) throw new Error('Outlet is not activated');
              this.location.detach();
              var t = this.activated;
              return (this.activated = null), (this._activatedRoute = null), t;
            }),
            (t.prototype.attach = function (t, e) {
              (this.activated = t),
                (this._activatedRoute = e),
                this.location.insert(t.hostView);
            }),
            (t.prototype.deactivate = function () {
              if (this.activated) {
                var t = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(t);
              }
            }),
            (t.prototype.activateWith = function (t, e) {
              if (this.isActivated)
                throw new Error('Cannot activate an already activated outlet');
              this._activatedRoute = t;
              var n = (e = e || this.resolver).resolveComponentFactory(
                  t._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                i = new Ey(t, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                i
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(
                ho(by),
                ho(ms),
                ho(Wo),
                ('name',
                (function (t, e) {
                  var n = t.attrs;
                  if (n)
                    for (var r = n.length, i = 0; i < r; ) {
                      var o = n[i];
                      if (vn(o)) break;
                      if (0 === o) i += 2;
                      else if ('number' == typeof o)
                        for (i++; i < r && 'string' == typeof n[i]; ) i++;
                      else {
                        if ('name' === o) return n[i + 1];
                        i += 2;
                      }
                    }
                  return null;
                })(He())),
                ho(Ui)
              );
            }),
            (t.ɵdir = Te({
              type: t,
              selectors: [['router-outlet']],
              outputs: {
                activateEvents: 'activate',
                deactivateEvents: 'deactivate',
              },
              exportAs: ['outlet'],
            })),
            t
          );
        })(),
        Ey = (function () {
          function t(t, e, n) {
            (this.route = t), (this.childContexts = e), (this.parent = n);
          }
          return (
            (t.prototype.get = function (t, e) {
              return t === ld
                ? this.route
                : t === by
                ? this.childContexts
                : this.parent.get(t, e);
            }),
            t
          );
        })(),
        Cy = (function () {
          return function () {};
        })(),
        Ty = (function () {
          function t() {}
          return (
            (t.prototype.preload = function (t, e) {
              return e().pipe(
                zp(function () {
                  return bf(null);
                })
              );
            }),
            t
          );
        })(),
        xy = (function () {
          function t() {}
          return (
            (t.prototype.preload = function (t, e) {
              return bf(null);
            }),
            t
          );
        })(),
        ky = (function () {
          function t(t, e, n, r, i) {
            (this.router = t),
              (this.injector = r),
              (this.preloadingStrategy = i),
              (this.loader = new hy(
                e,
                n,
                function (e) {
                  return t.triggerEvent(new ph(e));
                },
                function (e) {
                  return t.triggerEvent(new hh(e));
                }
              ));
          }
          return (
            (t.prototype.setUpPreloading = function () {
              var t = this;
              this.subscription = this.router.events
                .pipe(
                  Rf(function (t) {
                    return t instanceof ih;
                  }),
                  Xp(function () {
                    return t.preload();
                  })
                )
                .subscribe(function () {});
            }),
            (t.prototype.preload = function () {
              var t = this.injector.get(ie);
              return this.processRoutes(t, this.router.config);
            }),
            (t.prototype.ngOnDestroy = function () {
              this.subscription.unsubscribe();
            }),
            (t.prototype.processRoutes = function (t, e) {
              var n,
                r,
                i = [];
              try {
                for (var o = s(e), a = o.next(); !a.done; a = o.next()) {
                  var u = a.value;
                  if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                    var l = u._loadedConfig;
                    i.push(this.processRoutes(l.module, l.routes));
                  } else
                    u.loadChildren && !u.canLoad
                      ? i.push(this.preloadConfig(t, u))
                      : u.children && i.push(this.processRoutes(t, u.children));
                }
              } catch (c) {
                n = { error: c };
              } finally {
                try {
                  a && !a.done && (r = o.return) && r.call(o);
                } finally {
                  if (n) throw n.error;
                }
              }
              return G(i).pipe(
                tt(),
                W(function (t) {})
              );
            }),
            (t.prototype.preloadConfig = function (t, e) {
              var n = this;
              return this.preloadingStrategy.preload(e, function () {
                return n.loader.load(t.injector, e).pipe(
                  $(function (t) {
                    return (
                      (e._loadedConfig = t), n.processRoutes(t.module, t.routes)
                    );
                  })
                );
              });
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(te(_y), te(Ma), te(ha), te(to), te(Cy));
            }),
            (t.ɵprov = mt({
              token: t,
              factory: function (e) {
                return t.ɵfac(e);
              },
            })),
            t
          );
        })(),
        Ay = (function () {
          function t(t, e, n) {
            void 0 === n && (n = {}),
              (this.router = t),
              (this.viewportScroller = e),
              (this.options = n),
              (this.lastId = 0),
              (this.lastSource = 'imperative'),
              (this.restoredId = 0),
              (this.store = {}),
              (n.scrollPositionRestoration =
                n.scrollPositionRestoration || 'disabled'),
              (n.anchorScrolling = n.anchorScrolling || 'disabled');
          }
          return (
            (t.prototype.init = function () {
              'disabled' !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration('manual'),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }),
            (t.prototype.createScrollEvents = function () {
              var t = this;
              return this.router.events.subscribe(function (e) {
                e instanceof rh
                  ? ((t.store[t.lastId] =
                      t.viewportScroller.getScrollPosition()),
                    (t.lastSource = e.navigationTrigger),
                    (t.restoredId = e.restoredState
                      ? e.restoredState.navigationId
                      : 0))
                  : e instanceof ih &&
                    ((t.lastId = e.id),
                    t.scheduleScrollEvent(
                      e,
                      t.router.parseUrl(e.urlAfterRedirects).fragment
                    ));
              });
            }),
            (t.prototype.consumeScrollEvents = function () {
              var t = this;
              return this.router.events.subscribe(function (e) {
                e instanceof gh &&
                  (e.position
                    ? 'top' === t.options.scrollPositionRestoration
                      ? t.viewportScroller.scrollToPosition([0, 0])
                      : 'enabled' === t.options.scrollPositionRestoration &&
                        t.viewportScroller.scrollToPosition(e.position)
                    : e.anchor && 'enabled' === t.options.anchorScrolling
                    ? t.viewportScroller.scrollToAnchor(e.anchor)
                    : 'disabled' !== t.options.scrollPositionRestoration &&
                      t.viewportScroller.scrollToPosition([0, 0]));
              });
            }),
            (t.prototype.scheduleScrollEvent = function (t, e) {
              this.router.triggerEvent(
                new gh(
                  t,
                  'popstate' === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  e
                )
              );
            }),
            (t.prototype.ngOnDestroy = function () {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }),
            (t.ɵfac = function (t) {
              yo();
            }),
            (t.ɵdir = Te({ type: t })),
            t
          );
        })(),
        Py = new Wt('ROUTER_CONFIGURATION'),
        Ry = new Wt('ROUTER_FORROOT_GUARD'),
        Oy = [
          cu,
          { provide: Vh, useClass: qh },
          {
            provide: _y,
            useFactory: function (t, e, n, r, i, o, s, a, u, l) {
              void 0 === a && (a = {});
              var c = new _y(null, t, e, n, r, i, o, Oh(s));
              if (
                (u && (c.urlHandlingStrategy = u),
                l && (c.routeReuseStrategy = l),
                a.errorHandler && (c.errorHandler = a.errorHandler),
                a.malformedUriErrorHandler &&
                  (c.malformedUriErrorHandler = a.malformedUriErrorHandler),
                a.enableTracing)
              ) {
                var f = Ka();
                c.events.subscribe(function (t) {
                  f.logGroup('Router Event: ' + t.constructor.name),
                    f.log(t.toString()),
                    f.log(t),
                    f.logGroupEnd();
                });
              }
              return (
                a.onSameUrlNavigation &&
                  (c.onSameUrlNavigation = a.onSameUrlNavigation),
                a.paramsInheritanceStrategy &&
                  (c.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
                a.urlUpdateStrategy &&
                  (c.urlUpdateStrategy = a.urlUpdateStrategy),
                a.relativeLinkResolution &&
                  (c.relativeLinkResolution = a.relativeLinkResolution),
                c
              );
            },
            deps: [
              Vh,
              by,
              cu,
              to,
              Ma,
              ha,
              py,
              Py,
              [dy, new pt()],
              [cy, new pt()],
            ],
          },
          by,
          {
            provide: ld,
            useFactory: function (t) {
              return t.routerState.root;
            },
            deps: [_y],
          },
          { provide: Ma, useClass: Va },
          ky,
          xy,
          Ty,
          { provide: Py, useValue: { enableTracing: !1 } },
        ];
      function Iy() {
        return new Oa('Router', _y);
      }
      var Ny = (function () {
        function t(t, e) {}
        var e;
        return (
          (e = t),
          (t.forRoot = function (t, n) {
            return {
              ngModule: e,
              providers: [
                Oy,
                Ly(t),
                {
                  provide: Ry,
                  useFactory: Fy,
                  deps: [[_y, new pt(), new dt()]],
                },
                { provide: Py, useValue: n || {} },
                {
                  provide: ou,
                  useFactory: Dy,
                  deps: [$a, [new ft(au), new pt()], Py],
                },
                { provide: Ay, useFactory: jy, deps: [_y, gu, Py] },
                {
                  provide: Cy,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : xy,
                },
                { provide: Oa, multi: !0, useFactory: Iy },
                [
                  My,
                  { provide: Gs, multi: !0, useFactory: Uy, deps: [My] },
                  { provide: Vy, useFactory: Hy, deps: [My] },
                  { provide: na, multi: !0, useExisting: Vy },
                ],
              ],
            };
          }),
          (t.forChild = function (t) {
            return { ngModule: e, providers: [Ly(t)] };
          }),
          (t.ɵmod = Ee({ type: t })),
          (t.ɵinj = gt({
            factory: function (e) {
              return new (e || t)(te(Ry, 8), te(_y, 8));
            },
          })),
          t
        );
      })();
      function jy(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new Ay(t, e, n);
      }
      function Dy(t, e, n) {
        return (
          void 0 === n && (n = {}), n.useHash ? new lu(t, e) : new uu(t, e)
        );
      }
      function Fy(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Ly(t) {
        return [
          { provide: eo, multi: !0, useValue: t },
          { provide: py, multi: !0, useValue: t },
        ];
      }
      var My = (function () {
        function t(t) {
          (this.injector = t),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new N());
        }
        return (
          (t.prototype.appInitializer = function () {
            var t = this;
            return this.injector
              .get(Ja, Promise.resolve(null))
              .then(function () {
                var e = null,
                  n = new Promise(function (t) {
                    return (e = t);
                  }),
                  r = t.injector.get(_y),
                  i = t.injector.get(Py);
                if (t.isLegacyDisabled(i) || t.isLegacyEnabled(i)) e(!0);
                else if ('disabled' === i.initialNavigation)
                  r.setUpLocationChangeListener(), e(!0);
                else {
                  if ('enabled' !== i.initialNavigation)
                    throw new Error(
                      "Invalid initialNavigation options: '" +
                        i.initialNavigation +
                        "'"
                    );
                  (r.hooks.afterPreactivation = function () {
                    return t.initNavigation
                      ? bf(null)
                      : ((t.initNavigation = !0),
                        e(!0),
                        t.resultOfPreactivationDone);
                  }),
                    r.initialNavigation();
                }
                return n;
              });
          }),
          (t.prototype.bootstrapListener = function (t) {
            var e = this.injector.get(Py),
              n = this.injector.get(ky),
              r = this.injector.get(Ay),
              i = this.injector.get(_y),
              o = this.injector.get(Fa);
            t === o.components[0] &&
              (this.isLegacyEnabled(e)
                ? i.initialNavigation()
                : this.isLegacyDisabled(e) && i.setUpLocationChangeListener(),
              n.setUpPreloading(),
              r.init(),
              i.resetRootComponentType(o.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }),
          (t.prototype.isLegacyEnabled = function (t) {
            return (
              'legacy_enabled' === t.initialNavigation ||
              !0 === t.initialNavigation ||
              void 0 === t.initialNavigation
            );
          }),
          (t.prototype.isLegacyDisabled = function (t) {
            return (
              'legacy_disabled' === t.initialNavigation ||
              !1 === t.initialNavigation
            );
          }),
          (t.ɵfac = function (e) {
            return new (e || t)(te(to));
          }),
          (t.ɵprov = mt({
            token: t,
            factory: function (e) {
              return t.ɵfac(e);
            },
          })),
          t
        );
      })();
      function Uy(t) {
        return t.appInitializer.bind(t);
      }
      function Hy(t) {
        return t.bootstrapListener.bind(t);
      }
      var Vy = new Wt('Router Initializer'),
        qy = n('HbP6'),
        By = [
          {
            path: 'index',
            component: (function () {
              function t() {
                this.data = new Date();
              }
              return (
                (t.prototype.ngOnInit = function () {
                  new qy('.rellax-header'),
                    document
                      .getElementsByTagName('nav')[0]
                      .classList.add('navbar-transparent'),
                    document
                      .getElementsByTagName('body')[0]
                      .classList.add('landing-page');
                }),
                (t.prototype.ngOnDestroy = function () {
                  document
                    .getElementsByTagName('nav')[0]
                    .classList.remove('navbar-transparent'),
                    document
                      .getElementsByTagName('body')[0]
                      .classList.remove('landing-page');
                }),
                (t.ɵfac = function (e) {
                  return new (e || t)();
                }),
                (t.ɵcmp = _e({
                  type: t,
                  selectors: [['app-landing']],
                  decls: 105,
                  vars: 0,
                  consts: [
                    [1, 'page-header'],
                    [
                      'data-rellax-speed',
                      '-7',
                      1,
                      'page-header-image',
                      'rellax-header',
                      2,
                      'background-image',
                      "url('./assets/img/bcol/bg-ibcol.jpg')",
                    ],
                    [1, 'filter'],
                    [1, 'content-center'],
                    [1, 'container'],
                    [1, 'motto'],
                    [1, 'title'],
                    [1, 'description'],
                    [
                      'href',
                      'https://forms.gle/h4jZNGSTU3UPbZBz9',
                      'target',
                      '_blank',
                    ],
                    ['type', 'button', 1, 'btn', 'btn-neutral', 'btn-round'],
                    [
                      'href',
                      'https://forms.gle/gY9C29FYvE3Bkg9c7',
                      'target',
                      '_blank',
                    ],
                    [1, 'wrapper'],
                    [1, 'section', 'text-center', 'landing-section'],
                    [1, 'row'],
                    [1, 'col-md-8', 'ml-auto', 'mr-auto'],
                    [1, 'col-md-6'],
                    [1, 'info'],
                    [1, 'info-title'],
                    ['id', 'faq-here', 1, 'container'],
                    [1, 'title-uppercase'],
                    [
                      'href',
                      'https://docs.google.com/document/d/115Y7oZ6AwjJz9x7Kc6s0uZKb5yj7dlwnw6_sFqUIl68/edit#',
                    ],
                    [
                      'href',
                      'https://www.facebook.com/philippineblockchainolympiad/?modal=admin_todo_tour',
                      'target',
                      '_blank',
                    ],
                    [1, 'section'],
                    [1, 'footer', 'section-dark'],
                    [1, 'footer-nav'],
                    ['href', ''],
                  ],
                  template: function (t, e) {
                    1 & t &&
                      (mo(0, 'div', 0),
                      _o(1, 'div', 1),
                      _o(2, 'div', 2),
                      mo(3, 'div', 3),
                      mo(4, 'div', 4),
                      mo(5, 'div', 5),
                      mo(6, 'h1', 6),
                      Ho(
                        7,
                        ' Make an impact, win prizes, and represent the Philippines at the International Blockchain Olympiad. '
                      ),
                      go(),
                      mo(8, 'h3', 7),
                      Ho(
                        9,
                        ' Deadline of project submissions on September 10, 2021 '
                      ),
                      go(),
                      _o(10, 'br'),
                      mo(11, 'a', 8),
                      mo(12, 'button', 9),
                      Ho(13, ' Register your team '),
                      go(),
                      go(),
                      mo(14, 'a', 10),
                      mo(15, 'button', 9),
                      Ho(16, ' Submit your project '),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(17, 'div', 11),
                      mo(18, 'div', 12),
                      mo(19, 'div', 4),
                      mo(20, 'div', 13),
                      mo(21, 'div', 14),
                      mo(22, 'h2', 6),
                      Ho(23, 'What is PHBCOL?'),
                      go(),
                      mo(24, 'h5'),
                      Ho(
                        25,
                        ' The Philippine Blockchain Olympiad is the national selection level where 8 teams will be selected to represent the Philippines in the International Blockchain Olympiad on July 2-4, 2021 '
                      ),
                      go(),
                      _o(26, 'br'),
                      go(),
                      go(),
                      _o(27, 'br'),
                      _o(28, 'br'),
                      mo(29, 'div', 13),
                      mo(30, 'div', 15),
                      mo(31, 'div', 16),
                      mo(32, 'div', 7),
                      mo(33, 'h4', 17),
                      Ho(34, 'IBCOL Prizes'),
                      go(),
                      mo(35, 'p'),
                      mo(36, 'b'),
                      Ho(37, 'Gold Medal - $10000'),
                      go(),
                      go(),
                      mo(38, 'p'),
                      mo(39, 'b'),
                      Ho(40, 'Silver Medal - $7500'),
                      go(),
                      go(),
                      mo(41, 'p'),
                      mo(42, 'b'),
                      Ho(43, 'Bronze Medal - $5000'),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(44, 'div', 15),
                      mo(45, 'div', 16),
                      mo(46, 'div', 7),
                      mo(47, 'h4', 17),
                      Ho(48, 'Submission requirements'),
                      go(),
                      mo(49, 'ul'),
                      mo(50, 'li'),
                      mo(51, 'p'),
                      Ho(52, ' White Paper(60%) '),
                      go(),
                      go(),
                      mo(53, 'li'),
                      mo(54, 'p'),
                      Ho(55, ' 2 Minute Pitch Video(40%) '),
                      go(),
                      go(),
                      go(),
                      mo(56, 'p'),
                      Ho(
                        57,
                        ' Selected representatives will be announced on June 22,2021 '
                      ),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(58, 'div', 18),
                      mo(59, 'h2', 19),
                      Ho(60, 'FAQ'),
                      go(),
                      mo(61, 'h3', 19),
                      Ho(62, 'Who may compete in PHBCOL 2021?'),
                      go(),
                      mo(63, 'p'),
                      mo(64, 'b'),
                      Ho(65, 'Individual Eligibility '),
                      go(),
                      Ho(
                        66,
                        '\u2014 Any current or recent student may register as a competitor. A current student is defined as a person of any age that is enrolled in a recognized academic institution. A recent student would have been a current student until 3 years ago (July 5th, 2017). '
                      ),
                      _o(67, 'br'),
                      mo(68, 'b'),
                      Ho(69, 'Team Eligibility'),
                      go(),
                      Ho(
                        70,
                        ' \u2014 Projects are submitted by teams of one to six eligible competitors.Teams may be composed of members from different academic institutions. Teams may also opt into having an advisor for their team. The advisor does not add to the count of the member limit. '
                      ),
                      go(),
                      mo(71, 'h3', 19),
                      Ho(72, ' Do we have to build a working prototype? '),
                      go(),
                      mo(73, 'p'),
                      Ho(
                        74,
                        ' While a prototype can be advantageous, it is not necessary. What is important is a good understanding of how blockchain can be used and what are the challenges of using it in a compliant and sustainable way. '
                      ),
                      go(),
                      mo(75, 'h3', 19),
                      Ho(76, ' What are the video guidelines? '),
                      go(),
                      mo(77, 'p'),
                      Ho(
                        78,
                        ' The 2 minute video should highlight what the problem is and showcase how your idea can solve that problem. The video must not be edited and can not contain any animations. The goal is to simulate a live pitching session with a judge. '
                      ),
                      go(),
                      mo(79, 'h3', 19),
                      Ho(80, ' What is the whitepaper format? '),
                      go(),
                      mo(81, 'p'),
                      Ho(
                        82,
                        ' There is no strict format to follow for PHBCOL 2021, participants are free to use any format they prefer. We have a '
                      ),
                      mo(83, 'a', 20),
                      Ho(84, 'whitepaper guide'),
                      go(),
                      Ho(
                        85,
                        " in order to assist you in your journey. Submit your team registration and we will invite you to the discord channel where we will be uploading the sample white paper of one of IBCOL 2019's winners! "
                      ),
                      go(),
                      mo(86, 'h3', 19),
                      Ho(87, ' I have other questions where can I ask them? '),
                      go(),
                      mo(88, 'p'),
                      Ho(89, ' You can contact our '),
                      mo(90, 'a', 21),
                      Ho(91, 'facebook page'),
                      go(),
                      Ho(
                        92,
                        " and we'll get back to you as soon as possible. "
                      ),
                      go(),
                      go(),
                      go(),
                      _o(93, 'div', 22),
                      mo(94, 'footer', 23),
                      mo(95, 'div', 4),
                      mo(96, 'div', 13),
                      mo(97, 'nav', 24),
                      mo(98, 'ul'),
                      mo(99, 'li'),
                      _o(100, 'a', 25),
                      go(),
                      mo(101, 'li'),
                      _o(102, 'a', 25),
                      go(),
                      mo(103, 'li'),
                      _o(104, 'a', 25),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go());
                  },
                  styles: [''],
                })),
                t
              );
            })(),
          },
          {
            path: 'faq',
            component: (function () {
              function t() {}
              return (
                (t.prototype.ngOnInit = function () {}),
                (t.ɵfac = function (e) {
                  return new (e || t)();
                }),
                (t.ɵcmp = _e({
                  type: t,
                  selectors: [['app-faq']],
                  decls: 104,
                  vars: 0,
                  consts: [
                    [1, 'container'],
                    [1, 'title-uppercase'],
                    [1, 'fa', 'fa-heart', 'heart'],
                    [1, 'text-center', 'creators'],
                    [1, 'row'],
                    [1, 'col-md-4'],
                    [1, 'card', 'card-profile', 'card-plain'],
                    [1, 'card-body'],
                    [1, 'card-avatar'],
                    ['href', '#avatar'],
                    [
                      'alt',
                      '...',
                      'src',
                      './assets/img/faces/ayo-ogunseinde-2.jpg',
                    ],
                    [1, 'card-title'],
                    [1, 'card-description', 'text-center'],
                    [1, 'card-footer', 'text-center'],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-linkedin',
                      'mr-1',
                    ],
                    [1, 'fa', 'fa-linkedin'],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-dribbble',
                      'mr-1',
                    ],
                    [1, 'fa', 'fa-dribbble'],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-instagram',
                    ],
                    [1, 'fa', 'fa-instagram'],
                    [
                      'alt',
                      '...',
                      'src',
                      './assets/img/faces/joe-gardner-2.jpg',
                    ],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-pinterest',
                    ],
                    [1, 'fa', 'fa-pinterest'],
                    [
                      'alt',
                      '...',
                      'src',
                      './assets/img/faces/clem-onojeghuo-2.jpg',
                    ],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-youtube',
                      'mr-1',
                    ],
                    [1, 'fa', 'fa-youtube'],
                    [
                      'href',
                      'javascript:void(0)',
                      1,
                      'btn',
                      'btn-just-icon',
                      'btn-twitter',
                      'mr-1',
                    ],
                    [1, 'fa', 'fa-twitter'],
                    [1, 'more-info'],
                    [1, 'row', 'coloured-cards'],
                    [1, 'col-md-4', 'col-sm-6'],
                    [1, 'card-big-shadow'],
                    [
                      'data-background',
                      'color',
                      'data-color',
                      'blue',
                      'data-radius',
                      'none',
                      1,
                      'card',
                      'card-just-text',
                    ],
                    [1, 'card-category'],
                    ['href', 'javascript:void(0)'],
                    [1, 'card-description'],
                    [
                      'data-background',
                      'color',
                      'data-color',
                      'green',
                      'data-radius',
                      'none',
                      1,
                      'card',
                      'card-just-text',
                    ],
                    [
                      'data-background',
                      'color',
                      'data-color',
                      'yellow',
                      'data-radius',
                      'none',
                      1,
                      'card',
                      'card-just-text',
                    ],
                  ],
                  template: function (t, e) {
                    1 & t &&
                      (_o(0, 'div'),
                      mo(1, 'div', 0),
                      mo(2, 'h3', 1),
                      Ho(3, 'We build great products.'),
                      go(),
                      mo(4, 'p'),
                      Ho(
                        5,
                        ' Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. '
                      ),
                      go(),
                      mo(6, 'p'),
                      Ho(
                        7,
                        ' Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions. '
                      ),
                      go(),
                      mo(8, 'h3', 1),
                      Ho(9, ' We '),
                      _o(10, 'i', 2),
                      Ho(11, '\xa0 what we do. '),
                      go(),
                      mo(12, 'p'),
                      Ho(
                        13,
                        ' Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service. '
                      ),
                      go(),
                      mo(14, 'h2', 3),
                      Ho(15, 'Creators'),
                      go(),
                      mo(16, 'div', 4),
                      mo(17, 'div', 5),
                      mo(18, 'div', 6),
                      mo(19, 'div', 7),
                      mo(20, 'div', 8),
                      mo(21, 'a', 9),
                      _o(22, 'img', 10),
                      mo(23, 'h4', 11),
                      Ho(24, 'Eric Thomson'),
                      go(),
                      go(),
                      go(),
                      mo(25, 'p', 12),
                      Ho(
                        26,
                        ' A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes orchestra to play it. '
                      ),
                      go(),
                      go(),
                      mo(27, 'div', 13),
                      mo(28, 'a', 14),
                      _o(29, 'i', 15),
                      go(),
                      mo(30, 'a', 16),
                      _o(31, 'i', 17),
                      go(),
                      mo(32, 'a', 18),
                      _o(33, 'i', 19),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(34, 'div', 5),
                      mo(35, 'div', 6),
                      mo(36, 'div', 7),
                      mo(37, 'div', 8),
                      mo(38, 'a', 9),
                      _o(39, 'img', 20),
                      mo(40, 'h4', 11),
                      Ho(41, 'Sophia West'),
                      go(),
                      go(),
                      go(),
                      mo(42, 'p', 12),
                      Ho(
                        43,
                        ' The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn\u2019t golden, it\u2019s deadly. '
                      ),
                      go(),
                      go(),
                      mo(44, 'div', 13),
                      mo(45, 'a', 14),
                      _o(46, 'i', 15),
                      go(),
                      mo(47, 'a', 16),
                      _o(48, 'i', 17),
                      go(),
                      mo(49, 'a', 21),
                      _o(50, 'i', 22),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(51, 'div', 5),
                      mo(52, 'div', 6),
                      mo(53, 'div', 7),
                      mo(54, 'div', 8),
                      mo(55, 'a', 9),
                      _o(56, 'img', 23),
                      mo(57, 'h4', 11),
                      Ho(58, 'Lucas Andrew'),
                      go(),
                      go(),
                      go(),
                      mo(59, 'p', 12),
                      Ho(
                        60,
                        ' Great teams do not hold back with one another. They are unafraid to air their dirty laundry. They admit their mistakes, their weaknesses and their concerns without fear of reprisal. '
                      ),
                      go(),
                      go(),
                      mo(61, 'div', 13),
                      mo(62, 'a', 24),
                      _o(63, 'i', 25),
                      go(),
                      mo(64, 'a', 26),
                      _o(65, 'i', 27),
                      go(),
                      mo(66, 'a', 18),
                      _o(67, 'i', 19),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(68, 'h3', 28),
                      Ho(69, 'Need more information?'),
                      go(),
                      mo(70, 'div', 29),
                      mo(71, 'div', 30),
                      mo(72, 'div', 31),
                      mo(73, 'div', 32),
                      mo(74, 'div', 7),
                      mo(75, 'h6', 33),
                      Ho(76, 'Best cards'),
                      go(),
                      mo(77, 'h4', 11),
                      mo(78, 'a', 34),
                      Ho(79, 'Blue Card'),
                      go(),
                      go(),
                      mo(80, 'p', 35),
                      Ho(
                        81,
                        " What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. "
                      ),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(82, 'div', 30),
                      mo(83, 'div', 31),
                      mo(84, 'div', 36),
                      mo(85, 'div', 7),
                      mo(86, 'h6', 33),
                      Ho(87, 'Best cards'),
                      go(),
                      mo(88, 'h4', 11),
                      mo(89, 'a', 34),
                      Ho(90, 'Green Card'),
                      go(),
                      go(),
                      mo(91, 'p', 35),
                      Ho(
                        92,
                        " What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. "
                      ),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      mo(93, 'div', 30),
                      mo(94, 'div', 31),
                      mo(95, 'div', 37),
                      mo(96, 'div', 7),
                      mo(97, 'h6', 33),
                      Ho(98, 'Best cards'),
                      go(),
                      mo(99, 'h4', 11),
                      mo(100, 'a', 34),
                      Ho(101, 'Yellow Card'),
                      go(),
                      go(),
                      mo(102, 'p', 35),
                      Ho(
                        103,
                        " What all of these have in common is that they're pulling information out of the app or the service and making it relevant to the moment. "
                      ),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go(),
                      go());
                  },
                  styles: [''],
                })),
                t
              );
            })(),
          },
          { path: '', redirectTo: 'index', pathMatch: 'full' },
        ],
        zy = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              imports: [[mu, Qu, Ny.forRoot(By, { useHash: !0 })]],
            })),
            t
          );
        })();
      k.prototype.filter = function (t, e) {
        return Rf(t, e)(this);
      };
      var Wy = (function () {
          function t(t, e) {
            (this.location = t), (this.element = e), (this.sidebarVisible = !1);
          }
          return (
            (t.prototype.ngOnInit = function () {
              this.toggleButton =
                this.element.nativeElement.getElementsByClassName(
                  'navbar-toggler'
                )[0];
            }),
            (t.prototype.sidebarOpen = function () {
              var t = this.toggleButton,
                e = document.getElementsByTagName('html')[0];
              setTimeout(function () {
                t.classList.add('toggled');
              }, 500),
                e.classList.add('nav-open'),
                (this.sidebarVisible = !0);
            }),
            (t.prototype.sidebarClose = function () {
              var t = document.getElementsByTagName('html')[0];
              this.toggleButton.classList.remove('toggled'),
                (this.sidebarVisible = !1),
                t.classList.remove('nav-open');
            }),
            (t.prototype.sidebarToggle = function () {
              !1 === this.sidebarVisible
                ? this.sidebarOpen()
                : this.sidebarClose();
            }),
            (t.prototype.isHome = function () {
              return (
                '/home' ===
                this.location.prepareExternalUrl(this.location.path())
              );
            }),
            (t.prototype.isDocumentation = function () {
              return (
                '/documentation' ===
                this.location.prepareExternalUrl(this.location.path())
              );
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(ho(cu), ho(Qo));
            }),
            (t.ɵcmp = _e({
              type: t,
              selectors: [['app-navbar']],
              decls: 20,
              vars: 0,
              consts: [
                [
                  'color-on-scroll',
                  '500',
                  1,
                  'navbar',
                  'navbar-expand-lg',
                  'fixed-top',
                ],
                [1, 'container'],
                [1, 'navbar-translate'],
                [1, 'navbar-header'],
                [
                  'src',
                  './assets/img/bcol/ph-logo.png',
                  2,
                  'width',
                  '50%',
                  'height',
                  '50%',
                ],
                [
                  'type',
                  'button',
                  'data-toggle',
                  'collapse',
                  'data-target',
                  '#navbarToggler',
                  'aria-controls',
                  'navbarTogglerDemo02',
                  'aria-expanded',
                  'false',
                  'aria-label',
                  'Toggle navigation',
                  1,
                  'navbar-toggler',
                  'navbar-burger',
                  3,
                  'click',
                ],
                [1, 'navbar-toggler-bar', 'bar1'],
                [1, 'navbar-toggler-bar', 'bar2'],
                [1, 'navbar-toggler-bar', 'bar3'],
                [1, 'collapse', 'navbar-collapse'],
                [1, 'navbar-nav', 'ml-auto'],
                [1, 'nav-item'],
                ['href', 'https://www.ibcol.org/', 'target', '_blank'],
                [1, 'nav-link'],
                ['href', '#faq-here'],
              ],
              template: function (t, e) {
                1 & t &&
                  (mo(0, 'nav', 0),
                  mo(1, 'div', 1),
                  mo(2, 'div', 2),
                  mo(3, 'div', 3),
                  mo(4, 'div'),
                  _o(5, 'img', 4),
                  go(),
                  go(),
                  mo(6, 'button', 5),
                  bo('click', function () {
                    return e.sidebarToggle();
                  }),
                  _o(7, 'span', 6),
                  _o(8, 'span', 7),
                  _o(9, 'span', 8),
                  go(),
                  go(),
                  mo(10, 'div', 9),
                  mo(11, 'ul', 10),
                  mo(12, 'div', 11),
                  mo(13, 'a', 12),
                  mo(14, 'div', 13),
                  Ho(15, ' IBCOL '),
                  go(),
                  go(),
                  go(),
                  mo(16, 'div', 11),
                  mo(17, 'a', 14),
                  mo(18, 'div', 13),
                  Ho(19, ' FAQ '),
                  go(),
                  go(),
                  go(),
                  go(),
                  go(),
                  go(),
                  go());
              },
              directives: [ip],
              styles: [''],
            })),
            t
          );
        })(),
        Qy = 0,
        Ky = (function () {
          function t(t, e, n, r) {
            (this.renderer = t),
              (this.router = e),
              (this.element = n),
              (this.location = r),
              (this.yScrollStack = []);
          }
          return (
            (t.prototype.hasScrolled = function () {
              var t = window.pageYOffset;
              if (!(Math.abs(Qy - t) <= 5)) {
                var e = document.getElementsByTagName('nav')[0];
                t > Qy && t > 0
                  ? e.classList.contains('nav-down') &&
                    (e.classList.remove('nav-down'), e.classList.add('nav-up'))
                  : t + window.innerHeight < document.body.scrollHeight &&
                    e.classList.contains('nav-up') &&
                    (e.classList.remove('nav-up'), e.classList.add('nav-down')),
                  (Qy = t);
              }
            }),
            (t.prototype.ngOnInit = function () {
              var t = this,
                e = this.element.nativeElement.children[0].children[0];
              '/sections' !== this.location.path() &&
                (this.location.subscribe(function (e) {
                  t.lastPoppedUrl = e.url;
                }),
                this.router.events.subscribe(function (e) {
                  e instanceof rh
                    ? e.url != t.lastPoppedUrl &&
                      t.yScrollStack.push(window.scrollY)
                    : e instanceof ih &&
                      (e.url == t.lastPoppedUrl
                        ? ((t.lastPoppedUrl = void 0),
                          window.scrollTo(0, t.yScrollStack.pop()))
                        : window.scrollTo(0, 0));
                })),
                (this._router = this.router.events
                  .filter(function (t) {
                    return t instanceof ih;
                  })
                  .subscribe(function (n) {
                    t.navbar.sidebarClose(),
                      t.renderer.listen('window', 'scroll', function (n) {
                        var r = window.scrollY,
                          i = t.location.path();
                        if ('/sections' !== (i = i.split('#')[0])) {
                          var o = t.location.path();
                          (o = o.split('/')[2]),
                            r > 150 || window.pageYOffset > 150
                              ? e.classList.remove('navbar-transparent')
                              : 'addproduct' !== o &&
                                'blogposts' !== o &&
                                'discover' !== o &&
                                'contactus' !== o &&
                                'login' !== o &&
                                'register' !== o &&
                                'search' !== o &&
                                '/nucleoicons' !== t.location.path() &&
                                e.classList.add('navbar-transparent');
                        }
                      });
                  }));
              var n = window.navigator.userAgent;
              if (n.indexOf('Trident/') > 0)
                var r = n.indexOf('rv:'),
                  i = parseInt(n.substring(r + 3, n.indexOf('.', r)), 10);
              i &&
                document
                  .getElementsByTagName('body')[0]
                  .classList.add('ie-background'),
                this.hasScrolled();
            }),
            (t.prototype.removeFooter = function () {
              var t = this.location.prepareExternalUrl(this.location.path());
              return 'signup' !== (t = t.slice(1)) && 'nucleoicons' !== t;
            }),
            (t.ɵfac = function (e) {
              return new (e || t)(ho($o), ho(_y), ho(Qo), ho(cu));
            }),
            (t.ɵcmp = _e({
              type: t,
              selectors: [['app-root']],
              viewQuery: function (t, e) {
                var n, r;
                1 & t && ((r = Wy), !0, Qs(Ue(), Me(), r, !0, void 0, !1)),
                  2 & t && Ws((n = Ks())) && (e.navbar = n.first);
              },
              hostBindings: function (t, e) {
                1 & t &&
                  bo(
                    'scroll',
                    function (t) {
                      return e.hasScrolled(t);
                    },
                    !1,
                    xn
                  );
              },
              decls: 2,
              vars: 0,
              template: function (t, e) {
                1 & t && (_o(0, 'app-navbar'), _o(1, 'router-outlet'));
              },
              directives: [Wy, Sy],
              styles: [''],
            })),
            t
          );
        })(),
        Zy = (function () {
          function t() {}
          return (
            (t.ɵmod = Ee({ type: t, bootstrap: [Ky] })),
            (t.ɵinj = gt({
              factory: function (e) {
                return new (e || t)();
              },
              providers: [],
              imports: [[ff, Pp, df, Ny, zy]],
            })),
            t
          );
        })();
      (function () {
        if ($n)
          throw new Error('Cannot enable prod mode after platform setup.');
        Gn = !1;
      })(),
        zu().bootstrapModule(Zy);
    },
  },
  [[0, 0]],
]);
