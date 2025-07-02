import "../../styles/herosection.css"
import imghowwework from '../../assets/howweework.jpg'


function Howweework() {
  return (
    <>
      <section className="container py-5 how-we-work">
        <div className="row align-items-center">
          
          <div className="col-md-5 text-md-5  text-centre px-4"
                    //  style={{marginTop:"6%"}}
          >

            <h2 className=" fw-bold empheading align-items-centre"
                     style={{marginBottom:"3%"}}
            >
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
      </section>
    </>
  )
}

export default Howweework