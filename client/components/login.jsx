import React from 'react';
import ReactDOM from 'react-dom';

class AccountsUIWrapper extends React.Component {
  componentDidMount() {
    this.view = Blaze.render(Template._loginButtons,
      ReactDOM.findDOMNode(this.refs.container)
    );
  }

  componentWillUnmount() {
    Blaze.remove(this.view);
  }

  render() {
    return (
      <span ref="container" />
    )
  }
}

export default AccountsUIWrapper;
