import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="border-black border-2 m-3">
        <h4 className="text-center text-2xl underline">
          Registeration Form for Alumni
        </h4>
        <form class="flex flex-col  md:items-center m-5 pb-3 gap-5 ">
          <div>
            <h5 className="text-xl pb-3 underline">Personal Details:</h5>
            <div className="flex flex-col md:flex-row md:flex-wrap  gap-5 gird grid-rows-3 justify-content-left ">
              <div class="w-full md:w-auto">
                <label for="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="fname"
                  placeholder="First Name"
                  required
                />
              </div>
              <div class="w-full md:w-auto">
                <label for="middleName">Middle Name:</label>
                <input
                  type="text"
                  id="middleName"
                  name="mname"
                  placeholder="Middle Name"
                />
              </div>
              <div class="w-full md:w-auto">
                <label for="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lname"
                  placeholder="Last Name"
                />
              </div>
              <div class="w-full md:w-auto">
                <label for="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="skit@gmail.com"
                  required
                />
              </div>
              <div class="w-full md:w-auto">
                <label for="phone">Phone Number:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="7275908028"
                  required
                />
              </div>
              <div class="w-full md:w-auto">
                <label for="usn">USN:</label>
                <input
                  type="text"
                  id="usn"
                  name="usn"
                  placeholder="1KT20CS003"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
