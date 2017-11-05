// next.js
import React from "react";
import Link from "next/link";

// styles
import {
	Collapse,
	Navbar,
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
				<Navbar light expand="md">
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mx-auto" navbar>
							<NavItem>
								<Link href="/">
									<NavLink className="active-link" href="/">home</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<style global jsx>{`
	      	.active-link {
	      		text-transform: uppercase;
	      		font-weight: 600;
						color: #E85A7F !important;
	      	}
	    	`}</style>
			</div>
		);
	}
}
