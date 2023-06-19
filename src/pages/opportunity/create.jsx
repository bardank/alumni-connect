import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobPostingCard from "../../components/UI/JobPostingCard";
import FETCH_OPPORTUNITIES from "@/graphql/query/FETCH_OPPORTUNITIES";
import {useQuery} from "@apollo/client";
import Pagination from "../../components/Pagination/Pagination";

import PageLayout from "../../layout/PageLayout";
export default function opportunity() {
   const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const [opportunities, setOpportunities] = useState([]);

  const {data, loading} = useQuery(FETCH_OPPORTUNITIES, {
    variables: {
      fetchOpportunities: {
        count: queryData.count,
        pageNo: queryData.pageNo,
      }
    }, onCompleted: (data) => {
        if(data.fetchOpportunities.success) {
          setOpportunities(data.fetchOpportunities.data)
        }
    }
  })

  const onPageChange = (pageNo) => {
    setQUeryData({ ...queryData, pageNo });
  };


  return (
    <PageLayout className={"pt-6"} lable="Opportunities">
        

    </PageLayout>
  );
}
