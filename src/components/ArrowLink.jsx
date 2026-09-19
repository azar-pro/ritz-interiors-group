import { Link } from 'react-router-dom'
export default function ArrowLink({to, children}){
  return <Link className="arrow-link" to={to}>{children}<span aria-hidden>→</span></Link>
}
