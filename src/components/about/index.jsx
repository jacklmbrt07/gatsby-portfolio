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
                After a stint as a Construction Engineer, I became so fascinated
                with computer programming and made the difficult yet ruminated
                decision to switch careers. During that stint, I worked at the
                Oroville-Thermalito Dam complex in Northern California where I
                picked up some of the hardest lessons in project management, and
                leadership. Web-development has allowed me to utilize my problem
                solving skills, while simultaneously allowing me to let my
                creative side flow freely. I enjoy problem solving, and use my
                hyper focus on attention to detail to create functional yet
                minimalistic designs. I would like to utilize my skills in the
                tech world to lead a team with a destination that is both
                ethical and economic.
              </Text>
              <Text>
                {" "}
                I graduated with a B.S. degree of Civil Engineering in 2017 from
                San Jose State University. I love traveling and have spent much
                time abroad in Australia, Southeast Asia, and other
                destinations. Whilst traveling I picked up photography as a
                hobby. I treat my photographs, vinyl records, and books like my
                children. I enjoy all things art, history, San Franciscos and
                Oaklands excellent food and drink establishments, and could
                spend hours in philosophical discussions with no winner or
                loser.
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
