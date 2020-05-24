const initialState = {
  bulbLinks: {
    shine:
      "http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/on_med_n3p8pd.png",
    dark:
      "http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/off_med_fmma6p.png",
  },
  bulbStatus: {
    bulb1: false,
    bulb2: false,
    bulb3: false,
    bulb4: false,
  },
};

function bulbReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE/BULB-STATUS":
      let key = "bulb" + action.payload;
      return {
        ...state,
        bulbStatus: { ...state.bulbStatus, [key]: !state.bulbStatus[key] },
      };
    default:
      return state;
  }
}
export default bulbReducer;
