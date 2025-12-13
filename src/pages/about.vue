<template>
  <div>
    <pageHead>About me</pageHead>
    <section class="section has-text-centered">
      <div class="container">
        <rotate-box />
      </div>
      <div class="container">
        <p>Hi! please call me Takanakahiko.</p>
        <p>I'd like to create a creative work that makes someone's heart move.</p>
        <p>My dream is to credits my name on the endrol of my loving content.</p>
        <p>I guess that sometimes the dreams come true.</p>
      </div>
      <div class="container p-2">
        <span>Master of Engineering</span>
        /
        <span>Engineer at U-NEXT Co., Ltd.</span>
        /
        <a href="https://www.credly.com/badges/24a73807-59db-4936-9f3a-e2dd9081bf63/public_url" target="_blank" rel="noopener noreferrer">Professional Cloud Architect</a>
        /
        <a href="https://www.jafp.or.jp/exam/about/" target="_blank" rel="noopener noreferrer">3rd grade Certified Skilled Professional of Financial Planning</a>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h3 class="title is-3">
          I like...
        </h3>
        <div class="columns is-variable">
          <div
            v-for="item in likes"
            :key="item.title"
            class="column has-text-centered bd-notification"
          >
            <p>
              <span class="icon is-large">
                <i :class="['mdi', 'mdi-' + item.icon, 'mdi-48px']"></i>
              </span>
            </p>
            <p class="title is-4">
              {{ item.title }}
            </p>
            <p class="subtitle is-5">
              {{ item.comment }}
            </p>
            <p class="content">
              {{ item.body }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            History
          </h1>
          <div class="columns">
            <div class="column">
              <timeLine :timeline-content="timelineContent" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container has-text-centered columns is-mobile is-multiline is-centered">
        <a
          v-for="linkInfo in links"
          :key="linkInfo.title"
          :title="linkInfo.title"
          :href="linkInfo.url"
          target="_blank"
          rel="noopener noreferrer"
          class="column"
        >
          <!-- <p >{{ linkInfo.title }}</p> -->
          <span class="icon is-large">
            <i :class="['bi', 'bi-' + linkInfo.icon]"></i>
          </span>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import PageHead from '~/components/PageHead'
import TimeLine from '~/components/TimeLine'
import RotateBox from '~/components/RotateBox'

export default {
  name: 'AboutMe',
  components: {
    PageHead,
    TimeLine,
    RotateBox
  },
  setup () {
    return {
      likes: [
        {
          icon: 'laptop',
          title: 'Programming',
          comment: 'I like coding.',
          body: 'Python / TypeScript / Elixir / ...'
        },
        {
          icon: 'earth',
          title: 'OSS',
          comment: 'I like those cultures.',
          body: 'Clasp / Nuxt / saojs / ...'
        },
        {
          icon: 'television-classic',
          title: 'Animes',
          comment: 'I like girls who strive hard.',
          body: 'Pripara / Aikatsu! / Vividred Operation / ...'
        }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'github',
          comment: 'Various developments',
          url: 'https://github.com/takanakahiko'
        },
        {
          title: 'LinkedIn',
          icon: 'linkedin',
          comment: '',
          url: 'https://www.linkedin.com/in/takanakahiko/'
        },
        {
          title: 'Twitter',
          icon: 'twitter',
          comment: 'Various tweets',
          url: 'https://twitter.com/takanakahiko'
        },
        {
          title: 'Blog',
          icon: 'vector-pen',
          comment: 'Various poems',
          url: 'https://takanakahiko.hatenablog.com'
        },
        {
          title: 'Pixiv',
          icon: 'pencil-fill',
          comment: 'Various illustrations',
          url: 'https://sketch.pixiv.net/@takanakahiko'
        },
        {
          title: 'Facebook',
          icon: 'facebook',
          comment: 'Private relationships',
          url: 'https://facebook.com/takanakahiko'
        },
        {
          title: 'Wishlist',
          icon: 'gift-fill',
          comment: 'Please give me a present',
          url: 'https://www.amazon.jp/hz/wishlist/ls/2X1XQIFXKS456'
        },
        {
          title: 'Discord',
          icon: 'discord',
          comment: '',
          url: 'https://discordapp.com/users/375939020867239938'
        }
      ],
      timelineContent: [
      {
          title: 'November 2024 - Present',
          content: 'U-NEXT Co., Ltd.',
          role: 'Engineer'
        },
        {
          title: 'April 2020 - October 2024',
          content: 'KAKEHASHI Inc.',
          role: 'Engineer(outsourcing)'
        },
        {
          title: 'April 2020 - October 2024',
          content: 'Akatsuki Inc.',
          role: 'Engineer'
        },
        {
          title: 'February 2019 - March 2020',
          content: 'Japan Digital Design',
          role: 'Data and Prototyping Engineer(internship)'
        },
        {
          title: 'February 2019 - March 2020',
          content: 'Gaiax',
          role: 'OSS promoter(internship)'
        },
        {
          title: 'April 2018 - March 2020',
          content: 'Takushoku University',
          role: 'Information and Design Science Course(Master of Engineering)'
        },
        {
          title: 'February 2018 - January 2019',
          content: 'Air Closet',
          role: 'Data scientist(internship)'
        },
        {
          title: 'April 2014 - December 2018',
          content: 'Non-disclosure (Embedded system development company)',
          role: 'Fullstack engineer(part-time job)'
        },
        {
          title: 'April 2014 - March 2018',
          content: 'Takushoku University',
          role: 'Undergraduate'
        }
      ]
    }
  }
}
</script>
