import { useGetName } from "./userSlice";

const Username = () => {
  const username = useGetName();

  if (!username) return null;

  return <p className="hidden text-sm font-semibold md:block">{username}</p>;
};

export default Username;
