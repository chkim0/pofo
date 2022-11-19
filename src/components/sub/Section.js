import styled from "styled-components";
import Box from './Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faRotate } from '@fortawesome/free-solid-svg-icons';

const path = process.env.PUBLIC_URL;

const bgs = [
    path + '/img/pic1.jpg',
    path + '/img/pic2.jpg',
    path + '/img/pic3.jpg',
    path + '/img/pic4.jpg',
    path + '/img/pic5.jpg',
    path + '/img/pic6.jpg',
    path + '/img/pic7.jpg',
]

const SectionWrap = styled.section`
	width: 100%;
	position: relative;
	.subtext{
        display:block;
        width:100%;
        heigth: 180px;
        font-size: 20px;
    font-weight: 300;
   font-family: 'Itim';
    line-height: 30px;
    color:#fff;
         margin: 15px 0 0 10px;
    padding: 0 0 50px 20px;
    }
    .sectxt{
            display:block;
            width:100%;
            heigth: 180px;
            
            span{
                font: 20px/1 'arial';
                color: #fff;
                text-aline: center;
            }

        }
        
	@media screen and (max-width: ${({ theme }) => theme.web_b} ) {		
		width: 100%;	
		margin-left: 0%;
     
        .figbg{
            width: 100%;   
            margin-left: 0%;
            img{
                 width: 100%;   
            }
         }
     }
        
	}
    @media screen and (max-width: ${({ theme }) => theme.web_s} ) {		
		width: 100%;	
		margin-left: 0%;
      
       .figbg{
            width: 100%;   
            margin-left: 0%;
            img{
                 width: 100%;   
            }
         }
     }
	}
    	@media screen and (max-width: ${({ theme }) => theme.mo_b}) {
		width: 100%;	
		margin-left: 0%;
      
        .figbg{
            width: 100%;   
            margin-left: 0%;
            img{
                 width: 100%;   
            }
         }
     }
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		
        width: 100%;	
		margin-left: 0%;
       bg{
        width: 100%;
        height: 0%;
       }
        .figbg{
            width: 100%;   
            margin-left: 0%;
            img{
                 width: 100%;   
            }
         }
         
     }
		&:nth-of-type(1) {display: block; width: 100%;}
        &:nth-of-type(11) {display: none;}
	}
`;


function Section() {
    return (
        <SectionWrap>
            <p className="subtext">"Remember you're the one

                who can fill the world with

                sunshine,<br></br>
                The very things that hold you down

                are going to lift you up"</p>

            <figure className="figbg">
                <img src={process.env.PUBLIC_URL + '/img/deparsub.jpg'} />
            </figure>


            <Box type={'bg'} bg={bgs[0]}>
                <div>
                    <span>SUSAN</span>
                </div>
            </Box>
            <Box type={'txt'}>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <p>
                        <strong>A Whole New World</strong>
                        <em>
                            "My dream wouldn't be complete without you All at once everything looks different, now that I see you Some people are worth
                            melting for  The very things that hold you down are going to lift you up Remember you're the one who can fill the world with sunshine"
                        </em>
                    </p>
                </div>
            </Box>
            <Box type={'txt'} bg={'#ccc'}>
                <div>
                    <FontAwesomeIcon icon={faRotate} />
                    <p>
                        <strong>Reserve</strong>
                    </p>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[1]}>
                <div>
                    <span>SARA</span>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[2]}>
                <div>
                    <span>TOM</span>
                </div>
            </Box>
            <Box type={'txt'}>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <p>
                        <strong>A Dazzling Place</strong>
                        <em>
                            Happiness in this world, when it comes, comes incidentally. Make it the object of pursuit, and it leads us a wild-goose chase, and is never attained. All sorts of persons, and every individual, has a place to fill in the world, and is important in some respects, whether he chooses to be so or not.
                        </em>
                    </p>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[3]}>
                <div>
                    <span>David</span>
                </div>
            </Box>
            <Box type={'txt'}>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <strong>Inform</strong>
                    <br />
                    <em>
                        An engaged woman is always more agreeable than a disengaged.
                    </em>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[4]}>
                <div>
                    <span>Emily</span>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[5]}>
                <div>
                    <span>Paul</span>
                </div>
            </Box>
            <Box type={'txt'} bg={'#e3f1fb'}>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} />
                    <p>
                        <strong>Open Space</strong>
                        <br />
                        <em>I can show you the world</em>
                    </p>
                </div>
            </Box>
            <Box type={'bg'} bg={bgs[6]}>
                <div>
                    <span>Julia</span>
                </div>

            </Box>



        </SectionWrap>
    );
}

export default Section;