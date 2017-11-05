// next.js
import Head from "next/head";

// components
import Header from "../components/Header";

// utilities
import Headroom from "react-headroom";

// styles
import bootstrap from "bootstrap/dist/css/bootstrap.css";
import fonts from "../static/fonts/fonts.css"

// fonts
import light from '../static/fonts/akzidenz-grotesk-light.otf';
import regular from '../static/fonts/akzidenz-grotesk-regular.otf';
import italic from '../static/fonts/akzidenz-grotesk-italic.otf';
import bold from '../static/fonts/akzidenz-grotesk-bold.otf';
import superBold from '../static/fonts/akzidenz-grotesk-super.otf';

const layoutStyle = {
	margin: 10,
	padding: 10
};

const Layout = props => (
	<div>
		<Head>
			<title>riceapps</title>
		</Head>
		<Headroom>
			<Header />
		</Headroom>
		<div style={layoutStyle}>{props.children}</div>
		<style jsx global>
			{`
				html, body {
					font-family: 'Berthold Akzidenz Grotesk BE' !important;
					color: #fff !important;
					background-color: #000 !important;
					background: #000 !important;
				}
			`}
		</style>
		<style global jsx>
			{bootstrap}
		</style>
	</div>
);

export default Layout;
