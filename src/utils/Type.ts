// LikeProducts
export interface useinfoType {
  _id?: number
  name: string
  birthday?: object
  mail: string
  password: string
  like: object
}

export interface LikeItemType {
  LikeName: string
  Likeid: string
  LikePic: string
  LikePrice: number
  LikeColor: string
  LikeDate: string
}

// ProductPage
export interface itemType {
  id: string
  img: Array<string>
  name: string
  type: string
  ex_price: number
  price: number
  number: number
  brand: string
}

export interface colorType {
  pic: string
  color: string
}
