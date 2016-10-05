import React, { Component } from 'react';
import './styles.scss';
import Header from './Header.js'
import WorkSample from './WorkSample.js';
import AmishRomance from './amish_romance.mp3';
import Romance from './romance.mp3';
import ArtisticFiction from './artistic_fiction.mp3';
import RomanticSuspense from './romantic_suspense.mp3';
import SelfHelp from './self_help.mp3';
import NonFiction from './non_fiction.mp3';

class App extends Component {
  render() {
    return (
      <main>
        <Header/>
        <div className="bio">
          <div className="p2 sm-p0">
            <hr className="xs-hide"/>
            <div className="clearfix">
              <div className="col col-12 sm-col-7 sm-pr4">
                <h3 className="h4 caps gray medium">About Carol</h3>
                <hr className="hr-stubby mt1 mb3 faded"/>
                <p className="h3">Raised in New York City, I received my degree in classical theater from Boston University. I spent many years performing in NY, Boston and in tours around the country. I have voiced dozens of Radio/TV commercials and worked in Radio for CBS News. For the past 20 years I have been recording audiobooks for the Library of Congress and for The National Library Service, reading books of every genre including Romance, Suspense, Self-Help, Children's books, and teen dystopian fantasy. You name the genre, I have recorded it.</p>
                <p className="h3">I  work in a state of the art  recording studio in my home for  Audiobook recording. My audiobooks are available on Amazon, ITunes, Audible and Author's Republic.</p>
                <p className="h3">I am a proud member of SAG/AFTRA and a member of the Audiobook Producers Association of America (APA)</p>
                <p className="h3">Contact me to discuss your project!</p>
                <a className="btn not-rounded bg-purple white" href="mailto:voicebycarol@gmail.com">voicebycarol@gmail.com</a>
                <hr/>
                <ul className="list-reset">
                  <li className="inline-block mrl">
                    <a href="commercial_resume.pdf" target="_blank" className="purple mb1 mr1">Commercial Résumé</a>
                  </li>
                  <li className="inline-block">
                    <a href="theatrical_resume.pdf" target="_blank" className="purple">Theatrical Résumé</a>
                  </li>
                </ul>
              </div>
              <div className="col col-12 sm-col-5 sm-pl2 mt2 sm-mt0">
                <h3 className="h4 caps gray medium">Sample Work</h3>
                <WorkSample src={AmishRomance} category={"Amish Romance"}/>
                <WorkSample src={Romance} category={"Romance"}/>
                <WorkSample src={ArtisticFiction} category={"Artistic Fiction"}/>
                <WorkSample src={RomanticSuspense} category={"Romantic Suspense"}/>
                <WorkSample src={SelfHelp} category={"Self Help"}/>
                <WorkSample src={NonFiction} category={"Non-Fiction"}/>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
