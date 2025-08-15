import React, { useState } from 'react'
import { Title } from '../../Components/owner/Title'
import { assets } from '../../assets/assets'

const AddCar = () => {

  const [image,setImage] = useState(null)
  const [car,setCar] = useState({
    brand:'',
    model:'',
    year:0,
    pricePerDay:0,
    category:'',
    transmission:'',
    fuel_type:'',
    seating_capacity:0,
    location:'',
    description:'',
  })

const onSubmitHandler = async (e) =>{
  e.preventDefault()
}

  return (
    <div  className='px-4 py-10 md:px-10 flex-1'>
        <Title title="Add New Car" subTitle="Fill in details to list a new car for booking, including pricing,availability, and car specification."/>
        <form onSubmit={onSubmitHandler} className='flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl'>
            {/* Car Image */}
             <div className='flex items-center gap-2 w-full'>
              <label htmlFor="car-image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt="" className='h-14 rounded cursor-pointer '/>
                <input type="file" id='car-image' accept='image/*' hidden onChange={e=>setImage(e.target.files[0])}/>
              </label>
              <p className='text-sm text-gray-500'>Upload a picture of your car</p>
             </div>

             {/* car Brand and Model */}

             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col w-full'>
                  <label >Brand</label>
                  <input type="text" placeholder='eg. BMW, Mercedes , Audi ...' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.brand} onChange={e=>setCar({...car,brand:e.target.value})}/>
              </div>
              <div className='flex flex-col w-full'>
                  <label >Model</label>
                  <input type="text" placeholder='eg.X5,E-Class , M4 ....' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.model} onChange={e=>setCar({...car,model:e.target.value})}/>
              </div>
             </div>

              {/* Car year , Price , Category */}

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                   <div className='flex flex-col w-full'>
                  <label >Year</label>
                  <input type="number" placeholder='2025' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.year} onChange={e=>setCar({...car,year:e.target.value})}/>
              </div>
              <div className='flex flex-col w-full'>
                  <label >Daily Price ($)</label>
                  <input type="number" placeholder='$200' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.pricePerDay} onChange={e=>setCar({...car,pricePerDay:e.target.value})}/>
              </div>
              <div className='flex flex-col w-full'>
                  <label htmlFor="">Category</label>
                 <select onChange={e=>setCar({...car,category:e.target.value})} value={car.category} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                  <option value="">Select a category</option>
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Van">Van</option>
                 </select>
              </div>
              </div>
              {/* Car Transmission , Fuel Type , Seating Capacity */}

              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                 <div className='flex flex-col w-full'>
                  <label htmlFor="">Transmission</label>
                 <select onChange={e=>setCar({...car,transmission:e.target.value})} value={car.transmission} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                  <option value="">Select a Transmission</option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                  <option value="Semi-Manual">Semi-Manual</option>
                 </select>
              </div>

                 <div className='flex flex-col w-full'>
                  <label htmlFor="">Fuel Type</label>
                 <select onChange={e=>setCar({...car,fuel_type:e.target.value})} value={car.fuel_type} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                  <option value="">Select a Fuel Type</option>
                  <option value="Gas">Gas</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                 </select>
              </div>

               <div className='flex flex-col w-full'>
                  <label >Seating Capacity</label>
                  <input type="number" placeholder='4' required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.seating_capacity} onChange={e=>setCar({...car,seating_capacity:e.target.value})}/>
              </div>
              </div>

              {/* Car Location */}

              <div className='flex flex-col w-full'>
                  <label htmlFor="">Location</label>
                 <select onChange={e=>setCar({...car,location:e.target.value})} value={car.location} className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
                              <option value="">Select a Location</option>
<option value="MG Road">MG Road</option>
<option value="Brigade Road">Brigade Road</option>
<option value="Koramangala">Koramangala</option>
<option value="Indiranagar">Indiranagar</option>
<option value="Whitefield">Whitefield</option>
<option value="HSR Layout">HSR Layout</option>
<option value="JP Nagar">JP Nagar</option>
<option value="Jayanagar">Jayanagar</option>
<option value="Malleshwaram">Malleshwaram</option>
<option value="Rajajinagar">Rajajinagar</option>
<option value="Yelahanka">Yelahanka</option>
<option value="Electronic City">Electronic City</option>
<option value="Marathahalli">Marathahalli</option>
<option value="Hebbal">Hebbal</option>
<option value="Banashankari">Banashankari</option>
                 </select>
              </div>

              {/* Car description */}

                <div className='flex flex-col w-full'>
                  <label >Desciption</label>
                  <textarea rows={5} placeholder="Example: 2021 BMW X5, excellent condition, leather seats, sunroof, recently serviced" required className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none' value={car.description} onChange={e=>setCar({...car,description:e.target.value})}></textarea>
              </div> 

              <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white rounded-md font-medium w-max cursor-pointer'>
                <img src={assets.tick_icon} alt="" />
                List Your Car
              </button>

        </form>
    </div>
  )
}

export default AddCar