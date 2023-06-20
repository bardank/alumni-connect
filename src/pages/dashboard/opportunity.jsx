import {React,useState ,useEffect} from "react";
import AdminLayout from "../../layout/AdminLayout";
import JobPostingCard from "../../components/UI/JobPostingCard";
import OpportunityForm from "../../components/OpportunityForm";
import { useNotification } from "../../customHooks/useNotification";
import CREATE_OPPORTUNITY  from "../../graphql/mutation/CREATE_OPPORTUNITY";
import FETCH_OPPORTUNITIES  from "../../graphql/query/FETCH_OPPORTUNITIES";
import { client } from "../../graphql/client";
import { uuid } from "uuidv4";
import { useQuery } from "@apollo/client";

const Opportunity = () => {

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




  const [edit, setEdit] = useState(false);

  const [opportunityId, setOpportunityId] = useState("");

  const { setNotification } = useNotification();


  const [formData, setformData] = useState({
    title: "",
    location: "",
    companyName: "",
    link: "",
    description: "",
  });
  const onChange = (e) => {
    console.log(e.target.value);
    setformData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await client.mutate({
        mutation: CREATE_OPPORTUNITY,
        variables: {
          createOpportunityInput: {
            ...formData,
          },
        },
      });
      console.log(response);
      if (response.data.createOpportunity.success) {
        setNotification(
          uuid(),
          "Opportunity created successfully",
          "Success",
          3000
        );
      } else {
        setNotification(
          uuid(),
          "Opportunity creation failed",
          "Error",
          3000
        );
      }
    } catch (error) {
      setNotification(
          uuid(),
          "Opportunity creation failed",
          "Error",
          3000
        );
        console.log(error);
    }
  };



  return (
    <AdminLayout>
    <h1 className="p-4 font-bold text-center text-3xl">Opportunities</h1>
      <div>
        
        <OpportunityForm 
        formData={formData} 
        onChange={onChange}
        onSubmit={(e)=> handleSubmit(e)} setEdit={setEdit}  edit={edit}
        resetForm={()=>setformData({
          title: "",
          location: "",
          companyName: "",
          link: "",
          description: "",
        })}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {opportunities.map((opportunity) => (
            <JobPostingCard
              key={opportunity._id}
              jobRole={opportunity.title}
              companyName={opportunity.companyName}
              location={opportunity.location}
              link={opportunity.link}
              description={opportunity.description}
              id={opportunity._id}
              
              onDelete={() => {
                onDelete(opportunity._id);
              }}
            />
      ))}</div>
      
    </AdminLayout>
  );
};

export default Opportunity;
