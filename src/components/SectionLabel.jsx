export default function SectionLabel({children, right}){
  return <div className="section-label">
    <span>{children}</span><i/>{right && <small>{right}</small>}
  </div>
}
