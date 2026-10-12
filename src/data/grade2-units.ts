import type { Unit } from './types'

export const grade2Units: Unit[] = [
  {
    id: 'g2-01',
    grade: 2,
    title: '助動詞 must / have to',
    subtitle: '「〜しなければならない」義務の表現',
    category: '助動詞',
    sections: [
      {
        heading: 'must は強い義務',
        body: [
          'must は「〜しなければならない」という義務を表す助動詞です。can と同じように、主語が誰でも must の形は変わらず、あとには動詞の原形を置きます。「You must study hard.（あなたは一生懸命勉強しなければなりません）」のように、規則や強い必要性を表すときに使われます。',
          'must not（mustn\'t）は「〜してはいけない」という禁止を表します。「You must not smoke here.（ここでたばこを吸ってはいけません）」のように、禁止の意味で使われる must not は、義務の否定ではなく「禁止」という強い意味になる点に注意しましょう。',
        ],
        examples: [
          { en: 'You must finish your homework.', ja: 'あなたは宿題を終えなければなりません。' },
          { en: 'We must get up early tomorrow.', ja: '私たちは明日早く起きなければなりません。' },
          { en: 'You must not run in the hallway.', ja: '廊下を走ってはいけません。' },
        ],
        tip: 'must は「義務」、must not は「禁止（〜してはいけない）」。not をつけると意味が「义务の否定」ではなく「禁止」に変わります。',
      },
      {
        heading: 'have to も「〜しなければならない」',
        body: [
          'have to も must と同じく「〜しなければならない」を表します。違いは、have to が一般動詞のようにふるまうことです。主語が三人称単数のときは has to になり、否定文は don\'t / doesn\'t have to、疑問文は Do / Does を使って作ります。must が話し手の気持ちの義務であるのに対し、have to は外部の状況からくる必要性を表す傾向があります。',
          'なお、must not（〜してはいけない）と don\'t have to（〜する必要はない）は意味がまったく違います。must not は禁止、don\'t have to は不要（しなくてもよい）です。この対比は入試でもよく問われるポイントです。',
        ],
        table: {
          caption: 'must と have to の形の違い',
          headers: ['文の種類', 'must', 'have to'],
          rows: [
            ['肯定文（三人称単数）', 'He must go.', 'He has to go.'],
            ['否定文', 'must not（禁止）', 'don\u2019t / doesn\u2019t have to（不必要）'],
            ['疑問文', 'Must I go?', 'Does he have to go?'],
          ],
        },
        examples: [
          { en: 'She has to clean her room.', ja: '彼女は部屋を掃除しなければなりません。' },
          { en: 'I don\u2019t have to get up early on Sunday.', ja: '私は日曜日に早く起きる必要はありません。' },
          { en: 'Do you have to go now?', ja: 'あなたは今行かなければなりませんか。' },
        ],
        tip: 'must not＝禁止、don\u2019t have to＝しなくてもよい。この2つを混同しないように注意。',
      },
    ],
    keyPoints: [
      'must ＋ 動詞の原形で「〜しなければならない」',
      'must not は「〜してはいけない（禁止）」',
      'have to / has to も同じ意味だが、一般動詞のように使う',
      'don\u2019t have to は「〜する必要はない（しなくてもよい）」',
    ],
    quiz: [
      {
        q: '「ここで写真を撮ってはいけません」という英文として正しいものはどれですか。',
        options: ['You don\u2019t have to take pictures here.', 'You must not take pictures here.', 'You can\u2019t have to take pictures here.', 'You must take pictures here.'],
        answer: 1,
        explanation: '「〜してはいけない」は must not です。don\u2019t have to は「〜する必要はない」という意味になります。',
      },
      {
        q: 'She（　）go to the hospital. （彼女は病院へ行かなければなりません）の（　）に入る適切な語はどれですか。',
        options: ['have to', 'has to', 'must to', 'to have'],
        answer: 1,
        explanation: '主語が She（三人称単数）なので has to を使います。',
      },
      {
        q: 'must のあとに置く動詞の形はどれですか。',
        options: ['原形', 'ing 形', '過去形', 's つきの形'],
        answer: 0,
        explanation: 'must は助動詞なので、直後には動詞の原形を置きます。',
      },
    ],
  },
  {
    id: 'g2-02',
    grade: 2,
    title: '助動詞 should / may / could ほか',
    subtitle: '助言・許可・依頼などを表す助動詞',
    category: '助動詞',
    sections: [
      {
        heading: 'should は「〜すべきだ」',
        body: [
          'should は「〜したほうがよい」という助言や、「〜するはずだ」という当然の予想を表す助動詞です。must ほど強くはなく、アドバイスのニュアンスで使われます。「You should rest.（休んだほうがよいですよ）」のように、相手にアドバイスするときの定番表現です。',
          '否定形 should not（shouldn\'t）は「〜しないほうがよい」という止める助言です。「You shouldn\'t eat too much candy.（キャンディーを食べすぎないほうがよいですよ）」のように使います。Why don\'t you 〜?（〜したらどうですか）と同じような場面で使われることも多く、会話で非常に便利な表現です。',
        ],
        examples: [
          { en: 'You should drink more water.', ja: 'あなたはもっと水を飲んだほうがよいです。' },
          { en: 'He should apologize to her.', ja: '彼は彼女に謝るべきです。' },
          { en: 'You shouldn\u2019t stay up late.', ja: '夜更かしをしないほうがよいですよ。' },
        ],
        tip: 'should は「〜したほうがよい」というやわらかい助言。must の「絶対しなければ」より軽い命令です。',
      },
      {
        heading: 'may は許可・推量',
        body: [
          'may には主に2つの使い方があります。ひとつは「〜してもよい」という許可を与える使い方で、「May I open the window?（窓を開けてもよいですか）」のように許可を求める疑問文もよく使われます。もうひとつは「〜かもしれない」という推量の使い方で、「It may rain tomorrow.（明日は雨が降るかもしれません）」のように不確実な予想を表します。',
          '許可を表す may の否定は may not「〜してはいけません」です。また、許可の意味では Can I 〜? を使うことも多く、May I 〜? のほうがより丁寧という違いがあります。',
        ],
        examples: [
          { en: 'May I come in?', ja: '入ってもよいですか。' },
          { en: 'You may use my pen.', ja: '私のペンを使ってもよいですよ。' },
          { en: 'It may snow this evening.', ja: '今夕は雪が降るかもしれません。' },
        ],
        tip: 'May I 〜? ＝「〜してもよいですか」（丁寧な許可の要求）。it may 〜 ＝「〜かもしれません」。',
      },
      {
        heading: 'could / would の丁寧表現',
        body: [
          'could は can の過去形ですが、「Could you 〜?（〜していただけますか）」の形では、can より丁寧な依頼を表します。would も「Would you like 〜?（〜はいかがですか）」の形で、相手にものを勧めるときの丁寧な表現として頻出です。',
          'これらは過去の意味ではなく「丁寧さ」を表す使い方なので、訳し方に注意が必要です。Could you help me? は「手伝っていただけますか」、Would you like some tea? は「お茶はいかがですか」と訳します。依頼・勧誘の場面で使いこなせると、会話がとてもスムーズになります。',
        ],
        examples: [
          { en: 'Could you open the door, please?', ja: 'ドアを開けていただけますか。' },
          { en: 'Would you like some coffee?', ja: 'コーヒーはいかがですか。' },
          { en: 'Could I ask you a question?', ja: '質問してもよろしいですか。' },
        ],
        tip: 'Could you 〜?（依頼）、Would you like 〜?（勧誘）。どちらも過去形ではなく丁寧表現です。',
      },
    ],
    keyPoints: [
      'should は「〜したほうがよい」、shouldn\u2019t は「〜しないほうがよい」',
      'May I 〜? は「〜してもよいですか」という許可の要求',
      'may は「〜かもしれない」という推量も表す',
      'Could you 〜? は丁寧な依頼、Would you like 〜? は丁寧な勧誘',
    ],
    quiz: [
      {
        q: '「もっと野菜を食べたほうがよいですよ」という英文として適切なものはどれですか。',
        options: ['You must eat more vegetables.', 'You should eat more vegetables.', 'You can eat more vegetables.', 'You may eat more vegetables.'],
        answer: 1,
        explanation: '「〜したほうがよい（助言）」は should を使います。must は義務、can は能力・許可、may は許可・推量です。',
      },
      {
        q: '「窓を開けてもよいですか」と丁寧にたずねる英文として適切なものはどれですか。',
        options: ['May I open the window?', 'Must I open the window?', 'Should I open the window?', 'Do I open the window?'],
        answer: 0,
        explanation: '許可を求める「〜してもよいですか」は May I 〜? で表します。',
      },
      {
        q: 'Could you pass me the salt? の説明として正しいものはどれですか。',
        options: ['過去の能力を表している', '丁寧な依頼を表している', '禁止を表している', '義務を表している'],
        answer: 1,
        explanation: 'Could you 〜? は「〜していただけますか」という丁寧な依頼を表す定型表現です。',
      },
    ],
  },
  {
    id: 'g2-03',
    grade: 2,
    title: '不定詞①：名詞的用法',
    subtitle: '「〜すること」を表す to ＋ 動詞の原形',
    category: '不定詞',
    sections: [
      {
        heading: '不定詞とは',
        body: [
          '「to ＋ 動詞の原形」のセットを不定詞と呼びます。動詞なのに名詞（〜すること）や形容詞（〜するための）、副詞（〜するために）のように働くのが特徴で、中学2年で学ぶ最重要事項の一つです。まずは名詞の働きをする「名詞的用法」から学びましょう。',
          '名詞的用法の不定詞は、文の中で主語・目的語・補語の位置に置けます。特に目的語になることが多く、like, want, start, need などの動詞の後ろに置かれます。「I like to play soccer.（私はサッカーをすることが好きです）」では、to play soccer 全体が like の目的語（何が好きか）になっています。',
        ],
        examples: [
          { en: 'I like to play soccer.', ja: '私はサッカーをすることが好きです。' },
          { en: 'She wants to be a nurse.', ja: '彼女は看護師になりたがっています。' },
          { en: 'They started to dance.', ja: '彼らは踊り始めました。' },
          { en: 'My dream is to travel around the world.', ja: '私の夢は世界を旅することです。' },
        ],
        tip: 'to ＋ 動詞の原形 で「〜すること」。like / want / start の後ろに置いて名詞のように使います。',
      },
      {
        heading: 'want to と tell / ask 人 to',
        body: [
          'want to 〜 は「〜したい」という願望を表す超頻出パターンです。「I want to sleep.（眠りたい）」のように使います。また、want 人 to 〜 で「人に〜してほしい」という意味にもなります。「I want you to help me.（あなたに手伝ってほしい）」の形は少し高度ですが、会話でよく使われます。',
          '同様に tell 人 to 〜 は「人に〜するよう言う」、ask 人 to 〜 は「人に〜するよう頼む」という意味です。「My mother told me to clean my room.（母は私に部屋を掃除するように言いました）」のように、第4文型のような形をとります。これらは「人＋to 不定詞」という形をセットで覚えるのがコツです。',
        ],
        examples: [
          { en: 'I want to eat ice cream.', ja: '私はアイスクリームが食べたいです。' },
          { en: 'My father told me to get up early.', ja: '父は私に早く起きるように言いました。' },
          { en: 'She asked me to help her.', ja: '彼女は私に手伝ってほしいと頼みました。' },
        ],
        tip: 'want to 〜 ＝ 〜したい、tell 人 to 〜 ＝ 人に〜するように言う。「人＋to 不定詞」の形はセットで暗記。',
      },
    ],
    keyPoints: [
      '不定詞は「to ＋ 動詞の原形」。名詞的用法では「〜すること」を表す',
      'like / want / start などの動詞の目的語によくなる',
      'want to 〜 は「〜したい」',
      'tell 人 to 〜 ＝ 人に〜するように言う、ask 人 to 〜 ＝ 人に〜するよう頼む',
    ],
    quiz: [
      {
        q: '「私は泳ぎたいです」いう英文として正しいものはどれですか。',
        options: ['I want to swimming.', 'I want swim.', 'I want to swim.', 'I want swimming to swim.'],
        answer: 2,
        explanation: 'want to ＋ 動詞の原形 です。「I want to swim.」となります。',
      },
      {
        q: 'My dream is（　）a doctor. の（　）に入る適切な語はどれですか。',
        options: ['be', 'to be', 'being', 'to being'],
        answer: 1,
        explanation: '「〜になること」は不定詞 to be で表します。is の補語の位置に名詞的用法の不定詞が来ています。',
      },
      {
        q: 'She asked me（　）her with the homework. （彼女は宿題を手伝ってほしいと私に頼みました）',
        options: ['help', 'to help', 'helping', 'helped'],
        answer: 1,
        explanation: 'ask 人 to 〜 の形なので to help です。',
      },
    ],
  },
  {
    id: 'g2-04',
    grade: 2,
    title: '不定詞②：形容詞的用法・副詞的用法',
    subtitle: '「〜するための・〜するために」',
    category: '不定詞',
    sections: [
      {
        heading: '形容詞的用法：名詞を説明する',
        body: [
          '形容詞的用法の不定詞は、名詞の後ろに置いてその名詞を説明します。「〜するための」「〜すべき」という意味になります。「I have a lot of homework to do.（私はすべき宿題がたくさんあります）」では、to do が homework を説明しています。「何をするための宿題か」を説明しているわけです。',
          'ほかにも「something to drink（何か飲むもの）」「time to sleep（寝る時間）」「a book to read（読むための本）」のように、日常的によく使われる表現がたくさんあります。名詞のすぐ後ろに to ＋ 動詞が来たら、形容詞的用法のサインだと判断しましょう。',
        ],
        examples: [
          { en: 'I have a lot of homework to do.', ja: '私はすべき宿題がたくさんあります。' },
          { en: 'I want something cold to drink.', ja: '私は何か冷たい飲み物が欲しいです。' },
          { en: 'It\u2019s time to go to bed.', ja: '寝る時間です。' },
        ],
        tip: '名詞＋to 不定詞 ＝「その名詞を〜するための」。something to drink（飲むもの）などの形はセットで覚える。',
      },
      {
        heading: '副詞的用法：目的を表す',
        body: [
          '副詞的用法の不定詞は「〜するために」という目的を表します。文の後ろのほうに置かれ、動詞全体の目的を説明します。「I went to the library to study English.（私は英語を勉強するために図書館へ行きました）」では、to study English が「行った目的」を表しています。',
          'in order to 〜 を使うと、目的であることをよりはっきり示せます。「We exercise in order to stay healthy.（健康でいるために運動します）」のように書きかえられます。テストでは「なぜ〜したのか」をたずねる Why の疑問文とセットで問われることが多く、「Why did you go there?」「To buy a book.（本を買うために）」のような答え方も練習しておきましょう。',
        ],
        examples: [
          { en: 'I went to the library to study English.', ja: '私は英語を勉強するために図書館へ行きました。' },
          { en: 'She got up early to catch the first train.', ja: '彼女は始発に間に合うように早く起きました。' },
          { en: 'We exercise in order to stay healthy.', ja: '私たちは健康でいるために運動をします。' },
        ],
        tip: '副詞的用法 ＝「〜するために（目的）」。Why? の答えに「To ＋ 動詞の原形」で始まる文が使えます。',
      },
    ],
    keyPoints: [
      '形容詞的用法：名詞の後ろから「〜するための」と説明する',
      '副詞的用法：文末に置いて「〜するために（目的）」を表す',
      'something to drink / time to sleep などの頻出セットがある',
      'in order to 〜 も目的を表す言い方',
    ],
    quiz: [
      {
        q: 'I went to the station（　）meet my friend. の（　）に入る適切な語はどれですか。',
        options: ['for meet', 'to meet', 'meeting', 'met'],
        answer: 1,
        explanation: '「〜するために」という目的は to 不定詞（to meet）で表します。',
      },
      {
        q: 'I want something（　）. （私は何か食べるものが欲しい）の（　）に入る適切な語はどれですか。',
        options: ['eat', 'to eat', 'eating', 'ate'],
        answer: 1,
        explanation: 'something を「食べるためのもの」と説明する形容詞的用法なので to eat です。',
      },
      {
        q: 'Why did you come here? に答えるとき、適切なものはどれですか。',
        options: ['To see you.', 'For see you.', 'See you.', 'To seeing you.'],
        answer: 0,
        explanation: 'Why の質問には「To ＋ 動詞の原形（〜するために）」で答えるのがふつうです。',
      },
    ],
  },
  {
    id: 'g2-05',
    grade: 2,
    title: '動名詞（-ing）',
    subtitle: '動詞の ing 形で「〜すること」を表す',
    category: '動名詞',
    sections: [
      {
        heading: '動名詞は名詞のはたらきをする',
        body: [
          '動名詞とは、動詞に ing をつけて「〜すること」という名詞のように使う形です。不定詞の名詞的用法とよく似ていますが、動名詞は「すでにやっていること・習慣にしていること」を表す傾向があります。 enjoy, finish, stop などの動詞の後ろには動名詞が来ます。',
          '「I enjoy playing soccer.（私はサッカーをすることを楽しんでいます＝サッカーが楽しいです）」では、playing soccer が enjoy の目的語です。ing のつけ方は現在進行形と同じルール（e を取る、子音を重ねるなど）なので、スペルの知識はそのまま使い回せます。',
        ],
        examples: [
          { en: 'I enjoy playing soccer.', ja: '私はサッカーを楽しみます。' },
          { en: 'She finished doing her homework.', ja: '彼女は宿題を終えました。' },
          { en: 'He stopped smoking last year.', ja: '彼は昨年たばこをやめました。' },
        ],
        tip: 'enjoy / finish / stop のあとは動名詞。「〜することを楽しむ・終える・やめる」。',
      },
      {
        heading: '前置詞の後ろも動名詞',
        body: [
          '動名詞の大きな特徴は、前置詞の後ろに置けることです。前置詞（in, at, of, for, about など）の後ろには名詞しか置けないため、動詞を置きたいときは動名詞に変える必要があります。「Thank you for helping me.（手伝ってくれてありがとう）」では、for の後ろの helping が動名詞です。',
          '「be good at 〜ing（〜が得意だ）」「be interested in 〜ing（〜することに興味がある）」「How about 〜ing?（〜するのはどう？）」など、前置詞とのセット表現は会話でも頻出です。これらはまとめて暗記してしまうのが効率的です。',
        ],
        examples: [
          { en: 'Thank you for helping me.', ja: '手伝ってくれてありがとう。' },
          { en: 'She is good at singing.', ja: '彼女は歌が得意です。' },
          { en: 'How about playing tennis this weekend?', ja: '今週末テニスをするのはどうですか。' },
          { en: 'I am interested in learning Japanese history.', ja: '私は日本史を学ぶことに興味があります。' },
        ],
        tip: '前置詞の後ろの動詞は必ず ing 形。be good at 〜ing / How about 〜ing? は頻出セット。',
      },
    ],
    keyPoints: [
      '動名詞は「動詞＋ing」で「〜すること」を表す名詞のはたらき',
      'enjoy / finish / stop の目的語は動名詞',
      '前置詞の後ろに動詞を置くときは必ず動名詞にする',
      'be good at 〜ing（得意）/ How about 〜ing?（〜はどう？）はセットで暗記',
    ],
    quiz: [
      {
        q: 'I enjoy（　）to music. の（　）に入る適切な語はどれですか。',
        options: ['listen', 'to listen', 'listening', 'listens'],
        answer: 2,
        explanation: 'enjoy の目的語は動名詞なので listening です。',
      },
      {
        q: 'Thank you for（　）me. の（　）に入る適切な語はどれですか。',
        options: ['help', 'to help', 'helped', 'helping'],
        answer: 3,
        explanation: '前置詞 for の後ろは動名詞なので helping です。',
      },
      {
        q: 'She is good at（　）. の（　）に入る適切な語はどれですか。',
        options: ['cook', 'to cook', 'cooking', 'cooks'],
        answer: 2,
        explanation: 'be good at の at は前置詞なので、後ろは動名詞 cooking です。',
      },
    ],
  },
  {
    id: 'g2-06',
    grade: 2,
    title: '不定詞と動名詞の使い分け',
    subtitle: 'to do と doing、どちらを使う？',
    category: '動名詞',
    sections: [
      {
        heading: '動詞ごとに決まった形がある',
        body: [
          '「〜したい」「〜することが好きだ」のように動詞の後ろに別の動詞を置くとき、to 不定詞（to do）か動名詞（doing）のどちらかを選ぶことになります。どちらを選ぶかは、前の動詞によって決まっています。want to 〜（〜したい）、hope to 〜（〜したいと思う）、decide to 〜（〜することを決める）は to 不定詞、enjoy 〜ing（楽しむ）、finish 〜ing（終える）は動名詞を取ります。',
          'like と love は to 不定詞も動名詞もどちらでも使えます（like to play / like playing）。意味の差はほとんど気にしなくてよく、中学では「どちらも可」とだけ覚えておけば十分です。一方、want に動名詞（want doing）は不可、enjoy に不定詞（enjoy to do）は不可なので、取る形を間違えないようにしましょう。',
        ],
        table: {
          caption: '動詞ごとの使い分け',
          headers: ['to 不定詞を取る動詞', '動名詞を取る動詞', 'どちらでもよい動詞'],
          rows: [
            ['want（欲しい）', 'enjoy（楽しむ）', 'like（好きだ）'],
            ['hope（望む）', 'finish（終える）', 'love（大好きだ）'],
            ['decide（決める）', 'stop（やめる）', 'start（始める）'],
            ['need（必要とする）', 'practice（練習する）', 'begin（始める）'],
          ],
        },
        examples: [
          { en: 'I want to drink water.', ja: '私は水が飲みたいです。' },
          { en: 'I enjoy drinking green tea.', ja: '私は緑茶を飲むのが好きです。' },
          { en: 'I like playing (to play) the piano.', ja: '私はピアノを弾くのが好きです。' },
        ],
        tip: 'want / hope / decide は to 不定詞、enjoy / finish / stop は動名詞。like / love / start はどちらでもOK。',
      },
    ],
    keyPoints: [
      'want / hope / decide などの後ろは to 不定詞',
      'enjoy / finish / stop / practice などの後ろは動名詞',
      'like / love / start は to 不定詞・動名詞のどちらでも可',
      '前置詞の後ろは必ず動名詞',
    ],
    quiz: [
      {
        q: '次のうち、正しい英文はどれですか。',
        options: ['I enjoy to read books.', 'I enjoy reading books.', 'I enjoy read books.', 'I enjoy to reading books.'],
        answer: 1,
        explanation: 'enjoy の目的語は動名詞なので reading です。',
      },
      {
        q: '次のうち、正しい英文はどれですか。',
        options: ['I want to be a pilot.', 'I want being a pilot.', 'I want be a pilot.', 'I want to being a pilot.'],
        answer: 0,
        explanation: 'want の後ろは to 不定詞なので to be です。',
      },
      {
        q: 'She decided（　）to Canada. の（　）に入る適切な語はどれですか。',
        options: ['going', 'to go', 'go', 'went'],
        answer: 1,
        explanation: 'decide の後ろは to 不定詞なので to go です。',
      },
    ],
  },
  {
    id: 'g2-07',
    grade: 2,
    title: '比較①：比較級',
    subtitle: '「A は B より〜」を表す形',
    category: '比較',
    sections: [
      {
        heading: '比較級の作り方',
        body: [
          '2つのものを比べて「A は B より〜」と言いたいとき、形容詞を比較級に変えます。作り方は「短い形容詞は er をつける（tall → taller）」「長い形容詞（2音節以上）は more を前につける（beautiful → more beautiful）」の2通りです。文型は「A ＋ be動詞 ＋ 比較級 ＋ than ＋ B」で、than が「〜より」にあたります。',
          'good → better、bad → worse のように不規則に変わる形容詞もあるので注意が必要です。good / bad / many-much の不規則比較級は頻出なので、必ず覚えておきましょう。',
        ],
        table: {
          caption: '比較級の作り方',
          headers: ['パターン', '原級', '比較級'],
          rows: [
            ['短い語（er をつける）', 'tall, old, short', 'taller, older, shorter'],
            ['e で終わる（r をつける）', 'large, nice', 'larger, nicer'],
            ['子音字＋y（y を i に）', 'happy, easy', 'happier, easier'],
            ['子音を重ねる', 'big, hot', 'bigger, hotter'],
            ['長い語（more をつける）', 'beautiful, famous', 'more beautiful, more famous'],
            ['不規則', 'good, bad', 'better, worse'],
          ],
        },
        examples: [
          { en: 'Ken is taller than Tom.', ja: 'ケンはトムより背が高いです。' },
          { en: 'This book is more interesting than that one.', ja: 'この本はあの本よりおもしろいです。' },
          { en: 'I am happier than before.', ja: '私は以前より幸せです。' },
        ],
        tip: '短い語は er、長い語は more。than（〜より）とセットで使います。',
      },
      {
        heading: '比較級のいろいろな使い方',
        body: [
          '比較級は be動詞だけでなく一般動詞と一緒にも使えます。「He runs faster than me.（彼は私より速く走ります）」では、faster が run を修飾しています。さらに「much ＋ 比較級」で「ずっと〜」、「a little ＋ 比較級」で「少し〜」と程度を表せます。',
          '「Which is bigger, A or B?（AとBのどちらが大きいですか）」のように、2つのもののどちらかを選ぶ疑問文もよく使われます。答えるときは「A is.」のように主語だけでも答えられます。',
        ],
        examples: [
          { en: 'He runs faster than me.', ja: '彼は私より速く走ります。' },
          { en: 'This bag is much bigger than mine.', ja: 'このバッグは私のよりずっと大きいです。' },
          { en: 'Which is taller, Mt. Fuji or Mt. Yari?', ja: '富士山と槍ヶ岳はどちらが高いですか。' },
        ],
        tip: '程度を強めるときは much ＋ 比較級（ずっと〜）。「Which is 比較級, A or B?」は二者択一の定番疑問文。',
      },
    ],
    keyPoints: [
      '短い形容詞は er、長い形容詞は more で比較級を作る',
      '「A ＋ be ＋ 比較級 ＋ than ＋ B」で「AはBより〜」',
      'good → better、bad → worse は不規則変化',
      'much ＋ 比較級で「ずっと〜」という強調ができる',
    ],
    quiz: [
      {
        q: '「私の兄は私より背が高いです」という英文として正しいものはどれですか。',
        options: ['My brother is tall than me.', 'My brother is taller than me.', 'My brother is more tall than me.', 'My brother is tallest than me.'],
        answer: 1,
        explanation: 'tall は短い形容詞なので er をつけて taller にし、than と一緒に使います。',
      },
      {
        q: 'good の比較級はどれですか。',
        options: ['gooder', 'more good', 'better', 'best'],
        answer: 2,
        explanation: 'good は不規則変化で、比較級は better です（最上級が best）。',
      },
      {
        q: 'This movie is（　）than that one. （この映画はあの映画よりずっとおもしろい）の（　）に入る適切な語はどれですか。',
        options: ['much interesting', 'much more interesting', 'more much interesting', 'most interesting'],
        answer: 1,
        explanation: 'interesting は長い形容詞なので more で比較級を作り、「ずっと」を加える much をその前につけます。',
      },
    ],
  },
  {
    id: 'g2-08',
    grade: 2,
    title: '比較②：最上級',
    subtitle: '「一番〜」を表す the -est / the most',
    category: '比較',
    sections: [
      {
        heading: '最上級の作り方',
        body: [
          '3つ以上のものの中で「一番〜」を表すのが最上級です。作り方は比較級と対応していて、「短い形容詞は the ＋ est（the tallest）」「長い形容詞は the most ＋（the most beautiful）」となります。最上級には必ず the をつけるのがルールです。',
          '「in 〜（集団の中で）」「of 〜（〜のうちで）」を使って範囲を表します。「Mt. Fuji is the highest mountain in Japan.（富士山は日本で一番高い山です）」のように、in Japan で「日本の中で」という範囲を示します。',
        ],
        table: {
          caption: '最上級の作り方',
          headers: ['パターン', '原級', '最上級'],
          rows: [
            ['短い語', 'tall, old', 'the tallest, the oldest'],
            ['e で終わる', 'large, nice', 'the largest, the nicest'],
            ['子音字＋y', 'happy, easy', 'the happiest, the easiest'],
            ['子音を重ねる', 'big, hot', 'the biggest, the hottest'],
            ['長い語', 'beautiful, popular', 'the most beautiful, the most popular'],
            ['不規則', 'good, bad', 'the best, the worst'],
          ],
        },
        examples: [
          { en: 'Mt. Fuji is the highest mountain in Japan.', ja: '富士山は日本で一番高い山です。' },
          { en: 'She is the most popular singer in Japan.', ja: '彼女は日本で一番人気のある歌手です。' },
          { en: 'This is the best restaurant in my town.', ja: 'これは私の町で一番良いレストランです。' },
        ],
        tip: '最上級には必ず the をつける。範囲は in（場・集団）か of（〜のうち）で表します。',
      },
      {
        heading: '最上級の疑問文と as 〜 as',
        body: [
          '「一番〜なのは何/だれですか」とたずねるときは「What / Who is the 最上級〜?」の形を使います。「What is the biggest city in Japan?（日本で一番大きな都市はどこですか）」のように使います。',
          '比較に関連して、「as ＋ 原級 ＋ as」で「〜と同じくらい〜」という同程度の比較も学びます。「He is as tall as his father.（彼は父と同じくらい背が高い）」のように、2つのものが同等であることを表します。否定形「not as 〜 as」は「〜ほど〜ではない」という意味になります。',
        ],
        examples: [
          { en: 'What is the largest lake in Japan?', ja: '日本で一番大きな湖はどこですか。' },
          { en: 'He is as tall as his father.', ja: '彼は父親と同じくらい背が高いです。' },
          { en: 'This test was not as difficult as I thought.', ja: 'このテストは思っていたほど難しくありませんでした。' },
        ],
        tip: 'as 〜 as ＝ 同じくらい、not as 〜 as ＝ ほど〜ではない。最上級との使い分けに注意。',
      },
    ],
    keyPoints: [
      '最上級は「the ＋ est」または「the most ＋ 形容詞」',
      '範囲は in（〜で）や of（〜のうちで）で表す',
      'good → the best、bad → the worst は不規則変化',
      'as ＋ 原級 ＋ as ＝「〜と同じくらい〜」',
    ],
    quiz: [
      {
        q: '「彼女はクラスで一番頭が良いです」という英文として正しいものはどれですか。',
        options: ['She is smarter than any student in her class.', 'She is the smartest in her class.', 'She is the smarter in her class.', 'She is most smart in her class.'],
        answer: 1,
        explanation: '「一番〜」は最上級 the smartest で表します。',
      },
      {
        q: 'big の最上級はどれですか。',
        options: ['the bigger', 'the biggest', 'the most big', 'biggest'],
        answer: 1,
        explanation: 'big は短い語で子音を重ねるタイプなので、最上級は the biggest です。',
      },
      {
        q: '「このケーキはそのケーキと同じくらいおいしいです」という英文として正しいものはどれですか。',
        options: ['This cake is as delicious than that one.', 'This cake is as delicious as that one.', 'This cake is more delicious as that one.', 'This cake is the most delicious.'],
        answer: 1,
        explanation: '「〜と同じくらい」は「as ＋ 原級 ＋ as」で表します。',
      },
    ],
  },
  {
    id: 'g2-09',
    grade: 2,
    title: '接続詞 that / if（名詞節）',
    subtitle: '「〜ということ」を文の中に組み込む',
    category: '接続詞',
    sections: [
      {
        heading: 'that 節で「〜ということ」',
        body: [
          'think（思う）、know（知っている）、say（言う）、hope（望む）などの動詞の後ろには、that を使って「〜ということ」という文を続けられます。「I think that he is a good student.（彼は良い学生だと思います）」では、that 以下の文全体が think の内容になっています。that は省略されることも多く、I think he is kind. のようにも書けます。',
          '「I don\'t think 〜」の形に注意しましょう。日本語では「彼は来ないと思う」と言いますが、英語では I don\'t think he will come.（私は彼は来ると思わない）のように、think のほうを否定するのが自然です。これは英語の否定語の置き方のクセとして、中学2年で押さえておきたいポイントです。',
        ],
        examples: [
          { en: 'I think that this movie is fun.', ja: '私はこの映画はおもしろいと思います。' },
          { en: 'She knows that I like her.', ja: '彼女は私が彼女を好きだと知っています。' },
          { en: 'I don\u2019t think he is right.', ja: '彼が正しいとは思いません。' },
        ],
        tip: 'think / know / say の後ろに that ＋ 文 で内容を続けます。that は省略可。',
      },
      {
        heading: 'if で「〜かどうか」',
        body: [
          '接続詞の if には「もし〜なら」という意味のほかに、「〜かどうか」という意味があります。know（知っている）、think（思う）、ask（たずねる）などの動詞の後ろに if ＋ 文 の形で、「〜かどうか」という疑問の内容を表します。',
          '「I don\'t know if he likes it.（彼がそれを好きかどうか知りません）」のように使います。if の後ろの文は、ふつうの文の語順（主語＋動詞）になる点に注意が必要です。「if does he like it」のように疑問文の語順にはしません。',
        ],
        examples: [
          { en: 'I don\u2019t know if he likes it.', ja: '彼がそれを好きかどうか、私は知りません。' },
          { en: 'She asked me if I was a student.', ja: '彼女は私が学生かどうかたずねました。' },
          { en: 'Do you know if the store is open now?', ja: 'その店が今開いているかどうか知っていますか。' },
        ],
        tip: 'if ＝「〜かどうか」。後ろは疑問文の語順ではなく、ふつうの文の語順（主語＋動詞）にします。',
      },
    ],
    keyPoints: [
      'think / know / say ＋ that ＋ 文 で「〜ということ」',
      'that は省略できる',
      'I don\u2019t think 〜 ＝「〜ではないと思う」',
      'know ＋ if ＋ 文 で「〜かどうか知っている」',
    ],
    quiz: [
      {
        q: '「私は彼が正しいと思います」という英文として適切なものはどれですか。',
        options: ['I think he is right.', 'I think is he right.', 'I think he right is.', 'I am think he is right.'],
        answer: 0,
        explanation: 'that 節の中はふつうの語順（主語＋動詞）です。',
      },
      {
        q: '「彼女が来るかどうかわかりません」という英文として適切なものはどれですか。',
        options: ['I don\u2019t know if she will come.', 'I don\u2019t know if will she come.', 'I don\u2019t know that she will come.', 'I don\u2019t know if she comes?'],
        answer: 0,
        explanation: 'if 以下は「主語＋動詞」の語順です。文末は ? ではなく . になります。',
      },
      {
        q: '「私は彼が間違っているとは思いません」を英語で言うとき、自然な形はどれですか。',
        options: ['I think he is not wrong.', 'I don\u2019t think he is wrong.', 'I am not think he is wrong.', 'I don\u2019t think he wrong.'],
        answer: 1,
        explanation: '英語では think のほうを否定して I don\u2019t think 〜 とするのが自然です。',
      },
    ],
  },
  {
    id: 'g2-10',
    grade: 2,
    title: '接続詞 when / because ほか（副詞節）',
    subtitle: '「〜のとき・〜なので」で文をつなぐ',
    category: '接続詞',
    sections: [
      {
        heading: 'when と because',
        body: [
          'when は「〜のとき」、because は「〜なので（理由）」を表す接続詞で、2つの文をつなぐはたらきをします。「I was sleeping when he came home.（彼が帰ってきたとき、私は寝ていました）」のように、when の後ろに文を続けます。',
          'because は理由を表します。「I was late because the train was delayed.（電車が遅れたので、遅刻しました）」のように、「なぜなら〜」という部分を because の後ろに置きます。Why の質問への答え Because 〜 の because と同じ言葉が、文をつなぐ形で使われています。',
        ],
        examples: [
          { en: 'I was sleeping when he came home.', ja: '彼が帰ってきたとき、私は寝ていました。' },
          { en: 'I was late because the train was delayed.', ja: '電車が遅れたので、私は遅刻しました。' },
          { en: 'She was happy when she heard the news.', ja: '彼女はその知らせを聞いたとき、うれしかったです。' },
        ],
        tip: 'when ＝ 〜のとき、because ＝ 〜なので。後ろに「主語＋動詞」の完全な文を続けます。',
      },
      {
        heading: 'before / after / if など',
        body: [
          'before（〜の前に）、after（〜の後で）も、2つの出来事の時間関係を表す接続詞です。「Wash your hands before you eat.（食べる前に手を洗いなさい）」「I did my homework after I came home.（家に帰った後で宿題をしました）」のように使います。',
          'if は「もし〜ならば」という条件を表します。「If it rains tomorrow, we will stay home.（もし明日雨が降ったら、家にいます）」のように、条件の文（if 節）と結果の文を組み合わせます。if 節の中では未来のことでも現在形を使うというルールがありますが、詳しくは中学3年で学びます。',
        ],
        examples: [
          { en: 'Wash your hands before you eat.', ja: '食べる前に手を洗いなさい。' },
          { en: 'I did my homework after I came home.', ja: '家に帰った後で宿題をしました。' },
          { en: 'If it is sunny, we will go to the park.', ja: 'もし晴れたら、公園へ行きます。' },
        ],
        tip: 'before ＝ 前に / after ＝ 後で / if ＝ もし〜なら。文と文をつなぐ便利な接続詞です。',
      },
    ],
    keyPoints: [
      'when ＝ 〜のとき、because ＝ 〜なので',
      'before ＝ 〜の前に、after ＝ 〜の後で',
      'if ＝ もし〜なら（条件）',
      '接続詞の後ろには「主語＋動詞」の完全な文を続ける',
    ],
    quiz: [
      {
        q: '「雨が降っていたので、私は家にいました」という英文として正しいものはどれですか。',
        options: ['I stayed home when it rained.', 'I stayed home because it rained.', 'I stayed home if it rained.', 'Because I stayed home, it rained.'],
        answer: 1,
        explanation: '理由「〜なので」を表すのは because です。',
      },
      {
        q: '「寝る前に歯をみがきなさい」という英文として適切なものはどれですか。',
        options: ['Brush your teeth after you go to bed.', 'Brush your teeth before you go to bed.', 'Brush your teeth when you go to bed.', 'Brush your teeth if you go to bed.'],
        answer: 1,
        explanation: '「〜の前に」は before です。',
      },
      {
        q: 'She was crying（　）she lost her wallet. の（　）に入る適切な接続詞はどれですか。',
        options: ['when', 'because', 'before', 'after'],
        answer: 1,
        explanation: '「財布をなくしたので（理由）」を表すのは because です。',
      },
    ],
  },
  {
    id: 'g2-11',
    grade: 2,
    title: '受動態（be ＋ 過去分詞）',
    subtitle: '「〜される」受け身の文',
    category: '受動態',
    sections: [
      {
        heading: '受動態のしくみ',
        body: [
          'ふつうの文（能動態）では、動作をする人が主語になります。受動態は逆に、動作を受けるものを主語にした文で、「be動詞＋過去分詞」の形で作ります。過去分詞とは、規則動詞なら ed の形（played, watched）、不規則動詞なら written, eaten のような形です。',
          '「Many people speak English.（多くの人が英語を話します）」を受動態にすると「English is spoken by many people.（英語は多くの人に話されています）」になります。主語が English に変わり、be動詞（is）＋過去分詞（spoken）＋by 〜（〜によって）という形です。動作主を特に言う必要がないときは by 以下を省略します。',
        ],
        table: {
          caption: '能動態と受動態の対応',
          headers: ['能動態（〜する）', '受動態（〜される）'],
          rows: [
            ['I like this song.', 'This song is liked by me.'],
            ['They built this bridge in 1990.', 'This bridge was built in 1990.'],
            ['People speak French in France.', 'French is spoken in France.'],
          ],
        },
        examples: [
          { en: 'English is spoken all over the world.', ja: '英語は世界中で話されています。' },
          { en: 'This computer is made in Japan.', ja: 'このコンピューターは日本製です。' },
          { en: 'The station was built fifty years ago.', ja: 'その駅は50年前に建てられました。' },
        ],
        tip: '受動態 ＝ be動詞 ＋ 過去分詞。主語が動作の「受け手」になる文です。',
      },
      {
        heading: '時制による be動詞の変化',
        body: [
          '受動態の be動詞は、時制に合わせて変化します。現在の受動態なら is / are ＋ 過去分詞、過去の受動態なら was / were ＋ 過去分詞です。「This temple was built in 1200.（この寺は1200年に建てられました）」のように、過去の出来事を表す受動態は was / were を使います。',
          '受動態の疑問文は be動詞を文頭に出します。「Is this camera made in Japan?（このカメラは日本製ですか）」のようになります。否定文は be動詞の後ろに not を置きます。be動詞のふつうの文と同じ規則なので、動詞部分が「be ＋ 過去分詞」になっていると考えれば、怖くありません。',
        ],
        examples: [
          { en: 'These cars were made in Toyota\u2019s factory.', ja: 'これらの車はトヨタの工場で作られました。' },
          { en: 'Was this song written by him?', ja: 'この歌は彼によって書かれたのですか。' },
          { en: 'The window was broken by the boy.', ja: '窓はその少年に壊されました。' },
        ],
        tip: '現在の受け身は is / are ＋ 過去分詞、過去の受け身は was / were ＋ 過去分詞。',
      },
    ],
    keyPoints: [
      '受動態は「be動詞＋過去分詞」で「〜される」を表す',
      '動作主を表すには by 〜 を文末に置く',
      '現在は is / are ＋ 過去分詞、過去は was / were ＋ 過去分詞',
      '否定は be動詞＋not、疑問は be動詞を文頭へ',
    ],
    quiz: [
      {
        q: '「この歌は世界中で歌われています」という英文として正しいものはどれですか。',
        options: ['This song is sung all over the world.', 'This song sings all over the world.', 'This song is singing all over the world.', 'This song sung all over the world.'],
        answer: 0,
        explanation: '受動態は「be動詞＋過去分詞」です。sing の過去分詞は sung なので is sung になります。',
      },
      {
        q: '「この寺は500年前に建てられました」という英文として正しいものはどれですか。',
        options: ['This temple is built 500 years ago.', 'This temple was built 500 years ago.', 'This temple built 500 years ago.', 'This temple was build 500 years ago.'],
        answer: 1,
        explanation: '過去の受動態は「was / were ＋ 過去分詞」です。500年前のことなので was built です。',
      },
      {
        q: 'This cake（　）by my mother. （このケーキは母によって作られました）の（　）に入る適切な語はどれですか。',
        options: ['made', 'was made', 'is make', 'makes'],
        answer: 1,
        explanation: '受動態の形は be動詞＋過去分詞です。過去の文脈なので was made になります。',
      },
    ],
  },
  {
    id: 'g2-12',
    grade: 2,
    title: 'There is / are の文',
    subtitle: '「〜がある・いる」を表す構文',
    category: '文構造',
    sections: [
      {
        heading: 'There is / are の基本',
        body: [
          '「（場所に）〜がある・いる」と言いたいとき、英語では There is / are の文を使います。There is ＋ 単数の名詞、There are ＋ 複数の名詞 という形で、名詞の数によって is と are を使い分けます。「There is a park near my house.（私の家の近くに公園があります）」のようになります。',
          'ここでの There は「そこに」という意味の副詞ではなく、文を始めるための形式上の主語のようなもので、発音も弱くなります。意味上の主語は be動詞の後ろの名詞です。「あるもの」が単数か複数かをまず確認して、is か are を決めましょう。',
        ],
        examples: [
          { en: 'There is a park near my house.', ja: '私の家の近くに公園があります。' },
          { en: 'There are many books in the library.', ja: '図書館にはたくさんの本があります。' },
          { en: 'There is a cat on the sofa.', ja: 'ソファの上に猫がいます。' },
          { en: 'There are two cups on the table.', ja: 'テーブルの上に2つのカップがあります。' },
        ],
        tip: '後ろの名詞が単数なら There is、複数なら There are。名詞を先に見て be動詞を決めます。',
      },
      {
        heading: '否定文・疑問文',
        body: [
          'There is / are の否定文は、be動詞の後ろに not（や no）を置きます。「There is not a bookstore in this town.（この町には書店がありません）」あるいは「There is no bookstore in this town.（書店が一軒もありません）」のように、no を使うと「ひとつもない」というニュアンスが強くなります。',
          '疑問文は be動詞を文頭に出します。「Is there a restroom in this building?（この建物にはトイレがありますか）」のように使い、答えは「Yes, there is. / No, there isn\'t.」となります。there を主語のように扱うのがポイントです。',
        ],
        examples: [
          { en: 'There isn\u2019t a convenience store near the station.', ja: '駅の近くにコンビニはありません。' },
          { en: 'Are there any parks in this city?', ja: 'この市には公園はありますか。' },
          { en: 'How many students are there in your class?', ja: 'あなたのクラスには生徒が何人いますか。' },
        ],
        tip: '疑問文は「Is / Are there 〜?」、答えは「Yes, there is/are. No, there isn\u2019t/aren\u2019t.」。',
      },
    ],
    keyPoints: [
      'There is ＋ 単数名詞 / There are ＋ 複数名詞 で「〜がある・いる」',
      'There に意味はなく、意味上の主語は後ろの名詞',
      '否定は be動詞＋not（または no）',
      '疑問文は「Is / Are there 〜?」で、答えは there で受ける',
    ],
    quiz: [
      {
        q: '（　）many people in the park. の（　）に入る適切な語はどれですか。',
        options: ['There is', 'There are', 'It is', 'They are'],
        answer: 1,
        explanation: 'many people（複数）があるので There are です。',
      },
      {
        q: '「冷蔵庫に牛乳が少し入っています」という英文として正しいものはどれですか。',
        options: ['There are a little milk in the fridge.', 'There is a little milk in the fridge.', 'It is a little milk in the fridge.', 'There is a few milk in the fridge.'],
        answer: 1,
        explanation: 'milk は数えられない名詞なので単数扱いで There is になります。',
      },
      {
        q: 'Is there a hotel near here? の答えとして適切なものはどれですか。',
        options: ['Yes, it is.', 'Yes, there is.', 'Yes, they are.', 'Yes, is there.'],
        answer: 1,
        explanation: 'Is there 〜? には there で答えます。「Yes, there is.」です。',
      },
    ],
  },
  {
    id: 'g2-13',
    grade: 2,
    title: 'some / any と不定代名詞',
    subtitle: '「いくつかの・どんな〜でも」の使い分け',
    category: '代名詞',
    sections: [
      {
        heading: 'some と any',
        body: [
          'some（いくつかの・少しの）は肯定文で使い、any（いくつかの）は否定文・疑問文で使う、というのが基本ルールです。「I have some money.（お金を少し持っています）」に対して、「I don\'t have any money.（お金をまったく持っていません）」のように否定文では any に変わります。',
          '疑問文でも any を使います。「Do you have any questions?（質問はありますか）」のようになります。ただし、相手に勧めたり依頼したりするときの疑問文では some を使う例外があります。「Would you like some tea?（お茶はいかがですか）」では、勧めの気持ちがあるので some になります。',
        ],
        table: {
          caption: 'some と any の使い分け',
          headers: ['語', '使う文', '例'],
          rows: [
            ['some', '肯定文 / 勧めの疑問文', 'I have some friends. / Would you like some coffee?'],
            ['any', '否定文・疑問文', 'I don\u2019t have any friends. / Do you have any questions?'],
          ],
        },
        examples: [
          { en: 'I bought some apples.', ja: '私はりんごをいくつか買いました。' },
          { en: 'I don\u2019t have any brothers.', ja: '私には兄弟がいません。' },
          { en: 'Do you have any pets?', ja: 'ペットを飼っていますか。' },
        ],
        tip: '肯定文は some、否定文・疑問文は any。勧めの Would you like some 〜? だけ例外。',
      },
      {
        heading: 'no / every / some〜 などのおもな不定代名詞',
        body: [
          'some, any, no, every は、名詞をつけずに単独で代名詞のように使えます。something（何か）、anything（何か）、nothing（何も）、everything（すべて）、someone（だれか）などの形です。基本的に some 系は肯定文、any 系は否定文・疑問文という使い分けは some / any と同じです。',
          'all（すべての）と every（すべての一つひとつ）も押さえておきたい語です。all students（すべての生徒たち）のように複数名詞と使うことも、all of the students の形をとることもあります。every は every student（生徒ひとりひとり）のように単数名詞と組み合わせます。',
        ],
        examples: [
          { en: 'I have something to tell you.', ja: 'あなたに言いたいことがあります。' },
          { en: 'Is there anything in the box?', ja: '箱の中に何か入っていますか。' },
          { en: 'There was nothing on the desk.', ja: '机の上には何もありませんでした。' },
          { en: 'Everyone in my class likes music.', ja: 'クラスのみんなが音楽が好きです。' },
        ],
        tip: 'something（肯定）/ anything（否定・疑問）/ nothing（何も）/ everything（すべて）。名詞なしで使えます。',
      },
    ],
    keyPoints: [
      'some は肯定文、any は否定文・疑問文で使うのが基本',
      '勧めの Would you like some 〜? では some を使う',
      'something / anything / nothing / everything は単独で使える不定代名詞',
      'every ＋ 単数名詞 ＝ すべての一つひとつ',
    ],
    quiz: [
      {
        q: 'I don\u2019t have（　）money. の（　）に入る適切な語はどれですか。',
        options: ['some', 'any', 'no', 'every'],
        answer: 1,
        explanation: '否定文では any を使います。',
      },
      {
        q: 'Would you like（　）cake? の（　）に入る適切な語はどれですか。',
        options: ['any', 'some', 'no', 'anything'],
        answer: 1,
        explanation: '勧めの疑問文（〜はいかがですか）では some を使います。',
      },
      {
        q: 'Is there（　）in the room? の（　）に入る適切な語はどれですか。',
        options: ['someone', 'anyone', 'no one', 'everyone'],
        answer: 1,
        explanation: '疑問文では anyone（だれか）を使います。',
      },
    ],
  },
  {
    id: 'g2-14',
    grade: 2,
    title: '第4文型（SVOO）・第5文型（SVOC）',
    subtitle: '「人にものをあげる」「ものを〜と呼ぶ」',
    category: '文構造',
    sections: [
      {
        heading: '第4文型：S ＋ V ＋ 人 ＋ もの',
        body: [
          '「私は彼に本をあげました」のような文は、日本語でも「人」と「もの」という2つの目的語を持ちます。英語では「主語＋動詞＋人（間接目的語）＋もの（直接目的語）」の並び方を第4文型（SVOO）と呼びます。give（あげる）、send（送る）、show（見せる）、teach（教える）、buy（買ってあげる）などがこの形を取る代表です。',
          '第4文型の文は「S ＋ V ＋ もの ＋ to ＋ 人」という形（第3文型＋to 不定詞的な書き換え）に書きかえられます。I gave him a book. → I gave a book to him. のように、ものを先にして to ＋ 人 を後ろに置きます。ただし buy などは to ではなく for を使う（I bought a book for him.）ので、動詞によって前置詞が変わる点に注意が必要です。',
        ],
        table: {
          caption: '第4文型をとるおもな動詞',
          headers: ['動詞', '意味', '書きかえの前置詞'],
          rows: [
            ['give', 'あげる', 'to'],
            ['send', '送る', 'to'],
            ['show', '見せる', 'to'],
            ['teach', '教える', 'to'],
            ['buy', '買ってあげる', 'for'],
            ['make', '作ってあげる', 'for'],
          ],
        },
        examples: [
          { en: 'My mother gave me a present.', ja: '母は私にプレゼントをくれました。' },
          { en: 'She showed her friends the pictures.', ja: '彼女は友達に写真を見せました。' },
          { en: 'I bought my father a shirt.', ja: '私は父にシャツを買ってあげました。' },
        ],
        tip: 'give ＋ 人 ＋ もの の形が第4文型。書きかえるなら give ＋ もの ＋ to ＋ 人。',
      },
      {
        heading: '第5文型：S ＋ V ＋ O ＋ C',
        body: [
          '第5文型は「主語＋動詞＋目的語＋補語（O を C の状態にする）」という形です。call（〜と呼ぶ）、name（〜と名付ける）、make（〜の状態にする）などの動詞が取ります。「We call him Ken.（私たちは彼をケンと呼びます）」では、him（O）が Ken（C）である関係になっています。',
          '「The news made me happy.（その知らせは私を幸せにしました）」では、me（O）が happy（C）という状態にされました。O と C の間に「＝」が成り立つ（him ＝ Ken、me ＝ happy）のが第5文型の見分け方です。第4文型が「人＋もの」の並びなのに対し、第5文型は「もの（人）＋状態・名称」の並びです。',
        ],
        examples: [
          { en: 'We call him Ken.', ja: '私たちは彼をケンと呼びます。' },
          { en: 'The news made me happy.', ja: 'その知らせは私を幸せにしました。' },
          { en: 'They named the dog Pochi.', ja: '彼らはその犬をポチと名付けました。' },
        ],
        tip: 'O ＝ C が成り立てば第5文型（him ＝ Ken）。人＋ものの並びなら第4文型です。',
      },
    ],
    keyPoints: [
      '第4文型は「S ＋ V ＋ 人 ＋ もの」（give, show, teach, buy など）',
      '書きかえ：「S ＋ V ＋ もの ＋ to / for ＋ 人」',
      'give / show / teach は to、buy / make は for を使う',
      '第5文型は「S ＋ V ＋ O ＋ C」で O ＝ C が成り立つ（call, name, make）',
    ],
    quiz: [
      {
        q: 'My uncle gave（　）. （叔父は私に時計をくれました）に入る適切な語の並びはどれですか。',
        options: ['a watch to me', 'me a watch', 'to me a watch', 'a watch me'],
        answer: 1,
        explanation: 'give は第4文型「give ＋ 人 ＋ もの」を取れます。「gave me a watch」が自然です。',
      },
      {
        q: 'I bought my sister a bag. を書きかえたとき、正しいものはどれですか。',
        options: ['I bought a bag to my sister.', 'I bought a bag for my sister.', 'I bought a bag of my sister.', 'I bought my sister for a bag.'],
        answer: 1,
        explanation: 'buy は to ではなく for を使って書きかえます。',
      },
      {
        q: 'We call the dog Pochi. について、Pochi のはたらきの説明として正しいものはどれですか。',
        options: ['目的語', '補語（O ＝ C の関係）', '副詞', '主語'],
        answer: 1,
        explanation: 'the dog ＝ Pochi が成り立つので、Pochi は補語（C）です。この文は第5文型です。',
      },
    ],
  },
]
