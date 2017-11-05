"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/achalsrinivasan/Dropbox/code/riceapps/rapps-site/components/Header.js";
// next.js


// styles


var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header(props) {
		(0, _classCallCheck3.default)(this, Header);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

		_this.toggle = _this.toggle.bind(_this);
		_this.state = {
			isOpen: false
		};
		return _this;
	}

	(0, _createClass3.default)(Header, [{
		key: "toggle",
		value: function toggle() {
			this.setState({
				isOpen: !this.state.isOpen
			});
		}
	}, {
		key: "render",
		value: function render() {
			return _react2.default.createElement("div", {
				className: "jsx-510978083",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 30
				}
			}, _react2.default.createElement(_reactstrap.Navbar, { light: true, expand: "md", __source: {
					fileName: _jsxFileName,
					lineNumber: 31
				}
			}, _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle, __source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement(_reactstrap.Nav, { className: "mx-auto", navbar: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "active-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, "home")))))), _react2.default.createElement(_style2.default, {
				styleId: "510978083",
				css: ".active-link{text-transform:uppercase;font-weight:600;color:#E85A7F !important;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDdUIsQUFHbUMseUJBQ1QsZ0JBQ00seUJBQ3ZCIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hY2hhbHNyaW5pdmFzYW4vRHJvcGJveC9jb2RlL3JpY2VhcHBzL3JhcHBzLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBuZXh0LmpzXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtcblx0Q29sbGFwc2UsXG5cdE5hdmJhcixcblx0TmF2YmFyVG9nZ2xlcixcblx0TmF2LFxuXHROYXZJdGVtLFxuXHROYXZMaW5rXG59IGZyb20gXCJyZWFjdHN0cmFwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMudG9nZ2xlID0gdGhpcy50b2dnbGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0aXNPcGVuOiBmYWxzZVxuXHRcdH07XG5cdH1cblx0dG9nZ2xlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0aXNPcGVuOiAhdGhpcy5zdGF0ZS5pc09wZW5cblx0XHR9KTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxOYXZiYXIgbGlnaHQgZXhwYW5kPVwibWRcIj5cblx0XHRcdFx0XHQ8TmF2YmFyVG9nZ2xlciBvbkNsaWNrPXt0aGlzLnRvZ2dsZX0gLz5cblx0XHRcdFx0XHQ8Q29sbGFwc2UgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn0gbmF2YmFyPlxuXHRcdFx0XHRcdFx0PE5hdiBjbGFzc05hbWU9XCJteC1hdXRvXCIgbmF2YmFyPlxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiYWN0aXZlLWxpbmtcIiBocmVmPVwiL1wiPmhvbWU8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0XHQ8L0NvbGxhcHNlPlxuXHRcdFx0XHQ8L05hdmJhcj5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2Bcblx0ICAgICAgXHQuYWN0aXZlLWxpbmsge1xuXHQgICAgICBcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0ICAgICAgXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI0U4NUE3RiAhaW1wb3J0YW50O1xuXHQgICAgICBcdH1cblx0ICAgIFx0YH08L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuIl19 */\n/*@ sourceURL=components/Header.js */"
			}));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkNvbGxhcHNlIiwiTmF2YmFyIiwiTmF2YmFyVG9nZ2xlciIsIk5hdiIsIk5hdkl0ZW0iLCJOYXZMaW5rIiwiSGVhZGVyIiwicHJvcHMiLCJ0b2dnbGUiLCJiaW5kIiwic3RhdGUiLCJpc09wZW4iLCJzZXRTdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFHUCxBQUNDLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFYRDs7O0FBSUE7OztJLEFBVXFCO2lDQUNwQjs7aUJBQUEsQUFBWSxPQUFPO3NDQUFBOztvSUFBQSxBQUNaLEFBQ047O1FBQUEsQUFBSyxTQUFTLE1BQUEsQUFBSyxPQUFMLEFBQVksS0FBMUIsQUFDQTtRQUFBLEFBQUs7V0FIYSxBQUdsQixBQUFhLEFBQ0o7QUFESSxBQUNaO1NBRUQ7Ozs7OzJCQUNRLEFBQ1I7UUFBQSxBQUFLO1lBQ0ksQ0FBQyxLQUFBLEFBQUssTUFEZixBQUFjLEFBQ08sQUFFckI7QUFIYyxBQUNiOzs7OzJCQUdPLEFBQ1I7MEJBQ0MsY0FBQTtlQUFBOztlQUFBO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsQUFBQyxvQ0FBTyxPQUFSLE1BQWMsUUFBZCxBQUFxQjtlQUFyQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQywyQ0FBYyxTQUFTLEtBQXhCLEFBQTZCO2VBQTdCO2lCQURELEFBQ0MsQUFDQTtBQURBO3VCQUNBLEFBQUMsc0NBQVMsUUFBUSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsUUFBUSxRQUFyQztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLGlDQUFJLFdBQUwsQUFBZSxXQUFVLFFBQXpCO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxxQ0FBUSxXQUFULEFBQW1CLGVBQWMsTUFBakMsQUFBc0M7ZUFBdEM7aUJBQUE7QUFBQTtNQVBOLEFBQ0MsQUFFQyxBQUNDLEFBQ0MsQUFDQyxBQUNDO2FBUE47U0FERCxBQUNDLEFBc0JEO0FBdEJDOzs7OztFQWZpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsc3Jpbml2YXNhbi9Ecm9wYm94L2NvZGUvcmljZWFwcHMvcmFwcHMtc2l0ZSJ9