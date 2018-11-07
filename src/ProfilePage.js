import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ProfilePage extends Component {
  state = {
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    console.log(filename);


    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("products")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        this.setState({ avatarURL: url });

      });
  };

  render() {
    return (
      <div>
        <br></br>
        <center>
        <form>

          <label>Imagen:</label>

          <FileUploader
            accept="image/*"
            name="avatar"
            // randomizeFilename
            filename={file => Date.now() + "-" + file.name }
            storageRef={firebase.storage().ref("products")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />

          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          <br></br><br></br>
          {this.state.avatarURL && !this.state.isUploading && <label>URL del archivo:</label> }
          {this.state.avatarURL && !this.state.isUploading && <h2>{this.state.avatarURL}</h2> }
        </form>
        </center>
      </div>
    );
  }
}

export default ProfilePage;
