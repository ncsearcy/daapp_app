import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignOutButton } from "../../components/sign-out-button";
import ProjectsPage from "@/components/projectTracker/page";
import ActivitiesPage from "@/components/activities/page";


export const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
      <Tabs>
        <TabsList>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
        </TabsList>
        <TabsContent value="projects">
          <ProjectsPage />
        </TabsContent>
        <TabsContent value="activities">
          <ActivitiesPage />
        </TabsContent>
      </Tabs>
      </div>
      <div>
      <SignOutButton />
      </div>
    </div>

  );
};
