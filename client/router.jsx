import React from 'react';
import {mount} from 'react-mounter';
import {Layout} from './layout.jsx';
import {Meeting} from './components/meeting.jsx';

FlowRouter.route("/", {
  action() {
    mount(Layout, {
      content: (<Meeting />),
    });
  }
});
