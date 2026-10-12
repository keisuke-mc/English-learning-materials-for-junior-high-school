import type { Unit } from './types'

export const grade3Units: Unit[] = [
  {
    id: 'g3-01',
    grade: 3,
    title: '現在完了①：継続',
    subtitle: 'have been で「ずっと〜している」',
    category: '現在完了',
    sections: [
      {
        heading: '現在完了形の基本',
        body: [
          '現在完了形は「have / has ＋ 過去分詞」で作る形で、過去から現在までつながる意味を表します。主語が I, You, We, They なら have、He, She, It などの三人称単数なら has を使います。過去分詞は規則動詞なら ed の形、不規則動詞なら go → gone のような形で、受動態で学んだものと同じです。',
          '現在完了形には「継続」「経験」「完了」という3つの大きな用法があります。まずは「継続」から学びましょう。継続は「（過去のある時点から）ずっと〜している」という、状態や動作の継続を表します。',
        ],
        table: {
          caption: '現在完了の形',
          headers: ['主語', '現在完了形の形'],
          rows: [
            ['I / You / We / They', 'have ＋ 過去分詞'],
            ['He / She / It ＋ 単数名詞', 'has ＋ 過去分詞'],
          ],
        },
        examples: [
          { en: 'I have lived in Nagano for ten years.', ja: '私は10年間長野に住んでいます。' },
          { en: 'She has been in Japan since 2020.', ja: '彼女は2020年から日本にいます。' },
          { en: 'We have known each other for a long time.', ja: '私たちは長い間お互いを知っています。' },
        ],
        tip: '現在完了 ＝ have / has ＋ 過去分詞。まず形をしっかり覚えましょう。',
      },
      {
        heading: 'for と since の使い分け',
        body: [
          '継続を表す現在完了では、期間を表す for と、起点を表す since がよく使われます。for は「（期間）の間」、since は「（始まりの時点）から」を表します。「for ten years（10年間）」「since 2020（2020年から）」のように、for の後ろには期間、since の後ろには過去の時点が来ます。',
          '「How long have you lived here?（ここにどのくらい住んでいますか）」のように、How long で継続の長さをたずねる疑問文も頻出です。答えるときは「For five years.」「Since 2015.」のように for / since のフレーズで答えます。',
        ],
        table: {
          caption: 'for と since',
          headers: ['前置詞', '意味', '後ろに置くもの', '例'],
          rows: [
            ['for', '〜の間', '期間', 'for three years / for a month'],
            ['since', '〜から', '過去の時点', 'since 2019 / since last week / since I was five'],
          ],
        },
        examples: [
          { en: 'I have studied English for three years.', ja: '私は3年間英語を勉強しています。' },
          { en: 'He has been sick since last Friday.', ja: '彼は先週の金曜日から病気です。' },
          { en: 'How long have you played the piano?', ja: 'あなたはどのくらいピアノを弾いていますか。' },
        ],
        tip: 'for ＋ 期間（3年間など）、since ＋ 起点（2020年からなど）。セットで覚えましょう。',
      },
    ],
    keyPoints: [
      '現在完了形は「have / has ＋ 過去分詞」',
      '継続＝過去から現在までずっと〜している状態',
      'for ＋ 期間 / since ＋ 起点',
      'How long で継続の長さをたずねる',
    ],
    quiz: [
      {
        q: 'I（　）in Tokyo since 2015. の（　）に入る適切な語はどれですか。',
        options: ['live', 'lived', 'have lived', 'am living'],
        answer: 2,
        explanation: 'since 2015（2015年から）と組み合わせて継続を表すには現在完了形 have lived を使います。',
      },
      {
        q: 'She has been a nurse（　）five years. の（　）に入る適切な語はどれですか。',
        options: ['since', 'for', 'from', 'during'],
        answer: 1,
        explanation: 'five years（5年間）は期間なので for を使います。',
      },
      {
        q: '現在完了形を作る組み合わせとして正しいものはどれですか。',
        options: ['have ＋ 動詞の原形', 'have ＋ ing 形', 'has ＋ 過去分詞', 'have ＋ 過去形'],
        answer: 2,
        explanation: '現在完了形は「have / has ＋ 過去分詞」で作ります。',
      },
    ],
  },
  {
    id: 'g3-02',
    grade: 3,
    title: '現在完了②：経験',
    subtitle: 'have ever で「〜したことがある」',
    category: '現在完了',
    sections: [
      {
        heading: '経験を表す現在完了',
        body: [
          '現在完了形のもうひとつの用法は「経験」です。「これまでに〜したことがある／ない」という、人生の中での経験を表します。「I have visited Kyoto twice.（私は京都を2回訪れたことがあります）」のように、回数を表す語句（twice, three times など）と一緒に使われることが多いのが特徴です。',
          '疑問文では ever（今までに）をよく使い、「Have you ever eaten sushi?（あなたは今までにすしを食べたことがありますか）」のようにたずねます。答えは「Yes, I have. / No, I haven\'t.（No, never. とも）」です。',
        ],
        examples: [
          { en: 'I have visited Kyoto twice.', ja: '私は京都を2回訪れたことがあります。' },
          { en: 'Have you ever eaten Indian food?', ja: 'あなたは今までにインド料理を食べたことがありますか。' },
          { en: 'She has never been to Okinawa.', ja: '彼女は沖縄へ行ったことが一度もありません。' },
        ],
        tip: '経験の現在完了には回数（twice, three times）や ever / never がよく共に使われます。',
      },
      {
        heading: 'have been to と have gone to',
        body: [
          '「have been to 〜」は「〜へ行ったことがある（経験）」、「have gone to 〜」は「〜へ行ってしまった（もうここにいない）」という意味になります。よく似た形ですが意味がまったく違うので、この対比は入試頻出ポイントです。',
          '「I have been to America.（私はアメリカに行ったことがあります）」は過去の経験を表します。一方「He has gone to America.（彼はアメリカへ行ってしまいました）」は、彼が今アメリカにいる（ここにはいない）という結果を表します。文脈でどちらが適切かを考える癖をつけましょう。',
        ],
        table: {
          caption: 'been to と gone to',
          headers: ['表現', '意味', '使いどころ'],
          rows: [
            ['have been to 〜', '〜へ行ったことがある', '経験（今はここにいる）'],
            ['have gone to 〜', '〜へ行ってしまった', '結果（今はここにいない）'],
          ],
        },
        examples: [
          { en: 'I have been to America twice.', ja: '私はアメリカに2回行ったことがあります。' },
          { en: 'He has gone to the library.', ja: '彼は図書館へ行ってしまいました（今はここにいません）。' },
          { en: 'Have you ever been to Hokkaido?', ja: 'あなたは北海道へ行ったことがありますか。' },
        ],
        tip: 'been to ＝ 行ったことがある（経験）。gone to ＝ 行ってしまった（結果）。',
      },
    ],
    keyPoints: [
      '経験の現在完了は「〜したことがある／ない」を表す',
      'Have you ever 〜? は「今までに〜したことがありますか」',
      'never は「一度も〜したことがない」',
      'have been to ＝ 経験 / have gone to ＝ 行ってしまった（結果）',
    ],
    quiz: [
      {
        q: '「あなたは今までに富士山に登ったことがありますか」という英文として正しいものはどれですか。',
        options: ['Did you ever climb Mt. Fuji?', 'Have you ever climbed Mt. Fuji?', 'Do you ever climb Mt. Fuji?', 'Are you ever climbing Mt. Fuji?'],
        answer: 1,
        explanation: '「今までに〜したことがあるか」は現在完了の経験「Have you ever ＋ 過去分詞」で表します。',
      },
      {
        q: '彼はアメリカに行ったことがあります、という英文として正しいものはどれですか。',
        options: ['He has gone to America.', 'He has been to America.', 'He has going to America.', 'He is been to America.'],
        answer: 1,
        explanation: '「行ったことがある（経験）」は has been to です。has gone to は「行ってしまった」という意味になります。',
      },
      {
        q: 'I have（　）read such a good book. （私はそんなに良い本を読んだことがありません）の（　）に入る適切な語はどれですか。',
        options: ['ever', 'never', 'yet', 'just'],
        answer: 1,
        explanation: '「一度も〜ない」という経験の否定には never を使います。',
      },
    ],
  },
  {
    id: 'g3-03',
    grade: 3,
    title: '現在完了③：完了',
    subtitle: 'have just で「ちょうど〜したところ」',
    category: '現在完了',
    sections: [
      {
        heading: '完了・結果を表す現在完了',
        body: [
          '現在完了の3つ目の用法は「完了」です。「ちょうど〜したところだ」「もう〜してしまった」という、動作が終わった（完了した）ことや、その結果が今も続いていることを表します。「I have just finished my homework.（私はちょうど宿題を終えたところです）」のように、just（ちょうど今）と一緒に使われることが多いです。',
          'already（すでに）は肯定文で「もう〜してしまった」を表し、yet（まだ・もう）は否定文や疑問文で使われます。「I have already eaten lunch.（私はもう昼食を食べました）」「Have you finished your homework yet?（もう宿題を終えましたか）」のように使い分けます。',
        ],
        table: {
          caption: '完了と一緒に使う副詞',
          headers: ['副詞', '意味', '使う文'],
          rows: [
            ['just', 'ちょうど今〜したところ', '肯定文'],
            ['already', 'すでに〜した', '肯定文'],
            ['yet', 'まだ〜していない／もう〜したか', '否定文・疑問文'],
          ],
        },
        examples: [
          { en: 'I have just finished my homework.', ja: '私はちょうど宿題を終えたところです。' },
          { en: 'The train has already left.', ja: '電車はもう出発してしまいました。' },
          { en: 'I haven\u2019t eaten lunch yet.', ja: '私はまだ昼食を食べていません。' },
        ],
        tip: 'just ＝ ちょうど今、already ＝ もう（肯定文）、yet ＝ まだ（否定・疑問文）。',
      },
      {
        heading: '過去形との違い',
        body: [
          '現在完了と過去形の違いに注意しましょう。過去形は「過去のある時点での出来事」を表し、yesterday や last week のような「はっきりした過去の時点」と一緒に使えます。一方、現在完了は過去から現在へのつながりを表すため、yesterday のような具体的な過去の語句と一緒には使えません。',
          '「I have seen that movie yesterday.」は誤りで、「I saw that movie yesterday.」が正解です。逆に just, already, yet, ever, never, for, since などの語句があるときは現在完了が自然です。テストではこの使い分けがよく問われるので、「具体的な過去の言葉 ＝ 過去形」と覚えておきましょう。',
        ],
        examples: [
          { en: 'I saw that movie yesterday.', ja: '私は昨日その映画を見ました。（× have seen）' },
          { en: 'I have seen that movie three times.', ja: '私はその映画を3回見たことがあります。' },
          { en: 'When did you visit Nara?', ja: 'あなたはいつ奈良を訪れましたか。（× have you visited）' },
        ],
        tip: 'yesterday / last week / in 2020 など具体的な過去 → 過去形。just / already / ever / since → 現在完了。',
      },
    ],
    keyPoints: [
      '完了の現在完了は「ちょうど〜した・もう〜してしまった」',
      'just（ちょうど今）/ already（すでに・肯定文）/ yet（まだ・否定・疑問文）',
      '具体的な過去の時点（yesterday など）と現在完了は一緒に使えない',
      'When did you 〜? のように When と一緒にも現在完了は使わない',
    ],
    quiz: [
      {
        q: '私はちょうど夕食を食べ終えたところです、という英文として正しいものはどれですか。',
        options: ['I just finished dinner.', 'I have just finished dinner.', 'I am just finishing dinner.', 'I just have finished dinner.'],
        answer: 1,
        explanation: '「ちょうど〜したところ」は現在完了＋just で表します。',
      },
      {
        q: '次のうち、正しい英文はどれですか。',
        options: ['I have seen him yesterday.', 'I saw him yesterday.', 'I have seen him yesterday afternoon.', 'I have saw him yesterday.'],
        answer: 1,
        explanation: 'yesterday のような具体的な過去の語句があるときは過去形 saw を使います。',
      },
      {
        q: 'Have you finished your homework（　）? の（　）に入る適切な語はどれですか。',
        options: ['yet', 'already', 'just', 'ever'],
        answer: 0,
        explanation: '疑問文で「もう〜しましたか」を表すのは yet です。',
      },
    ],
  },
  {
    id: 'g3-04',
    grade: 3,
    title: '関係代名詞①：who',
    subtitle: '人をつなぐ「〜する人」の文',
    category: '関係代名詞',
    sections: [
      {
        heading: '関係代名詞とは',
        body: [
          '関係代名詞は、2つの文をひとつにつなぎ、名詞を詳しく説明するはたらきをします。「私には姉がいます。彼女は東京に住んでいます」を英語で1つの文にすると「I have a sister who lives in Tokyo.（東京に住んでいる姉がいます）」になります。who が a sister（人）を後ろから説明している形です。',
          'who は「人」を説明するときに使う関係代名詞です。who の後ろには「主語＋動詞」の文が続きます。The man who is standing there is my uncle.（そこに立っている男性は私の叔父です）のように、「〜している人」という説明を名詞に付け加えることができます。',
        ],
        examples: [
          { en: 'I have a sister who lives in Tokyo.', ja: '私は東京に住んでいる姉がいます。' },
          { en: 'The man who is standing there is my uncle.', ja: 'そこに立っている男性は私の叔父です。' },
          { en: 'Do you know the girl who has long hair?', ja: '長い髪の女の子を知っていますか。' },
          { en: 'People who like music will enjoy this concert.', ja: '音楽が好きな人はこのコンサートを楽しむでしょう。' },
        ],
        tip: 'who ＝「〜する人」。人を後ろから説明するときに関係代名詞 who を使います。',
      },
      {
        heading: '2つの文を1つにする',
        body: [
          '関係代名詞の問題では、「2つの文を1つにまとめる」書きかえが頻出です。手順は、（1）同じ名詞をさす文を見つける、（2）後ろの文の名詞を who に置きかえる、（3）前の文の名詞の後ろにつなげる、です。',
          'たとえば「I have a friend. ＋ He speaks French.」なら、He ＝ a friend なので、He を who にして「I have a friend who speaks French.（フランス語を話す友達がいます）」になります。主語の he を who に、動詞 speaks はそのまま続くのがポイントです。',
        ],
        examples: [
          { en: 'I have a friend. + He speaks French. → I have a friend who speaks French.', ja: '私はフランス語を話す友達がいます。' },
          { en: 'This is the boy. + He broke the window. → This is the boy who broke the window.', ja: 'これが窓を割った少年です。' },
          { en: 'The woman who is singing is my mother.', ja: '歌っている女性は私の母です。' },
        ],
        tip: '書きかえの手順：後ろの文の主語（人）を who に変えて、前の文の名詞の後ろに置く。',
      },
    ],
    keyPoints: [
      '関係代名詞 who は「人」を説明する',
      'who の後ろには「主語＋動詞」が続く',
      '2つの文は「名詞＋who＋文」で1つにまとめられる',
      '「〜する人」という説明を名詞に付け加えられる',
    ],
    quiz: [
      {
        q: '「私には犬を飼っている友達がいます」という英文として正しいものはどれですか。',
        options: ['I have a friend who keeps a dog.', 'I have a friend who keep a dog.', 'I have a friend keeps who a dog.', 'I have a friend who keeping a dog.'],
        answer: 0,
        explanation: 'who の後ろは「主語なしで動詞」が続きます（who 自体が主語）。友人が一人なので keeps と s がつきます。',
      },
      {
        q: 'I have a teacher. + He teaches math. を1つの文にすると正しいものはどれですか。',
        options: ['I have a teacher he teaches math.', 'I have a teacher who teaches math.', 'I have a teacher who teach math.', 'I have a who teacher teaches math.'],
        answer: 1,
        explanation: '後ろの文の He を who に置きかえて、teacher の後ろにつなげます。',
      },
      {
        q: '関係代名詞 who が説明できるのはどれですか。',
        options: ['もの（物）', '人', '場所', '時'],
        answer: 1,
        explanation: 'who は「人」を説明する関係代名詞です。ものには which / that を使います。',
      },
    ],
  },
  {
    id: 'g3-05',
    grade: 3,
    title: '関係代名詞②：which / that',
    subtitle: 'ものごとをつなぐ関係代名詞',
    category: '関係代名詞',
    sections: [
      {
        heading: 'which は「もの・動物」を説明する',
        body: [
          '関係代名詞 which は、人以外のもの（物・事柄・動物）を説明するときに使います。使い方は who とまったく同じで、which の後ろには「主語＋動詞」の文が続きます。「This is the book which I read yesterday.（これは私が昨日読んだ本です）」では、which 以下が the book を説明しています。',
          'that は who と which の両方の代わりに使える関係代名詞です。人にもものにも使える便利な言葉ですが、疑問文の that 節（I think that 〜）とは別物なので注意しましょう。関係代名詞の that は、常に名詞の直後に置かれて説明を付け加えます。',
        ],
        examples: [
          { en: 'This is the book which I read yesterday.', ja: 'これは私が昨日読んだ本です。' },
          { en: 'The movie which we watched was fun.', ja: '私たちが見た映画はおもしろかったです。' },
          { en: 'I like dogs that are small.', ja: '私は小さい犬が好きです。' },
        ],
        tip: 'which ＝ ものを説明する、that ＝ 人・もの両方に使える。',
      },
      {
        heading: '目的格の関係代名詞（省略できる形）',
        body: [
          'これまで学んだ who / which は、後ろの文の「主語」の役割を果たしていました（これを主格といいます）。実は関係代名詞には、後ろの文の「目的語」になる使い方（目的格）もあります。「the movie which we watched」では、which は watched の目的語（何を？→ the movie）の役割です。',
          '目的格の関係代名詞は省略できます。「This is the book (which) I read yesterday.」のように、which を取っても意味が通じます。省略のルールまで問われるのは高校英語ですが、「関係代名詞が目的語のときは消せる」という知識を持っておくと、長文読解が楽になります。',
        ],
        examples: [
          { en: 'The song which she wrote became a hit.', ja: '彼女が書いたその歌はヒットしました。' },
          { en: 'This is the letter which he sent me.', ja: 'これが彼が私に送ってきた手紙です。' },
          { en: 'The dog that I keep is very old.', ja: '私が飼っている犬はとても年老いています。' },
        ],
        tip: '関係代名詞の後ろが「主語＋動詞」なら主格、動詞の後ろに目的語がないなら目的格（省略可）。',
      },
    ],
    keyPoints: [
      'which は人以外のものを説明する関係代名詞',
      'that は人にもものにも使える',
      '関係代名詞の後ろには「主語＋動詞」の文が続く',
      '目的格の関係代名詞（which/that/whom）は省略できる',
    ],
    quiz: [
      {
        q: '「これは私が先週買った時計です」という英文として正しいものはどれですか。',
        options: ['This is the watch which I bought last week.', 'This is the watch who I bought last week.', 'This is the watch which bought I last week.', 'This is the watch which I buy last week.'],
        answer: 0,
        explanation: '時計（もの）を説明するのは which です。last week があるので動詞は過去形 bought です。',
      },
      {
        q: '関係代名詞 that について正しい説明はどれですか。',
        options: ['人にしか使えない', 'ものにしか使えない', '人とものの両方に使える', '場所を説明するときに使う'],
        answer: 2,
        explanation: 'that は who（人）と which（もの）の両方の代わりに使えます。',
      },
      {
        q: 'The movie（　）we saw last night was scary. の（　）に入る語として適切でないものはどれですか。',
        options: ['which', 'that', 'who', '（省略）'],
        answer: 2,
        explanation: 'movie（もの）を説明するので who は使えません。which / that、または省略が可能です。',
      },
    ],
  },
  {
    id: 'g3-06',
    grade: 3,
    title: '間接疑問文',
    subtitle: '「〜かどうか／どこに〜するか知っている」',
    category: '文構造',
    sections: [
      {
        heading: '間接疑問文の語順',
        body: [
          '「〜かどうか」「どこに〜するか」のような疑問の内容を、文の中に組み込んだ文を間接疑問文と呼びます。「I don\'t know where he lives.（彼がどこに住んでいるか、私は知りません）」では、where he lives の部分が know の内容になっています。',
          '間接疑問文で最も大切なのは語順です。ふつうの疑問文 Where does he live? とは違い、間接疑問文では「疑問詞＋主語＋動詞」という、肯定文と同じ語順になります。does などの助動詞は消えて、動詞に三人称単数の s が復活します。この「語順がもどる」感覚をつかむことが、この単元の最大のポイントです。',
        ],
        table: {
          caption: '直接疑問文と間接疑問文',
          headers: ['直接疑問文', '間接疑問文'],
          rows: [
            ['Where does he live?', 'I know where he lives.'],
            ['What do you want?', 'Tell me what you want.'],
            ['When did she come?', 'Do you know when she came?'],
            ['Why is he absent?', 'I don\u2019t know why he is absent.'],
          ],
        },
        examples: [
          { en: 'I don\u2019t know where he lives.', ja: '彼がどこに住んでいるか、私は知りません。' },
          { en: 'Do you know what time it is?', ja: '今何時か知っていますか。' },
          { en: 'Tell me why you are sad.', ja: 'なぜ悲しいのか教えてください。' },
        ],
        tip: '間接疑問文は「疑問詞＋主語＋動詞」の語順。does は消えて s が復活します。',
      },
      {
        heading: 'if との使い分け',
        body: [
          '疑問詞（what, where, when など）を使う間接疑問文に対して、Yes / No で答える疑問の内容を組み込むときは if（かどうか）を使います。「I don\'t know if he is at home.（彼が家にいるかどうか知りません）」のようになります。',
          '中学2年で学んだ I don\'t know if he likes it.（彼がそれを好きかどうか知りません）も、実はこの間接疑問文のひとつでした。疑問詞の疑問文は疑問詞を文頭に、Yes / No 疑問文は if を使う、と整理すると理解しやすくなります。',
        ],
        examples: [
          { en: 'I don\u2019t know if he is at home.', ja: '彼が家にいるかどうか、私は知りません。' },
          { en: 'Do you know if this bus goes to the station?', ja: 'このバスが駅へ行くかどうか知っていますか。' },
          { en: 'She asked me what my name was.', ja: '彼女は私に名前は何かとたずねました。' },
        ],
        tip: '疑問詞の疑問 → 疑問詞＋主語＋動詞。Yes/No 疑問 → if ＋ 主語＋動詞。',
      },
    ],
    keyPoints: [
      '間接疑問文は「疑問詞＋主語＋動詞」の語順（肯定文の語順）',
      'I don\u2019t know where he lives. ＝ どこに住んでいるか知らない',
      'Yes / No 疑問の内容は if で組み込む',
      'Do you know 〜? / Tell me 〜 の後ろに続く形も間接疑問文',
    ],
    quiz: [
      {
        q: 'I don\u2019t know（　）. （彼が何をしたいのか知りません）に入る適切な語の並びはどれですか。',
        options: ['what does he want', 'what he wants', 'what he want', 'what do he wants'],
        answer: 1,
        explanation: '間接疑問文は「疑問詞＋主語＋動詞」の語順で、does が消えて wants に s がつきます。',
      },
      {
        q: 'Do you know where（　）? の（　）に入る適切な語の並びはどれですか。',
        options: ['is the station', 'the station is', 'does the station', 'the station be'],
        answer: 1,
        explanation: '間接疑問文なので「where ＋ 主語 ＋ 動詞」の語順、the station is となります。',
      },
      {
        q: '「彼女がいつ来るか教えてください」という英文として正しいものはどれですか。',
        options: ['Tell me when will she come.', 'Tell me when she will come.', 'Tell me when does she come.', 'Tell me she comes when.'],
        answer: 1,
        explanation: '間接疑問文の語順は「疑問詞＋主語＋動詞」なので、when she will come です。',
      },
    ],
  },
  {
    id: 'g3-07',
    grade: 3,
    title: '不定詞・動名詞の発展',
    subtitle: 'It is 〜 to と注意すべきセット表現',
    category: '不定詞',
    sections: [
      {
        heading: 'It is ＋ 形容詞 ＋ to 不定詞',
        body: [
          '「〜することは（どんなに）〜だ」という文は「It is ＋ 形容詞 ＋ to 不定詞」の形で表せます。「It is fun to play soccer.（サッカーをすることは楽しい）」のように、to play soccer という不定詞の意味上の内容を、it が仮に受けている形です。',
          'この it を「形式上の主語」と呼びます。本当の主語は to 以下ですが、長い主語を文頭に置くと英語として不自然になるため、it を代わりに置くというしくみです。important（重要な）、difficult（難しい）、easy（やさしい）などの形容詞と組み合わせた「It is important to study English.（英語を勉強することは重要です）」のような文は、作文問題でも頻出です。',
        ],
        examples: [
          { en: 'It is fun to play soccer.', ja: 'サッカーをすることは楽しいです。' },
          { en: 'It is important to keep promises.', ja: '約束を守ることは大切です。' },
          { en: 'It is difficult for me to get up early.', ja: '早起きは私には難しいです。' },
        ],
        tip: 'It is ＋ 形容詞 ＋ to 〜 ＝「〜することは…だ」。「〜にとって」を加えるなら for 人 を形容詞の後ろに。',
      },
      {
        heading: 'too 〜 to と enough to',
        body: [
          '「too ＋ 形容詞 ＋ to 不定詞」は「あまりに〜なので…できない」という意味を表します。「He is too young to drive.（彼は運転するには若すぎます）」のように、否定のニュアンスを含む表現です。',
          '「形容詞 ＋ enough ＋ to 不定詞」は「〜するのに十分…だ」という意味です。「She is old enough to travel alone.（彼女は一人で旅行できる年齢です）」のように、肯定的なニュアンスになります。この2つは形が似ているのに意味が対照的なので、セットで覚えるのがおすすめです。',
        ],
        examples: [
          { en: 'He is too young to drive.', ja: '彼は運転するには若すぎます。' },
          { en: 'She is old enough to travel alone.', ja: '彼女は一人で旅行するのに十分な年齢です。' },
          { en: 'This book is too difficult for me to read.', ja: 'この本は私には難しすぎて読めません。' },
        ],
        tip: 'too 〜 to ＝ あまりに〜なので…できない。enough to ＝ …するのに十分〜だ。',
      },
      {
        heading: '動名詞の慣用表現',
        body: [
          '中学3年では、動名詞を使った決まった表現も学びます。「How about 〜ing?（〜するのはどうですか）」「be interested in 〜ing（〜することに興味がある）」のほか、「look forward to 〜ing（〜するのを楽しみに待っている）」は特に重要です。',
          'look forward to の to は前置詞なので、後ろには動名詞が来ます。「I\'m looking forward to seeing you.（お会いできるのを楽しみにしています）」のように、see ではなく seeing になります。to の後ろだから原形、と考えないように注意しましょう。',
        ],
        examples: [
          { en: 'I\u2019m looking forward to seeing you again.', ja: 'またお会いできるのを楽しみにしています。' },
          { en: 'How about going shopping this afternoon?', ja: '今日の午後、買い物に行くのはどうですか。' },
          { en: 'He is interested in learning Chinese.', ja: '彼は中国語を学ぶことに興味があります。' },
        ],
        tip: 'look forward to ＋ 動名詞（to は前置詞）。「〜するのを楽しみに待つ」は超頻出表現です。',
      },
    ],
    keyPoints: [
      'It is ＋ 形容詞 ＋ to 〜 ＝「〜することは…だ」',
      'too ＋ 形容詞 ＋ to 〜 ＝「あまりに〜なので…できない」',
      '形容詞 ＋ enough to 〜 ＝「…するのに十分〜だ」',
      'look forward to ＋ 動名詞 ＝「〜するのを楽しみにしている」',
    ],
    quiz: [
      {
        q: '「毎日英語を話すことは大切です」という英文として正しいものはどれですか。',
        options: ['It is important speak English every day.', 'It is important to speak English every day.', 'It is important speaking English every day.', 'That is important to speak English every day.'],
        answer: 1,
        explanation: 'It is ＋ 形容詞 ＋ to 不定詞 の形です。',
      },
      {
        q: 'He is too tired（　）. （彼は疲れすぎて歩けません）に入る適切な語はどれですか。',
        options: ['to walk', 'walk', 'walking', 'to walking'],
        answer: 0,
        explanation: 'too 〜 to ＋ 動詞の原形 で「あまりに〜なので…できない」を表します。',
      },
      {
        q: 'I\u2019m looking forward to（　）you. の（　）に入る適切な語はどれですか。',
        options: ['meet', 'meeting', 'met', 'to meet'],
        answer: 1,
        explanation: 'look forward to の to は前置詞なので、後ろは動名詞 meeting です。',
      },
    ],
  },
  {
    id: 'g3-08',
    grade: 3,
    title: '分詞の形容詞的用法',
    subtitle: '「〜している〜・〜された〜」の表現',
    category: '分詞',
    sections: [
      {
        heading: '現在分詞と過去分詞',
        body: [
          '現在分詞（-ing 形）と過去分詞（-ed 形／不規則形）は、名詞の前や後ろに置いて形容詞のように使えます。現在分詞は「（自分から見て）〜している」という能動的な意味、過去分詞は「〜された・〜された状態にある」という受身的な意味を表します。',
          '「the crying baby（泣いている赤ちゃん）」では赤ちゃんが自分で泣いています（能動）。「the broken window（割られた窓）」では窓が誰かに割られたものです（受動）。「a boy standing over there（あそこに立っている少年）」のように、後ろから名詞を説明することもあれば、「a sleeping dog（眠っている犬）」のように前から修飾することもあります。',
        ],
        table: {
          caption: '現在分詞と過去分詞の意味の違い',
          headers: ['形', '意味', '例'],
          rows: [
            ['現在分詞（ing）', '〜している（能動）', 'a smiling girl（微笑んでいる少女）'],
            ['過去分詞（ed）', '〜された（受動）', 'a broken chair（壊された椅子）'],
          ],
        },
        examples: [
          { en: 'Look at the girl dancing on the stage.', ja: 'ステージで踊っている少女を見てください。' },
          { en: 'The man named Ken is my teacher.', ja: 'ケンという名前の男性は私の先生です。' },
          { en: 'I know a store selling old books.', ja: '私は古い本を売っている店を知っています。' },
        ],
        tip: 'ing ＝ 自分で〜している、ed ＝ 〜された。主語との関係で選びます。',
      },
      {
        heading: '関係代名詞との書きかえ',
        body: [
          '分詞の形容詞的用法は、関係代名詞の文と書きかえられます。「The boy who is running over there is my brother.（あそこで走っている少年は私の兄弟です）」は、who is を取って「The boy running over there is my brother.」と書きかえられます。',
          'この書きかえは入試の定番問題です。手順は、（1）関係代名詞と be動詞を消す、（2）動詞を ing 形（または過去分詞）にする、です。進行形（is running）なら ing 形、受動態（is made）なら過去分詞になります。',
        ],
        examples: [
          { en: 'The boy running over there is my brother.', ja: 'あそこで走っている少年は私の兄弟です。' },
          { en: 'This is a doll made in Japan.', ja: 'これは日本で作られた人形です。' },
          { en: 'The people waiting for the bus got wet in the rain.', ja: 'バスを待っていた人たちは雨にぬれました。' },
        ],
        tip: '関係代名詞の書きかえ：who is ＋ 進行形 → ing 形、which is ＋ 受動態 → 過去分詞。',
      },
    ],
    keyPoints: [
      '現在分詞は「〜している」、過去分詞は「〜された」を表す',
      '名詞の後ろから説明するときは分詞を使える',
      'who is ＋ 動詞ing → 動詞ing（現在分詞）に書きかえ可',
      'which is ＋ 過去分詞 → 過去分詞のみに書きかえ可',
    ],
    quiz: [
      {
        q: '「あそこで歌っている女性は私の母です」という英文として適切なものはどれですか。',
        options: ['The woman singing over there is my mother.', 'The woman sung over there is my mother.', 'The woman sang over there is my mother.', 'The woman is singing over there is my mother.'],
        answer: 0,
        explanation: '「（自分で）歌っている」は現在分詞 singing で表します。',
      },
      {
        q: '「日本で書かれたその本」を表す語句として正しいものはどれですか。',
        options: ['the book writing in Japan', 'the book written in Japan', 'the book wrote in Japan', 'the book writes in Japan'],
        answer: 1,
        explanation: '本は「書かれる」側なので過去分詞 written を使います。',
      },
      {
        q: 'The man who is playing the guitar is famous. を分詞を使った文に書きかえると正しいものはどれですか。',
        options: ['The man play the guitar is famous.', 'The man playing the guitar is famous.', 'The man played the guitar is famous.', 'The man is playing the guitar famous.'],
        answer: 1,
        explanation: 'who is を消して、動詞を現在分詞 playing にします。',
      },
    ],
  },
  {
    id: 'g3-09',
    grade: 3,
    title: 'if / when の文と時制',
    subtitle: '「もし〜なら・〜のとき」の文の中の動詞の形',
    category: '接続詞',
    sections: [
      {
        heading: 'if 節では未来のことでも現在形',
        body: [
          '「もし〜なら」という条件の文（if 節）の中では、未来のことを表す場合でも現在形を使うというルールがあります。「If it rains tomorrow, we will cancel the game.（もし明日雨が降ったら、試合を中止します）」では、tomorrow があるのに if の中は rains と現在形です。',
          '結果の側（メインの文）はふつうどおり will ＋ 動詞の原形を使います。この「if 節は現在形、メインは will」の組み合わせは入試頻出なので、「if の後ろに will は置かない」としっかり覚えましょう。',
        ],
        examples: [
          { en: 'If it rains tomorrow, we will cancel the game.', ja: 'もし明日雨が降ったら、試合を中止します。' },
          { en: 'If you study hard, you will pass the test.', ja: 'もし一生懸命勉強したら、テストに合格するでしょう。' },
          { en: 'If I have time, I will help you.', ja: 'もし時間があれば、手伝います。' },
        ],
        tip: 'if 節の中では will を使わない。未来のことでも現在形で表します。',
      },
      {
        heading: 'when 節も同じルール',
        body: [
          'when（〜のとき）の文も、if と同じく節の中では現在形を使います。「When I get home, I will call you.（家に着いたら、電話します）」では、when の中は get と現在形です。',
          '「家に着く」と「電話する」のどちらも未来の出来事ですが、英語のルールとして when 節の側は現在形で表します。メインの文の will と組み合わせる形を覚えておきましょう。before / after なども同様に現在形を使います。',
        ],
        examples: [
          { en: 'When I get home, I will call you.', ja: '家に着いたら、電話します。' },
          { en: 'When she comes back, please tell her about it.', ja: '彼女が戻ってきたら、そのことについて彼女に伝えてください。' },
          { en: 'I will wash the dishes before I go to bed.', ja: '寝る前に皿を洗います。' },
        ],
        tip: 'when / before / after の節でも未来のことは現在形で表します。',
      },
    ],
    keyPoints: [
      'if 節（もし〜なら）の中では未来でも現在形を使う',
      'メインの文は will ＋ 動詞の原形',
      'when 節も同じく現在形で表す',
      'if / when の節に will を入れてはいけない',
    ],
    quiz: [
      {
        q: 'If it is fine tomorrow, we（　）to the beach. の（　）に入る適切な語はどれですか。',
        options: ['go', 'will go', 'went', 'going'],
        answer: 1,
        explanation: 'if 節の中は現在形（is）、メインの文は will go になります。',
      },
      {
        q: 'If you（　）up early, you will see the sunrise. の（　）に入る適切な語はどれですか。',
        options: ['will get', 'get', 'got', 'getting'],
        answer: 1,
        explanation: 'if 節の中では未来のことでも現在形 get を使います。',
      },
      {
        q: 'When I（　）home tomorrow, I will rest. の（　）に入る適切な語はどれですか。',
        options: ['will come', 'came', 'come', 'comes'],
        answer: 2,
        explanation: '主語が I なので come（現在形）です。when 節には will を入れません。',
      },
    ],
  },
  {
    id: 'g3-10',
    grade: 3,
    title: '時制の一致',
    subtitle: '「思った・言った」の後ろの動詞の形',
    category: '文構造',
    sections: [
      {
        heading: '時制の一致とは',
        body: [
          '「私は彼が学生だと思いました」のように、思う・言うなどの動詞が過去形（thought, said）のとき、その内容を表す that 節の中の動詞も過去形にそろえるルールがあります。これを「時制の一致」と呼びます。「I thought that he was a student.」のように、think → thought に合わせて is → was に変えます。',
          'このルールにより、「She said that she liked coffee.（彼女はコーヒーが好きだと言いました）」のように、said（過去）に合わせて like も liked になります。現在の文「She says that she likes coffee.」と比べると、両方の動詞が過去にそろっているのがわかります。',
        ],
        table: {
          caption: '時制の一致の例',
          headers: ['直接の言い方', '時制の一致後'],
          rows: [
            ['He is kind. → I thought that', 'he was kind.'],
            ['She likes music. → He said that', 'she liked music.'],
            ['They are late. → I knew that', 'they were late.'],
          ],
        },
        examples: [
          { en: 'I thought that he was a student.', ja: '私は彼が学生だと思いました。' },
          { en: 'She said that she liked coffee.', ja: '彼女はコーヒーが好きだと言いました。' },
          { en: 'He told me that he wanted to be a pilot.', ja: '彼はパイロットになりたいと私に言いました。' },
        ],
        tip: 'thought / said など過去形の後ろでは、that 節の動詞も過去形にそろえます。',
      },
      {
        heading: 'なりたたない場合',
        body: [
          '時制の一致には例外もあります。内容が「今も変わらない事実・普遍の真実」を表す場合は、過去形にしなくてもかまいません。「He said that the earth is round.（彼は地球は丸いと言いました）」のように、地球が丸いという普遍の事実は is のままでOKです。',
          'また、時制の一致の問題では、間接疑問文が組み合わさることもあります。「She asked me where I lived.（彼女は私がどこに住んでいるかたずねました）」では、asked（過去）に合わせて、間接疑問文の動詞も lived と過去形にしています。時制の一致と間接疑問文の語順を同時にチェックできる、レベルの高い問題です。',
        ],
        examples: [
          { en: 'He said that the earth is round.', ja: '彼は地球は丸いと言いました。（普遍の事実）' },
          { en: 'She asked me where I lived.', ja: '彼女は私がどこに住んでいるかたずねました。' },
          { en: 'I didn\u2019t know that you were a singer.', ja: 'あなたが歌手だったとは知りませんでした。' },
        ],
        tip: '「今も変わらない事実」は過去形にしなくてもOK。間接疑問文と組み合わさる問題にも慣れておきましょう。',
      },
    ],
    keyPoints: [
      'thought / said など過去形の動詞の後ろでは、that 節の動詞も過去形に',
      '「I thought that he was a student.」のように両方を過去にそろえる',
      '今も変わらない普遍の事実は現在形のままでよい',
      '間接疑問文でも時制の一致が起こる',
    ],
    quiz: [
      {
        q: 'He said that he（　）tired. の（　）に入る適切な語はどれですか。',
        options: ['is', 'was', 'will be', 'be'],
        answer: 1,
        explanation: 'said（過去形）に合わせて、that 節の中も過去形 was にします。',
      },
      {
        q: 'I thought that she（　）tennis. （彼女はテニスが好きだと思っていました）の（　）に入る適切な語はどれですか。',
        options: ['likes', 'liked', 'will like', 'like'],
        answer: 1,
        explanation: 'thought（過去形）に合わせて liked（過去形）にします。',
      },
      {
        q: 'She asked me where I（　）. の（　）に入る適切な語はどれですか。',
        options: ['live', 'do live', 'lived', 'am living to'],
        answer: 2,
        explanation: 'asked（過去形）に合わせて lived（過去形）にします。語順は「where ＋ 主語 ＋ 動詞」です。',
      },
    ],
  },
  {
    id: 'g3-11',
    grade: 3,
    title: '受動態の発展',
    subtitle: 'by 以外の前置詞を使う受動態',
    category: '受動態',
    sections: [
      {
        heading: '前置詞いろいろな受動態',
        body: [
          '受動態の動作主は by 〜 で表すのが基本ですが、動詞によっては be known to（〜に知られている）、be interested in（〜に興味がある）、be made from（〜から作られている）のように、別の前置詞を使う決まった表現があります。',
          '「be made of 〜」は「〜でできている」、be made from は「〜から作られている」という意味です。見た目で材料がわかるもの（木の机など）は of、見た目ではわからないもの（ワインなど）は from を使うのが目安です。「This desk is made of wood.（この机は木でできています）」「Wine is made from grapes.（ワインはぶどうから作られます）」のように使い分けます。',
        ],
        table: {
          caption: '前置詞を使った受動態の表現',
          headers: ['表現', '意味', '例'],
          rows: [
            ['be known to 〜', '〜に知られている', 'He is known to everyone.'],
            ['be interested in 〜', '〜に興味がある', 'She is interested in music.'],
            ['be made of 〜', '〜でできている', 'This ring is made of gold.'],
            ['be made from 〜', '〜から作られている', 'Wine is made from grapes.'],
            ['be covered with 〜', '〜でおおわれている', 'The mountain is covered with snow.'],
          ],
        },
        examples: [
          { en: 'This ring is made of gold.', ja: 'この指輪は金でできています。' },
          { en: 'Paper is made from trees.', ja: '紙は木から作られます。' },
          { en: 'The mountain is covered with snow in winter.', ja: 'その山は冬、雪におおわれます。' },
        ],
        tip: 'be made of ＝ 〜でできている（材料が見える）、be made from ＝ 〜から作られる（材料が見えない）。',
      },
      {
        heading: '進行形の受動態',
        body: [
          '中学3年では「be being ＋ 過去分詞」という進行形の受動態（〜されているところです）も扱われます。「The house is being built now.（その家は今建てられているところです）」のように、「be動詞＋being＋過去分詞」の形です。',
          'さらに「be going to be ＋ 過去分詞」で「〜される予定です」という未来の受動態も表せます。「A new school is going to be built here.（ここに新しい学校が建てられる予定です）」のように使います。受動態の基本形（be ＋ 過去分詞）に、進行形や未来形の要素が組み合わさった形と考えると、整理しやすくなります。',
        ],
        examples: [
          { en: 'The house is being built now.', ja: 'その家は今建てられているところです。' },
          { en: 'A new school is going to be built here.', ja: 'ここに新しい学校が建てられる予定です。' },
          { en: 'The road is being repaired this week.', ja: 'その道路は今週修理されているところです。' },
        ],
        tip: '〜されているところ ＝ be being ＋ 過去分詞。〜される予定 ＝ be going to be ＋ 過去分詞。',
      },
    ],
    keyPoints: [
      'be known to ／ be interested in ／ be made of / from など前置詞のセットがある',
      'be made of ＝ 材料が見える / be made from ＝ 材料が見えない',
      '進行形の受動態は「be being ＋ 過去分詞」',
      '未来の受動態は「be going to be ＋ 過去分詞」',
    ],
    quiz: [
      {
        q: 'This desk is made（　）wood. の（　）に入る適切な前置詞はどれですか。',
        options: ['from', 'of', 'with', 'by'],
        answer: 1,
        explanation: '机は木で「できていて」材料が見えるので of を使います。',
      },
      {
        q: 'She is interested（　）music. の（　）に入る適切な前置詞はどれですか。',
        options: ['to', 'of', 'in', 'at'],
        answer: 2,
        explanation: 'be interested in 〜（〜に興味がある）のセット表現です。',
      },
      {
        q: '「その家は今建てられているところです」という英文として正しいものはどれですか。',
        options: ['The house is being built now.', 'The house is building now.', 'The house is been built now.', 'The house builds now.'],
        answer: 0,
        explanation: '進行形の受動態は「be being ＋ 過去分詞」です。',
      },
    ],
  },
  {
    id: 'g3-12',
    grade: 3,
    title: '仮定法の基礎（高校につながる発展）',
    subtitle: '「もし〜だったら」非現実のもしを表す形',
    category: '発展',
    sections: [
      {
        heading: '仮定法とは',
        body: [
          '「もし私が鳥だったら、君のもとへ飛んでいけるのに」のように、現実にはありえないことを仮定して言う表現が仮定法です。中学3年の段階では、高校英語へのつながりとして「If I were 〜, I would 〜.（もし私が〜だったら、〜するのに）」という基本形を知っておくと役立ちます。',
          '注目ポイントは、If の中で is ではなく were を使うことです。「If I were you, I would apologize.（もし私があなたなら、謝るのに）」のように、主語が I でも were になります。これは「現実には私ではない」という非現実を示す特別な形です。',
        ],
        examples: [
          { en: 'If I were you, I would apologize.', ja: 'もし私があなたなら、謝るのに。' },
          { en: 'If I were a bird, I could fly to you.', ja: 'もし私が鳥だったら、あなたのもとへ飛んでいけるのに。' },
          { en: 'If I had more time, I would travel around the world.', ja: 'もっと時間があったら、世界を旅するのに。' },
        ],
        tip: '仮定法の if の中では were を使う（If I were 〜）。高校英語の入口にあたる表現です。',
      },
      {
        heading: 'if の文との違い',
        body: [
          '中学で学んだ if の文（If it rains, we will stay home.）は、現実に起こりうる条件を表します。一方、仮定法の if の文は「起こりえないこと・ありそうもないこと」を表します。形の違いは、if の中が現在形＋メインが will（現実的条件）か、if の中が過去形＋メインが would（非現実）かです。',
          'この2つを比べると、仮定法は「時制を1つ過去にずらす」ことで非現実を表しているとわかります。「If I have time（時間があれば＝現実的にありうる）」に対して「If I had time（時間があったら＝実は時間がない）」のように、過去形にすることで「今はそうではない」という気持ちを込めます。高校で本格的に学ぶ内容への良い準備になるでしょう。',
        ],
        table: {
          caption: '現実の if と仮定法の if',
          headers: ['種類', 'if 節', 'メインの文', '意味'],
          rows: [
            ['現実の条件', 'If it rains tomorrow,', 'we will stay home.', '明日雨が降ったら（降るかもしれない）'],
            ['仮定法', 'If I were rich,', 'I would buy it.', 'もし金持ちだったら（実際は違う）'],
          ],
        },
        examples: [
          { en: 'If it rains tomorrow, we will stay home.', ja: 'もし明日雨が降ったら、家にいます。（現実）' },
          { en: 'If I were rich, I would buy a big house.', ja: 'もし金持ちだったら、大きな家を買うのに。（非現実）' },
        ],
        tip: 'if ＋ 現在形 ＋ will ＝ 現実の条件。if ＋ 過去形 ＋ would ＝ 非現実の仮定。',
      },
    ],
    keyPoints: [
      '仮定法は現実にはありえないことを仮定する表現',
      '基本形は「If I were 〜, I would 〜.」',
      'if 節では主語が I でも were を使う',
      'if ＋ 過去形 ＋ would で非現実を表す（高校につながる）',
    ],
    quiz: [
      {
        q: 'もし私があなたなら行くのに、という文として適切なものはどれですか。',
        options: ['If I am you, I will go.', 'If I were you, I would go.', 'If I was you, I went.', 'If I were you, I will go.'],
        answer: 1,
        explanation: '仮定法の基本形は「If I were 〜, I would ＋ 動詞の原形」です。',
      },
      {
        q: '仮定法の if 節で主語が I のとき、be動詞はどの形を使いますか。',
        options: ['am', 'is', 'are', 'were'],
        answer: 3,
        explanation: '仮定法では主語が I でも were を使うのがルールです。',
      },
      {
        q: 'If I（　）a bird, I could fly. （もし私が鳥だったら、飛べるのに）の（　）に入る適切な語はどれですか。',
        options: ['am', 'was', 'were', 'will be'],
        answer: 2,
        explanation: '非現実の仮定を表す仮定法では were を使います。',
      },
    ],
  },
]
