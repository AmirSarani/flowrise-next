import Hero from "./Hero";
import OurUsers from "./UI/OurUsers";
import { PicSec1 } from "./UI/PicSec1";
import { PicSec2 } from "./UI/PicSec2";
import { PicSec3 } from "./UI/PicSec3";
import { RobustFeatures } from "./UI/RobustFeatures";
import { Unleash } from "./UI/Unleash";

export default function Home() {
  return (
    <>
      <Hero />
      <OurUsers />
      <RobustFeatures />
      <PicSec1 />
      <PicSec2 />
      <PicSec3 />
      <Unleash />
    </>
  );
}
