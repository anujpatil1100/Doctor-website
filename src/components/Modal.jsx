import React from 'react'

function Modal() {
  return (
    <div className='flex items-center'>
      <button className="btn w-40 bg-teal-700 text-white h-10" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update Setting</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <div className='w-full bg-teal-700 h-10 flex items-center justify-center text-xl text-white'>
    <h4>Update Setting</h4>
  </div>
    <h3 className="font-bold text-lg py-5">Personal Information:</h3>
   <div className='flex flex-wrap gap-3'>
   <label className="form-control w-50 max-w-xs">
  <div className="label">
    <span className="label-text">First Name</span>
  </div>
  <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control w-50 max-w-xs">
  <div className="label">
    <span className="label-text">Last Name</span>
  </div>
  <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control w-50 max-w-xs">
  <div className="label">
    <span className="label-text">Your Email</span>
  </div>
  <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control w-50 max-w-xs">
  <div className="label">
    <span className="label-text">Phone No</span>
  </div>
  <input type="number" placeholder="Phone No" className="input input-bordered w-full max-w-xs" />
</label>

<label className="form-control w-full">
  <div className="label">
    <span className="label-text">Your bio Here</span>
  </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  <div className="label">
  </div>
</label>
   </div>
    <div className="modal-action">
      <form method="dialog">
      <button className="btn bg-blue-500 text-white mr-3">Submit</button>
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal
