import styled, { css } from "styled-components";


const BoxWrap = styled.article`
	float: left;
	width: 20%;
	height: 260px;
	transition: 0.5s;
	animation scale 1s 1;
	>div {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		cursor: pointer;
        
		${(props) =>
		props.type === 'bg' &&
		css`
				background-size: cover;
				background-position: center;	
				background-image: url(${(props) => props.bg});
				span {
					font-size: 60px;
					color: #fff;
					position: absolute;
					bottom: 0;
					right: 20px;
					transform: scale(10);
					opacity: 0;
					transition: 0.4s;
					font-family: 'Caveat';
				}
			`}
		${(props) =>
		props.type === 'txt' &&
		css`
					color: #666;					
					background-color: ${(props) => props.bg || '#fff'};
					padding: 40px 30px;
					transition: 1s;	
					svg {
						font-size: 300px;
						color: #999;
						opacity: 0;
						position: absolute;
						bottom: -70px;
						right: -200px;
						transition: 0.7s;
					}
					strong {
						display: block;
						width: 100%;
						font-size: 30px;
						font-weight: normal;
						font-family: 'Poiret One';
						line-height: 1.6;
						color: #888;
						margin-bottom: 20px;
						transition: 1s;
					}
					em {
						font-size: 12px;
						color: #999;
					}
				`}			
	}
	@keyframes scale {
		0% {transform: scale(0);}
		100% {transform: scale(1);}
	}
	//hover motion
	&:hover {
		>div {
			${(props) =>
		props.type === 'bg' &&
		css`
						span {
							opacity: 1; transform: scale(1);
						}
				`}
				${(props) =>
		props.type === 'txt' &&
		css`
					background: #000;
					color: #fff;
					svg {
						right: 0;
						opacity: 0.8;
					}	
					strong, em {
						color: #fff;
					}
		`}
		}
	}
	&:nth-of-type(1) {width: 60%; height: 520px; z-index: 4;}
	&:nth-of-type(2) {width: 40%;}
	&:nth-of-type(6) {width: 40%;}
	&:nth-of-type(9) {width: 40%;}
	@media screen and (max-width: ${({ theme }) => theme.web_m}) {
		width: 25%;
		&:nth-of-type(1) {width: 75%;}
		&:nth-of-type(2) {width: 25%;}
		&:nth-of-type(6) {width: 50%;}
		&:nth-of-type(7) {width: 50%;}
		&:nth-of-type(9) {width: 25%;}
		&:nth-of-type(10) {width: 50%;}
	}
	@media screen and (max-width: ${({ theme }) => theme.web_s}) {
		width: 33.3333%;
		&:nth-of-type(1) {width: 100%; height: 400px;}
		&:nth-of-type(2) {width: 66.666%;}
		&:nth-of-type(4) {display: none;}
		&:nth-of-type(6) {width: 66.666%;}
		&:nth-of-type(7) {display: none;}
		&:nth-of-type(9) {width: 33.333%;}
		&:nth-of-type(10) {display: none;}
		&:nth-of-type(12) {display: none;} 
	}
	@media screen and (max-width: ${({ theme }) => theme.mo_b}) {
		&:nth-of-type(2) {width: 100%;}
		&:nth-of-type(3) {display: none;}
		&:nth-of-type(5) {width: 50%;}
		&:nth-of-type(6) {width: 50%;}
		&:nth-of-type(8) {width: 50%;}
		&:nth-of-type(9) {width: 50%;}
		&:nth-of-type(11) {width: 50%;}
		&:nth-of-type(12) {width: 50%; display: block;}
	}

	@media screen and (max-width: ${({ theme }) => theme.mo_m}) {
		
		&:nth-of-type(1) {display: block;  width: 100%;}
		&:nth-of-type(2) {width: 100%;}
		&:nth-of-type(3) {display: none;}
		&:nth-of-type(5) {width: 50%;}
		&:nth-of-type(6) {width: 50%;}
		&:nth-of-type(8) {width: 50%;}
		&:nth-of-type(9) {width: 50%;}
		&:nth-of-type(11) {width: 50%;}
		&:nth-of-type(12) {width: 50%;} 
		
	}
`;

function Box({ children, ...props }) {
	return (
		<BoxWrap {...props}>
			{children}
		</BoxWrap>
	);
}

export default Box;