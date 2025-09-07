import { useEffect, useMemo, useState } from 'react';
import { fetchProperties } from '../services/api';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';

export default function Listings() {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		(async () => {
			try {
				const data = await fetchProperties();
				setItems(data);
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	const filtered = useMemo(() => items.filter((i) => (filter === 'all' ? true : i.propertyType === filter)), [items, filter]);

	return (
		<section className='section py-12'>
			<div className='flex items-center justify-between mb-4'>
				<h1 className='text-2xl font-bold'>All Properties</h1>
				<FilterBar value={filter} onChange={setFilter} />
			</div>
			{loading ? (
				<div>Loading…</div>
			) : (
				<div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
					{filtered.map((item) => (
						<PropertyCard key={item.id} item={item} />
					))}
				</div>
			)}
		</section>
	);
}
