import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { Stars } from "../../components/Stars";
import {
  Heading1,
  Heading2,
  Heading4,
  Paragraph,
  Quote,
} from "../../components/Format/Markdown";

import schedule from "../../assets/images/first/aut/schedule.png";
import cse143 from "../../assets/images/first/aut/cse143.jpg";
import cse390 from "../../assets/images/first/aut/cse390.jpg";

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

      <Stars num={3} />
      <Heading4 className="font-semibold">Instructor: Hunter Schafer</Heading4>

      <div className="flex flex-wrap justify-center">
        <div className="w-1/2">
          <Image src={cse143} alt="CSE 143" />
        </div>
      </div>

      <Paragraph>
        Introductory CS classes are often scrutinized. When it comes to computer
        science, the intro courses makes a big difference as to whether students
        will continue to pursue computer science in the future. Accessibility of
        the course strongly impacts the success of students.
      </Paragraph>

      <Paragraph>
        As I had previous experiences coming in, the difficulty of the course
        felt about right. But that just feels wrong. Although I have no idea
        what CSE 142 is like, I can't stop but to imagine the jump between the
        courses (even from AP CS A). Students who do not understand the
        fundamental reasoning of why they are doing things, inevitably cannot
        remain on pace. Those that benefits the most from the course will soon
        resort to methods of completing assignments that do not require
        thinking, public GitHub repository or copying from friends. But that is
        totally missing the point.
      </Paragraph>

      <Paragraph>
        Completing the project has little values when compared to truly
        understand the ideas behind them, something that even people who had
        previous experiences struggled with. I can't fully blame these short
        10-week courses for not covering things that will make it more
        interesting but I can't stop to think there are better ways to teach
        computer science not by teaching computer science, but allowing students
        to explore, and to find joy in cs themselves.
      </Paragraph>

      <Paragraph>
        Challenge comes when the course needs to appeal to students of all skill
        levels. Dumbing down the courses bores highly achieving students while
        increasing difficulties leaves people that needs the course most behind.
        But in general, I felt that the course did not prepare students enough
        to complete major projects without more assistance than just lectures
        and sections.
      </Paragraph>

      <Paragraph>
        But most likely, I just think I'm better at CS than I actually am, like
        every other computer science majors.
      </Paragraph>

      <Heading2>MATH 126</Heading2>

      <Stars num={3} />
      <div className="flex flex-wrap justify-center">
        <div className="w-1/4">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/8/87/Hyperbolic_Paraboloid_Quadric.png"
            }
            alt="CSE 143"
            height={300}
            width={300}
          />
        </div>
      </div>

      <Heading4 className="font-semibold">Instructor: Zhixu Su</Heading4>

      <Paragraph>
        It's difficult to say much about that{" "}
        <q>third-and-final-course-in-the-basic-calculus-series</q> that everyone
        seems to takes. The course went as smoothly and normally as I expected,
        so much so that I have already begun to forget what happened.
      </Paragraph>

      <Paragraph>
        Conceptually, the class is quite interesting. But like most math
        classes, that <q>coolness</q> is often reduced down to just WebAssign
        guesses.
      </Paragraph>

      <Paragraph>
        But I can't quite complain. The grading was fair, the homework was
        manageable, and the exam was never too out of the ordinary.
      </Paragraph>
      <Heading2>LING 200</Heading2>

      <Stars num={3} />

      <div className="flex flex-wrap justify-center">
        <div className="w-1/4">
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cardinal_vowel_tongue_position-front.svg/1024px-Cardinal_vowel_tongue_position-front.svg.png"
            }
            alt="LING 200"
            height={300}
            width={300}
          />
        </div>
      </div>

      <Heading2>HONORS 100</Heading2>

      <Stars num={4} />

      <Heading2>CSE 390</Heading2>

      <Stars num={4} />

      <div className="flex flex-wrap justify-center">
        <div className="w-1/3">
          <Image src={cse390} alt="CSE 390" />
        </div>
      </div>

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
