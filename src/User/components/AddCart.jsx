import React from 'react'

const AddCart = () => {
  return (
    <>
    <h2 className='text-4xl mb-5 ml-10 mt-10'>
        Cart
        <br />
        <hr />
    </h2>

<div className="cartProduct flex justify-center mb-10">
            <table class="shadow-lg bg-white border-separate ">
              <tr>
                <th class="bg-blue-100 border text-left px-8 py-4">Product Image</th>
                <th class="bg-blue-100 border text-left px-8 py-4">Product Name</th>
                <th class="bg-blue-100 border text-left px-8 py-4">Quantity</th>
                <th class="bg-blue-100 border text-left px-8 py-4">Product Price</th>
                <th class="bg-blue-100 border text-left px-8 py-4">Total Price</th>
              </tr>
            </table>
</div>
    
    </>
  )
}

export default AddCart