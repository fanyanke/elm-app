<template>
  <div class="shop-page">
    <comm-header backColor="rgba(119, 103, 137, 0.43)"></comm-header>
    <div class="message margin-header">
      <img
        class="backImg"
        :src="`http://elm.cangdu.org/img/${merchantStore.merchantDetail.image_path}`"
        alt=""
      />
      <div class="main-msg">
        <img
          class="logo"
          :src="`http://elm.cangdu.org/img/${merchantStore.merchantDetail.image_path}`"
          alt=""
        />
        <div class="test-msg">
          <span class="title">{{ merchantStore.merchantDetail.name }}</span>
          <span class="service"
            >商家配送／{{
              merchantStore.merchantDetail.order_lead_time
                ? merchantStore.merchantDetail.order_lead_time
                : 30
            }}分钟送达／{{
              merchantStore.merchantDetail.piecewise_agent_fee?.tips
            }}</span
          >
          <span class="affiche">{{
            merchantStore.merchantDetail.promotion_info
          }}</span>
        </div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou-copy"></use>
        </svg>
      </div>
      <div class="activity" v-if="activities?.length != 0">
        <span class="txt" v-if="activities">
          {{ activities[0].description }}（APP专享）
        </span>
        <span class="txt" v-else> 暂无活动 </span>
        <div class="detail">
          <span>{{ activities?.length }}个活动</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou-copy"></use>
          </svg>
        </div>
      </div>
      <div class="activity" v-else>暂无活动</div>
    </div>
    <div class="show-type">
      <div class="active"><span>商品</span></div>
      <div><span>评价</span></div>
    </div>
    <div class="food-container">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="2">
          <span>Two</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>Two</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>Two</span>
        </el-menu-item>
      </el-menu>
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CommHeader from '@/components/headers/CommHeader.vue'
import { useRoute } from 'vue-router'
import { useMerchantStore } from '@/stores/merchant'

const route = useRoute()
const merchantStore = useMerchantStore()
let geohash = route.query.geohash.split(',')
let latitude = geohash[0]
let longitude = geohash[1]

let activities = ref([])

const xxx = async () => {
  await merchantStore.getMerchantDetail(route.query.id, { latitude, longitude })
  activities.value = merchantStore.merchantDetail.activities
}

xxx()
</script>

<style scoped lang="scss">
.shop-page {
  height: 100%;
  .message {
    position: relative;
    background-color: rgba(119, 103, 137, 0.43);
    padding-bottom: 0.2rem;
    .backImg {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      filter: blur(0.2rem);
    }
    .main-msg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #fff;

      .logo {
        width: 1.4rem;
        height: 1.4rem;
        margin-left: 0.4rem;
        margin-right: 0.2rem;
      }

      .test-msg {
        display: flex;
        flex-flow: column;
        width: 60%;
        span {
          font-size: 0.24rem;
        }
        .title {
          font-size: 0.4rem;
          font-weight: 800;
        }
        .service {
          margin: 0.16rem 0;
        }

        .affiche {
          overflow: hidden;
          white-space: nowrap; /* 防止文字换行 */
          text-overflow: ellipsis; /* 超出部分显示省略号 */
        }
      }
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        margin-left: 0.4rem;
      }
    }
    .activity {
      color: #fff;
      padding: 0.08rem 0.4rem;
      font-size: 0.22rem;
      height: 0.5rem;
      line-height: 0.4rem;
      display: flex;
      justify-content: space-between;
      padding-right: 0.1rem;

      .detail {
        display: flex;
        align-items: center;
        span {
          margin-right: 5px;
        }
        .icon {
          height: 0.4rem;
          width: 0.4rem;
        }
      }
    }
  }
  .show-type {
    display: flex;
    justify-content: space-around;
    height: 1rem;
    background-color: #fff;
    align-items: center;
    border-bottom: 1px solid #ccc;
    div {
      height: 50%;
      padding: 0 5px;
    }

    .active {
      color: #3190e8;
      border-bottom: 1px solid #3190e8;
    }
  }
  .food-container {
    display: flex;
    justify-content: space-between;
    .el-menu-vertical-demo {
      width: 20%;
    }
    .box-card {
      width: 80%;
      border: none;
      .card-header {
      }
    }
  }
}
</style>
