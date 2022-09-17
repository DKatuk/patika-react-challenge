import React from "react";
import { PieChart, Pie, Tooltip} from "recharts";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Stats = ({todos}) => {
  let countValuesByKey = (arr, key) =>
    arr.reduce((r, c) => {
      r[c[key]] = (r[c[key]] || 0) + 1;
      return r;
    }, {});

  console.log(countValuesByKey(todos, "category"));
  const categoryData = countValuesByKey(todos, "category");
  const data= [
    { name: "Work", value: categoryData.Work },
    { name: "Study", value: categoryData.Study },
    { name: "Shopping", value: categoryData.Shopping },
    { name: "Friends", value: categoryData.Friends },
    { name: "Meeting", value: categoryData.Meeting }
  ]
  const statusData = countValuesByKey(todos, "isCompleted");
  const dataTaskStatus = [
    { name: "Completed", value: statusData.Done },
    { name: "In Progress", value: statusData.inProgress},
    { name: "Not Completed", value: statusData.false }
  ]
  const dateData = countValuesByKey(todos, "dueDate");
  console.log("dateData", dateData);
  const entries = Object.entries(dateData);
  console.log(entries); //array of arrays
  const dataTaskDate = entries.map((entry) => {
    return { name: entry[0], value: entry[1] }
  })
  
  
  

  return (
    <div className="flex flex-wrap flex-col items-start md:items-center md:flex-row md:justify-center gap-4">
      <div className="md:my-10 w-96 h-96  scale-90 md:scale-100 ">
        <h1 className="my-4 font-bold text-center dark:text-secondary-100">
          NUMBER OF TODOS BY DATE
        </h1>
        <hr className="w-full" />
        <div className="scale-75 md:scale-100 w-96 h-96">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={600}
              height={300}
              data={dataTaskDate}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#02EF60"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="md:my-10 w-96 h-96 ">
        <h1 className="my-4 font-bold text-center dark:text-secondary-100">
          NUMBER OF TODOS BY STATUS
        </h1>
        <hr className="w-full" />
        <div className="w-96 h-96 scale-75 md:scale-100 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart width={384} height={384} data={dataTaskStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="value" fill="#7C31FF" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-96 h-96 ">
        <h1 className="my-4 font-bold text-center dark:text-secondary-100">
          NUMBER OF TODOS BY CATEGORY
        </h1>
        <hr className="w-full" />
        <ResponsiveContainer width="100%" height="80%">
          <PieChart width={400} height={384}>
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
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Stats