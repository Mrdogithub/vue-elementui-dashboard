<template>
  <div class="app-container">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="大区">
      <el-select v-model="formInline.region" placeholder="大区">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="小区">
      <el-select v-model="formInline.region" placeholder="小区">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="车系">
      <el-select v-model="formInline.region" placeholder="车系">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
      <el-form-item label="日期">
      <el-date-picker
     
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>

  <div>


    <el-row :gutter="8" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <line-chart :chart-data="lineChartData"/>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <line-chart  :chart-data="lineChartData"/>
        </div>
      </el-col>

    </el-row>

    <el-row :gutter="8" style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
             <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
           <line-chart :chart-data="lineChartData" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <line-chart  :chart-data="lineChartData"/>
        </div>
      </el-col>
          </el-row>
  </div>

  <div>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="大区"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="首次到店"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="月累到店">
      </el-table-column>
         <el-table-column
        prop="address"
        label="当日新增订单">
      </el-table-column>
         <el-table-column
        prop="address"
        label="月累新增订单">
      </el-table-column>
         <el-table-column
        prop="address"
        label="当日追订">
      </el-table-column>
         <el-table-column
        prop="address"
        label="月累追订">
      </el-table-column>
         <el-table-column
        prop="address"
        label="当日交车">
      </el-table-column>
         <el-table-column
        prop="address"
        label="月累交车">
      </el-table-column>
         <el-table-column
        prop="address"
        label="留存订单">
      </el-table-column>
    </el-table>
  </div>

  </div>
</template>

<script>
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
  export default {
      components: {
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
  },
    data() {
      return {
            lineChartData: lineChartData.newVisitis,
        formInline: {
          user: '',
          region: ''
        },
        tableData: [{
            date: '东区',
            name: '33',
            address: '423'
          }, {
            date: '东区',name: '33',
            address: '423'
          }, {
            date: '东区',name: '33',
            address: '423'
          }, {
            date: '东区',name: '33',
            address: '423'
          }]
      }
    },
    methods: {
          handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
.danger{
  color:#F56C6C
}
.success{
  color:#67C23A
}
.statusNum{
  margin-top: 15px;
}
.line{
  text-align: center;
}
.monthProgressWrapper{
  display: flex;
  flex-direction: row;
}
.monthProgressWrapper div:first{
  flex: 100px auto;
}
.monthProgressWrapper div:last-child{
  flex: 1 auto;
  align-self: center;
  margin-left: 20px;
}
</style>

