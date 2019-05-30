export interface Article {
  _id: string
  index: number
  guid: string
  isActive: boolean
  likes: number
  avatar: string
  img: string
  type: string
  author: Author
  description: string
  title: string
  created: Date
}

export interface Author {
  first: string
  last: string
}
