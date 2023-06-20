import React , { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

import { FETCH_ALUMNIS } from "../graphql/query/FETCH_ALUMNIS";
import PageLayout from "../layout/PageLayout";
import Pagination from "../components/Pagination/Pagination";
import SearchBar from "../components/UI/SearchBar";
import {AiFillPhone, AiOutlineMail} from "react-icons/ai";
import {MdEmail} from "react-icons/md";
export default function Home() {
  const [alumniList, setAlumniList] = useState([]);
  const [queryData, setQUeryData] = useState({
    count: 15,
    pageNo: 1,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const { loading, error, data, refetch } = useQuery(FETCH_ALUMNIS, {
    variables: { fetchAlumnis: queryData },
    onCompleted: (data) => {
      setAlumniList(data.fetchAlumnis.data);
    },
  });

  useEffect(() => {
    if(searchQuery){
      refetch({ fetchAlumnis: {
        search : searchQuery,
        pageNo : queryData.pageNo,
        count : queryData.count
      } });
    }
    else{
      refetch({ fetchAlumnis: {
        pageNo : queryData.pageNo,
        count : queryData.count
      } });
    }

    return () => {
      
    }
  }, [searchQuery])
  

  const onSearch = (searchQuery) => {
    setQUeryData({ ...queryData, searchQuery });
  }

  const onPageChange = (pageNo) => {
    setQUeryData({ ...queryData, pageNo });
  };

  const onChange = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <PageLayout lable={"Alumni Directory"}>
      <div className="flex justify-center w-screen px-10 pt-4 ">
        <SearchBar onChange={onChange} />
      </div>
      <div className=" m-5 flex gap-5 flex-wrap justify-center   md:flex-row  ">
        {loading && <div>loading...</div>}
        {!loading &&
          alumniList.map((alumni) => {
            return (
              <AlumniProfile
                profile="/assests/Profile/profile.png"
                alumni={alumni}
              />
            );
          })}
      </div>
      {data && (
        <Pagination
          back={data.fetchAlumnis.back}
          next={data.fetchAlumnis.next}
          onPageChange={onPageChange}
          queryData={queryData}
        />
      )}
    </PageLayout>
  );
}

const AlumniProfile = ({ alumni : {  fullName, usn, yearOfCompletion, phoneNumber, email, branch, presentOrganization }}) => {
  return (
    <div className="card bg-white rounded-md shadow-md hover:shadow-2xl cursor-default   flex flex-col justify-between m-4  gap-4 w-[250px] h-[300px]">
     <div className="bg-secondary px-4 rounded-t-md  ">
          <h4 className="py-2 text-md  font-semibold capitalize text-white ">{fullName}</h4>

        </div>
      <div className="px-4">
        
        <div className="">
          <p className="mb-2">{`USN : ${usn}`}</p>
          <p className="mb-2">{`Branch : ${branch}`}</p>
          <p className="mb-2">{`Graduated At :  ${yearOfCompletion} AD` }</p>
          <p className="mb-2 capitalize">{`Present Organization :  ${presentOrganization}` }</p>
        </div>
          
       
      </div>
      <div className="p-4">
        <div className="     flex justify-center items-center gap-4 rounded-full">
          <a href={`tel:${phoneNumber}`} >
            <AiFillPhone   className="text-white h-[30px] w-[30px] bg-gray-400  p-2 rounded-full"/>
          </a>

          <a href={`mailto:${email}`} >
            <MdEmail   className="text-white h-[30px] w-[30px] bg-gray-400  p-2 rounded-full"/>
          </a>

        </div>
      </div>
    </div>
  );
};
