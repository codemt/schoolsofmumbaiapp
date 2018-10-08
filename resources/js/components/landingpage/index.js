import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
        <div class="jumbotron">
        <h1 class="display-3">Hello, Folks!</h1>
        <p class="lead">The City of Mumbai has a lot of schools , let me show you a few.</p>
        <hr class="my-4" />
        <p> Click on the links on the navbar to browse schools of the particular areas. </p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>
    )
  }
}
