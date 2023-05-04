import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className=" mt-3 p-3 font-bold text-3xl  bg-primary">
        ABOUT SRI KRISHNA INSTITUTE OF TECHNOLOGY (SKIT), BANGALORE
      </h1>
      <div className="flex flex-row text-xl ">
        <div className="flex-1 border-1 p-10 ">
          <h3 className="text-secondary text-2xl m-3">vision:</h3>
          <p>
            “To impart quality education to cater the needs of Industries,
            Business Establishments, Research and Development Organizations,
            Create Knowledgeable and competent Engineers of global standard.”
          </p>
        </div>
        <div className="flex-1 border-1 p-10 ">
          <h3 className="text-secondary text-2xl m-3">mission:</h3>
          <p>
            "To create Industry enabled Engineers manifesting in excellence with
            extraordinary progress, to give bright and challenging future for
            deserving students who are underprivileged.”
          </p>
        </div>
      </div>
      <hr className="border-t border-dashed border-gray-400 my-8" />
      <div className="text-xl m-3">
        <img
          src="./assests/about.jpg"
          alt="aboutus"
          className="float-left p-4 w-80"
        />
        <p>
          Sri Raghavendra Educational Institutions Society(R) founded in the
          year 1997 by a great visionary Dr. K. M. Venkataramana. The society
          has been in the service to the nation in the field of Health and
          Education. Sri Krishna Institute of Technology (SKIT) is one of the
          feathers of SREIS. The society is a house hold name in the field of
          Para Medical education, Raghavendra Hospital, Diagnostic and Research
          center, College and School of Nursing, College of Pharmacy and College
          of Education, KMV Red Hills School, Sri Krishna Polytechnic.
        </p>
        <p>
          SKIT is situated in the picturesque location of Chimney Hills,
          Chikkabanavara on Hesaraghatta road has a serene atmosphere, congenial
          for the pursuit of studies situated on top of a hillock overlooking
          vast verdant green land and watersheds enthralls the visitors by its
          captivating beauty.
        </p>

        <p>
          The institute has marked a niche in the field of Technical Education
          with the state of the art teaching equipment, innovative teaching
          methods, good infrastructure, highly qualified and experienced
          teaching faculty committed to imparting quality education. The
          dedicated teachers interact with every student through the proctorial
          system to counsel and guide them. The office staff is always ready to
          help the students in their academic and administrative matters.
        </p>
        <p>
          The library and information center, the repository of knowledge, with
          various International and National technical journals related to
          engineering & technology. The Campus is situated in the center of the
          city and near the country's industrial hub, which can be easily
          reached by public and Institution transportation system.
        </p>
        <p>
          Ever enthusiastic and active sports and games of the institute offer
          excellent opportunity to train oneself in all indoor and outdoor
          sports. Hostel for girls inside the campus with the best facilities
          adds to the attraction.
        </p>
        <p>
          An Auditorium, with an acoustic design, to house around 300 audiences
          with multimedia accessories and an amphitheater with a green and
          lustrous lawn having a capacity of 1000 people is the place for
          various activities and functions.
        </p>
        <p>
          The E-learning center has been fully equipped with the generous
          assistance of VTU where expert lecturers on various topics by eminent
          professors and professionals are made available to the students
          throughout the day. A high-speed (75mbps) Internet center is available
          on the campus. A language laboratory with advanced teaching aids is
          made available to all students.
        </p>
        <p>
          SKIT undertakes research and development work from many industries and
          institutions, for the benefit of students. Advanced techniques and
          methodologies are used in the handling of these projects. The students
          of SKIT are regularly taken on Industrial and site visits to enable
          them to observe and thereby learn contemporary practices and
          processes. SKIT is associated with a wide number of industries for
          this activity.
        </p>
        <p>
          The Department of Training and Placement of SKIT is an active center
          throbbing with various activities all through the year. The
          Institution has a complete infrastructure for the effective
          functioning of the department. The Placement Department is
          well-organized and sincerely working to empower students with various
          qualities and skills to achieve professional and personal excellence.
        </p>
        <p>
          Training programs and industry-related seminars are routine and the
          students are exposed to these kinds of programs from the very first
          day they step into the college. They are being prepared to be
          individuals with logical and analytical skills and with excellent
          practical knowledge. Also, the department is supporting the students
          to carry out their internships and projects in reputed Industries.
        </p>
      </div>
      <hr className="border-t border-dashed border-gray-400 my-8" />

      <Footer />
    </div>
  );
}
