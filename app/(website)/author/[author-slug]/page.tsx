/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Suspense } from "react";
import Container from "@/components/container";
import Archive from "@/app/(website)/archive/archive";
import Loading from "@/components/loading";

const Author = ({ searchParams }) => {
  return (
    <div className="container mx-auto max-w-screen-lg px-8  py-5 lg:py-8 xl:px-5">
      <div className="flex flex-col items-center justify-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <img
            alt="Shawn Nguyen"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="object-cover"
            sizes="(max-width: 320px) 100vw, 320px"
            srcSet="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75 3840w"
            src="/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fqtnovuq2%2Fproduction%2Fedb127a0f0afd2f5e6b9021ab1c95015d61273a1-2560x1710.jpg%3Fw%3D2000%26auto%3Dformat&amp;w=3840&amp;q=75"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: "0px",
              color: "transparent"
            }}
          />
        </div>
        <h1 className="text-brand-primary mt-2 text-3xl font-semibold tracking-tight dark:text-white lg:text-3xl lg:leading-tight">
          Shawn Nguyen
        </h1>
        <div className="mx-auto mt-2 flex max-w-xl flex-col px-5 text-center text-gray-500">
          <p>
            Shawn Nguyen is a a passionate Frontend Engineer with a deep interest in UX design and its application in software development. With a solid background in both coding and user experience principles, I strive to bridge the gap between design and development, ensuring that every digital interaction is not only functional but also delightful for the end user.
          </p>
        </div>
      </div>

      <Container className="relative">
        <Suspense
          key={searchParams.page || "1"}
          fallback={<Loading />}>
          <Archive searchParams={searchParams} />
        </Suspense>
      </Container>
    </div>
  );
};

export default Author;
