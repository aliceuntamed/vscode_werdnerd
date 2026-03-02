import styled from "styled-components";

const StyledButton = styled.button`
  padding:  16px 32px;
  
  background:  linearGradient(45deg, rgba(255,0,150,0.8), rgba(0,204,255,0.8), rgba(255,204,0,0.8));
  
  backdropFilter:  blur(10px);
  
  border:  1px solid rgba(255,255,255,0.3);
  
  borderRadius:  16px;
  
  color:  white;
  
  fontWeight:  600;
  
  cursor:  pointer;
  
  position:  relative;
  
  overflow:  hidden;
  
  transition:  all 0.4s ease;
  
  boxShadow:  0 8px 32px rgba(0,0,0,0.1);
  


.prismaticBtn: : before {
  content:  '';
  
  position:  absolute;
  
  top:  50%;
  
  left:  50%;
  
  width:  200%;
  
  height:  200%;
  
  background:  conicGradient(from 0deg, transparent, rgba(255,255,255,0.3), transparent);
  
  animation:  prismaticRotate 3s linear infinite;
  
  opacity:  0;
  


.prismaticBtn: hover: : before {
  opacity:  1;
  


@keyframes prismaticRotate {
  0% { transform:  rotate(0deg);
   
  100% { transform:  rotate(360deg);
`;

const PrismaticButton = () => {
  return <StyledButton>Prismatic</StyledButton>;
};

export default PrismaticButton;
