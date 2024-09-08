import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../stylesheets/StatsSection.css";

const StatsSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => {
      if (inView) {
        setStartCounting(true);
      }
    },
  });

  return (
    <section className="stats-section" ref={ref}>
      <div className="stat-boundary">
        <div className="stat stat-1">
          <h1 className="stat-number">
            {startCounting && <CountUp end={666} duration={2.5} />}
          </h1>
          <p className="stat-label">DELEGATES</p>
        </div>
        <div className="stat stat-2">
          <h1 className="stat-number">
            {startCounting && <CountUp end={172} duration={2.5} />}
          </h1>
          <p className="stat-label">TEAMS</p>
        </div>
        <div className="stat">
          <h1 className="stat-number">
            {startCounting && <CountUp end={20} duration={2.5} />}
          </h1>
          <p className="stat-label">UNIVERSITIES</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
