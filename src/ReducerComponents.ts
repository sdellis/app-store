namespace IIIFComponents {

  export function components(state = [], action) {
    switch (action.type) {
      case REGISTER:
        return [
          ...state,
          {
            id: action.id,
            state: [],
            instance: {}
          }
        ]
      case UPDATE:
        return state.map((component, index) => {
          if (component.id === action.component.id) {
            return Object.assign({}, component, {
              state: action.component
            })
          }
          return component
        })
      default:
        return state
    }
  }

}
