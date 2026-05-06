import './AbilitiyCard.css';

export default function AbilityCard({iconUrl, title, description, ref}) {
  return (
    <div className='card' ref={ref}>
      <div
        className='icon'
        style={{
          WebkitMaskImage: `url(${iconUrl})`,
          maskImage: `url(${iconUrl})`,
          WebkitMaskSize: "contain",
          maskSize: "contain",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
