"use client";
import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
// import { MoreStories } from "@/app/_components/more-stories";
// import { getAllPosts } from "@/lib/api";
import { QueEs } from "@/app/_components/que-es";
import { Belgica } from "./_components/ejemplos";
import { Tachero } from "./_components/tachero";
import { Portfolios } from "./_components/portfolios";
import { Fade } from "react-awesome-reveal";

export default function Index() {


  return (
    <main>
      <Container>
        <Fade>
          <Intro />

        </Fade>
        <Fade>

          <QueEs />
        </Fade>
        <Fade>
          <Belgica />
        </Fade>
        <Fade>

          <Tachero />
        </Fade>
        <Fade>

          <Portfolios />
        </Fade>
        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
      </Container>
    </main>
  );
}
