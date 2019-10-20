// sugar syntax to create flux standard actions with just the type
// https://github.com/diegohaz/redux-saga-thunk
const checkMeta = (meta, type) => {
  if (meta && Object.keys(meta).length) {
    return;
  }

  throw new Error(`meta param from the ${type}_REQUEST must be included as the second param to fulfill the action.`);
};

const reduxAsyncActionFactory = actionType => ({
  request: {
    type: `${actionType}_REQUEST`,
    creator: (payload = {}) => ({
      type: `${actionType}_REQUEST`,
      payload,
      meta: {
        thunk: true,
      },
    }),
  },
  response: {
    type: `${actionType}_RESPONSE`,
    creator: (payload = {}, meta) => {
      checkMeta(meta, actionType);

      return ({
        type: `${actionType}_RESPONSE`,
        payload,
        meta,
      });
    },
  },
  failure: {
    type: `${actionType}_FAILURE`,
    creator: (payload = {}, meta) => {
      checkMeta(meta, actionType);

      return ({
        type: `${actionType}_FAILURE`,
        payload: new Error(payload),
        error: true,
        meta,
      });
    },
  },
});

export default reduxAsyncActionFactory;
