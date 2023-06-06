import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import marks from "./Marks";
export const data = [
  ["Task", "Scores"],
  ["Spring boot", 15],
  ["Angular", 8],
  ["React", 6],
  ["KOTLIN", 3],
];




export function Scores() {
  const data1 = [["Task", "Scores"]];
  const options = {
    title: "My Profile",

  };
  marks.map((item) => data1.push([item.subject, Number(item.pages)]))

  useEffect(() => {
    console.log(data1 + "actualdata")

  }, [marks]);

  return (
    <Chart
      chartType="PieChart"
      data={data1}
      options={options}
      width={"100%"}
      height={"400px"}
    
    />
  );
}

export default Scores;
