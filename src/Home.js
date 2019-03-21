import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHelloWorld } from './actions';
class Home extends React.Component {
  componentDidMount() {
    this.props.requestHelloWorld();
  }

  render() {
    return (
      <h1>{this.props.HelloWorld}</h1>
    );
  }
}

const mapStateToProps = state => ({ HelloWorld: state.HelloWorld });
const mapDispatchToProps = dispatch => bindActionCreators({ requestHelloWorld }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);
