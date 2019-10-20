// sugar syntax to standirize actions with just the type
const reduxActionFactory = actionType => ({
  type: actionType,
  creator: (payload = {}) => ({
    type: actionType,
    payload,
  }),
});

export default reduxActionFactory;
