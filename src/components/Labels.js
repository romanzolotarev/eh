import React from 'react'
import getColor from './getColor'
import styles from './styles'

import { DELETE_ENTITY } from './reducer'

const isSelected = ({ selectionStart, selectionEnd }) =>
  selectionStart !== selectionEnd

const Labels = ({ state, dispatch }) => {
  const labels = state.entities.filter(
    e => e.start <= state.selectionStart && e.end > state.selectionStart
  )

  return (
    !isSelected(state) && (
      <div style={styles.section}>
        {labels.map((e, i) => {
          const backgroundColor = getColor(0.3, e.label)
          const color = getColor(1, e.label)
          return (
            <span
              key={i}
              onClick={() =>
                dispatch({
                  type: DELETE_ENTITY,
                  payload: e
                })
              }
              style={{
                ...styles.label,
                borderColor: color,
                backgroundColor
              }}
            >
              {state.text.substring(e.start, e.end)} ({e.label})
              <span
                style={styles.deleteLabelButton}
                role='img'
                aria-label='Delete'
              >
                x
              </span>
            </span>
          )
        })}
      </div>
    )
  )
}

export default Labels
