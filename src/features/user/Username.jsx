import { useSelector } from "react-redux";
import { getName } from "./userSlice";

const Username = () => {
  const username = useSelector(getName);

  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
};

export default Username;
