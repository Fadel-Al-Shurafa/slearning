import DataAnalystStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const DataAnalyst = () => {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <div className={DataAnalystStyles.body}>
        <div className={DataAnalystStyles.Space200}></div>

        <div>
          <h1 className="text-center"> What is Data Analyst?</h1>
          <div className={DataAnalystStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={DataAnalystStyles.fontSize130}>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  A data analyst collects, cleans, and interprets data sets in
                  order to answer a question or solve a problem. They work in
                  many industries, including business, finance, criminal
                  justice, science, medicine, and government.
                </p>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  What kind of customers should a business target in its next ad
                  campaign? What age group is most vulnerable to a particular
                  disease? What patterns in behavior are connected to financial
                  fraud?
                </p>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  These are the types of questions you might be pressed to
                  answer as a data analyst. Read on to find out more about what
                  a data analyst is, what skills you'll need, and how you can
                  start on a path to become one.
                </p>
                <div className={DataAnalystStyles.Space100}></div>
                <p data-aos="fade-right" data-aos-duration="1000">
                  {" "}
                  <b>
                    Data analysis is the process of gleaning insights from data
                    to inform better business decisions. The process of
                    analyzing data typically moves through five iterative
                    phases:
                  </b>
                </p>
              </div>

              <ul>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Identify the data you want to analyze
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Collect the data
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Clean the data in preparation for analysis
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Analyze the data
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Interpret the results of the analysis
                </li>
              </ul>

              <p data-aos="fade-right" data-aos-duration="1000">
                {" "}
                Data analysis can take different forms, depending on the
                question you’re trying to answer. You can read more about the
                types of data analysis here. Briefly, descriptive analysis tells
                us what happened, diagnostic analysis tells us why it happened,
                predictive analytics forms projections about the future, and
                prescriptive analysis creates actionable advice on what actions
                to take.
              </p>
            </div>
            <div className={DataAnalystStyles.Space100}></div>
            <div>
              <h4 data-aos="fade-right" data-aos-duration="1000">
                <b>Data Analyst tasks and responsibilities</b>
              </h4>
              <p data-aos="fade-right" data-aos-duration="1000">
                {" "}
                A data analyst is a person whose job is to gather and interpret
                data in order to solve a specific problem. The role includes
                plenty of time spent with data but entails communicating
                findings too.
              </p>
              <p data-aos="fade-right" data-aos-duration="1000">
                <b>Here’s what many data analysts do on a day-to-day basis:</b>
              </p>

              <ul>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Gather data:</b> Analysts often collect data themselves.
                  This could include conducting surveys, tracking visitor
                  characteristics on a company website, or buying datasets from
                  data collection specialists.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Clean data:</b> Raw data might contain duplicates, errors,
                  or outliers. Cleaning the data means maintaining the quality
                  of data in a spreadsheet or through a programming language so
                  that your interpretations won’t be wrong or skewed.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Model data:</b> This entails creating and designing the
                  structures of a database. You might choose what types of data
                  to store and collect, establish how data categories are
                  related to each other, and work through how the data actually
                  appears.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Interpret data:</b> Interpreting data will involve finding
                  patterns or trends in data that could answer the question at
                  hand.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Present:</b> Communicating the results of your findings
                  will be a key part of your job. You do this by putting
                  together visualizations like charts and graphs, writing
                  reports, and presenting information to interested parties.
                </li>
              </ul>
            </div>
          </div>

          <div className={DataAnalystStyles.Space200}></div>

          <div className={DataAnalystStyles.containerFlexSpecific}>
            <div className={DataAnalystStyles.FlexSpecific}>
              <div>
                <img
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  className={DataAnalystStyles.Fleximg}
                  src="/images/data-analytics.png"
                />
              </div>
            </div>
            
            <div className={DataAnalystStyles.FlexSpecific}>
              <h4 data-aos="fade-right" data-aos-duration="1000">
              <div className={DataAnalystStyles.Space50}></div>
                <b>What skill is required Data Analysts?</b>
              </h4>
              <p data-aos="fade-right" data-aos-duration="1000">
                {" "}
                Data Analysts require a variety of technical and soft skills to
                collect, process, analyze, and interpret data to support
                business decision-making. Some of the key skills required by
                Data Analysts include:
              </p>

              <ol>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Data analysis and manipulation:</b> Data Analysts must have
                  expertise in data analysis and manipulation techniques such as
                  SQL, Python, R, or Excel to{" "}
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Statistical analysis:</b> Data Analysts must have a strong
                  foundation in statistics to correctly analyze and interpret
                  data. This includes knowledge of statistical tests,
                  probability theory, and data sampling methods.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Data visualization:</b> Data Analysts must have expertise
                  in data visualization tools and techniques to create
                  visualizations that effectively communicate data insights to
                  stakeholders.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Business acumen:</b> Data Analysts must have a strong
                  understanding of the business context and the goals of the
                  organization. This involves understanding the business problem
                  being addressed and ensuring that the data insights presented
                  align with the organization's goals.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Communication skills:</b> Data Analysts must have strong
                  communication skills to effectively present data insights to a
                  non-technical audience. This includes being able to explain
                  complex data concepts in a clear and concise manner.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Problem-solving:</b> Data Analysts must have strong
                  analytical and problem-solving skills to identify trends,
                  patterns, and insights in data and to troubleshoot problems
                  with data quality or analysis.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Time management:</b> Data Analysts must be able to manage
                  their time effectively to meet project deadlines and ensure
                  that data analysis tasks are completed on time.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Attention to detail:</b> Data Analysts must have a strong
                  attention to detail to ensure that data is accurately
                  collected, processed, and analyzed.
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  <b>Collaboration:</b> Data Analysts must have strong
                  collaboration skills to work effectively with other team
                  members, such as Data Scientists, Business Analysts, and IT
                  professionals.
                </li>
              </ol>
            </div>
          </div>
          <div className={DataAnalystStyles.Space100}></div>
          <div className="container ">
            <div>
              <h4 data-aos="fade-right" data-aos-duration="1000">
                <b>Types of Data Analysts</b>
              </h4>
              <p data-aos="fade-right" data-aos-duration="1000">
                {" "}
                As advancing technology has rapidly expanded the types and
                amount of information we can collect, knowing how to gather,
                sort, and analyze data has become a crucial part of almost any
                industry. You’ll find data analysts in the criminal justice,
                fashion, food, technology, business, environment, and public
                sectors—among many others. People who perform data analysis
                might have other titles such as:
              </p>

              <ul>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Medical and health care analyst
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Market research analyst
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Business analyst
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Business intelligence analyst
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Operations research analyst
                </li>
                <li data-aos="fade-right" data-aos-duration="1000">
                  Intelligence analyst
                </li>
              </ul>
            </div>
            <div className={DataAnalystStyles.Space100}></div>
            <div>
              <div className={DataAnalystStyles.Space400}></div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>AOS.init();</script>
    </>
  );
};

export default DataAnalyst;
