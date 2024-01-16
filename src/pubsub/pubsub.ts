import type { Action } from './pubsub-action';

type ActionFunc = (action: Action) => void;

class PubSub {
  private _dispatcher: Record<string, ActionFunc[]> = {};
  private _store: Record<string, any> = {};

  unsubscribe = (key: string, fn: ActionFunc) => {
    const actions = this._dispatcher[key];

    if (
      typeof actions === 'undefined' ||
      actions === null ||
      actions.length === 0
    ) {
      return;
    }

    this._dispatcher[key] =
      this._dispatcher[key]?.filter((o) => o !== fn) ?? [];
  };

  subscribe = (key: string, fn: ActionFunc) => {
    if (typeof this._dispatcher[key] === 'undefined') {
      this._dispatcher[key] = [];
    }

    this._dispatcher[key]?.push(fn);

    return {
      unsubscribe: () => {
        this.unsubscribe(key, fn);
      },
    };
  };

  publish = (key: string, action: Action) => {
    console.debug('[PUBSUB]', `[${key}]`, action);

    const actions = this._dispatcher[key];

    if (typeof actions === 'undefined') {
      return;
    }

    for (let idx = 0; idx < actions.length; idx += 1) {
      const func = actions[idx];

      if (func) {
        try {
          func(action);
        } catch (err) {
          console.warn('Error on publish action', { key, action });
        }
      }
    }
  };

  clean = () => {
    this._dispatcher = {};
  };

  get = <T>(key: string): T | undefined => {
    const data = this._store[key];

    if (typeof data === 'undefined') {
      return undefined;
    }

    return this._store[key] as T;
  };

  set = <T>(key: string, value: T) => {
    this._store[key] = value;
  };
}

export const pubsub = new PubSub();
