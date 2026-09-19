export default function InnerHero({eyebrow, title, text, image}){
  return <section className={`inner-hero ${image?'inner-hero--image':''}`}>
    {image && <><img className="inner-hero__image" src={image} alt="" aria-hidden/><div className="inner-hero__veil"/></>}
    <div className="shell inner-hero__content">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </div>
  </section>
}
