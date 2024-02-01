<template>
  <div class="user-page">
    <comm-header title="我的"></comm-header>
    <div class="user-msg margin-header" @click="$router.push('/login')">
      <div class="show">
        <div class="avatar">
          <svg class="icon user-default" aria-hidden="true">
            <use xlink:href="#icon-icon-test"></use>
          </svg>
        </div>
        <div class="user">
          <div class="name">
            <span>登录/注册</span>
            <p>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
              </svg>
              <span>暂未绑定手机号</span>
            </p>
          </div>
          <div class="detail">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="wallet">
      <div class="balance">0.00元</div>
      <div class="discounts">0个</div>
      <div class="integral">0分</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CommHeader from '@/components/headers/CommHeader.vue'
</script>

<style scoped lang="scss">
.user-page {
  .user-msg {
    background-color: #3190e8;
    height: 1.8rem;
    display: flex;
    align-items: end;
    .show {
      padding: 0 0.4rem 0.3rem;
      display: flex;
      align-items: center;
      width: 100%;
      .avatar {
        width: 20%;
      }

      .user-default {
        background-color: #f5f5f5;
        border-radius: 50%;
        width: 1.2rem;
        height: 1.2rem;
      }
      .user {
        display: flex;
        margin-left: 0.2rem;
        color: #fff;
        width: 77%;
        align-items: center;
        justify-content: space-between;
        .name {
          display: flex;
          flex-direction: column;
          align-items: start;
          .icon {
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 0;
            margin-right: 0.08rem;
          }
          & > span {
            font-size: 0.4rem;
            font-weight: 800;
            margin-bottom: 0.06rem;
          }
          p {
            margin-left: -0.08rem;
            display: flex;
            align-items: center;
          }
        }

        .detail {
          .icon {
            height: 0.4rem;
            width: 0.4rem;
          }
        }
      }
    }
  }
  .wallet{
    display: flex;
    div{
      width: 33%;
      background-color: #fff;
      height: 1.6rem;
      text-align: center;
      line-height: 80px;
      border-right: 1px solid #f5f5f5;
    }

  }
}
</style>
