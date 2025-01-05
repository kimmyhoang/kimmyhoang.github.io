export default function Portfolio()
{
    return <>
    <section id="portfolio">
        <h1>Portfolio</h1>
        <blockquote>| Hey Ferb, I know what we're gonna do today.</blockquote>
        <div className="project">
            <h3>Waterloo Rocketry - Controlled Canards</h3>
            <a href="https://github.com/waterloo-rocketry/cansw_processor_canards" target="_blank">
                <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
            </a>
        </div>
        <p>
            Helping code the real time operating system to control canards that reduce rocket roll rate with FreeRTOS in C. 
        </p>
        <p>
            Learning about active control systems with cool people at <a href="https://www.waterloorocketry.com/">Waterloo Rocketry</a>.
        </p>
        <div className="project">
            <h3>NavBot - Mobile Robot Simulation</h3>
            <a href="https://github.com/kimmyhoang/navbot" target="_blank">
                <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
            </a>
        </div>
        <p>
            Using ROS and Gazebo to simulate a mobile robot that uses lidar and camera sensors.
        </p>
        <img className="project-img" alt="Lidar and Camera Sensors" src="../images/navbot.png" width="100%"/>
        <div className="project">
            <h3>Waterlook - Automated Irrigation Systems</h3>
            <a href="https://github.com/kimmyhoang/waterlook" target="_blank">
                <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
            </a>
        </div>
        <p>
            Built and fine tuned models for crop watering times based on environmental conditions for water conservation.
        </p>
        <p>
           Guided by data scientists and ML engineers at RBC Borealis as a part of their <a href="https://www.linkedin.com/posts/rbc-borealis_machinelearning-ml-studentopportunities-activity-7274790161383600128-SVHu/">Let's SOLVE It</a> program.
        </p>
        <div className="project">
            <h3>Falla-SEE - Facial Expression Detection</h3>
            <a href="https://github.com/kimmyhoang/fallasee" target="_blank">
                <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
            </a>
        </div>
        <p>
            Collected and labelled image data to then leverage Pytorch and YOLOv5 models for facial expression detection.
        </p>
        <div className="project">
            <h3>Mental Note - Image Sentiment Journal</h3>
            <a href="https://github.com/kimmyhoang/MentalNote" target="_blank">
                <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
            </a>
        </div>
        <p>
            A sentiment journal that used sentiment analysis and neural style transfer to create images based on 
            emotions detected in journal entries. Won the University of Toronto's Hack the MIST hackathon.
        </p>
    </section>
        
    </>
}