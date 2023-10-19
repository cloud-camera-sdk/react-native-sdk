import type * as ActionType from './pubsub-type';

export type Action = PushSubcribe | Connection;

interface Connection {
  type: typeof ActionType.Connection;
  payload: {
    value: string;
  };
}

interface PushSubcribe {
  type: typeof ActionType.Authentication | typeof ActionType.ListCamera;
  payload: {
    value: string;
  };
}
