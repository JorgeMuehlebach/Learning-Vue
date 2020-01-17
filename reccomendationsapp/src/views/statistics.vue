<template>
  <div class="statistics">
    <h1>Reccomendation Statistics</h1>
    <div class="mx-8 my-8">
      <column-chart width = '400' :data="chartData"></column-chart>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'statistics',
  data() {
    return {
      chartData : {
        '2017-05-12': 2,
        '2018-04-12': 3,
        '2018-05-10': 4,
        '2018-05-9': 2
      }
    }
  }

}

</script>
