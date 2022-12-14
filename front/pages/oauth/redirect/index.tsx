import { useRouter } from "next/router";
import { useEffect } from "react";

function Redirect() {
  const router = useRouter();

  useEffect(() => {
    if (router.query.accessToken) {
      window.localStorage.setItem(
        "AccessToken",
        router.query.accessToken as string
      );
      router.push("/home");
    } else {
      router.push("/");
    }
  });
  return <div />;
}

export default Redirect;
