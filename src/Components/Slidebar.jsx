function Slidebar() {
    return (
      <>
      <>
  <nav className="bg-purple-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Hotel Booking</div>
      <div className="space-x-4">
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Sign In
        </a>
        <a href="#" className="hover:underline">
          Sign Up
        </a>
        <a href="#" className="hover:underline">
          Search
        </a>
      </div>
    </div>
  </nav>
  {/* Main Content */}
  <main className="flex-grow container mx-auto p-6">
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">
        Welcome to Our Hotel
      </h1>
      <p className="text-gray-700 mb-6">
        Experience luxury and comfort in the heart of the city. Book your stay
        with us today!
      </p>
      {/* Booking Form */}
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            placeholder="Check-in Date"
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="date"
            placeholder="Check-out Date"
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </div>
  </main>
  {/* Footer */}
  <footer className="bg-purple-600 text-white p-4">
    <div className="container mx-auto text-center space-y-2">
      <div>
        <a href="#" className="hover:underline">
          Instagram
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          Facebook
        </a>{" "}
        |
        <a href="#" className="hover:underline">
          Telegram
        </a>
      </div>
      <p>© 2024 Hotel Booking. All rights reserved.</p>
    </div>
  </footer>
</>

      </>
    )
  }
  
  export default Slidebar
  