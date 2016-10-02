import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div className="hero px2 pb2 sm-py0 sm-px0">
			  <div className="flex col-10 sm-col-7 flex-column sm-px3 hero-left justify-end sm-pb4">
			    <div className="col-12 sm-col-8 md-col-7 lg-col-6">
			      <h1 className="mt0 mb0 lift">Carol Dines</h1>
			      <hr className="hr-stubby mt1 mb2"/>
			      <h2 className="my0 lift regular">Actress/Audiobook Narrator living in Louisville, KY</h2>
			    </div>
			  </div>
			  <div className="flex xs-hide sm-col-5 hero-right"></div>
			</div>
		);
	}
}

export default Header;