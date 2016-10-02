import React, { Component } from 'react';
import './styles.scss';
import Header from './Header.js'
import WorkSample from './WorkSample.js';
import paperLoveClip from './paper_love.mp3';

class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <div className="bio">
          <div className="px2 sm-px3 py2">
            <div className="clearfix">
              <div className="col col-12 sm-col-7 sm-pr4">
                <h3 className="h4 caps gray regular">About Carol</h3>
                <hr className="hr-stubby mt1 mb3 faded"/>
                <p className="h3">Raised in New York City, I received my degree in classical theater from Boston University. I spent many years performing in NY, Boston and in tours around the country. I have voiced dozens of Radio/TV commercials and worked in Radio for CBS News.
                For the past 20 years I have  been recording audiobooks for the Library of Congress for The National Library Service reading books of every genre including Romance,Suspense, Self-Help, Children's books, and teen distopian fantasy. You name the genre, I have recorded it.</p>
                <p className="h3"> I  work in a state of the art  recording studio in my home for  Audiobook recording. My audiobooks are available on Amazon, ITunes, Audible and Author's Republic.</p>
                <p className="h3">I am a proud member of SAG/AFTRA and a member of the Audiobook Producers Association of America (APA)</p>
              </div>
              <div className="col col-12 sm-col-5 sm-pl2">
                <h3 className="h4 caps gray regular">Sample Work</h3>
                <hr className="hr-stubby mt1 mb3 faded"/>
                <WorkSample src={paperLoveClip} category={"Romance"}/>
                <WorkSample src={paperLoveClip} category={"Harlequin"}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
