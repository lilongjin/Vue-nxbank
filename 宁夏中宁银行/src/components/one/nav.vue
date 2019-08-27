<template>
    <div class="navs">
        <div class="nav_list">
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'home'}" class="nav-link">首页</router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'wenhua'}" class="nav-link">{{nav.wenhua.title}}
                    <ul>
                        <li v-for="item in nav.wenhua.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'hangye'}" class="nav-link">{{nav.hangye.title}}
                    <ul>
                        <li v-for="item in nav.hangye.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'shehui'}" class="nav-link">{{nav.shehui.title}}
                    <ul>
                        <li v-for="item in nav.shehui.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'bianming'}" class="nav-link">{{nav.bianming.title}}
                    <ul>
                        <li v-for="item in nav.bianming.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'qiye'}" class="nav-link">{{nav.qiye.title}}
                    <ul>
                        <li v-for="item in nav.qiye.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'xiuxian'}" class="nav-link">{{nav.xiuxian.title}}
                    <ul>
                        <li v-for="item in nav.xiuxian.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'tousu'}" class="nav-link">{{nav.tousu.title}}
                    <ul>
                        <li v-for="item in nav.tousu.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
            <div class="nav_list_content">
                <router-link tag="div" :to="{name:'guanyu'}" class="nav-link">{{nav.guanyu.title}}
                    <ul>
                        <li v-for="item in nav.guanyu.level">{{item.title}}</li>
                    </ul>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nav: {
                  wenhua:{
                    level:[]
                  },
                  hangye:{
                    level:[]
                  },
                  shehui:{
                    level:[]
                  },
                  bianming:{
                    level:[]
                  },
                  qiye:{
                    level:[]
                  },
                  xiuxian:{
                    level:[]
                  },
                  tousu:{
                    level:[]
                  },
                  guanyu:{
                    level:[]
                  },
                }
            }
        },
        created: function () {
            this.getData();
        },
        methods: {
            getData() {
                this.$http.get('http://www.nxqybank.com/pc/index.php/Index/navs').then(response => {
                    this.nav = response.data.nav;
//                    console.log("获取数据成功");
//                    console.log(response.data);
//                    console.log(this.nav);
                }, response => {
//                    console.log("数据加载失败");
                })
            },
        }
    }
</script>
<style lang="less" scoped>
    @border: 1px solid #FE9600;
    @color: #FE9600;
    @color1: #005BB9;
    @size: 14px;
    .navs {
        width: 100%;
        min-width: 1400px;
        position: absolute;
        top: 10rem;
        left: 0;
        z-index: 3;
        border-bottom: 1px solid white;
        background: rgba(255, 255, 255, 0.5);
        .router-link-active {
            border-bottom: 2px solid @color;
            color: @color;
        }
        .nav_list {
            width: 70%;
            height: 4rem;
            float: left;
            margin-left: 15%;
            .nav_list_content {
                width: 11.11%;
                height: 100%;
                float: left;
                box-sizing: border-box;
                text-align: center;
                font-size: 14px;
                color: #333333;
                .nav-link {
                  width: 100%;
                  height: 100%;
                  padding: 0;
                  line-height: 4rem;
                  cursor: pointer;
                  position: relative;
                  font-size: 19px;
                  font-weight: 600;
                    ul {
                        position: absolute;
                        width: 100%;
                        top: 4rem;
                        background-color: #f6f6f6;
                        color: #333;
                        display: none;
                        li {
                            list-style: none;
                            text-align: center;
                            line-height: 3rem;
                            border-bottom: 1px solid white;
                          font-size: 15px;
                            &:hover {
                                color: @color;
                            }
                        }
                    ;
                        li:last-child {
                            border: none;
                        }
                    }
                ;
                    &:hover ul {
                        display: block;
                    }
                }
            }
        }
    }
</style>
