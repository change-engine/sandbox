import { useEffect, useState } from "react";
import {
  getMomentsWithDestinations,
  MomentsWithDestinations,
} from "../supabaseClient";

export const Library = () => {
  const [moments, setMoments] = useState<MomentsWithDestinations>();
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    void (async () => {
      let { data, error } = await getMomentsWithDestinations();
      if (error) setErrorMessage(error.message);
      else if (!data) setErrorMessage("Not found");
      else setMoments(data);
    })();
  }, []);

  if (errorMessage) return <p className="error">{errorMessage}</p>;
  if (moments === undefined) return <progress value="0.6" />;
  return (
    <>
      {moments.map((moment) => (
        <p key={moment.id}>
          {new Date(moment.date).toLocaleDateString()} {moment.subject}:
          {Array.isArray(moment.destination) &&
            moment.destination.map((d) => d.address).join(", ")}
        </p>
      ))}
    </>
  );
};
