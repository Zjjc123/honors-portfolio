import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Image from "next/image";
import { useRouter } from "next/router";

import placeholder from "../assets/images/placeholder.jpg";

export default function Thirds() {
  const router = useRouter();
  const navigateAutumn = () => router.push("/third/autumn");
  const navigateWinter = () => router.push("/third/winter");
  const navigateSpring = () => router.push("/third/spring");

  return (
    <VerticalTimeline layout="1-column" lineColor="black" className="mx-48">
      <VerticalTimelineElement
        contentStyle={{
          marginTop: "60px",
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
            height={400}
            objectFit="cover"
            src={placeholder}
            alt="Autumn 23"
          />

          <div className="absolute text-white text-xl md:text-3xl xl:text-6xl font-bold top-40 right-0 left-0 drop-shadow-lg border-y-4">
            AUTUMN 2023
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
        icon={<p className="text-center font-bold pt-3">WIN</p>}
        onTimelineElementClick={navigateWinter}
      >
        <div className="relative mx-auto my-auto text-center m-auto">
          <Image
            width={1110}
            height={400}
            objectFit="cover"
            src={placeholder}
            alt="Winter 24"
          />

          <div className="absolute text-white text-xl md:text-3xl xl:text-6xl font-bold top-40 right-0 left-0 drop-shadow-lg border-y-4">
            WINTER 2024
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
            height={400}
            objectFit="cover"
            src={placeholder}
            alt="Spring 24"
          />

          <div className="absolute text-white text-xl md:text-3xl xl:text-6xl font-bold top-40 right-0 left-0 drop-shadow-lg border-y-4">
            SPRING 2024
          </div>
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}
