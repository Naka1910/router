import { Link } from "react-router-dom";

export default function Header() {

  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/Home'> Home</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/Contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

