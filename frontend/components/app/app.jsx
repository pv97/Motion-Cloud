import React from 'react'
import { withRouter } from 'react-router'
//containers
import SessionFormContainer from './session_form/session_form_container'
import UserNavContainer from './user_nav/user_nav_container'
import VideoOverlayContainer from './video_overlay/video_overlay_container'
//material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'

class App extends React.Component {
  constructor(props){
    super(props)
    this.toHomePage = this.toHomePage.bind(this)
		this.slideVideoBox = this.slideVideoBox.bind(this)
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

  render(){
    return(
      <MuiThemeProvider>
        <div>
          <AppBar
            id="main-header"
            iconElementLeft={
              <div id="motion-cloud-logo" onClick={this.toHomePage}>MotionCloud</div>
            }
            iconElementRight={
              <div>
                <UserNavContainer />
                <SessionFormContainer />
              </div>
            }
            >
          </AppBar>

          <section id="main-section">
            <VideoOverlayContainer/>

            <div id="page-boundary">
              <div className={this.hideCommentClass()} onClick={this.slideVideoBox}></div>

                {this.props.children}

            </div>
          </section>
        </div>
      </MuiThemeProvider>
    )
  }


}

export default withRouter(App)
