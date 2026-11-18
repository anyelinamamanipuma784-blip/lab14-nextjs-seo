import { getPostsFromCMS } from "../../lib/cms";

export default async function handler(req, res) {
  const posts = await getPostsFromCMS();
  res.status(200).json({ total: posts.length, posts });
}