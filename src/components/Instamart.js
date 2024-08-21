import React from 'react';

const categories = [
  
  
    {
    id: 1,
    name: 'Snacks',
    items: ['Chips', 'Cookies', 'Nuts', 'Popcorn'],
  },

  {
    id: 2,
    name: 'Pizza',
    items: ['Margherita', 'Pepperoni', 'BBQ Chicken', 'Veggie'],
  },
  {
    id: 3,
    name: 'KFC',
    items: ['Original Chicken', 'Zinger Burger', 'Hot Wings', 'Popcorn Chicken'],
  },
  {
    id: 4,
    name: 'Chinese',
    items: ['Spring Rolls', 'Chow Mein', 'Sweet and Sour Chicken', 'Dumplings'],
  },
  {
    id: 5,
    name: 'Veg-Burgers',
    items: ['Cheeseburger', 'Veggie Burger', 'Bacon Burger', 'Mashroom Burger'],
  },
  {
    id: 5,
    name: 'Non-Veg Biryani',
    items: ['Chicken Biryani', 'Mutton Biryani', 'Egg Biryani', 'Chicken Dum Biryani'],
  },
  {
    id: 5,
    name: 'Non-Veg Burgers',
    items: ['Chicken Cheeseburger', 'Chicken Veggie Burger', 'Chicken Tandoori Burger', 'Chicken Burger'],
  },
  {
    id: 5,
    name: 'Veg Biryani',
    items: [' Soyabean Biryani', 'Paneer Biryani', 'Dum Biryani', 'Mix Veg Biryani'],
  },
];

const Instamart = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Instamart</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{category.name}</h2>
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li key={index} className="text-gray-700">
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                Choose your Favourite
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instamart;