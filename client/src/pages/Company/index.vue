<template>
  <div class="company">
    <company-header />
    <skill />
    <mian-jing />
    <practice />
    <campus />
  </div>
</template>

<script>
import CompanyHeader from './CompanyHeader'
import Skill from './Skill'
import MianJing from './MianJing'
import Practice from './Practice'
import Campus from './Campus'

export default {
  name: 'Company',
  components: {
    CompanyHeader,
    Skill,
    MianJing,
    Practice,
    Campus
  },
  data () {
    return {}
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.company {
  min-width: 1000px;
}
</style>
