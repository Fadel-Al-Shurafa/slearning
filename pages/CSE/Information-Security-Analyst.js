import SWEmajorsStyles from '@/styles/SWEmajors.module.css'
import Image from 'next/image'
import Link from 'next/link'
const InformationSecurityAnalyst = () => {
  return (
    <>
      <div className={SWEmajorsStyles.SWEmajorsBody}>
        <div className={SWEmajorsStyles.Space}></div>
        <div>
          <h1 className="text-center">Information Security Analyst</h1>
          <div className={SWEmajorsStyles.Space100}></div>
          <div className="container">
            <div>
              <div className={SWEmajorsStyles.fontSize130}>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>who is network administrator ?</b></h3>
                <p>
                  A network administrator is an IT professional who ensures that an organization’s computer networks—groups of
                  computers that share information with one another—are operating to meet the needs of the organization. They can
                  maintain and troubleshoot computer networks, and employ security principles to keep networks secure.
                </p>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>What does network administration consist of?</b></h3>
                <p>
                  Network administration primarily consists of, but isn’t limited to, network monitoring, network management, and maintaining network
                  quality and security.
                </p>
                <br />
                <ol>
                  <li><b>Network monitoring </b>is essential to monitor unusual traffic patterns, the health of the network infrastructure, and devices connected to the network.
                    It helps detect abnormal activity, network issues, or excessive bandwidth consumption early on and take preventative and remedial actions to uphold
                    the network quality and security.</li>  <br />
                  <li> <b>Network management </b> encompasses multiple administrative functions, including network planning, implementation,
                    and configuration. It involves:</li>
                  <ul>
                    <li>preplanning the network based on changing organizational requirements</li>
                    <li>implementing the network for maximum efficiency</li>
                    <li>configuring various networking and security protocols</li>
                    <li>applying security patches and updating the firmware of the networking infrastructure, such as routers, hubs, switches, and firewalls</li>
                    <li>assessing the network for weaknesses</li>
                    <li>evaluating quality and capacity to increase or decrease network capacity and manage resource wastage</li>
                  </ul>  <br />
                  <li> <b>Network security</b> employs various techniques to ensure a network is secure. For example, it uses multiple tools such as firewalls, intrusion detection
                    or prevention systems, and anti-malware software to prevent or detect malicious activity in the network.</li>
                </ol>

                <div className={SWEmajorsStyles.Space100}></div>
                <div class="container">
                  <div class="row">

                    <div class="col">
                      <div>
                        <Image
                          src="/images/network-administrator.png"
                          width="600"
                          height="500"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <h4><b>Network administration key areas</b></h4>
                      <ul>
                        <h6>
                          <li><b>Fault management: </b> Monitors the network infrastructure to identify and address issues
                            potentially affecting the network. It uses standard protocols such as Simple Network
                            Management Protocol (SNMP) to monitor network infrastructure.</li> <br />
                          <li><b>Configuration management:</b> Tracks configuration and related changes of network
                            components, including switches, firewalls, hubs, and routers. As unplanned changes
                            can affect the network drastically and potentially cause downtime, it’s essential to
                            streamline, track, and manage configuration changes.</li> <br />
                          <li><b>Account management:</b> Tracks network utilization to bill and estimate the usage of
                            various departments of an organization. In smaller organizations, billing may be
                            irrelevant. However, monitoring utilization helps spot specific trends and inefficiencies.</li> <br />
                          <li><b>Performance management: </b> Focuses on maintaining service levels needed for efficient
                            operations. It collects various metrics and analytical data to continually assess network
                            performance, including response times, packet loss, and link utilization.</li> <br />
                          <li><b>Security management:</b> Aims to ensure only authorized activity and authenticated
                            devices and users can access the network. It employs several disciplines such as threat
                            management, intrusion detection, and firewall management. It also collects and analyzes
                            relevant network information to detect and block malicious or suspicious activity.</li> <br />
                        </h6>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={SWEmajorsStyles.Space100}></div>
                <h3><b>Network administration goals</b></h3>
                <p>Some tasks you might find in a network administrator’s job description include: </p>
                <ul>
                  <li>Install, configure, and maintain network hardware and software such as routers, firewalls, and switches</li>
                  <li>Protect networks from unauthorized users through physical and technical means</li>
                  <li>Set up and maintain virtual private networks (VPN)</li>
                  <li>Resolve network connectivity issues for other employees</li>
                  <li>Maintain and troubleshoot storage networks</li>
                </ul> <br />
                <p>Network administrators often have job descriptions that are similar to systems administrators. If you want to know how they can differ slightly.</p>
                <div className={SWEmajorsStyles.Space100}></div>

                <h3><b>System administration vs network administration</b></h3>
                <p>
                  System administration vs network administrationSome organizations might use system administrator and network administrator interchangeably, and there are many overlapping responsibilities.
                  But there’s technically a difference. System administration focuses on servers and computer systems, while network administrators work more
                  specifically with network-related tasks and equipment, like setting up routing, IP addresses, and maintaining Local Area Networks (LAN).
                  <br /> <br />
                  If you’re in a smaller organization, these responsibilities might be folded into one role, while larger organizations tend to differentiate them.
                  Since systems and networks are often intertwined, it’s not rare to see job descriptions that require knowledge of both.
                </p>
              </div>
            </div>
          </div>
          <div className={SWEmajorsStyles.Space200}></div>

          {/* stoping here */}

          <div class="container ">
            <div>
              <h4><b>Courses to start Data Analysts</b></h4>
              <div className={SWEmajorsStyles.Space200}></div>
              <div className='d-flex justify-content-around'>
                <div class="p-2">
                  <div className='Centerimg'>
                    <Image
                      src="/images/Udemy_logo.png"
                      width="200"
                      height="100"
                    />
                  </div>
                  <div className='contantWith'>
                    <p>Udemy website will help you to learn Data Analysts from beginning step by step.</p>
                    <h5>Website</h5>
                  </div>
                </div>
                <div class="p-2">
                  <div className='Centerimg' >
                    <Image
                      src="/images/Youtube_logo.png"
                      width="200"
                      height="100"
                    />
                  </div>

                  <div className='contantWith'>
                    <p>Here some YouTube channel will help to learn Data Analysts from the beginning step by step.</p>
                    <h5>Channel</h5>
                  </div>
                </div>

                <style jsx>{`
                          .Centerimg {
                            margin: 0 0 100px 100px;
                            
                          }
                          .contantWith{
                            width: 400px;
                          }
                          
                        `}</style>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default InformationSecurityAnalyst