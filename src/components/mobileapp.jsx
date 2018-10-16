import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import LeftMenu from './leftMenu.jsx';
import RightContent from './RightContent.jsx';
class MobileApp extends Component {

    constructor(_this) {
        super(_this);
        this.state = {
            match: _this.match
        }
    }

    render () {
        // let match = this.state.match;
        return (<div className="menu-container">
            <LeftMenu></LeftMenu>
            <Route path="/index/:id" component={RightContent} />
        </div>);
    };
};

// {match.params.id && (<h1>MobileApp =====> {match.params.id}  </h1>)}

export default MobileApp;
