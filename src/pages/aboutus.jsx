/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/layout/PageLayout";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
export default function Home() {
  return (
    <PageLayout
      className={"flex flex-col  items-center"}
      lable={"The SKIT Alumni Association (SKITAA)"}
    >
      <div className="w-[80%] flex flex-col  items-center ">
        <div className=" flex flex-row flex-wrap gap-2 justify-center px-6 pt-0">
          <div className="border  p-4  bg-white rounded-lg   h-auto text-center   ">
            <p>
              The SKIT Alumni Association (SKITAA) was formally established in
              the year 2016, owing to the painstaking efforts and initiative of
              our beloved Principal Dr. Mahesha K. A seed committee was formed
              where Prof. Sreenivasan A. became the first Secretary of SKITAA.
              The committee held a membership drive and the first ever alumni
              meet was organized in the year 2016.
            </p>
          </div>
          <div className="border  p-4  bg-white rounded-lg    h-auto text-center   ">
            <p className=" flex">
              SKITAA is conducting various activities for the Alumni. The SKITAA
              is proud to say that its alumni are well settled throughout the
              globe and are helping the current students by upgrading the
              library, sponsoring prizes for top rank holders and sharing their
              experiences in seminars and conferences.
            </p>
          </div>
          <div className="border  p-4  bg-white rounded-lg    h-auto text-center">
            <p>
              Alumni of SKIT in particular have excelled and acquired positions
              of eminence in every field imaginable-from engineering to
              management to finance, Renowned scientists, successful
              entrepreneurs and managers and leaders of society. .
            </p>
          </div>
        </div>
        <div className="container p-6 ">
          <h1 className="font-semibold text-xl pb-4">
            The main objectives of SKITAA are:
          </h1>
          <ul className="list-disc px-6">
            <li className="py-1">
              To promote a lifelong relation and to act as a forum for the
              exchange of information among its members.
            </li>
            <li className="py-1">
              To organize and establish scholarship funds to help the needy and
              deserving students.
            </li>
            <li className="py-1">
              To exchange professional knowledge, organize technical
              conferences, seminars workshops & training courses.
            </li>
            <li className="py-1">To provide career development guidance.</li>
            <li className="py-1">
              To create interest and motivate the alumni to participate in the
              progress of the Institute and make them contribute towards the
              enhancement of their Alma connect.
            </li>
            <li className="py-1">
              To contribute towards improving entrepreneurship development
              activities, campus placements, library and Research and
              development center at SKIT.
            </li>
            <li className="py-1">
              To arrange lectures by eminent alumni and other eminent
              personalities for the benefit of students.
            </li>
          </ul>
        </div>

        <div className="px-6 ">
          <div>
            <h3 className="text-black  text-xl font-bold p-1">
              Alumni Association Committee
            </h3>
            <div className="table-container pt-6 mb-6 w-full overflow-x-scroll">
              <table className="table-auto border-collapse  w-full border border-gray-300 rounded-lg  ">
                <thead>
                  <tr className="bg-secondary">
                    <th className="px-4 text-white py-2 border-r border-white">
                      SL.No
                    </th>
                    <th className="px-4 text-white py-2 border-r border-white">
                      Name
                    </th>
                    <th className="px-4 text-white py-2 border-r border-white">
                      Designation
                    </th>
                    <th className="px-4 text-white py-2 border-r border-white">
                      Department{" "}
                    </th>
                    <th className="px-4 text-white py-2 border-r border-white">
                      Contact Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">1</td>
                    <td className="border px-4 py-2">Dr. Mahesha K</td>
                    <td className="border px-4 py-2">Principal / Chairman</td>
                    <td className="border px-4 py-2">SKIT</td>
                    <td className="border px-4 py-2">9148760346</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">2</td>
                    <td className="border px-4 py-2">Mr.Anil Kumar </td>
                    <td className="border px-4 py-2">Convener</td>
                    <td className="border px-4 py-2">ISE</td>
                    <td className="border px-4 py-2">7795468816</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">3</td>
                    <td className="border px-4 py-2">Mrs. Kusuma H P </td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">CSE</td>
                    <td className="border px-4 py-2">7204210895</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">4</td>
                    <td className="border px-4 py-2">Mrs. Gnaneshwari </td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">CSE</td>
                    <td className="border px-4 py-2">9113571353</td>
                  </tr>

                  <tr>
                    <td className="border px-4 py-2">5</td>
                    <td className="border px-4 py-2">Ms. Sindhu G</td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">ISE</td>
                    <td className="border px-4 py-2">8618414661</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">6</td>
                    <td className="border px-4 py-2">Mr. Dinesh</td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">MECH</td>
                    <td className="border px-4 py-2">8123001521</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">7</td>
                    <td className="border px-4 py-2">Mr. Vishwa Pavan </td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">CIVIL</td>
                    <td className="border px-4 py-2">7892233866</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">8</td>
                    <td className="border px-4 py-2">Mrs. Chaitra </td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">ECE</td>
                    <td className="border px-4 py-2">9663301820</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">9</td>
                    <td className="border px-4 py-2">Mr. Naveen </td>
                    <td className="border px-4 py-2">Member</td>
                    <td className="border px-4 py-2">ECE</td>
                    <td className="border px-4 py-2">6364644942</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
