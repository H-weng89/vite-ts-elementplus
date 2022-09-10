interface loginData {
  username: string;
  password: string;
}

interface loginRes {
  code: number;
  data: {
    token:string
    tokenHead:string
  }
  message: string;
}


interface userInfo{
    code: number;
    data: {
        menus:Object[],
        roles:string[],
        username:string
    }
    message: string;
}



interface statInfo{
  data:{
    saleMap:{
      areaName:string,
      hasTrade:number,
      saleNum:number
    }[],
    salePie:Object[]
  },
  errmsg:string,
  errno:number
}