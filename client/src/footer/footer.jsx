import React from 'react';
import '../App.css';
import reactLogo from '../static/vectors/react_logo.svg';
import universityOfMichiganLogoSmall
  from '../static/vectors/university_of_michigan_logo_small.svg';
import Moment from 'react-moment';
import {Typography, Link, Tooltip} from '@material-ui/core';
import timestamp from '../commit_timestamp.js';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
const fetch = require('node-fetch');

const styles = {
  reactLogo: {
    animation: `react-logo-spin infinite 1.8s linear`,
    height: '50px',
    width: '50px',
    pointerEvents: 'none',
  },
  iconBar: {
    'display': 'flex',
    'flexDirection': 'row',
    'listStyle': 'none',
    'margin': '24px',
    'flexWrap': 'wrap',
    'justifyContent': 'center',
    '& a': {
      'textAlign': 'center',
      'transition': 'all 0.3s ease',
      'color': 'white',
      'fontSize': '20px',
      'height': '64px',
      'width': '48px',
      'padding': '16px',
      '&:hover': {
        backgroundColor: 'darkgrey',
      },
    },
  },
  facebook: {
    background: '#3b5998',
    color: 'black',
    lineHeight: '0px',
    fontSize: '0px',
  },
  linkedin: {
    background: '#007bb5',
    color: 'white',
  },
  youtube: {
    background: '#b00',
    color: 'white',
  },
  instagram: {
    background: '#125688',
    color: 'white',
  },
  github: {
    background: '#000',
    color: 'white',
  },
  stackOverflow: {
    background: '#f48024',
    color: 'white',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '64px',
    marginBottom: '24px',
    justifyContent: 'center',
  },
  logoDefault: {
    margin: '8px',
  },
  errorMessageRoot: {
    margin: '16px',
  },
};

const DisplayError = (props) => {
  return (
    <Typography variant="h6" className={props.classes.errorMessageRoot} >
      Oops! Looks like my backend server is down. Please
      {' '}
      <Tooltip
        arrow
        title="Go to Contact page">
        <Link color="secondary" href="https://mark.fonte.com/contact">
        contact me
        </Link>
      </Tooltip>
      {' '}
      so I can fix the issue! Thanks!
    </Typography>
  );
};

