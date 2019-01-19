import React from 'react'

const Comment = ({ comment }) => {
  let description = 'vazio'
  let email = 'vazio'
  if (comment) {
    if (comment.comment) {
      description = comment.comment
    }
    if (comment.email) {
      email = comment.email
    }
  }

  return (
    <div className='card mt-2'>
      <div className='card-body'>
        {description}
        <br />
        <span className='text-muted'>Enviado por: {email}</span>
      </div>
    </div>
  )
}

export default Comment
