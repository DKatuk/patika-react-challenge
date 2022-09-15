import React from "react";
import { PieChart, Pie, Tooltip} from "recharts";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const Stats = ({todos}) => {
  let countValuesByKey = (arr, key) =>
    arr.reduce((r, c) => {
      r[c[key]] = (r[c[key]] || 0) + 1;
      return r;
    }, {});

  let countValue = (arr, key, value) =>
    arr.filter((x) => x[key] === value).length;

  console.log(countValuesByKey(todos, "category"));
  const categoryData = countValuesByKey(todos, "category");
  console.log("categoryData", categoryData);
  const data= [
    { name: "Work", value: categoryData.Work },
    { name: "Study", value: categoryData.Study },
    { name: "Shopping", value: categoryData.Shopping },
    { name: "Friends", value: categoryData.Friends },
    { name: "Meeting", value: categoryData.Meeting }
  ]
  const statusData = countValuesByKey(todos, "isCompleted");
  console.log("statusData", statusData);
  const dataTaskStatus = [
    { name: "Completed", value: statusData.Done },
    { name: "In Progress", value: statusData.inProgress},
    { name: "Not Completed", value: statusData.false }
  ]

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="my-4 font-bold">Todos By Category</h1>
        <hr className="w-full" />
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#7C31FF"
            label
          />
          <Pie
            dataKey="value"
            data={data}
            cx={500}
            cy={200}
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          />
          <Tooltip />
        </PieChart>
      </div>
      <div></div>
      <h1 className="my-4 font-bold">Todos By Status</h1>
      <hr className="w-full" />
      <BarChart width={150} height={80} data={dataTaskStatus}>
        <Bar dataKey="value" fill="#7C31FF" />
        <Tooltip />
      </BarChart>
    </div>
  );
}

export default Stats