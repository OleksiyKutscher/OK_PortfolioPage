import { createContext } from 'react';
import gsap from "gsap";

export const MasterTimelineContext = createContext(gsap.timeline({}));
