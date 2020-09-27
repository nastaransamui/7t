import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme, withTheme } from '@material-ui/core/styles';
import Carousel from 'react-slick';
import "../../../../public/slick.css";
import "../../../../public/slick-theme.css";
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import imgAPI from '../../../../public/images/imgAPI';
import DotParallax from '../Parallax/Dots';
import Title from '../Title/Title';
import GeneralCard from '../Cards/General';
import useStyle from './project-style';
import IosArrowBack from 'react-ionicons/lib/IosArrowBack';
import IosArrowForward from 'react-ionicons/lib/IosArrowForward';
import Projects from "../Portfolio/Projects";
const ProjectsData = [
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[1],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[2],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
  {
    img: imgAPI.architect[3],
    title: 'Vivamus sit amet',
    desc: 'Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat…'
  },
];

function Project(props){
  const slider = useRef(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyle();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 4,
    arrows: false,
    variableWidth: true,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };
  useEffect(() => {
    if (theme.direction === 'rtl') {
      const lastSlide = Math.floor(Projects.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  return(
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container>
        <div className={classes.floatingTitle}>
        <Title
            head="Latest Project"
            desc="Our portfolio of services includes planning & design"
          />
        </div>
      </Container>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={clsx(classes.props, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
              {Projects.map((item, index) =>{
                return(
                  <div key={index.toString()} className={classes.item}>
                    <GeneralCard 
                    img={item.Images[0]} 
                    title={item.name} 
                    desc=''
                    history={props.history}
                    _id={item._id} />
                  </div>
                )
              })}
              {isDesktop && (
                <div className={clsx(classes.props, classes.itemPropsLast)}>
                  <div />
                </div>
              )}
          </Carousel>
        </div>
        <IconButton className={clsx(classes.nav, classes.prev)}
        onClick={()=> slider.current.slickPrev()}>
          <IosArrowBack />
        </IconButton>
        <IconButton
          className={clsx(classes.nav, classes.next)}
          onClick={() => slider.current.slickNext()}
        >
          <IosArrowForward />
        </IconButton>
      </div>
    </div>
  )
}

export default withTheme(Project);