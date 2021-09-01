"use strict";
function conversationRecode() {
    let conversationList = [];
    const conversation = {
        print(who, say) {
            conversationList.push({
                'state': 'print',
                'who': who,
                'say': say,
            });
        },
        option(who, say, option) {
            conversationList.push({
                'state': 'option',
                'who': who,
                'say': say,
                'option': option,
            });
        },
        makeConversationParagraph() {
            const ConversationParagraph = conversationList;
            conversationList = [];
            return ConversationParagraph;
        }
    };
    const Character = ['sys', 'user'];
    function 前言() {
        conversation.print(Character[0], '你是誰？');
        conversation.print(Character[0], '為什麼要來這裡？');
        conversation.print(Character[1], '這裡是哪裡？');
        conversation.print(Character[0], '我是 C110152351 的代理機器人，你現在在 C110152351 的自傳裡');
        conversation.option(Character[0], '你可以藉由跟我談話更瞭解 C110152351', [
            { say: '談話', goTo: '談話' },
            { say: '離開', goTo: 'leave' },
        ]);
        return conversation.makeConversationParagraph();
    }
    function 談話() {
        conversation.option(Character[0], '好吧！那你得答應我，你不讓其他人知道這裡的存在', [
            { say: '好！我答應你', goTo: '那你想跟我談論什麼' },
            { say: '我沒辦法履行承諾', goTo: 'leave' },
        ]);
        return conversation.makeConversationParagraph();
    }
    function 那你想跟我談論什麼() {
        conversation.option(Character[0], '那你想跟我談論什麼', [
            { say: '談論 家庭狀況', goTo: '家庭狀況' },
            // { say: '談論 學歷', goTo: '學歷' },
            { say: '談論 興趣與成長', goTo: '興趣與成長' },
            // { say: '談論 生活情形', goTo: '生活情形' },
            // { say: '談論 思想與信仰、人生觀', goTo: '思想與信仰與人生觀' },
            // { say: '談論 得失與優點自我檢討', goTo: '得失與優點自我檢討' },
            // { say: '談論 今後抱負與志願', goTo: '今後抱負與志願' },
        ]);
        return conversation.makeConversationParagraph();
    }
    function 家庭狀況() {
        conversation.print(Character[0], '據我所知 C110152351 並不喜歡向別人談論他的家庭');
        conversation.print(Character[0], 'C110152351 認為你無法從家庭裡了解任何關於它的資訊，而且還侵犯隱私');
        conversation.print(Character[0], '所以你確定想要瞭解C110152351的家庭狀況？');
        conversation.print(Character[0], '好吧......既然你都這樣堅持了');
        conversation.print(Character[0], 'C110152351 有 3 個親兄弟，他排行第二');
        conversation.print(Character[0], '媽媽是紙黏土老師，而爸爸從事汽車零件設計');
        conversation.print(Character[0], '哥哥跟他都是大學生，則弟弟是國中生');
        conversation.print(Character[0], '家庭和睦');
        conversation.print(Character[0], 'C110152351 很小的時候就對電子資訊很有興趣');
        conversation.print(Character[0], '甚至還會主動去學習與實作');
        conversation.print(Character[0], '他還有一個很特別之處');
        conversation.print(Character[0], '就是想法與思辨能力都與同年齡的人特殊');
        conversation.print(Character[0], '這些都要功歸於雙親自由多彩的教育環境');
        conversation.option(Character[0], '（沒了）', [
            { say: '繼續談話', goTo: '那你想跟我談論什麼' },
            { say: '離開', goTo: 'leave' },
        ]);
        return conversation.makeConversationParagraph();
    }
    function 學歷() {
        return conversation.makeConversationParagraph();
    }
    function 興趣與成長() {
        conversation.print(Character[0], 'C110152351 從小就很喜歡電子產品');
        conversation.print(Character[0], '我還記得他國小的時候同學之間都在流行玩「賽爾號」或是「摩爾莊園」，它卻對瀏覽器有興趣');
        conversation.print(Character[0], '國中就更誇張了，同學平常的興趣就是在玩「王者榮耀」或是「神魔之塔」，它卻是在玩「Excel」、「PowerPoint」');
        conversation.print(Character[0], '常常在簡報裡塞上百個特效，我都搞不清楚它做的是「投影片」還是「After Effects」了');
        conversation.print(Character[0], '現在他則是趁暑假時間，拼命的閱讀與學習新技術');
        conversation.print(Character[0], '除了嘗試將高職裡所學應用到生活上，還嘗試作出創新');
        conversation.print(Character[0], '就像你現在看得界面一樣，嘗試在自傳裡加入網頁設計與RPG的元素，而且技術全是靠自學一步步做出來');
        conversation.print(Character[0], '我只能說：「種種跡象展現出他對電子產品的熱愛不僅僅侷限於遊戲中，而是超越了興趣，願意花費大量的時間去閱讀相關知識並實作，且熱情依然不減。」            ');
        conversation.option(Character[0], '（沒了）', [
            { say: '繼續談話', goTo: '那你想跟我談論什麼' },
            { say: '離開', goTo: 'leave' },
        ]);
        return conversation.makeConversationParagraph();
    }
    function 生活情形() {
        return conversation.makeConversationParagraph();
    }
    function 思想與信仰與人生觀() {
        return conversation.makeConversationParagraph();
    }
    function 得失與優點自我檢討() {
        return conversation.makeConversationParagraph();
    }
    function 今後抱負與志願() {
        return conversation.makeConversationParagraph();
    }
    function 其他() { }
    function leave() {
        conversation.print(Character[0], '( 休眠中......（●__●）  )');
        return conversation.makeConversationParagraph();
    }
    return {
        get 'init'() { return 前言(); },
        get '前言'() { return 前言(); },
        get '家庭狀況'() { return 家庭狀況(); },
        get '學歷'() { return 學歷(); },
        get '興趣與成長'() { return 興趣與成長(); },
        get '思想與信仰與人生觀'() { return 思想與信仰與人生觀(); },
        get '得失與優點自我檢討'() { return 得失與優點自我檢討(); },
        get '今後抱負與志願'() { return 今後抱負與志願(); },
        get '其他'() { return 其他(); },
        get '那你想跟我談論什麼'() { return 那你想跟我談論什麼(); },
        get '談話'() { return 談話(); },
        get 'leave'() { return leave(); },
        get '生活情形'() { return 生活情形(); },
    };
}
// let sqs = conversationRecode();
console.log(conversationRecode()['那你想跟我談論什麼']);
//# sourceMappingURL=conversation.js.map