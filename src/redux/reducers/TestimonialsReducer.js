// Set the testimonial reducer value based on which tacit box the user clicks on.
const currentTestimonial = (state = 'default', action) => {
  if ( action.type === 'SET_TO_TEAMWORK' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_ADAPTABILITY' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_COMMUNICATION' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_INTRINSIC_MOTIVATION' ) {
    return action.payload;
  } else if ( action.type === 'SET_TO_TIME_MANAGEMENT' ) {
    return action.payload;
  } else {
    return state;
  }
}

export default currentTestimonial;