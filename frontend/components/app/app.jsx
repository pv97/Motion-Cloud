import React from 'react'
import { withRouter } from 'react-router'
//containers
import SessionFormContainer from './session_form/session_form_container'
import UserNavContainer from './user_nav/user_nav_container'
import VideoOverlayContainer from './video_overlay/video_overlay_container'
//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, FontIcon, IconButton, TextField } from 'material-ui'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      string:""
    }
    this.toHomePage = this.toHomePage.bind(this)
		this.slideVideoBox = this.slideVideoBox.bind(this)
		this.handleSearch = this.handleSearch.bind(this)
  }

  componentWillMount(){
    this.props.fetchVideos();
  }

  toHomePage(){
		this.props.router.push({pathname:"/",query:this.props.query})
  }

  hideCommentClass(){
    if(this.props.location.query.c){
      return "hide-comment-section"
    } else {
      return "display-none"
    }
  }

  slideVideoBox(){
    let pathname = this.props.location.pathname
    let query = this.props.location.query
    query.c = undefined
    this.props.router.replace({pathname,query:query})
  }

  handleSearch(e){
    e.preventDefault();
		this.props.searchVideos(this.state.string);
  }

	update(field) {
		return e => this.setState({
			[field]: e.currentTarget.value
		});
	}


  render(){
    return(
      <MuiThemeProvider>
        <div>
          <div id="main-header">
            <div id="header-padding">
              <div id="motion-cloud-logo" onClick={this.toHomePage}>MotionCloud</div>
              <form id="search-bar" onSubmit={this.handleSearch}>
                <TextField hintText="Search for a video" fullWidth
                  onChange={this.update("string")}></TextField>
                <IconButton
                  className="search-button"
                  tooltipPosition="bottom-center"
                  tooltip="Search"
                  style={{padding:10}}
                  onClick={this.handleSearch}>
                  <FontIcon className="material-icons" color={"rgb(0, 188, 212)"}
                    >search</FontIcon>
                </IconButton>
              </form>
              <div className="flex1"></div>
              <div>
                <UserNavContainer />
                <SessionFormContainer />
              </div>
            </div>
          </div>

          <section id="main-section">
            <VideoOverlayContainer/>

            <div id="page-boundary">
              <div className={this.hideCommentClass()} onClick={this.slideVideoBox}></div>

                {this.props.children}

                <section id="footer">
                  <div id="trademark">
                    © MotionCloud
                  </div>

                  <div id="signature">
                    Designed and created by Pysith Vanuptikul
                  </div>

                  <div id="links">
                    <a href="https://github.com/pv97" id="github" >
                      <img src="http://res.cloudinary.com/tlcoy4e3/image/upload/v1478656445/github-8-xxl_cvvyqv.png"></img>
                    </a>
                    <a href="https://www.linkedin.com/in/pivanup" d="linked-in" >
                      <img src="http://res.cloudinary.com/tlcoy4e3/image/upload/v1478656445/linkedin-3-xxl_x1laak.png"></img>
                    </a>
                    <a href="mailto:pivanup@gmail.com" id="email" >
                      <img src="http://res.cloudinary.com/tlcoy4e3/image/upload/v1478656445/message-xxl_r7jyoy.png"></img>
                    </a>
                  </div>
                </section>
            </div>
          </section>

        </div>
      </MuiThemeProvider>
    )
  }


}

export default withRouter(App)
