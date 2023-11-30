var imgfluid = document.querySelector('.imgfluid')
var btnColor = document.querySelector('.btnColor')

document.querySelector('.btnSignup').addEventListener('click', () => {
    imgfluid.style.left = '0'
    imgfluid.style.borderBottomLeftRadius = '20px'
    imgfluid.style.borderBottomRightRadius = '0px'
    btnColor.style.left = '98px'
    btnColor.style.transition = '.3s'
    btnColor.style.width = '120px'
})

document.querySelector('.btnSignin').addEventListener('click', () => {
    imgfluid.style.left = '350px'
    imgfluid.style.borderBottomLeftRadius = '0px'
    imgfluid.style.borderBottomRightRadius = '20px'
    btnColor.style.left = '0px'
    btnColor.style.transition = '.3s'
    btnColor.style.width = '100px'
})