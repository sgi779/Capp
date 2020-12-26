function gopin(lof){
	location.replace(lof);
}
const shareData = {
  title: 'join CApp',
  text: 'Join to the Web chat with CApp',
  url: 'https://sgi779.github.io/Capp/',
}

function shareMeCapp(){
navigator.share(shareData)
}
