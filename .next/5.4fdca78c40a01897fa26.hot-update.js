webpackHotUpdate(5,{

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(54);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(30);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(31);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(55);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(59);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(553);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(27);

var _react2 = _interopRequireDefault(_react);

var _FacebookLoginButton = __webpack_require__(563);

var _FacebookLoginButton2 = _interopRequireDefault(_FacebookLoginButton);

var _LoggedInSection = __webpack_require__(564);

var _LoggedInSection2 = _interopRequireDefault(_LoggedInSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewbarnden/nodesites/next-authenticate/components/Header.js';


var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
    }

    (0, _createClass3.default)(Header, [{
        key: 'render',
        value: function render() {

            var loggedInSection = null;
            loggedInSection = true ? _react2.default.createElement(_LoggedInSection2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            }) : _react2.default.createElement(_FacebookLoginButton2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            });

            return _react2.default.createElement('div', { id: 'header', 'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement('div', { className: 'inner', 'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, _react2.default.createElement('span', { id: 'logo', 'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }), _react2.default.createElement('div', { id: 'logoCell', 'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement('h1', {
                'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, 'Authenticate'), _react2.default.createElement('span', {
                'data-jsx': 2353017148,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, 'Facebook login with an api')), loggedInSection), _react2.default.createElement(_style2.default, {
                styleId: 2353017148,
                css: '#header[data-jsx="2353017148"]{width:100%;height:150px;border-bottom:1px solid #ccc;background-color:#fff;font-family:sans-serif}#header[data-jsx="2353017148"] .inner[data-jsx="2353017148"]{max-width:900px;margin:0 auto}#header[data-jsx="2353017148"] .inner[data-jsx="2353017148"] span#logo[data-jsx="2353017148"]{width:36px;height:45px;float:left;clear:left;background:url("/static/lock.gif") no-repeat 0 0;background-size:36px 45px;margin:47px 15px 0 0}#header[data-jsx="2353017148"] .facebookButton[data-jsx="2353017148"]{float:right;margin:48px 0px 0 0}#header[data-jsx="2353017148"] #logoCell[data-jsx="2353017148"]{width:300px;float:left;margin-top:33px}#header[data-jsx="2353017148"] #logoCell[data-jsx="2353017148"] h1[data-jsx="2353017148"]{font-size:32px;margin:10px 0 0 0;color:#333;font-weight:normal}#header[data-jsx="2353017148"] #logoCell[data-jsx="2353017148"] span[data-jsx="2353017148"]{font-size:15px;color:#a9a9a9;float:left;margin-top:-2px}@media only screen and (max-width:935px){#header[data-jsx="2353017148"] .inner[data-jsx="2353017148"]{padding:0 25px}#header[data-jsx="2353017148"] #logoCell[data-jsx="2353017148"]{float:none;margin:0 auto;margin-top:10px;display:inline-block;clear:both}#header[data-jsx="2353017148"] .inner[data-jsx="2353017148"] span#logo[data-jsx="2353017148"]{display:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdCd0IsQUFHK0IsQUFRSyxBQUlMLEFBV0MsQUFLQSxBQU1JLEFBT0EsQUFRRyxBQUlILEFBT0UsV0EzREosQUFZRixBQXlDTyxDQTlCRSxBQUtWLENBZ0NWLEVBMUJrQixBQU9KLEFBUWQsQ0F6Q2EsT0FLSCxBQWdCSyxDQTVCYSxDQXFEVCxJQVpULENBakNkLEVBZUEsQ0FXZSxDQXJCRCxLQWdCZCxDQWFtQixDQVlVLEdBbkJQLENBckI4QixRQWIzQixHQTBDekIsTUFZbUIsQ0FuQm5CLFVBb0JJLEVBdER1QixtQkFhRyxJQVo5QixzQkFheUIscUJBQ3pCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24nXG5pbXBvcnQgTG9nZ2VkSW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nZ2VkSW5TZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgbG9nZ2VkSW5TZWN0aW9uID0gbnVsbDtcbiAgICAgICAgbG9nZ2VkSW5TZWN0aW9uID0gdHJ1ZSA/IDxMb2dnZWRJblNlY3Rpb24gLz4gOiA8RmFjZWJvb2tMb2dpbkJ1dHRvbiAvPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsb2dvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvQ2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QXV0aGVudGljYXRlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RmFjZWJvb2sgbG9naW4gd2l0aCBhbiBhcGk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2xvZ2dlZEluU2VjdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNoZWFkZXIgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjaGVhZGVyIC5pbm5lciBzcGFuI2xvZ28ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp1cmwoXCIvc3RhdGljL2xvY2suZ2lmXCIpIG5vLXJlcGVhdCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQ3cHggMTVweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAjaGVhZGVyIC5mYWNlYm9va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQ4cHggMHB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjaGVhZGVyICNsb2dvQ2VsbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMzcHg7IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNoZWFkZXIgI2xvZ29DZWxsIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI2hlYWRlciAjbG9nb0NlbGwgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhOWE5YTk7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICNoZWFkZXIgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAjaGVhZGVyICNsb2dvQ2VsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2hlYWRlciAuaW5uZXIgc3BhbiNsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Header.js */'
            }));
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkZhY2Vib29rTG9naW5CdXR0b24iLCJMb2dnZWRJblNlY3Rpb24iLCJIZWFkZXIiLCJwcm9wcyIsImxvZ2dlZEluU2VjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztJLEFBRWM7b0NBRWpCOztvQkFBQSxBQUFhLE9BQU87NENBQUE7O3FJQUFBLEFBQ1osQUFDUDs7Ozs7aUNBRU8sQUFFSjs7Z0JBQUksa0JBQUosQUFBc0IsQUFDdEI7cURBQXlCLEFBQUM7OzhCQUFEO2dDQUFQLEFBQU87QUFBQTtBQUFBLGFBQUEsQ0FBUCxtQkFBNkIsQUFBQzs7OEJBQUQ7Z0NBQS9DLEFBQStDLEFBRS9DO0FBRitDO0FBQUEsYUFBQTs7bUNBRy9DLGNBQUEsU0FBSyxJQUFMLEFBQVEsc0JBQVI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUscUJBQWY7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjt1REFDVSxJQUFOLEFBQVMsb0JBQVQ7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxJQUFMLEFBQVEsd0JBQVI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzRCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsaUNBQUEsY0FBQTs0QkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSlIsQUFFSSxBQUVJLEFBRUgsZ0NBUFQsQUFDSTt5QkFESjtxQkFEQSxBQUNBLEFBNkVIO0FBN0VHOzs7OztFQVo0QixnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRoZXdiYXJuZGVuL25vZGVzaXRlcy9uZXh0LWF1dGhlbnRpY2F0ZSJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/matthewbarnden/nodesites/next-authenticate/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/matthewbarnden/nodesites/next-authenticate/components/Header.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40ZmRjYTc4YzQwYTAxODk3ZmEyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/MDE0MzFmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24nXG5pbXBvcnQgTG9nZ2VkSW5TZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTG9nZ2VkSW5TZWN0aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIFxuICAgICAgICBsZXQgbG9nZ2VkSW5TZWN0aW9uID0gbnVsbDtcbiAgICAgICAgbG9nZ2VkSW5TZWN0aW9uID0gdHJ1ZSA/IDxMb2dnZWRJblNlY3Rpb24gLz4gOiA8RmFjZWJvb2tMb2dpbkJ1dHRvbiAvPjtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJsb2dvXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dvQ2VsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDE+QXV0aGVudGljYXRlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+RmFjZWJvb2sgbG9naW4gd2l0aCBhbiBhcGk8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2xvZ2dlZEluU2VjdGlvbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNoZWFkZXIgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjaGVhZGVyIC5pbm5lciBzcGFuI2xvZ28ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NDVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXI6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDp1cmwoXCIvc3RhdGljL2xvY2suZ2lmXCIpIG5vLXJlcGVhdCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQ3cHggMTVweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAjaGVhZGVyIC5mYWNlYm9va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQ4cHggMHB4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAjaGVhZGVyICNsb2dvQ2VsbCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjMzcHg7IFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICNoZWFkZXIgI2xvZ29DZWxsIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDpub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI2hlYWRlciAjbG9nb0NlbGwgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNhOWE5YTk7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6LTJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICNoZWFkZXIgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MCAyNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAjaGVhZGVyICNsb2dvQ2VsbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgI2hlYWRlciAuaW5uZXIgc3BhbiNsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUE2RUE7QUE3RUE7Ozs7O0FBWkE7QUFDQTtBQURBOzs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=