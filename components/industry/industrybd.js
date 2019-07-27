import React ,{useState} from 'react';
import './industrybd.css';
import Indata from './indata.json';
import { useRouter } from 'next/router';

import  Link  from 'next/link';
function Industry() {

    const router = useRouter();
    const { id } = router.query;
    const [index ,setIndex]=useState(id);
    
   
    return (
     
        
        <div className="indetails" id="Indetails">
            <div className="container p-3">
            <div className="">
              
           
                     <div className="indetailsidbar" id="scroll">
                     <p className="p-3 active">Industries</p> 
                    <p className="p-3" onClick={()=>setIndex(0)}>Banking & Financial Services</p> 
                    <p className="p-3" onClick={()=>setIndex(1)}>Real Estate & Property Management</p> 
                    <p className="p-3" onClick={()=>setIndex(2)}>Executive & Senior Management</p> 
                    <p className="p-3" onClick={()=>setIndex(3)}>Engineering & Manufacturing</p> 
                    <p className="p-3" onClick={()=>setIndex(4)}>Office Support and Administration</p> 
                    <p className="p-3" onClick={()=>setIndex(5)}>IT & E Commerce</p> 
                    <p className="p-3" onClick={()=>setIndex(6)}>Retail</p>
                    <p className="p-3" onClick={()=>setIndex(7)}>FMCG</p>
                    <p className="p-3" onClick={()=>setIndex(8)}>Hospitality</p>
                    <p className="p-3" onClick={()=>setIndex(9)}>Hospitality</p>
                    <p className="p-3" onClick={()=>setIndex(10)}>Hospitality</p>
                    <p className="p-3" onClick={()=>setIndex(11)}>Accountancy & Finance</p>
                    <p className="p-3" onClick={()=>setIndex(12)}>Marketing</p>
                    <p className="p-3" onClick={()=>setIndex(13)}>Sales</p>
                    <p className="p-3" onClick={()=>setIndex(14)}>PA & Secretarial</p>
                    <p className="p-3" onClick={()=>setIndex(15)}>Heath care</p>
                    <p className="p-3" onClick={()=>setIndex(16)}>Insurance</p>
                    
                    
                    </div>
                    </div>


                   
                    <div className="indetailcontent">
                    
                        {
                            Indata.map((data,item)=>{
                                if(item == index )
                                {
                                    return (<div className="container " key={item}>
                                        <h1 className="text-center p-3">{data.title}</h1>
                                        <img src={data.img}/>
                                        <p>{data.p1}</p>
                                        <p>{data.p2}</p>
    
                                    </div>)
                                }
                            

                        })


                        }
                    
                    </div>
                    
             </div>
             <section className="py-5 bg-image overlay-primary fixed overlay sign1 info">
      <div className="container ">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-dark text-center">Talk to us about your requirements</h2>
            <p className="mb-0 text-dark lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
          <Link href="/vacancy"><a className="btn btn-block btn-lg bg-danger">Register your vacancy</a></Link>
          </div>
        </div>
      </div>
    </section>
    <section className="py-5 bg-image overlay-primary fixed overlay sign">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h2 className="text-white text-center">Looking For A Job?</h2>
            <p className="mb-0 text-white lead">Lorem ipsum dolor sit amet consectetur adipisicing elit tempora adipisci impedit.</p>
          </div>
          <div className="col-md-3 ml-auto">
            <Link href="/register"><a className="btn btn-warning btn-block btn-lg">Sign Up</a></Link>
          </div>
        </div>
      </div>
    </section>
             </div>
             
             

    
                        
       
       
    );
  }
  
  export default Industry;