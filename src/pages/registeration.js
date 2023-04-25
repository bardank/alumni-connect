import Footer from "@/components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <form class="flex flex-col md:flex-row md:items-center m-5 pb-3">
          <legend className="text-xl text-black font-semibold">
            Registeration Form
          </legend>
          <div>
            <label for="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="fname"
              placeholder="First Name"
            />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
