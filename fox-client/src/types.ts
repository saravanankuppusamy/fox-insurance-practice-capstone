export type User={_id:string;name:string;email:string;role:string};
export type Customer={_id:string;customerNumber:string;firstName:string;lastName:string;email:string;phone?:string;state?:string;status:string};
export type Policy={_id:string;policyNumber:string;type:string;premium:number;status:string;customer:Customer|string};
export type ServiceRequest={_id:string;requestNumber:string;category:string;description:string;priority:string;status:string;customer:any;policy?:any;notes?:any[]};
