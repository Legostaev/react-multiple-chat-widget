import { Component } from 'react';

import { Widget, addResponseMessage, setQuickButtons, toggleMsgLoader, addLinkSnippet } from '../index';
import { addUserMessage } from '..';

export default class App extends Component {

  private chatId: string = 'rcw-chat-container';

  componentDidMount() {
    addResponseMessage(this.chatId, 'Welcome to this awesome chat!');
    addLinkSnippet(this.chatId, { link: 'https://google.com', title: 'Google' });
    addResponseMessage(this.chatId, '![](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)');
    addResponseMessage(this.chatId, '![vertical](https://d2sofvawe08yqg.cloudfront.net/reintroducing-react/hero2x?1556470143)');
  }

  handleNewUserMessage = (newMessage: any) => {
    toggleMsgLoader(this.chatId);
    setTimeout(() => {
      toggleMsgLoader(this.chatId);
      if (newMessage === 'fruits') {
        setQuickButtons(this.chatId, [ { label: 'Apple', value: 'apple' }, { label: 'Orange', value: 'orange' }, { label: 'Pear', value: 'pear' }, { label: 'Banana', value: 'banana' } ]);
      } else {
        addResponseMessage(this.chatId, newMessage);
      }
    }, 2000);
  }

  handleQuickButtonClicked = (e: any) => {
    addResponseMessage(this.chatId, 'Selected ' + e);
    setQuickButtons(this.chatId, []);
  }

  handleSubmit = (msgText: string) => {
    if(msgText.length < 80) {
      addUserMessage(this.chatId, "Uh oh, please write a bit more.");
      return false;
    }
    return true;
  }

  render() {
    return (
      <Widget
        title="Bienvenido"
        subtitle="Asistente virtual"
        senderPlaceHolder="Escribe aquí ..."
        handleNewUserMessage={this.handleNewUserMessage}
        handleQuickButtonClicked={this.handleQuickButtonClicked}
        imagePreview
        handleSubmit={this.handleSubmit}
        emojis
      />
    );
  }
}
