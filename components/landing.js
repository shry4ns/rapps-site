// utilities
import ReactSVG from 'react-svg';
import MediaQuery from 'react-responsive';

const Landing = () => (
	<div>
		<MediaQuery query="(max-width: 768px)">
			<ReactSVG
	    	path="../static/img/logo-light.svg"
	    	className="landing-logo-mobile"
	    />
	  </MediaQuery>
	  <MediaQuery query="(min-width: 769px)">
			<ReactSVG
	    	path="../static/img/logo-light.svg"
	    	className="landing-logo"
	    />
	  </MediaQuery>
		<style global jsx>{`
	      .landing-logo {
	      	max-height: 35%;
	      	max-width: 35%;
	      	display: block;
	      	margin: auto;
	      }
	      .landing-logo-mobile {
	      	height: 45%;
	      	width: 45%;
	      	display: block;
	      	margin: auto;
	      }
	    `}</style>
	</div>
)

export default Landing
