import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_ALUMNIS } from "../../graphql/query/FETCH_ALUMNIS";
import Pagination from "../../components/Pagination/Pagination";
import AdminLayout from "../../layout/AdminLayout";

export default function Home() {
  const [alumniList, setAlumniList] = useState([]);
  const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const { loading, error, data } = useQuery(FETCH_ALUMNIS, {
    variables: { fetchAlumnis: queryData },
    onCompleted: (data) => {
      setAlumniList(data.fetchAlumnis.data);
    },
  });

  const onPageChange = (pageNo) => {
    setQUeryData({ ...queryData, pageNo });
  };

  return (
    <AdminLayout>
      <div className=" m-5 flex gap-5 flex-wrap justify-center   md:flex-row  ">
        {loading && <div>loading...</div>}
        {!loading &&
          alumniList.map((alumni) => {
            return (
              <AlumniProfile
                profile="/assests/Profile/profile.png"
                name={alumni.fullName}
                usn={alumni.usn}
                passingYear={alumni.yearOfCompletion}
                key={alumni.id}
              />
            );
          })}
      </div>
      {data && (
        <Pagination
          back={data.fetchAlumnis.back}
          next={data.fetchAlumnis.next}
        />
      )}
    </AdminLayout>
  );
}

const AlumniProfile = ({ profile, name, usn, passingYear }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center w-[250px] h-[300px]">
      <div className="mb-4">
        {/* <img className="w-20 h-20 mx-auto" src={profile} alt="profilePic" /> */}
      </div>
      <div className="text-center">
        <h4 className="mb-2">{name}</h4>
        <p className="mb-2">{usn}</p>
        <p className="mb-2">{passingYear}</p>
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          type=""
        >
          Read More
        </button>
      </div>
    </div>
  );
};