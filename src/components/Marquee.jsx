const phrase = 'COMPUTER SCIENCE     SERVICENOW     SOFTWARE DEVELOPMENT     AI/ML     ENTERPRISE SYSTEMS';

export default function Marquee() {
  return (
    <div className="marquee" aria-label={phrase}>
      <div className="marquee-track" aria-hidden="true">
        <span className="marquee-copy">{phrase}</span>
        <span className="marquee-copy">{phrase}</span>
      </div>
    </div>
  );
}
