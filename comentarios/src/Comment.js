import React from 'react'

const Comment = ({ comment }) => {
  let description = 'vazio'
  if (comment && comment.comment) {
    description = comment.comment
  }

  return (
    <div>Comentário: {description}</div>
  )
}

export default Comment
