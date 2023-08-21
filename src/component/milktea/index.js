import React from 'react'

const MilkTea = (props) => {
	const { name, price, count, onChangeTotalMilkTea, id } = props
	return (
		<div className='milk-tea'>
			<div className='milk-tea__left'>
				<span>{name}</span>
				<span>{price}</span>
			</div>
			{/* <span>{count}</span> */}
			<input
				type='number'
				onChange={(e) => {
					const milkInfo = {
						total: parseInt(e.target.value),
						name,
						price,
						id,
					}
					onChangeTotalMilkTea(id, milkInfo)
				}}
			/>
		</div>
	)
}

export default MilkTea

