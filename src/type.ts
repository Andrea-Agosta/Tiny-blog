export interface PostState {
  "id": number,
  "title": string,
  "body": string,
  "userId": number,
  "tags": string[],
  "reactions": number
}

export interface UserState {
  "id": number,
  "firstName": string,
  "lastName": string,
  "image": string,
}

export interface CommentsData {
  "id": number,
  "body": string,
  "postId": number,
  "user": {
    "id": number,
    "username": string
  }
}