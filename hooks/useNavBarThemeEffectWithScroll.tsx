import { useNavBarTheme } from "./useNavBarTheme";
import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { NavBarTheme } from "../types/common";
import { gsap } from "gsap";

export default function useNavBarThemeEffectWithScroll({
  id,
  trigger,
  start,
  end,
  onEnterColor,
  onLeaveBackColor,
}: {
  id: string;
  trigger: gsap.DOMTarget | undefined;
  start: string;
  end: string;
  onEnterColor: NavBarTheme;
  onLeaveBackColor: NavBarTheme;
}) {
  const [, setNavBarTheme] = useNavBarTheme();

  useEffect(() => {
    if (trigger) {
      gsap.registerPlugin(ScrollTrigger);

      ScrollTrigger.create({
        id,
        trigger,
        start,
        end,
        scrub: true,
        onEnter: () => setNavBarTheme(onEnterColor),
        onLeaveBack: () => setNavBarTheme(onLeaveBackColor),
      });
    }
    return () => {
      if (ScrollTrigger.getById(id)) {
        ScrollTrigger.getById(id)?.kill(true);
        setNavBarTheme("white");
      }
    };
  }, [setNavBarTheme, trigger]);
}
