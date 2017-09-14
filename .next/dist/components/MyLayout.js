'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Head = require('../components/Head');

var _Head2 = _interopRequireDefault(_Head);

var _NavBar = require('../components/NavBar');

var _NavBar2 = _interopRequireDefault(_NavBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/matthewbarnden/nodesites/next-authenticate/components/MyLayout.js';


var Layout = function Layout(props) {
  return _react2.default.createElement('div', {
    'data-jsx': 4209050644,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement(_Head2.default, { headerText: props.headerText, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement(_Header2.default, { headerText: props.headerText, __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement(_NavBar2.default, { indexSelected: props.indexSelected || "", usersSelected: props.usersSelected || "", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), _react2.default.createElement('div', { id: 'content', 'data-jsx': 4209050644,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement('div', { className: 'inner', 'data-jsx': 4209050644,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, props.children)), _react2.default.createElement(_style2.default, {
    styleId: 4209050644,
    css: '#content[data-jsx="4209050644"]{width:100%;height:auto;display:block;position:absolute}#content[data-jsx="4209050644"] .inner[data-jsx="4209050644"]{max-width:900px;margin:0 auto}@media only screen and (max-width:935px){#content[data-jsx="4209050644"] .inner[data-jsx="4209050644"]{padding:0 25px}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVMsQUFHdUIsQUFNSyxBQU9DLFdBWkwsSUFhWCxDQVBhLE9BTEEsT0FPZixPQU5tQixrQkFDbkIiLCJmaWxlIjoiY29tcG9uZW50cy9NeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcbmltcG9ydCBIZWFkIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZCdcbmltcG9ydCBOYXZCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInXG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkIGhlYWRlclRleHQ9e3Byb3BzLmhlYWRlclRleHR9Lz5cbiAgICA8SGVhZGVyIGhlYWRlclRleHQ9e3Byb3BzLmhlYWRlclRleHR9IC8+XG4gICAgPE5hdkJhciBpbmRleFNlbGVjdGVkPXtwcm9wcy5pbmRleFNlbGVjdGVkIHx8IFwiXCJ9IHVzZXJzU2VsZWN0ZWQ9e3Byb3BzLnVzZXJzU2VsZWN0ZWQgfHwgXCJcIn0vPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5uZXJcIj5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAjY29udGVudCB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OmF1dG87IFxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY29udGVudCAuaW5uZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOjkwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOjAgYXV0bztcblxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM1cHgpIHtcbiAgICAgICAgICAgICNjb250ZW50IC5pbm5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6MCAyNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0Il19 */\n/*@ sourceURL=components/MyLayout.js */'
  }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiSGVhZCIsIk5hdkJhciIsIkxheW91dCIsInByb3BzIiwiaGVhZGVyVGV4dCIsImluZGV4U2VsZWN0ZWQiLCJ1c2Vyc1NlbGVjdGVkIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEO3lCQUNiLGNBQUE7Z0JBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsa0JBQ0UsQUFBQyxnQ0FBSyxZQUFZLE1BQWxCLEFBQXdCO2dCQUF4QjtrQkFERixBQUNFLEFBQ0E7QUFEQTtzQkFDQSxBQUFDLGtDQUFPLFlBQVksTUFBcEIsQUFBMEI7Z0JBQTFCO2tCQUZGLEFBRUUsQUFDQTtBQURBO3NCQUNBLEFBQUMsa0NBQU8sZUFBZSxNQUFBLEFBQU0saUJBQTdCLEFBQThDLElBQUksZUFBZSxNQUFBLEFBQU0saUJBQXZFLEFBQXdGO2dCQUF4RjtrQkFIRixBQUdFLEFBQ0E7QUFEQTtzQkFDQSxjQUFBLFNBQUssSUFBTCxBQUFRLHVCQUFSOztnQkFBQTtrQkFBQSxBQUNBO0FBREE7cUJBQ0EsY0FBQSxTQUFLLFdBQUwsQUFBZSxxQkFBZjs7Z0JBQUE7a0JBQUEsQUFDUztBQURUO1dBTEYsQUFJRSxBQUNBLEFBQ2U7YUFOakI7U0FEYSxBQUNiO0FBQUE7QUFERixBQWtDQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvbWF0dGhld2Jhcm5kZW4vbm9kZXNpdGVzL25leHQtYXV0aGVudGljYXRlIn0=