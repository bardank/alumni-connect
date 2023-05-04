import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="border-black border-2 m-3 mr-3">
        <h4 className="text-center text-2xl underline">
          Registeration Form for Alumni
        </h4>
        <form method="" action="" className="">
          <div className=" p-5 flex-row ">
            <h5 className="text-xl pb-3 underline">Personal Details:</h5>
            <div className=" ">
              <div class="w-full md:w-auto relative pb-3">
                <label for="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>

              <div className="w-full md:w-auto pb-3">
                <label for="middleName">Middle Name:</label>
                <input
                  type="text"
                  id="middleName"
                  name="name"
                  placeholder="Middle Name"
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lname"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="date">Date of Birth:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="skit@gmail.com"
                  required
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="address">Current Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  required
                />
              </div>
            </div>
            <hr className="m-5 border-t-1 border-black" />

            <h5 className="text-xl pb-3 underline">Academic Details:</h5>
            <div className=" ">
              <div className="w-full md:w-auto pb-3">
                <label for="usn">USN:</label>
                <input
                  type="text"
                  id="usn"
                  name="usn"
                  placeholder="1KT20CS003"
                />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="completion_date">Year of Completion</label>
                <input
                  type="number"
                  id="completion_date"
                  name="date"
                  placeholder="2022 "
                  min={2000}
                />
              </div>

              <div className="w-full md:w-auto pb-3">
                <label for="branch">Branch:</label>
                <select className="  ">
                  <option value="cse">Computer Science & Engg (CSE)</option>
                  <option value="ise">Information Science & Engg (ISE)</option>
                  <option value="">Mechanical Engg (ME)</option>
                  <option value="ece">
                    Electronics & Communication Engg (ECE)
                  </option>
                  <option value="eee">
                    Electrical & Electronics Engineering (EEE)
                  </option>
                  <option value="civil">Civil Engg (Civil)</option>
                </select>
              </div>
            </div>

            <hr className="m-5 border-t-1 border-black" />
            <h5 className="text-xl pb-3 underline">
              Present Working Details :
            </h5>
            <div className="">
              <div className="w-full md:w-auto pb-3 ">
                <label for="branch">Placement Provided by SKIT:</label>
                <label className="  inline" for="yes">
                  YES:
                </label>
                <input className=" radio inline " type="radio" name="choice" />
                <label className="inline" for="NO">
                  NO:
                </label>
                <input className=" radio inline" type="radio" name="choice" />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="organization">Present Organization:</label>
                <input type="text" name="organization" />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="position">Current Position/Designation :</label>
                <input type="text" name="position" />
              </div>
              <div className="w-full md:w-auto pb-3">
                <label for="organization">
                  Upload offer letter / Appointment Letter :
                </label>
                <input type="file" name="organization" multiple />
              </div>
            </div>
            <hr className="m-5 border-t-1 border-black" />
            <div className="w-full md:w-auto">
              <label for="">Your Suggestions:</label>
              <textarea
                rows="10"
                cols="40"
                className="border"
                placeholder="Give your Suggestion here!!"
              ></textarea>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
