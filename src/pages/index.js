import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-container w-screen h-screen bg-gradient-to-r from-cyan-500 to-blue-500 ">
        <div className="flex justify-center items-center h-full text-white">
          <h5 className="text-2xl font-bold">
            Welcome To Your SKit Alumni Website
          </h5>
        </div>
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black">
        <p className="text-3xl font-semibold">
          Our Purpose of Alumni Association
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto justify-center gap-4  py-4 px-8 md:px-14 lg:px-24  cursor-pointer 	">
        <PurposeCard
          text="Our vision is a worldwide alumni network that fosters lifelong connections and engagement with the college, empowering alumni to make a positive impact in their lives and the community."
          icon="./assests/icons/vision.png"
        />
        <PurposeCard
          text=" We aim to foster a spirit of lifelong learning and professional development, and to support the college's mission of promoting academic excellence, diversity, and social responsibility."
          icon="./assests/icons/mission.png"
        />
        <PurposeCard
          text=" Our objectives are to increase alumni engagement through diverse
            programs and events, provide networking resources for career growth,
            and support the college's strategic initiatives through fundraising
            and advocacy."
          icon="./assests/icons/objectives.png"
        />
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black pb-6 ">
        <h5 className="text-3xl font-semibold">Gallary</h5>
      </div>
      <div className=" gallary flex gap-3 ">
        <GalleryImage src="./assests/gallary/pic1.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic2.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic3.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic4.png" alt="gallery-pic" />
        <GalleryImage src="./assests/gallary/pic5.png" alt="gallery-pic" />
      </div>
      <div className="text-center ">
        <a href="https://www.skit.org.in/gallery.html#">
          <h3 className="text-secondary text-3xl font-semibold">
            Explore More
            <img
              className="w-8 h-8 mx-auto ml-2 inline-block"
              src="./assests/icons/exploreMore.png"
              alt="exploreMoreIcon"
            />
          </h3>
        </a>
      </div>
      <div className="flex justify-center items-center py-16 h-full text-black pb-6">
        <h5 className="text-3xl font-semibold">
          Join the Alumni Association: Register Today!
        </h5>
      </div>
      <div className="flex place-items-center  flex-auto justify-items-center gap-10 place-content-center ">
        <div className="shrink ">
          <a href=""></a>
        </div>
        <div className="w-80">
          <p className="text-center">
            Welcome to the alumni community of SKIT. As a member of the alumni
            association, you will have access to a wide range of benefits,
            including networking opportunities, career resources, and exclusive
            events.
          </p>
          <button class="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 w-56 h-12 m-10 rounded-3xl">
            Register Now!
          </button>
        </div>
      </div>

      <footer className="">
        <div className=" flex item-center justify-evenly grid md:grid-cols-4">
          <div className=" gap-5  m-5">
            <h5 className="text-black underline text-3xl font-bold p-1">
              Important Links
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink linkText="Exams" link="#" />
              <FooterLink linkText="Downloads" link="#" />
              <FooterLink linkText="Proctorial System" link="#" />
              <FooterLink linkText=" Service Rules" link="#" />
              <FooterLink linkText="Grievances" link="#" />
              <FooterLink linkText="Route Map" link="#" />
              <FooterLink linkText="Best Practices" link="#" />
              <FooterLink linkText="Faculty Sanctioned List" link="#" />
              <FooterLink linkText="Green Audit" link="#" />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl p-4  font-bold">
              Courses
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink
                linkText="Artificial Intelligence and Machine Learning"
                link="#"
              />
              <FooterLink
                linkText="Computer Science and Engineering"
                link="#"
              />
              <FooterLink
                linkText=" Information Science and Engineering
"
                link="#"
              />
              <FooterLink
                linkText="Electronics and Communication Engineering"
                link="#"
              />
              <FooterLink linkText="Mechanical Engineering" link="#" />
              <FooterLink linkText="Civil Engineering" link="#" />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl font-bold">
              Mandatory Committees
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink
                linkText="Anti Ragging Committee
"
                link="#"
              />
              <FooterLink
                linkText="Anti Sexual Harassment Committee
"
                link="#"
              />
              <FooterLink
                linkText="Grievance Redressal Committee
 "
                link="#"
              />
              <FooterLink linkText=" SC/ST cell Rules" link="#" />
              <FooterLink
                linkText="Women and Equal Opportunity Cell
"
                link="#"
              />
            </ol>
          </div>
          <div className=" gap-3 m-5">
            <h5 className="text-black underline text-3xl font-bold">
              Reports & Notifications
            </h5>
            <ol className="list-style  m-5 text-xl">
              <FooterLink linkText="NBA" link="#" />
              <FooterLink linkText="NAAC" link="#" />
              <FooterLink linkText="VTU " link="#" />
              <FooterLink linkText="  AICTE" link="#" />
              <FooterLink linkText="IQAC" link="#" />
              <FooterLink linkText="Feed Back Analysisp" link="#" />
              <FooterLink linkText="MOU" link="#" />
              <FooterLink linkText="Event Reports" link="#" />
              <FooterLink
                linkText="National and Commemorative Events"
                link="#"
              />
            </ol>
          </div>
        </div>

        <div className="bg-primary p-2 ">
          <ul className="flex flex-row gap-8 justify-center pb-3">
            <SocialLink
              link="https://www.facebook.com/skit.org.in?modal=admin_todo_tour"
              iconSrc="./assests/icons/facebook.png"
            />
            <SocialLink
              link="https://www.linkedin.com/company/72587599/admin/"
              iconSrc="./assests/icons/linkedin.png"
            />
            <SocialLink
              link="https://twitter.com/skit_org_in"
              iconSrc="./assests/icons/twitter.png"
            />
            <SocialLink
              link="https://in.pinterest.com/skit_org_in/"
              iconSrc="./assests/icons/pinterest.png"
            />
          </ul>
          <p className="text-center">
            &copy; Copyright 2023 · All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const PurposeCard = ({ text, icon }) => {
  return (
    <div className="border-primary border-2 hover:border-blue-500 bg-white p-4 rounded-xl">
      <div className="text-center mb-2">
        <img src={icon} alt="Icon" className="w-8 h-8 mx-auto" />
      </div>
      {text}
    </div>
  );
};

const SocialLink = ({ link, iconSrc }) => {
  return (
    <li>
      <a href={link}>
        <img className="w-10 h-10" src={iconSrc} alt="icon" />
      </a>
    </li>
  );
};
const GalleryImage = ({ src, alt }) => {
  return (
    <div>
      <img className="gallaryPic" src={src} alt={alt} />
    </div>
  );
};

const FooterLink = ({ linkText, link }) => {
  return (
    <li>
      <a className="font-sans font-poppins text-base " href={link}>
        {linkText}
      </a>
    </li>
  );
};
