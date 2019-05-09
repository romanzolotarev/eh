import React from 'react'
import Textarea from './Textarea'
import AddLabel from './AddLabel'
import Labels from './Labels'

const EntityHighlighter = props => (
  <>
    <Textarea {...props} />
    <AddLabel {...props} />
    <Labels {...props} />
  </>
)

export default EntityHighlighter
