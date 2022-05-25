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
    <h3>首次到店</h3>
    <el-row :gutter="12">
        <el-col :span="3">
          <el-card shadow="always">
            <div>当日目标</div>
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日到店
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日达成率
          <div class="statusNum success">100%</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累到店
                <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累环比
                <div class="statusNum danger">100%</div>
          </el-card>
        </el-col>
          <el-col :span="8">
          <el-card shadow="always">
            <div class="monthProgressWrapper">
              <div>
                月度完成进度
                <div class="statusNum">100</div>
              </div>
              <div>

                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>

    <div>
    <h3>新增订单</h3>
    <el-row :gutter="12">
        <el-col :span="3">
          <el-card shadow="always">
            <div>当日目标</div>
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日到店
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日达成率
          <div class="statusNum success">100%</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累到店
                <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累环比
                <div class="statusNum danger">100%</div>
          </el-card>
        </el-col>
          <el-col :span="8">
          <el-card shadow="always">
            <div class="monthProgressWrapper">
              <div>
                月度完成进度
                <div class="statusNum">100</div>
              </div>
              <div>

                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>

    <div>
    <h3>订单交付</h3>
    <el-row :gutter="12">
        <el-col :span="3">
          <el-card shadow="always">
            <div>当日目标</div>
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日到店
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            当日达成率
          <div class="statusNum success">100%</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累到店
                <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累环比
                <div class="statusNum danger">100%</div>
          </el-card>
        </el-col>
          <el-col :span="8">
          <el-card shadow="always">
            <div class="monthProgressWrapper">
              <div>
                月度完成进度
                <div class="statusNum">100</div>
              </div>
              <div>

                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>

    <div>
    <h3>订单退订</h3>
    <el-row :gutter="12">
        <el-col :span="3">
          <el-card shadow="always"  @click.native="handleClick('day')" >
            <div>当日目标</div>
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always"  @click.native="handleClick('day')">
            当日到店
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always"  @click.native="handleClick('day')">
            当日达成率
          <div class="statusNum success">100%</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累到店
                <div class="statusNum">100</div>
          </el-card>
        </el-col>
          <el-col :span="3">
          <el-card shadow="always">
            月累环比
                <div class="statusNum danger">100%</div>
          </el-card>
        </el-col>
          <el-col :span="8">
          <el-card shadow="always">
            <div class="monthProgressWrapper">
              <div>
                月度完成进度
                <div class="statusNum">100</div>
              </div>
              <div>

                <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
              </div>
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>

  <div>
    <h3>保存订单</h3>
    <el-row :gutter="12">
        <el-col :span="3">
          <el-card shadow="always">
            <div>当日目标</div>
            <div class="statusNum">100</div>
          </el-card>
        </el-col>
         
    </el-row>
  </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      handleClick(e) {
        console.log(e)
        this.$router.push({path:'/chart'})
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style scoped>
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

