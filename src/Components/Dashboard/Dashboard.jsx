import React from "react";
import "./style.css";
import SmallCard from "../SmallCard/SmallCard";
import BigCard from "../BigCard/BigCard";
import Frame10 from "../../assets/Frame 10.png";
import Frame51 from "../../assets/Frame 51.png";
import Frame52 from "../../assets/Frame 52.png";
import AnnouncementCard from "../Announcement/AnnouncementCard";
import notfill from "../../assets/bi_pin-angle-notfill.png";
import fill from "../../assets/bi_pin-angle-fill.png";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="box-1">
        <div>
          <p className="dashboardText">Dashboard</p>
        </div>
        <div className="card-container">
          <SmallCard
            heading="Available Position"
            number="24"
            text="4 Urgently needed"
            theme="#FFEFE7"
            darkTheme="#FF5151"
          />
          <SmallCard
            heading="Job Open"
            number="10"
            text="4 Actively hiring"
            theme="#E8F0FB"
            darkTheme="#3786F1"
          />
          <SmallCard
            heading="New Employees"
            number="24"
            text="4 Department"
            theme="#FDEBF9"
            darkTheme="#EE61CF"
          />
        </div>
        <div className="card-container">
          <BigCard
            heading="Total Employees"
            number="216"
            text1="120 Men"
            text2="96 Women"
            src={Frame52}
          />
          <BigCard
            heading="Talent Request"
            number="16"
            text1="6 Men"
            text2="10 Women"
            src={Frame51}
          />
        </div>

        {/* Announcement Section */}

        <div className="card-container-1">
          <div className="card-container-2">
            <p className="announcementText">Announcement</p>
            <p className="announcementDate">
              <p>Today, 13 Sep 2021</p> <img src={Frame10} />
            </p>
          </div>
          <AnnouncementCard
            heading="Total Employees"
            text="5 minutes ago"
            src={fill}
          />
          <AnnouncementCard
            heading="Total Employees"
            text="5 minutes ago"
            src={notfill}
          />
          <AnnouncementCard
            heading="Total Employees"
            text="5 minutes ago"
            src={notfill}
          />
          <p className="announcementText2">See All Announcement</p>
        </div>
      </div>
      <div className="box-2">
        {/* Recently Activity Section */}
        <div className="recently-activity">
          <h1> Recently Activity </h1>
          <p>10.40 AM, Fri 10 Sept 2021</p>
          <h2>You Posted a New Job</h2>
          <h4>
            Kindly check the requirements and terms of work and make sure
            everything is right.
          </h4>
          <div>
            <h3>Today you makes 12 Activity</h3>
            <button>See All Activity</button>
          </div>
        </div>
        {/* Upcoming Schedule */}
        <div className="card-container-3">
          <div className="small-container">
            <div className="card-container-4">
              <p className="announcementText">Upcoming Schedule</p>
              <p className="announcementDate">
                <p>Today, 13 Sep 2021</p> <img src={Frame10} />
              </p>
            </div>
            <p className="sch-text">Priority</p>
            <AnnouncementCard
              heading="Review candidate applications"
              text="Today - 11.30 AM"
              width="92%"
            />
            <p className="sch-text">Other</p>
            <AnnouncementCard
              heading="Interview with candidates"
              text="Today - 10.30 AM"
              width="92%"
            />
            <AnnouncementCard
              heading="Short meeting with product designer from IT Departement"
              text="Today - 09.15 AM"
              width="92%"
              display="none"
            />
          </div>
          <p className="announcementText2">Create a New Schedule</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
