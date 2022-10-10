import React,{useState} from 'react';
const Contact = () => {
 const [data,setData]=useState({
     fullname:"",
     phone:"",
     email:"",
     msg:"",
 });

 const InputEvent=(e)=>{
        const value =e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
 }
    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Name: ${data.fullname}
               Mobile Number: ${data.phone}
               Email: ${data.email}
               Message: ${data.msg}`)
    }
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact Us</h1>
                <div className='container contact_div'>
                    <div className='row'>
                        <div className='col-md-6 col-10 mx-auto'>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">FullName</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"value={data.fullname} onChange={InputEvent} placeholder="Enter Your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" name="phone"value={data.phone} onChange={InputEvent} placeholder="Mobile Number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"name="email"value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;