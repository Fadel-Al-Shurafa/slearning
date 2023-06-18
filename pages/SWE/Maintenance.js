import MaintenanceStyles from "../../styles/style.module.css";
import Image from "next/image";
import Link from "next/link";
const Maintenance = () => {
  return (
    <>
      <div className={MaintenanceStyles.body}>
        <div className={MaintenanceStyles.Space200}></div>
        <div className="container">
          <h1 className="text-center">Maintenance</h1>

          <div className={MaintenanceStyles.ContainerContent}>
            <div className={MaintenanceStyles.Space100}></div>
            <div className="d-flex justify-content-center">
              <img
                data-aos="fade-right"
                data-aos-duration="1000"
                src="/images/Maintenance.png"
                className={MaintenanceStyles.majorsCSSCimg}
              />
            </div>
          </div>
          <div className={MaintenanceStyles.Space100}></div>
          <div className="container">
            <p>
              Software maintenance refers to the process of modifying, updating,
              and improving software after it has been deployed. There are
              different types of software maintenance, including:
            </p>

            <div className={MaintenanceStyles.Space200}></div>
            <div className={MaintenanceStyles.containerFlexMajors}>
              <div className={MaintenanceStyles.MajorsLnks}>
                <Link href="./Corrective.Maintenance">
                  <h3 className="text-center"> Corrective Maintenance</h3>
                </Link>
              </div>
              <div className={MaintenanceStyles.MajorsLnks}>
                <Link href="./Perfective.Maintenance">
                  <h3 className="text-center"> Perfective Maintenance</h3>
                </Link>
              </div>

              <div className={MaintenanceStyles.MajorsLnks}>
                <Link href="./Adaptive.Maintenance">
                  <h3 className="text-center">Adaptive Maintenance</h3>
                </Link>
              </div>
              <div>
                <div className={MaintenanceStyles.MajorsLnks}>
                  <Link href="./Emergency.Maintenance">
                    <h3 className="text-center">Emergency Maintenance</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={MaintenanceStyles.Space400}></div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
