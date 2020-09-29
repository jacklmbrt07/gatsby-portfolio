import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GitHub, Twitter, Instagram, Linkedin } from "react-feather"
import {
  AboutSection,
  Avatar,
  Title,
  Text,
  SubTitle,
  SocialLink,
} from "./style"
import { SectionIntro, ContainerLayout, ResumeButton } from "../common"
import socialMedia from "../../data/socialMedia.json"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar
                fluid={data.profilePicture.childImageSharp.fluid}
                alt="user photo"
              />
              <SubTitle> Software Engineer</SubTitle>
              <div className="center">
                <div>
                  {socialMedia.map(({ id, name, url }) => (
                    <SocialLink
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`follow us on ${name}`}
                    >
                      {name === "github" ? <GitHub /> : ""}
                      {name === "linkedin" ? <Linkedin /> : ""}
                      {name === "twitter" ? <Twitter /> : ""}
                      {name === "instagram" ? <Instagram /> : ""}
                    </SocialLink>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Title> Hello, I’m Jack Lambert. </Title>
              <Text>
                {" "}
                I am a Full-Stack Web Developer/Engineer hailing from the{" "}
                <b className="text-primary lined-link">
                  {" "}
                  Bay Area, California.
                </b>
              </Text>
              <Text>
                {" "}
                In a previous life, which seemed like it was decades ago, I was
                working as a Construction Engineer making trips around San
                Francisco and Oakland, and ultimately ended up at the
                Oroville-Thermalito Dam complex a couple hundred miles up north.
                During that time, I picked up some of the hardest yet beneficial
                lessons in project management and leadership. Despite the
                success I experienced there (after countless failures), I became
                fascinated by computer programming, and after some careful
                thought, decided to switch careers.
              </Text>
              <Text>
                {" "}
                My favorite thing about programming is that there is a quite
                literally, an infinite supply of things to learn, and problems
                to solve. Web-development has allowed me to let my creative side
                flow freely, and use my focused attention to detail. Maybe I
                binged watched too much of HBO’s <em>Silicon Valley</em>, but I
                picture myself one day leading a team creating something that is
                both ethical and economic.
              </Text>
              <Text>
                {" "}
                Like every instagram user in this decade, I love to travel. I
                like to pretend I’m Anthony Bourdain, but in reality I’m taking
                selfies with a 12 foot long selfie stick in front of the Eiffel
                Tower, followed by an authenitc meal at the Golden Arches for
                lunch, just like every one else! I’m only joking, and I have
                indeed spent many months overseas in Australia, Southeast Asia,
                and other destinations (Australian is my second language). While
                abroad, I picked up photography as a hobby (and drastically
                reduced my selfie stick length). I treat my photographs, vinyl
                records, and books like my step-children. I enjoy all things
                involving art, history, food, and could spend hours in
                philosophical discussions.
              </Text>
              <Text>
                {" "}
                I graduated with a B.S. degree of Civil Engineering in 2017 from
                San Jose State University, and completed the Software
                Engineering Immersive Program from General Assembly in 2020.{" "}
              </Text>
              <ResumeButton href="resume.pdf" target="_blank">
                {" "}
                See Resume PDF{" "}
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
