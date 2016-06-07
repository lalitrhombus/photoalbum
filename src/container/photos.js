import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchAlbums,featchPhotos} from '../actions/index';
import LazyLoad from 'react-lazy-load';

class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  showPhoto(photo){
    return(
      <div className="photo" key={photo.id}>
        <div className="filler" />
        <LazyLoad offsetVertical={300}>
          <img src={photo.thumbnailUrl} alt="" className=""/>
        </LazyLoad>
        <p>{photo.title}</p>
      </div>
    )
  }

  render() {
    console.log("photo rendered");
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Photos  <span className="shiftRight"><span className="colored">{this.props.photos.length}</span> Sets</span></h1>
          {this.props.photos.map((photo)=>{ return this.showPhoto(photo)})}
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchAlbums,featchPhotos}, dispatch);
}

function mapStateToProps({photos}){
    console.log("photos: ", photos)

  return {photos};
}

export default connect(mapStateToProps,mapDispatchToProps)(Photos);