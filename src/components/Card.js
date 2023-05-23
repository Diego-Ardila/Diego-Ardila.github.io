import './Card.css';

function Card({ title, items }) {
	return (
		<ul className="card">
			<li className='list-title'>
				{title}
			</li>
			{items.map(item => (
				<li className='list-item' key={item.name}>
					{item.logo}
					{item.name}
				</li>
			))}
		</ul>
	)
}

export default Card;