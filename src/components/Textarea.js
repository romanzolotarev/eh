import React from 'react'
import getColor from './getColor'
import styles from './styles'

import { UPDATE_TEXT, UPDATE_SELECTION } from './reducer'

const Textarea = ({ state, dispatch }) => {
  const renderEntityHighlight = (e, i) => {
    const start = state.text.substr(0, e.start)
    const value = state.text.substr(e.start, e.end - e.start)
    const end = state.text.substr(e.end)
    return (
      <div key={i} style={{ ...styles.highlightText, ...styles.zeroPos }}>
        <span>{start}</span>
        <span style={{ backgroundColor: getColor(0.3, e.label) }}>{value}</span>
        <span>{end}</span>
      </div>
    )
  }

  const changeSelection = e => {
    const { selectionStart, selectionEnd } = e.target
    dispatch({
      type: UPDATE_SELECTION,
      payload: { selectionStart, selectionEnd }
    })
  }

  return (
    <div style={styles.textarea}>
      <textarea
        rows={10}
        value={state.text}
        style={styles.input}
        onClick={changeSelection}
        onKeyDown={changeSelection}
        onSelect={changeSelection}
        onChange={e =>
          dispatch({
            type: UPDATE_TEXT,
            payload: e.target.value
          })
        }
      />
      {state.entities.map(renderEntityHighlight)}
    </div>
  )
}

export default Textarea
