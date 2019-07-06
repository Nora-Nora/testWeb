<template>
    <div class="manuPage">
        <div class="title">
            分类
        </div>
        <input type="text" placeholder="搜索" id="search">
        <div class="menuContent">
            <div class="leftCont">
                <ul>
                    <li v-for="(item,index) in goods" @click="getIndex(index)" :class="{'active':index==inforIndex}">
                        <a href="javascript:;">{{ item.type }}</a>
                    </li>
                </ul>
            </div>
            <div class="rightCont">
                <menuDetail :toInfor='goods[inforIndex].goodsList' />
            </div>
        </div>
    </div>
</template>

<script>
    import menuDetail from './components/menuDetail'

    export default {
        name: "menu",
        data() {
            return {
                inforIndex:0,
                goods: [
                    {
                        type: '618特价',
                        id: 0,
                        goodsList: [
                            {
                                title: '618特价1',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 1
                            },
                            {
                                title: '618特价2',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 2
                            },
                            {
                                title: '618特价3',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 3
                            },
                            {
                                title: '618特价4',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 4
                            }
                        ]
                    },
                    {
                        type: '新鲜蔬菜',
                        id:1,
                        goodsList: [
                            {
                                title: '新鲜蔬菜1',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 5
                            },
                            {
                                title: '新鲜蔬菜2',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 6
                            },
                            {
                                title: '新鲜蔬菜3',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 7
                            },
                            {
                                title: '新鲜蔬菜4',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 8
                            }
                        ]
                    },
                    {
                        type: '时令水果',
                        id:2,
                        goodsList: [
                            {
                                title: '苹果',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 9
                            },
                            {
                                title: '苹果',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 10
                            },
                            {
                                title: '苹果',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 11
                            },
                            {
                                title: '苹果',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 12
                            }
                        ]
                    },
                    {
                        type: '海鲜水产',
                        id:3,
                        goodsList: [
                            {
                                title: '海鲜水产1',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 13
                            },
                            {
                                title: '海鲜水产2',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 14
                            },
                            {
                                title: '海鲜水产3',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 15
                            },
                            {
                                title: '海鲜水产4',
                                picture:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2555923582.webp',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 16
                            }
                        ]
                    },
                    {
                        type: '休闲零食',
                        id:4,
                        goodsList: [
                            {
                                title: '零食1',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 17
                            },
                            {
                                title: '零食2',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 18
                            },
                            {
                                title: '零食3',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 19
                            },
                            {
                                title: '休闲零食',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 20
                            },
                            {
                                title: '休闲零食',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 21
                            },
                            {
                                title: '休闲零食',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 22
                            },
                            {
                                title: '休闲零食',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 23
                            },
                            {
                                title: '休闲零食',
                                picture:'https://image.17317.com//d/file/titlepic/games/ios/2019/04/22/15/y0owby4rxbt.jpg',
                                smalltext: '超级新鲜的苹果超级新鲜的苹果',
                                price: 38,
                                vipPrice: 28,
                                id: 24
                            }
                        ]
                    }
                ]
            }
        },
        components: {
            menuDetail
        },
        methods:{
            getIndex(num){
                this.inforIndex = num;
            }
        }
    }
</script>

<style scoped>
    .manuPage {
        text-align: center;
        vertical-align: middle;
    }
    .manuPage .title {
        padding: 0.2rem 0.4rem;
        font-size: 0.35rem;
        text-align: left;
    }
    #search {
        width: 4rem;
        height: 0.5rem;
        width: 90%;
        border: none;
        background: #f6f6f6;
        margin: 0.2rem auto;
        border-radius: 0.1rem;
        text-align: center;
        font-size: 0.25rem;
    }

    .menuContent {
        display: flex;
        justify-content: left;
        background: #f8f8f8;
    }

    .menuContent .leftCont {
        width: 30%;
        height: 11rem;
        overflow: scroll;
    }

    .menuContent .leftCont ul li {
        padding: 10px 0;
    }

    .menuContent .leftCont ul li.active {
        background: #fff;
        color: #000;
        font-weight: bold;
    }
    .menuContent .leftCont ul li.active a{
        display: block;
        width: 100%;
        border-left: 0.1rem solid #42b983;
    }

    .rightCont {
        background: #fff;
        width: 70%;
        height: 11rem;
        overflow: scroll;
    }
</style>