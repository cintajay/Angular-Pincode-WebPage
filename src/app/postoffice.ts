export interface Root {
  Message: string;
  Status: string;
  PostOffice: PostOffice[];
}

export interface PostOffice {
  Name: string;
  Description: string;
  Pincode: string;
  BranchType: string;
  DeliveryStatus: string;
  Circle: string;
  District: string;
  Division: string;
  Region: string;
  State: string;
  Country: string;
}
