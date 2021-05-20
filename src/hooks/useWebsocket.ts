export interface IUseWebsocket {
    createWebSocket: (url: string) => WebSocket;
    bindEvent: (websocket: WebSocket, handleMessage: IHandleMessage) => void;
}

export interface IHandleMessage {
    handleMessage: (message: any) => void; 
}

/**
 * 操作长连接方法
 * @returns 
 */
function useWebsocket(): IUseWebsocket {

    const createWebSocket = (url: string) => {
        return new WebSocket(process.env.VUE_APP_WS_URL + url);
    }

    /**
     * 
     * @param ws 长连接服务
     * @param handleMessage 监听消息方法 
     */
    const bindEvent = (ws: WebSocket, handleMessage: IHandleMessage) => {
        ws.addEventListener('open', handleOpen, false);
        ws.addEventListener('close', handleClose, false);
        ws.addEventListener('error', handleError, false);
        ws.addEventListener('message', handleMessage.handleMessage, false);
    }

    function handleOpen (e: Event) {
        console.log("建立连接");
    }
    
    function handleClose (e: Event) {
        console.log("关闭连接");
    }
    
    function handleError (e: Event) {
        console.log("链接出错" + JSON.stringify(e));
    }

    return {
        createWebSocket,
        bindEvent
    }
}

export default useWebsocket;