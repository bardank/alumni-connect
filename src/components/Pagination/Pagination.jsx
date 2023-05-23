import React from 'react'
import Button from "../UI/Button";

const Index = ({next, back, onPageChange}) => {
  return (
    <div className="flex justify-center gap-4">
        {next && (
          <Button
            label={"Back"}
            onClick={() => onPageChange(queryData.pageNo - 1)}
            className=" font-light !py-2 text-center !px-2"
          />
        )}

        {back && (
          <Button
            label={"Next"}
            onClick={() => onPageChange(queryData.pageNo + 1)}
            className=" font-light !py-2 text-center !px-2"
          />
        )}
    </div>
  )
}

export default Index