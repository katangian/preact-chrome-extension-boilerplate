import { h, Component } from 'preact';

export class BrowserActionPopup extends Component {
  componentDidMount() {
    chrome.runtime.onMessage.addListener((msg, sender, sendCallback) => {
      console.log(sendCallback)
      let time = new Date().toLocaleTimeString();
      this.setState({ msg, time });
      sendCallback({ time });
    });
  }

  render () {
    return <span>{ this.state.time }, { this.state.msg }</span>;
  }
}
