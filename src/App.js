import React, { Component, PropTypes} from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import ChatInput from './components/screens/ChatInput';
import GroupChat from './components/screens/GroupChat';
import Navbar from './components/global/Navbar';

//Redux components
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from './actions';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Grid>
            <Row className="show-grid">
              <Col xs={12} md={4}>
              <ChatInput messageItems={this.props.messageItems} actions={this.props.actions} userIndex={1}/>
              <ChatInput messageItems={this.props.messageItems} actions={this.props.actions} userIndex={2}/>
              </Col>
              <Col xs={12} md={8} >
              <GroupChat messageItems={this.props.messageItems} actions={this.props.actions}/>
              </Col>
            </Row>
          </Grid>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
	return {
		messageItems: state.chatOperations
	};
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(messageActions, dispatch)
})

App.propTypes = {
  messageItems: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);