import { Projects , columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Projects[]> {
  // Fetch data from your API here.
    const response = await fetch("https://66bb7e776a4ab5edd63897c7.mockapi.io/activities", {next: {revalidate: 50}});
    const projects = await response.json();
    return projects;
//   return [
//     {
//       id: "1",
//       title: "Activity 1",
//       description: "Description 1",
//       date: "2022-01-01",
//       status:  "Not Started",
//       priority: "low",
//     },
//   ];
}

  export default async function projectspage() {
    const data = await getData();

    return (
      <div className="container m-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    );
  }
