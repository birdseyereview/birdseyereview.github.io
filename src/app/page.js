import Image from "next/image";

import getPostMetadata from "@/lib/posts";

import ProjectList from "@/components/projectList";

import "./page.css";

export default function Home() {
  const posts = getPostMetadata();
  
  return (
    <div id="home">
    
      <header>
        
        <h1>
          BIRD'S EYE REVIEW
        </h1>
        <Image
          aria-hidden
          src="/static/images/birdseyereview_logo.png"
          alt="birdseyereview"
          width={100}
          height={100}
        />
      </header>

      
      <ProjectList posts={posts} />
    </div>
  );
}
