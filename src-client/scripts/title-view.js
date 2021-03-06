const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
const ACTIONS = require('./actions.js');
const STORE = require('./store.js');

const TitleView = React.createClass({

  _testFunction: function(){
    ACTIONS.fetchUserEventColl()

  },

  _handleClick: function(evt){
    evt.preventDefault()

    var userLogin = {
      username: this.refs.username.value,
      password: this.refs.password.value
    }



     ACTIONS.handleUserLogin(userLogin)
     window.location.hash = "auth"

  },


  render: function(){
    return(
      <div className="titleScreenHolder">
        <div className="titleLogoHolder">
          <img src="./images/CliqueUpLogo.png" className="titleScreenImg"/>
        </div>
        <form>
          <input className="form-control titleScreenUser" ref="username" type="text" placeholder="E-mail"/>
          <br/>
          <input className="form-control titleScreenPass" ref="password" type="password" placeholder="Password"/>
          <br/>
          <button className="btn btn-warning titleScreenBtn" onClick={this._handleClick}>Login</button>
        </form>
      </div>
    )
  }

})


module.exports = TitleView
