import { PAGE_SIZE } from '../common/constants';
import { checksum, encryption } from '../common/helpers';
import {
  GET_DEVICE_INFO_EXTRA,
  LIST_ALL_DEVICE_BY_PAGE,
  REMOVE_DEVICE,
  UPDATE_DEVICE,
} from '../type/service-type';

// data list camera
export type CamerasType = {
  key?: string;
  page?: number;
  page_size?: number;
};

export const dataGetCameras = (props?: CamerasType) => {
  const param = {
    name: props?.key,
    deviceType: 'camera',
    page: props?.page ?? 0,
    size: props?.page_size ?? PAGE_SIZE,
    timeRequest: new Date().getTime(),
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: LIST_ALL_DEVICE_BY_PAGE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};

// data camera detail
export type CamerasDetailType = {
  serial: string;
  deviceType: 'camera' | 'gateway';
  targetId: string;
};

export const dataGetCameraDetail = (props: CamerasDetailType) => {
  const dataBody = {
    deviceType: props.deviceType,
    serial: props.serial,
    targetId: props.targetId,
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: GET_DEVICE_INFO_EXTRA,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(dataBody)),
    checksum: checksum(JSON.stringify(dataBody)),
  };
  return dataObj;
};

// data update camera
export type UpdateCameraType = {
  name: string;
  address: string;
  serial: string;
};

export const dataUpdateCamera = (props: UpdateCameraType) => {
  const bodyData = {
    name: props.name,
    serial: props.serial,
    note: props.address,
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: UPDATE_DEVICE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(bodyData)),
    checksum: checksum(JSON.stringify(bodyData)),
  };

  return dataObj;
};

// data delete camera
export const dataDeleteCamera = (serial: string) => {
  const body = {
    serial: serial,
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: REMOVE_DEVICE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(body)),
    checksum: checksum(JSON.stringify(body)),
  };
  return dataObj;
};
