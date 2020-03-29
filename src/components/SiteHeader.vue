<template>
  <div class="site-header">
	<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Homemade+Apple|Loved+by+the+King|The+Girl+Next+Door&display=swap" rel="stylesheet">
    <v-toolbar flat color="white">
		<v-tabs slider-color="#ff9999" v-model="tab" background-color="white" light>
			<v-tab class="black--text">Home</v-tab>
				<v-tab-item class="mt-6">
						<home-page-content/>
				</v-tab-item>

			<v-tab class="black--text">Posts</v-tab>
				<v-tab-item class="mt-6">
						<posts-page-content/>
				</v-tab-item>

			<v-tab class="black--text">About</v-tab>
				<v-spacer></v-spacer>
				<v-tab-item class="mt-6">
						<about-page-content/>
				</v-tab-item>
				<v-card-title id="header-image">lyndsey marie</v-card-title>
				<v-spacer></v-spacer>

			<v-toolbar-items>
					<v-btn class="nav-btn p-5 black--text" text><a href="https://www.instagram.com/aspynovard/?hl=en" target="_blank">Instagram</a></v-btn>
					<v-btn class="nav-btn p-5" text>Pinterest</v-btn>
			</v-toolbar-items>
		</v-tabs>
    </v-toolbar>
  </div>
</template>

<script>
import HomePageContent from '@/components/HomePageContent.vue'
import PostsPageContent from '@/components/PostsPageContent.vue'
import AboutPageContent from '@/components/AboutPageContent.vue'

export default {
	name: 'site-header',
	components: {
		HomePageContent,
		PostsPageContent,
		AboutPageContent
	},
	// props: {}
	data: () => ({
		tab: null,
		tabs: 3,
	}),
}

</script>

<style>
.testing-card {
	border: 1px solid blue;
}
.site-header {
	max-width: 100%;
}
#header-image {
	font-family: 'Amatic SC', cursive;
	font-size: 4em;
	color: black;
}
#nav-bar {
	width: 100%;
}
#nav-bar ul {
	background-color: white;
	list-style-type: none;
	margin: 0;
	overflow: hidden;
	text-align: center;
	padding: .5em;
}
#nav-bar li {
	display: inline;
	color: #666;
	padding: 2em;
}
#nav-bar li:hover {
	background-color: #F3F3F3;
}
#nav-bar a {
	text-decoration: none;
	color: #F3F3F3;
}
.nav-btn {
	border: none;
}
.nav-btn a {
	text-decoration: none;
}
.nav-btn:hover {
	background-color: #F3F3F3;
	border: none;
}
</style>