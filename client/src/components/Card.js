import React,{useContext, useState} from "react";
import styled from "styled-components";
import { SiFacebook, SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import colors from "../globalStyles/colorStyles";
import { useHistory } from "react-router";
import { UserContext } from "../App";
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
  justify-content: flex-start;
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

export const TagContainer = styled.div`
  border-radius: 20px;
  padding: 5px 10px;
  border: solid 1px #858383;
  display: inline-block;
  margin-right: 5px;
  color: #858383;
`;

const Card = ({ data }) => {
  console.log(data.Socials[0])
  const history = useHistory();
  const {visituser,setvisituser} = useContext(UserContext)
  const visit = async()=>{
    await setvisituser(data);
    localStorage.setItem('visituser', JSON.stringify(data));
    history.push('/visit_user')
  }
  return (
    <CardContainer>
      <ProfileAndInfoContainer>
        <div style={{ width: "100px", height: "100px" }}>
          <ProfileImg src={data.profileURL} />
        </div>
        <div>
          <h3 style={{ color: "#0AB29C" }}>
            {data.name}
          </h3>
          {data.tags.map((tag) => (
            <TagContainer>{tag}</TagContainer>
          ))}
          <SocialMediaText>Social Medias: </SocialMediaText>
          <SocialMediasContainer>
          <a src={data.Socials[0]}><SiGithub color={colors.ming} style={{ marginRight: "5px" }} /></a>
            <SiFacebook color={colors.ming} style={{ marginRight: "5px" }} > <a src={data.Socials[2]} ></a> </SiFacebook>
            <SiLinkedin color={colors.ming} style={{ marginRight: "5px" }} ><a src={data.Socials[1]} ></a></SiLinkedin>
            <SiInstagram color={colors.ming} style={{ marginRight: "5px" }} ><a src={data.Socials[3]} ></a></SiInstagram>
          </SocialMediasContainer>
        </div>
      </ProfileAndInfoContainer>
      <LinksContainer>
        <p style={{ color: "black" }}>{data.description}</p>
      </LinksContainer>
      <button className="save-button" onClick={visit}>Visit</button>
    </CardContainer>
  );
};

export default Card;
