var React = require("react");
import merge from 'lodash/merge'

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(
      merge({},window.CLOUDINARY_OPTIONS,{theme:'minimal',inline_container:'.upload-form'}), 
      function(error, results){
        if(!error){
          console.log(results);
          console.log(error);
        }
      }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

export default UploadButton;
