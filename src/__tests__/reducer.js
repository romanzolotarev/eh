import reducer, {
  initialState,
  UPDATE_LABEL,
  UPDATE_SELECTION,
  UPDATE_TEXT,
  ADD_ENTITY,
  DELETE_ENTITY
} from '../components/reducer'

describe('reducer', () => {
  it('UPDATE_LABEL', () =>
    expect(
      reducer(initialState, {
        type: UPDATE_LABEL,
        payload: 'a'
      })
    ).toEqual({ ...initialState, label: 'a' }))

  it('UPDATE_SELECTION', () =>
    expect(
      reducer(initialState, {
        type: UPDATE_SELECTION,
        payload: { selectionStart: 1, selectionEnd: 2 }
      })
    ).toEqual({ ...initialState, selectionStart: 1, selectionEnd: 2 }))

  it('UPDATE_TEXT', () =>
    expect(
      reducer(initialState, {
        type: UPDATE_TEXT,
        payload: 'Venture first mover advantage'
      })
    ).toEqual({
      ...initialState,
      entities: [{ end: 29, start: 8, label: 'nonsense' }],
      text: 'Venture first mover advantage'
    }))

  it('ADD_ENTITY', () => {
    const state = {
      ...initialState,
      selectionStart: 1,
      selectionEnd: 2,
      label: 'a'
    }
    const entities = [...state.entities, { start: 1, end: 2, label: 'a' }]
    expect(reducer(state, { type: ADD_ENTITY })).toEqual({ ...state, entities })
  })

  it('DELETE_ENTITY', () => {
    const state = {
      entities: [
        { start: 1, end: 2, label: 'a' },
        { start: 3, end: 4, label: 'b' }
      ]
    }
    expect(
      reducer(state, {
        type: DELETE_ENTITY,
        payload: { start: 1, end: 2, label: 'a' }
      })
    ).toEqual({ ...state, entities: [{ start: 3, end: 4, label: 'b' }] })
  })
})
