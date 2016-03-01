import React from 'react';
import ReactDOM from 'react-dom';
import RaisedButton from 'material-ui/lib/raised-button';
import ToolbarExamplesSimple from './toolbar.js';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DatePicker from 'material-ui/lib/date-picker/date-picker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LeftNav from 'material-ui/lib/left-nav';
import MyLeftNav from './leftNav.js';
import MainPan from './mainpan.js'


// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const style = {
  margin: 12,
};


let App = React.createClass({
  render() {
    return (
      <div >
        <ToolbarExamplesSimple/>
        <MyLeftNav/>
        <MainPan/>
      </div>
    );
  }
});

ReactDOM.render(<App/>,document.getElementById("app"));
