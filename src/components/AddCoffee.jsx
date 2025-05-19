import React from 'react';
import Swal from 'sweetalert2';


const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())
        console.log(newCoffee);

        //send coffee data to the db
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added Successfully!",
                        icon: "success",
                        draggable: true
                    });
                }
                console.log(data);
            })


    }
    return (
        <div className='p-24'>

            <div className='p-12 text-center space-y-4'>
                <h1 className="text-6xl">ADD COFFEE</h1>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Name</label>
                        <input type="text" className="input w-full" name='Name' placeholder="Enter Coffee Name" />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" className="input w-full" name='Quantity' placeholder="Enter the Quantity of " />
                    </fieldset>

                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Supplier</label>
                        <input type="text" className="input w-full" name='Supplier' placeholder="Enter Coffee Supplier" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Price</label>
                        <input type="text" className="input w-full" name='Price' placeholder="you can see the pice " />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Category</label>
                        <input type="text" className="input w-full" name='Category' placeholder="Enter Coffee Category" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                        <label className="label">Details</label>
                        <input type="text" className="input w-full" name='Details' placeholder="Enter Coffee Details" />
                    </fieldset>


                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                    <label className="label">Photo</label>
                    <input type="text" className="input w-full" name='photo' placeholder="Enter Photo Url" />
                </fieldset>

                <input type="submit" className='btn w-full ' value="Add Coffee" />

            </form>
        </div>
    );
};

export default AddCoffee;