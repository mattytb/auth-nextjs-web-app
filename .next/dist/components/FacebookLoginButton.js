"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/facebookLoginButton.js";

exports.default = function (props) {
    return _react2.default.createElement("div", {
        "data-jsx": 1372572575,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement("a", { className: "facebookButton", onClick: function onClick() {
            return props.loginClick();
        }, "data-jsx": 1372572575,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, "Continue with Facebook"), _react2.default.createElement(_style2.default, {
        styleId: 1372572575,
        css: ".facebookButton[data-jsx=\"1372572575\"]{width:auto;height:40px;float:right;background:#3B5998 url(\"../static/fb-logo.png\") no-repeat 0px 0px;background-size:40px 40px;cursor:pointer;font-family:sans-serif;color:#f7f7f7;text-indent:50px;text-decoration:none;font-size:18px;line-height:2.3;border-radius:5px;padding-right:25px;box-shadow:3px 3px 3px lightgrey;font-weight:bold;margin:48px 0px 0 0}.facebookButton[data-jsx=\"1372572575\"]:hover{box-shadow:none}@media only screen and (max-width:935px){.facebookButton[data-jsx=\"1372572575\"]{margin:0 auto;float:none;display:inline-block;clear:both;margin-top:10px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJYSxBQUcrQixBQW9CTSxBQUtFLFdBeEJQLEdBeUJHLEVBTGxCLE9BbkJlLEVBeUJjLFVBeEIwQyxXQXlCcEQsV0FDSSxnQkFDbkIsNEJBMUIwQiwwQkFDWixlQUNTLHVCQUNWLGNBQ0ksaUJBQ0kscUJBQ1AsZUFDRSxnQkFDRSxrQkFDQSxtQkFDZSxpQ0FDakIsaUJBQ0ksb0JBQ3hCIiwiZmlsZSI6ImNvbXBvbmVudHMvZmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwiZmFjZWJvb2tCdXR0b25cIiBvbkNsaWNrPXsoKSA9PiBwcm9wcy5sb2dpbkNsaWNrKCl9PkNvbnRpbnVlIHdpdGggRmFjZWJvb2s8L2E+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5mYWNlYm9va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOmF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzNCNTk5OCB1cmwoXCIuLi9zdGF0aWMvZmItbG9nby5wbmdcIikgIG5vLXJlcGVhdCAwcHggMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcHggNDBweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZjdmN2Y3O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWluZGVudDogNTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMztcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OjI1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IGxpZ2h0Z3JleTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA0OHB4IDBweCAwIDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZhY2Vib29rQnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzNXB4KSB7XG4gICAgICAgICAgICAgICAgICAgIC5mYWNlYm9va0J1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0Om5vbmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6MTBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components/facebookLoginButton.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsImxvZ2luQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0FBQUEsS0FBQSxrQkFDSSxjQUFBLE9BQUcsV0FBSCxBQUFhLGtCQUFpQixTQUFTLG1CQUFBO21CQUFNLE1BQU4sQUFBTSxBQUFNO0FBQW5ELHVCQUFBOztzQkFBQTt3QkFBQTtBQUFBO09BREosQUFDSTtpQkFESjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6ImZhY2Vib29rTG9naW5CdXR0b24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRoZXdiYXJuZGVuL25vZGVzaXRlcy9uZXh0LWF1dGhlbnRpY2F0ZSJ9