import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import schedule from "../../assets/images/first/aut/schedule.png";
import { Stars } from "../../components/Stars";
import {
  Heading1,
  Heading2,
  Paragraph,
  Quote,
} from "../../components/Format/Markdown";

const Autumn: NextPage = () => {
  return (
    <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
      <div className="font-sans">
        <p className="text-base md:text-sm text-green-500 font-bold">
          <Link href="/first">
            <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
              {"<"} BACK TO FRESHMEN
            </a>
          </Link>
        </p>
        <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
          Autumn Quarter 2021
        </h1>
        <p className="text-sm md:text-base font-normal text-gray-600">
          September 2021 - December 2022
        </p>
      </div>

      <div className="py-2"></div>

      <Heading1>Schedule</Heading1>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/3">
          <Image src={schedule} alt="Schedule" />
        </div>
      </div>

      <Heading1>Classes</Heading1>

      <Heading2>CSE 143</Heading2>

      <Stars num={4} />

      <Heading2>MATH 126</Heading2>

      <Stars num={3} />

      <Heading2>LING 200</Heading2>

      <Stars num={3} />

      <Heading2>HONORS 100</Heading2>

      <Stars num={4} />

      <Heading2>CSE 390</Heading2>

      <Stars num={4} />

      <Heading1>Experiences</Heading1>

      <Heading1>Reflection</Heading1>
      <Paragraph>
        Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero
        lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper
        venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit
        amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque
        tortor semper posuere.
      </Paragraph>

      <Quote>
        Example of blockquote - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
        ligula.
      </Quote>
    </div>
  );
};

export default Autumn;
