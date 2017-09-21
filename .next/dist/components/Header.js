'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _facebookLoginButton = require('../components/facebookLoginButton');

var _facebookLoginButton2 = _interopRequireDefault(_facebookLoginButton);

var _loggedInSection = require('../components/loggedInSection');

var _loggedInSection2 = _interopRequireDefault(_loggedInSection);

var _userCookieHelper = require('../lib/userCookieHelper');

var _facebookLoginInit = require('../lib/facebookLoginInit');

var _facebookLoginInit2 = _interopRequireDefault(_facebookLoginInit);

var _apiClient = require('../lib/apiClient');

var _redirect = require('../lib/redirect.js');

var _redirect2 = _interopRequireDefault(_redirect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewbarnden/nodesites/next-authenticate/components/header.js';


var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props) {
        (0, _classCallCheck3.default)(this, Header);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

        _this.state = {
            user: props.authenticatedUser
        };

        _this.statusChangeCallback = _this.statusChangeCallback.bind(_this);
        _this.handleLoginClick = _this.handleLoginClick.bind(_this);
        _this.handleLogoutClick = _this.handleLogoutClick.bind(_this);

        return _this;
    }

    (0, _createClass3.default)(Header, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            (0, _facebookLoginInit2.default)(this.statusChangeCallback);
        }
    }, {
        key: 'statusChangeCallback',
        value: function statusChangeCallback(response) {
            if (response.status !== 'connected') {
                this.setState({ user: null });
                (0, _userCookieHelper.deleteUserCookie)(this.props.cookie);
            }
        }
    }, {
        key: 'handleLoginClick',
        value: function handleLoginClick() {
            var self = this;
            FB.login(function () {
                var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(response) {
                    var data, user;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.next = 2;
                                    return (0, _apiClient.getFacebookUser)(response.authResponse.accessToken);

                                case 2:
                                    data = _context.sent;
                                    user = (0, _userCookieHelper.createUserCookie)(null, data.token, data.userId, data.name, data.image);

                                    self.setState({ user: user });
                                    (0, _redirect2.default)('/showUsers');

                                case 6:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }(), { scope: 'email,public_profile', return_scopes: true });
        }
    }, {
        key: 'handleLogoutClick',
        value: function handleLogoutClick() {
            var self = this;
            FB.logout(function (response) {
                (0, _userCookieHelper.deleteUserCookie)();
                self.setState({ user: null });
                (0, _redirect2.default)('/');
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var loggedInSection = null;

            loggedInSection = this.state.user !== null ? _react2.default.createElement(_loggedInSection2.default, { user: this.state.user, logout: this.handleLogoutClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }) : _react2.default.createElement(_facebookLoginButton2.default, { loginClick: this.handleLoginClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            });

            return _react2.default.createElement('div', { id: 'header', 'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('div', { className: 'inner', 'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, _react2.default.createElement('span', { id: 'logo', 'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }), _react2.default.createElement('div', { id: 'logoCell', 'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('h1', {
                'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Authenticate'), _react2.default.createElement('span', {
                'data-jsx': 2322420310,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, 'Facebook login with an api')), loggedInSection), _react2.default.createElement(_style2.default, {
                styleId: 2322420310,
                css: '#header[data-jsx="2322420310"]{width:100%;height:150px;border-bottom:1px solid #ccc;background-color:#fff;font-family:sans-serif}#header[data-jsx="2322420310"] .inner[data-jsx="2322420310"]{max-width:900px;margin:0 auto}#header[data-jsx="2322420310"] .inner[data-jsx="2322420310"] span#logo[data-jsx="2322420310"]{width:36px;height:45px;float:left;clear:left;background:url("/static/lock.gif") no-repeat 0 0;background-size:36px 45px;margin:47px 15px 0 0}#header[data-jsx="2322420310"] .facebookButton[data-jsx="2322420310"]{float:right;margin:48px 0px 0 0}#header[data-jsx="2322420310"] #logoCell[data-jsx="2322420310"]{width:300px;float:left;margin-top:33px}#header[data-jsx="2322420310"] #logoCell[data-jsx="2322420310"] h1[data-jsx="2322420310"]{font-size:32px;margin:10px 0 0 0;color:#333;font-weight:normal}#header[data-jsx="2322420310"] #logoCell[data-jsx="2322420310"] span[data-jsx="2322420310"]{font-size:15px;color:#a9a9a9;float:left;margin-top:-2px}@media only screen and (max-width:935px){#header[data-jsx="2322420310"] .inner[data-jsx="2322420310"]{padding:0 25px}#header[data-jsx="2322420310"] #logoCell[data-jsx="2322420310"]{float:none;margin:0 auto;margin-top:10px;display:inline-block;clear:both}#header[data-jsx="2322420310"] .inner[data-jsx="2322420310"] span#logo[data-jsx="2322420310"]{display:none}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFNEIsQUFHbUMsQUFRSyxBQUlMLEFBVUMsQUFLQSxBQU1JLEFBT0EsQUFRRyxBQUlILEFBT0UsV0ExREosQUFZRixBQXdDTyxDQTlCRSxBQUtWLENBZ0NWLEVBMUJrQixBQU9KLEFBUWQsQ0F4Q2EsT0FLSCxBQWVLLENBM0JhLENBb0RULElBWlQsQ0FoQ2QsRUFjQSxDQVdlLENBcEJELEtBZWQsQ0FhbUIsQ0FZVSxHQW5CUCxDQXBCOEIsUUFiM0IsR0F5Q3pCLE1BWW1CLENBbkJuQixVQW9CSSxFQXJEdUIsbUJBYUcsSUFaOUIsc0JBYXlCLHFCQUN6QiIsImZpbGUiOiJjb21wb25lbnRzL2hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZhY2Vib29rTG9naW5CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9mYWNlYm9va0xvZ2luQnV0dG9uJ1xuaW1wb3J0IExvZ2dlZEluU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvZ2dlZEluU2VjdGlvbidcbmltcG9ydCB7IGRlbGV0ZVVzZXJDb29raWUsIGNyZWF0ZVVzZXJDb29raWUgfSBmcm9tICcuLi9saWIvdXNlckNvb2tpZUhlbHBlcidcbmltcG9ydCBGYWNlYm9va0xvZ2luSW5pdCBmcm9tICcuLi9saWIvZmFjZWJvb2tMb2dpbkluaXQnXG5pbXBvcnQgeyBnZXRGYWNlYm9va1VzZXIgfSBmcm9tICcuLi9saWIvYXBpQ2xpZW50J1xuaW1wb3J0IFJlZGlyZWN0IGZyb20gJy4uL2xpYi9yZWRpcmVjdC5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICB1c2VyOnByb3BzLmF1dGhlbnRpY2F0ZWRVc2VyXG4gICAgICB9XG4gICAgICBcbiAgICAgIHRoaXMuc3RhdHVzQ2hhbmdlQ2FsbGJhY2sgPSB0aGlzLnN0YXR1c0NoYW5nZUNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmhhbmRsZUxvZ2luQ2xpY2sgPSB0aGlzLmhhbmRsZUxvZ2luQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuaGFuZGxlTG9nb3V0Q2xpY2sgPSB0aGlzLmhhbmRsZUxvZ291dENsaWNrLmJpbmQodGhpcyk7XG5cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgRmFjZWJvb2tMb2dpbkluaXQodGhpcy5zdGF0dXNDaGFuZ2VDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gJ2Nvbm5lY3RlZCcpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyOm51bGx9KTtcbiAgICAgICAgICBkZWxldGVVc2VyQ29va2llKHRoaXMucHJvcHMuY29va2llKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUxvZ2luQ2xpY2soKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBGQi5sb2dpbihhc3luYyBmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmFjZWJvb2tVc2VyKHJlc3BvbnNlLmF1dGhSZXNwb25zZS5hY2Nlc3NUb2tlbik7XG4gICAgICAgICAgICBjb25zdCB1c2VyID0gY3JlYXRlVXNlckNvb2tpZShudWxsLCBkYXRhLnRva2VuLCBkYXRhLnVzZXJJZCwgZGF0YS5uYW1lLCBkYXRhLmltYWdlKTtcbiAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3VzZXI6dXNlcn0pO1xuICAgICAgICAgICAgUmVkaXJlY3QoJy9zaG93VXNlcnMnKTtcbiAgICAgICAgfSwge3Njb3BlOiAnZW1haWwscHVibGljX3Byb2ZpbGUnLCByZXR1cm5fc2NvcGVzOiB0cnVlfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTG9nb3V0Q2xpY2soKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBGQi5sb2dvdXQoZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgICAgICBkZWxldGVVc2VyQ29va2llKCk7XG4gICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3VzZXI6bnVsbH0pO1xuICAgICAgICAgICBSZWRpcmVjdCgnLycpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcblxuICAgICAgICBsZXQgbG9nZ2VkSW5TZWN0aW9uID0gbnVsbDtcblxuICAgICAgICBsb2dnZWRJblNlY3Rpb24gPSB0aGlzLnN0YXRlLnVzZXIgIT09IG51bGxcbiAgICAgICAgICAgID8gPExvZ2dlZEluU2VjdGlvbiB1c2VyPXt0aGlzLnN0YXRlLnVzZXJ9IGxvZ291dD17dGhpcy5oYW5kbGVMb2dvdXRDbGlja30vPiBcbiAgICAgICAgICAgIDogPEZhY2Vib29rTG9naW5CdXR0b24gbG9naW5DbGljaz17IHRoaXMuaGFuZGxlTG9naW5DbGljayB9IC8+O1xuXG4gICAgICAgIHJldHVybiAoXG5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibG9nb1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ29DZWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+QXV0aGVudGljYXRlPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkZhY2Vib29rIGxvZ2luIHdpdGggYW4gYXBpPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2xvZ2dlZEluU2VjdGlvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAjaGVhZGVyIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6OTAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNoZWFkZXIgLmlubmVyIHNwYW4jbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDozNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6dXJsKFwiL3N0YXRpYy9sb2NrLmdpZlwiKSBuby1yZXBlYXQgMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAzNnB4IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDQ3cHggMTVweCAwIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAjaGVhZGVyIC5mYWNlYm9va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNDhweCAwcHggMCAwO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2hlYWRlciAjbG9nb0NlbGwge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozM3B4OyBcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICNoZWFkZXIgI2xvZ29DZWxsIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2hlYWRlciAjbG9nb0NlbGwgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2E5YTlhOTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOi0ycHg7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAjaGVhZGVyIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowIDI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICNoZWFkZXIgI2xvZ29DZWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgI2hlYWRlciAuaW5uZXIgc3BhbiNsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/header.js */'
            }));
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbIkZhY2Vib29rTG9naW5CdXR0b24iLCJMb2dnZWRJblNlY3Rpb24iLCJkZWxldGVVc2VyQ29va2llIiwiY3JlYXRlVXNlckNvb2tpZSIsIkZhY2Vib29rTG9naW5Jbml0IiwiZ2V0RmFjZWJvb2tVc2VyIiwiUmVkaXJlY3QiLCJIZWFkZXIiLCJwcm9wcyIsInN0YXRlIiwidXNlciIsImF1dGhlbnRpY2F0ZWRVc2VyIiwic3RhdHVzQ2hhbmdlQ2FsbGJhY2siLCJiaW5kIiwiaGFuZGxlTG9naW5DbGljayIsImhhbmRsZUxvZ291dENsaWNrIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImNvb2tpZSIsInNlbGYiLCJGQiIsImxvZ2luIiwiYXV0aFJlc3BvbnNlIiwiYWNjZXNzVG9rZW4iLCJkYXRhIiwidG9rZW4iLCJ1c2VySWQiLCJuYW1lIiwiaW1hZ2UiLCJzY29wZSIsInJldHVybl9zY29wZXMiLCJsb2dvdXQiLCJsb2dnZWRJblNlY3Rpb24iLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQWtCOztBQUMzQixBQUFPOzs7O0FBQ1AsQUFBUzs7QUFDVCxBQUFPOzs7Ozs7Ozs7SSxBQUVjO29DQUVqQjs7b0JBQUEsQUFBYSxPQUFPOzRDQUFBOzswSUFBQSxBQUNaLEFBQ047O2NBQUEsQUFBSztrQkFDSSxNQURULEFBQWEsQUFDRSxBQUdmO0FBSmEsQUFDVDs7Y0FHSixBQUFLLHVCQUF1QixNQUFBLEFBQUsscUJBQUwsQUFBMEIsS0FBdEQsQUFDQTtjQUFBLEFBQUssbUJBQW1CLE1BQUEsQUFBSyxpQkFBTCxBQUFzQixLQUE5QyxBQUNBO2NBQUEsQUFBSyxvQkFBb0IsTUFBQSxBQUFLLGtCQUFMLEFBQXVCLEtBUjlCLEFBUWxCOztlQUVEOzs7Ozs0Q0FFbUIsQUFDaEI7NkNBQWtCLEtBQWxCLEFBQXVCLEFBQzFCOzs7OzZDQUVvQixBLFVBQVUsQUFDM0I7Z0JBQUksU0FBQSxBQUFTLFdBQWIsQUFBd0IsYUFBYSxBQUNuQztxQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTSxBQUNwQjt3REFBaUIsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLEFBQzdCO0FBQ0o7Ozs7MkNBRWlCLEFBQ2Q7Z0JBQUksT0FBSixBQUFXLEFBQ1g7ZUFBQSxBQUFHLGtCQUFIO29HQUFTLGlCQUFBLEFBQWUsVUFBZjs4QkFBQTtrRkFBQTtrQ0FBQTs2REFBQTtxQ0FBQTtvREFBQTsyQ0FDYyxnQ0FBZ0IsU0FBQSxBQUFTLGFBRHZDLEFBQ2MsQUFBc0M7O3FDQUFuRDtBQURELG9EQUVDO0FBRkQsMkNBRVEsd0NBQUEsQUFBaUIsTUFBTSxLQUF2QixBQUE0QixPQUFPLEtBQW5DLEFBQXdDLFFBQVEsS0FBaEQsQUFBcUQsTUFBTSxLQUZuRSxBQUVRLEFBQWdFLEFBQzdFOzt5Q0FBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTSxBQUNwQjs0REFKSyxBQUlMLEFBQVM7O3FDQUpKO3FDQUFBO29EQUFBOztBQUFBO2dDQUFBO0FBQVQ7O3FDQUFBOzRDQUFBO0FBQUE7aUJBS0csRUFBQyxPQUFELEFBQVEsd0JBQXdCLGVBTG5DLEFBS0csQUFBK0MsQUFDckQ7Ozs7NENBRWtCLEFBQ2Y7Z0JBQUksT0FBSixBQUFXLEFBQ1g7ZUFBQSxBQUFHLE9BQU8sVUFBQSxBQUFTLFVBQVMsQUFDekI7QUFDQTtxQkFBQSxBQUFLLFNBQVMsRUFBQyxNQUFmLEFBQWMsQUFBTSxBQUNwQjt3Q0FBQSxBQUFTLEFBQ1g7QUFKRCxBQUtIOzs7O2lDQUVPLEFBRUo7O2dCQUFJLGtCQUFKLEFBQXNCLEFBRXRCOzttQ0FBa0IsQUFBSyxNQUFMLEFBQVcsU0FBWCxBQUFvQix1QkFDaEMsQUFBQywyQ0FBZ0IsTUFBTSxLQUFBLEFBQUssTUFBNUIsQUFBa0MsTUFBTSxRQUFRLEtBQWhELEFBQXFEOzhCQUFyRDtnQ0FEWSxBQUNaO0FBQUE7YUFBQSxDQURZLG1CQUVaLEFBQUMsK0NBQW9CLFlBQWEsS0FBbEMsQUFBdUM7OEJBQXZDO2dDQUZOLEFBRU0sQUFFTjtBQUZNO2FBQUE7O21DQUlGLGNBQUEsU0FBSyxJQUFMLEFBQVEsc0JBQVI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWUscUJBQWY7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjt1REFDVSxJQUFOLEFBQVMsb0JBQVQ7OzhCQUFBO2dDQURKLEFBQ0ksQUFDQTtBQURBO2dDQUNBLGNBQUEsU0FBSyxJQUFMLEFBQVEsd0JBQVI7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzRCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsaUNBQUEsY0FBQTs0QkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSlIsQUFFSSxBQUVJLEFBRUgsZ0NBUFQsQUFDSTt5QkFESjtxQkFGSixBQUVJLEFBNEVQO0FBNUVPOzs7OztFQXREd0IsZ0JBQU0sQTs7a0JBQXJCLEEiLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUifQ==