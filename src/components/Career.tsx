import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Ikshan</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Worked on end-to-end ML pipelines, from data collection and
              preprocessing to model training and evaluation. Collaborated with
              cross-functional teams to integrate models into production systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Machine Learning Engineer</h4>
                <h5>Monocept (Max Life Insurance)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Led ML initiatives on large-scale insurance platforms, building
              predictive models for risk assessment, automation, and customer
              insights. Optimized model performance and collaborated closely with
              engineering teams to ensure reliable deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Machine Learning Engineer</h4>
                <h5>Logic Loop</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building intelligent systems using machine learning and deep
              learning, focusing on experimentation, model deployment, and
              continuous improvement of data products in production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
