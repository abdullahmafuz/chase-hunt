import React, { useState} from 'react';

import './employerbd.css';
import Link  from 'next/link';

import info from './infoemploy.json';

function Employer() {

  
    const [display, setDisplay] = useState(true);
    
    const [index ,setIndex]=useState(0);

    return (
     
        <div className="Companies" id="Employer">

        <div className="container">
          
                        <div className="empside" id="scroll">

                  <a className="active" onClick={()=>setIndex(0)}>Employer Service</a>
                  
                  <a  className="active1 active"onClick={()=>setIndex(1)} >WHAT MAKES US A BETTER CHOICE?</a>
                  <a  className="active1 active" onClick={()=>setIndex(2)}>How can we add value to your organisation?</a>
                  <ul>
                  <a  onClick={()=>setIndex(3)}>Minimising your timeframes and lead time</a>
                  
                  <a  onClick={()=>setIndex(4)}>Industry Experience</a>
                  <a  onClick={()=>setIndex(5)}>Wider Network</a>
                  <a  onClick={()=>setIndex(6)}>Headhunters</a>
                  <a  onClick={()=>setIndex(7)}>Associate Partners & Extended Reach</a>
                  </ul>
                  
                  <a  className="active1 active" onClick={()=>setIndex(8)}>How do we find the right people for you ? </a>
                  <ul>
                  <a  onClick={()=>setIndex(9)}>Research</a>
                  <a  onClick={()=>setIndex(10)}>Search</a>
                  <a onClick={()=>setIndex(11)}>Shortlisting</a>
                  <a  onClick={()=>setIndex(12)}>Selection</a>
                  <a  onClick={()=>setIndex(13)}>Monitoring Market Trends</a>
                  <a  onClick={()=>setIndex(14)}>Flexibility & Speed</a>
                  </ul>
                </div>

                <div className="empcontent p-5">
                  {
                    info.map((data,idx)=>{
                        if(index === idx){
                          return(<div className="container " key={idx}>
                                <h4>{data.h1}</h4>
                                <h6>{data.h2}</h6>
                                <p>{data.h2p}</p>
                                <p>{data.p1}</p>
                                <p>{data.p2}</p>
                                <p>{data.p3}</p>
                                <p>{data.p4}</p>
                                <p>{data.p5}</p>
                                <p>{data.p6}</p>
                                <p>{data.p7}</p>

                                <div className="row">
                                <div className="mr-auto col">
                                  <p>For more inquiry or questions please contact Us</p>
                    
                        </div>
                       
                        <div className="mr-auto col">        
                    <Link href="/contact"><a className="btn btn-danger btn-sm ">Contact us</a></Link>
                        </div>
                        </div>
                        <div className="row p-3">
                                <div className="mr-auto col ">
                                  <p>If you are looking for recruitment ?</p>
                    
                        </div>
                       
                        <div className="mr-auto col">        
                    <Link href="/vacancy"><a className="btn btn-danger btn-sm ">Register your vacancy</a></Link>
                        </div>
                        </div>
                       

                            </div>

                            
                            )
                        }
                    })
                  }
                </div>

                    </div>

                    
      




            <div className="container text-center p-2 text-info"><h1>Industries</h1></div>

         <div className="container p-4">
        

         <div className="row crow">


          <div class="col-sm-2 col-sm-offset-1 crow">
           
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">Banking & Financial Services</p>
                        <p><Link href='/industry?id=0'><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
             
         

            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                    <div className="">
                    <img src="/static/img/home/service/s2.png" alt="category" />
                        <p className="smh3">	Real Estate & Property Management</p>
                        <p><Link href='/industry?id=1' ><button type="button" className="btn btn-danger btn-sm ">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s3.png" alt="category" />
                        <p className="smh3">	Executive & Senior Management</p>
                        <p><Link href='/industry?id=2' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s4.png" alt="category" />
                        <p className="smh3">	Engineering & Manufacturing</p>
                        <p><Link href='/industry?id=3' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s5.png" alt="category" />
                        <p className="smh3">Office Support and Administration</p>
                        <p><Link href='/industry?id=4' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
            </div>

            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">IT & E Commerce</p>
                        <p><Link href='/industry?id=5' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
            </div>

            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Retail</p>
                        <p><Link href='/industry?id=6' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	FMCG</p>
                        <p><Link href='/industry?id=7' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Hospitality</p>
                        <p><Link href='/industry?id=8' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Construction</p>
                        <p><Link href='/industry?id=9' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	HR</p>
                        <p><Link href='/industry?id=10' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         

            </div>


            






            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Accountancy & Finance</p>
                        <p><Link href='/industry?id=11' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>



            

            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Marketing</p>
                        <p><Link href='/industry?id=12' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Sales</p>
                        <p><Link href='/industry?id=13' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            <div class="col-sm-2 col-sm-offset-1 crow">
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	PA & Secretarial</p>
                        <p><Link href='/industry?id=14' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>





  

            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
                
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Heath care </p>
                        <p><Link href='/industry?id=15' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>

     
           
            

            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Insurance</p>
                        <p><Link href='/industry?id=16' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            
            <div className={display == false ?"collaps col-sm-2 col-sm-offset-1 crow": "collaps col-sm-2 col-sm-offset-1 crow none"}>
            <div className="box p-3">
                <div className="text-center p-2">
                <div className="">
                <img src="/static/img/home/service/s1.png" alt="category" />
                        <p className="smh3">	Insurance</p>
                        <p><Link href='/industry?id=16' ><button type="button" className="btn btn-danger btn-sm">Explore More </button></Link></p>
                    </div>
                </div>
             </div>
         
            </div>
            
            

            </div>

          </div>
          
         <div className="combtn">
             
                <p className="text-center">
                <button type="button" onClick={()=> setDisplay(!display)} className="btn btn-danger " >
           {
               display == false?<a>show less</a> :<a>show more</a>
           }
        </button>
                    </p>  
          

         </div>
          
            

         

    <div className="features">
        <div className="container">
          <h1 className="text-center p-3">How do we find the right people?</h1>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated fadeInDown" >
                <div className="features-icon">
                  
                 
                </div>
                <div className="features-content">
                  <h4>
                  Research
                  </h4>
                  <p>
                  We do our research to know all about your organization to deliver the best results to the people who have placed their trust on us. We work with our client to pinpoint the ideal candidates’ competencies, personality traits and be behavioral characteristics.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated1 fadeInDown ">
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                  Search
                  </h4>
                  <p>
                  We have a dedicated team who supports research who simultaneously run requirement through relevant segments of our database, which is continually refreshed.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated2 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                  Selection
                  </h4>
                  <p>
                  Our methods of selection go parallel with the necessary requirements and objectives of the company. After selection we get into the hiring phase and we thoroughly prepare to serve as problem solvers and facilitators. We like to be the trusted mediator and facilitate a successful hiring negotiation.
                  </p>
                </div>
              </div>
            </div> 
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated3 fadeInDown " >
                <div className="features-icon">
                  
                </div>
                <div className="features-content">
                  <h4>
                  Ask for references
                  </h4>
                  <p>
                  We ask specifically to get references from managers or coworker , to learn whether our candidates can follow instructions, take initiative and meet deadlines. To check how candidates behave as part of a team. 
                  </p>
                </div>
              </div>
            </div>           
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated4 fadeInDown " >
                <div className="features-icon">
                 
                </div>
                <div className="features-content">
                  <h4>
                  Bring them onboard
                  </h4>
                  <p>
                  We conduct further screening, testing and reference checking on selected candidates We also
put our effort to save your time and effort and to give you a value addition.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="features-box animated5 fadeInDown " >
                <div className="features-icon">
                 
                </div>
                <div className="features-content">
                  <h4>
                  Look beyond the CV
                  </h4>
                  <p>
                    we analysis candidate’s potential,personality type,their ability to embrace new technology and more.We search to Identify skills, competency and cultural requirements. We believe in searching
               and filtering the right candidates for you rather than sending a bulk of CVs.
                  </p>
                </div>
              </div>
            </div>
            
            </div>
            </div>
            </div>

             
        </div>
       
    );
  }
  
  export default Employer;