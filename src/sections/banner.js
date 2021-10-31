import React, { useState } from 'react';
import Image from 'next/image';
import { Container, Box, Heading, Text, Button, Link } from 'theme-ui';
import ModalVideo from 'react-modal-video';
import { IoIosPlayCircle } from 'react-icons/io';
import BannerImage from 'assets/banner-1.png';
import Particles from 'react-particles-js';

const BANNER_DATA = {
  title: 'Meta Network',
  text:
    'Welcome to next level Cryptocurrencies Token Built on BSC Network with fast transfer having its own NFT project & Crypto Wallet!',
  button: {
    link: '#',
    label: 'Get Token',
  },
  videoBtn: {
    link: '#',
    label: 'White paper',
  },
  bannerImage: BannerImage,
};

const Banner = () => {
  const { title, text, button, videoBtn, bannerImage } = BANNER_DATA;
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <Box as="section" id="banner" sx={styles.section}>
    <Box as="section" id="banner2" sx={styles.section1}>
    <Box as="section" id="banner3" sx={styles.section2}>


      <Container sx={styles.container}>
        <Box sx={styles.content}>
          <Heading as="h1">{title}</Heading>
          <Text as="p">{text}</Text>
          <Box sx={styles.btnWrap}>
            <Link href={button.link} sx={styles.btn}>
              {button.label}
            </Link>

            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="ZNA9rmDsYVE"
                onClose={() => setVideoOpen(false)}
              />
              <Button sx={styles.videoBtn} onClick={handleClick}>
                {videoBtn.label}
                <IoIosPlayCircle />
              </Button>
            </>
          </Box>
        </Box>

        <Box sx={styles.sectionImage}>
          <Image
            src={bannerImage}
            alt="Banner Mockup"
            width={740}
            height={442}
          />
        </Box>
        <Particles id="particles-js" sx={styles.paticleContainer}
            params={{
              "particles": {
                "number": {
                    "value": 30,
                    "density": {
                        "enable": true,
                        "value_area": 2000
                    }
                },
                "color": {
                    "value": "#ff7376",
                },
                "shape": {
                    "type": "circle",
                    "opacity": 0.5,
                    "stroke": {
                        "width": 0,
                        "color": "#fff",
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.12,
                        "sync": false
                    }
                },
                "size": {
                    "value": 6,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 10,
                        "size_min": 0.08,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#fff",
                    "opacity": 0.2,
                    "width": 1.3
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 1
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.1
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        
            }}    
        />
      </Container>
    </Box>
    </Box>

    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    overflow: 'hidden',
    mb: ['60px', '75px', null, '90px', '110px', '120px', '140px', '160px'],
    backgroundColor: '#b93638 !important',
  },
  paticleContainer: {
    position: 'absolute !important',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '0 !important',
  },
  section1: {
    overflow: 'hidden',
    backgroundImage: 'linear-gradient( 140deg, #6c55c1 0%, #4a2d97 20%, transparent 50%, transparent 100% ) !important',

  },
  section2: {
    overflow: 'hidden',
    backgroundImage: 'linear-gradient( to top, #1b0b53 0%, #1b0b53 5%, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0) 100% )',
    pt: ['115px', null, null, '140px', '150px', '170px', '185px'],
    pb: ['60px', '75px', null, '90px', '110px', '120px', '140px', '160px'],
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    flexDirection: ['column', null, null, 'row'],
  },
  content: {
    maxWidth: ['100%', null, null, '355px', '460px', '545px', null, '590px'],
    textAlign: ['center', null, null, 'left'],
    h1: {
      fontSize: ['28px', '32px', null, '34px', '40px', '48px', '54px', '58px'],
      lineHeight: [1.4, null, null, 1.35],
      color: '#fff',
      fontFamily: 'archivo',
      letterSpacing: '-1.5px',
      fontWeight: 'body',
      mx: ['0', null, null, 'auto', '0'],
    },
    p: {
      fontSize: ['15px', null, null, null, '16px', '17px'],
      lineHeight: [1.85, null, 1.9, null, 2, 2.47],
      color: '#fff',
      mt: [3, null, null, '18px'],
      pr: [0, null, null, null, null, null, null, '50px'],
    },
  },
  btnWrap: {
    display: 'flex',
    alignItems: 'center',
    mt: ['25px', null, null, '30px', '35px', '50px'],
    justifyContent: ['center', null, null, 'flex-start'],
  },
  btn: {
    backgroundColor: 'heading_secondary',
    borderRadius: '7px',
    lineHeight: 1,
    fontSize: ['13px', '14px', '15px'],
    padding: ['14px 20px 13px', '14px 25px 13px', '17px 30px 15px'],
    fontWeight: 700,
    display: 'inline-flex',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: '#ffffff',
    transition: 'all 300ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  videoBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    textTransform: 'uppercase',
    padding: 0,
    fontSize: ['13px', null, '15px', null, '17px'],
    fontWeight: 700,
    fontFamily: 'body',
    ml: ['20px', null, null, '25px', '30px'],
    outline: 'none',
    svg: {
      ml: [1, null, 2],
      fontSize: ['17px', '18px', '20px'],
      position: 'relative',
      top: '-1px',
    },
  },
  sectionImage: {
    mt: ['40px', null, null, 0],
    pl: [0, null, null, '30px', 0],
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    right: ['auto', null, null, null, '-10px', '-50px', '-70px'],
    width: [
      null,
      null,
      null,
      'calc(100% - 355px)',
      'calc(100% - 460px)',
      'calc(100% - 545px)',
      null,
      'calc(100% - 590px)',
    ],
    textAlign: ['center', null],
  },
};
