import { useState } from "react";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_ALUMNIS } from "../../graphql/query/FETCH_ALUMNIS";
import Pagination from "../../components/Pagination/Pagination";
import AdminLayout from "../../layout/AdminLayout";
import EditAlumniModal from "../../modals/EditAlumniModal";
import { BiCheck } from "react-icons/bi";

export default function Home() {
  const router = useRouter();
  const [alumniList, setAlumniList] = useState([]);

  const [editModal, setEditModal] = useState(false);

  const [alumniData, setAlumniData] = useState({});
  const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const onClose = () => {
    setEditModal(false);
  };

  const { loading, error, data } = useQuery(FETCH_ALUMNIS, {
    variables: { fetchAlumnis: queryData },
    onCompleted: (data) => {
      setAlumniList(data.fetchAlumnis.data);
    },
  });

  const editAlumni = (alumni) => {
    setAlumniData(alumni);
    setEditModal(true);
  };

  const onPageChange = (pageNo) => {
    setQUeryData({ ...queryData, pageNo });
  };

  return (
    <AdminLayout>
      {editModal && (
        <EditAlumniModal
          alumniData={alumniData}
          isOpen={editModal}
          onClose={onClose}
        />
      )}
      <h1 className="p-4 font-bold text-center text-3xl">Alumni Directory</h1>
      <div className="flex justify-end pr-8">
        <button
          className="p-4 bg-green-700 rounded-full px-10 text-white "
          onClick={() => router.push("/dashboard/registeration")}
        >
          Register new Alumni
        </button>
      </div>

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
                isApproved={alumni.isApproved}
                editAlumni={() => editAlumni(alumni)}
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

const AlumniProfile = ({ name, usn, passingYear, isApproved, editAlumni }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center w-[250px] h-[300px]">
      <div className="mb-4">
        {/* <img className="w-20 h-20 mx-auto" src={profile} alt="profilePic" /> */}
      </div>
      <div className="flex flex-col gap-2 text-center">
        <div className="flex gap-2 w-full">
          <h4 className="w-max">{name}</h4>
          {isApproved && (
            <div
              className="bg-green-600 text-white flex items-center justify-center h-6 w-6 rounded-full hover:bg-green-800"
              type=""
            >
              <BiCheck className="w-full h-full" />
            </div>
          )}
        </div>

        <p className="mb-2">{usn}</p>
        <p className="mb-2">{passingYear}</p>
        <div className="flex items-center justify-center gap-2">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
            type=""
            onClick={() => editAlumni()}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
