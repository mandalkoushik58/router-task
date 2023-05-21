



export interface Iproducts{
  pname:string;
  pid:number;
  pstatus:tpstatus;
  canReturn: 1|0;
}

export type tpstatus="In-progress"|"Dispatched"|"Delivered"
