import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MobileApp from './components/mobileapp.jsx';
import UploadTest from './components/uploadTest.jsx';
class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: 'this is App JS',
            list: ['asxxx', 'www', 123, 444, 555]
        };
    }

    // componentWillMount () {
    //     this.formatArr();
    // }
    //
    // formatArr () {
    //
    //     let list = this.state.list;
    //     let newList = list.find(function (item, index) {
    //         return item === 123;
    //         // console.log(item, index);
    //     });
    // }

    getConfirmation (message, callback) {
        const allowTransition = window.confirm(message)
        callback(allowTransition)
    }


    render () {
        return (<Router getUserConfirmation={this.getConfirmation}>
            <section className="router-box">
                <Route exact path="/" render={() => (<h1>This is React App</h1>)} />
                <Route path="/index" component={MobileApp} />
                <Route path="/upload" component={UploadTest} />
            </section>
        </Router>);
    }
};

export default App;
