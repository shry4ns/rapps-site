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
				className: "jsx-4183220556",
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
				styleId: "4183220556",
				css: ".site-nav{margin-bottom:1em;background:#000 !important;background-color:#000 !important;}@media only screen and (min-width:768px){.site-nav{padding-top:1em !important;padding-bottom:1em !important;}}.nav-logo-mobile{height:50px !important;width:50px !important;}.active-link{font-size:1.2em;font-weight:600;color:#E85A7F !important;text-transform:uppercase;margin-left:6px;margin-right:6px;}.inactive-link{font-size:0.8em;font-weight:300;color:#ffffff !important;text-transform:uppercase;margin-left:6px;margin-right:6px;margin-top:4px;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;}.inactive-link:hover{-webkit-transform:scale(1.4);-ms-transform:scale(1.4);transform:scale(1.4);-webkit-transform:scale(1.4);-moz-transform:scale(1.4);-ms-transform:scale(1.4);}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGdUIsQUFHeUIsQUFNVSxBQUtMLEFBSVAsQUFRQSxBQVVLLGdCQWpCRixBQVFBLEVBdkJRLEtBV0wsSUFMUyxLQVVOLEFBUUEsYUF2QlEsQUFXbEMsWUFMQyxBQVV5QixBQVFBLGtCQVFJLEdBL0I5QixJQWdCaUIsQUFRQSxnQkFQQyxBQVFBLE1BT1MsV0FkeEIsQUFRYSxlQUNnQixBQU1OLHlCQUMxQiw2Q0FORyIsImZpbGUiOiJjb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYWNoYWxzcmluaXZhc2FuL0Ryb3Bib3gvY29kZS9yaWNlYXBwcy9yYXBwcy1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbmV4dC5qc1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG4vLyB1dGlsaXRpZXNcbmltcG9ydCBSZWFjdFNWRyBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IE1lZGlhUXVlcnkgZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XG5cbi8vIHN0eWxlc1xuaW1wb3J0IHtcblx0Q29sbGFwc2UsXG5cdE5hdmJhcixcblx0TmF2YmFyQnJhbmQsXG5cdE5hdmJhclRvZ2dsZXIsXG5cdE5hdixcblx0TmF2SXRlbSxcblx0TmF2TGlua1xufSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0XHR0aGlzLnRvZ2dsZSA9IHRoaXMudG9nZ2xlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGlzT3BlbjogZmFsc2Vcblx0XHR9O1xuXHR9XG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGlzT3BlbjogIXRoaXMuc3RhdGUuaXNPcGVuXG5cdFx0fSk7XG5cdH1cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8TmF2YmFyIGNsYXNzTmFtZT1cInNpdGUtbmF2XCIgZGFyayBzdGlja3k9XCJ0b3BcIiBleHBhbmQ9XCJtZFwiPlxuXHRcdFx0XHRcdDxNZWRpYVF1ZXJ5IHF1ZXJ5PVwiKG1heC13aWR0aDogNzY4cHgpXCI+XG5cdFx0XHRcdFx0XHQ8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0ICAgIFx0cGF0aD1cIi4uL3N0YXRpYy9pbWcvbG9nby10cmktbGlnaHQuc3ZnXCJcblx0XHRcdFx0XHQgICAgXHRjbGFzc05hbWU9XCJuYXYtbG9nby1tb2JpbGVcIlxuXHRcdFx0XHRcdCAgICAvPlxuXHRcdFx0XHRcdFx0PC9OYXZiYXJCcmFuZD5cblx0XHRcdFx0ICA8L01lZGlhUXVlcnk+XG5cdFx0XHRcdFx0PE5hdmJhclRvZ2dsZXIgb25DbGljaz17dGhpcy50b2dnbGV9IC8+XG5cdFx0XHRcdFx0PENvbGxhcHNlIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IG5hdmJhcj5cblx0XHRcdFx0XHRcdDxOYXYgY2xhc3NOYW1lPVwibXgtYXV0b1wiIG5hdmJhcj5cblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImFjdGl2ZS1saW5rXCIgaHJlZj1cIi9cIj5ob21lPC9OYXZMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaW5hY3RpdmUtbGlua1wiIGhyZWY9XCIvXCI+YWJvdXQ8L05hdkxpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHQ8L05hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdDxOYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9XCIvXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8TmF2TGluayBjbGFzc05hbWU9XCJpbmFjdGl2ZS1saW5rXCIgaHJlZj1cIi9cIj5wcm9qZWN0czwvTmF2TGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImluYWN0aXZlLWxpbmtcIiBocmVmPVwiL1wiPmZhcTwvTmF2TGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0PE5hdkl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxOYXZMaW5rIGNsYXNzTmFtZT1cImluYWN0aXZlLWxpbmtcIiBocmVmPVwiL1wiPmFwcGx5PC9OYXZMaW5rPlxuXHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0PC9OYXZJdGVtPlxuXHRcdFx0XHRcdFx0XHQ8TmF2SXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PE5hdkxpbmsgY2xhc3NOYW1lPVwiaW5hY3RpdmUtbGlua1wiIGhyZWY9XCIvXCI+Y29udGFjdDwvTmF2TGluaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdDwvTmF2SXRlbT5cblx0XHRcdFx0XHRcdDwvTmF2PlxuXHRcdFx0XHRcdDwvQ29sbGFwc2U+XG5cdFx0XHRcdDwvTmF2YmFyPlxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD57YFxuXHRcdFx0XHRcdC5zaXRlLW5hdiB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAxZW07XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0XHRcdFx0XHRcdC5zaXRlLW5hdiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxZW0gIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDFlbSAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQubmF2LWxvZ28tbW9iaWxlIHtcblx0XHRcdFx0XHRcdGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRcdFx0d2lkdGg6IDUwcHggIWltcG9ydGFudDtcblx0XHRcdFx0XHR9XG5cdCAgICAgIFx0LmFjdGl2ZS1saW5rIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdCAgICAgIFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNFODVBN0YgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XG5cdCAgICAgIFx0fVxuXHRcdFx0XHRcdC5pbmFjdGl2ZS1saW5rIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdCAgICAgIFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdFx0Y29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcblx0XHRcdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogNnB4O1xuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XG5cdFx0XHRcdFx0XHRtYXJnaW4tdG9wOiA0cHg7XG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuXHQgICAgICBcdH1cblx0XHRcdFx0XHQuaW5hY3RpdmUtbGluazpob3ZlciB7XG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuNCk7XG5cdFx0XHRcdFx0XHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS40KTtcblx0XHRcdFx0XHRcdC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuXHRcdFx0XHRcdFx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMS40KTtcblx0XHRcdFx0XHR9XG5cdCAgICBcdGB9PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
			}));
		}
	}]);

	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIlJlYWN0U1ZHIiwiTWVkaWFRdWVyeSIsIkNvbGxhcHNlIiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXZiYXJUb2dnbGVyIiwiTmF2IiwiTmF2SXRlbSIsIk5hdkxpbmsiLCJIZWFkZXIiLCJwcm9wcyIsInRvZ2dsZSIsImJpbmQiLCJzdGF0ZSIsImlzT3BlbiIsInNldFN0YXRlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUdQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBR1AsQUFDQyxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7QUFoQkQ7OztBQUlBOzs7QUFJQTs7O0ksQUFXcUI7aUNBQ3BCOztpQkFBQSxBQUFZLE9BQU87c0NBQUE7O29JQUFBLEFBQ1osQUFDTjs7UUFBQSxBQUFLLFNBQVMsTUFBQSxBQUFLLE9BQUwsQUFBWSxLQUExQixBQUNBO1FBQUEsQUFBSztXQUhhLEFBR2xCLEFBQWEsQUFDSjtBQURJLEFBQ1o7U0FFRDs7Ozs7MkJBQ1EsQUFDUjtRQUFBLEFBQUs7WUFDSSxDQUFDLEtBQUEsQUFBSyxNQURmLEFBQWMsQUFDTyxBQUVyQjtBQUhjLEFBQ2I7Ozs7MkJBR08sQUFDUjswQkFDQyxjQUFBO2VBQUE7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsSUFBQSxrQkFDQyxBQUFDLG9DQUFPLFdBQVIsQUFBa0IsWUFBVyxNQUE3QixNQUFrQyxRQUFsQyxBQUF5QyxPQUFNLFFBQS9DLEFBQXNEO2VBQXREO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLDJDQUFXLE9BQVosQUFBa0I7ZUFBbEI7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMseUNBQVksTUFBYixBQUFrQjtlQUFsQjtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQztVQUFELEFBQ1EsQUFDTDtlQUZILEFBRWE7O2VBRmI7aUJBSEgsQUFDQyxBQUNDLEFBQ0MsQUFNRjtBQU5FO0FBQ0cseUJBS0wsQUFBQywyQ0FBYyxTQUFTLEtBQXhCLEFBQTZCO2VBQTdCO2lCQVRELEFBU0MsQUFDQTtBQURBO3VCQUNBLEFBQUMsc0NBQVMsUUFBUSxLQUFBLEFBQUssTUFBdkIsQUFBNkIsUUFBUSxRQUFyQztlQUFBO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLGlDQUFJLFdBQUwsQUFBZSxXQUFVLFFBQXpCO2VBQUE7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxxQ0FBUSxXQUFULEFBQW1CLGVBQWMsTUFBakMsQUFBc0M7ZUFBdEM7aUJBQUE7QUFBQTtNQUhILEFBQ0MsQUFDQyxBQUNDLEFBR0YsMkJBQUEsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxzQkFDQyxBQUFDLGdDQUFLLE1BQU4sQUFBVztlQUFYO2lCQUFBLEFBQ0M7QUFERDtzQkFDQyxBQUFDLHFDQUFRLFdBQVQsQUFBbUIsaUJBQWdCLE1BQW5DLEFBQXdDO2VBQXhDO2lCQUFBO0FBQUE7TUFSSCxBQU1DLEFBQ0MsQUFDQyxBQUdGLDRCQUFBLEFBQUM7O2VBQUQ7aUJBQUEsQUFDQztBQUREO0FBQUEsc0JBQ0MsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7ZUFBWDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQyxxQ0FBUSxXQUFULEFBQW1CLGlCQUFnQixNQUFuQyxBQUF3QztlQUF4QztpQkFBQTtBQUFBO01BYkgsQUFXQyxBQUNDLEFBQ0MsQUFHRiwrQkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQWxCSCxBQWdCQyxBQUNDLEFBQ0MsQUFHRiwwQkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQXZCSCxBQXFCQyxBQUNDLEFBQ0MsQUFHRiw0QkFBQSxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLHNCQUNDLEFBQUMsZ0NBQUssTUFBTixBQUFXO2VBQVg7aUJBQUEsQUFDQztBQUREO3NCQUNDLEFBQUMscUNBQVEsV0FBVCxBQUFtQixpQkFBZ0IsTUFBbkMsQUFBd0M7ZUFBeEM7aUJBQUE7QUFBQTtNQXhDTixBQUNDLEFBVUMsQUFDQyxBQTBCQyxBQUNDLEFBQ0M7YUF4Q047U0FERCxBQUNDLEFBeUZEO0FBekZDOzs7OztFQWZpQyxnQkFBTSxBOztrQkFBckIsQSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FjaGFsc3Jpbml2YXNhbi9Ecm9wYm94L2NvZGUvcmljZWFwcHMvcmFwcHMtc2l0ZSJ9