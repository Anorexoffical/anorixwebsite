import '../../styles/herosection.css'

import imgherosection from '../../assets/imgherosection.jpg'
// import imghowwework from '../../assets/howweework.jpg'
import imgherosection1 from '../../assets/mainimg.jpg'


function Herosection (){
    return (
        <>
         <section className="container py-5 sectionhero">
          <div className="row align-items-center">

            <div className="col-md-5 text-center text-md-5 px-4 " 
            // style={{marginTop:"5%"}}
             >

            <h1 className="fw-bold empheading align-items-left">
            <span className="empowering-text">Empowering </span> 
             Your Digital Journey
            </h1>

            <div className='paratag align-items-center '>
            <p className="text-md-5 mt-3">
            Crafting innovative solutions to elevate your business with secure
            and scalable technology.
            </p>
            </div>

            <button type='button' className=" consult-btn btn btn-primary">
            Book an Appointment
            </button> 

            </div>
            
            <div className='col-md-7 imgsection' 
            // style={{border:"2px solid red"}}
            >
            <img
            src={imgherosection1} 
            alt="Tech Image"
            className="img-fluid rounded work-image"
            />
            </div>

          </div>
         </section>

      {/* section 2 */}
      {/* <section className="container py-5 how-we-work">
      <div className="row align-items-centre">
        <div className="col-md-5 text-md-5  text-centre px-4"
        > 

       <h2 className=" fw-bold empheading align-items-centre">
        <span className='empowering-text'> How  </span>
        we Work
      </h2>
          <ul className="work-list ">
            <li>Business analyst to understand client needs.</li>
            <li>Gathering requirements by consulting stakeholders.</li>
            <li>Creating mockups and designing UX/UI interfaces.</li>
            <li>Developing using agile methodologies.</li>
            <li>Client feedback and making improvements.</li>
            <li>Continuously refining the project for scalability.</li>
          </ul>
        </div>

        <div className="col-md-7  imgsection "
        //  style={{border:"2px solid red"}}
        >
          <img 
            src={imghowwework} 
            alt="Work Process" 
            className="img-fluid rounded work-image"
          />
        </div>

      </div>
    </section> */}

        </>
    )
}

export default Herosection