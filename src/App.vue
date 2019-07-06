<template>
    <div id="app">
        <router-view/>
        <page-footer />
    </div>
</template>

<script>
    //iphone6下 1rem = 50px
    function htRem() {
        var ww = document.documentElement.clientWidth;
        if (ww > 750) {
            ww = 750;
        }
        document.documentElement.style.fontSize = ww / 7.5 + "px";

    }
    htRem();
    window.onresize = function() {
        htRem();
    };

    import pageFooter from './components/el-footer'

    export default {
        name: 'App',
        data(){
            return{

            }
        },
        components:{
            pageFooter
        }
    }


</script>

<style>
    body{
        background: #fff;
    }
    body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        color: #333;
        font-size: 16px;
    }
    table{
        border-collapse:collapse;
    }
    body {
        font-family: "Microsoft YaHei";
    }

    ul, li {
        list-style: none;
    }

    a,a:hover,a:active,a:visited,a:link,a:focus{
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
        outline:none;
        background: none;
        text-decoration: none;
    }
    input, textarea {
        outline: none;
        box-shadow: none;
    }

    textarea {
        resize: none;
        overflow: auto;
    }

    .clearfix {
        zoom: 1;
    }

    .clearfix:after {
        content: ".";
        width: 0;
        height: 0;
        visibility: hidden;
        display: block;
        clear: both;
    }

    .fl {
        float: left
    }

    .fr {
        float: right
    }

    .tl {
        text-align: left;
    }

    .tc {
        text-align: center
    }

    .tr {
        text-align: right;
    }

    .ellipse {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>



