import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '2e367cb7-3be5-4c74-8c06-f5e67f8d994f', 
        props.user.username, 
        props.user.secret
        );

    return (
        
        <div style= {{ height: '100vh' }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style= {{ height: '100%' }}/>
        </div>

    )
}

export default ChatsPage