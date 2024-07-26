import { useRouteError } from "react-router";

const Error = () => {
  let err = useRouteError();
  console.log(err);
  return (
    <div>
      Error
      <h2>Oops!! Something went wrong</h2>
    </div>
  )
}

export default Error;