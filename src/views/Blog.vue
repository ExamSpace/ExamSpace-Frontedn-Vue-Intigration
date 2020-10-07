<template>
  <div id="blog">
    <div style="width: 710px; margin: 0 auto;">
      <div class="bacon-blog-post bacon-shadow">
        <img
          src="http://i2.wp.com/garybacon.com/wp-content/uploads/2016/06/finding_what_challenges.png"
          class="wp-post-image"
        />
        <div class="bacon-blog-post-inner">
          <h2>
            <a
              href="http://garybacon.com/post/finding-what-challenges-you/"
              rel="bookmark"
              title="Permanent link to Finding What Challenges You"
              class="title-row"
              >Finding What Challenges You</a
            >
          </h2>
          <p>
            In an
            <a
              href="https://www.youtube.com/watch?v=eaVBDPAy-SI"
              onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.youtube.com/watch?v=eaVBDPAy-SI', 'interview']);"
              target="_blank"
              >interview</a
            >, Neil deGrasse Tyson talks about science boosting the economy. He
            goes on to say, most companies and politicians don’t have the
            tolerance for the long term view.
          </p>
          <p>
            You don’t motivate a group of kids, saying “Who wants to be a
            mechanical engineer and help improve flight efficiency by 15%
            compared to the airplane your father flew?”
          </p>
          <p>
            But instead, ask “Who wants to be an engineer and help develop
            airfoils to help fly in the atmosphere of Mars?” With the latter,
            you get the best students in the class.
          </p>
          <blockquote>
            <p>
              Flow is the intersection of what you are good at and what
              challenges you— where difficulty and competency meet.
            </p>
            <p>
              When your competency exceeds the difficulty of a task, you are
              bored. And when the difficulty exceeds your competency, you are
              anxious. That was my problem: I was bored.
            </p>
            <p>
              — Jeff Goins,
              <a
                href="http://amzn.to/28INctw"
                onclick="_gaq.push(['_trackEvent', 'outbound-article', 'http://amzn.to/28INctw', 'The Art of Work']);"
                target="_blank"
                >The Art of Work</a
              >
            </p>
          </blockquote>
          <p>
            There are times where the day job requires me to do the mundane.
            That’s fine. We can’t always have constant excitement. It’s called
            work for a reason.
          </p>
          <p></p>
          <h3>Inspiration</h3>
          <p>
            For inspiration, this is one of the reasons that I have side
            projects. To keep pushing my limits. It allows me to play. To find
            out how to make user interfaces for VR, tinker with implementing the
            <a
              href="https://www.ampproject.org/"
              onclick="_gaq.push(['_trackEvent', 'outbound-article', 'https://www.ampproject.org/', 'Acelerated Mobile Pages Project']);"
              target="_blank"
              >Acelerated Mobile Pages Project</a
            >
            on content, create a
            <a href="http://garybacon.com/snapchat/" target="_blank"
              >landing page for Snapchat</a
            >, write books, and so much more.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Blog'
}
</script>

<style lang="scss" scoped>
.bacon-blog-post {
  position: relative;
  width: 100%;
  background: #fff;
  font-weight: 400;
  line-height: 1.45;
}

.bacon-blog-post-inner {
  padding: 42px;
}

.bacon-blog-post .wp-post-image {
  width: 100%;
  height: auto;
}

.bacon-blog-post h1,
.bacon-blog-post h2,
.bacon-blog-post h3,
.bacon-blog-post h4 {
  margin: 1.414em 0 0.5em;
  font-weight: 700;
  line-height: 1.2;
  font-family: Open Sans, sans-serif;
}

.bacon-blog-post h1 a,
.bacon-blog-post h2 a,
.bacon-blog-post h3 a,
.bacon-blog-post h4 a {
  display: inline-block;
  color: #000;
  text-decoration: none;
}

.bacon-blog-post h1 {
  margin-top: 0;
  font-size: 3.157em;
}

.bacon-blog-post h2 {
  margin-top: 0;
  font-size: 2.369em;
}
.bacon-blog-post h3 {
  font-size: 1.777em;
}
.bacon-blog-post h4 {
  font-size: 1.333em;
}
.bacon-blog-post small,
.bacon-blog-post .font_small {
  font-size: 0.75em;
}

.bacon-blog-post p,
.bacon-blog-post p a {
  font-family: Lora, Times New Roman, serif;
  font-size: 20px;
  line-height: 28px;
}

.bacon-blog-post p {
  margin-bottom: 1.3em;
}
.bacon-blog-post p:last-child {
  margin-bottom: 0;
}
.bacon-blog-post p a {
  color: #b21a13;
}

.bacon-blog-post blockquote {
  margin: 1.3em;
  padding-left: 1.3em;
  border-left: rgb(224, 40, 43) solid 0.25em;
  font-style: italic;
}

.bacon-shadow:after {
  position: absolute;
  content: '';
  left: 20px;
  right: 20px;
  bottom: 0px;
  z-index: -1;
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.6);
}
</style>
