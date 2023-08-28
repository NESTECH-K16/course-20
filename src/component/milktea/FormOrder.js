import React, { useContext, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import { SpinnerCircular } from 'spinners-react'
import { cartContext } from '../../context/cart-context'

const FormOrder = ({ setShowOrder }) => {
	const cartCtx = useContext(cartContext)

	const userNameRef = useRef()
	const phoneRef = useRef()
	const emailRef = useRef()
	const addressRef = useRef()

	const [loading, setLoading] = useState(false)

	const [formIsValid, setFormIsValid] = useState({
		username: {
			val: '',
			isValid: true,
		},
		phone: {
			val: '',
			isValid: true,
		},
		email: {
			val: '',
			isValid: true,
		},
		address: {
			val: '',
			isValid: true,
		},
	})

	const submitHandler = async (e) => {
		e.preventDefault()
		const username = userNameRef.current.value
		const phone = phoneRef.current.value
		const email = emailRef.current.value
		const address = addressRef.current.value

		if (username.trim() === '') {
			setFormIsValid((prevState) => ({ ...prevState, username: { ...prevState.username, isValid: false } }))
		}

		if (email.trim() === '') {
			setFormIsValid((prevState) => ({ ...prevState, email: { ...prevState.email, isValid: false } }))
		}
		if (phone.trim() === '') {
			setFormIsValid((prevState) => ({ ...prevState, phone: { ...prevState.phone, isValid: false } }))
		}
		if (address.trim() === '') {
			setFormIsValid((prevState) => ({ ...prevState, address: { ...prevState.address, isValid: false } }))
		}
		if (username.trim() === '' || email.trim() === '' || phone.trim() === '' || address.trim() === '') {
			return
		}

		const userInfo = {
			username,
			phone,
			email,
			address,
		}

		setLoading(true)

		try {
			await fetch(`https://foody-1d42f-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json`, {
				method: 'POST',
				'Content-Type': 'application/json',
				body: JSON.stringify({ userInfo, cart: cartCtx.cart }),
			})
			setLoading(false)
			toast.success('Save order successfully!', { position: 'top-right' })
			cartCtx.updateCart({ items: [], totalItems: null })
		} catch (err) {
			console.log(err)
			setLoading(false)
		}

		setShowOrder(false)

		// const formIsValid = username.trim() !== '' && phone.trim() !== '' && email.trim() !== '' && address.trim() !== ''
		// if (!formIsValid) {
		// 	return
		// }
	}

	return (
		<form className='form-order base-card' onSubmit={submitHandler}>
			<span>User Information</span>
			<div className={`form-control ${!formIsValid.username.isValid ? 'invalid' : ''}`}>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' placeholder='Enter your username' ref={userNameRef} />
				{!formIsValid.username.isValid && <p className='invalid'>Please enter your name</p>}
			</div>
			<div className={`form-control ${!formIsValid.email.isValid ? 'invalid' : ''}`}>
				<label htmlFor='email'>Email</label>
				<input type='text' id='email' placeholder='Enter your email' ref={emailRef} />
				{!formIsValid.email.isValid && <p className='invalid'>Please enter your email</p>}
			</div>
			<div className={`form-control ${!formIsValid.phone.isValid ? 'invalid' : ''}`}>
				<label htmlFor='phone'>Phone</label>
				<input type='text' id='phone' placeholder='Enter your phone number' ref={phoneRef} />
				{!formIsValid.phone.isValid && <p className='invalid'>Please enter your phone</p>}
			</div>
			<div className={`form-control ${!formIsValid.address.isValid ? 'invalid' : ''}`}>
				<label htmlFor='address'>Address</label>
				<input type='text' id='address' placeholder='Enter your address' ref={addressRef} />
				{!formIsValid.address.isValid && <p className='invalid'>Please enter your address</p>}
			</div>
			{/* <SpinnerCircular enabled={loading} /> */}

			<button>Submit</button>
		</form>
	)
}

export default FormOrder

