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

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/navBar.js";


var NavBar = function NavBar(props) {
    return _react2.default.createElement("div", { id: "navBar", "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("div", { className: "inner", "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("ul", {
        "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement("li", {
        "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_link2.default, { href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement("a", { className: props.indexActive || "", "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, "Home"))), _react2.default.createElement("li", {
        "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_link2.default, { href: "/showUsers", __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, _react2.default.createElement("a", { className: props.usersActive || "", "data-jsx": 4189356566,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }, "Users"))))), _react2.default.createElement(_style2.default, {
        styleId: 4189356566,
        css: "#navBar[data-jsx=\"4189356566\"]{width:100%;height:50px;background-color:#a0a0a0;display:block}.inner[data-jsx=\"4189356566\"]{max-width:900px;margin:0 auto}ul[data-jsx=\"4189356566\"]{padding:0;margin:0;display:inline;text-align:center}ul[data-jsx=\"4189356566\"] li[data-jsx=\"4189356566\"]{list-style:none;font-family:sans-serif;float:left;margin:0px 0 0 0}ul[data-jsx=\"4189356566\"] li[data-jsx=\"4189356566\"] a[data-jsx=\"4189356566\"]{color:#fff;float:left;text-decoration:none;padding:14px;margin-top:4px}ul[data-jsx=\"4189356566\"] li[data-jsx=\"4189356566\"] a.show[data-jsx=\"4189356566\"]{display:block}ul[data-jsx=\"4189356566\"] li[data-jsx=\"4189356566\"] a.hide[data-jsx=\"4189356566\"]{display:none}ul[data-jsx=\"4189356566\"] li[data-jsx=\"4189356566\"] a.selected[data-jsx=\"4189356566\"]{background-color:#f8f8f8;color:#333}.hidden[data-jsx=\"4189356566\"]{display:none}@media only screen and (max-width:935px){.inner[data-jsx=\"4189356566\"]{padding:0 25px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVpQixBQUcrQixBQU1LLEFBS04sQUFNTyxBQU1OLEFBT0ksQUFHRCxBQUlZLEFBSWIsQUFNTyxVQW5DWCxDQVhHLEFBdUJELEVBVWQsQUFRQSxDQVhBLENBaUJJLENBekNhLEFBV1UsR0FMUixHQVlNLENBdkJJLEVBb0NkLEtBOUJmLElBTXNCLEVBeUJ0QixHQXBCYyxJQU9FLEtBdkJFLEVBaUJHLEVBTHJCLElBWWtCLE1BdkJsQixLQWlCQSxJQU9BIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2QmFyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IE5hdkJhciA9IChwcm9wcykgPT4gKFxuICAgICAgICA8ZGl2IGlkPVwibmF2QmFyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17cHJvcHMuaW5kZXhBY3RpdmUgfHwgXCJcIn0+SG9tZTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvd1VzZXJzXCI+PGEgY2xhc3NOYW1lPXtwcm9wcy51c2Vyc0FjdGl2ZSB8fCBcIlwifT5Vc2VyczwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICNuYXZCYXIge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pbm5lciB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDo5MDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6MTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVsIGxpIGEuc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCBsaSBhLmhpZGUge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICB1bCBsaSBhLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM1cHgpIHtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgLmlubmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdkJhclxuIl19 */\n/*@ sourceURL=components/navBar.js */"
    }));
};

exports.default = NavBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2QmFyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJOYXZCYXIiLCJwcm9wcyIsImluZGV4QWN0aXZlIiwidXNlcnNBY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7O0FBRVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxPQUFBLEFBQUMsT0FBRDsyQkFDUCxjQUFBLFNBQUssSUFBTCxBQUFRLHNCQUFSOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlLHFCQUFmOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFBZTtBQUFmO3VCQUFlLGNBQUEsT0FBRyxXQUFXLE1BQUEsQUFBTSxlQUFwQixBQUFtQyxnQkFBbkM7O3NCQUFBO3dCQUFBO0FBQUE7T0FGdkIsQUFDSSxBQUNJLEFBQWUsQUFFbkIsMkJBQUEsY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFBd0I7QUFBeEI7dUJBQXdCLGNBQUEsT0FBRyxXQUFXLE1BQUEsQUFBTSxlQUFwQixBQUFtQyxnQkFBbkM7O3NCQUFBO3dCQUFBO0FBQUE7T0FQeEMsQUFDSSxBQUNJLEFBSUksQUFDSSxBQUF3QjtpQkFQeEM7YUFETyxBQUNQO0FBQUE7QUFEUixBQXVFQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJuYXZCYXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRoZXdiYXJuZGVuL25vZGVzaXRlcy9uZXh0LWF1dGhlbnRpY2F0ZSJ9