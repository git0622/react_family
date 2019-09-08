export function getRedirectPath({ type, avatar }) {
    console.log("type",type)
  //根据用户信息，返回跳转地址
  //user.type /boss /genius
  //user.avatar /baseinfo /geniusinfo
  let url = type == "boss" ? "boss" : "/genius";
  if(!avatar){
      url=url+'info'
  }
  return url;
}
