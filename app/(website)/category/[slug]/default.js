import Container from "@/components/container";
import { notFound } from "next/navigation";
import Label from "@/components/ui/label";
import PostList from "@/components/postlist";
import Pagination from "@/components/blog/pagination";

export default function Post(props) {
  const { loading, posts, category, detailCategory } = props;

  if (!loading && !category) {
    notFound();
  }

  return (
    <>
      <Container className="!pt-0">
        <div className="mx-auto max-w-screen-md ">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold tracking-tight lg:leading-tight text-brand-primary lg:text-5xl dark:text-white">
              {detailCategory?.title}
              </h1>

              <div className="text-center mt-6">
                <p className="text-lg">Welcome to UX moi ngay! We are passionate about crafting exceptional user experiences in software development. As a dedicated Frontend Engineer, I bring a wealth of experience and expertise to the table, focusing on translating design concepts into seamless and intuitive user interfaces.</p>
              </div>
            
            </div>

            <p className="mt-6 text-gray-600 text-center">{posts?.length || 0} Articles</p>
          {posts && posts?.length === 0 && (
        <div className="flex h-40 items-center justify-center">
          <span className="text-lg text-gray-500">
            End of the result!
          </span>
        </div>
        )}
        <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
          {posts?.map(post => (
            <PostList key={post._id} post={post} aspect="square" />
          ))}
        </div>

        {/* <Pagination
          pageIndex={pageIndex}
          isFirstPage={isFirstPage}
          isLastPage={isLastPage}
        /> */}
          </div>
      </Container>

    </>
  );
}