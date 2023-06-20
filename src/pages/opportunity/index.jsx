import React, {useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import JobPostingCard from "../../components/UI/JobPostingCard";
import FETCH_OPPORTUNITIES from "@/graphql/query/FETCH_OPPORTUNITIES";
import {useQuery} from "@apollo/client";
import Pagination from "../../components/Pagination/Pagination";
import Button from "../../components/UI/Button";
import PageLayout from "../../layout/PageLayout";
import {useRouter} from "next/router";
import { useModal } from "@/customHooks/useModal";
import ConfirmationModal from "@/modals/confirmationModal";


export default function opportunity() {
   const [queryData, setQUeryData] = useState({
    count: 10,
    pageNo: 1,
  });

  const router = useRouter();

  const {openModal} = useModal();
  

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
     
      <div className="m-4 flex  flex-wrap gap-5 justify-center">
        {loading && <div>loading...</div>}
        {
          opportunities.map((opportunity) => (
            <JobPostingCard
              jobRole={opportunity.title}
              companyName={opportunity.companyName}
              location={opportunity.location}
            />
          ))
        }
        
        
      </div>
       {data && (
        <Pagination
          back={data.fetchOpportunities.back}
          next={data.fetchOpportunities.next}
          onPageChange={onPageChange}
          queryData={queryData}
        />
      )}
    <div className="flex justify-center">
        <Button label={"Create Opportunity"} className="w-auto" onClick={()=>{
          openModal(<ConfirmationModal/>)
        }}/>
         
      </div>
    </PageLayout>
  );
}
