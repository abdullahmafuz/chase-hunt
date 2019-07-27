
import './vacancy.css';

function Vacancy() {
  
    return (
     
        <div className="vacancy" id="Vacancy">
         <div className="container vcon p-4">
             <h4 className="text-center txt-color">Tell Us about your hiring needs</h4>
             <p className="text-center txt-color">" you'll hear from us soon "</p>
         <form className="p-5">
         <div className="form-row">
      <div className="form-group col-md-6">
      
      <input type="text" className="form-control"  placeholder="Full Name" required/>
    </div>
    <div className="form-group col-md-6">
      <input type="number" className="form-control"  placeholder="Business phone number" required/>
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6">
      
    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" required/>
    </div>
    <div className="form-group col-md-6">
      <input type="text" className="form-control"  placeholder="Designation" required/>
    </div>
    </div>
    <div className="form-row">
    <div className="form-group col-md-6">
      
    <input type="text" className="form-control"  placeholder="Company Name" required/>
    </div>
    <div className="form-group col-md-6">
      <input type="text" className="form-control"  placeholder="Office Location" required/>
    </div>
    </div>
    <div className="form-group">
    <label htmkfor="comment" className="text-danger">Vacancy details *</label>
        <textarea className="form-control" rows="7" id="comment" placeholder="job description" required></textarea>
        </div>
 
  
    
        <button className="btn btn-danger btn-block my-4" type="submit">Submit your Vacancy</button>
</form>


         </div>
        </div>
       
    );
  }
  
  export default Vacancy;