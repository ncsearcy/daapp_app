import { Activity } from "@/components/activities/columns";
import { SignOutButton } from "../../components/sign-out-button";

export const DashboardPage: React.FC<{ data: Activity[] }> = ({ data }) => {
    return ( 
        <div className="dashboard-page">
            <h2>Dashboard</h2>
            <div className="dashboard-card">
                <SignOutButton className="signout-button" />
            </div>
        </div> 
    );
};

