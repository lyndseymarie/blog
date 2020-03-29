<template>
    <v-card flat tile>
        <v-container>
            <v-tabs grow slider-color="#ff9999" v-model="tab" background-color="white" light>
			<v-tab class="black--text">Blog</v-tab>
				<v-tab-item class="mt-6">
						<v-card class="d-inline-block mx-auto">
        <v-row dense>
          <v-col cols="12">
            <v-card
              color="#385F73"
              dark
            >
              <v-card-title class="headline">Unlimited music now</v-card-title>
  
              <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>
  
              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
  
          <v-col
            v-for="(item, i) in items"
            :key="i"
            cols="12"
          >
            <v-card
              :color="item.color"
              dark
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
  
                  <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
  
                <v-avatar
                  class="ma-3"
                  size="125"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-col>
        </v-row>
    </v-card>
				</v-tab-item>

			<v-tab class="black--text">Dreams</v-tab>
				<v-tab-item class="mt-6">
				</v-tab-item>

			<v-tab class="black--text">Stories</v-tab>
				<v-tab-item class="mt-6">
						<about-page-content/>
				</v-tab-item>

            <v-tab class="black--text">Yoga</v-tab>
				<v-tab-item class="mt-6">
						<about-page-content/>
				</v-tab-item>

		</v-tabs>
        </v-container>
    </v-card>
</template>

<script>
// import HomePageContent from '@/components/HomePageContent.vue'
// import PostsPageContent from '@/components/PostsPageContent.vue'
import AboutPageContent from '@/components/AboutPageContent.vue'

  export default {
    name: 'posts-page-content',
    data: () => ({
        postsText: 'This is where I\'ll put everything about the different posts I plan to make. I am trying to type a lot just to fill the space. I want to visualize this and be able to compare between the default lorem ipsum and this to make sure I know that I am on a new page',
        items: [
        {
            color: '#1F7087',
            src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            title: 'Supermodel',
            artist: 'Foster the People',
        },
        {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist: 'Ellie Goulding',
        },
        ],
    }),
    components: {
		// HomePageContent,
		// PostsPageContent,
		AboutPageContent
	},

  }
</script>

<style scoped></style>