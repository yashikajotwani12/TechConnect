import React from "react";
import styled from "styled-components";
import { SiFacebook, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import colors from "../globalStyles/colorStyles";

export const CardContainer = styled.div`
  width: 25%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin: 20px;
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ProfileAndInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const SocialMediasContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const LinksContainer = styled.div`
  background-color: ${colors.blackSqueeze};
  padding: 20px;
  margin: 20px;
`;

export const SocialMediaText = styled.p`
  color: ${colors.ming};
  font-weight: 600;
`;
const Card = ({ data }) => {
  return (
    <CardContainer>
      <ProfileAndInfoContainer>
        <div style={{ width: "80px", height: "80px" }}>
          <ProfileImg src={data.profileImg} />
        </div>
        <div>
          <h3 style={{ color: "#0AB29C" }}>
            {data.firstName} {data.lastName}
          </h3>
          <p style={{ color: "#858383" }}>{data.text}</p>
          <SocialMediaText>Social Medias: </SocialMediaText>
          <SocialMediasContainer>
            <SiFacebook color={colors.ming} />
            <SiGithub color={colors.ming} />
            <SiLinkedin color={colors.ming} />
            <SiInstagram color={colors.ming} />
          </SocialMediasContainer>
        </div>
      </ProfileAndInfoContainer>
      <LinksContainer>
        <p>Links: </p>
        {data.links.map((link) => (
          <p>{link}</p>
        ))}
      </LinksContainer>
    </CardContainer>
  );
};

export default Card;
