export const UPDATE_LABEL = Symbol('UPDATE_LABEL')
export const UPDATE_SELECTION = Symbol('UPDATE_SELECTION')
export const UPDATE_TEXT = Symbol('UPDATE_TEXT')
export const ADD_ENTITY = Symbol('ADD_ENTITY')
export const DELETE_ENTITY = Symbol('DELETE_ENTITY')

export const initialState = {
  selectionStart: 0,
  selectionEnd: 0,
  label: '',
  text: 'Venture first mover advantage learning curve market ecosystem funding stealth disruptive social proof scrum project growth hacking niche market user experience graphical user interface.',
  entities: [
    { start: 160, end: 184, label: 'very important' },
    { start: 144, end: 159, label: 'very important' },
    { start: 62, end: 69, label: 'important' },
    { start: 116, end: 130, label: 'nonsense' },
    { start: 8, end: 29, label: 'nonsense' }
  ]
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_LABEL: return { ...state, label: payload }

    case UPDATE_SELECTION:
      return {
        ...state,
        selectionStart: payload.selectionStart,
        selectionEnd: payload.selectionEnd
      }

    case UPDATE_TEXT: {
      const text = payload
      const entities = state.entities.reduce((acc, e) => {
        const selection = state.text.substr(e.start, e.end - e.start)

        const findClosestStart = lastMatch => {
          if (lastMatch == null) {
            const index = text.indexOf(selection)
            if (index === -1) return index
            return findClosestStart(index)
          }
          const from = lastMatch + selection.length
          const index = text.indexOf(selection, from)
          if (index === -1) return lastMatch
          const prevDiff = Math.abs(e.start - lastMatch)
          const nextDiff = Math.abs(e.start - index)
          if (prevDiff < nextDiff) return lastMatch
          return findClosestStart(index)
        }
        const start = findClosestStart()
        if (start === -1) return acc

        return [...acc, { ...e, start, end: start + selection.length }]
      }, [])

      return { ...state, text, entities }
    }

    case ADD_ENTITY: {
      const { selectionStart: start, selectionEnd: end, label } = state
      const entities = [...state.entities, { start, end, label }]
      return { ...state, entities }
    }

    case DELETE_ENTITY: {
      const { start, end, label } = payload
      const entities = state.entities.filter(
        x => !(x.start === start && x.end === end && x.label === label)
      )
      return { ...state, entities }
    }

    default: return state
  }
}

export default reducer
