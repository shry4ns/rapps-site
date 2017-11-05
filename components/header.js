// next.js
import React from "react";
import Link from "next/link";

// utilities
import ReactSVG from 'react-svg';
import MediaQuery from 'react-responsive';

// animate
import Anime from 'react-anime';

// styles
import {
	Collapse,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Nav,
	NavItem,
	NavLink
} from "reactstrap";

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div>
				<Navbar className="site-nav" dark sticky="top" expand="md">
					<MediaQuery query="(max-width: 768px)">
						<NavbarBrand href="/">
							<ReactSVG
					    	path="../static/img/logo-tri-light.svg"
					    	className="nav-logo-mobile"
					    />
						</NavbarBrand>
				  </MediaQuery>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mx-auto" navbar>
							<NavItem>
								<Link href="/">
									<NavLink className="active-link" href="/">home</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<NavLink className="inactive-link" href="/">about</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<NavLink className="inactive-link" href="/">projects</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<NavLink className="inactive-link" href="/">faq</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<NavLink className="inactive-link" href="/">apply</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link href="/">
									<NavLink className="inactive-link" href="/">contact</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<style global jsx>{`
					.site-nav {
						margin-bottom: 1em;
						background: #000 !important;
						background-color: #000 !important;
					}
					@media only screen and (min-width: 768px) {
						.site-nav {
							padding-top: 1em !important;
							padding-bottom: 1em !important;
						}
						.inactive-link:hover {
							transform: scale(1.4);
							-webkit-transform: scale(1.4);
							-moz-transform: scale(1.4);
							-ms-transform: scale(1.4);
						}
					}
					.nav-logo-mobile {
						height: 50px !important;
						width: 50px !important;
					}
	      	.active-link {
						font-size: 1.2em;
	      		font-weight: 600;
						color: #E85A7F !important;
						text-transform: uppercase;
						margin-left: 6px;
						margin-right: 6px;
						margin-top: 1px;
	      	}
					.inactive-link {
						font-size: 0.8em;
	      		font-weight: 300;
						color: #ffffff !important;
						text-transform: uppercase;
						margin-left: 6px;
						margin-right: 6px;
						margin-top: 4px;
						transition: all .2s ease-in-out;
	      	}
	    	`}</style>
			</div>
		);
	}
}
