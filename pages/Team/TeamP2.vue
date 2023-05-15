<template>
    <section class="team">
        <div class="title">
            <span>Gxs團隊</span>
        </div>
        <div class="all">
            <div class="lun">
                <img src="@/assets/img/lun.png" alt="這是圖片的說明文字" width="350" height="350">
                <div class="text">
                    <div class="name">
                        <span>【伺服主】</span>
                        <span>阿倫</span>
                    </div>
                    <span>架設伺服器、程式設計、架設網站、設計</span>
                    <p>
                        我們想要經營的伺服器並不是像其他伺服器一樣，大家各自玩各自的，我們想要大家都玩在一起，大家都可以交朋友，所以我跟管理員也會在遊戲內陪大家玩，我們也都玩得很瘋
                        總而言之~~歡迎進來交朋友，一起研究模組!!
                    </p>
                </div>
            </div>
            <div class="ky">
                <img src="@/assets/img/ky.png" alt="這是圖片的說明文字" width="350" height="350">
                <div class="text">
                    <div class="name">
                        <span>【管理員】</span>
                        <span>阿賢</span>
                    </div>
                    <span>管理玩家、面試、交流、活動辦理、表單管理</span>
                    <p>
                        為了促進大家的交流或者為伺服器增加一點色彩，可以盡量找我，有任何需要反應或溝通的事情，也可以與我配合
                    </p>
                </div>
            </div>
            <div class="yh">
                <img src="@/assets/img/yyyyyh.png" alt="這是圖片的說明文字" width="350" height="350">
                <div class="text">
                    <div class="name">
                        <span>【管理員】</span>
                        <span>兔子</span>
                    </div>
                    <span>管理玩家、技術支援、程式設計</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.team {
    background-color: #1C1C1C;
    background-size: cover;
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
        font-size: 7vmin;
    }

    span:nth-child(1) {
        display: flex;
        justify-content: center;
    }

    .all {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 60px;
    }

    .lun {
        display: flex;
        gap: 15px;
        align-items: center;
        flex-direction: column;
        width: 370px;


        .text {
            display: flex;
            gap: 10px;
            flex-direction: column;

            .name {
                display: flex;
                font-size: 25px;
                justify-content: center;

                span:nth-child(1) {
                    color: #FFA64D;
                }

                span:nth-child(2) {
                    color: #9cce06;
                }

            }

            p {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }

    .ky {
        display: flex;
        gap: 15px;
        align-items: center;
        flex-direction: column;
        width: 370px;

        .title {
            font-size: 7vmin;
        }

        span:nth-child(1) {
            display: flex;
            justify-content: center;
        }

        .all {
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 30px;
        }

        .text {
            display: flex;
            gap: 10px;
            flex-direction: column;

            .name {
                display: flex;
                font-size: 25px;
                justify-content: center;

                span {
                    color: #26c9ff;
                }
            }

            p {
                font-size: 14px;
                color: rgba(255, 255, 255, 0.5);
            }
        }
    }

    .yh {
        display: flex;
        gap: 15px;
        align-items: center;
        flex-direction: column;
        width: 370px;

        .title {
            font-size: 7vmin;
        }

        span:nth-child(1) {
            display: flex;
            justify-content: center;
        }

        .all {
            display: flex;
            width: 100%;
            justify-content: center;
            gap: 30px;
        }

        .text {
            display: flex;
            gap: 10px;
            flex-direction: column;

            .name {
                display: flex;
                justify-content: center;
                font-size: 25px;

                span {
                    color: #26c9ff;
                }
            }

            p {
                font-size: 14px;
            }
        }
    }



}
</style>