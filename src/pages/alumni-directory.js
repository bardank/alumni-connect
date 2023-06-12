import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { FETCH_ALUMNIS } from "../graphql/query/FETCH_ALUMNIS";
import PageLayout from "../layout/PageLayout";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/UI/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [alumniList, setAlumniList] = useState([]);
  const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const { loading, error, data, refetch } = useQuery(FETCH_ALUMNIS, {
    fetchPolicy: "network-only",
    variables: {
      fetchAlumnis: {
        count: queryData.count,
        pageNo: queryData.pageNo,
      },
    },
    onCompleted: (data) => {
      setAlumniList(data.fetchAlumnis.data);
    },
  });

  useEffect(() => {
    console.log({ search });
    if (search && search.length > 2) {
      setQUeryData({ ...queryData, pageNo: queryData.pageNo, search: search });
      refetch({
        fetchAlumnis: {
          count: queryData.count,
          pageNo: queryData.pageNo,
          search: search,
        },
      });
    } else {
      refetch({
        fetchAlumnis: {
          count: queryData.count,
          pageNo: queryData.pageNo,
        },
      });
    }
  }, [search]);

  const onPageChange = (pageNo) => {
    setQUeryData({ ...queryData, pageNo });
  };

  return (
    <PageLayout>
      <div className="flex justify-center w-screen px-10 pt-4 ">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h2 className="text-center text-2xl px-10 py-2 font-bold text-blue-500">
        Alumni Directory
      </h2>
      <div className="flex m-5 justify-center text-center">
        {loading && <div>loading...</div>}
        {!loading && alumniList.length === 0 && (
          <div className="flex justify-center text-center">No Alumni found</div>
        )}
      </div>
      <div className=" m-5 flex gap-5 flex-wrap justify-center   md:flex-row  ">
        {alumniList.map((alumni) => {
          return (
            <AlumniProfile
              profile="/assests/Profile/profile.png"
              name={alumni.fullName}
              usn={alumni.usn}
              email={alumni.email}
              passingYear={alumni.yearOfCompletion}
            />
          );
        })}
      </div>
      {/* {data && (
        <Pagination
          back={data.fetchAlumnis.back}
          next={data.fetchAlumnis.next}
        />
      )} */}
    </PageLayout>
  );
}

const AlumniProfile = ({ profile, name, usn, passingYear, email }) => {
  return (
    <div className="card bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center w-[250px] h-[300px]">
      <div className="mb-4">
        {/* <img className="w-20 h-20 mx-auto" src={profile} alt="profilePic" /> */}
      </div>
      <div className="text-center">
        <h4 className="mb-2 text-xl font-semibold">{name}</h4>
        <p className="mb-2">{`USN : ${usn}`}</p>
        <p className="mb-2">{`PassingYear : ${passingYear}`}</p>
        <p className="mb-2">{`Email : ${email}`}</p>
        {/* <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800"
          type=""
        >
          Read More
        </button> */}
      </div>
    </div>
  );
};
