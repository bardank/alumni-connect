import React from 'react'
import Button from "../UI/Button";

const Index = ({next, back, onPageChange, queryData}) => {
  return (
    <div className="flex justify-center gap-4 my-4">
        {next && (
           <Button
            label={"Next"}
            onClick={() => onPageChange(queryData.pageNo + 1)}
            className=" font-light !py-2 text-center !px-2 text-sm bg-gray-500 rounded-md"
          />
        )}

        {back && (
          <Button
            label={"Back"}
            onClick={() => onPageChange(queryData.pageNo - 1)}
            className=" font-light !py-2 text-center !px-3 text-sm bg-gray-500 rounded-md"
          />
         
        )}
    </div>
  )
}

export default Index