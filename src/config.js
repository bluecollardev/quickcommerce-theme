{
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
                    heroSliders: [
                        { id: 'slide-01', className: 'slide', backgroundImage: 'img/hero-slider/01.jpg' },
                        { id: 'slide-02', className: 'slide', backgroundImage: 'img/hero-slider/02.jpg' },
                        { id: 'slide-03', className: 'slide', backgroundImage: 'img/hero-slider/03.jpg' }
                    ],
                    // Set if mapping static content
                    categories: [
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/about.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/account.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/blog.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/elements.jpg' },
                        { id: null, className: 'featured-image', backgroundImage: 'img/featured-image/faq.jpg' }
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
        { id: '', name: '', image: 'img/cart/item01.jpg' },
        { id: '', name: '', image: 'img/cart/item02.jpg' }
    ],
    catalog: {
        items: [
            { id: '', name: '', image: 'img/shop/th01.jpg' },
            { id: '', name: '', image: 'img/shop/th02.jpg' },
            { id: '', name: '', image: 'img/shop/th03.jpg' },
            { id: '', name: '', image: 'img/shop/th04.jpg' },
            { id: '', name: '', image: 'img/shop/th05.jpg' },
            { id: '', name: '', image: 'img/shop/th06.jpg' },
            { id: '', name: '', image: 'img/shop/th07.jpg' },
            { id: '', name: '', image: 'img/shop/th08.jpg' },
            { id: '', name: '', image: 'img/shop/th09.jpg' },
            { id: '', name: '', image: 'img/shop/th10.jpg' },
            { id: '', name: '', image: 'img/shop/th11.jpg' },
            { id: '', name: '', image: 'img/shop/th12.jpg' },
            { id: '', name: '', image: 'img/shop/th13.jpg' },
            { id: '', name: '', image: 'img/shop/th14.jpg' },
            { id: '', name: '', image: 'img/shop/th15.jpg' },
            { id: '', name: '', image: 'img/shop/th16.jpg' },
            //{ id: '', name: '', image: 'img/shop/th17.jpg' },
            //{ id: '', name: '', image: 'img/shop/th18.jpg' },
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
}