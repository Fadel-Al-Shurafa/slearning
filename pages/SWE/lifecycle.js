import ManagementTriangleStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const ManagementTriangle = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={ManagementTriangleStyles.body}>
        <div className={ManagementTriangleStyles.Space200}></div>

        <div>
          <h1 className="text-center">Project Management life cycle </h1>
          <div className={ManagementTriangleStyles.Space100}></div>

          <div className="container">
            <div className="d-flex justify-content-center">
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/images/image 11.png"
                width="500"
                height="300"
              />
            </div>

            <div>
              <div>
                <div className={ManagementTriangleStyles.Space100}></div>

                <h3 data-aos="fade-right" data-aos-duration="1000">
                  <b>project manager may do any of the following:</b>
                </h3>
                <br />
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Perform a feasibility study
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Create a project charter
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Identify key stakeholders
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Select project management tools
                  </li>
                </ul>
                <h5>
                  By the end of this phase, the project manager should have a
                  high-level understanding of the project’s purpose, goals,
                  requirements, and risks.
                </h5>
                <div className={ManagementTriangleStyles.Space100}></div>

                <h3 data-aos="fade-right" data-aos-duration="1000">
                  <b>
                    The planning phase is critical to creating a project roadmap
                    the entire team can follow. This is where all of the details
                    and goals are outlined in order to meet the requirements
                    laid out by the organization. During this phase, project
                    managers will typically:
                  </b>
                </h3>
                <br />
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Develop a resource plan
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Define goals and performance measures
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Communicate roles and responsibilities to team members
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Build out workflows
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Anticipate risks and create contingency plans
                  </li>
                </ul>
                <div className={ManagementTriangleStyles.Space100}></div>
                <h5>
                  The next phase (execution) typically begins with a project
                  kickoff meeting where the project manager outlines the project
                  objectives to all stakeholders involved. Before that meeting
                  happens, it is crucial for the project manager to do the
                  following:
                </h5>

                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Establish goals and deliverables
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Identify your team members and assign tasks
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Develop a draft project plan
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Define which metrics will be used to measure project success
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Identify and prepare for potential roadblocks
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Establish logistics and schedules for team communication
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Choose your preferred project management methodology
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Ensure your team has access and knowledge of the relevant
                    tools
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Schedule the meeting
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Set the agenda and prepare the slides
                  </li>
                </ul>
                <div className={ManagementTriangleStyles.Space100}></div>

                <h5>
                  This stage is where the bulk of the project happens.
                  Deliverables are built to make sure the project is meeting
                  requirements. This is where most of the time, money, and
                  people are pulled into the project. As previously mentioned, a
                  kickoff meeting is held to mark the official start of the
                  execution phase. A kickoff meeting agenda might look something
                  like this:
                </h5>

                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Introductions: Who’s who?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Project background: Why are you doing this project? What are
                    the goals?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Project scope: What kind of work is involved?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Project plan: What does the roadmap look like?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Roles: Who will be responsible for which elements of the
                    project?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Communication: What kind of communication channels will be
                    used? What kind of meetings or status reports should your
                    team expect?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Tools: Which tools will be used to complete the project, and
                    how will they be used?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Next steps: What are the immediate action items that need to
                    be completed?
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Q&A: Open the floor for any questions
                  </li>
                </ul>

                <div className={ManagementTriangleStyles.Space100}></div>

                <h5 data-aos="fade-right" data-aos-duration="1000">
                  This phase happens in tandem with the execution phase. As the
                  project moves forward, the project manager must make sure all
                  moving parts are seamlessly headed in the right direction. If
                  adjustments to the project plan need to be made due to
                  unforeseen circumstances or a change in direction, they may
                  happen here.
                </h5>
                <br />
                <p>
                  During the controlling and monitoring phase, project managers
                  may have to do any of the following:
                </p>
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Manage resources
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Monitor project performance
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Risk management
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Perform status meetings and reports
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Update project schedule
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Modify project plans
                  </li>
                </ul>
                <h5>
                  At the end of this phase, all the agreed project deliverables
                  should be completed and accepted by the customer.
                </h5>

                <div className={ManagementTriangleStyles.Space100}></div>

                <h5 data-aos="fade-right" data-aos-duration="1000">
                  The closing phase is a critical step in the project management
                  life cycle. It signals the official end of the project and
                  provides a period for reflection, wrap-up, and organization of
                  materials.
                </h5>
                <br />
                <h3>
                  <b>Project managers can:</b>
                </h3>
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Take inventory of all deliverables
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Tie up any loose ends
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Hand the project off to the client or the team that will be
                    managing the project’s day-to-day operations
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Perform a post-mortem to discuss and document any learnings
                    from the project
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Organize all project documents in a centralized location
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Communicate the success of the project to stakeholders and
                    executives
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Celebrate project completion and acknowledge team members
                  </li>
                </ul>
                <h5>
                  Now that you understand each stage in the project management
                  life cycle, choosing the right project management tool for you
                  and your team is critical to project success. Read on for best
                  practices when choosing a tool that fits your needs, and a
                  guide to the features you should consider when assessing
                  project management software.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className={ManagementTriangleStyles.Space400}></div>
      </div>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};
export default ManagementTriangle;
