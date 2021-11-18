<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3 mt-3">Orders</h1>
                <v-list
      subheader
      two-line
      flat
    >		      
	<v-list-item>
    <v-list-item-action>
        <v-checkbox
        :input-value="active"
        color="primary"
        ></v-checkbox>
        </v-list-item-action>
	<v-list-item-content>
	<v-list-item-title>Notifications</v-list-item-title>
    <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
		<v-btn class="primary">Open</v-btn>
    </v-list-item-action>
    </v-list-item>
</v-list>
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