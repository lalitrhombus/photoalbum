import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {featchAlbums,featchPhotos} from '../actions/index';
import LazyLoad from 'react-lazy-load';

class Photos extends React.Component {
  constructor(props) {
    super(props);
    if(this.props.photos.length==0){
      this.props.featchPhotos();
    }
  }

  showPhoto(photo){
    if(this.props.params.albumId){
      if(photo.albumId==this.props.params.albumId){
        <div className="photo" key={photo.id}>
          <LazyLoad offsetVertical={300}>
            <img src={photo.thumbnailUrl} alt="" className=""/>
          </LazyLoad>
          <p>{photo.title}</p>
        </div>
      }
      else
        return false;
    }

    return(
      <div className="photo" key={photo.id}>
        <LazyLoad offsetVertical={300}>
          <img src={photo.thumbnailUrl} alt="" className=""/>
        </LazyLoad>
        <p>{photo.title}</p>
      </div>
    )
  }
  render() {
    let photos;
    if(this.props.params.albumId){
      photos = this.props.photos;      
    }
    else {
      photos = this.props.photos.slice(0,100);
    }
    return (
      <div className="wrapper">
        <div className="container">
          <h1>Photos  <span className="shiftRight"><span className="colored">{photos.length}</span> Sets</span></h1>
          {
              photos.map((photo)=>{ return this.showPhoto(photo)})
          }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({featchAlbums,featchPhotos}, dispatch);
}

function mapStateToProps({photos}){
  return {photos};
}

export default connect(mapStateToProps,mapDispatchToProps)(Photos);