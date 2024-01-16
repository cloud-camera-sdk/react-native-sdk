import { PAGE_SIZE } from '../common/constants';
import { checksum, encryption } from '../common/helpers';
import {
  ADD_DEVICE_GROUP,
  LIST_DEVICE_GROUP_BY_PAGE,
  REMOVE_DEVICE_GROUP,
  UPDATE_DEVICE_GROUP,
} from '../type/service-type';

// data list group
export type GroupsType = {
  key?: string;
  page?: number;
  page_size?: number;
};

export const dataGetGroups = (props?: GroupsType) => {
  const param = {
    name: props?.key,
    page: props?.page ?? 0,
    size: props?.page_size ?? PAGE_SIZE,
    timeRequest: new Date().getTime(),
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: LIST_DEVICE_GROUP_BY_PAGE,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};

export const dataDeleteGroup = (groupId: string) => {
  const param = {
    namespace: global.namespace,
    id: groupId,
  };
  const dataObj = {
    appServiceType: REMOVE_DEVICE_GROUP,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};

// data list group
export type UpdateGroupType = {
  groupId?: string;
  name: string;
  cameras: any[];
};

export const dataCreateGroup = (props: UpdateGroupType) => {
  const deviceInfos: any = [];

  props.cameras.forEach((item, index) => {
    const newItem = {
      serial: item.serial,
      indexOf: index + 1,
    };
    deviceInfos.push(newItem);
  });

  const param = {
    namespace: global.namespace,
    name: props.name,
    deviceInfos: deviceInfos,
    extraInfo: { typeLocation: 'Office' },
  };
  const dataObj = {
    appServiceType: ADD_DEVICE_GROUP,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};

export const dataUpdateGroup = (props: UpdateGroupType) => {
  const deviceInfos: any = [];

  props.cameras.forEach((item, index) => {
    const newItem = {
      serial: item.serial,
      indexOf: index + 1,
    };
    deviceInfos.push(newItem);
  });

  const param = {
    deviceGroupId: props?.groupId,
    namespace: global.namespace,
    name: props.name,
    deviceInfos: deviceInfos,
    extraInfo: { typeLocation: 'Office' },
  };
  const dataObj = {
    appServiceType: UPDATE_DEVICE_GROUP,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};
