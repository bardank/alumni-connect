/* eslint-disable react/no-unescaped-entities */
import React, { Fragment } from "react";

import PageLayout from "../layout/PageLayout";

const Donation = () => {
  return (
    <PageLayout>
      <h1 className="text-center text-3xl m-10 px-10 py-2 font-bold text-secondary">
        Ways to Contribute
      </h1>
      <div className="containerContribution  flex flex-col  justify-center  md:px-20 px-6">
        <div className="left  w-full h-auto  ">
          <h2 className="font-bold text-2xl underline pb-3">
            As an alumnus/alumna, there are several ways you can contribute to
            your college and make a positive impact:
          </h2>
          <ul className="list-disc pl-6">
            <li>
              Mentorship Programs: Offer your expertise and guidance by becoming
              a mentor for current students. Share your experiences, provide
              career advice, and help them navigate their academic and
              professional journeys.
            </li>
            <li>
              Guest Speaker or Panelist: Volunteer to speak at career fairs,
              workshops, or seminars organized by your college. Share insights
              from your industry or field of expertise, and inspire students
              with your success story.
            </li>
            <li>
              Networking Events: Participate in alumni networking events
              organized by your college. Connect with fellow alumni, current
              students, and faculty members. Share your professional network and
              help others find job opportunities or internships.
            </li>
            <li>
              Donations and Fundraising: Contribute financially to your
              college's fundraising initiatives, scholarships, or specific
              projects. Your donations can support infrastructure development,
              research programs, or student scholarships, making education more
              accessible for deserving students.
            </li>
            <li>
              Alumni Association Involvement: Join your college's alumni
              association and actively participate in their activities and
              events. This involvement allows you to stay connected with your
              alma mater and fellow alumni, fostering a sense of community and
              providing opportunities for collaboration.
            </li>
            <li>
              Alumni Testimonials: Share your success stories and experiences
              with your college's marketing or admissions department. Your
              testimonials can be featured on the college's website, promotional
              materials, or social media channels, attracting prospective
              students and enhancing the institution's reputation.
            </li>
          </ul>
        </div>

        <div className="right w-1/2 h-auto m-5  ">
          <h1 className="underline font-bold  text-2xl ">Bank Details</h1>
          <table className="account-table">
            <tbody>
              <tr className="border-2 border-black">
                <th className="border-2 border-black py-2 px-4">
                  Sri Krishna Institute Of Technology:
                </th>
                <td className="py-2 px-4">Axis Bank</td>
              </tr>
              <tr className="border-2 border-black">
                <th className="border-2 border-black py-2 px-4">
                  Account Number:
                </th>
                <td className="py-2 px-4">922010022457057</td>
              </tr>
              <tr className="border-2 border-black">
                <th className="border-2 border-black py-2 px-4">
                  Account Name:
                </th>
                <td className="py-2 px-4">
                  Sri Krishna Institute of Technology-Alumni
                </td>
              </tr>
              <tr className="border-2 border-black">
                <th className="border-2 border-black py-2 px-4">IFSC Code:</th>
                <td className="py-2 px-4">UTIB0002926</td>
              </tr>
            </tbody>
          </table>
          {/* <div className="qr-code   ">
            <img
              className="w-40 h-40"
              src="./assests/icons/qrcode.png"
              alt=""
            />
            <p>Scan Qr code to contribute </p>
          </div> */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Donation;
