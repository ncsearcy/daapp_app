"use client";

import { redirect } from "next/navigation";
import { checkIsAuthenticated } from "../../lib/auth/checkIsAuthenticated";
import { Activity, columns } from "../../components/activities/columns";
import { DataTable } from "@/components/activities/data-table";
import { SignOutButton } from "../../components/sign-out-button";
import { useState, useEffect } from "react";


async function getData(): Promise<Activity[]> {
  // get data from your database
  return [
    {
      id: "1",
      title: "Activity 1",
      description: "Description 1",
      status: "Not Started",
      priority: "Low",
      date: "2022-01-01",
      created_at: "2022-01-01",
      updated_at: "2022-01-01",
    },
  ];
}

const DashboardPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[] | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const isAuthenticated = await checkIsAuthenticated();

      if (!isAuthenticated) {
        redirect("/auth/sign-in");
        return;
      }

      const activitiesData = await getData();
      setActivities(activitiesData);
    };

    loadData();

  }, []);

  if (!activities) {
    return null;
  }

  return (
    <div className="dashboard-page">

      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={activities} />
        <SignOutButton className="signout-button" />
      </div>
    </div>
  );
};

export default DashboardPage;
