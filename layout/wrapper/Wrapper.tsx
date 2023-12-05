/* eslint-disable no-undef */
import React from "react";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { Backdrop, Box, CircularProgress } from "@mui/material";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";
import Seo from "@/components/Seo/Seo";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   if (document) {
  //     const hdrElm = document.querySelector<HTMLElement>(".main_head");
  //     const hdrHeight = hdrElm?.clientHeight;
  //     const paaddngELM = document.querySelector<HTMLElement>(".body_content");
  //     if (!!paaddngELM) {
  //       paaddngELM.style.paddingTop = hdrHeight + "px";
  //     }
  //   }
  // });
  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "Pinak";

  useOnlineStatus();

  // if ((loader) && checkWindow()) {
  //   return (
  //     <Backdrop
  //       sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
  //       open
  //     >
  //       <CircularProgress sx={{ color: "inherit" }} />
  //     </Backdrop>
  //   );
  // }

  // useOnlineStatus();

  // useEffect(() => {
  //   Router.events.on("routeChangeStart", () => setOpen(true));
  //   Router.events.on("routeChangeComplete", () => setOpen(false));
  //   Router.events.on("routeChangeError", () => setOpen(false));
  //   return () => {
  //     Router.events.off("routeChangeStart", () => setOpen(true));
  //     Router.events.off("routeChangeComplete", () => setOpen(false));
  //     Router.events.off("routeChangeError", () => setOpen(false));
  //   };
  // }, [Router.events]);
  return (
    <>
      {/* <NextProgress height={8} color="#266C87" /> */}
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical={""}
        description={""}
        url={""}
        image={""}
      />
      <Header />

      <Box className="body_content">{children}</Box>

      <Footer />

      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default Wrapper;
