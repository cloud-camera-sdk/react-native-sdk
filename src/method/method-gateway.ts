import { PAGE_SIZE } from '../common/constants';
import { checksum, encryption } from '../common/helpers';
import {
  GET_DEVICE_INFO_EXTRA,
  LIST_ALL_DEVICE_BY_PAGE,
} from '../type/service-type';

// data list gateway
export type GatewaysType = {
  key?: string;
  page?: number;
  page_size?: number;
};

export const dataGetGateways = (props?: GatewaysType) => {
  const param = {
    name: props?.key,
    deviceType: 'gateway',
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

export type GatewayProps = {
  deviceType: string | number;
  serial: string;
  targetId: string | number;
};

export const dataGatewayDetail = (gateway: GatewayProps) => {
  const param = {
    deviceType: gateway.deviceType,
    serial: gateway.serial,
    targetId: gateway.targetId,
    namespace: global.namespace,
  };
  const dataObj = {
    appServiceType: GET_DEVICE_INFO_EXTRA,
    requestId: new Date().getTime(),
    body: encryption(JSON.stringify(param)),
    checksum: checksum(JSON.stringify(param)),
  };
  return dataObj;
};
