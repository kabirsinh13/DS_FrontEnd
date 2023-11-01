<template>

  <v-tooltip>
      <template v-slot:activator="{props}">
          <v-text v-bind="props">
             <slot></slot>
          </v-text>
      </template>
  </v-tooltip>

</template>


<script>

export default{
}
</script>