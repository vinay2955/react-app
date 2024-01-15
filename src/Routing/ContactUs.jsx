import { useNavigate } from "react-router-dom";

export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact us</h1>
      <button onClick={() => navigate("/")} value="backpage">
        backpage
      </button>
    </div>
  );
}
