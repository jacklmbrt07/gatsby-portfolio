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
import resume from "../../../static/Jack_Lambert_Resume.pdf"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      profilePicture: file(relativePath: { eq: "profile-picture_R1.jpg" }) {
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
              <SubTitle>Software Engineer</SubTitle>
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
                      {name === "instagram" ? <Instagram /> : ""}
                      {name === "twitter" ? <Twitter /> : ""}
                    </SocialLink>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Title> Hello, I’m Jack Lambert. </Title>
              <Text>
                {" "}
                I am a Full-Stack Web Developer/Engineer hailing from{" "}
                <b className="text-primary lined-link">
                  {" "}
                  San Francisco, California.
                </b>
              </Text>
              <Text>
                {" "}
                In a previous life, I was working as a Civil Engineer making
                frequent trips around northern California. Despite the success I
                experienced there (after countless failures), I became
                fascinated by computer programming, and after some careful
                thought, decided to switch careers... <i>in 2020.</i>
              </Text>
              <Text>
                {" "}
                My favorite thing about programming is that there is, quite
                literally, an infinite supply of things to learn, and problems
                to solve. Maybe I binged watched too much of HBO’s{" "}
                <em>Silicon Valley</em>, but I picture myself one day leading a
                team creating something that is both purposeful and economic. Do
                we really need another dating app for like, dogs or whatever?
              </Text>
              <Text>
                {" "}
                I love to travel. I like to pretend I’m Anthony Bourdain, but in
                reality I’m taking selfies with a 12 foot long selfie stick in
                front of the Eiffel Tower, followed by an authenitc meal at the
                Golden Arches for lunch. I’m joking, but I have indeed spent
                many months overseas in Australia, Southeast Asia, and other
                destinations. While abroad, I ditched the selfie stick and
                picked up photography as a hobby instead. I treat my
                photographs, vinyl records, and books like my step-children. I
                enjoy all things involving art, history, food, and could spend
                hours in philosophical discussions.
              </Text>
              <Text>
                {" "}
                I graduated with a B.S. degree of Civil Engineering in 2017 from
                San Jose State University, and completed the Software
                Engineering Immersive Program from General Assembly in 2020.{" "}
              </Text>
              <ResumeButton href={resume} target="_blank" rel="noreferrer">
                See Resume PDF
              </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}

export default About
