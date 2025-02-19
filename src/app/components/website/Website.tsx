"use client";
import React from "react";
import Image from "next/image";
import {
  Twitter,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  X,
  ArrowRight,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/app/lib/utils";
import { Toaster, toast } from "react-hot-toast";
import { ethereumProjects, starknetProjects, diamanteProjects, stellarProjects, baseProjects, seiProjects, } from "./Projects";
import { certifications } from "./Certifications";

import ProfileImage from "@/public/assets/images/profile.jpeg";
import DiamanteBg from "@/public/assets/tech-bg/diamante-bg.jpg";
import EthereumBg from "@/public/assets/tech-bg/ethereum-bg.jpg";
import StarknetBg from "@/public/assets/tech-bg/starknet-bg.jpg";
import StellarBg from "@/public/assets/tech-bg/stellar-bg.jpg";
import BaseBg from "@/public/assets/tech-bg/base-bg.png";
import SeiBg from "@/public/assets/tech-bg/sei-bg.png";

type CardVariant = "ethereum" | "starknet" | "diamante" | "stellar" | "base" | "sei" | "default";

export default function Website() {
  const [ethereumDialogOpen, setEthereumDialogOpen] = React.useState(false);
  const [starknetDialogOpen, setStarknetDialogOpen] = React.useState(false);
  const [diamanteDialogOpen, setDiamanteDialogOpen] = React.useState(false);
  const [stellarDialogOpen, setStellarDialogOpen] = React.useState(false);
  const [baseDialogOpen, setBaseDialogOpen] = React.useState(false);
  const [seiDialogOpen, setSeiDialogOpen] = React.useState(false);

  const [certificationsDialogOpen, setCertificationsDialogOpen] =
    React.useState(false);

  return (
    <div className="min-h-screen p-4 sm:p-6 bg-color1 text-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 p-4 bg-zinc-900">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-6">
              <SocialIcon
                href="https://x.com/Jitendr25070341"
                icon={<Twitter size={24} />}
                label="Twitter"
              />
              <SocialIcon
                href="https://github.com/jitendragangwar123"
                icon={<Github size={24} />}
                label="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/jitendra-gangwar-94353a152/"
                icon={<Linkedin size={24} />}
                label="LinkedIn"
              />
            </div>
            <CopyEmailButton email="gangwarjitendra2498@gmail.com" />
          </div>
        </Card>

        <Card className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900">
          <h1 className="text-3xl sm:text-3xl font-bold mb-2">
            Hi, I&apos;m Jitendra
          </h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Blockchain Developer with 2.6+ years of experience in leading and
            delivering high-impact projects in DeFi and infrastructure tooling
            with expertise in building secure smart contracts and scalable
            dApps.
          </p>
        </Card>

        <Card className="col-span-1 sm:col-span-2 lg:col-span-1 p-0 aspect-square bg-zinc-900">
          <Image
            src={ProfileImage}
            alt="Jitendra Profile"
            layout="responsive"
            width={400}
            height={400}
            style={{ objectFit: "cover" }}
            className="object-cover rounded-xl"
          />
        </Card>

        {/* Skills */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-2 py-2 px-4 bg-zinc-900">
          <h2 className="text-xl sm:text-2xl font-bold mt-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <SkillSet
              title="Frontend"
              skills={[
                "HTML",
                "CSS",
                "JavaScript",
                "Bootstrap",
                "React.js",
                "Next.js",
              ]}
            />
            <SkillSet
              title="Backend"
              skills={[
                "Rust",
                "TypeScript",
                "Node.js",
                "MongoDB",
                "MySQL",
                "AWS",
              ]}
            />
            <SkillSet
              title="Blockchain"
              skills={[
                "Solidity",
                "Cairo",
                "Web3.js",
                "Ethers.js",
                "Starknet.js",
                "OpenZeppelin",
              ]}
            />
            <SkillSet
              title="Tools"
              skills={[
                "Git/Github",
                "Docker",
                "Remix",
                "Foundry",
                "Hardhat",
                "Ganache",
              ]}
            />
          </div>
        </Card>

        {/* Ethereum Blockchain Experience  */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setEthereumDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setEthereumDialogOpen(true)} />
          }
          variant="ethereum"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Ethereum</h2>
          <p className="mb-4 text-sm sm:text-base">
            I&apos;ve been involved with blockchain companies for over 2.6 years
            as an Ethereum Blockchain Developer.
          </p>
        </Card>
        {/* Starknet Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setStarknetDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setStarknetDialogOpen(true)} />
          }
          variant="starknet"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Starknet</h2>
          <p className="mb-4 text-sm sm:text-base">
            I&apos;ve spent the past 1+ years working with blockchain companies
            as a Starknet Blockchain Developer.
          </p>
        </Card>
        {/* Diamante Net Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setDiamanteDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setDiamanteDialogOpen(true)} />
          }
          variant="diamante"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Diamante Net</h2>
          <p className="mb-4 text-sm sm:text-base">
            For the past 6 months, I&apos;ve been exploring Diamante Net
            Blockchain, delving into its unique features and capabilities.
          </p>
        </Card>
        {/* Stellar Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setStellarDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setStellarDialogOpen(true)} />
          }
          variant="stellar"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Stellar</h2>
          <p className="mb-4 text-sm sm:text-base">
            For the past 4 months, I&apos;ve been exploring Stellar Blockchain,
            gaining hands-on experience with its decentralized payment system.
          </p>
        </Card>
        {/* Base Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setBaseDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setBaseDialogOpen(true)} />
          }
          variant="base"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Base</h2>
          <p className="mb-4 text-sm sm:text-base">
            For the past 8 months, I&apos;ve been exploring the Base Blockchain,
            gaining practical experience with its blockchain infrastructure.
          </p>
        </Card>
        {/* Sei Blockchain Experience */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-1 bg-zinc-900"
          onClick={() => setSeiDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setSeiDialogOpen(true)} />
          }
          variant="sei"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Sei</h2>
          <p className="mb-4 text-sm sm:text-base">
            In the past month, I&apos;ve been immersing myself in the Sei Blockchain,
            exploring its innovative financial ecosystem firsthand.
          </p>
        </Card>

        {/* Work Experience */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <WorkExperience
              title="Blockchain Developer (R&D)"
              company="Sustainability Economics, Bangalore, India"
              period="August 2023 - Present"
              description="Developing cutting-edge blockchain solutions to drive the Net-Zero Transition. Empowering industries with sustainable and scalable decentralized technologies."
            />
            <WorkExperience
              title="Blockchain Developer"
              company="GuardianLink, Chennai, India"
              period="July 2022 - July 2023"
              description="
Developed scalable blockchain solutions for NFT platforms and DeFi applications. Pioneered innovative smart contract designs to enhance security and efficiency."
            />
            <WorkExperience
              title="Research Scholar"
              company="IDRBT, Hyderabad"
              period="August 2021 - June 2022"
              description="Contributed to developing blockchain-based solutions for the financial sector at IDRBT, Hyderabad, enhancing security and efficiency in banking systems."
            />
          </div>
        </Card>

        {/* Certifications */}
        <Card
          className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900"
          onClick={() => setCertificationsDialogOpen(true)}
          viewAllButton={
            <ViewAllButton onClick={() => setCertificationsDialogOpen(true)} />
          }
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
            <div className="flex gap-2">
              <li>Ethereum Blockchain Developer Bootcamp With Solidity</li>
              <a
                href="https://www.udemy.com/certificate/UC-81d5a4ef-9ada-4768-8bdc-a932e0445e56/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
              </a>
            </div>

            <div className="flex gap-2">
              <li>The Complete NFT Web Development Course-Zero To Expert</li>
              <a
                href="https://www.udemy.com/certificate/UC-f7a39e5c-1d85-4113-bd58-cc4801d3b5a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="flex gap-2">
              <li>Solidity Bootcamp</li>
              <a
                href="https://www.risein.com/certificates/8e121416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="flex gap-2">
              <li>Solidity 30 day challenge</li>
              <a
                href="https://codedamn.com/certificate/verify/90f98a85524ecccbc0b4a22aed0e86fe6dfbf20e"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
              </a>
            </div>
            <div className="flex gap-2">
              <li>C++ STL</li>
              <a
                href="https://media.geeksforgeeks.org/courses/certificates/49765d6b13b1c8e1edffe4fe6a1fff84.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline flex items-center gap-1"
              >
                <ExternalLink size={16} />
              </a>
            </div>
          </ul>
        </Card>

        {/* Achievements */}
        <Card className="col-span-1 sm:col-span-2 lg:col-span-4 bg-zinc-900 p-2">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 px-4 py-2">
            Achievements
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-red-400">
                StarkHack Hackathon Winner 🏅
              </h3>
              <p className="text-gray-400 mb-3">
                Won $8,500 for developing Attest Me, an innovative
                blockchain-based Attestation Service on Starknet Ecosystem.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ethglobal.com/showcase/attest-me-smj4z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETHGlobal</span>
                </a>
                <a
                  href="https://github.com/rajeebkm/attest-me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://attest-me-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-purple-400">
                Diamante Net Hackathon Winner 🚀
              </h3>
              <p className="text-gray-400 mb-3">
                Secured a $17,000 prize for FractalShares, a simplified solution
                for the tokenization of real-world assets, which enables
                fractional ownership.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://devfolio.co/projects/fractal-shares-0caa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Devfolio</span>
                </a>
                <a
                  href="https://github.com/jitendragangwar123/FractalShares"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://fractal-shares-front-end.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-yellow-400">
                ETHOnline Hackathon Winner 🌟
              </h3>
              <p className="text-gray-400 mb-3">
                Developed AuraAsset, empowering investments through the
                tokenization of RWA, and won the Pool Prize from Sign Protocol.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ethglobal.com/showcase/aura-asset-zg3r0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETHGlobal</span>
                </a>
                <a
                  href="https://github.com/jitendragangwar123/AuraAsset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://aura-asset-front-end.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-blue-400">
                ETHIndia Hackathon Winner 🏆
              </h3>
              <p className="text-gray-400 mb-3">
                Building LuckyLotto, a seamless blockchain-powered lottery platform revolutionizing the gaming experience,
                and Won the Pool Prize from Coinbase.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://devfolio.co/projects/luckylotto-4e8a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Devfolio</span>
                </a>
                <a
                  href="https://github.com/rajeebkm/luckylotto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://luckylotto.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl hover:bg-zinc-800/80 transition-all">
              <h3 className="font-bold text-lg mb-2 text-teal-400">
                Agentic Ethereum Hackathon Winner 🔥
              </h3>
              <p className="text-gray-400 mb-3">
                Developed BaseAgentX, a next-gen autonomous AI agent harnessing Coinbase Agent Kit, OnchainKit, and EigenLayer AVS to revolutionize real-world asset investment.Proud winner of the AgentKit Pool Prize.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://ethglobal.com/showcase/baseagentx-tsn9r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>ETHGlobal</span>
                </a>
                <a
                  href="https://github.com/jitendragangwar123/BaseAgentX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://base-agent-x.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline flex items-center gap-1"
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Render ViewAllDialog components */}
      <ViewAllDialog
        title="Ethereum Projects"
        items={ethereumProjects}
        open={ethereumDialogOpen}
        onOpenChange={setEthereumDialogOpen}
      />
      <ViewAllDialog
        title="Starknet Projects"
        items={starknetProjects}
        open={starknetDialogOpen}
        onOpenChange={setStarknetDialogOpen}
      />
      <ViewAllDialog
        title="Diamante Projects"
        items={diamanteProjects}
        open={diamanteDialogOpen}
        onOpenChange={setDiamanteDialogOpen}
      />

      <ViewAllDialog
        title="Stellar Projects"
        items={stellarProjects}
        open={stellarDialogOpen}
        onOpenChange={setStellarDialogOpen}
      />

      <ViewAllDialog
        title="Base Projects"
        items={baseProjects}
        open={baseDialogOpen}
        onOpenChange={setBaseDialogOpen}
      />

      <ViewAllDialog
        title="Sei Projects"
        items={seiProjects}
        open={seiDialogOpen}
        onOpenChange={setSeiDialogOpen}
      />

      <ViewAllDialog
        title="All Certifications"
        items={certifications}
        open={certificationsDialogOpen}
        onOpenChange={setCertificationsDialogOpen}
      />
    </div>
  );
}

function Card({
  children,
  className,
  viewAllButton,
  onClick,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  viewAllButton?: React.ReactNode;
  onClick?: () => void;
  variant?: CardVariant;
}) {
  const bgImage = {
    ethereum: EthereumBg,
    starknet: StarknetBg,
    diamante: DiamanteBg,
    stellar: StellarBg,
    base: BaseBg,
    sei: SeiBg,
    default: null,
  }[variant];

  return (
    <div
      className={cn(
        "bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-zinc-950 relative overflow-hidden rounded-3xl border border-slate-900 bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl transition-all duration-300 cursor-pointer group ",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {bgImage && (
        <div className="absolute inset-0 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <Image
            src={bgImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50 z-10" />
        </div>
      )}
      <div className="relative z-20 h-full flex flex-col">
        <div className="flex-1">{children}</div>
        {viewAllButton}
      </div>
    </div>
  );
}

interface SkillSetProps {
  title: string;
  skills: string[];
}

function SkillSet({ title, skills }: SkillSetProps) {
  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="flex flex-col space-y-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-zinc-900 text-white w-full"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

function WorkExperience({
  title,
  company,
  period,
  description,
}: WorkExperienceProps) {
  return (
    <div className="bg-zinc-800 p-6 rounded-xl">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-400 mb-1">{company}</p>
      <p className="text-gray-500 text-sm mb-2">{period}</p>
      <p className="text-sm">{description}</p>
    </div>
  );
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

interface CopyEmailButtonProps {
  email: string;
}

function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      style: {
        background: "rgb(20, 20, 20)",
        color: "#fff",
        border: "1px solid rgb(30, 30, 30)",
      },
      icon: "📧",
      duration: 2000,
    });
  };

  return (
    <button
      onClick={copyEmail}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 transition-colors text-sm"
    >
      <Mail size={16} />
      <span>Copy Email</span>
    </button>
  );
}

interface ViewAllDialogProps {
  title: string;
  items: Array<{
    name: string;
    description: string;
    github?: string;
    live?: string;
    certificate?: string;
  }>;
}

function ViewAllDialog({
  title,
  items,
  open,
  onOpenChange,
}: ViewAllDialogProps & {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-x-0 bottom-0 h-[95vh] !max-w-full !rounded-t-2xl !rounded-b-none sm:!rounded-t-2xl animate-in data-[state=open]:slide-in-from-bottom-full data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom">
        <div className="absolute left-1/2 top-2 -translate-x-1/2 flex flex-col items-center gap-4">
          <div className="h-1.5 w-12 rounded-full bg-gray-300" />
          <button
            onClick={() => onOpenChange(false)}
            className="rounded-full p-2 bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
        </div>
        <DialogHeader className="mt-16">
          <DialogTitle className="text-center text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 overflow-y-auto max-h-[calc(95vh-8rem)] pr-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-6 p-4 bg-[rgb(20,20,20)] rounded-xl hover:bg-[rgb(30,30,30)] transition-colors"
            >
              <h3 className="font-semibold text-white text-lg mb-2">{item.name}</h3>
              <p className="text-gray-400 mb-3">{item.description}</p>
              <div className="flex gap-4">
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline flex items-center gap-1"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                )}
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>Live App</span>
                  </a>
                )}
                {item.certificate && (
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
}

function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300",
        "hover:border-blue-500 hover:bg-blue-500/10 hover:text-blue-400",
        "hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:scale-105",
        "cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const Dialog = DialogPrimitive.Root;

const DialogPortal = ({
  children,
  ...props
}: DialogPrimitive.DialogPortalProps) => (
  <DialogPrimitive.Portal {...props}>
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
      {children}
    </div>
  </DialogPrimitive.Portal>
);
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 grid w-full gap-4 rounded-b-lg border bg-background p-6 shadow-lg animate-in data-[state=open]:fade-in-90 data-[state=open]:slide-in-from-bottom-10 sm:max-w-lg sm:rounded-lg sm:zoom-in-90 data-[state=open]:sm:slide-in-from-bottom-0",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

function ViewAllButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 group z-30 self-end"
    >
      <span className="text-sm font-medium underline underline-offset-4">
        View All
      </span>
      <ArrowRight
        size={16}
        className="transform transition-transform group-hover:translate-x-1"
      />
    </button>
  );
}
