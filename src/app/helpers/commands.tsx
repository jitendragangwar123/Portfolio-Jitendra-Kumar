import CommandData from "../data/commands.json";
import Projects from "../data/projects";
import CommandDetails from "../data/commands.json";
import Certificates from "../data/certificates";
import Achievements from "../data/achievements";

const arrow = ">";

const CheckCommand = (command: string) => {
  const commands = Object.keys(CommandData);

  if (commands.includes(command.trim().toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

const CheckCommandAndExecute = (command: string) => {
  command = command.trim().toLowerCase();
  if (command === "help" || command === "ls") {
    return HelpCommand();
  } else if (command === "about") {
    return AboutCommand();
  } else if (command === "contact") {
    return ContactCommand();
  } else if (command === "projects") {
    return ProjectsCommand();
  } else if (command === "skills") {
    return SkillsCommand();
  } else if (command === "education") {
    return EducationCommand();
  } else if (command === "experience") {
    return ExperienceCommand();
  } else if (command === "certifications") {
    return CertificationsCommand();
  } else if (command === "achievements") {
    return AchievementsCommand();
  } else {
    return (
      <li className="flex flex-col gap-2 my-2">
        <p className="text-error">
          The term '{command}' is not recognized as the name of a cmdlet,
          function, script file, or operable program.{" "}
        </p>
        <p className="text-white">Type "help" or "cls" for assistance.</p>
      </li>
    );
  }
};

const HelpCommand = () => {
  return (
    <div className="flex gap-2 flex-col ">
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">help - </p>
        <p>{CommandDetails["help"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">about - </p>
        <p>{CommandDetails["about"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">contact - </p>
        <p>{CommandDetails["contact"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">projects - </p>
        <p>{CommandDetails["projects"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">skills - </p>
        <p>{CommandDetails["skills"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">certifications - </p>
        <p>{CommandDetails["certifications"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">education - </p>
        <p>{CommandDetails["education"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">achievements - </p>
        <p>{CommandDetails["achievements"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">experience - </p>
        <p>{CommandDetails["experience"]}</p>
      </span>
      <span className="text-white flex gap-2">
        <p>-{arrow}</p>
        <p className="text-commandResult">clear - </p>
        <p>{CommandDetails["clear"]}</p>
      </span>
    </div>
  );
};

const AboutCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">About Me:</h2>

      <span>
        <p>
          👋 Hello! I'm Jitendra Kumar, a passionate Full Stack Blockchain Developer.
        </p>
      </span>
      <span className="mt-3">
        <p>
          I started my coding journey with a curiosity for technology, which led me to explore Web3 and AI-driven innovations. Since then, I've:
        </p>
      </span>
      <ul className="list-disc list-outside pl-4">
        <li>
          <p>🚀 Built cutting-edge DeFi solutions, optimizing yield strategies and risk management.</p>
        </li>
        <li>
          <p>📱 Developed AI-powered crypto payment systems, bridging Web3 with real-world transactions.</p>
        </li>
        <li>
          <p>🕹️ Engineered blockchain-based sustainability solutions, focusing on carbon credits and Net-Zero transitions.</p>
        </li>
        <li>
          <p>
            🔗 Integrated AI agents with EigenLayer AVS, automating DeFi and on-chain verification.
          </p>
        </li>
        <li>
          <p>🌍 Led multiple hackathon-winning projects, pushing the boundaries of decentralized technology.</p>
        </li>
        <li>
          <p>🚀 Recently explored next-gen AI agents for blockchain automation and financial intelligence.</p>
        </li>
      </ul>
      <span className="mt-3 mb-1">
        <p>
          I'm always eager to innovate and push Web3 forward. Let's build the future of decentralized technology together! 💻✨
        </p>
      </span>
    </div>
  );
};

const ContactCommand = () => {
  return (
    <ul className="flex flex-col gap-2 list-disc list-outside pl-4 text-commandResult font-bold">
      <h2 className="text-2xl font-bold mb-4">Contact Me:</h2>

      <li className="mt-1">
        <p>
          Email:{" "}
          <a
            href="mailto:harshkeshri1234567@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            gangwarjitendra2498@gmailcom
          </a>
        </p>
      </li>
      <li>
        <p>
          Github:{" "}
          <a
            href="https://github.com/jitendragangwar123"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
           @jitendragangwar123
          </a>
        </p>
      </li>
      <li>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/jitendra-gangwar-94353a152/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
            @gangwarjitendra
          </a>
        </p>
      </li>
      <li>
        <p>
          X:{" "}
          <a
            href="https://x.com/Jitendr25070341"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight"
          >
           @gangwarjitendra
          </a>
        </p>
      </li>
      <li className="list-none mt-1 font-normal">
        👆 Click on any to contact me!{" "}
      </li>
    </ul>
  );
};

const ProjectsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      <h2 className="text-2xl font-bold mb-2">Projects:</h2>

      {Projects.reverse().map((project, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-4"
          key={"project" + index + project.name}
        >
          <h3 className="text-xl font-bold mb-2">{project.name}</h3>
          <p className="mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map(
              (tech: { name: string }, index: number) => (
                <span
                  key={"techName" + index.toString() + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-8">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 block"
              >
                View on GitHub
              </a>
            )}
            {project.webLink && (
              <a
                href={project.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline mt-2 block"
              >
                View Demo
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

const AchievementsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      <h2 className="text-2xl font-bold mb-2">Achievements:</h2>

      {Achievements.reverse().map((achievement, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-4"
          key={"achievement" + index + achievement.name}
        >
          <h3 className="text-xl font-bold mb-2">{achievement.name}</h3>
          <p className="mb-4">{achievement.description}</p>
          <div className="flex flex-wrap gap-2">
            {achievement.technologies.map(
              (tech: { name: string }, index: number) => (
                <span
                  key={"techName" + index.toString() + tech.name}
                  className="px-2 py-1 rounded text-commandResult"
                >
                  {tech.name}
                </span>
              )
            )}
          </div>
          <div className="flex flex-wrap gap-8">
            {achievement.githubLink && (
              <a
                href={achievement.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 block"
              >
                View on GitHub
              </a>
            )}
            {achievement.projectLink && (
              <a
                href={achievement.projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline mt-2 block"
              >
                View on Portal
              </a>
            )}
            {achievement.webLink && (
              <a
                href={achievement.webLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline mt-2 block"
              >
                View Demo
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

};

const CertificationsCommand = () => {
  return (
    <ul className="flex flex-col gap-2 mt-6">
      <h2 className="text-2xl font-bold mb-2">Certifications:</h2>

      {Certificates.map((certificate, index: number) => (
        <li
          className="p-6 rounded-lg shadow-md mb-4"
          key={"certificate" + index + certificate.name}
        >
          <h3 className="text-xl font-bold mb-2">{certificate.name}</h3>
          <p className="px-2 py-1 rounded text-commandResult">{certificate.issuedBy}</p>

          {certificate.link && (
            <a
              href={certificate.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 block"
            >
              View Certificate
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const SkillsCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult ">
      <h2 className="text-2xl font-bold mb-4">Skills:</h2>

      <div className="flex flex-wrap gap-10">
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Languages:</h2>
          <ul className="list-disc pl-4">
            <li>Solidity</li>
            <li>Cairo</li>
            <li>Rust</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>GoLang</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Frontend:</h2>
          <ul className="list-disc pl-4">
            <li>HTML</li>
            <li>Tailwind CSS</li>
            <li>React</li>
            <li>Next.js</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Backend:</h2>
          <ul className="list-disc pl-4">
            <li>Node.js</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>AWS</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Blockchains:</h2>
          <ul className="list-disc pl-4">
            <li>Ethereum</li>
            <li>Starknet</li>
            <li>Diamanate Net</li>
            <li>Stellar</li>
            <li>Web3.js</li>
            <li>Ethers.js</li>
            <li>Starknet.js</li>
            <li>OpenZeppelin</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Tools:</h2>
          <ul className="list-disc pl-4">
            <li>Git/Github</li>
            <li>Docker</li>
            <li>Remix</li>
            <li>Foundry</li>
            <li>Hardhat</li>
            <li>Ganache</li>
            <li>Slither</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

type EducationCardProps = {
  institution: string;
  degree: string;
  location: string;
  grade: string;
  year: string;
};

const EducationCard = ({
  institution,
  degree,
  location,
  grade,
  year,
}: EducationCardProps) => {
  return (
    <div className="p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-xl font-bold mb-2">{degree}</h3>
      <p className="mb-2">
        {institution}, {location}
      </p>
      <p className="mb-2">Grade: {grade}</p>
      <p>Year: {year}</p>
    </div>
  );
};

const EducationCommand = () => {
  return (
    <div className="flex flex-col gap-2 text-commandResult mt-6">
      <h2 className="text-2xl font-bold mb-4">Education:</h2>

      <EducationCard
        degree="BTech (CSE)"
        institution="IERT, Prayagraj"
        location="(U.P.)"
        grade="7.49 CGPA"
        year="2016-20"
      />

      <EducationCard
        degree="M.Tech (IT)"
        institution="IDRBT, Hyderabad"
        location="(Telangana)"
        grade="8.93 CGPA"
        year="2020-22"
      />
    </div>
  );
};

const ExperienceCommand = () => {
  return (
    <div className="container mx-auto p-8 text-commandResult">
      <h2 className="text-2xl font-bold mb-4">Work Experience:</h2>

     
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">
        Sustainability Economics
        </h3>
        <p className="mb-2">Blockchain Developer (R&D)</p>
        <p className="mb-2">
        Developing cutting-edge blockchain solutions to drive the Net-Zero Transition. Empowering industries with sustainable and scalable decentralized technologies.
        </p>
        <p className="text-gray-400">From: August 2023 - Present</p>
      </div>

     
      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">GuardianLink</h3>
        <p className="mb-2">Full Stack Blockchain Developer</p>
        <p className="mb-2">
        Developed scalable blockchain solutions for NFT platforms and DeFi applications. Pioneered innovative smart contract designs to enhance security and efficiency.
        </p>
        <p className="text-gray-400">From: July 2022 - July 2023</p>
      </div>

      <div className="p-6 rounded-lg shadow-md mb-8">
        <h3 className="text-xl font-bold mb-2">IDRBT</h3>
        <p className="mb-2">Research Scholar</p>
        <p className="mb-2">
        Contributed to developing blockchain-based solutions for the financial sector at IDRBT, Hyderabad, enhancing security and efficiency in banking systems.
        </p>
        <p className="text-gray-400">From: August 2021 - June 2022</p>
      </div>
    </div>
  );
};

export { CheckCommand, CheckCommandAndExecute };
