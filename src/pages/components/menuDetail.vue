<template>
    <div class="menuDetail">
        <div class="topTitle">热卖爆款</div>
        <ul>
            <li v-for="item in toInfor">
                <router-link :to="'/goodsCont/'+item.id+'.html'">
                    <div class="goodsPic">
                        <img :src="item.picture" alt="">
                    </div>
                    <div class="goodsIntro">
                        <div class="title">{{ item.title }}</div>
                        <div class="smalltext textOverflow">{{ item.smalltext }}</div>
                        <div class="price">￥{{ item.price }}</div>
                        <div class="vipPrice">￥{{ item.vipPrice }} <span class="vipText">会员价</span></div>
                        <siv class="el-icon-shopping-cart-1"></siv>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "menuDetail",
        data() {
            return {}
        },
        props: {
            toInfor: {
                type: Array,
                default: function () {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .topTitle{
        padding: 0.2rem;
        text-align: left;
        color: #999;
        font-size: 0.3rem;
    }
    .menuDetail ul{
        padding-bottom: 1rem;
    }
    .menuDetail ul li {
        border-top: 1px solid #eee;
    }
    .menuDetail ul li a{
        padding-top: 0.1rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: left;
    }
    .goodsPic{
        padding-left: 0.2rem;
        width: 1.4rem;
        height: 2rem;
        margin-right: 0.2rem;
    }
    .goodsPic img{
        width: 100%;
        height: 100%;
    }
    .goodsIntro{
        text-align: left;
        padding-left: 0.2rem;
        padding-top: 0.1rem;
        width: 3.5rem;
        position: relative;
    }
    .textOverflow{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .goodsIntro .title{
        font-size: 0.3rem;
        height: 0.4rem;
    }
    .goodsIntro .smalltext{
        color: #999;
        height: 0.4rem;
        font-size: 0.25rem;
    }
    .goodsIntro .price{
        color: #42b983;
        padding-top: 0.3rem;
        font-weight: bold;
    }
    .goodsIntro .vipPrice{
        font-size: 0.26rem;
        color: #999;
    }
    .goodsIntro .el-icon-shopping-cart-1{
        width: 0.6rem;
        height: 0.6rem;
        font-size: 0.4rem;
        text-align: center;
        line-height: 0.6rem;
        border-radius: 50%;
        background: #42b983;
        color: #fff;
        position: absolute;
        right: 0.2rem;
        bottom: 0.1rem;
    }
    .vipPrice .vipText{
        display: inline-block;
        font-size: 0.15rem;
        background: #42b983;
        width: 0.8rem;
        text-align: center;
        color: #fff;
        margin-bottom: 0.2rem;
    }
</style>