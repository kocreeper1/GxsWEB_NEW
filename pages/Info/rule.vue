<template>
    <section class="s3" id="s3">
        <div class="content">

            <div class="title">
                <span>伺服器規則</span>
            </div>

            <!-- <Line /> -->
            
            <div class="box">
                <div class="text">
                    <span>◉ 請勿騷擾​任何玩家(包括管理員)</span>
                    <span>◉ 禁止一切抄家偷竊等行為</span>
                    <span>◉ 禁止紅石連閃器</span>
                    <span>◉ 絕對絕對絕對禁止玩家使用非法程式、修改客戶端以及使用BUG來進行遊戲，抓到直接送你飛機票</span>
                    <span>◉ 伺服器管理員最大，有一切規則解釋和臨時修改及增加的權力，以保證伺服器穩定運作，如不配合，就請離開本伺服器</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.s3 {
    // background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('@/assets/img/gif.gif') no-repeat;
    background-color: #ffffff;
    // background-size: cover;
    // background-position: 50%;
    // background-attachment: fixed;
    color: #333333;
    height: 400px;
    display: flex;
    justify-content: center;
    // align-items: center;


    .content {
        gap: 30px;
        // width: 1028px;
        width: 100%;
        display: flex;
        /* 將內容以垂直方向排列 */
        flex-direction: column;
        align-items: center;
        .title {
            background: url('@/assets/img/rule.gif') no-repeat;
            background-size: cover;
            background-position: 50%;
            height: 150px;
            width: 100%;
            font-size: 40px;
            
            span{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                color: rgb(255, 255, 255, 0.9);
                
                height: 100%;
                width: 100%;
                font-weight: bold;
            }
        }

        .box{
            box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
            padding: 10px;
        }
    
        .text {
            width: 1028px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            height: auto;
            text-align: left;
        }

    }




}
</style>