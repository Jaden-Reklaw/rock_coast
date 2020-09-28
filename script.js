// Select DOM Elements
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');
const navItems = [nav1, nav2, nav3, nav4, nav5];
const dealsContainer = document.getElementById('deals-container');

const products = [
    {
        product_name: 'Hiking Boots',
        image: 'https://images.unsplash.com/photo-1545066230-919660a9290a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        description: 'Steel toed and keep feet warm up to 32• below',
        dimensions: 'Men 8 - 16',
        price: '$84.99',
    },
    {
        product_name: 'Satellite Phone',
        image: 'https://images.unsplash.com/photo-1589915564819-37353ad7264d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        description: 'The Thuraya X5-Touch is the world’s first Android based satellite phone and & GSM cell phone offering amazing flexibility to use satellite or cellular networks whenever you need to roam. The Thuraya X5 Touch satellite phone runs Android operating system and has a 5.2” full HD touchscreen.',
        dimensions: '2.5 x 4',
        price: '$1,199.00',
    },
    {
        product_name: 'Bow',
        image: 'https://images.unsplash.com/photo-1590585382453-8b749e9d5224?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Right Handed Draw Weight 5-70lbs Camo',
        dimensions: '31.5',
        price: '$149.99',
    },
    {
        product_name: 'All Weather Tent',
        image: ' https://images.unsplash.com/photo-1506535995048-638aa1b62b77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        description: ' Temperature, noise, & light insulation',
        dimensions: ' 6 x 7',
        price: '$299.99',
    },
    {
        product_name: 'Survival Training Handbook',
        image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        description: 'Bear Grylls book on survival',
        dimensions: '285 pages',
        price: '$19.99',
    },
];

//Create a helper function to assist in the creation of elements
function setAttributes(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

//Function to create cards for products
function displayProducts() {
    products.forEach(product => {
        //Create Parent Article with card class
        const article = document.createElement('article');
        article.classList.add('card');
        //Create Header to hold Product Name and Dimensions
        const header = document.createElement('header');
        //Create H2 for Prduct Name
        const name = document.createElement('h2');
        name.textContent = `${product.product_name}`;
        header.appendChild(name);
        //Create h3 for Prduct Dimension
        const h3 = document.createElement('h3');
        h3.textContent = `Dimesions: ${product.dimensions}`;
        header.appendChild(h3);
        article.appendChild(header);
        //Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, { 
            src: product.image,
            alt: product.description,
            title: product.description,
        });
        article.appendChild(img);
        //Create div for product content
        const div = document.createElement('div');
        div.classList.add('content');
        //Create H3 for Prduct Price
        const price = document.createElement('h3');
        price.textContent = `${product.price}`;
        div.appendChild(price);
        article.appendChild(div);
        //Create Button
        const btn = document.createElement("button");
        btn.classList.add('button', 'btn1')   // Create a <button> element
        btn.textContent = "Buy it Now!";                   // Insert text
        article.appendChild(btn);
        dealsContainer.appendChild(article);
    });
}

// Control Naviation Animation
function navAnimation(direction1, direction2) {
    navItems.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`);
    });
}

function toggleNav() {
    // Toggle: Menu Bars Open/Closed
    menuBars.classList.toggle('change');
    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');
    if(overlay.classList.contains('overlay-active')) {
        // Animate In - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
        //Animate In - Items
        navAnimation('out', 'in');
    } else{
        //Animate Out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
        // Animate Out - Items
        navAnimation('in', 'out');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});

//On load
displayProducts();