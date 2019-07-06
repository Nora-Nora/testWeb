<template>
    <div class="footer">
        <el-row class="footerList">
            <el-col :span="6" class="footerItem">
                <router-link to="/" active-class="active" exact><span class="el-icon-food"></span><br>首页</router-link>
            </el-col>
            <el-col :span="6" class="footerItem">
                <router-link to="/menu" active-class="active"><span class="el-icon-menu"></span><br>分类</router-link>
            </el-col>
            <el-col :span="6" class="footerItem">
                <router-link to="/shoppingCart" active-class="active"><span class="el-icon-shopping-cart-1"></span><br>购物车</router-link>
            </el-col>
            <el-col :span="6" class="footerItem">
                <router-link to="/user" active-class="active"><span class="el-icon-user"></span><br>我的</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "el-footer"
    }
</script>

<style scoped>
    .footer {
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        padding: 0.1rem 0;
        border-top: 1px solid #eee;
        background: #fff;
    }
    .footerItem{
        text-align: center;
        font-size: 0.4rem;
    }
    .footerItem span {
        font-size: 0.5rem;
    }
    .footerItem .active,.footerItem .active span{
        color: #42b983;
    }
</style>