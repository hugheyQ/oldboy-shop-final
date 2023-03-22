const data = {
	products: [
		{
			brand: 'Samsung',
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
			price: 200,
			image: '/images/1.jpg',
		},
		{
			brand: 'Panasonic',
			title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit',
			price: 50,
			image: '/images/2.jpg',
		},
	],
	categories: [
		{
			title: 'Networking',
			subCategories: [
				{
					title: 'Network Infrastructure',
					links: [
						{ title: 'Data Cable', slug: 'data-cable' },
						{ title: 'Modules & Faceplates', slug: 'modules-&-faceplates' },
						{
							title: 'Network Plug and Connectors',
							slug: 'network-plug-and-connectors',
						},
						{ title: 'Patch Cables', slug: 'patch-cable' },
						{
							title: 'Patch Panels & Cable Management',
							slug: 'patch-panels-&-cable-management',
						},
					],
				},
				{
					title: 'Network Cabinets',
					links: [
						{ title: 'Cabinet Accessories', slug: 'cabinet-accessories' },
						{
							title: 'Server & Data Cabinets',
							slug: 'server-&-data-cabinets',
						},
					],
				},
				{
					title: 'Network devices',
					links: [
						{ title: 'Media Converters', slug: 'media-converters' },
						{ title: 'Network Switches', slug: 'network-switches' },
						{ title: 'Powerline', slug: 'powerline' },
						{ title: 'Routers & Gateways', slug: 'routers-&-gateways' },
						{
							title: 'Wireless Aerials & Accessories',
							slug: 'wireless-aerials-&-accessories',
						},
						{ title: 'Wireless Bridges', slug: 'wireless-bridges' },
					],
				},
			],
		},
		{
			title: 'Security',
			subCategories: [
				{
					title: 'Access Control',
					links: [
						{ title: 'Access Control Cable', slug: 'access-control-cable' },
						{
							title: 'Access Control Power Supplies',
							slug: 'access-control-power-supplies',
						},
						{ title: 'Assistance Alarms', slug: 'assistance-alarms' },
						{ title: 'Electronic Locks', slug: 'electronic-locks' },
						{
							title: 'Exit Buttons & Call Points',
							slug: 'exit-buttons-&-call-points',
						},
						{ title: 'Intercoms', slug: 'intercoms' },
					],
				},
				{
					title: 'CCTV',
					links: [
						{ title: 'CCTV Accessories', slug: 'cctv-accessories' },
						{ title: 'CCTV Cameras', slug: 'cctv-cameras' },
						{ title: 'CCTV Monitors', slug: 'cctv-monitors' },
						{ title: 'CCTV Recorders', slug: 'cctv-recorders' },
					],
				},
				{
					title: 'Intruder Alarms',
					links: [
						{ title: 'Perimeter Detection', slug: 'perimeter-detection' },
						{ title: 'Wired Alarm Systems', slug: 'wired-alarm-system' },
						{
							title: 'Wireless Alarm Systems',
							slug: 'wireless-alarm-systems',
						},
						{ title: 'CCTV Recorders', slug: 'cctv-recorders' },
					],
				},
			],
		},
	],
	carouselItems: [
		{
			title: 'Security',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore.',
			imageUrl: '/images/bannerImage1.jpg',
			imageAlt: 'Front of a house with the lights on',
		},
		{
			title: 'Smart Home',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore.',
			imageUrl: '/images/bannerImage2.jpg',
			imageAlt: "Amazon's Alexa on a table",
		},
		{
			title: 'Networking',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptates labore.',
			imageUrl: '/images/bannerImage3.jpg',
			imageAlt: 'Electrician at work',
		},
	],
}

export default data
