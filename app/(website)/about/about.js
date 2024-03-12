import Container from "@/components/container";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">Welcome to UX moi ngay! We are passionate about crafting exceptional user experiences in software development. As a dedicated Frontend Engineer, I bring a wealth of experience and expertise to the table, focusing on translating design concepts into seamless and intuitive user interfaces.</p>
      </div>

      <div className="flex justify-center mt-12">
                     <Image
                      src={'/img/certificate.png'}
                      alt={'certificate google'}
                      width={466}
                      height={360}
                      sizes="(max-width: 320px) 100vw, 320px"
                      className="object-cover"
                    />    
      </div>
     

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          At uxmoingay.com, we understand the crucial intersection between design and development. Our mission is to bridge this gap effectively, ensuring that every pixel and line of code contributes to an enriching user journey. Through insightful articles and practical insights, we delve into the nuances of UX design, exploring its profound impact on the development process.
        </p>
        <p>
          With a keen eye for detail and a commitment to excellence, we strive to empower developers and designers alike to create products that not only meet but exceed user expectations. Whether {`you're`} embarking on a new project or seeking to enhance an existing one, UX moi ngay is your trusted companion in navigating the complex landscape of UX design for software development.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
