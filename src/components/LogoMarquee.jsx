import React, { useState, useEffect } from "react";
import LogoLoop from "./custom/LogoLoop";
import {
  SiReact,
  SiGit,
  SiGithub,
  SiJavascript,
  SiBootstrap,
  SiPython,
  SiMysql,
  SiAndroidstudio,
  SiKotlin,
  SiVite,
  SiNpm,
  SiFigma,
  SiAdobe,
  SiCanva,
  SiJson,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiVite />, title: "Vite", href: "https://vitejs.dev" },
  {
    node: <SiBootstrap />,
    title: "Bootstrap",
    href: "https://getbootstrap.com",
  },
  {
    node: <SiNpm />,
    title: "NPM",
    href: "https://www.npmjs.com",
  },
  {
    node: <SiFigma />,
    title: "Figma",
    href: "https://www.figma.com",
  },
  {
    node: <SiAdobe />,
    title: "Adobe",
    href: "https://www.adobe.com",
  },
  {
    node: <SiCanva />,
    title: "Canva",
    href: "https://www.canva.com",
  },
  {
    node: <SiPython />,
    title: "Python",
    href: "https://www.python.org",
  },
  {
    node: <SiMysql />,
    title: "MySQL",
    href: "https://www.mysql.com",
  },
  {
    node: <SiAndroidstudio />,
    title: "Android Studio",
    href: "https://developer.android.com/studio",
  },
  {
    node: <SiKotlin />,
    title: "Kotlin",
    href: "https://kotlinlang.org/",
  },
  {
    node: <SiJson />,
    title: "JSON",
    href: "https://www.json.org",
  },
  {
    node: <SiGit />,
    title: "Git",
    href: "https://git-scm.com",
  },
  {
    node: <SiGithub />,
    title: "GitHub",
    href: "https://github.com",
  },
];

function LogoMarquee() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 968);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 968);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#000",
        padding: "3rem 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={isLargeScreen ? 80 : 50}
        gap={isLargeScreen ? 60 : 30}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="#000000"
        ariaLabel="Tech tools"
      />
    </div>
  );
}

export default LogoMarquee;
