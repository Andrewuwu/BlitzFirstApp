import { Link, Routes } from "blitz"

export const Navbar = () => {
  return (
    <div>
      <ul className="nav_ul">
        <li className="nav_li">
          <Link href={Routes.Home()}>
            <a className="nav_a">QuestionForum</a>
          </Link>
        </li>
        <li className="nav_li">
          <Link href={Routes.Home()}>
            <a className="nav_a">Home</a>
          </Link>
        </li>
        <li className="nav_li">
          <Link href={Routes.QuestionsPage()}>
            <a className="nav_a">Questions</a>
          </Link>
        </li>
      </ul>
      <style>{`.nav_ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
        }

        .nav_li {
        float: left;
        }

        .nav_a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        }

        li a:hover {
        background-color: #111;
        }`}</style>
    </div>
  )
}
