import { useState } from "react";
function Bookingform() {
  const [formData, setformData] = useState({});
  const handleChange = (e) => {
    const {name, value,files } = e.target;
    setformData((previousData) => ({
      ...previousData,[name] : (name === "HotelImage")?files[0]:value
  }));
  
  };
  //   const handleFile = (e)=>{
//     const {name,files} = e.target;
//     setFormData((previousData)=>({
//         ...previousData,[name]:files[0]
//     }))
//   }
const handleSubmit =async (e)=>{
  e.preventDefault();
  console.log(formData);
  //api
  const formD = new FormData();
  formD.append("HotelName",formData.HotelName)
  formD.append("HotelPhonenumber",formData.HotelPhonenumber)
  formD.append("Hotelemail",formData.Hotelemail)
  formD.append("HotelAddress",formData.HotelAddress)
  formD.append("Hotelpassword",formData.Hotelpassword)
  formD.append("HotelImage",formData.HotelImage)
  const response = await fetch("http://localhost:8300/Bookingform",{
      method:"post",
      body:formD
  })
  const jsonData = await response.json();
  console.log(jsonData)
}
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     //api
//     const response = await fetch("http://localhost:8300/Bookingform",{
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const jsonData = await response.json();
//     console.log(jsonData);

// };
  console.log(formData);
  
    return (
      <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up for an account
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
        <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                Hotel name
            </label>
            <div className="mt-2">
              <input
                id="Username"
                name="HotelName"
                type="text"
                autoComplete="Username"
                onChange={handleChange}
                value={formData.HotelName}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                Hotel Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="Hotelemail"
                type="email"
                autoComplete="Hotelemail"
                onChange={handleChange}
                value={formData.email}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                 Hotel Phone Number
            </label>
            <div className="mt-2">
              <input
                id="Phonenumber"
                name="HotelPhonenumber"
                type="tel"
                autoComplete="Phonenumber"
                onChange={handleChange}
                value={formData.HotelPhonenumber}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                Location
            </label>
            <div className="mt-2">
              <input
                id="Address"
                name="HotelAddress"
                type="text"
                autoComplete="Address"
                onChange={handleChange}
                value={formData.HotelAddress}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                 Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="Hotelpassword"
                type="password"
                autoComplete="new-password"
                onChange={handleChange}
                value={formData.Hotelpassword}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
                 UploadImage
            </label>
            <div className="mt-2">
              <input
                id="Image"
                name="HotelImage"
                type="file"
                autoComplete="new-password"
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                 Sign up
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>

      </>
    )
  }
  
  export default Bookingform
  