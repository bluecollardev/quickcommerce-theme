export default {
    settings: {
        siteName: 'Quick Commerce',
        title: 'Welcome to Quick Commerce',
        logo: { image: 'img/logo.png' },
        address: {
            line1: '123 Test Street',
            line2: '',
            city: 'Edmonton',
            zone: 'Alberta',
            country: 'Canada',
            postcode: 'T6T6T6'
        },
        telephone: '(555) 555.5555',
        cell: '(666) 666.6666',
        fax: '(777) 777.7777',
        email: 'mysite@example.com',
        skype: 'mysiteexample',
        instagram: 'mysiteexample',
        facebook: 'mysiteexample',
        twitter: 'mysiteexample',
        google: 'mysiteexample',
        hours: '9 - 5 Monday to Friday',
        copyright: 'Firebrand Web Solutions',
        paymentMethods: ['Visa', 'Paypal', 'MasterCard', 'Discover']
    },
    header: {
        
    },
    menu: {
        items: [
            { title: 'Home', url: '#/home'},
            { title: 'Shop', url: '#/shop'},
            { title: 'Blog', url: '#/blog'},
            { title: 'Gallery', url: '#/gallery'},
            { title: 'About', url: '#/about'},
            { title: 'Contacts', url: '#/contacts'},
            { title: 'Faq', url: '#/faq'},
            { title: 'Elements', url: '#/elements'}
        ]
    },
    pages: [
        {
            id: 'home',
            layout: {
                images: {
                    heroSlides: [
                        { id: 'phobulous', className: 'slide', backgroundImage: 'img/hero-slider/phobulous/fhd/20170911-DSCF5637.jpg' },
                        { id: 'salad-rolls', className: 'slide', backgroundImage: 'img/hero-slider/phobulous/fhd/20170911-DSCF5532.jpg' },
                        { id: 'rice-dishes', className: 'slide', backgroundImage: 'img/hero-slider/phobulous/fhd/20170911-DSCF5727.jpg' }
                    ],
                    // Set if mapping static content
                    categories: [
                        { 
                            id: 'pho',
                            title: 'Noodle Soups (Pho)',
                            className: 'featured-image', 
                            backgroundImage: 'img/featured-image/phobulous/fhd/20170911-DSCF5641.jpg' 
                        },
                        { 
                            id: 'bun', 
                            title: 'Noodle Bowls (Bun)', 
                            className: 'featured-image', 
                            backgroundImage: 'img/featured-image/phobulous/fhd/20170911-DSCF5683.jpg' 
                        },
                        { 
                            id: 'rice', 
                            title: 'Rice Dishes', 
                            className: 'featured-image', 
                            backgroundImage: 'img/featured-image/phobulous/fhd/20170911-DSCF5729.jpg' 
                        },
                        { 
                            id: 'appetizers', 
                            title: 'Appetizers', 
                            className: 'featured-image', 
                            backgroundImage: 'img/featured-image/phobulous/fhd/20170911-DSCF5578.jpg'
                        }
                    ],
                    featured: [
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/about.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/account.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/blog.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/elements.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/faq.jpg' }
                    ],
                    section: [
                        { id: 'features', className: 'video-bg', backgroundImage: 'img/features_bg.jpg' },
                        { id: 'video', className: 'video-bg', backgroundImage: 'img/video-bg.jpg' },
                        { className: 'fw-section', backgroundImage: 'img/video_bg.jpg' },
                    ]
                }
            }
        },
        {
            id: 'about',
            title: 'About',
            content: [
                { id: 'brand' },
                { id: 'mission' }
            ]
        }
    ],
    faq: [
        // Use markdown
    ],
    cart: [
        { 
            id: '', 
            name: 'Noodle Soup with Rare Beef, Brisket and Meat Balls', 
            image: 'img/products/fhd/20170911-DSCF5603.jpg' 
        },
        { 
            id: '', 
            name: 'Deep-Fried Spring Rolls', 
            image: 'img/products/fhd/20170911-DSCF5509.jpg' 
        }
    ],
    catalog: {
        items: [
            { id: '', name: 'Deep-Fried Spring Rolls', image: 'img/products/fhd/20170911-DSCF5509.jpg' },
            { id: '', name: 'Fresh Salad Rolls', image: 'img/products/fhd/20170911-DSCF5532.jpg' },
            { id: '', name: 'Gyoza Dumplings', image: 'img/products/fhd/20170911-DSCF5556.jpg' },
            { id: '', name: 'Noodle Soup with Rare Beef, Brisket and Meat Balls', image: 'img/products/fhd/20170911-DSCF5603.jpg' },
            { id: '', name: 'Spicy Satay Noodle Soup with Seafood', image: 'img/products/fhd/20170911-DSCF5650.jpg' },
            { id: '', name: 'Vermicelli with Seafood and Spring Rolls', image: 'img/products/fhd/20170911-DSCF5683.jpg' },
            { id: '', name: 'Vermicelli with Beef and Spring Rolls', image: 'img/products/fhd/20170911-DSCF5701.jpg' },
            { id: '', name: 'Rice with Satay Shrimp', image: 'img/products/fhd/20170911-DSCF5727.jpg' }
        ],
        categories: [
            { id: '', name: '', image: 'img/categories/cat01.jpg' },
            { id: '', name: '', image: 'img/categories/cat02.jpg' },
            { id: '', name: '', image: 'img/categories/cat03.jpg' },
            { id: '', name: '', image: 'img/categories/cat04.jpg' },
        ],
        manufacturers: [
            { id: '', name: '', image: 'img/brands/01.svg' },
            { id: '', name: '', image: 'img/brands/02.svg' },
            { id: '', name: '', image: 'img/brands/03.svg' },
            { id: '', name: '', image: 'img/brands/04.svg' },
            { id: '', name: '', image: 'img/brands/05.svg' },
            { id: '', name: '', image: 'img/brands/06.svg' }
        ]
    },
    random: [
        { image: 'img/shop/special-offer.jpg' },
        { image: 'img/cards.png' },
    ]
};