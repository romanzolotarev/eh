import React, { useReducer } from 'react'
import EntityHighlighter from './EntityHighlighter'
import reducer, { initialState } from './reducer'
import styles from './styles'

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div style={styles.app}>
      <EntityHighlighter state={state} dispatch={dispatch} />
    </div>
  )
}

export default App
