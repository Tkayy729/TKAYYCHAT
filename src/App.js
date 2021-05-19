import {ChatEngine  } from "react-chat-engine";

import './App.css'

import ChatFeed from './Components/ChatFeed';

const App = () => {
    return(
        <ChatEngine
			height='100vh'
			userName='Daniel'
			userSecret='123123'
			projectID='59ec87ed-e600-49ae-98e3-454bc85ddf3c'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} /> }
		/>
    );
}

export default App; 