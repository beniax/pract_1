import { useRouteError } from "react-router-dom";
const ErrorComp = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "20vh",
      }}
    >
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorComp;
