"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/NavBar.js";


var NavBar = function NavBar(props) {
    return _react2.default.createElement("div", { id: "navBar", "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("div", { className: "inner", "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("ul", {
        "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement("li", {
        "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement("a", { className: props.indexSelected, "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, "Home"))), _react2.default.createElement("li", {
        "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: "/showUsers", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement("a", { className: props.usersSelected, "data-jsx": 864620815,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, "Users"))))), _react2.default.createElement(_style2.default, {
        styleId: 864620815,
        css: "#navBar[data-jsx=\"864620815\"]{width:100%;height:50px;background-color:#a0a0a0;display:block}#navBar[data-jsx=\"864620815\"] .inner[data-jsx=\"864620815\"]{max-width:900px;margin:0 auto}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"]{padding:0;margin:0;display:inline;text-align:center}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"] li[data-jsx=\"864620815\"]{list-style:none;font-family:sans-serif;float:left;margin:0px 0 0 0}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"] li[data-jsx=\"864620815\"] a[data-jsx=\"864620815\"]{color:#fff;float:left;text-decoration:none;padding:14px;margin-top:4px}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"] li[data-jsx=\"864620815\"] a.show[data-jsx=\"864620815\"]{display:block}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"] li[data-jsx=\"864620815\"] a.hide[data-jsx=\"864620815\"]{display:none}#navBar[data-jsx=\"864620815\"] ul[data-jsx=\"864620815\"] li[data-jsx=\"864620815\"] a.selected[data-jsx=\"864620815\"]{background-color:#f8f8f8;color:#333}@media only screen and (max-width:935px){#navBar[data-jsx=\"864620815\"] .inner[data-jsx=\"864620815\"]{padding:0 25px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVhLEFBRzJCLEFBTUssQUFLTixBQU1PLEFBTU4sQUFPSSxBQUdELEFBSVksQUFPTixVQWhDWCxDQVhHLEFBdUJELEVBVWQsQ0FIQSxDQWNJLENBdENhLEFBV1UsR0FMUixHQVlNLENBdkJJLEVBb0NkLEtBOUJmLElBTXNCLEVBeUJ0QixHQXBCYyxJQU9FLEtBdkJFLEVBaUJHLEVBTHJCLElBWWtCLE1BdkJsQixLQWlCQSxJQU9BIiwiZmlsZSI6ImNvbXBvbmVudHMvTmF2QmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICAgIDxkaXYgaWQ9XCJuYXZCYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e3Byb3BzLmluZGV4U2VsZWN0ZWR9PkhvbWU8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3dVc2Vyc1wiPjxhIGNsYXNzTmFtZT17cHJvcHMudXNlcnNTZWxlY3RlZH0+VXNlcnM8L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAjbmF2QmFyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDo1MHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGEwYTA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAjbmF2QmFyIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbjowIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICNuYXZCYXIgdWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI25hdkJhciB1bCBsaSB7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDAgMCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgI25hdkJhciB1bCBsaSBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNuYXZCYXIgdWwgbGkgYS5zaG93IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICNuYXZCYXIgdWwgbGkgYS5oaWRlIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbmF2QmFyIHVsIGxpIGEuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM1cHgpIHtcblxuICAgICAgICAgICAgICAgICNuYXZCYXIgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyNXB4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyIl19 */\n/*@ sourceURL=components/NavBar.js */"
    }));
};

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2QmFyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZCYXIiLCJwcm9wcyIsImluZGV4U2VsZWN0ZWQiLCJ1c2Vyc1NlbGVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7Ozs7OztBQUVQLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQSxTQUFLLElBQUwsQUFBUSxzQkFBUjs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBZjs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7b0JBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLGNBQUE7b0JBQUE7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQWU7QUFBZjt1QkFBZSxjQUFBLE9BQUcsV0FBVyxNQUFkLEFBQW9CLDJCQUFwQjs7c0JBQUE7d0JBQUE7QUFBQTtPQUZ2QixBQUNJLEFBQ0ksQUFBZSxBQUVuQiwyQkFBQSxjQUFBO29CQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUF3QjtBQUF4Qjt1QkFBd0IsY0FBQSxPQUFHLFdBQVcsTUFBZCxBQUFvQiwyQkFBcEI7O3NCQUFBO3dCQUFBO0FBQUE7T0FQeEMsQUFDSSxBQUNJLEFBSUksQUFDSSxBQUF3QjtpQkFQeEM7YUFEVyxBQUNYO0FBQUE7QUFESixBQW9FQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJOYXZCYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRoZXdiYXJuZGVuL25vZGVzaXRlcy9uZXh0LWF1dGhlbnRpY2F0ZSJ9