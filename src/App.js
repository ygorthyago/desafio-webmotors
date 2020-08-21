import './App.scss';
import React, { Component } from 'react';
import PageHeader from './components/UI/PageHeader'
import PageFinder from './screens/Finder'

export default class App extends Component {

  render() {
    return (
      <div className="container">
        <PageHeader></PageHeader>
        <PageFinder/>
      </div>
    );
  }
};