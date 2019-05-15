import React, { Component } from 'react';
import '../../App.css';
import BaseHeader from './BaseHeader';
import Meetup from './Meetup';
import NextMeetup from './NextMeetup';
import About from './About';
import Members from './Members'
import Past from './Past'
import BaseFooter from './BaseFooter'
import Abc from './StatelessText'
import IncreDecre from './IncreDecre'
import Fetch from './Fetch'
import ColorChange from './ColorChange'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {incrementAction, decrementAction, fetchUser} from '../../store/Actions'

// import CommentBox from './components/layout/comment/CommentBox'

class Home extends Component {
    state = {
        baseHeader: {
          index0: "QTemu",
          index1: "CreateMeetup",
          index2: "Explore",
          index3: "Login"
        },
        about: {
          header: "About Meetup",
          index0: "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
          index1: "Twitter: @JakartaJS and we use the hashtag #jakartajs"
        }
      }
      componentDidMount(){
        this.props.fetchUser()
      }
    

      increment = () => {
        this.props.incrementAction()
      }

      decrement = () => {
        this.props.decrementAction()
      }      

      render() {
        return (
          <div className="App">
           <BaseHeader
           mainTitle = {this.state.baseHeader.index0}
           subTitle = {<Link to="Home">{this.state.baseHeader.index1}</Link>}
           title1 = {this.state.baseHeader.index2}
           title2 = {this.state.baseHeader.index3}
           // list = {this.state.list} 
           />
           <Meetup />
           <NextMeetup />
           <About
           phrase1 = {this.state.about.header}
           phrase2 = {this.state.about.index0}
           phrase3 = {this.state.about.index1}
           />
           <Members/>
           <Past/>
           <BaseFooter />
           <Abc
           avadakadavra = "hari senin"
           />
           <Abc
           avadakadavra = "hari selasa"
           />
           <IncreDecre />
           <Fetch />
           <ColorChange />
           <button onClick={this.increment}>Increment</button>
           <button onClick={this.decrement}>Decrement</button>
           {this.props.angka}
         </div>
        );
       // return (
         // <div className="App">
         // <CommentBox />
         // </div>
       // )
      }
}

const mapStateToProps = (state) => {
  return {
    angka: state.counter,
    judul: state.title
  }
}

const mapDispatchToProps = { incrementAction, decrementAction, fetchUser}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
