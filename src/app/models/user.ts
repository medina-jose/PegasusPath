export interface User {
  uid: string;
  firstname?: string | null;
  lastname?: string | null;
  email?: string | null;
  likes?: string[] | null;
  dislikes?: string[] | null;
}
