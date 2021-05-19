import {ChatEngine  } from "react-chat-engine";

import './App.css'

const App = () => {
    return(
        <ChatEngine
			height='100vh'
			userName='Daniel'
			userSecret='123123'
			projectID='59ec87ed-e600-49ae-98e3-454bc85ddf3c'
		/>
    );
}

export default App;