import React from 'react'
import getColor from './getColor'
import styles from './styles'

import { UPDATE_LABEL, ADD_ENTITY } from './reducer'

const isSelected = ({ selectionStart, selectionEnd }) =>
  selectionStart !== selectionEnd

const AddLabel = ({ state, dispatch }) => (
  <div style={styles.section}>
    <input
      value={state.label}
      style={styles.addLabelInput}
      placeholder='Entity label'
      disabled={!isSelected(state)}
      onChange={e =>
        dispatch({
          type: UPDATE_LABEL,
          payload: e.target.value
        })
      }
    />
    <button
      style={{
        ...styles.addLabelButton,
        backgroundColor: state.label && getColor(0.3, state.label)
      }}
      onClick={() => dispatch({ type: ADD_ENTITY })}
      disabled={!isSelected(state) || !state.label}
    >
      Add entity for selection
    </button>
  </div>
)

export default AddLabel
