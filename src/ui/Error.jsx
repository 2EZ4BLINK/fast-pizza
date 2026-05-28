import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const { data, message } = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{data || message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
};

export default Error;
