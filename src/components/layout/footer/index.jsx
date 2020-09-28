import React from "react"
import socialMedia from "../../../data/socialMedia.json"
import data from "./../../../data/data"
import { FooterStyle, FooterBody, SubRight, CopyRight } from "./style"
import { ContainerLayout, ButtonDefault } from "../../common"

const Footer = () => {
  return (
    <>
      <FooterStyle>
        <ContainerLayout>
          <FooterBody>
            <div>
              <p className="text-primary quote">
                {" "}
                Ready to take the next step and work together?{" "}
              </p>
              <ButtonDefault href={`mailto:${data.SiteContact.email}`}>
                {" "}
                Contact me{" "}
              </ButtonDefault>
            </div>
          </FooterBody>
          <div className="box">
            <SubRight>
              Compare yourself to who you were yesterday, not to who someone
              else is today.
            </SubRight>
            <CopyRight className="text-dark">
              ©
              <span>
                {" "}
                {new Date().getFullYear()}, Built with {` `}
                <a href="https://www.gatsbyjs.org">Gatsby</a>{" "}
              </span>
              Copyright 2020 by {data.SiteAuthor}{" "}
            </CopyRight>
          </div>
        </ContainerLayout>
      </FooterStyle>
    </>
  )
}

export default Footer
