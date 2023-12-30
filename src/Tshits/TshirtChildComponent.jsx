import React from "react";
import TshirtSubChild from "./TshirtSubChild";

const TshirtChildComponet = ({ data, showDetails, selectedData }) => {
  // if (!Array.isArray(data)) {
  //console.log("Data:", props);
  //   console.error("Invalid data type. Expected an array.");
  //   return null; // or handle it appropriately
  // }
  return (
    <table>
      <tbody>
        <div>
          {data.map((productInfo) => (
            <TshirtSubChild
              product={productInfo}
              showDetails={showDetails}
              selectedData={selectedData}
            />
          ))}
        </div>
      </tbody>
    </table>
  );
};
export default TshirtChildComponet;
