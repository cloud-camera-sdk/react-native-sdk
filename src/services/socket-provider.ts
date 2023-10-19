// import socketIOClient from 'socket.io-client';
import { pubsub } from '../pubsub';
import { Connection } from '../pubsub/pubsub-type';

// const connectionConfig = {
//   jsonp: false,
//   reconnection: true,
//   reconnectionDelay: 500,
//   reconnectionAttempts: Infinity,
//   transports: ['websocket'],
// };

class SocketProvider {
  private socket: any;

  initSDK = (token: string) => {
    // this.socket = socketIOClient('env', connectionConfig);

    // this.socket.on('connect', () => {
    //   console.debug(19, 'SocketIO: Connect', 'Socket conected');
    pubsub.publish(Connection, {
      type: Connection,
      payload: {
        value: token,
      },
    });
    // });
  };

  sendEvent = (data: string) => {
    if (!this.socket) return;
    this.socket.emit(data);
  };
}

export const CloudCamera = new SocketProvider();
