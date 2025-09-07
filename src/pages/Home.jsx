import { useEffect, useMemo, useState } from 'react';
import { fetchProperties } from '../services/Api';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import Featured from '../components/Featured';
import Newsletter from '../components/NewsLetter';
import '../components/Style.css';
import PropertiesSection from '../components/PropertiesSection';

export default function Home() {
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
		<>
			<main>
				<section className='page-section'>
					<Hero />
				</section>
				<section className='page-section'>
					<WhatWeDo />
				</section>
				<section className='page-section'>
					<Featured />
				</section>
				<section className='page-section'>
					<PropertiesSection properties={items} sell={true}/>
				</section>
				<section className='page-section'>
					<PropertiesSection properties={items} sell={false}/>
				</section>
				<section className='page-section'>
					<Newsletter />
				</section>
			</main>
		</>
	);
}
