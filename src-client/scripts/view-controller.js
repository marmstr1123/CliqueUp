const React = require('react')
const TitleView = require('./title-view.js')
const HomeView = require('./home-view.js')


const AppView = React.createClass({
  render: function(){
    switch(this.props.currentView){
      case "title":
        return <TitleView/>
        break;
      case "home":
        return <HomeView/>
        break;
      default:

        break;
    }
  }
})


module.exports = AppView;