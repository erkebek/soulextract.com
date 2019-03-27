import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '../tools/withStyles';
import { Link } from '../components/Link';
import { Secuence } from '../components/Secuence';
import { App } from '../components/App';
import circadianAlgorithmImage from '../images/circadian-algorithm.jpg';
import joshMullisImage from '../images/josh-mullis.jpg';

const styles = theme => ({
  root: {}
});

class About extends React.Component {
  static propTypes = {
    classes: PropTypes.object
  };

  render () {
    const { classes } = this.props;

    return (
      <App className={classes.root} itemActive='about'>
        <Secuence stagger>
          <h1>About Soul Extract</h1>
          <img src={joshMullisImage} alt="Josh Mullis's photo" />
          <p>Cerebral. Beautiful. Violent. Soul Extract taps into a wealth of human emotions and experiences to generate a listening space that is as intense and unpredictable as life itself. The highly personal inspiration for Soul Extract’s creations gives every song an invigorating level of creative clarity, and the artist’s willingness to smash through genre barriers puts him at the forefront of modern music.</p>
          <p>Although Soul Extract’s stylistic approach fits within the broad scope of electronic rock, labels can’t begin to describe the exploratory, borderline progressive nature of the songs themselves. Josh Mullis, the architect behind Soul Extract’s elaborate compositions, brings a deconstructive mindset to his craft, tearing apart genres and fusing their most compelling elements back together to build calculated and highly detailed tracks.</p>
          <img src={circadianAlgorithmImage} alt='Soul Extract Circadian Algorithm album' />
          <p>This analytical approach to Soul Extract began to take shape in 2013, and after years spent synthesizing the sounds of metal, electronic, and orchestral music, the artist unleashed his fiery debut album, <em>Circadian Algorithm</em>. Loaded wall-to-wall with emotive vocals and explosive instrumental sections, the album has laid the foundation for a developing career with an upward trajectory.</p>
          <p>Mullis’ passion for music began at a young age, and he has traditionally pulled from deeply personal events for his creative stimulus. Finding escape from a family struggles by picking up a guitar as a teenager, Mullis discovered those early creative efforts were able to carry him through unpredictable times. As an adult, a motivating force for his music rests within humanitarian endeavors, as Mullis donates proceeds from Soul Extract to New Day Foster Home (<Link href='http://www.newdayfosterhome.com' target='newdayfosterhome'>www.newdayfosterhome.com</Link>), a charity that supported the health of his adopted daughter at an early age.</p>
          <p>For Mullis, music is an indescribable force capable of sparking intense emotion, and this force is the essence of an artist in its purest form. As the project name suggests, Soul Extract is Josh Mullis’ unaltered expression of himself, and his passionate approach to songwriting shines through on every track he produces.</p>
        </Secuence>
      </App>
    );
  }
}

export default withStyles(styles)(About);
