// import socketIOClient from 'socket.io-client';
import { pubsub } from '../pubsub';
import { Connection } from '../pubsub/pubsub-type';
import {
  dataGetCameraDetail,
  dataGetCameras,
  type CamerasDetailType,
  type CamerasType,
  dataUpdateCamera,
  type UpdateCameraType,
  dataDeleteCamera,
} from '../method/method-camera';
import {
  dataDeleteGroup,
  dataGetGroups,
  type UpdateGroupType,
  type GroupsType,
  dataCreateGroup,
  dataUpdateGroup,
} from '../method/method-group';
import {
  dataGatewayDetail,
  dataGetGateways,
  type GatewayProps,
  type GatewaysType,
} from '../method/method-gateway';
import {
  requestPlaybacks,
  type PlaybackProps,
  getIPAddress,
} from '../method/method-playback';

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

  sendEvent = (data: Object) => {
    if (!this.socket) return;
    this.socket.emit(data);
  };

  // ---------- METHOD CAMERA ----------------
  getCameras = (props?: CamerasType) => {
    const data = dataGetCameras(props);
    this.sendEvent(data);
  };

  getCameraDetail = (props: CamerasDetailType) => {
    const data = dataGetCameraDetail(props);
    this.sendEvent(data);
  };

  addCamera = () => {};

  deleteCamera = (serial: string) => {
    const data = dataDeleteCamera(serial);
    this.sendEvent(data);
  };

  updateCamera = (props: UpdateCameraType) => {
    const data = dataUpdateCamera(props);
    this.sendEvent(data);
  };
  // ---------------------------------------------

  // ---------- METHOD GROUP ----------------
  getGroups = (props?: GroupsType) => {
    const data = dataGetGroups(props);
    this.sendEvent(data);
  };

  createGroup = (props: UpdateGroupType) => {
    const data = dataCreateGroup(props);
    this.sendEvent(data);
  };

  updateGroup = (props: UpdateGroupType) => {
    const data = dataUpdateGroup(props);
    this.sendEvent(data);
  };

  deleteGroup = (groupId: string) => {
    const data = dataDeleteGroup(groupId);
    this.sendEvent(data);
  };
  // ---------------------------------------------

  // ---------- METHOD GATEWAY ----------------
  getGateways = (props?: GatewaysType) => {
    const data = dataGetGateways(props);
    this.sendEvent(data);
  };

  getGatewayDetail = (props: GatewayProps) => {
    const data = dataGatewayDetail(props);
    this.sendEvent(data);
  };
  // ---------------------------------------------

  // ---------- METHOD PLAYBACK ----------------
  getPlaybacks = (props: PlaybackProps) => {
    const data = requestPlaybacks(props);
    this.sendEvent(data);
  };

  getVideoPlayback = (playbackId: string | number) => {
    const data = getIPAddress(playbackId);
    this.sendEvent(data);
  };
}

export const CloudCamera = new SocketProvider();
