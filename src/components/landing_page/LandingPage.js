import { useNavigate } from "react-router-dom";

import "./css/style.css";
import BGLogo from "../../assets/Saly-26.svg";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <main className="main--landing-page --horizontal-flex">
      <div className="text-container">
        <h1 className="heading">Your one step ahead todo app</h1>
        <p className="text-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          cupiditate mollitia corrupti labore asperiores deserunt provident
          dignissimos enim quam quas excepturi quod assumenda illum soluta
          aliquid eaque, facere quisquam! Ab.
        </p>
        <div className="btn-container --verticle-flex --has-gap">
          <button
            className="btn --primary-btn --has-hover-overlay"
            onClick={() => navigate("/add-todos")}
          >
            create a todo
          </button>
          <button className="btn --secondary-btn">Learn more</button>
        </div>
      </div>
      <div className="img-container">
        <img className="landing-page-img" src={BGLogo} alt="" />
      </div>
    </main>
  );
}
