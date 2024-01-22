<template>
  <div class="shop-list">
    <ul>
      <li v-for="merchant in merchantList" :key="merchant.id">
        <img :src="`http://elm.cangdu.org/img/${merchant.image_path}`" alt="" />
        <div class="mes">
          <div class="one-line">
            <div class="left">
              <span class="pinpai">品牌</span>
              <h3 class="name">{{ merchant.name }}</h3>
            </div>
            <div class="right">
              <ul>
                <li v-for="item in '保准票'" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>
          <div class="two-line">
            <div class="left">
              <div class="star">
                <el-rate
                  class="star-elm"
                  v-model="merchant.rating"
                  disabled
                  show-score
                  text-color="#ff9900"
                  size="small"
                />
              </div>
              <span class="sales">月售{{ merchant.recent_order_num }}单</span>
            </div>
            <div class="right">
              <div class="zhuansong">蜂鸟专送</div>
              <div class="zhunshida">准时达</div>
            </div>
          </div>
          <div class="three-line">
            <div class="left">
              <span>￥20起送 / {{ merchant.piecewise_agent_fee.tips }}</span>
            </div>
            <div class="right">
              <span class="km">{{ merchant.distance }}</span>
              &nbsp; / &nbsp;
              <span class="time">{{ merchant.order_lead_time }}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { merchantList } = defineProps(['merchantList'])
</script>

<style scoped lang="scss">
.shop-list {
  //margin-top: 0.3rem;

  ul {
    li {
      display: flex;
      padding: 0.3rem 0;
      border-bottom: 0.02rem solid #f5f5f5;
      img {
        width: 1.5rem;
        height: 1.5rem;
      }
      .mes {
        display: flex;
        flex-direction: column;
        width: 80%;
        padding-left: 0.12rem;

        .one-line,
        .two-line,
        .three-line {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .left {
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .right {
            display: flex;
            justify-content: space-between;
          }
        }
        .one-line {
          .left {
            .name {
              width: 2.4rem;
              overflow: hidden;
              white-space: nowrap; /* 防止文字换行 */
              text-overflow: ellipsis; /* 超出部分显示省略号 */
            }
            span {
              width: 0.8rem;
              height: 0.44rem;
              text-align: center;
              background-color: #ffd930;
              font-size: 0.28rem;
              padding: 0 0.04rem;
            }
            h3 {
              font-weight: 800;
              margin-left: 0.12rem;
            }
          }
          .right {
            ul {
              display: flex;
              transform: scale(0.8);
              li {
                border: 0.02rem solid #ccc;
                margin-left: 0.04rem;
                width: 0.48rem;
                height: 0.48rem;
                padding: 0.04rem;
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }

        .two-line {
          .left {
            //width: 50%;
            .star {
              .star-elm:deep(.el-rate__item) {
                width: 0.3rem;
                height: 0.3rem;
                margin-right: -0.08rem;
              }
              .star-elm:deep(.el-rate__text) {
                margin-left: 0.08rem;
              }
            }
            .sales {
              font-size: 0.24rem;
            }
            span {
              margin-left: 0.08rem;
            }
          }
          .right {
            margin-right: -0.48rem;

            transform: scale(0.6);
            .zhuansong {
              background-color: #3190e8;
              color: #fff;
              padding: 0.04rem 0.06rem;
              border-radius: 0.1rem;
            }
            .zhunshida {
              border: 0.02rem solid #3190e8;
              color: #3190e8;
              padding: 0 0.06rem;
              margin-left: 0.08rem;
            }
          }
        }

        .three-line {
          align-items: center;
          .left {
            font-size: 0.24rem;
          }
          .right {
            font-size: 0.2rem;

            .time {
              color: #3190e8;
            }
          }
        }
      }
    }
  }
}
</style>
