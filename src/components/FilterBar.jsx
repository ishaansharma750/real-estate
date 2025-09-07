export default function FilterBar({ value, onChange }) {
	return (
		<div className='flex items-center gap-3 flex-wrap'>
			<button
				onClick={() => onChange('all')}
				className={`px-3 py-2 rounded-xl border ${value === 'all' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''}`}>
				All
			</button>
			<button
				onClick={() => onChange('sale')}
				className={`px-3 py-2 rounded-xl border ${value === 'sale' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''}`}>
				For Sale
			</button>
			<button
				onClick={() => onChange('rent')}
				className={`px-3 py-2 rounded-xl border ${value === 'rent' ? 'bg-gray-900 text-white dark:bg-white dark:text-black' : ''}`}>
				For Rent
			</button>
		</div>
	);
}
