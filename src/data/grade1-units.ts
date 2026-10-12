import type { Unit } from './types'

export const grade1Units: Unit[] = [
  {
    id: 'g1-01',
    grade: 1,
    title: '英語のきほん：アルファベットと文のしくみ',
    subtitle: '大文字・小文字、語順のルールを学ぶ',
    category: 'きほん',
    sections: [
      {
        heading: 'アルファベットは英語の土台',
        body: [
          '英語の文はすべて26文字のアルファベットで書かれます。日本語のローマ字と基本的には同じ文字ですが、アルファベットには各々「大文字（A, B, C…）」と「小文字（a, b, c…）」の2種類があります。文の最初の1文字と、人名・国名などの固有名詞の最初の文字は必ず大文字で書くというルールがあります。',
          'たとえば「私は学生です」という文は「I am a student.」となります。文頭の I と a の間には必ずスペースを入れ、文の最後にはピリオド（.）を打ちます。疑問文の場合は最後にクエスチョンマーク（?）を打ちます。この「語と語の間のスペース」と「文末の句読点」は、日本語の文章にはない英語特有のルールなので、最初に必ず身につけましょう。',
        ],
        examples: [
          { en: 'I am a student.', ja: '私は学生です。' },
          { en: 'My name is Yuki.', ja: '私の名前はユキです。' },
          { en: 'Are you happy?', ja: 'あなたは幸せですか。' },
        ],
        tip: '単語と単語の間には必ずスペース。文の最後には .（ピリオド）か ?（クエスチョンマーク）を忘れずに。',
      },
      {
        heading: '英語は「語順」で意味が決まる',
        body: [
          '日本語は「私はりんごを食べる」のように、動詞が文の最後に来ますが、英語では基本的に「主語＋動詞＋〜」の順番、つまりWho（だれが）が最初に来て、What（何を）するかが次に来ます。これを「SVOの語順」と呼び、英語の心臓部ともいえるルールです。',
          'たとえば「私はサッカーをする」は「I play soccer.」となり、「私」が主語（S）、「する」が動詞（V）、「サッカー」が目的語（O）です。日本語の意味をそのまま単語ごと英語に並べ替えるのではなく、「だれが → どうする → 何を」の順に並べる癖をつけることが、英語上達の第一歩です。',
        ],
        examples: [
          { en: 'I play soccer.', ja: '私はサッカーをします。' },
          { en: 'She likes music.', ja: '彼女は音楽が好きです。' },
          { en: 'We study English.', ja: '私たちは英語を勉強します。' },
        ],
        tip: '語順は「S（だれが）→ V（どうする）→ O（何を）」。日本語訳から英文を作るときは、まず主語を決めよう。',
      },
    ],
    keyPoints: [
      'アルファベットは26文字。文頭・人名・国名の最初は大文字',
      '単語の間にはスペース、文末には . か ? をつける',
      '英語の基本語順は「主語＋動詞＋目的語（SVO）」',
    ],
    quiz: [
      {
        q: '「私はサッカーをします」を英語の語順に並べ替えるとどうなりますか。',
        options: ['I soccer play.', 'I play soccer.', 'Soccer I play.', 'Play I soccer.'],
        answer: 1,
        explanation: '英語は「主語＋動詞＋目的語」の順です。「I（主語）play（動詞）soccer（目的語）」の語順になります。',
      },
      {
        q: '英文で単語と単語の間に入れるものは何ですか。',
        options: ['カンマ（,）', 'スペース（空欄）', 'ピリオド（.）', 'コロン（:）'],
        answer: 1,
        explanation: '英語では単語と単語の間に必ずスペースを入れます。カンマやピリオドは句読点であり、単語の区切りではありません。',
      },
      {
        q: '次の英文のうち、文頭の大文字の使い方が正しいものはどれですか。',
        options: ['my name is Yuki.', 'My name is yuki.', 'My name is Yuki.', 'my Name is yuki.'],
        answer: 2,
        explanation: '文頭の最初の文字（M）と、人名（Yuki）の最初の文字は大文字にします。',
      },
    ],
  },
  {
    id: 'g1-02',
    grade: 1,
    title: 'be動詞（am / is / are）',
    subtitle: '「〜です・いる・ある」を表す特別な動詞',
    category: '動詞',
    sections: [
      {
        heading: 'be動詞は主語によって形が変わる',
        body: [
          'be動詞は「〜です」「〜がいる・ある」を表す動詞で、英語の文の中心の一つです。be動詞には am, is, are の3種類があり、主語（文の主役である人やもの）が何であるかによって使い分けます。日本語の「です・ます」にひとまとめになっているのに対し、英語では主語の種類に応じて3つに変化するのがポイントです。',
          '使い分けのルールは「I（私）なら am」「you（あなた）、we（私たち）、they（彼ら/それら）なら are」「he（彼）、she（彼女）、it（それ）や単数の名詞（Yuki, my father, this book など）なら is」です。主語が単数か複数か、そして誰について語っているのかを先に確認してから、be動詞を選ぶようにしましょう。',
        ],
        table: {
          caption: '主語とbe動詞の対応表',
          headers: ['主語', '種類', 'be動詞'],
          rows: [
            ['I', '私', 'am'],
            ['You', 'あなた・あなたたち', 'are'],
            ['He / She / It', '彼・彼女・それ', 'is'],
            ['This is a pen. の this', '単数のもの', 'is'],
            ['We / They / My parents', '複数', 'are'],
            ['Yuki / My father', '単数の人物', 'is'],
          ],
        },
        examples: [
          { en: 'I am a student.', ja: '私は学生です。' },
          { en: 'You are my best friend.', ja: 'あなたは私のいちばんの友達です。' },
          { en: 'He is a teacher.', ja: '彼は先生です。' },
          { en: 'We are in the same class.', ja: '私たちは同じクラスにいます。' },
        ],
        tip: '「I am / You are / He is …」はリズムに乗って音読して覚えると、主語とbe動詞の組み合わせが自然に身につきます。',
      },
      {
        heading: '否定文は be動詞＋not',
        body: [
          'be動詞の文を否定する（「〜ではありません」）ときは、be動詞のすぐ後ろに not を置くだけです。am not, is not, are not の形になり、is not は isn\'t、are not は aren\'t と短縮することもできます。am not には短縮形がありません。',
          '「〜が〜にいません」「〜にありません」という存在の否定も同じ形で表せます。たとえば She is not at home. は「彼女は家にいません」という意味になります。',
        ],
        examples: [
          { en: 'I am not a doctor.', ja: '私は医者ではありません。' },
          { en: 'She is not (isn\u2019t) at home.', ja: '彼女は家にいません。' },
          { en: 'They are not (aren\u2019t) students.', ja: '彼らは学生ではありません。' },
          { en: 'This book is not interesting.', ja: 'この本はおもしろくありません。' },
        ],
        tip: '否定文は「be動詞の後ろに not」のひとつのルールだけ。短縮形（isn\u2019t / aren\u2019t）も一緒に覚えよう。',
      },
      {
        heading: '疑問文は be動詞を文頭へ',
        body: [
          'be動詞の文を疑問文（「〜ですか」）にするには、be動詞を主語の前に出します。「You are a student.（あなたは学生です）」→「Are you a student?（あなたは学生ですか）」というように、語順を入れ替えるだけで疑問文が完成します。文末には ? を忘れないようにしましょう。',
          '答えるときは、Yes / No で受けたあと、主語とbe動詞で答えます。「Are you a student?」には「Yes, I am.」または「No, I\'m not.」と答えます。疑問文で使った be動詞をそのまま使って答えるのがポイントです。',
        ],
        examples: [
          { en: 'Are you a student? — Yes, I am. / No, I\u2019m not.', ja: 'あなたは学生ですか。— はい、そうです。/ いいえ、違います。' },
          { en: 'Is he your brother? — Yes, he is. / No, he isn\u2019t.', ja: '彼はあなたの兄ですか。— はい、そうです。/ いいえ、違います。' },
          { en: 'Is this your bag?', ja: 'これはあなたのバッグですか。' },
        ],
        tip: '疑問文は「be動詞を主語の前へ」、答えは「Yes/No ＋ 主語 ＋ be動詞」。be動詞の使い分けと並んで、中学英語の超基本パターンです。',
      },
    ],
    keyPoints: [
      'be動詞は am / is / are の3種類で、主語によって使い分ける',
      '否定文は「be動詞＋not」（isn\u2019t / aren\u2019t の短縮形もある）',
      '疑問文は「be動詞＋主語」の順に入れ替え、文末に ? をつける',
      '疑問文への答えは「Yes/No ＋ 主語 ＋ be動詞」',
    ],
    quiz: [
      {
        q: '（　）に入る適切なbe動詞はどれですか。My sister （　） a nurse.',
        options: ['am', 'is', 'are', 'be'],
        answer: 1,
        explanation: 'My sister（私の姉）は三人称単数の主語なので is を使います。',
      },
      {
        q: 'They are teachers. を否定文にするとき、正しいものはどれですか。',
        options: ['They not are teachers.', 'They are not teachers.', 'They is not teachers.', 'They do not teachers.'],
        answer: 1,
        explanation: 'be動詞の否定文は「be動詞＋not」です。They are not teachers.（または They aren\u2019t teachers.）となります。',
      },
      {
        q: 'She is a good singer. を疑問文にするにはどうしますか。',
        options: ['She is a good singer?', 'Is she a good singer?', 'Does she is a good singer?', 'A good singer is she?'],
        answer: 1,
        explanation: 'be動詞の疑問文は、be動詞（is）を主語（she）の前に出します。「Is she a good singer?」となります。',
      },
    ],
  },
  {
    id: 'g1-03',
    grade: 1,
    title: '一般動詞の文（現在形・肯定文）',
    subtitle: 'be動詞以外の動詞で「〜する」を表す',
    category: '動詞',
    sections: [
      {
        heading: '一般動詞とは',
        body: [
          'be動詞以外の動詞（play, study, like, eat など）を「一般動詞」と呼びます。一般動詞は「〜する」「〜するのが好きだ」のように、動作や状態を表します。現在形は「今、ふだんしていること」や「習慣・事実」を表すのが基本です。',
          '主語が I, You, We, They の場合、動詞は原形（辞書に載っている形）のまま使います。「私は毎日勉強する」は「I study every day.」のように、主語のすぐ後ろに一般動詞を置くだけです。日本語の「私はりんごを食べます」を英語にすると「I eat apples.」となり、動詞が目的語の前に来る点に注意しましょう。',
        ],
        examples: [
          { en: 'I play baseball after school.', ja: '私は放課後に野球をします。' },
          { en: 'We study English every day.', ja: '私たちは毎日英語を勉強します。' },
          { en: 'They like music very much.', ja: '彼らは音楽がとても好きです。' },
          { en: 'You speak Japanese well.', ja: 'あなたは日本語を上手に話します。' },
        ],
        tip: '主語が I / You / We / They なら動詞は原形のまま。「S（主語）＋ V（動詞）＋ O（目的語）」の語順を守りましょう。',
      },
      {
        heading: '主語と動詞のセットで意味が決まる',
        body: [
          '一般動詞の文では、主語と動詞の組み合わせがとても大切です。play soccer（サッカーをする）、study math（数学を勉強する）、watch TV（テレビを見る）のように、動詞と目的語がセットでひとつの意味を作ります。単語を1個ずつ覚えるより、「動詞＋名詞」のセット（句）で覚えるほうが、英文を作るときに素早く思い出せます。',
          'また、have（持っている・食べる）、like（好きだ）、want（欲しい）などは頻出動詞です。これらは中学英語全体を通じて何度も登場するので、まず形と意味をしっかり頭に入れておきましょう。',
        ],
        examples: [
          { en: 'I have two brothers.', ja: '私には二人の兄（弟）がいます。' },
          { en: 'She wants a new bike.', ja: '彼女は新しい自転車が欲しいです。' },
          { en: 'We watch TV in the evening.', ja: '私たちは夕方にテレビを見ます。' },
        ],
        tip: '動詞は単体ではなく「play soccer」「watch TV」のようにセットで暗記すると英文が作りやすくなります。',
      },
    ],
    keyPoints: [
      'be動詞以外の動詞が一般動詞。「〜する」という動作・習慣を表す',
      '主語が I / You / We / They なら一般動詞は原形を使う',
      '「主語＋動詞＋目的語（SVO）」の語順で文を作る',
      '動詞は名詞とセットで覚えると効果的',
    ],
    quiz: [
      {
        q: '「私は毎朝パンを食べます」を表す英文として正しいものはどれですか。',
        options: ['I every morning eat bread.', 'I eat bread every morning.', 'I eating bread every morning.', 'Eat I bread every morning.'],
        answer: 1,
        explanation: '「主語＋動詞＋目的語」の語順です。時を表す語句（every morning）は文の後ろに置くのが基本です。',
      },
      {
        q: '主語が They のとき、動詞の形はどうなりますか。',
        options: ['原形のまま', '語尾に s がつく', '語尾に ed がつく', 'ing の形になる'],
        answer: 0,
        explanation: '主語が They（複数）のとき、現在形の動詞は原形のままです。語尾に s がつくのは主語が三人称単数（he, she, it など）のときです。',
      },
      {
        q: 'We（　）music. の（　）に入る適切な語はどれですか。',
        options: ['likes', 'like', 'liking', 'liked'],
        answer: 1,
        explanation: '主語が We の場合、動詞 like は原形のまま使います。',
      },
    ],
  },
  {
    id: 'g1-04',
    grade: 1,
    title: '一般動詞の否定文・疑問文（do / does）',
    subtitle: '助動詞 do / does のはたらき',
    category: '動詞',
    sections: [
      {
        heading: '否定文は「do not ＋ 動詞の原形」',
        body: [
          '一般動詞の文を否定するときは、主語の後ろに do not（don\'t）を置き、そのあとに動詞の原形を続けます。注意しなければならないのは、主語が三人称単数（he, she, it など）のときは do の代わりに does not（doesn\'t）を使い、動詞の語尾の s を取って原形に戻すことです。',
          'たとえば「彼は肉を食べません」は「He doesn\'t eat meat.」です。このとき eats ではなく原形の eat を使うのが最大のポイントです。don\'t や doesn\'t が「〜しない」という否定の意味をすでに持っているので、動詞本体は原形に戻す、と覚えましょう。',
        ],
        table: {
          caption: '主語と do / does の対応',
          headers: ['主語', '否定文の形'],
          rows: [
            ['I / You / We / They', 'do not (don\u2019t) ＋ 動詞の原形'],
            ['He / She / It ＋ 単数名詞', 'does not (doesn\u2019t) ＋ 動詞の原形'],
          ],
        },
        examples: [
          { en: 'I don\u2019t play video games on weekdays.', ja: '私は平日にテレビゲームをしません。' },
          { en: 'She doesn\u2019t like coffee.', ja: '彼女はコーヒーが好きではありません。' },
          { en: 'We don\u2019t have classes today.', ja: '私たちには今日授業がありません。' },
        ],
        tip: 'doesn\u2019t を使ったら動詞は必ず原形に戻す。「doesn\u2019t eats」は❌、「doesn\u2019t eat」が○。',
      },
      {
        heading: '疑問文は文頭に Do / Does',
        body: [
          '一般動詞の疑問文は、文頭に Do または Does を置き、動詞を原形にします。主語が三人称単数なら Does、それ以外なら Do を使います。文の形は「Do / Does ＋ 主語 ＋ 動詞の原形〜?」です。',
          '答え方は「Yes, I do. / No, I don\'t.」「Yes, she does. / No, she doesn\'t.」のように、疑問文で使った do / does で受けます。be動詞の疑問文に Yes, I am. と答えるのと同じしくみだと考えるとわかりやすいでしょう。',
        ],
        examples: [
          { en: 'Do you play the piano? — Yes, I do. / No, I don\u2019t.', ja: 'あなたはピアノを弾きますか。— はい、弾きます。/ いいえ、弾きません。' },
          { en: 'Does he like sports? — Yes, he does. / No, he doesn\u2019t.', ja: '彼はスポーツが好きですか。— はい、好きです。/ いいえ、好きではありません。' },
          { en: 'Do they live in Tokyo?', ja: '彼らは東京に住んでいますか。' },
        ],
        tip: '疑問文も否定文と同じで、Does を使ったら動詞は原形に戻す。「Does he likes〜」は❌、「Does he like〜」が○。',
      },
    ],
    keyPoints: [
      '否定文は「don\u2019t / doesn\u2019t ＋ 動詞の原形」',
      '疑問文は「Do / Does ＋ 主語 ＋ 動詞の原形〜?」',
      '三人称単数のときは does / doesn\u2019t を使い、動詞は原形に戻す',
      '答え方は「Yes/No ＋ 主語 ＋ do / does」',
    ],
    quiz: [
      {
        q: 'She likes apples. を否定文にすると正しいものはどれですか。',
        options: ['She doesn\u2019t likes apples.', 'She doesn\u2019t like apples.', 'She don\u2019t like apples.', 'She not like apples.'],
        answer: 1,
        explanation: '主語が三人称単数なので doesn\u2019t を使い、動詞は原形の like に戻します。',
      },
      {
        q: 'あなたは朝ごはんを食べますか、という疑問文として正しいものはどれですか。',
        options: ['Do you eat breakfast?', 'Does you eat breakfast?', 'Are you eat breakfast?', 'You do eat breakfast?'],
        answer: 0,
        explanation: '主語が you なので文頭は Do、動詞は原形の eat です。',
      },
      {
        q: 'Does your father drive a car? の答えとして適切なものはどれですか。',
        options: ['Yes, he is.', 'Yes, he does.', 'Yes, he do.', 'Yes, he doesn\u2019t.'],
        answer: 1,
        explanation: 'Does で聞かれた質問には does で答えます。「Yes, he does.（はい、運転します）」です。',
      },
    ],
  },
  {
    id: 'g1-05',
    grade: 1,
    title: '三人称単数の s（三単現の s）',
    subtitle: 'he / she / it が主語のとき動詞に s がつく',
    category: '動詞',
    sections: [
      {
        heading: '「三人称単数」とは何か',
        body: [
          '「三人称」とは、話し手（一人称：I, we）でも聞き手（二人称：you）でもない人やもののことです。「単数」はそれがひとつであることを意味します。つまり三人称単数とは、he（彼）、she（彼女）、it（それ）、Yuki（ユキ）、my mother（私の母）、this dog（この犬）のように「話している相手以外の、ひとりの人物やひとつのもの」を指す主語のことです。',
          '現在形の文で主語が三人称単数のとき、一般動詞の語尾に s（または es）をつけるルールがあります。これは「三人称単数現在の s」、通称「三単現の s」と呼ばれ、中学英語で最も間違えやすいポイントの一つです。I play tennis. に対して She plays tennis. のようになります。',
        ],
        table: {
          caption: '人称の整理',
          headers: ['人称', '主語の例', '動詞の形（現在形）'],
          rows: [
            ['一人称単数', 'I', '原形（play）'],
            ['二人称', 'you', '原形（play）'],
            ['三人称単数', 'he / she / it / Yuki / my mother', 's つき（plays）'],
            ['一人称・三人称複数', 'we / they / my parents', '原形（play）'],
          ],
        },
        examples: [
          { en: 'She plays the piano every day.', ja: '彼女は毎日ピアノを弾きます。' },
          { en: 'My father works at a bank.', ja: '私の父は銀行で働いています。' },
          { en: 'Ken likes dogs.', ja: 'ケンは犬が好きです。' },
          { en: 'It rains a lot in June.', ja: '6月はたくさん雨が降ります。' },
        ],
        tip: '主語をチェックしたら「he / she / it に言い換えられるか？」を確認。言い換えられたら動詞に s をつけます。',
      },
      {
        heading: 's のつけ方のパターン',
        body: [
          '動詞への s のつけ方にはいくつかのパターンがあります。多くの動詞はそのまま s をつけるだけですが、語尾の文字によっては es にしたり、形が変わったりするものがあります。特に「sh, ch, s, x, o で終わる動詞は es」になる点と、「子音字＋y」で終わる動詞は y を i に変えて es になる点はよく出題されます。',
          'また、have は has に、go は goes になるなど、不規則に変化するものも少しだけあります。has と goes は頻出なので、セットで覚えてしまうのがよいでしょう。',
        ],
        table: {
          caption: '三人称単数の s のつけ方',
          headers: ['パターン', '例', '変化'],
          rows: [
            ['ふつうの動詞', 'play, like, eat', 'plays, likes, eats'],
            ['s, sh, ch, x, o で終わる', 'watch, wash, go', 'watches, washes, goes'],
            ['子音字＋y で終わる', 'study, cry', 'studies, cries'],
            ['不規則な変化', 'have', 'has'],
          ],
        },
        examples: [
          { en: 'He watches TV after dinner.', ja: '彼は夕食の後にテレビを見ます。' },
          { en: 'She studies math hard.', ja: '彼女は数学を一生懸命勉強します。' },
          { en: 'My brother has many books.', ja: '私の兄（弟）はたくさんの本を持っています。' },
        ],
        tip: '「ス・シュ・チュ・ックス・オで終わったら es」＋「have は has、go は goes」。この2つを押さえればOK。',
      },
    ],
    keyPoints: [
      '三人称単数＝he / she / it / 人名 / 単数の名詞が主語のこと',
      '現在形で主語が三人称単数なら、動詞に s（es）をつける',
      's, sh, ch, x, o で終わる動詞は es をつける（watches, goes など）',
      '子音字＋y で終わる動詞は y を i に変えて es（study → studies）',
      'have は has、go は goes に不規則変化',
    ],
    quiz: [
      {
        q: 'She（　）to school every day. の（　）に入る正しい形はどれですか。',
        options: ['go', 'goes', 'going', 'gos'],
        answer: 1,
        explanation: '主語が She（三人称単数）で、go は o で終わる動詞なので es をつけて goes になります。',
      },
      {
        q: 'He（　）his homework after school. の（　）に入る正しい形はどれですか。',
        options: ['do', 'does', 'dos', 'doing'],
        answer: 1,
        explanation: '主語が He（三人称単数）なので、do に es がついた does を使います。',
      },
      {
        q: '次のうち、動詞の形が正しい英文はどれですか。',
        options: ['My mother cook dinner.', 'My mother cooks dinner.', 'My mother cooking dinner.', 'My mother to cook dinner.'],
        answer: 1,
        explanation: 'my mother は三人称単数なので、cook に s がついた cooks が正解です。',
      },
    ],
  },
  {
    id: 'g1-06',
    grade: 1,
    title: '名詞の複数形',
    subtitle: '「〜たち・〜枚」を表す s / es のルール',
    category: '名詞',
    sections: [
      {
        heading: '複数形は基本的に s をつける',
        body: [
          '英語で「2つ以上のもの」を表すときは、名詞を複数形にします。基本ルールはシンプルで、ほとんどの名詞は語尾に s をつけるだけです。one book（1冊の本）なら two books（2冊の本）のように、数が2以上なら必ず複数形にします。日本語にはない感覚なので、「2個以上＝s」と反射的に思い浮かべるようにしましょう。',
          'ただし、名詞の語尾によっては es をつけたり、y を i に変えたりするパターンがあります。動詞の三単現の s とルールがよく似ているので、セットで覚えると効率的です。',
        ],
        table: {
          caption: '複数形のつけ方',
          headers: ['パターン', '単数形', '複数形'],
          rows: [
            ['ふつうの名詞', 'book, pen, apple', 'books, pens, apples'],
            ['s, sh, ch, x で終わる', 'bus, dish, box', 'buses, dishes, boxes'],
            ['子音字＋y で終わる', 'city, story, family', 'cities, stories, families'],
            ['f / fe で終わるもの', 'leaf, knife', 'leaves, knives'],
          ],
        },
        examples: [
          { en: 'I have three books.', ja: '私は3冊の本を持っています。' },
          { en: 'There are many buses on the street.', ja: '通りにはたくさんのバスがあります。' },
          { en: 'She has two watches.', ja: '彼女は2つの時計を持っています。' },
        ],
        tip: '数が2以上（two, three, many, a lot of など）なら複数形。まず数を確認してから s / es を判断しましょう。',
      },
      {
        heading: '不規則に変わる複数形',
        body: [
          'すべての名詞が s / es で複数形になるわけではありません。man → men、woman → women、child → children、foot → feet、tooth → teeth のように、母音が変わるものや、まったく別の形になるものがあります。これらは中学英語で頻出なので、個別に暗記する必要があります。',
          'また、sheep（羊）や fish（魚）のように、単数と複数が同じ形の名詞もあります。「a sheep（1匹の羊）」「two sheep（2匹の羊）」のように、数によって形が変わりません。fish にも fishes という形がありますが、ふつうは fish のまま使います。',
        ],
        table: {
          caption: '不規則な複数形（要暗記）',
          headers: ['単数形', '複数形', '意味'],
          rows: [
            ['man', 'men', '男の人'],
            ['woman', 'women', '女の人'],
            ['child', 'children', '子ども'],
            ['foot', 'feet', '足'],
            ['tooth', 'teeth', '歯'],
            ['person', 'people', '人（ひとりの人 / 人々）'],
            ['sheep', 'sheep', '羊（形は同じ）'],
          ],
        },
        examples: [
          { en: 'There are many children in the park.', ja: '公園にはたくさんの子どもがいます。' },
          { en: 'Two women are talking.', ja: '2人の女性が話しています。' },
          { en: 'I brush my teeth twice a day.', ja: '私は1日に2回歯をみがきます。' },
        ],
        tip: '不規則複数形は「man→men、child→children、foot→feet、tooth→teeth、person→people」の5組を最優先で暗記。',
      },
    ],
    keyPoints: [
      '2つ以上のものは名詞を複数形にする（基本は s をつける）',
      's, sh, ch, x で終わる名詞は es（buses, boxes など）',
      '子音字＋y は y を i に変えて es（cities, stories など）',
      '不規則変化：man→men, child→children, foot→feet, person→people など',
    ],
    quiz: [
      {
        q: '「私は2人の兄（弟）がいます」を表す英文として正しいものはどれですか。',
        options: ['I have two brother.', 'I have two brothers.', 'I have two brotheres.', 'I have two brethren.'],
        answer: 1,
        explanation: 'two（2つ）があるので brother を複数形にします。brother はふつうの名詞なので s をつけるだけです。',
      },
      {
        q: 'child の複数形はどれですか。',
        options: ['childs', 'childes', 'children', 'childrens'],
        answer: 2,
        explanation: 'child は不規則変化で、複数形は children です。s をつけた childs は誤りです。',
      },
      {
        q: 'city の複数形はどれですか。',
        options: ['citys', 'cityes', 'cities', 'cities\u2019'],
        answer: 2,
        explanation: 'city は「子音字＋y」で終わるので、y を i に変えて es をつけて cities になります。',
      },
    ],
  },
  {
    id: 'g1-07',
    grade: 1,
    title: '冠詞（a / an / the）',
    subtitle: '「ひとつの・特定の」を表す小さな言葉',
    category: '名詞',
    sections: [
      {
        heading: 'a と an の使い分け',
        body: [
          'a と an は「（不特定の）ひとつの〜」を表す冠詞で、数えられる名詞の単数形につきます。a と an の違いは、次に来る単語の発音です。発音が母音で始まる名詞の前では an を使い、それ以外では a を使います。たとえば an apple（リンゴ）、an egg（卵）、an hour（1時間）ですが、a book（本）、a dog（犬）、a university（大学）のように、つづりが母音でも発音が子音なら a を使います。',
          '逆に hour（アワー）はつづりが h で始まっていますが、発音は母音で始まるので an hour になります。判断基準は「つづり」ではなく「音」だという点が、この単元の最重要ポイントです。',
        ],
        table: {
          caption: 'a と an の使い分け',
          headers: ['冠詞', '次の語の発音', '例'],
          rows: [
            ['a', '子音で始まる', 'a book, a cat, a university, a one-way street'],
            ['an', '母音で始まる', 'an apple, an egg, an hour, an umbrella'],
          ],
        },
        examples: [
          { en: 'I have a pen and an eraser.', ja: '私はペンと消しゴムを1つずつ持っています。' },
          { en: 'She ate an apple.', ja: '彼女はリンゴを1個食べました。' },
          { en: 'There is a big tree in the park.', ja: '公園に大きな木が1本あります。' },
        ],
        tip: '判断は「つづり」ではなく「発音」。an hour（h は読まない）、a university（ユで始まる）に注意。',
      },
      {
        heading: 'the は「特定できるもの」につける',
        body: [
          'the は「その〜」「あの〜」のように、話し手と聞き手の両方が「どれのことか」を分かっている特定のものに使います。一度出てきた名詞をもう一度言うときや、状況から1つに特定できるものに使うのが基本です。',
          'たとえば I have a dog. The dog is very cute.（私は犬を飼っています。その犬はとてもかわいいです）では、最初は a dog として紹介し、2回目からは the dog で「その犬」を指します。また the sun（太陽）や the moon（月）のように、世界にひとつしかないものにも the をつけます。',
        ],
        examples: [
          { en: 'I have a dog. The dog is white.', ja: '私は犬を飼っています。その犬は白いです。' },
          { en: 'The sun is big and bright.', ja: '太陽は大きくて明るいです。' },
          { en: 'Please open the window.', ja: 'その窓を開けてください。' },
        ],
        tip: '初登場は a / an、2回目からは the。「世界にひとつ」のもの（the sun など）は最初から the。',
      },
    ],
    keyPoints: [
      'a / an は「不特定のひとつの」、the は「特定の」を表す',
      'a と an の使い分けは次の単語の「発音」で決める',
      '一度出てきた名詞を再び言うときは the をつける',
      'the sun, the moon のように世界にひとつのものには the',
    ],
    quiz: [
      {
        q: '（　）apple の（　）に入る適切な冠詞はどれですか。',
        options: ['a', 'an', 'the', '入らない'],
        answer: 1,
        explanation: 'apple は母音で始まる単語なので an を使います。',
      },
      {
        q: '（　）hour の（　）に入る適切な冠詞はどれですか。',
        options: ['a', 'an', 'the', '入らない'],
        answer: 1,
        explanation: 'hour の h は発音されず、母音（アワー）で始まるため an hour となります。',
      },
      {
        q: 'I bought a book yesterday. （　） book was very interesting. の（　）に入る適切な語はどれですか。',
        options: ['A', 'An', 'The', 'Some'],
        answer: 2,
        explanation: '一度出てきた book を再び指すので、特定の the を使います。',
      },
    ],
  },
  {
    id: 'g1-08',
    grade: 1,
    title: '人称代名詞と所有格',
    subtitle: 'I / my / me の使い分け',
    category: '代名詞',
    sections: [
      {
        heading: '主格・所有格・目的格の3つの形',
        body: [
          '「私」「あなた」「彼」などを表す言葉を人称代名詞と呼びます。人称代名詞は文の中での役割によって形が変わります。主語になるときは「主格」（I, you, he, she...）、「〜の」を表すときは「所有格」（my, your, his, her...）、動詞や前置詞の目的（〜を、〜に）になるときは「目的格」（me, you, him, her...）を使います。',
          '日本語では「私」がどの位置でも同じ言葉で済みますが、英語では役割ごとに形が変わるのが大きな特徴です。特に「私は私の本を持ちます」のような文で I my のように、主語には主格、所有には所有格を使い分ける必要があります。',
        ],
        table: {
          caption: '人称代名詞の変化表',
          headers: ['主格（〜は）', '所有格（〜の）', '目的格（〜を・に）', '日本語'],
          rows: [
            ['I', 'my', 'me', '私は / 私の / 私を'],
            ['you', 'your', 'you', 'あなたは / あなたの / あなたを'],
            ['he', 'his', 'him', '彼は / 彼の / 彼を'],
            ['she', 'her', 'her', '彼女は / 彼女の / 彼女を'],
            ['it', 'its', 'it', 'それは / その / それを'],
            ['we', 'our', 'us', '私たちは / 私たちの / 私たちを'],
            ['they', 'their', 'them', '彼らは / 彼らの / 彼らを'],
          ],
        },
        examples: [
          { en: 'I like my school.', ja: '私は自分の学校が好きです。' },
          { en: 'She is kind. Everyone likes her.', ja: '彼女は親切です。みんな彼女が好きです。' },
          { en: 'This is my book. Please give it to me.', ja: 'これは私の本です。それを私にください。' },
        ],
        tip: '主格＝主語の位置、所有格＝名詞の前、目的格＝動詞・前置詞の後ろ。文の中の「位置」で判断しましょう。',
      },
      {
        heading: '所有格と it / they の言い換え',
        body: [
          '英語では、一度登場した名詞を it や they で受け直すのがふつうです。This is my pen. It is new.（これは私のペンです。それは新しいです）のように、単数のものは it、複数のものは they で受けます。日本語の「それ」より使い方が機械的なので、パターンとして覚えてしまいましょう。',
          'また、Tom → his、Mary → her、Tom and Mary → their のように、名前を所有格で言い換える問題も頻出です。「Tom\u2019s father ＝ his father」「Mary\u2019s mother ＝ her mother」のように、持ち主の性別と数に合わせて所有格を選びます。',
        ],
        examples: [
          { en: 'I have a cat. It is very cute.', ja: '私は猫を飼っています。それはとてもかわいいです。' },
          { en: 'These are my books. They are old.', ja: 'これらは私の本です。それらは古いです。' },
          { en: 'This is Tom\u2019s bag. His bag is heavy.', ja: 'これはトムのバッグです。彼のバッグは重いです。' },
        ],
        tip: '単数のもの → it、複数のもの → they で受け直す。持ち主が男なら his、女なら her で言い換え。',
      },
    ],
    keyPoints: [
      '人称代名詞は主格・所有格・目的格の3形を持つ',
      '主格は主語、所有格は名詞の前、目的格は動詞・前置詞の後ろに置く',
      '一度出た単数の名詞は it、複数は they で受け直す',
      'she と her、he と his のように格によって形が変わるのでセットで暗記',
    ],
    quiz: [
      {
        q: 'This is （　） bike. （　）に当てはまる語はどれですか。',
        options: ['I', 'me', 'my', 'mine'],
        answer: 2,
        explanation: 'bike（名詞）の前に置かれて「私の」を表すのは所有格 my です。',
      },
      {
        q: 'Mr. Sato is a teacher. Everyone likes（　）. の（　）に入る適切な語はどれですか。',
        options: ['he', 'his', 'him', 'they'],
        answer: 2,
        explanation: '動詞 likes の目的（〜を）の位置なので目的格 him を使います。',
      },
      {
        q: 'I have two dogs. （　） are very friendly. の（　）に入る適切な語はどれですか。',
        options: ['It', 'They', 'Them', 'Their'],
        answer: 1,
        explanation: 'two dogs（複数）を主語として受け直すので、主格複数の They を使います。',
      },
    ],
  },
  {
    id: 'g1-09',
    grade: 1,
    title: '疑問詞（What / Who / When / Where / Why / How）',
    subtitle: '「何・だれ・いつ・どこ」をたずねる言葉',
    category: '疑問詞',
    sections: [
      {
        heading: '疑問詞は文の一番前に置く',
        body: [
          '「何を」「だれが」「いつ」「どこで」のように、はっきりしない部分をたずねる言葉が疑問詞です。疑問文のうち Yes / No で答えられない質問（Where do you live? のように「どこに」と答える必要がある質問）は、疑問詞を文頭に置いて作ります。疑問詞のあとは「be動詞の文」なら「疑問詞＋be動詞＋主語」、「一般動詞の文」なら「疑問詞＋do / does＋主語＋動詞の原形」という語順になります。',
          'たとえば「あなたの名前は何ですか」は What is your name? で、「彼女はどこに住んでいますか」は Where does she live? となります。疑問詞自体が「知りたい部分」を表しているので、答える側はその部分にあたる情報を答えます。',
        ],
        table: {
          caption: 'おもな疑問詞と意味',
          headers: ['疑問詞', '意味', '例文'],
          rows: [
            ['What', '何', 'What is this?（これは何ですか）'],
            ['Who', 'だれ', 'Who is that girl?（あの少女はだれですか）'],
            ['When', 'いつ', 'When is your birthday?（誕生日はいつですか）'],
            ['Where', 'どこ', 'Where do you live?（どこに住んでいますか）'],
            ['Why', 'なぜ', 'Why are you sad?（なぜ悲しいのですか）'],
            ['How', 'どのように', 'How are you?（元気ですか／調子はどうですか）'],
          ],
        },
        examples: [
          { en: 'What do you like?', ja: 'あなたは何が好きですか。' },
          { en: 'When do you get up?', ja: 'あなたはいつ起きますか。' },
          { en: 'Who is your favorite singer?', ja: 'あなたの好きな歌手はだれですか。' },
        ],
        tip: '疑問詞は文頭。be動詞の文は「疑問詞＋be動詞＋主語」、一般動詞の文は「疑問詞＋do/does＋主語＋原形」。',
      },
      {
        heading: 'How の仲間と答え方',
        body: [
          'How は他の言葉と組み合わさって、さまざまなことをたずねられます。How old（いくつ）、How many（いくつ・数）、How much（いくら・量）、How tall（どのくらいの身長）などは頻出の表現です。How many は数えられる名詞に、How much は数えられない名詞や値段に使うという区別も大切です。',
          '答え方に注意したいのは Why（なぜ）の質問です。Why の質問には Because（なぜなら）を使って理由を答えるのがふつうです。「Why do you like music?」「Because it is fun.（楽しいからです）」のような流れは会話でもテストでも頻出なので、セットで覚えましょう。',
        ],
        table: {
          caption: 'How を使った疑問表現',
          headers: ['表現', '意味', '例文'],
          rows: [
            ['How old', 'いくつ（年齢）', 'How old are you?（何歳ですか）'],
            ['How many', 'いくつ（数）', 'How many books do you have?'],
            ['How much', 'いくら・どれくらい（量）', 'How much is this bag?'],
            ['How tall', '身長はどれくらい', 'How tall are you?'],
          ],
        },
        examples: [
          { en: 'How old is your brother? — He is thirteen years old.', ja: 'あなたの兄（弟）は何歳ですか。— 13歳です。' },
          { en: 'How many pencils do you have?', ja: '鉛筆を何本持っていますか。' },
          { en: 'Why do you like English? — Because it is fun.', ja: 'なぜ英語が好きですか。— 楽しいからです。' },
        ],
        tip: 'Why の質問には Because で答える。How many（数えられる）と How much（数えられない・値段）の区別も忘れずに。',
      },
    ],
    keyPoints: [
      '疑問詞は文頭に置き、Yes / No では答えられない質問を作る',
      'What＝何 / Who＝だれ / When＝いつ / Where＝どこ / Why＝なぜ / How＝どう',
      '一般動詞の文では「疑問詞＋do/does＋主語＋動詞の原形」の語順',
      'Why の質問には Because で理由を答える',
    ],
    quiz: [
      {
        q: 'あなたはいつ生まれましたか、とたずねる英文として正しいものはどれですか。',
        options: ['When you were born?', 'When were you born?', 'What were you born?', 'Where were you born?'],
        answer: 1,
        explanation: '「いつ」は When でたずね、be動詞の疑問文なので were を主語の前に出します。',
      },
      {
        q: 'このカバンはいくらですか、とたずねる英文として正しいものはどれですか。',
        options: ['How many is this bag?', 'How much is this bag?', 'How old is this bag?', 'What price this bag?'],
        answer: 1,
        explanation: '値段をたずねるときは How much を使います。',
      },
      {
        q: 'Where do you play soccer? の Where は何をたずねる疑問詞ですか。',
        options: ['いつ', 'だれ', 'どこ', 'なぜ'],
        answer: 2,
        explanation: 'Where は「どこ（場所）」をたずねる疑問詞です。「どこでサッカーをしますか」という意味になります。',
      },
    ],
  },
  {
    id: 'g1-10',
    grade: 1,
    title: '前置詞（in / on / at ほか）',
    subtitle: '場所・時間などの関係を表す言葉',
    category: '前置詞',
    sections: [
      {
        heading: '場所を表す前置詞',
        body: [
          '前置詞は名詞の前に置いて、場所や時間などの関係を表す言葉です。in は「〜の中」、on は「〜の上（接触）」、under は「〜の下」を表します。たとえば in the box（箱の中に）、on the desk（机の上に）、under the tree（木の下に）のように使います。日本語の「に」「で」「を」にひとつにまとまっている関係を、英語では前置詞で細かく使い分けます。',
          '位置関係を表す表現も中学1年で学びます。next to（〜のとなり）、between A and B（AとBの間）、in front of（〜の前）、behind（〜のうしろ）、near（〜の近くに）などは、地図や絵を使った問題でよく登場します。イメージで押さえておくと忘れにくくなります。',
        ],
        table: {
          caption: '場所を表す前置詞・位置表現',
          headers: ['前置詞', '意味', '例'],
          rows: [
            ['in', '〜の中', 'in the room（部屋の中に）'],
            ['on', '〜の上（くっついて）', 'on the desk（机の上に）'],
            ['under', '〜の下', 'under the bed（ベッドの下に）'],
            ['next to', '〜のとなり', 'next to the bank（銀行のとなりに）'],
            ['between A and B', 'AとBの間', 'between the bank and the park'],
            ['in front of', '〜の前', 'in front of the station（駅の前に）'],
            ['behind', '〜のうしろ', 'behind the door（ドアのうしろに）'],
          ],
        },
        examples: [
          { en: 'The cat is in the box.', ja: '猫は箱の中にいます。' },
          { en: 'My notebook is on the desk.', ja: '私のノートは机の上にあります。' },
          { en: 'The bank is next to the post office.', ja: 'その銀行は郵便局のとなりにあります。' },
        ],
        tip: 'in＝中、on＝上、under＝下。絵を描いて位置をイメージしながら覚えると定着します。',
      },
      {
        heading: '時間を表す前置詞',
        body: [
          '時間についても in / on / at を使い分けます。ルールは「大きい時間は in、日にちには on、時刻には at」です。in the morning（朝に）、in April（4月に）、in 2025（2025年に）のように月や年には in、on Monday（月曜日に）、on May 5（5月5日に）のように曜日や日付には on、at seven（7時に）、at noon（正午に）のように時刻には at を使います。',
          'また、at school（学校で）、at home（家で）、in Tokyo（東京で）のように、特定の場所との組み合わせもそのまま覚える必要があります。「in 大きな場所（都市・国）」「at 小さな場所・地点」というイメージを持つと整理しやすくなります。',
        ],
        table: {
          caption: '時間の前置詞の使い分け',
          headers: ['前置詞', '使う場面', '例'],
          rows: [
            ['in', '月・年・季節・朝晩など長めの時間', 'in April, in 2025, in summer, in the morning'],
            ['on', '曜日・日付', 'on Sunday, on July 10'],
            ['at', '時刻・時点', 'at 7:00, at noon, at night'],
          ],
        },
        examples: [
          { en: 'I get up at six in the morning.', ja: '私は朝6時に起きます。' },
          { en: 'We have a test on Friday.', ja: '私たちは金曜日にテストがあります。' },
          { en: 'My sister was born in 2012.', ja: '私の姉（妹）は2012年生まれです。' },
        ],
        tip: '時間は「in 月・年 → on 日付 → at 時刻」の順に狭くなると覚えよう。',
      },
    ],
    keyPoints: [
      'in＝〜の中、on＝〜の上、under＝〜の下',
      '時間は in（月・年）→ on（日付・曜日）→ at（時刻）で使い分ける',
      'next to / between A and B / in front of / behind は位置関係を表す',
      'at school, at home, in Tokyo などのセットはそのまま暗記する',
    ],
    quiz: [
      {
        q: 'The pen is （　） the desk. （机の上）の（　）に入る前置詞はどれですか。',
        options: ['in', 'on', 'at', 'under'],
        answer: 1,
        explanation: '面に接触した「上」は on です。',
      },
      {
        q: 'I was born （　） April 3. の（　）に入る前置詞はどれですか。',
        options: ['in', 'on', 'at', 'to'],
        answer: 1,
        explanation: '日付（April 3）には on を使います。月だけのとき（in April）は in です。',
      },
      {
        q: 'We have lunch （　） noon. の（　）に入る前置詞はどれですか。',
        options: ['in', 'on', 'at', 'for'],
        answer: 2,
        explanation: '時刻・時点（noon＝正午）には at を使います。',
      },
    ],
  },
  {
    id: 'g1-11',
    grade: 1,
    title: '助動詞 can',
    subtitle: '「〜できる」能力・依頼の表現',
    category: '助動詞',
    sections: [
      {
        heading: 'can は「〜できる」',
        body: [
          'can は「〜ができる」という能力や可能性を表す助動詞です。助動詞とは動詞を助ける特別な言葉で、can のあとには必ず動詞の原形を置きます。「I can swim.（私は泳げます）」のように、主語のあとに can、そのあとに動詞の原形を続けるだけのシンプルな形です。',
          'can の大きな特徴は、主語が誰でも（I, you, he, she, it, we, they のどれでも）形が変わらないことです。三人称単数の主語でも can のままで、can plays のような s はつきません。「彼はピアノが弾けます」は He can play the piano. で、play は原形のままです。',
        ],
        examples: [
          { en: 'I can swim very well.', ja: '私は泳ぐのがとても得意です。' },
          { en: 'She can play the piano.', ja: '彼女はピアノが弾けます。' },
          { en: 'My brother can speak English.', ja: '私の兄（弟）は英語を話せます。' },
        ],
        tip: 'can のあとは必ず動詞の原形。「He can plays」は❌。主語が変わっても can の形は不変。',
      },
      {
        heading: 'can の否定文・疑問文',
        body: [
          'can の否定文は can not（cannot / can\'t）を主語のあとに置きます。「〜できません」という意味になります。cannot がひとつにつながった形もよく使われ、話し言葉では can\'t が頻繁に登場します。',
          '疑問文は can を文頭に出します。「Can you swim?（あなたは泳げますか）」のようになり、答えは「Yes, I can. / No, I can\'t.」です。また「Can you 〜?」は「〜していただけますか」という丁寧な依頼を表すこともできます。Can you help me?（手伝ってくれますか）のような使い方は実生活でも重要です。',
        ],
        examples: [
          { en: 'I can\u2019t play the guitar.', ja: '私はギターが弾けません。' },
          { en: 'Can you speak French? — Yes, I can. / No, I can\u2019t.', ja: 'あなたはフランス語が話せますか。— はい、話せます。/ いいえ、話せません。' },
          { en: 'Can you help me, please?', ja: '手伝っていただけますか。' },
        ],
        tip: 'can は be動詞のようにふるまう。否定は can\u2019t を主語の後ろ、疑問は can を文頭へ。',
      },
    ],
    keyPoints: [
      'can は「〜できる」を表す助動詞。直後には動詞の原形を置く',
      '主語が変わっても can の形は変わらない（三単現の s も不要）',
      '否定文は can\u2019t（cannot）、疑問文は Can を文頭に置く',
      '「Can you 〜?」は依頼「〜してくれますか」の意味でも使う',
    ],
    quiz: [
      {
        q: '彼女は歌が上手に歌えます、という英文として正しいものはどれですか。',
        options: ['She can sings well.', 'She can sing well.', 'She cans sing well.', 'She can singing well.'],
        answer: 1,
        explanation: 'can のあとには動詞の原形（sing）を置きます。can に s はつきません。',
      },
      {
        q: 'Can you cook? に答えるとき、適切でないものはどれですか。',
        options: ['Yes, I can.', 'No, I can\u2019t.', 'Yes, I do.', 'No, I can\u2019t cook at all.'],
        answer: 2,
        explanation: 'Can で聞かれた質問には can で答えます。do は一般動詞の疑問文の答えに使うものです。',
      },
      {
        q: '私はテニスができません、という英文として正しいものはどれですか。',
        options: ['I don\u2019t can play tennis.', 'I can\u2019t play tennis.', 'I not can play tennis.', 'I am not play tennis.'],
        answer: 1,
        explanation: 'can の否定は can\u2019t を主語の後ろに置きます。don\u2019t は使いません。',
      },
    ],
  },
  {
    id: 'g1-12',
    grade: 1,
    title: '現在進行形（be + -ing）',
    subtitle: '「今まさに〜している」を表す形',
    category: '動詞',
    sections: [
      {
        heading: '進行形の作り方',
        body: [
          '現在進行形は「今、まさに〜しているところです」という、まさに進行中の動作を表す形です。作り方は「be動詞（am / is / are）＋動詞の ing 形」です。「私は今本を読んでいます」は I am reading a book now. となります。現在形（習慣）と進行形（進行中）の違いを意識することが、この単元の核心です。',
          'ing のつけ方にはルールがあります。ふつうの動詞はそのまま ing をつけます（play → playing）。e で終わる動詞は e を取って ing（make → making、write → writing）。短い単語で「子音＋母音＋子音」の形は最後の子音字を重ねて ing（run → running、swim → swimming）になります。',
        ],
        table: {
          caption: 'ing 形のつけ方',
          headers: ['パターン', '原形', 'ing 形'],
          rows: [
            ['ふつう', 'play, read, eat', 'playing, reading, eating'],
            ['e で終わる（e を取る）', 'make, write, have', 'making, writing, having'],
            ['子音を重ねる', 'run, swim, get', 'running, swimming, getting'],
          ],
        },
        examples: [
          { en: 'I am reading a book now.', ja: '私は今、本を読んでいるところです。' },
          { en: 'She is playing the piano.', ja: '彼女はピアノを弾いています。' },
          { en: 'They are swimming in the pool.', ja: '彼らはプールで泳いでいます。' },
        ],
        tip: '進行形＝be動詞＋ing。「今やっている」ことを表すので、now や look! などとよく一緒に使われます。',
      },
      {
        heading: '現在形と進行形の違い',
        body: [
          '現在形は「ふだんの習慣」や「事実」を表し、進行形は「今この瞬間の動作」を表します。I play soccer every day.（私は毎日サッカーをします）は習慣、I am playing soccer now.（私は今サッカーをしています）は今まさに行われている動作です。every day のような習慣を表す語句と now のような今を表す語句が、どちらの形を使うかのヒントになります。',
          '否定文は be動詞の後ろに not（I am not eating.）、疑問文は be動詞を文頭に（Are you eating?）出します。ing 形は変えずに、be動詞だけを入れ替えるのがポイントです。',
        ],
        examples: [
          { en: 'I play soccer every day.', ja: '私は毎日サッカーをします。（習慣）' },
          { en: 'Look! He is running fast.', ja: '見て！彼は速く走っています。（今まさに）' },
          { en: 'Are you studying now? — Yes, I am.', ja: 'あなたは今勉強していますか。— はい、しています。' },
        ],
        tip: '「毎日・ふだん」は現在形、「今・見て！」は進行形。文脈のキーワードで判断しましょう。',
      },
    ],
    keyPoints: [
      '現在進行形は「be動詞＋動詞の ing 形」で「今〜している」を表す',
      'e で終わる動詞は e を取って ing（make → making）',
      'run のように短くて子音で終わる動詞は子音字を重ねる（running）',
      '否定は be動詞＋not、疑問は be動詞を文頭へ（ing 形はそのまま）',
    ],
    quiz: [
      {
        q: '「彼は今、手を洗っているところです」という英文として正しいものはどれですか。',
        options: ['He wash his hands now.', 'He is washing his hands now.', 'He washing his hands now.', 'He is wash his hands now.'],
        answer: 1,
        explanation: '進行形は「be動詞＋ing 形」です。wash → washing として is の後ろに置きます。',
      },
      {
        q: 'write の ing 形はどれですか。',
        options: ['writeing', 'writting', 'writing', 'writteing'],
        answer: 2,
        explanation: 'e で終わる動詞は e を取って ing をつけます。write → writing です。',
      },
      {
        q: '次のうち、現在進行形の疑問文として正しいものはどれですか。',
        options: ['Is she cooking now?', 'Does she cooking now?', 'She is cooking now?', 'Is she cook now?'],
        answer: 0,
        explanation: '進行形の疑問文は be動詞を文頭に出します。「Is she cooking now?」です。',
      },
    ],
  },
  {
    id: 'g1-13',
    grade: 1,
    title: '過去形①：be動詞（was / were）',
    subtitle: '過去の「〜でした・いました」',
    category: '動詞',
    sections: [
      {
        heading: 'was と were の使い分け',
        body: [
          '過去のことを話すとき、be動詞は am / is → was、are → were に変わります。主語が I, he, she, it や単数の名詞なら was、you, we, they や複数の名詞なら were を使います。現在形の使い分けとまったく同じ考え方で、形だけが過去に変わると考えるとわかりやすいでしょう。',
          '「私は昨日家にいました」は I was at home yesterday. です。yesterday（昨日）、last week（先週）、two years ago（2年前）のような「過去を表す語句」が文の中にあるときは、be動詞を過去形にします。',
        ],
        table: {
          caption: 'be動詞の過去形',
          headers: ['主語', '現在', '過去'],
          rows: [
            ['I', 'am', 'was'],
            ['He / She / It / 単数名詞', 'is', 'was'],
            ['You / We / They / 複数名詞', 'are', 'were'],
          ],
        },
        examples: [
          { en: 'I was in Tokyo last week.', ja: '私は先週東京にいました。' },
          { en: 'They were very happy.', ja: '彼らはとても幸せでした。' },
          { en: 'The weather was nice yesterday.', ja: '昨日は天気が良かったです。' },
        ],
        tip: 'am / is → was、are → were。主語の使い分けは現在形と同じです。',
      },
      {
        heading: '過去形の否定文・疑問文',
        body: [
          '否定文は現在形と同じく be動詞の後ろに not を置きます。was not（wasn\'t）、were not（weren\'t）となります。「I was not at school yesterday.（私は昨日学校にいませんでした）」のようになります。',
          '疑問文も同様に be動詞を文頭に出すだけです。「Were you at home last night?（あなたは昨夜家にいましたか）」と聞いて、「Yes, I was. / No, I wasn\'t.」と答えます。疑問文で使った be動詞（was / were）をそのまま答えに使うのは現在形と同じルールです。',
        ],
        examples: [
          { en: 'I wasn\u2019t at school yesterday.', ja: '私は昨日学校にいませんでした。' },
          { en: 'Were you at home last night? — Yes, I was.', ja: 'あなたは昨夜家にいましたか。— はい、いました。' },
          { en: 'Was she a nurse then?', ja: '彼女はそのころ看護師でしたか。' },
        ],
        tip: '否定は was/were ＋ not、疑問は was/were を文頭へ。現在形のルールをそのまま過去形に適用します。',
      },
    ],
    keyPoints: [
      'am / is の過去形は was、are の過去形は were',
      'yesterday, last week, ago など過去の語句と一緒に使う',
      '否定文は was / were ＋ not（wasn\u2019t / weren\u2019t）',
      '疑問文は Was / Were を文頭に、答えは was / were で受ける',
    ],
    quiz: [
      {
        q: 'I（　）in Osaka last month. の（　）に入る適切な語はどれですか。',
        options: ['am', 'is', 'was', 'were'],
        answer: 2,
        explanation: '主語が I で過去の文なので was を使います。',
      },
      {
        q: 'They（　）very tired yesterday. の（　）に入る適切な語はどれですか。',
        options: ['was', 'were', 'are', 'is'],
        answer: 1,
        explanation: '主語が They（複数）なので were を使います。',
      },
      {
        q: 'Was your sister at the station? に答えるとき、正しいものはどれですか。',
        options: ['Yes, she is.', 'Yes, she was.', 'Yes, she were.', 'Yes, she did.'],
        answer: 1,
        explanation: 'Was で聞かれたら was で答えます。「Yes, she was.」です。',
      },
    ],
  },
  {
    id: 'g1-14',
    grade: 1,
    title: '過去形②：一般動詞',
    subtitle: '規則動詞の ed と不規則動詞',
    category: '動詞',
    sections: [
      {
        heading: '規則動詞は ed をつける',
        body: [
          '一般動詞の過去形は、ほとんどが「原形＋ed」で作れます。このような動詞を規則動詞と呼びます。play → played、study → studied、stop → stopped のように、ing 形と似たスペルルールがあります。e で終わる動詞は d だけ（like → liked）、子音字＋y は y を i に変えて ed（study → studied）、短い語は子音字を重ねて ed（stop → stopped）です。',
          '「私は昨日サッカーをしました」は I played soccer yesterday. です。現在形との違いは動詞の形だけで、否定文・疑問文の作り方はまた別のルール（didn\'t / Did）になります。まずは「過去の文＝動詞を過去形にする」ことをしっかり身につけましょう。',
        ],
        table: {
          caption: '規則動詞の過去形のつけ方',
          headers: ['パターン', '原形', '過去形'],
          rows: [
            ['ふつう', 'play, watch', 'played, watched'],
            ['e で終わる', 'like, live', 'liked, lived'],
            ['子音字＋y', 'study, cry', 'studied, cried'],
            ['子音を重ねる', 'stop, shop', 'stopped, shopped'],
          ],
        },
        examples: [
          { en: 'I played soccer yesterday.', ja: '私は昨日サッカーをしました。' },
          { en: 'She watched TV last night.', ja: '彼女は昨夜テレビを見ました。' },
          { en: 'We studied hard for the test.', ja: '私たちはテストのために一生懸命勉強しました。' },
        ],
        tip: '規則動詞は ing 形とスペルルールが似ている。e は取らずに d だけ、y は i に変えて ed。',
      },
      {
        heading: '不規則動詞は暗記する',
        body: [
          'すべての動詞が ed で過去形になるわけではありません。go → went、eat → ate、see → saw のように、形が不規則に変わる動詞を不規則動詞と呼びます。中学英語では約80個前後の不規則動詞を3年間かけて学びますが、まずはよく使うものから順に覚えていくのが効率的です。',
          '特に頻出なのは go / went、come / came、eat / ate、see / saw、buy / bought、have / had、do / did、take / took、make / made、get / got の10組です。これらはテストでも日常会話でも必ずと言っていいほど登場するので、最初の暗記グループにしましょう。',
        ],
        table: {
          caption: '頻出不規則動詞',
          headers: ['原形', '過去形', '意味'],
          rows: [
            ['go', 'went', '行く'],
            ['come', 'came', '来る'],
            ['eat', 'ate', '食べる'],
            ['see', 'saw', '見る'],
            ['buy', 'bought', '買う'],
            ['have', 'had', '持つ・食べる'],
            ['do', 'did', 'する'],
            ['take', 'took', '取る'],
            ['make', 'made', '作る'],
            ['get', 'got', '得る'],
          ],
        },
        examples: [
          { en: 'I went to the park with my friends.', ja: '私は友達と公園へ行きました。' },
          { en: 'We ate lunch at noon.', ja: '私たちは正午に昼食を食べました。' },
          { en: 'She bought a new bag last Sunday.', ja: '彼女は先週の日曜日に新しいバッグを買いました。' },
        ],
        tip: '不規則動詞は「go・went・行く」のように三拍子で声に出して覚えるのが定番の暗記法です。',
      },
      {
        heading: '過去形の否定文・疑問文（did）',
        body: [
          '一般動詞の過去形の否定文は「did not（didn\'t）＋動詞の原形」です。「私は昨日行きませんでした」は I didn\'t go there yesterday. です。注意点は、didn\'t を使ったら動詞を原形に戻すことです。didn\'t went は誤りで、didn\'t go が正解です。過去の意味は did がすでに持っているので、動詞は原形になる、と理解しましょう。',
          '疑問文は「Did ＋ 主語 ＋ 動詞の原形〜?」です。「Did you see the movie?（その映画を見ましたか）」と聞いて、「Yes, I did. / No, I didn\'t.」と答えます。do / does が did に変わっただけで、しくみは現在形の否定文・疑問文とまったく同じです。',
        ],
        examples: [
          { en: 'I didn\u2019t go to school yesterday.', ja: '私は昨日学校へ行きませんでした。' },
          { en: 'Did you see the movie? — Yes, I did.', ja: 'あなたはその映画を見ましたか。— はい、見ました。' },
          { en: 'She didn\u2019t eat breakfast this morning.', ja: '彼女は今朝朝食を食べませんでした。' },
        ],
        tip: 'didn\u2019t / Did を使ったら動詞は原形に戻す。「didn\u2019t went」は❌、「didn\u2019t go」が○。',
      },
    ],
    keyPoints: [
      '規則動詞は ed をつけて過去形を作る（liked, studied, stopped など）',
      '不規則動詞は個別に暗記（go→went, eat→ate など）',
      '否定文は「didn\u2019t ＋ 動詞の原形」、疑問文は「Did ＋ 主語 ＋ 原形〜?」',
      'didn\u2019t / Did のあとは必ず動詞の原形',
    ],
    quiz: [
      {
        q: 'study の過去形はどれですか。',
        options: ['studyed', 'studied', 'studed', 'studyded'],
        answer: 1,
        explanation: 'study は「子音字＋y」で終わるので、y を i に変えて ed をつけて studied です。',
      },
      {
        q: 'I（　）to the library yesterday. の（　）に入る適切な語はどれですか。',
        options: ['go', 'goed', 'went', 'gone'],
        answer: 2,
        explanation: 'go の過去形は不規則変化で went です。',
      },
      {
        q: 'She didn\u2019t（　）her homework last night. の（　）に入る適切な語はどれですか。',
        options: ['did', 'does', 'do', 'done'],
        answer: 2,
        explanation: 'didn\u2019t のあとは動詞の原形なので do です。',
      },
    ],
  },
  {
    id: 'g1-15',
    grade: 1,
    title: '未来形（will / be going to）',
    subtitle: '「〜するでしょう・〜するつもり」',
    category: '動詞',
    sections: [
      {
        heading: 'will を使った未来形',
        body: [
          'これから起こることを表すのが未来形です。基本は「will ＋ 動詞の原形」です。「私は明日学校へ行くでしょう」は I will go to school tomorrow. です。will は助動詞なので、主語が誰でも形は変わらず、can と同じように扱えます。',
          '否定文は will not（won\'t）を主語の後ろに置き、疑問文は Will を文頭に出します。「Won\'t you join us?（一緒にいかがですか）」のように、否定疑問文で勧誘を表すこともあります。tomorrow（明日）、next week（来週）、soon（まもなく）など、未来を表す語句とセットで使われます。',
        ],
        examples: [
          { en: 'I will be thirteen next month.', ja: '私は来月13歳になります。' },
          { en: 'It will rain tomorrow.', ja: '明日は雨が降るでしょう。' },
          { en: 'Will you come to my party?', ja: 'あなたは私のパーティーに来ますか。' },
        ],
        tip: 'will ＋ 動詞の原形。否定は won\u2019t、疑問は Will を文頭へ。can と同じ使い方ができます。',
      },
      {
        heading: 'be going to の使い方',
        body: [
          '未来形には「be going to ＋ 動詞の原形」という形もあります。これは「〜するつもりだ」「〜しそうだ」という、話し手の計画や、様子から見て確実に起こりそうな未来を表します。「I am going to visit my grandmother tomorrow.（私は明日祖母を訪ねる予定です）」のように、すでに決まっている予定を言うときに使います。',
          'will と be going to の違いを意識すると、will は「その場で決めたこと・単なる予想」、be going to は「前から決まっていた計画」という傾向があります。ただし、どちらも未来のことを表す点は同じなので、中学のうちは「未来を表す2つの形」があると押さえておけば十分です。',
        ],
        examples: [
          { en: 'I am going to visit my grandmother tomorrow.', ja: '私は明日、祖母を訪ねる予定です。' },
          { en: 'We are going to have a party this weekend.', ja: '私たちは今週末パーティーをする予定です。' },
          { en: 'Look at the clouds. It is going to rain.', ja: 'あの雲を見て。雨が降りそうです。' },
        ],
        tip: '予定・計画は be going to、その場の判断や予想は will。どちらも動詞は原形です。',
      },
    ],
    keyPoints: [
      '未来形は「will ＋ 動詞の原形」で「〜するでしょう」',
      '否定は will not（won\u2019t）、疑問は Will を文頭に置く',
      'be going to は「〜するつもり・予定」を表す未来形',
      'will も be going to も、そのあとの動詞は原形',
    ],
    quiz: [
      {
        q: '「私は明日、宿題をするつもりです」という英文として適切なものはどれですか。',
        options: ['I will doing my homework tomorrow.', 'I am going to do my homework tomorrow.', 'I am going to doing my homework tomorrow.', 'I will to do my homework tomorrow.'],
        answer: 1,
        explanation: 'be going to のあとは動詞の原形（do）です。',
      },
      {
        q: 'Will you help me? の答えとして適切なものはどれですか。',
        options: ['Yes, I am.', 'Yes, I do.', 'Yes, I will.', 'Yes, I can help.'],
        answer: 2,
        explanation: 'Will で聞かれたら will で答えます。「Yes, I will.」です。',
      },
      {
        q: 'It will（　）tomorrow. の（　）に入る適切な語はどれですか。',
        options: ['rains', 'rained', 'rain', 'raining'],
        answer: 2,
        explanation: 'will のあとは動詞の原形なので rain です。',
      },
    ],
  },
]
