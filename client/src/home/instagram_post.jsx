import React from 'react';
import {withStyles} from '@material-ui/styles';
import PropTypes from 'prop-types';
const styles = {

};

class InstagramPost extends React.Component {
  render() {
    // const {classes} = this.props;
    const postUrl = 'https://www.instagram.com/p/' + this.props.postId;
    return (
      <blockquote className="instagram-media"
        data-instgrm-version={7}
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '670px',
          padding: 0,
          width: 'calc(100% - 2px)',
        }}>
        <div style={{
          padding: '8px',
        }}>
          <div style={{
            background: '#F8F8F8',
            lineHeight: 0,
            marginTop: '40px',
            padding: '28.2638888889% 0',
            textAlign: 'center',
            width: '100%',
          }}>
            <div style={{
              background: 'url(data:image/png',
              display: 'block',
              height: '44px',
              margin: '0 auto -44px',
              position: 'relative',
              top: '-22px',
              width: '44px',
            }} />
          </div>
          <p style={{
            color: '#c9c8cd',
            fontFamily: 'Arial,sans-serif',
            fontSize: '14px',
            lineHeight: '17px',
            marginBottom: 0,
            marginTop: '8px',
            overflow: 'hidden',
            padding: '8px 0 7px',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}>
            <a loading="lazy"
              href={postUrl}
              style={{color: '#c9c8cd',
                fontFamily: 'Arial,sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
                textDecoration: 'none',
              }}
              target="_blank"
              rel="noopener noreferrer">
                               Mark Fonte (@mark_fonte21)
            </a>
            <time style={{
              fontFamily: 'Arial,sans-serif',
              fontSize: '14px',
              lineHeight: '17px',
            }}
            dateTime="2020-05-05T20:53:11+00:00">
            </time>
          </p>
        </div>
      </blockquote> );
  }
}

InstagramPost.propTypes = {
  classes: PropTypes.object.isRequired,
  postId: PropTypes.string.isRequired,
};

export default withStyles(styles)(InstagramPost);
