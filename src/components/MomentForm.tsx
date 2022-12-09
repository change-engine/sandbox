import { useState } from "react";
import { putMoment } from "../supabaseClient";

export const MomentForm = ({ id }: { id: string }) => {
  const [errorMessage, setErrorMessage] = useState<string>();
  const [disabled, setDisabled] = useState(false);
  return (
    <form
      action="#library"
      onSubmit={(e) => {
        setDisabled(true);
        void (async () => {
          const { error } = await putMoment(
            Object.fromEntries(
              new FormData(e.target as HTMLFormElement)
            ) as Parameters<typeof putMoment>[0]
          );
          if (error) setErrorMessage(error.message);
          else window.location.hash = "library";
          setDisabled(false);
        })();
        e.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <label htmlFor="destination">Destination:</label>{" "}
      <input type="email" id="destination" />
      <label htmlFor="subject">Subject:</label>{" "}
      <input id="subject" name="subject" required />
      <label htmlFor="body">Body:</label>{" "}
      <textarea id="body" name="body" required />
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        min={new Date().toISOString().slice(0, 10)}
        required
      />
      <button type="submit" disabled={disabled}>
        Save
      </button>
      <p className="error">{errorMessage}</p>
    </form>
  );
};
