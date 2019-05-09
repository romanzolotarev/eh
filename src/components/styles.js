const styles = {
  app: {
    textAlign: 'center',
    padding: '2em',
    width: '60%',
    margin: '0 auto',
    color: 'black',
    maxWidth: 750,
    minWidth: 250
  },
  textarea: { position: 'relative' },
  highlightText: {
    color: 'transparent',
    pointerEvents: 'none',
    padding: '0',
    whiteSpace: 'pre-wrap',
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    fontSize: 14
  },
  zeroPos: {
    textAlign: 'left',
    position: 'absolute',
    top: 1,
    left: 1
  },
  input: {
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
    fontSize: 14,
    background: 'none',
    border: '1px solid',
    width: '100%',
    resize: 'none'
  },
  deleteLabelButton: {
    border: '0 none',
    color: 'rgba(0,0,0,0.8)',
    cursor: 'pointer',
    padding: '0 0 0 .25rem',
    backgroundColor: 'transparent'
  },
  addLabelInput: {
    border: '1px solid',
    backgroundColor: '#fff',
    padding: '.5rem',
    marginRight: '.5rem'
  },
  addLabelButton: {
    border: '1px solid',
    padding: '.5rem'
  },
  label: {
    borderRadius: '.25rem',
    color: 'rgba(0,0,0,0.8)',
    fontSize: '.7rem',
    padding: '.25rem',
    border: '1px solid',
    lineHeight: '1.8rem',
    margin: '.25rem'
  },
  section: { marginTop: '.5rem' }
}

export default styles
