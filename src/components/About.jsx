export default function About()
{
    return <>
        <section id="about">
            <div className="quote">
            <p>
            "When you've finished your own toilet in the morning, <br class="non-mobile-break" /> then it is time to attend to the toilet of your planet,
            just so, with the greatest care."  
            <br/>- The Little Prince by Antoine de Saint-Exupéry
            </p>
            </div>
            <div className="contact">
                <a href="https://github.com/kimmyhoang" target="_blank">
                    <img className="project-link" alt="Github Link" src="../images/github_icon.svg" width="17" height="17"/>
                </a>
                <a href="https://www.linkedin.com/in/kimmyhoang" target="_blank">
                    <img className="project-link" alt="Github Link" src="../images/linkedin.svg" width="17" height="17"/>
                </a>
                <a href="mailto:k32hoang@uwaterloo.ca" target="_blank">
                    <img className="project-link" alt="Github Link" src="../images/mail.png" width="17" height="17"/>
                </a>
            </div>
            
        </section>
        
    </>
}