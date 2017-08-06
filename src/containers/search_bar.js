import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    // bind the existing function to this component
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    //console.log(event.target.value);

    // this actually may not refer to SearchBar component
    this.setState( { term: event.target.value });

  }

  onFormSubmit(event) {
    // prevents the default behaviour of doing a POST request
    event.preventDefault();

    // we need to go and fetch weather data, using the action creator
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five-day forecast in your favourite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </span>
      </form>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// first parameter for connect is actually state but we don't care in this case
export default connect(null, mapDispatchToProps)(SearchBar);
