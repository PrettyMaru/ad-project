<template> 
    <v-container>
        <v-layout row> 
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3 mt-3">Create Ad</h1>
                    <v-form v-model="valid" ref="form" validation>
                        <v-text-field
                        name="title" 
                        label="Ad Title" 
                        type="text" 
                        v-model="title"
                        :rules="[ v => !!v || 'Title is required']" 
                        >
                        </v-text-field>
                    <v-textarea  
                        name="description" 
                        label="Ad Description" 
                        type="text" 
                        v-model="description"
                        :rules="[ v => !!v || 'Description is required']"
                        class="mb-3" 
                        ></v-textarea>
                    </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>