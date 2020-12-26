function gopin(lof){
	location.replace(lof);
}
const shareData = {
  title: 'join CApp',
  text: 'Join to the Web chat with CApp',
  url: 'https://sgi779.github.io/Capp/',
}

const btn = document.querySelector('.share');

// Must be triggered some kind of "user activation"
btn.addEventListener('click', async () => {
  try {
    await navigator.share(shareData)
    resultPara.textContent = 'MDN shared successfully'
  } 
});
