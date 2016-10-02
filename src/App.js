import React, { Component } from 'react';
import './styles.scss';

class App extends Component {
  render() {
    return (
      <main>
        <div className="hero px2 pb2 sm-py0 sm-px0">
          <div className="flex col-10 sm-col-7 flex-column sm-px3 hero-left justify-end sm-pb4">
            <div className="max-width-4">
              <h1 className="mt0 mb0 lift">Carol Dines</h1>
              <hr className="hr-stubby mt1 mb2"/>
              <h2 className="my0 lift regular">Actress/Audiobook Narrator living in Louisville, KY</h2>
            </div>
          </div>
          <div className="flex xs-hide sm-col-5 hero-right"></div>
        </div>
        <div className="bio">
          <div className="px2 sm-px3 py2">
            <div className="clearfix">
              <div className="col-12 sm-col-7">
                <h3 className="h4 caps gray regular">About Carol</h3>
                <p className="h3">Raised in New York City, I received my degree in classical theater from Boston University. I spent many years performing in NY, Boston and in tours around the country. I have voiced dozens of Radio/TV commercials and worked in Radio for CBS News.
                For the past 20 years I have  been recording audiobooks for the Library of Congress for The National Library Service reading books of every genre including Romance,Suspense, Self-Help, Children's books, and teen distopian fantasy. You name the genre, I have recorded it.</p>
                <p className="h3"> I  work in a state of the art  recording studio in my home for  Audiobook recording. My audiobooks are available on Amazon, ITunes, Audible and Author's Republic.</p>
                <p className="h3">I am a proud member of SAG/AFTRA and a member of the Audiobook Producers Association of America (APA)</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
