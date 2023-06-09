const data = {
	products: [
		{
			id: 1,
			brand: 'Samsung',
			title: 'Rackmount cage nuts 50 Pack Black',
			price: 200,
			image: '/images/1.jpg',
			stock: 0,
			discounted: true,
			discount: 5,
			bestSeller: false,
			new: false,
		},
		{
			id: 2,
			brand: 'Panasonic',
			title: 'Haydon 16 Way 1U Rack Mount Power Supply 16 Amp Fused',
			price: 50,
			image: '/images/2.jpg',
			stock: 100,
			discounted: false,
			newPrice: 0,
			bestSeller: true,
			new: true,
		},

		{
			id: 3,
			brand: 'Samsung',
			title: '19" Cabinet Perforated Blanking Plate',
			price: 200,
			image: '/images/1.jpg',
			stock: 0,
			discounted: false,
			discount: 0,
			bestSeller: false,
			new: true,
		},
		{
			id: 4,
			brand: 'Panasonic',
			title:
				'10” SOHO 1U Rack Mount Surge Protected Three Way 13 Amp PDU',
			price: 50,
			image: '/images/2.jpg',
			stock: 100,
			discounted: false,
			newPrice: 0,
			bestSeller: false,
			new: true,
		},

		{
			id: 5,
			brand: 'Samsung',
			title: 'UK Socket / UK Plug PDU Horizontal 8 Way',
			price: 200,
			image: '/images/1.jpg',
			stock: 0,
			discounted: false,
			discount: 5,
			bestSeller: false,
			new: true,
		},
		{
			id: 6,
			brand: 'Panasonic',
			title:
				'UK Socket / UK Plug PDU Horizontal 7 Way with Surge Protection',
			price: 500,
			image: '/images/2.jpg',
			stock: 100,
			discounted: true,
			discount: 10,
			newPrice: 0,
			bestSeller: false,
			new: true,
		},

		// {
		// 	id: 7,
		// 	brand: 'Samsung',
		// 	title: 'Rack Mount Fan Tray for Server, Data and Network Cabinets',
		// 	price: 200,
		// 	image: '/images/1.jpg',
		// 	stock: 0,
		// 	discounted: false,
		// 	discount: 5,
		// 	bestSeller: true,
		// 	new: false,
		// },
		// {
		// 	id: 8,
		// 	brand: 'Panasonic',
		// 	title: 'Vertical Cable Management Racks for 800mm Wide Cabinets',
		// 	price: 50,
		// 	image: '/images/2.jpg',
		// 	stock: 100,
		// 	discounted: false,
		// 	newPrice: 0,
		// 	bestSeller: true,
		// 	new: true,
		// },
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
	blogs: [
		{
			title: 'Lorem ipsum, dolor sit amet consectetur.',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsa provident aliquam, illum omnis id voluptatum ea, est quisquam nihil, itaque nostrum maxime quibusdam dignissimos	architecto? Dicta ratione laborum ad.',
			image: '/images/blog1.jpg',
		},
		{
			title: 'Lorem ipsum, dolor sit amet consectetur.',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsa provident aliquam, illum omnis id voluptatum ea, est quisquam nihil, itaque nostrum maxime quibusdam dignissimos	architecto? Dicta ratione laborum ad.',
			image: '/images/blog2.jpg',
		},
		{
			title: 'Lorem ipsum, dolor sit amet consectetur.',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsa provident aliquam, illum omnis id voluptatum ea, est quisquam nihil, itaque nostrum maxime quibusdam dignissimos	architecto? Dicta ratione laborum ad.',
			image: '/images/blog1.jpg',
		},
		{
			title: 'Lorem ipsum, dolor sit amet consectetur.',
			body:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ipsa provident aliquam, illum omnis id voluptatum ea, est quisquam nihil, itaque nostrum maxime quibusdam dignissimos	architecto? Dicta ratione laborum ad.',
			image: '/images/blog2.jpg',
		},
	],
}

export default data
