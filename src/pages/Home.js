import React from 'react';

const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      price: 12.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 14.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      price: 11.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      price: 9.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      price: 15.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 6,
      title: "Dune",
      author: "Frank Herbert",
      price: 13.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      price: 10.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 8,
      title: "Lord of the Flies",
      author: "William Golding",
      price: 11.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      price: 12.99,
      imageUrl: "https://images.pexels.com/photos/2386687/pexels-photo-2386687.jpeg"
    }
  ];


const Home = () => {
    return(
    <div>
        <h1 class="h1">Welcome to The Cozy Corner</h1>

        <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="relative mb-12 max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search for books..."
          className="w-full px-4 py-3 pl-12 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
              <p className="text-gray-600 mb-2">{book.author}</p>
              <p className="text-blue-600 font-bold mb-4">${book.price}</p>
              <div className="flex gap-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 flex-1">
                  Read
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex-1">
                  Rent
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
    );
}

export default Home;