import React from 'react'
import myproduct from '../image/headphone.jpg'
const Single_Product = () => {
  return (
    <>
    <div className="producDetails p-10 flex justify-center">
      <div className="left-side h-500 w-auto">
       <img className=' max-w-sm ' src={myproduct} alt="Product-image" />
      </div>
      <div className="vertical border-l-2 border-slate-500">
      <div className="right-side ml-10 ">
        <h3 className='mb-5 font-bold text-xl text-slate-500 '>Redmi note 12</h3>
        <p className='mb-5'>★★★★☆</p>
        <h2 className='mb-5 font-bold text-xl text-slate-500'>$199</h2>
        
        <label for="quantity" class=" mb-5 mt-5 block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          placeholder='1'
          min="1"
          max="5"
          class="mb-10 bg-slate-100 mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />

      <a href="http://localhost:3000/addtocart#">
      <button class="mr-5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Add To Cart
        </button>
      </a>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Buy Now
        </button>
        
      </div>
      </div>
    </div>
    <hr />
    <div className="description">
      <h2 className='font-bold ml-5 text-2xl mt-5'>Description</h2>
      <p className='ml-5 mb-5 mr-10'>
      Air Pods Pro First Generation Original Dubai Bluetooth Earbuds IPX4 Waterproof In-Ear Earphone - Headphone
      Active noise cancellation for immersive sound <br />
      Transparency mode for hearing and connecting with the world around you <br />
      Three sizes of soft, tapered silicone tips for a customizable fit <br />
      Sweat and water resistant
      Adaptive EQ automatically tunes music to the shape of your ear <br />
      Easy setup for all your Apple devices <br />
      Quick access to Siri by saying “Hey Siri” <br />
      The Wireless Charging Case delivers more than 24 hours of battery life <br />
      Active noise cancellation reduces unwanted background noise. <br />
      Personalized Spatial Audio with dynamic head tracking. <br />
      Adaptive transparency lets outside sounds in while reducing loud ambient noise.
      </p>
    </div>
    </>
  )
}

export default Single_Product