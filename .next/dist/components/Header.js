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

var _reactSvg = require("react-svg");

var _reactSvg2 = _interopRequireDefault(_reactSvg);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/achalsrinivasan/Dropbox/code/riceapps/rapps-site/components/Header.js";
// next.js


// utilities


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
				className: "jsx-2884207567",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(_reactstrap.Navbar, { className: "site-nav", dark: true, sticky: "top", expand: "md", __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(_reactResponsive2.default, { query: "(max-width: 768px)", __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_reactstrap.NavbarBrand, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}, _react2.default.createElement(_reactSvg2.default, {
				path: "../static/img/logo-tri-light.svg",
				className: "nav-logo-mobile",
				__source: {
					fileName: _jsxFileName,
					lineNumber: 39
				}
			}))), _react2.default.createElement(_reactstrap.NavbarToggler, { onClick: this.toggle, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}), _react2.default.createElement(_reactstrap.Collapse, { isOpen: this.state.isOpen, navbar: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, _react2.default.createElement(_reactstrap.Nav, { className: "mx-auto", navbar: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "active-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, "home"))), _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "inactive-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, "about"))), _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "inactive-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 60
				}
			}, "projects"))), _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 64
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "inactive-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, "faq"))), _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 68
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 69
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "inactive-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 70
				}
			}, "apply"))), _react2.default.createElement(_reactstrap.NavItem, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement(_link2.default, { href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, _react2.default.createElement(_reactstrap.NavLink, { className: "inactive-link", href: "/", __source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, "contact")))))), _react2.default.createElement(_style2.default, {
				styleId: "2884207567",
				css: ".site-nav{margin-bottom:1em;background:#000 !important;background-color:#000 !important;}@media only screen and (min-width:768px){.site-nav{padding-top:1em !important;padding-bottom:1em !important;}.inactive-link:hover{-webkit-transform:scale(1.4);-ms-transform:scale(1.4);transform:scale(1.4);-webkit-transform:scale(1.4);-moz-transform:scale(1.4);-ms-transform:scale(1.4);}}.nav-logo-mobile{height:50px !important;width:50px !important;}.active-link{font-size:1.2em;font-weight:600;color:#E85A7F !important;text-transform:uppercase;margin-left:6px;margin-right:6px;}.inactive-link{font-size:0.8em;font-weight:300;color:#ffffff !important;text-transform:uppercase;margin-left:6px;margin-right:6px;margin-top:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGdUIsQUFHeUIsQUFNVSxBQUlOLEFBT0MsQUFJUCxBQVFBLGdCQVBHLEFBUUEsRUE3QlEsS0FpQkwsSUFYUyxLQWdCTixBQVFBLGFBN0JRLEFBaUJsQyxZQVhDLEFBZ0J5QixBQVFBLGtCQXJCSyxHQVIvQixJQXNCaUIsQUFRQSxnQkFQQyxBQVFBLE1BdEJVLFdBZXpCLEFBUWEsZUF0QlcsQUF1QksseUJBdEIvQiw2Q0F1QkUiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsc3Jpbml2YXNhbi9Ecm9wYm94L2NvZGUvcmljZWFwcHMvcmFwcHMtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5leHQuanNcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuLy8gdXRpbGl0aWVzXG5pbXBvcnQgUmVhY3RTVkcgZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCBNZWRpYVF1ZXJ5IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xuXG4vLyBzdHlsZXNcbmltcG9ydCB7XG5cdENvbGxhcHNlLFxuXHROYXZiYXIsXG5cdE5hdmJhckJyYW5kLFxuXHROYXZiYXJUb2dnbGVyLFxuXHROYXYsXG5cdE5hdkl0ZW0sXG5cdE5hdkxpbmtcbn0gZnJvbSBcInJlYWN0c3RyYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy50b2dnbGUgPSB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRpc09wZW46IGZhbHNlXG5cdFx0fTtcblx0fVxuXHR0b2dnbGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxuXHRcdH0pO1xuXHR9XG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PE5hdmJhciBjbGFzc05hbWU9XCJzaXRlLW5hdlwiIGRhcmsgc3RpY2t5PVwidG9wXCIgZXhwYW5kPVwibWRcIj5cblx0XHRcdFx0XHQ8TWVkaWFRdWVyeSBxdWVyeT1cIihtYXgtd2lkdGg6IDc2OHB4KVwiPlxuXHRcdFx0XHRcdFx0PE5hdmJhckJyYW5kIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdCAgICBcdHBhdGg9XCIuLi9zdGF0aWMvaW1nL2xvZ28tdHJpLWxpZ2h0LnN2Z1wiXG5cdFx0XHRcdFx0ICAgIFx0Y2xhc3NOYW1lPVwibmF2LWxvZ28tbW9iaWxlXCJcblx0XHRcdFx0XHQgICAgLz5cblx0XHRcdFx0XHRcdDwvTmF2YmFyQnJhbmQ+XG5cdFx0XHRcdCAgPC9NZWRpYVF1ZXJ5PlxuXHRcdFx0XHRcdDxOYXZiYXJUb2dnbGVyIG9uQ2xpY2s9e3RoaXMudG9nZ2xlfSAvPlxuXHRcdFx0XHRcdDxDb2xsYXBzZSBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufSBuYXZiYXI+XG5cdFx0XHRcdFx0XHQ8TmF2IGNsYXNzTmFtZT1cIm14LWF1dG9cIiBuYXZiYXI+XG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJhY3RpdmUtbGlua1wiIGhyZWY9XCIvXCI+aG9tZTwvTmF2TGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImluYWN0aXZlLWxpbmtcIiBocmVmPVwiL1wiPmFib3V0PC9OYXZMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaW5hY3RpdmUtbGlua1wiIGhyZWY9XCIvXCI+cHJvamVjdHM8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJpbmFjdGl2ZS1saW5rXCIgaHJlZj1cIi9cIj5mYXE8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJpbmFjdGl2ZS1saW5rXCIgaHJlZj1cIi9cIj5hcHBseTwvTmF2TGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImluYWN0aXZlLWxpbmtcIiBocmVmPVwiL1wiPmNvbnRhY3Q8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdFx0XHQ8L05hdj5cblx0XHRcdFx0XHQ8L0NvbGxhcHNlPlxuXHRcdFx0XHQ8L05hdmJhcj5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+e2Bcblx0XHRcdFx0XHQuc2l0ZS1uYXYge1xuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMWVtO1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG5cdFx0XHRcdFx0XHQuc2l0ZS1uYXYge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMWVtICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAxZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC5pbmFjdGl2ZS1saW5rOmhvdmVyIHtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuXHRcdFx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcblx0XHRcdFx0XHRcdFx0LW1vei10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG5cdFx0XHRcdFx0XHRcdC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5uYXYtbG9nby1tb2JpbGUge1xuXHRcdFx0XHRcdFx0aGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHR3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdH1cblx0ICAgICAgXHQuYWN0aXZlLWxpbmsge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0ICAgICAgXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI0U4NUE3RiAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA2cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDZweDtcblx0ICAgICAgXHR9XG5cdFx0XHRcdFx0LmluYWN0aXZlLWxpbmsge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0ICAgICAgXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiA2cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDZweDtcblx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDRweDtcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XG5cdCAgICAgIFx0fVxuXHQgICAgXHRgfTwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG4iXX0= */\n/*@ sourceURL=components/Header.js */"
			}));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJlYWN0U1ZHIiwiTWVkaWFRdWVyeSIsIkNvbGxhcHNlIiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXZiYXJUb2dnbGVyIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJIZWFkZXIiLCJwcm9wcyIsInRvZ2dsZSIsImJpbmQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBR1AsQUFDQyxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFoQkQ7OztBQUlBOzs7QUFJQTs7O0ksQUFXcUI7aUNBQ3BCOztpQkFBQSxBQUFZLE9BQU87c0NBQUE7O29JQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQUExQixBQUNBO1FBQUEsQUFBSztXQUhhLEFBR2xCLEFBQWEsQUFDSjtBQURJLEFBQ1o7U0FFRDs7Ozs7MkJBQ1EsQUFDUjtRQUFBLEFBQUs7WUFDSSxDQUFDLEtBQUEsQUFBSyxNQURmLEFBQWMsQUFDTyxBQUVyQjtBQUhjLEFBQ2I7Ozs7MkJBR08sQUFDUjswQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLG9DQUFPLFdBQVIsQUFBa0IsWUFBVyxNQUE3QixNQUFrQyxRQUFsQyxBQUF5QyxPQUFNLFFBQS9DLEFBQXNEO2VBQXREO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDJDQUFXLE9BQVosQUFBa0I7ZUFBbEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMseUNBQVksTUFBYixBQUFrQjtlQUFsQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQztVQUFELEFBQ1EsQUFDTDtlQUZILEFBRWE7O2VBRmI7aUJBSEgsQUFDQyxBQUNDLEFBQ0MsQUFNRjtBQU5FO0FBQ0cseUJBS0wsQUFBQywyQ0FBYyxTQUFTLEtBQXhCLEFBQTZCO2VBQTdCO2lCQVRELEFBU0MsQUFDQTtBQURBO3VCQUNBLEFBQUMsc0NBQVMsUUFBUSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsUUFBUSxRQUFyQztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLGlDQUFJLFdBQUwsQUFBZSxXQUFVLFFBQXpCO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxxQ0FBUSxXQUFULEFBQW1CLGVBQWMsTUFBakMsQUFBc0M7ZUFBdEM7aUJBQUE7QUFBQTtNQUhILEFBQ0MsQUFDQyxBQUNDLEFBR0YsMkJBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLGdDQUFLLE1BQU4sQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLHFDQUFRLFdBQVQsQUFBbUIsaUJBQWdCLE1BQW5DLEFBQXdDO2VBQXhDO2lCQUFBO0FBQUE7TUFSSCxBQU1DLEFBQ0MsQUFDQyxBQUdGLDRCQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxxQ0FBUSxXQUFULEFBQW1CLGlCQUFnQixNQUFuQyxBQUF3QztlQUF4QztpQkFBQTtBQUFBO01BYkgsQUFXQyxBQUNDLEFBQ0MsQUFHRiwrQkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQWxCSCxBQWdCQyxBQUNDLEFBQ0MsQUFHRiwwQkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQXZCSCxBQXFCQyxBQUNDLEFBQ0MsQUFHRiw0QkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQXhDTixBQUNDLEFBVUMsQUFDQyxBQTBCQyxBQUNDLEFBQ0M7YUF4Q047U0FERCxBQUNDLEFBeUZEO0FBekZDOzs7OztFQWZpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsc3Jpbml2YXNhbi9Ecm9wYm94L2NvZGUvcmljZWFwcHMvcmFwcHMtc2l0ZSJ9