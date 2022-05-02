import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  // BrowserTabr as Tabr,
  // Tabs,
  // Tab,
 
  Tabs, Tab, TabPanel
} from "react-tabs";

export default class App extends Component {
  render() {
    return (
      <div>
        <Tabs>
        <NavBar></NavBar>
        <TabPanel>
        <Tab exact path="/"><News key="general" pageSize={5} country="in" category="general"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/business"><News key="business" pageSize={5} country="in" category="business"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/general"><News key="general" pageSize={5} country="in" category="general"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/health"><News key="health" pageSize={5} country="in" category="health"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/science"><News key="science" pageSize={5} country="in" category="science"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"></News></Tab>
        </TabPanel>
        <TabPanel>
        <Tab exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"></News></Tab> 
        </TabPanel>
        </Tabs>
      </div>
    )
  }
}

