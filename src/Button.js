// const style = {
//   속성 :  '값'
// }

// const baseButtonStyle = {
//   padding: '14px 27px', // 내부여백 상하 14px, 좌우 27px
//   // border : 'solid 1px #7090ff', // 경계선 디자인
//   outline : 'none' , // 외부 경계선 : none(없애기)
//   // color:'#7090ff',
//   // backgroundColor:'rgba(0,89,255, .2)',
//   borderRadius:'30px',
//   fotSize:'17px',
//   cursor: 'pointer'
// }

// const blueButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor:'rgba(0, 89,255, .2)',
//   border : 'solid 1px #7090ff', // 경계선 디자인
//   color:'#7090ff',
// }

// const redButtonStyle = {
//   ...baseButtonStyle,
//   backgroundColor:'rgba(255, 78, 78, .2)',
//   border: 'solid 1px #ff4664',
//   color: '#ff4664'
// }

import './css/Button.css';


function Button({children, onClick, color='blue', className = ''}){
  //const style = color === 'red' ? redButtonStyle : blueButtonStyle
  const classNames = `Button ${color} ${className}`
  return (
    <button 
      className={classNames} 
      onClick={onClick}>
      {children}
    </button>
  )
}

export default Button