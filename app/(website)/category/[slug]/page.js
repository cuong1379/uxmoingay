import PostPage from "./default";

import { getPostsByCategory, getDetailCategories} from "@/lib/sanity/client";

export default async function PostDefault({ params }) {
  const [postsByCategory, detailCategory ] = await Promise.all(
    [getPostsByCategory(params?.slug),
      getDetailCategories(params?.slug)]
    )
  return <PostPage posts={postsByCategory} category={params?.slug} detailCategory={detailCategory} />;
}

// export const revalidate = 60;
