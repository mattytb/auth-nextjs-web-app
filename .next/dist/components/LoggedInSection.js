"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/loggedInSection.js";

exports.default = function (props) {
    return _react2.default.createElement("div", { id: "loggedInSection", "data-jsx": 2306114909,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 2
        }
    }, _react2.default.createElement("img", { src: props.user.imageSrc, "data-jsx": 2306114909,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }), _react2.default.createElement("div", { className: "innerWrap", "data-jsx": 2306114909,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("span", {
        "data-jsx": 2306114909,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, "Welcome, ", props.user.name), _react2.default.createElement("a", { onClick: function onClick() {
            props.logout();
        }, className: "facebookLogoutButton", "data-jsx": 2306114909,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, "Log out")), _react2.default.createElement(_style2.default, {
        styleId: 2306114909,
        css: "#loggedInSection[data-jsx=\"2306114909\"]{margin-top:45px;float:right}#loggedInSection[data-jsx=\"2306114909\"] img[data-jsx=\"2306114909\"],#loggedInSection[data-jsx=\"2306114909\"] span[data-jsx=\"2306114909\"]{float:right}#loggedInSection[data-jsx=\"2306114909\"] span[data-jsx=\"2306114909\"]{margin-right:15px}.facebookLogoutButton[data-jsx=\"2306114909\"]{width:auto;height:25px;float:right;margin:7px 10px 0 0px;background:#3B5998 url(\"../static/fb-logo.png\") no-repeat 4px 2.2px;background-size:22px 22px;color:#f7f7f7;text-indent:34px;text-decoration:none;font-size:13px;line-height:2;border-radius:5px;padding-right:25px;box-shadow:3px 3px 3px lightgrey;cursor:pointer;font-weight:bold}.facebookLogoutButton[data-jsx=\"2306114909\"]:hover{box-shadow:none}@media only screen and (max-width:935px){#loggedInSection[data-jsx=\"2306114909\"]{float:none;display:inline-block;margin:0 auto;margin-top:10px}.facebookLogoutButton[data-jsx=\"2306114909\"]{float:left;margin-left:15px}#loggedInSection[data-jsx=\"2306114909\"] img[data-jsx=\"2306114909\"],#loggedInSection[data-jsx=\"2306114909\"] span[data-jsx=\"2306114909\"]{float:left}#loggedInSection[data-jsx=\"2306114909\"] span[data-jsx=\"2306114909\"]{margin-left:15px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9nZ2VkSW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFhLEFBR29DLEFBSUosQUFHTSxBQUdOLEFBbUJLLEFBS0QsQUFPRCxBQUtBLEFBR00sV0F0Q1IsQUF3QmEsQUFPTCxBQUtwQixDQTFDSixJQUplLEFBNkJmLENBb0JJLENBMUNKLEtBSWdCLEtBVmhCLEFBeUNJLElBUGtCLEdBdkJHLFdBd0JGLFdBdkJrRCxLQXdCckUsK0RBdkIwQiwwQkFDWixjQUNHLGlCQUNJLHFCQUNOLGVBQ0QsY0FDSSxrQkFDQyxtQkFDYyxpQ0FDbkIsZUFDRSxpQkFDcEIiLCJmaWxlIjoiY29tcG9uZW50cy9sb2dnZWRJblNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21hdHRoZXdiYXJuZGVuL25vZGVzaXRlcy9uZXh0LWF1dGhlbnRpY2F0ZSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICAgIDxkaXYgaWQ9XCJsb2dnZWRJblNlY3Rpb25cIj5cbiAgICAgICAgPGltZyBzcmM9e3Byb3BzLnVzZXIuaW1hZ2VTcmN9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lcldyYXBcIj5cbiAgICAgICAgICAgIDxzcGFuPldlbGNvbWUsIHtwcm9wcy51c2VyLm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgPGEgb25DbGljaz17KCk9PiB7IHByb3BzLmxvZ291dCgpIH0gfSBjbGFzc05hbWU9XCJmYWNlYm9va0xvZ291dEJ1dHRvblwiPkxvZyBvdXQ8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAjbG9nZ2VkSW5TZWN0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDo0NXB4O1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2xvZ2dlZEluU2VjdGlvbiBpbWcsICNsb2dnZWRJblNlY3Rpb24gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjbG9nZ2VkSW5TZWN0aW9uIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZhY2Vib29rTG9nb3V0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46N3B4IDEwcHggMCAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzQjU5OTggdXJsKFwiLi4vc3RhdGljL2ZiLWxvZ28ucG5nXCIpICBuby1yZXBlYXQgNHB4IDIuMnB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIycHggMjJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmN2Y3Zjc7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtaW5kZW50OiAzNHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZmFjZWJvb2tMb2dvdXRCdXR0b246aG92ZXIge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM1cHgpIHtcbiAgICAgICAgICAgICAgICAgICAgI2xvZ2dlZEluU2VjdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmZhY2Vib29rTG9nb3V0QnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgI2xvZ2dlZEluU2VjdGlvbiBpbWcsICNsb2dnZWRJblNlY3Rpb24gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICNsb2dnZWRJblNlY3Rpb24gc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/loggedInSection.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9nZ2VkSW5TZWN0aW9uLmpzIl0sIm5hbWVzIjpbInByb3BzIiwidXNlciIsImltYWdlU3JjIiwibmFtZSIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztrQkFBZSxVQUFBLEFBQUMsT0FBRDsyQkFDWCxjQUFBLFNBQUssSUFBTCxBQUFRLCtCQUFSOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7S0FBQSx5Q0FDUyxLQUFLLE1BQUEsQUFBTSxLQUFoQixBQUFxQixzQkFBckI7O3NCQUFBO3dCQURKLEFBQ0ksQUFDQTtBQURBO3dCQUNBLGNBQUEsU0FBSyxXQUFMLEFBQWUseUJBQWY7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBO29CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FBZ0IsbUJBQUEsQUFBTSxLQUQxQixBQUNJLEFBQTJCLEFBQzNCLHVCQUFBLGNBQUEsT0FBRyxTQUFTLG1CQUFLLEFBQUU7a0JBQUEsQUFBTSxBQUFVO0FBQW5DLFdBQXNDLFdBQXRDLEFBQWdELG9DQUFoRDs7c0JBQUE7d0JBQUE7QUFBQTtPQUpSLEFBRUksQUFFSTtpQkFKUjthQURXLEFBQ1g7QUFBQTtBQURKIiwiZmlsZSI6ImxvZ2dlZEluU2VjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIn0=