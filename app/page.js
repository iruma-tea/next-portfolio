import Link from "next/link";
import Image from "next/image";
import heroPic from "../public/images/index-hero.jpg";
import profilePic from "../public/images/profile.jpg";

const Index = () => {
  return (
    <>
      <div>
        <div>
          <Image src={heroPic} alt="hiro" />
          <h1>I'm Abe Hiroki!</h1>
          <h3>JavaScript Developer</h3>
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>JavaScript Nerd</h2>
            <p>
              orem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div>
              <Image src={profilePic} alt="hero" />
            </div>
          </div>
          <div>
            <h2>Skills</h2>
            <div>
              <div>
                <img src="/images/javascript.svg" alt="javascript" />
                <span>JavaScript / 10 years</span>
              </div>
              <div>
                <img src="/images/react.svg" alt="react" />
                <span>React / 5 years</span>
              </div>
              <div>
                <img src="/images/gatsby.svg" alt="gatsby" />
                <span>Gatsby / 3 years</span>
              </div>
              <div>
                <img src="/images/next.svg" alt="next" />
                <span>Next.js / 3 years</span>
              </div>
            </div>
          </div>
          <div>
            <Link href="/contact">Make It Happen!</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
