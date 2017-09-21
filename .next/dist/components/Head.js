"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/head.js";

exports.default = function (props) {
    return _react2.default.createElement("div", {
        "data-jsx": 853335611,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", "data-jsx": 853335611,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement("meta", { charSet: "utf-8", "data-jsx": 853335611,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }), _react2.default.createElement("title", {
        "data-jsx": 853335611,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, props.title)), _react2.default.createElement(_style2.default, {
        styleId: 853335611,
        css: "html,body{margin:0;padding:0;background:#f8f8f8;font-family:sans-serif}#app{width:100%;height:auto;margin:0;padding:0}h2,h3{font-size:24px;font-family:sans-serif;color:#333;float:left;font-weight:normal;padding:2.5px 45px;clear:left;margin:0;margin-bottom:10px}h3{font-size:22px;margin-top:25px}p{font-size:16px;font-family:sans-serif;color:#808080;float:left;clear:left;padding:0px 45px;margin:3.5px 0}.bgWrap{margin-top:50px;float:left;background-color:#fff;width:100%;padding:25px 0 50px 0;box-shadow:3px 3px 3px #ccc}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTdUIsQUFHcUIsQUFNRSxBQU1LLEFBV0EsQUFJQSxBQVNBLFNBbkNMLEVBTUMsSUFNWSxBQVdSLEFBSVEsQ0FTYixHQW5DUSxJQU1WLElBOEJjLElBYjFCLENBaEJjLE1BTmEsQUFXWixBQWVHLElBbkJsQixPQUtlLEFBd0JELEdBVEMsUUFkUSxBQXdCRSxDQXBDekIsRUEyQmMsV0FDTSxLQWZFLEdBd0JVLFNBUmQsT0FmSixRQWdCZCxHQWZZLENBdUJaLFFBdEJzQixtQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9oZWFkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+e3Byb3BzLnRpdGxlfTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDojZjhmOGY4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IFxuICAgICAgICB9XG4gICAgICAgICNhcHAge1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGhlaWdodDphdXRvO1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGgyLCBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgcGFkZGluZzoyLjVweCA0NXB4O1xuICAgICAgICAgICAgY2xlYXI6bGVmdDtcbiAgICAgICAgICAgIG1hcmdpbjowO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MjVweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGNsZWFyOmxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOjBweCA0NXB4O1xuICAgICAgICAgICAgbWFyZ2luOjMuNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJnV3JhcCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjUwcHg7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOjI1cHggMCA1MHB4IDA7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCAjY2NjO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbikiXX0= */\n/*@ sourceURL=components/head.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBRVA7Ozs7Ozs7O2tCQUFlLFVBQUEsQUFBQyxPQUFEOzJCQUNiLGNBQUE7b0JBQUE7O3NCQUFBO3dCQUFBLEFBQ0U7QUFERjtBQUFBLEtBQUEsa0JBQ0UsQUFBQzs7c0JBQUQ7d0JBQUEsQUFDRTtBQURGO0FBQUEsK0NBQ1EsTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEIsbURBQTlCOztzQkFBQTt3QkFERixBQUNFLEFBQ0E7QUFEQTtnREFDTSxTQUFOLEFBQWMscUJBQWQ7O3NCQUFBO3dCQUZGLEFBRUUsQUFDQTtBQURBO3dCQUNBLGNBQUE7b0JBQUE7O3NCQUFBO3dCQUFBLEFBQVE7QUFBUjtBQUFBLGFBSkosQUFDRSxBQUdFLEFBQWM7aUJBSmxCO2FBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiaGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIn0=