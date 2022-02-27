import React, { useState } from "react";
import NewLogin from "./NewLogin";
import Tops from "./Components/Tops";
import "./style.css";
import zohocompanylogo from "./containers/zohosignin.jpeg";
import Microsoftsignin  from "./Microsoftsignin";



const Multiuser_Login_Page = () => {

    const [employeeuser_id, setEmployeeuserid] = useState("");
    const [userpassword, setuserPassword] = useState("");
    const [alluserEntry, setuserAllEntry] = useState([]);
    const submituserForm = (e) => {
        e.preventDefault();
        const newuserEntry = { employeeuser_id: employeeuser_id, userpassword: userpassword }
        setuserAllEntry([...alluserEntry, newuserEntry]);
    console.log(...alluserEntry); } 
    const [employeeser_id, setEmployeeserid] = useState("");
    const [serpassword, setserPassword] = useState("");
    const [allserEntry, setserAllEntry] = useState([]);
    const submitserForm = (e) => {
        e.preventDefault();
        const newserEntry = { employeeser_id: employeeser_id, serpassword: serpassword }
        setserAllEntry([...allserEntry, newserEntry]);
        console.log(...allserEntry);
    }

    return (
        <div>
            <Tops/>
            <div className="usersignin"> 
        <div className="uuu"> 
      <div className ="tt">  
       </div>
        <div className="ooo"> 
            <form className="signinform" action="" onSubmit={submituserForm}>
                {/* <h1> <strong> Sign In  </strong></h1> */}
                <div className="aa">
                <label for html="Active Role"> <h1 className ="form-heading"> <strong> Sign in </strong></h1></label>
                <select name="Sign in as" id="signin" className="dropdown">
                    <option value="CDATA "> CData Employer </option>
                    <option value="ADMIN"> Kaizen Admin </option>
                    <option value="SUPER ADMIN "> Kaizen Super Admin</option>
                    <option value="KAIZEN COMMITTEE MEMBER">Kaizen Committee Member</option>
                </select>
                </div>

                <div className="bb"> 
                
                      <label> <h3 className="form-label"> Employee Id </h3> 
                    <input type="email" id="employeeuser_id" name="employeeuser_id" autoComplete="off"
                        value={employeeuser_id} onChange={(e) => setEmployeeuserid(e.target.value)} required placeholder="abc@cdata.com" required />
                </label>
                
                    <label> <h3 className="form-label"> Enter Your Password </h3>
                        <input type="password" id="userpassword" name="userpassword" autoComplete="off"
                            value={userpassword} onChange={(e) => setuserPassword(e.target.value)} required placeholder="*****" required />
                    </label>
                </div>
            
                <button type="Login" className="button"> User Login </button>
               
            </form> 
            <form className="signinform"> <div className="aa">
                <label for html="Active Role"> <h1 className ="form-heading"> <strong> Sign Up </strong></h1></label>
                
                <select name="Sign up as" id="signup" className="dropdown">
                    <option value="CDATA "> CData Employer </option>
                    <option value="ADMIN"> Kaizen Admin</option>
                    <option value="SUPER ADMIN "> Kaizen Super Admin</option>
                    <option value="KAIZEN COMMITTEE MEMBER">Kaizen Committee Member</option>
                </select>
                </div>
                <div className="bb">
                <label> <h3 className="form-label"> Employee Id </h3> 
                    <input type="numbers" id="employeeser_id" name="employeeser_id" autoComplete="off"
                        value={employeeser_id} onChange={(e) => setEmployeeserid(e.target.value)} required placeholder="123456789" required />
                </label>
                
                                <label> <h3 className="form-label"> Enter Your Email Id </h3>
                        <input type="email" id="email" name="emailid" autoComplete="off" required placeholder="abc@cdata.com" required />
                    </label>
                
                    <label> <h3 className="form-label"> Enter Your Password </h3> 
                        <input type="password" id="serpassword" name="serpassword" autoComplete="off"
                            value={serpassword} onChange={(e) => setserPassword(e.target.value)} required placeholder="*****" required />
                    </label>
                </div>
            
                <button type="Login" className="button"> Submit </button>

            </form>  </div>  <div className= "signinapi">
        <div className="g-signin"> <NewLogin/>    </div>
        <div> < Microsoftsignin/> </div>
        <a href= "https://accounts.zoho.in/signin?servicename=ZohoHome&signupurl=https://www.zoho.com/signup.html"> 
        <img src ={zohocompanylogo} id ="zohologo" alt="#"/> </a>
        </div> 
        </div>


            
        </div>
        </div>
        
    )
}
export default Multiuser_Login_Page;

