import React from 'react'

const Modal = (props) => {
	const { open, handleOpen } = props
	return (
		<div className='modal'>
			<h1>Modal Title</h1>
			<span>Hello i am modal!!!</span>
			<div className='modal-actions'>
				<button onClick={() => handleOpen(false)}>Ok</button>
				<button onClick={() => handleOpen(false)}>Cancel</button>
			</div>
		</div>
	)
}

export default Modal

