import React from 'react';

class Index extends React.Component {
  componentDidMount() {
    window.location.replace('https://www.nhs.uk/');
  }

  render() {
    return <h1>Redirecting...</h1>;
  }
}

export default Index;
