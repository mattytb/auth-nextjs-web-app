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

var _jsxFileName = "/Users/matthewbarnden/nodesites/next-authenticate/components/Head.js";

exports.default = function (props) {
    return _react2.default.createElement("div", {
        "data-jsx": 250046595,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 3
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 4
        }
    }, _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", "data-jsx": 250046595,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }), _react2.default.createElement("meta", { charSet: "utf-8", "data-jsx": 250046595,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }), _react2.default.createElement("title", {
        "data-jsx": 250046595,
        __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, "My authentiation app - ", props.headerText)), _react2.default.createElement(_style2.default, {
        styleId: 250046595,
        css: "html,body{margin:0;padding:0;background:#f8f8f8;font-family:sans-serif}#app{width:100%;height:auto;margin:0;padding:0}h2,h3{font-size:24px;font-family:sans-serif;color:#333;float:left;font-weight:normal;padding:2.5px 45px;clear:left;margin:0;margin-bottom:10px}h3{font-size:22px;margin-top:25px}p{font-size:16px;font-family:sans-serif;color:#808080;float:left;clear:left;padding:0px 45px;margin:3.5px 0}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRdUIsQUFHcUIsQUFNRSxBQU1LLEFBV0EsQUFJQSxTQTFCTCxFQU1DLElBTVksQUFXUixBQUlRLElBMUJMLElBTVYsUUFpQlosQ0FoQmMsTUFOYSxBQVdaLEFBZUcsSUFuQmxCLE9BS2UsR0FlQSxRQWRRLENBWnZCLEVBMkJjLFdBQ00sS0FmRSxZQWdCSixPQWZKLFFBZ0JkLEdBZlksU0FDVSxtQkFDdEIiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9tYXR0aGV3YmFybmRlbi9ub2Rlc2l0ZXMvbmV4dC1hdXRoZW50aWNhdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPHRpdGxlPk15IGF1dGhlbnRpYXRpb24gYXBwIC0ge3Byb3BzLmhlYWRlclRleHR9PC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNmOGY4Zjg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgXG4gICAgICAgIH1cbiAgICAgICAgI2FwcCB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OmF1dG87XG4gICAgICAgICAgICBtYXJnaW46MDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDIsIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nOjIuNXB4IDQ1cHg7XG4gICAgICAgICAgICBjbGVhcjpsZWZ0O1xuICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDoyNXB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgY2xlYXI6bGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4IDQ1cHg7XG4gICAgICAgICAgICBtYXJnaW46My41cHggMDtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=components/Head.js */"
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZC5qcyJdLCJuYW1lcyI6WyJIZWFkIiwicHJvcHMiLCJoZWFkZXJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFDUDs7Ozs7Ozs7a0JBQWUsVUFBQSxBQUFDLE9BQUQ7MkJBQ2IsY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUEsQUFDRTtBQURGO0FBQUEsS0FBQSxrQkFDRSxBQUFDOztzQkFBRDt3QkFBQSxBQUNFO0FBREY7QUFBQSwrQ0FDUSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QixtREFBOUI7O3NCQUFBO3dCQURGLEFBQ0UsQUFDQTtBQURBO2dEQUNNLFNBQU4sQUFBYyxxQkFBZDs7c0JBQUE7d0JBRkYsQUFFRSxBQUNBO0FBREE7d0JBQ0EsY0FBQTtvQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BQStCLGlDQUpuQyxBQUNFLEFBR0UsQUFBcUM7aUJBSnpDO2FBRGEsQUFDYjtBQUFBO0FBREYiLCJmaWxlIjoiSGVhZC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIn0=