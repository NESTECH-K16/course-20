import React from 'react'

const BaseBadge = ({ icon, count, title }) => {
	return (
		<div className='base-badge'>
			<div className='base-badge__icon'>
				{icon}
				<span className='base-badge__count'>{count ? count : 0}</span>
			</div>
			<span className='base-badge__title'>{title}</span>
		</div>
	)
}

export default BaseBadge

