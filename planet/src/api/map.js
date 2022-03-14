// const URL = 'http://localhost:5000/'
// const URL = 'http://121.5.155.221:80/';

const apiRequest = async (type, method, request, optional) => {
  const token = localStorage.getItem('token');
  // const id=localStorage.getItem('uId');
  let response;
  switch (type) {
    case 'getLatitudeLongitude': {
      const options = {
          headers: {
              'Content-type': 'application/json',
              'access_key':  'f0a4d5a67e0c76cce6908d2be602e604',
          },
          method,
        //   body: JSON.stringify({
        //       access_key: 'f0a4d5a67e0c76cce6908d2be602e604',
        //       query:request[0]
            
        //   }),
      }
      response = await fetch(`http://api.positionstack.com/v1/forward?access_key=f0a4d5a67e0c76cce6908d2be602e604&query=${request[0]}`, options);
      console.log('resssss',request);
      break;
  }
    

  }
  return response;
}

export default apiRequest;