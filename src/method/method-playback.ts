import axios from 'axios';
import { checksum, encryption } from '../common/helpers';
import {
  GENERATE_LINK_STORAGE_FILE,
  LIST_CAMERA_STORAGE_FILE,
} from '../type/service-type';

export type PlaybackProps = {
  serial: string;
  datetime: string; // format datetime: YYYY-MM-DD
};

export const requestPlaybacks = (props: PlaybackProps) => {
  const dataBody = {
    serial: props.serial,
    dateRecord: props.datetime,
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: LIST_CAMERA_STORAGE_FILE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(dataBody)),
    checksum: checksum(JSON.stringify(dataBody)),
  };
  return dataObj;
};

export type GetPlaybackType = {
  ipAddress: string;
  playbackId: string | number;
};

export const getIPAddress = async (playbackId: string | number) => {
  const header = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  axios
    .get('https://checkip.amazonaws.com/', header)
    .then((result) => {
      // console.log('ipAddress', result);
      if (result.status === 200) {
        //result.data
        requestLinkVideo({ ipAddress: result.data, playbackId });
      } else {
        //   Alert.alert('Thông báo', 'Lấy link video bị lỗi');
      }
    })
    .catch((error) => {
      console.log('error', error);
    });
};

const requestLinkVideo = (props: GetPlaybackType) => {
  const dataBody = {
    recordId: props.playbackId,
    ipAddress: props.ipAddress.trim().replace('\n', ''),
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: GENERATE_LINK_STORAGE_FILE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(dataBody)),
    checksum: checksum(JSON.stringify(dataBody)),
  };

  return dataObj;
};
