export interface Event {
  eid?: string;
  uid?: string;
  name?: string | null;
  longitude?: number;
  latitude?: number;
  like?: number;
  dislike?: number;
  likePercent?: number;
  dislikePercent?: number;
  userlikelist?: string[] | null;
  userdislikelist?: string[] | null;
}
