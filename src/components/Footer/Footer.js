import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrapper,
  WebsiteRights,
} from "./Footer.element";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exculsive membership to receive the latest new update.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe anytime.</FooterSubText>

        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms od Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms od Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Video</FooterLinkTitle>
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms od Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Careers</FooterLink>
            <FooterLink to="/">Investors</FooterLink>
            <FooterLink to="/">Terms od Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialLogo to="/">
            <SocialIcon />
            ULTRA
          </SocialLogo>
          <WebsiteRights>ULTRA 2021 </WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