DisplayError.propTypes = {
  classes: PropTypes.object.isRequired,
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {apiResponse: false, serverCrashed: false};
    this.checkForAPIHeartbeat = this.checkForAPIHeartbeat.bind(this);
  }

 abortController = new window.AbortController();

 checkForAPIHeartbeat() {
   const apiUrl = process.env.REACT_APP_API_URL + 'api_heartbeat';
   fetch(apiUrl, {method: 'HEAD', signal: this.abortController.signal})
       .then((res) => {
         if (res.status === 200) {
           let triggerReload = false;
           if (this.state.serverCrashed === true) {
             triggerReload = true; // back online! reload the page
           }
           this.setState({apiResponse: true, serverCrashed: false});
           if (triggerReload === true) window.location.reload();
         } else this.setState({apiResponse: false, serverCrashed: true});
       })
       .catch((err) => {
         if (err.name === 'AbortError' || err.name === 'TypeError') {
           return;
         }
         this.setState({apiResponse: false, serverCrashed: true});
         console.log(err);
       });
 }

 componentDidMount() {
   this.checkForAPIHeartbeat();
   const timeoutInterval = 45000; // check for API heartbeat every 45 seconds
   setInterval(
       function() {
         this.checkForAPIHeartbeat();
       }.bind(this),
       timeoutInterval
       , 1000);
 }

 componentWillUnmount() {
   clearInterval(1000);
   this.abortController.abort();
 }

 render() {
   const {classes} = this.props;
   const facebookLink = `https://www.facebook.com/mark.fonte.397`;
   const githubLink = `https://github.com/markfonte`;
   const linkedinLink = `https://linkedin.com/in/mark-fonte/`;
   const instagramLink = `https://www.instagram.com/mark_fonte21/`;
   const youtubeLink = `https://www.youtube.com/channel/UCziCrimzV0XM3qy8BJL_JjQ`;
   const websiteGithubLink = `https://github.com/markfonte/personal_website`;
   const suggestEditLink = `mailto:mark@fonte.com?subject=Website edit suggestion`;
   const stackOverflowLink = `https://stackoverflow.com/users/8266770/mark-fonte`;
   const travisCILink = `https://travis-ci.org/markfonte/personal_website`;
   const commitHistoryLink = `https://github.com/markfonte/personal_website/commits/master`;
   const updatedDate = timestamp;
   return (
     <footer>
       <div className={classes.footerContainer}>
         <div className={classes.iconBar}>
           <Tooltip title="Go to Facebook" arrow>
             <a href={facebookLink} className={classes.facebook} alt="Facebook Link">
               <i className="fa fa-facebook" alt="Facebook Link" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
           <Tooltip title="Go to StackOverflow" arrow>
             <a href={stackOverflowLink} className={classes.stackOverflow} alt="Stack Overflow Link">
               <i className="fa fa-stack-overflow" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
           <Tooltip title="Go to GitHub" arrow>
             <a href={githubLink} className={classes.github} alt="GitHub Link">
               <i className="fa fa-github" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
           <Tooltip title="Go to LinkedIn" arrow>
             <a href={linkedinLink} className={classes.linkedin} alt="LinkedIn Link">
               <i className="fa fa-linkedin" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
           <Tooltip title="Go to Instagram" arrow>
             <a href={instagramLink} className={classes.instagram} alt="Instagram Link">
               <i className="fa fa-instagram" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
           <Tooltip title="Go to YouTube" arrow>
             <a href={youtubeLink} className={classes.youtube} alt="YouTube Link">
               <i className="fa fa-youtube" />
               <div style={{color: 'rgba(0,0,0,0)', fontSize: 0, lineHeight: 0}}>
                 For SEO
               </div>
             </a>
           </Tooltip>
         </div>
         <div>
           {this.state.apiResponse ?
              <img src={reactLogo} className={classes.reactLogo} alt="React logo" /> :
              <DisplayError classes={classes} />}
         </div>
         <div style={{margin: 4}}>
           <Typography variant="caption" color="textSecondary" >
              Last updated
             {' '}
             <Tooltip
               arrow
               placement="right"
               title="Go to most recent commit on GitHub">
               <Link color="secondary" href={commitHistoryLink}>
                 <Moment parse="MM/DD/YYYY HH mm SS" fromNow>
                   {updatedDate}
                 </Moment>
               </Link>
             </Tooltip>
           </Typography>
         </div>
         <div style={{margin: 4}}>
           <Tooltip
             arrow
             placement="right"
             title="Go to source code on GitHub">
             <Link
               variant="caption"
               color="textSecondary"
               href={websiteGithubLink}
             >
              view source on github
             </Link>
           </Tooltip>
         </div>
         <div style={{margin: 4}}>
           <Tooltip
             arrow
             placement="right"
             title="Go to build history on Travis CI">
             <Link
               variant="caption"
               color="textSecondary"
               href={travisCILink}
             >
                 view build history
             </Link>
           </Tooltip>
         </div>
         <div style={{margin: 4}}>
           <Tooltip
             arrow
             placement="right"
             title="Email me with website edit suggestions!">
             <Link
               variant="caption"
               color="textSecondary"
               href={suggestEditLink}
             >
              suggest an edit
             </Link>
           </Tooltip>
         </div>
         {/* go blue */}
         <div>
           <Tooltip
             arrow
             placement="right"
             title="Go blue!!">
             <img
               src={universityOfMichiganLogoSmall}
               width="25"
               height="25"
               className={classes.logoDefault}
               alt="University of Michigan logo small"
             />
           </Tooltip>
         </div>
       </div>
     </footer>
   );
 }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
