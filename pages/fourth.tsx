import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";
import { useRouter } from "next/router";

import placeholder from "../assets/images/placeholder.jpg";

export default function Fourth() {
  const router = useRouter();
  const navigateAutumn = () => router.push("/fourth/autumn");
  const navigateWinter = () => router.push("/fourth/winter");
  const navigateSpring = () => router.push("/fourth/spring");

  return (
    <VerticalTimeline layout="2-columns" lineColor="black" className="mx-48">
      <VerticalTimelineElement
        contentStyle={{
          marginTop: "80px",
          marginBottom: "100px",
          cursor: "pointer",
        }}
        iconStyle={{
          background: "rgb(0, 0, 0)",
          color: "#fff",
          height: "50px",
          width: "50px",
        }}
        icon={<p className="text-center font-bold pt-3">AUT</p>}
        onTimelineElementClick={navigateAutumn}
      >
        <div className="relative mx-auto my-auto text-center m-auto">
          <Image
            width={1110}
            height={550}
            objectFit="cover"
            src={placeholder}
            alt="Autumn 24"
          />

          <div className="absolute text-white text-xl md:text-6xl font-bold top-38 right-0 left-0 drop-shadow-lg">
            AUTUMN 2024
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          marginBottom: "100px",
          cursor: "pointer",
        }}
        iconStyle={{
          background: "rgb(0, 0, 0)",
          color: "#fff",
          height: "50px",
          width: "50px",
        }}
        icon={<p className="text-center font-bold pt-3">WIN</p>}
        onTimelineElementClick={navigateWinter}
      >
        <div className="relative mx-auto my-auto text-center m-auto">
          <Image
            width={1110}
            height={550}
            objectFit="cover"
            src={placeholder}
            alt="Winter 25"
          />

          <div className="absolute text-white text-xl md:text-6xl font-bold top-38 right-0 left-0 drop-shadow-lg">
            WINTER 2025
          </div>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          marginTop: "100px",
          marginBottom: "100px",
          cursor: "pointer",
        }}
        iconStyle={{
          background: "rgb(0, 0, 0)",
          color: "#fff",
          height: "50px",
          width: "50px",
        }}
        icon={<p className="text-center font-bold pt-3">SPR</p>}
        onTimelineElementClick={navigateSpring}
      >
        <div className="relative mx-auto my-auto text-center m-auto">
          <Image
            width={1110}
            height={550}
            objectFit="cover"
            src={placeholder}
            alt="Spring 25"
          />

          <div className="absolute text-white text-xl md:text-6xl font-bold top-38 right-0 left-0 drop-shadow-lg">
            SPRING 2025
          </div>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
