import React, { Component } from 'react';

class Header extends Component {
	render() {
		return(
			<div className="hero px2 pb2 sm-py0 sm-px0">
				<div className="clearfix">
					<div className="col col-10 sm-col-7 hero-left sm-pb4">
					  <div className="col-12 sm-col-8 md-col-7 lg-col-8">
					    <h1 className="mt0 mb0 lift">Carol Dines</h1>
					    <hr className="hr-stubby mt1 mb2"/>
					    <h2 className="my0 lift regular">Actress/Audiobook Narrator</h2>
					    <a className="fancy-link h3 text-decoration-none" href="mailto:voicebycarol@gmail.com">voicebycarol@gmail.com</a>
					  </div>
					</div>
					<div className="col xs-hide sm-col-5 hero-right"></div>
				</div>
			</div>
		);
	}
}

export default Header;