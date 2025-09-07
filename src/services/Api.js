import axios from 'axios';

const API_URL = 'https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing';

function mapProperty(p) {
	const idNum = Number(p.id) || 0;
	const propertyType = idNum % 2 === 0 ? 'rent' : 'sale'; // derived until API provides real field
	return {
		id: p.id,
		title: `${p.buildingNumber} ${p.cardinalDirection} ${p.city}`,
		city: p.city,
		country: p.country,
		state: p.state,
		image: p.image,
		ownerName: p.ownerName,
		contactNumber: p.contactNumber,
		latitude: p.latitude,
		longitude: p.longitude,
		createdAt: p.createdAt,
		propertyType,
	};
}

export const fetchProperties = async () => {
	const { data } = await axios.get(API_URL);
	return Array.isArray(data) ? data.map(mapProperty) : [];
};
