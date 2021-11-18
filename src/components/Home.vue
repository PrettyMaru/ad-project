<template>
    <div>
        <v-container fluid>
            <v-layout row> 
                <v-flex xs12>
                    <v-carousel>
                        <v-carousel-item></v-carousel-item>
                    </v-carousel>    
                </v-flex>
            </v-layout> 
        </v-container>
        <v-container>
            <v-layout row> 
                <v-flex xs12>
                    <v-card>
                        <v-img
                        height="200px"
                        ></v-img>
                        <v-card-title primary-title>
                        <div>
                            <h3 
                            class="headline mb0"
                            >Здесь будет заголовок</h3>
                            <div>Здесь будет описание</div>
                        </div>
                        </v-card-title>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text>Open</v-btn>
                        <v-btn raised color="primary">
                            Buy
                        </v-btn>
                        </v-card-actions>				
                    </v-card>
                    </v-flex>
            </v-layout> 
        </v-container>
        </div>    
</template>

<script>
export default {
    data () { 
		return {
			ads:[
			{
				title:"First",
				desc:"First Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Thitd Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
				id:"4"
			}

			]
		} 	
	}
} 
</script>
