import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { QueEs } from "@/app/_components/que-es";
import { Belgica } from "./_components/ejemplos";
import {Tachero} from "./_components/tachero";
import { Portfolios } from "./_components/portfolios";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Intro />
        <QueEs />
        <Belgica />
        <Tachero />
        <Portfolios />
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
