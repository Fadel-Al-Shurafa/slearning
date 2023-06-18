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
          <h1 className="text-center">Project Management Triangle</h1>
          <div className={ManagementTriangleStyles.Space100}></div>

          <div className="container">
            <div className="d-flex justify-content-center">
              <Image
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/images/projm.png"
                width="500"
                height="300"
              />
            </div>

            <div>
              <div>
                <div className={ManagementTriangleStyles.Space100}></div>

                <p data-aos="fade-right" data-aos-duration="1000">
                  The project management triangle is a model in project
                  management that shows how the balance between three
                  constraints—scope, time, and budget—affects the quality of the
                  project. The triangle shows that affecting one constraint will
                  mean adjusting one or both of the others in order to maintain
                  the quality. It’s also called the triple constraint model or
                  the iron triangle. Project managers must oversee all three of
                  these constraints in order to complete a project successfully.
                  <br />
                  Let’s say that you need to expand the scope of a project. This
                  might mean extending the original schedule of the project, or
                  increasing the budget in order not to affect the quality of
                  the output. Likewise, shortening the schedule to meet an
                  earlier deadline might mean increasing the budget or
                  tightening the scope. Need to absolutely reduce the budget and
                  timeline without changing the scope? Then the triangle might
                  have to shrink—meaning the quality of the product might be
                  reduced.
                </p>
                <br />
                <br />

                <p data-aos="fade-right" data-aos-duration="1000">
                  Scope refers to the deliverables and tasks that must be
                  completed to achieve the project’s goals. The scope might
                  change if stakeholders decide mid-project that they want to
                  adjust a product, or add another product entirely.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1000">
                  Project cost is the total amount of money required to complete
                  a project. This is also called the budget. Costs might include
                  salaries for employees, and money for equipment, tools, office
                  space, and other resources. Adding new members to a team or
                  increasing the time it takes to complete a project can impact
                  cost.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1000">
                  Time is how long it takes to complete tasks in a project, and
                  the project itself. This constraint is also called the
                  schedule. An expanded scope can increase timelines. So can a
                  decreased budget—for example, if a team member is removed from
                  the team due to budget constraints, it can take longer to
                  complete a project.
                </p>
                <br />
                <p data-aos="fade-right" data-aos-duration="1000">
                  The quality constraint (or “quality tolerance”) is actually
                  quite similar to that of scope – except that quality focuses
                  on characteristics of a deliverable. When we address quality
                  we are not looking to add (or delete) a new item. We are only
                  looking to alter or provide flexibility (or “breathing space”)
                  for some feature of an already-defined item – or to assure
                  that a particular characteristic is present and working
                  properly (quality checking). Here's an example. If I am
                  building you a custom-made table, and you say “I want the
                  table only to be made from cherry wood,” then you have given
                  me NO quality tolerance on that particular characteristic of
                  the table. If, for some reason, I can't find cherry wood, then
                  I do not have the flexibility to substitute anything else,
                  unless I ask your permission. With “quality tolerance” you
                  might say “I want the table made out of cherry, but if you
                  can't find cherry, or it is very expensive (above a certain
                  cost), then I give you permission, in advance, to substitute
                  walnut or oak.” You have just provided me with quality
                  tolerance. You are not adding a new item, just giving me
                  flexibility on one of the item's characteristics. If I can't
                  find good cherry wood, I can use oak without getting your
                  permission.
                </p>

                <div className={ManagementTriangleStyles.Space100}></div>

                <h5>
                  Some models show an enhanced project management “triangle”
                  with six constraints. The six-constraint model adds benefit
                  (sometimes replaced by “resources”), risk, and quality as
                  three more separate constraints [1]. This model is sometimes
                  depicted as a six-point star made from two overlapping
                  triangles.
                </h5>
                <br />
                <br />

                <h3>
                  <b>
                    Here are concrete ways you can balance the constraints of
                    the project management triangle.
                  </b>
                </h3>
                <ul>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Communicate with stakeholders: Speak with stakeholders to
                    know what is acceptable change and which constraints should
                    be prioritized. Is the deadline immovable or the budget
                    strict? This will give you an idea of how the project can
                    adapt should changes become necessary. This is a crucial
                    step in the initial stages of the project, but frequent
                    communication should happen throughout the project as well.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Establish risk management processes: Planning for risks
                    should be a step baked into your project management process
                    to prevent scope creep and stay within budget and on
                    schedule. Identify risks, then establish a plan to mitigate
                    each. If you’re looking for more detail, read about how to
                    manage project risks.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Create change management processes: Change is often
                    inevitable. Having a change management process in place
                    creates a structured way for changes to be approved or
                    rejected. This ensures the team is aware of changes as they
                    happen and how they impact the project. This can also reduce
                    scope creep.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Choose a methodology based on constraints: You might opt to
                    adopt a project management methodology based on the
                    constraints you face. Projects that face strict constraints
                    are often managed through Waterfall-type approaches. If you
                    need more flexibility, an Agile method like Scrum might be
                    more fitting. Projects where inefficiencies need to be
                    minimized as much as possible can benefit from a Lean
                    approach.
                  </li>
                  <li data-aos="fade-right" data-aos-duration="1000">
                    Read more: 12 Project Management Methodologies: Your Guide
                  </li>
                </ul>
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
