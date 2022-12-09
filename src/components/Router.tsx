import { useEffect, useState } from "react";
import { Library } from "./Library";
import { MomentForm } from "./MomentForm";

const useHash = () => {
  const [hash, setHash] = useState(window.location.hash);
  const onHashChange = () => {
    setHash(window.location.hash);
  };
  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return hash.split("/");
};

export const Router = () => {
  const [page, ...props] = useHash();
  switch (page) {
    case "#create":
      return <MomentForm id={props[0]} />;
    case "#library":
      return <Library />;
    default:
      return <h1>Welcome to our Sandbox</h1>;
  }
};
