let totalWords = [];

let words = [];
//let adjectives = ["one", "two", "three"];
// let nouns = ["happy", "sad", "play", "no"];
//let nouns = [];
//let verbs = [];
let chosenWord;
let curWord = 0
let data1

//let randomColor;
//let newColor = [];
//let colorSelect;
let colorScheme = 0;
let newColor;

function preload() {
    // data1 = loadStrings("./dracula.txt"
    data1 = `   CHAPTER I
          The Science of Deduction

     Sherlock Holmes took his bottle from the corner of the mantelpiece
     and his hypodermic syringe from its neat morocco case. With his long,
     white, nervous fingers he adjusted the delicate needle, and rolled
     back his left shirt cuff. For some little time his eyes rested
     thoughtfully upon the sinewy forearm and wrist all dotted and scarred
     with innumerable puncture marks. Finally he thrust the sharp point
     home, pressed down the tiny piston, and sank back into the
     velvet lined arm chair with a long sigh of satisfaction.

     Three times a day for many months I had witnessed this performance,
     but custom had not reconciled my mind to it. On the contrary, from
     day to day I had become more irritable at the sight, and my
     conscience swelled nightly within me at the thought that I had lacked
     the courage to protest. Again and again I had registered a vow that I
     should deliver my soul upon the subject, but there was that in the
     cool, nonchalant air of my companion which made him the last man with
     whom one would care to take anything approaching to a liberty. His
     great powers, his masterly manner, and the experience which I had had
     of his many extraordinary qualities, all made me diffident and
     backward in crossing him.

     Yet upon that afternoon, whether it was the Beaune which I had taken
     with my lunch, or the additional exasperation produced by the extreme
     deliberation of his manner, I suddenly felt that I could hold out no
     longer.

     Which is it to day? I asked,  morphine or cocaine?

     He raised his eyes languidly from the old black letter volume which
     he had opened. It is cocaine, he said,  a seven per cent solution.
     Would you care to try it?

     No, indeed, I answered, brusquely. My constitution has not got
     over the Afghan campaign yet. I cannot afford to throw any extra
     strain upon it.

     He smiled at my vehemence. Perhaps you are right, Watson, he said.
     I suppose that its influence is physically a bad one. I find it,
     however, so transcendently stimulating and clarifying to the mind
     that its secondary action is a matter of small moment.

     But consider! I said, earnestly. Count the cost! Your brain may,
     as you say, be roused and excited, but it is a pathological and
     morbid process, which involves increased tissue change and may at
     last leave a permanent weakness. You know, too, what a black reaction
     comes upon you. Surely the game is hardly worth the candle. Why
     should you, for a mere passing pleasure, risk the loss of those great
     powers with which you have been endowed?  Remember that I speak not
     only as one comrade to another, but as a medical man to one for whose
     constitution he is to some extent answerable.

     He did not seem offended. On the contrary, he put his fingertips
     together and leaned his elbows on the arms of his chair, like one who
     has a relish for conversation.

     My mind, he said, rebels at stagnation. Give me problems, give me
     work, give me the most abstruse cryptogram or the most intricate
     analysis, and I am in my own proper atmosphere. I can dispense then
     with artificial stimulants. But I abhor the dull routine of
     existence. I crave for mental exaltation. That is why I have chosen
     my own particular profession,  or rather created it, for I am the
     only one in the world.

     The only unofficial detective? I said, raising my eyebrows.

     The only unofficial consulting detective, he answered.  I am the
     last and highest court of appeal in detection. When Gregson or
     Lestrade or Athelney Jones are out of their depths  which, by the
     way, is their normal state  the matter is laid before me. I examine
     the data, as an expert, and pronounce a specialist's opinion. I claim
     no credit in such cases. My name figures in no newspaper. The work
     itself, the pleasure of finding a field for my peculiar powers, is my
     highest reward. But you have yourself had some experience of my
     methods of work in the Jefferson Hope case.

     Yes, indeed, said I, cordially. I was never so struck by anything
     in my life. I even embodied it in a small brochure with the somewhat
     fantastic title of 'A Study in Scarlet.'

     He shook his head sadly. I glanced over it, said he.  Honestly, I
     cannot congratulate you upon it. Detection is, or ought to be, an
     exact science, and should be treated in the same cold and unemotional
     manner. You have attempted to tinge it with romanticism, which
     produces much the same effect as if you worked a love story or an
     elopement into the fifth proposition of Euclid.

     But the romance was there, I remonstrated. I could not tamper with
     the facts.

     Some facts should be suppressed, or at least a just sense of
     proportion should be observed in treating them. The only point in the
     case which deserved mention was the curious analytical reasoning from
     effects to causes by which I succeeded in unraveling it.

     I was annoyed at this criticism of a work which had been specially
     designed to please him. I confess, too, that I was irritated by the
     egotism which seemed to demand that every line of my pamphlet should
     be devoted to his own special doings. More than once during the years
     that I had lived with him in Baker Street I had observed that a small
     vanity underlay my companion's quiet and didactic manner. I made no
     remark, however, but sat nursing my wounded leg. I had a Jezail
     bullet through it some time before, and, though it did not prevent me
     from walking, it ached wearily at every change of the weather.

     My practice has extended recently to the Continent, said Holmes,
     after a while, filling up his old brier root pipe. I was consulted
     last week by Francois Le Villard, who, as you probably know, has come
     rather to the front lately in the French detective service. He has
     all the Celtic power of quick intuition, but he is deficient in the
     wide range of exact knowledge which is essential to the higher
     developments of his art. The case was concerned with a will, and
     possessed some features of interest. I was able to refer him to two
     parallel cases, the one at Riga in 1857, and the other at St. Louis
     in 1871, which have suggested to him the true solution. Here is the
     letter which I had this morning acknowledging my assistance. He
     tossed over, as he spoke, a crumpled sheet of foreign notepaper. I
     glanced my eyes down it, catching a profusion of notes of admiration,
     with stray magnifiques, coup de maÃ®tres and tours de force, all
     testifying to the ardent admiration of the Frenchman.

     He speaks as a pupil to his master, said I.

     Oh, he rates my assistance too highly, said Sherlock Holmes,
     lightly. He has considerable gifts himself. He possesses two out of
     the three qualities necessary for the ideal detective. He has the
     power of observation and that of deduction. He is only wanting in
     knowledge; and that may come in time. He is now translating my small
     works into French.

     Your works?

     Oh, didn't you know? he cried, laughing. Yes, I have been guilty
     of several monographs. They are all upon technical subjects. Here,
     for example, is one 'Upon the Distinction between the Ashes of the
     Various Tobaccoes.' In it I enumerate a hundred and forty forms of
     cigar , cigarette , and pipe tobacco, with colored plates
     illustrating the difference in the ash. It is a point which is
     continually turning up in criminal trials, and which is sometimes of
     supreme importance as a clue. If you can say definitely, for example,
     that some murder has been done by a man who was smoking an Indian
     lunkah, it obviously narrows your field of search. To the trained eye
     there is as much difference between the black ash of a Trichinopoly
     and the white fluff of bird's eye as there is between a cabbage and a
     potato.

     You have an extraordinary genius for minutiae, I remarked.

     I appreciate their importance. Here is my monograph upon the tracing
     of footsteps, with some remarks upon the uses of plaster of Paris as
     a preserver of impresses. Here, too, is a curious little work upon
     the influence of a trade upon the form of the hand, with lithotypes
     of the hands of slaters, sailors, corkcutters, compositors, weavers,
     and diamond polishers. That is a matter of great practical interest
     to the scientific detective,  especially in cases of unclaimed
     bodies, or in discovering the antecedents of criminals. But I weary
     you with my hobby.

     Not at all, I answered, earnestly. It is of the greatest interest
     to me, especially since I have had the opportunity of observing your
     practical application of it. But you spoke just now of observation
     and deduction. Surely the one to some extent implies the other.

     Why, hardly, he answered, leaning back luxuriously in his armchair,
     and sending up thick blue wreaths from his pipe. For example,
     observation shows me that you have been to the Wigmore Street
     Post Office this morning, but deduction lets me know that when there
     you dispatched a telegram.

     Right! said I. Right on both points! But I confess that I don't
     see how you arrived at it. It was a sudden impulse upon my part, and
     I have mentioned it to no one.

     It is simplicity itself, he remarked, chuckling at my
     surprise,  so absurdly simple that an explanation is superfluous;
     and yet it may serve to define the limits of observation and of
     deduction. Observation tells me that you have a little reddish mould
     adhering to your instep. Just opposite the Seymour Street Office they
     have taken up the pavement and thrown up some earth which lies in
     such a way that it is difficult to avoid treading in it in entering.
     The earth is of this peculiar reddish tint which is found, as far as
     I know, nowhere else in the neighborhood. So much is observation. The
     rest is deduction.

     How, then, did you deduce the telegram?

     Why, of course I knew that you had not written a letter, since I sat
     opposite to you all morning. I see also in your open desk there that
     you have a sheet of stamps and a thick bundle of postcards.  What
     could you go into the post office for, then, but to send a wire?
     Eliminate all other factors, and the one which remains must be the
     truth.

     In this case it certainly is so, I replied, after a little thought.
     The thing, however, is, as you say, of the simplest.  Would you
     think me impertinent if I were to put your theories to a more severe
     test?

     On the contrary, he answered, it would prevent me from taking a
     second dose of cocaine. I should be delighted to look into any
     problem which you might submit to me.

     I have heard you say that it is difficult for a man to have any
     object in daily use without leaving the impress of his individuality
     upon it in such a way that a trained observer might read it. Now, I
     have here a watch which has recently come into my possession. Would
     you have the kindness to let me have an opinion upon the character or
     habits of the late owner?

     I handed him over the watch with some slight feeling of amusement in
     my heart, for the test was, as I thought, an impossible one, and I
     intended it as a lesson against the somewhat dogmatic tone which he
     occasionally assumed. He balanced the watch in his hand, gazed hard
     at the dial, opened the back, and examined the works, first with his
     naked eyes and then with a powerful convex lens. I could hardly keep
     from smiling at his crestfallen face when he finally snapped the case
     to and handed it back.

     There are hardly any data, he remarked. The watch has been
     recently cleaned, which robs me of my most suggestive facts.

     You are right, I answered. It was cleaned before being sent to
     me. In my heart I accused my companion of putting forward a most
     lame and impotent excuse to cover his failure. What data could he
     expect from an uncleaned watch?

     Though unsatisfactory, my research has not been entirely barren, he
     observed, staring up at the ceiling with dreamy, lack lustre eyes.
     Subject to your correction, I should judge that the watch belonged
     to your elder brother, who inherited it from your father.

     That you gather, no doubt, from the H. W. upon the back?

     Quite so. The W. suggests your own name. The date of the watch is
     nearly fifty years back, and the initials are as old as the watch: so
     it was made for the last generation. Jewelry usually descents to the
     eldest son, and he is most likely to have the same name as the
     father. Your father has, if I remember right, been dead many years.
     It has, therefore, been in the hands of your eldest brother.

     Right, so far, said I. Anything else?

     He was a man of untidy habits,  very untidy and careless. He was
     left with good prospects, but he threw away his chances, lived for
     some time in poverty with occasional short intervals of prosperity,
     and finally, taking to drink, he died. That is all I can gather.

     I sprang from my chair and limped impatiently about the room with
     considerable bitterness in my heart.

     This is unworthy of you, Holmes, I said. I could not have believed
     that you would have descended to this. You have made inquires into
     the history of my unhappy brother, and you now pretend to deduce this
     knowledge in some fanciful way. You cannot expect me to believe that
     you have read all this from his old watch! It is unkind, and, to
     speak plainly, has a touch of charlatanism in it.

     My dear doctor, said he, kindly, pray accept my apologies.
     Viewing the matter as an abstract problem, I had forgotten how
     personal and painful a thing it might be to you. I assure you,
     however, that I never even knew that you had a brother until you
     handed me the watch.

     Then how in the name of all that is wonderful did you get these
     facts? They are absolutely correct in every particular.

     Ah, that is good luck. I could only say what was the balance of
     probability. I did not at all expect to be so accurate.

     But it was not mere guess work?

     No, no: I never guess. It is a shocking habit,  destructive to the
     logical faculty. What seems strange to you is only so because you do
     not follow my train of thought or observe the small facts upon which
     large inferences may depend. For example, I began by stating that
     your brother was careless. When you observe the lower part of that
     watch case you notice that it is not only dinted in two places, but
     it is cut and marked all over from the habit of keeping other hard
     objects, such as coins or keys, in the same pocket. Surely it is no
     great feat to assume that a man who treats a fifty guinea watch so
     cavalierly must be a careless man. Neither is it a very far fetched
     inference that a man who inherits one article of such value is pretty
     well provided for in other respects.

     I nodded, to show that I followed his reasoning.

     It is very customary for pawnbrokers in England, when they take a
     watch, to scratch the number of the ticket with a pin point upon the
     inside of the case. It is more handy than a label, as there is no
     risk of the number being lost or transposed. There are no less than
     four such numbers visible to my lens on the inside of this case.
     Inference,  that your brother was often at low water. Secondary
     inference,  that he had occasional bursts of prosperity, or he could
     not have redeemed the pledge. Finally, I ask you to look at the inner
     plate, which contains the key hole. Look at the thousands of
     scratches all round the hole,  marks where the key has slipped. What
     sober man's key could have scored those grooves? But you will never
     see a drunkard's watch without them. He winds it at night, and he
     leaves these traces of his unsteady hand. Where is the mystery in all
     this?

     It is as clear as daylight, I answered. I regret the injustice
     which I did you. I should have had more faith in your marvellous
     faculty. May I ask whether you have any professional inquiry on foot
     at present?

     None. Hence the cocaine. I cannot live without brain work. What else
     is there to live for? Stand at the window here. Was ever such a
     dreary, dismal, unprofitable world? See how the yellow fog swirls
     down the street and drifts across the duncolored houses. What could
     be more hopelessly prosaic and material? What is the use of having
     powers, doctor, when one has no field upon which to exert them? Crime
     is commonplace, existence is commonplace, and no qualities save those
     which are commonplace have any function upon earth.

     I had opened my mouth to reply to this tirade, when with a crisp
     knock our landlady entered, bearing a card upon the brass salver.

     A young lady for you, sir, she said, addressing my companion.

     Miss Mary Morstan, he read. Hum! I have no recollection of the
     name. Ask the young lady to step up, Mrs. Hudson. Don't go, doctor. I
     should prefer that you remain.




          CHAPTER II
          The Statement of the Case

     Miss Morstan entered the room with a firm step and an outward
     composure of manner. She was a blonde young lady, small, dainty, well
     gloved, and dressed in the most perfect taste. There was, however, a
     plainness and simplicity about her costume which bore with it a
     suggestion of limited means. The dress was a sombre grayish beige,
     untrimmed and unbraided, and she wore a small turban of the same dull
     hue, relieved only by a suspicion of white feather in the side. Her
     face had neither regularity of feature nor beauty of complexion, but
     her expression was sweet and amiable, and her large blue eyes were
     singularly spiritual and sympathetic. In an experience of women which
     extends over many nations and three separate continents, I have never
     looked upon a face which gave a clearer promise of a refined and
     sensitive nature. I could not but observe that as she took the seat
     which Sherlock Holmes placed for her, her lip trembled, her hand
     quivered, and she showed every sign of intense inward agitation.

     I have come to you, Mr. Holmes, she said, because you once enabled
     my employer, Mrs. Cecil Forrester, to unravel a little domestic
     complication. She was much impressed by your kindness and skill.

     Mrs. Cecil Forrester, he repeated thoughtfully. I believe that I
     was of some slight service to her. The case, however, as I remember
     it, was a very simple one.

     She did not think so. But at least you cannot say the same of mine.
     I can hardly imagine anything more strange, more utterly
     inexplicable, than the situation in which I find myself.

     Holmes rubbed his hands, and his eyes glistened. He leaned forward in
     his chair with an expression of extraordinary concentration upon his
     clear cut, hawklike features. State your case, said he, in brisk,
     business tones.

     I felt that my position was an embarrassing one. You will, I am
     sure, excuse me, I said, rising from my chair.

     To my surprise, the young lady held up her gloved hand to detain me.
     If your friend, she said, would be good enough to stop, he might
     be of inestimable service to me.

     I relapsed into my chair.

     Briefly, she continued, the facts are these. My father was an
     officer in an Indian regiment who sent me home when I was quite a
     child. My mother was dead, and I had no relative in England. I was
     placed, however, in a comfortable boarding establishment at
     Edinburgh, and there I remained until I was seventeen years of age.
     In the year 1878 my father, who was senior captain of his regiment,
     obtained twelve months' leave and came home. He telegraphed to me
     from London that he had arrived all safe, and directed me to come
     down at once, giving the Langham Hotel as his address. His message,
     as I remember, was full of kindness and love. On reaching London I
     drove to the Langham, and was informed that Captain Morstan was
     staying there, but that he had gone out the night before and had not
     yet returned. I waited all day without news of him. That night, on
     the advice of the manager of the hotel, I communicated with the
     police, and next morning we advertised in all the papers. Our
     inquiries let to no result; and from that day to this no word has
     ever been heard of my unfortunate father. He came home with his heart
     full of hope, to find some peace, some comfort, and instead   She
     put her hand to her throat, and a choking sob cut short the sentence.

     The date? asked Holmes, opening his note book.

     He disappeared upon the 3d of December, 1878,  nearly ten years
     ago.

     His luggage?

     Remained at the hotel. There was nothing in it to suggest a
     clue,  some clothes, some books, and a considerable number of
     curiosities from the Andaman Islands. He had been one of the officers
     in charge of the convict guard there.

     Had he any friends in town?

     Only one that we know of,  Major Sholto, of his own regiment, the
     34th Bombay Infantry. The major had retired some little time before,
     and lived at Upper Norwood. We communicated with him, of course, but
     he did not even know that his brother officer was in England.

     A singular case, remarked Holmes.

     I have not yet described to you the most singular part. About six
     years ago  to be exact, upon the 4th of May, 1882  an advertisement
     appeared in the Times asking for the address of Miss Mary Morstan and
     stating that it would be to her advantage to come forward. There was
     no name or address appended. I had at that time just entered the
     family of Mrs. Cecil Forrester in the capacity of governess. By her
     advice I published my address in the advertisement column. The same
     day there arrived through the post a small card board box addressed
     to me, which I found to contain a very large and lustrous pearl. No
     word of writing was enclosed. Since then every year upon the same
     date there has always appeared a similar box, containing a similar
     pearl, without any clue as to the sender. They have been pronounced
     by an expert to be of a rare variety and of considerable value. You
     can see for yourselves that they are very handsome. She opened a
     flat box as she spoke, and showed me six of the finest pearls that I
     had ever seen.

     Your statement is most interesting, said Sherlock Holmes.  Has
     anything else occurred to you?

     Yes, and no later than to day. That is why I have come to you.  This
     morning I received this letter, which you will perhaps read for
     yourself.

     Thank you, said Holmes. The envelope too, please. Postmark,
     London, S.W. Date, July 7. Hum! Man's thumb mark on corner,  probably
     postman. Best quality paper. Envelopes at sixpence a packet.
     Particular man in his stationery. No address. 'Be at the third pillar
     from the left outside the Lyceum Theatre to night at seven o'clock.
     If you are distrustful, bring two friends. You are a wronged woman,
     and shall have justice. Do not bring police. If you do, all will be
     in vain. Your unknown friend.' Well, really, this is a very pretty
     little mystery.  What do you intend to do, Miss Morstan?

     That is exactly what I want to ask you.

     Then we shall most certainly go. You and I and  yes, why, Dr.
     Watson is the very man. Your correspondent says two friends. He and I
     have worked together before.

     But would he come? she asked, with something appealing in her voice
     and expression.

     I should be proud and happy, said I, fervently, if I can be of any
     service.

     You are both very kind, she answered. I have led a retired life,
     and have no friends whom I could appeal to. If I am here at six it
     will do, I suppose?

     You must not be later, said Holmes. There is one other point,
     however. Is this handwriting the same as that upon the pearl box
     addresses?

     I have them here, she answered, producing half a dozen pieces of
     paper.

     You are certainly a model client. You have the correct intuition.
     Let us see, now. He spread out the papers upon the table, and gave
     little darting glances from one to the other. They are disguised
     hands, except the letter, he said, presently, but there can be no
     question as to the authorship. See how the irrepressible Greek e will
     break out, and see the twirl of the final s. They are undoubtedly by
     the same person. I should not like to suggest false hopes, Miss
     Morstan, but is there any resemblance between this hand and that of
     your father?

     Nothing could be more unlike.

     I expected to hear you say so. We shall look out for you, then, at
     six. Pray allow me to keep the papers. I may look into the matter
     before then. It is only half past three. Au revoir, then.

     Au revoir, said our visitor, and, with a bright, kindly glance from
     one to the other of us, she replaced her pearl box in her bosom and
     hurried away. Standing at the window, I watched her walking briskly
     down the street, until the gray turban and white feather were but a
     speck in the sombre crowd.

     What a very attractive woman! I exclaimed, turning to my companion.

     He had lit his pipe again, and was leaning back with drooping
     eyelids. Is she? he said, languidly. I did not observe.

     You really are an automaton,  a calculating machine! I cried.
     There is something positively inhuman in you at times.

     He smiled gently. It is of the first importance, he said, not to
     allow your judgment to be biased by personal qualities. A client is
     to me a mere unit,  a factor in a problem. The emotional qualities
     are antagonistic to clear reasoning. I assure you that the most
     winning woman I ever knew was hanged for poisoning three little
     children for their insurance money, and the most repellant man of my
     acquaintance is a philanthropist who has spent nearly a quarter of a
     million upon the London poor.

     In this case, however

     I never make exceptions. An exception disproves the rule. Have you
     ever had occasion to study character in handwriting? What do you make
     of this fellow's scribble?

     It is legible and regular, I answered. A man of business habits
     and some force of character.

     Holmes shook his head. Look at his long letters, he said. They
     hardly rise above the common herd. That d might be an a, and that l
     an e. Men of character always differentiate their long letters,
     however illegibly they may write. There is vacillation in his k's and
     self esteem in his capitals. I am going out now. I have some few
     references to make. Let me recommend this book,  one of the most
     remarkable ever penned. It is Winwood Reade's Martyrdom of Man. I
     shall be back in an hour.

     I sat in the window with the volume in my hand, but my thoughts were
     far from the daring speculations of the writer. My mind ran upon our
     late visitor,  her smiles, the deep rich tones of her voice, the
     strange mystery which overhung her life. If she were seventeen at the
     time of her father's disappearance she must be seven and twenty
     now,  a sweet age, when youth has lost its self consciousness and
     become a little sobered by experience. So I sat and mused, until such
     dangerous thoughts came into my head that I hurried away to my desk
     and plunged furiously into the latest treatise upon pathology. What
     was I, an army surgeon with a weak leg and a weaker banking account,
     that I should dare to think of such things? She was a unit, a
     factor,  nothing more. If my future were black, it was better surely
     to face it like a man than to attempt to brighten it by mere
     will o' the wisps of the imagination.




          CHAPTER III
          In Quest of a Solution

     It was half past five before Holmes returned. He was bright, eager,
     and in excellent spirits,  a mood which in his case alternated with
     fits of the blackest depression.

     There is no great mystery in this matter, he said, taking the cup
     of tea which I had poured out for him. The facts appear to admit of
     only one explanation.

     What! you have solved it already?

     Well, that would be too much to say. I have discovered a suggestive
     fact, that is all. It is, however, very suggestive. The details are
     still to be added. I have just found, on consulting the back files of
     the Times, that Major Sholto, of Upper Norword, late of the 34th
     Bombay Infantry, died upon the 28th of April, 1882.

     I may be very obtuse, Holmes, but I fail to see what this suggests.

     No? You surprise me. Look at it in this way, then. Captain Morstan
     disappears. The only person in London whom he could have visited is
     Major Sholto. Major Sholto denies having heard that he was in London.
     Four years later Sholto dies. Within a week of his death Captain
     Morstan's daughter receives a valuable present, which is repeated
     from year to year, and now culminates in a letter which describes her
     as a wronged woman. What wrong can it refer to except this
     deprivation of her father? And why should the presents begin
     immediately after Sholto's death, unless it is that Sholto's heir
     knows something of the mystery and desires to make compensation? Have
     you any alternative theory which will meet the facts?

     But what a strange compensation! And how strangely made! Why, too,
     should he write a letter now, rather than six years ago? Again, the
     letter speaks of giving her justice. What justice can she have? It is
     too much to suppose that her father is still alive. There is no other
     injustice in her case that you know of.

     There are difficulties; there are certainly difficulties, said
     Sherlock Holmes, pensively. But our expedition of to night will
     solve them all. Ah, here is a four wheeler, and Miss Morstan is
     inside. Are you all ready? Then we had better go down, for it is a
     little past the hour.

     I picked up my hat and my heaviest stick, but I observed that Holmes
     took his revolver from his drawer and slipped it into his pocket. It
     was clear that he thought that our night's work might be a serious
     one.

     Miss Morstan was muffled in a dark cloak, and her sensitive face was
     composed, but pale. She must have been more than woman if she did not
     feel some uneasiness at the strange enterprise upon which we were
     embarking, yet her self control was perfect, and she readily answered
     the few additional questions which Sherlock Holmes put to her.

     Major Sholto was a very particular friend of papa's, she said. His
     letters were full of allusions to the major. He and papa were in
     command of the troops at the Andaman Islands, so they were thrown a
     great deal together. By the way, a curious paper was found in papa's
     desk which no one could understand. I don't suppose that it is of the
     slightest importance, but I thought you might care to see it, so I
     brought it with me. It is here.

     Holmes unfolded the paper carefully and smoothed it out upon his
     knee. He then very methodically examined it all over with his double
     lens.

     It is paper of native Indian manufacture, he remarked. It has at
     some time been pinned to a board. The diagram upon it appears to be a
     plan of part of a large building with numerous halls, corridors, and
     passages. At one point is a small cross done in red ink, and above it
     is '3.37 from left,' in faded pencil writing.  In the left hand
     corner is a curious hieroglyphic like four crosses in a line with
     their arms touching. Beside it is written, in very rough and coarse
     characters, 'The sign of the four,  Jonathan Small, Mahomet Singh,
     Abdullah Khan, Dost Akbar.' No, I confess that I do not see how this
     bears upon the matter. Yet it is evidently a document of importance.
     It has been kept carefully in a pocket book; for the one side is as
     clean as the other.

     It was in his pocket book that we found it.

     Preserve it carefully, then, Miss Morstan, for it may prove to be of
     use to us. I begin to suspect that this matter may turn out to be
     much deeper and more subtle than I at first supposed. I must
     reconsider my ideas. He leaned back in the cab, and I could see by
     his drawn brow and his vacant eye that he was thinking intently. Miss
     Morstan and I chatted in an undertone about our present expedition
     and its possible outcome, but our companion maintained his
     impenetrable reserve until the end of our journey.

     It was a September evening, and not yet seven o'clock, but the day
     had been a dreary one, and a dense drizzly fog lay low upon the great
     city. Mud colored clouds drooped sadly over the muddy streets. Down
     the Strand the lamps were but misty splotches of diffused light which
     threw a feeble circular glimmer upon the slimy pavement. The yellow
     glare from the shop windows streamed out into the steamy, vaporous
     air, and threw a murky, shifting radiance across the crowded
     thoroughfare. There was, to my mind, something eerie and ghost like
     in the endless procession of faces which flitted across these narrow
     bars of light,  sad faces and glad, haggard and merry. Like all human
     kind, they flitted from the gloom into the light, and so back into
     the gloom once more. I am not subject to impressions, but the dull,
     heavy evening, with the strange business upon which we were engaged,
     combined to make me nervous and depressed. I could see from Miss
     Morstan's manner that she was suffering from the same feeling. Holmes
     alone could rise superior to petty influences. He held his open
     note book upon his knee, and from time to time he jotted down figures
     and memoranda in the light of his pocket lantern.

     At the Lyceum Theatre the crowds were already thick at the
     side entrances. In front a continuous stream of hansoms and
     four wheelers were rattling up, discharging their cargoes of
     shirt fronted men and beshawled, bediamonded women. We had hardly
     reached the third pillar, which was our rendezvous, before a small,
     dark, brisk man in the dress of a coachman accosted us.

     Are you the parties who come with Miss Morstan? he asked.

     I am Miss Morstan, and these two gentlemen are my friends, said
     she.

     He bent a pair of wonderfully penetrating and questioning eyes upon
     us. You will excuse me, miss, he said with a certain dogged manner,
     but I was to ask you to give me your word that neither of your
     companions is a police officer.

     I give you my word on that, she answered.

     He gave a shrill whistle, on which a street Arab led across a
     four wheeler and opened the door. The man who had addressed us
     mounted to the box, while we took our places inside. We had hardly
     done so before the driver whipped up his horse, and we plunged away
     at a furious pace through the foggy streets.

     The situation was a curious one. We were driving to an unknown place,
     on an unknown errand. Yet our invitation was either a complete
     hoax,  which was an inconceivable hypothesis,  or else we had good
     reason to think that important issues might hang upon our journey.
     Miss Morstan's demeanor was as resolute and collected as ever. I
     endeavored to cheer and amuse her by reminiscences of my adventures
     in Afghanistan; but, to tell the truth, I was myself so excited at
     our situation and so curious as to our destination that my stories
     were slightly involved. To this day she declares that I told her one
     moving anecdote as to how a musket looked into my tent at the dead of
     night, and how I fired a double barrelled tiger cub at it. At first I
     had some idea as to the direction in which we were driving; but soon,
     what with our pace, the fog, and my own limited knowledge of London,
     I lost my bearings, and knew nothing, save that we seemed to be going
     a very long way. Sherlock Holmes was never at fault, however, and he
     muttered the names as the cab rattled through squares and in and out
     by tortuous by streets.

     Rochester Row, said he. Now Vincent Square. Now we come out on the
     Vauxhall Bridge Road. We are making for the Surrey side, apparently.
     Yes, I thought so. Now we are on the bridge. You can catch glimpses
     of the river.

     We did indeed bet a fleeting view of a stretch of the Thames with the
     lamps shining upon the broad, silent water; but our cab dashed on,
     and was soon involved in a labyrinth of streets upon the other side.

     Wordsworth Road, said my companion. Priory Road. Lark Hall Lane.
     Stockwell Place. Robert Street. Cold Harbor Lane. Our quest does not
     appear to take us to very fashionable regions.

     We had, indeed, reached a questionable and forbidding neighborhood.
     Long lines of dull brick houses were only relieved by the coarse
     glare and tawdry brilliancy of public houses at the corner. Then came
     rows of two storied villas each with a fronting of miniature garden,
     and then again interminable lines of new staring brick
     buildings,  the monster tentacles which the giant city was throwing
     out into the country. At last the cab drew up at the third house in a
     new terrace. None of the other houses were inhabited, and that at
     which we stopped was as dark as its neighbors, save for a single
     glimmer in the kitchen window. On our knocking, however, the door was
     instantly thrown open by a Hindoo servant clad in a yellow turban,
     white loose fitting clothes, and a yellow sash. There was something
     strangely incongruous in this Oriental figure framed in the
     commonplace door way of a third rate suburban dwelling house.

     The Sahib awaits you, said he, and even as he spoke there came a
     high piping voice from some inner room. Show them in to me,
     khitmutgar, it cried. Show them straight in to me.

     CHAPTER VIII
          The Baker Street Irregulars

     What now? I asked. Toby has lost his character for infallibility.

     He acted according to his lights, said Holmes, lifting him down
     from the barrel and walking him out of the timber yard. If you
     consider how much creasote is carted about London in one day, it is
     no great wonder that our trail should have been crossed. It is much
     used now, especially for the seasoning of wood. Poor Toby is not to
     blame.

     We must get on the main scent again, I suppose.

     Yes. And, fortunately, we have no distance to go. Evidently what
     puzzled the dog at the corner of Knight's Place was that there were
     two different trails running in opposite directions. We took the
     wrong one. It only remains to follow the other.

     There was no difficulty about this. On leading Toby to the place
     where he had committed his fault, he cast about in a wide circle and
     finally dashed off in a fresh direction.

     We must take care that he does not now bring us to the place where
     the creasote barrel came from, I observed.

     I had thought of that. But you notice that he keeps on the pavement,
     whereas the barrel passed down the roadway. No, we are on the true
     scent now.

     It tended down towards the river side, running through Belmont Place
     and Prince's Street. At the end of Broad Street it ran right down to
     the water's edge, where there was a small wooden wharf. Toby led us
     to the very edge of this, and there stood whining, looking out on the
     dark current beyond.

     We are out of luck, said Holmes. They have taken to a boat here.
     Several small punts and skiffs were lying about in the water and on
     the edge of the wharf. We took Toby round to each in turn, but,
     though he sniffed earnestly, he made no sign.

     Close to the rude landing stage was a small brick house, with a
     wooden placard slung out through the second window. Mordecai Smith
     was printed across it in large letters, and, underneath, Boats to
     hire by the hour or day. A second inscription above the door
     informed us that a steam launch was kept,  a statement which was
     confirmed by a great pile of coke upon the jetty. Sherlock Holmes
     looked slowly round, and his face assumed an ominous expression.

     This looks bad, said he. These fellows are sharper than I
     expected. They seem to have covered their tracks. There has, I fear,
     been preconcerted management here.

     He was approaching the door of the house, when it opened, and a
     little, curly headed lad of six came running out, followed by a
     stoutish, red faced woman with a large sponge in her hand.

     You come back and be washed, Jack, she shouted. Come back, you
     young imp; for if your father comes home and finds you like that,
     he'll let us hear of it.

     Dear little chap! said Holmes, strategically. What a rosy cheeked
     young rascal! Now, Jack, is there anything you would like?

     The youth pondered for a moment. I'd like a shillin', said he.

     Nothing you would like better?

     I'd like two shillin' better, the prodigy answered, after some
     thought.

     Here you are, then! Catch!  A fine child, Mrs. Smith!

     Lor' bless you, sir, he is that, and forward. He gets a'most too
     much for me to manage, 'specially when my man is away days at a
     time.

     Away, is he? said Holmes, in a disappointed voice. I am sorry for
     that, for I wanted to speak to Mr. Smith.

     He's been away since yesterday mornin', sir, and, truth to tell, I
     am beginnin' to feel frightened about him. But if it was about a
     boat, sir, maybe I could serve as well.

     I wanted to hire his steam launch.

     Why, bless you, sir, it is in the steam launch that he has gone.
     That's what puzzles me; for I know there ain't more coals in her than
     would take her to about Woolwich and back. If he'd been away in the
     barge I'd ha' thought nothin'; for many a time a job has taken him as
     far as Gravesend, and then if there was much doin' there he might ha'
     stayed over. But what good is a steam launch without coals?

     He might have bought some at a wharf down the river.

     He might, sir, but it weren't his way. Many a time I've heard him
     call out at the prices they charge for a few odd bags. Besides, I
     don't like that wooden legged man, wi' his ugly face and outlandish
     talk. What did he want always knockin' about here for?

     A wooden legged man? said Holmes, with bland surprise.

     Yes, sir, a brown, monkey faced chap that's called more'n once for
     my old man. It was him that roused him up yesternight, and, what's
     more, my man knew he was comin', for he had steam up in the launch. I
     tell you straight, sir, I don't feel easy in my mind about it.

     But, my dear Mrs. Smith, said Holmes, shrugging his shoulders, You
     are frightening yourself about nothing. How could you possibly tell
     that it was the wooden legged man who came in the night? I don't
     quite understand how you can be so sure.

     His voice, sir. I knew his voice, which is kind o' thick and foggy.
     He tapped at the winder,  about three it would be. 'Show a leg,
     matey,' says he: 'time to turn out guard.' My old man woke up
     Jim,  that's my eldest,  and away they went, without so much as a
     word to me. I could hear the wooden leg clackin' on the stones.

     And was this wooden legged man alone?

     Couldn't say, I am sure, sir. I didn't hear no one else.

     I am sorry, Mrs. Smith, for I wanted a steam launch, and I have
     heard good reports of the  Let me see, what is her name?

     The Aurora, sir.

     Ah! She's not that old green launch with a yellow line, very broad
     in the beam?

     No, indeed. She's as trim a little thing as any on the river. She's
     been fresh painted, black with two red streaks.

     Thanks. I hope that you will hear soon from Mr. Smith. I am going
     down the river; and if I should see anything of the Aurora I shall
     let him know that you are uneasy. A black funnel, you say?

     No, sir. Black with a white band.

     Ah, of course. It was the sides which were black. Good morning, Mrs.
     Smith.  There is a boatman here with a wherry, Watson. We shall take
     it and cross the river.

     The main thing with people of that sort, said Holmes, as we sat in
     the sheets of the wherry, is never to let them think that their
     information can be of the slightest importance to you. If you do,
     they will instantly shut up like an oyster. If you listen to them
     under protest, as it were, you are very likely to get what you want.

     Our course now seems pretty clear, said I.

     What would you do, then?

     I would engage a launch and go down the river on the track of the
     Aurora.

     My dear fellow, it would be a colossal task. She may have touched at
     any wharf on either side of the stream between here and Greenwich.
     Below the bridge there is a perfect labyrinth of landing places for
     miles. It would take you days and days to exhaust them, if you set
     about it alone.

     Employ the police, then.

     No. I shall probably call Athelney Jones in at the last moment. He
     is not a bad fellow, and I should not like to do anything which would
     injure him professionally. But I have a fancy for working it out
     myself, now that we have gone so far.

     Could we advertise, then, asking for information from wharfingers?

     Worse and worse! Our men would know that the chase was hot at their
     heels, and they would be off out of the country. As it is, they are
     likely enough to leave, but as long as they think they are perfectly
     safe they will be in no hurry. Jones's energy will be of use to us
     there, for his view of the case is sure to push itself into the daily
     press, and the runaways will think that every one is off on the wrong
     scent.

     What are we to do, then? I asked, as we landed near Millbank
     Penitentiary.

     Take this hansom, drive home, have some breakfast, and get an hour's
     sleep. It is quite on the cards that we may be afoot to night again.
     Stop at a telegraph office, cabby! We will keep Toby, for he may be
     of use to us yet.

     We pulled up at the Great Peter Street post office, and Holmes
     despatched his wire. Whom do you think that is to? he asked, as we
     resumed our journey.

     I am sure I don't know.

     You remember the Baker Street division of the detective police force
     whom I employed in the Jefferson Hope case?

     Well, said I, laughing.

     This is just the case where they might be invaluable. If they fail,
     I have other resources; but I shall try them first. That wire was to
     my dirty little lieutenant, Wiggins, and I expect that he and his
     gang will be with us before we have finished our breakfast.

     It was between eight and nine o'clock now, and I was conscious of a
     strong reaction after the successive excitements of the night. I was
     limp and weary, befogged in mind and fatigued in body. I had not the
     professional enthusiasm which carried my companion on, nor could I
     look at the matter as a mere abstract intellectual problem. As far as
     the death of Bartholomew Sholto went, I had heard little good of him,
     and could feel no intense antipathy to his murderers. The treasure,
     however, was a different matter. That, or part of it, belonged
     rightfully to Miss Morstan. While there was a chance of recovering it
     I was ready to devote my life to the one object. True, if I found it
     it would probably put her forever beyond my reach. Yet it would be a
     petty and selfish love which would be influenced by such a thought as
     that. If Holmes could work to find the criminals, I had a tenfold
     stronger reason to urge me on to find the treasure.

     A bath at Baker Street and a complete change freshened me up
     wonderfully. When I came down to our room I found the breakfast laid
     and Holmes pouring out the coffee.

     Here it is, said he, laughing, and pointing to an open newspaper.
     The energetic Jones and the ubiquitous reporter have fixed it up
     between them. But you have had enough of the case. Better have your
     ham and eggs first.

     I took the paper from him and read the short notice, which was headed
     Mysterious Business at Upper Norwood.

     About twelve o'clock last night, said the Standard, Mr.
     Bartholomew Sholto, of Pondicherry Lodge, Upper Norwood, was found
     dead in his room under circumstances which point to foul play. As far
     as we can learn, no actual traces of violence were found upon Mr.
     Sholto's person, but a valuable collection of Indian gems which the
     deceased gentleman had inherited from his father has been carried
     off. The discovery was first made by Mr. Sherlock Holmes and Dr.
     Watson, who had called at the house with Mr. Thaddeus Sholto, brother
     of the deceased. By a singular piece of good fortune, Mr. Athelney
     Jones, the well known member of the detective police force, happened
     to be at the Norwood Police Station, and was on the ground within
     half an hour of the first alarm. His trained and experienced
     faculties were at once directed towards the detection of the
     criminals, with the gratifying result that the brother, Thaddeus
     Sholto, has already been arrested, together with the housekeeper,
     Mrs. Bernstone, an Indian butler named Lal Rao, and a porter, or
     gatekeeper, named McMurdo. It is quite certain that the thief or
     thieves were well acquainted with the house, for Mr. Jones's
     well known technical knowledge and his powers of minute observation
     have enabled him to prove conclusively that the miscreants could not
     have entered by the door or by the window, but must have made their
     way across the roof of the building, and so through a trap door into
     a room which communicated with that in which the body was found. This
     fact, which has been very clearly made out, proves conclusively that
     it was no mere haphazard burglary. The prompt and energetic action of
     the officers of the law shows the great advantage of the presence on
     such occasions of a single vigorous and masterful mind. We cannot but
     think that it supplies an argument to those who would wish to see our
     detectives more decentralized, and so brought into closer and more
     effective touch with the cases which it is their duty to
     investigate.

     Isn't it gorgeous! said Holmes, grinning over his coffee cup. What
     do you think of it?

     I think that we have had a close shave ourselves of being arrested
     for the crime.

     So do I. I wouldn't answer for our safety now, if he should happen
     to have another of his attacks of energy.

     At this moment there was a loud ring at the bell, and I could hear
     Mrs. Hudson, our landlady, raising her voice in a wail of
     expostulation and dismay.

     By heaven, Holmes, I said, half rising, I believe that they are
     really after us.

     No, it's not quite so bad as that. It is the unofficial force,  the
     Baker Street irregulars.

     As he spoke, there came a swift pattering of naked feet upon the
     stairs, a clatter of high voices, and in rushed a dozen dirty and
     ragged little street Arabs. There was some show of discipline among
     them, despite their tumultuous entry, for they instantly drew up in
     line and stood facing us with expectant faces. One of their number,
     taller and older than the others, stood forward with an air of
     lounging superiority which was very funny in such a disreputable
     little carecrow.

     Got your message, sir, said he, and brought 'em on sharp. Three
     bob and a tanner for tickets.

     Here you are, said Holmes, producing some silver. In future they
     can report to you, Wiggins, and you to me. I cannot have the house
     invaded in this way. However, it is just as well that you should all
     hear the instructions. I want to find the whereabouts of a steam
     launch called the Aurora, owner Mordecai Smith, black with two red
     streaks, funnel black with a white band. She is down the river
     somewhere. I want one boy to be at Mordecai Smith's landing stage
     opposite Millbank to say if the boat comes back. You must divide it
     out among yourselves, and do both banks thoroughly. Let me know the
     moment you have news. Is that all clear?

     Yes, guv'nor, said Wiggins.

     The old scale of pay, and a guinea to the boy who finds the boat.
     Here's a day in advance. Now off you go! He handed them a shilling
     each, and away they buzzed down the stairs, and I saw them a moment
     later streaming down the street.

     If the launch is above water they will find her, said Holmes, as he
     rose from the table and lit his pipe. They can go everywhere, see
     everything, overhear every one. I expect to hear before evening that
     they have spotted her. In the mean while, we can do nothing but await
     results. We cannot pick up the broken trail until we find either the
     Aurora or Mr. Mordecai Smith.

     Toby could eat these scraps, I dare say. Are you going to bed,
     Holmes?

     No: I am not tired. I have a curious constitution. I never remember
     feeling tired by work, though idleness exhausts me completely. I am
     going to smoke and to think over this queer business to which my fair
     client has introduced us. If ever man had an easy task, this of ours
     ought to be. Wooden legged men are not so common, but the other man
     must, I should think, be absolutely unique.

     That other man again!

     I have no wish to make a mystery of him,  to you, anyway. But you
     must have formed your own opinion. Now, do consider the data.
     Diminutive footmarks, toes never fettered by boots, naked feet,
     stone headed wooden mace, great agility, small poisoned darts. What
     do you make of all this?

     A savage! I exclaimed. Perhaps one of those Indians who were the
     associates of Jonathan Small.

     Hardly that, said he. When first I saw signs of strange weapons I
     was inclined to think so; but the remarkable character of the
     footmarks caused me to reconsider my views. Some of the inhabitants
     of the Indian Peninsula are small men, but none could have left such
     marks as that. The Hindoo proper has long and thin feet. The
     sandal wearing Mohammedan has the great toe well separated from the
     others, because the thong is commonly passed between. These little
     darts, too, could only be shot in one way. They are from a blow pipe.
     Now, then, where are we to find our savage?

     South American, I hazarded.

     He stretched his hand up, and took down a bulky volume from the
     shelf. This is the first volume of a gazetteer which is now being
     published. It may be looked upon as the very latest authority. What
     have we here? 'Andaman Islands, situated 340 miles to the north of
     Sumatra, in the Bay of Bengal.' Hum! hum!  What's all this? Moist
     climate, coral reefs, sharks, Port Blair, convict barracks, Rutland
     Island, cottonwoods  Ah, here we are. 'The aborigines of the Andaman
     Islands may perhaps claim the distinction of being the smallest race
     upon this earth, though some anthropologists prefer the Bushmen of
     Africa, the Digger Indians of America, and the Terra del Fuegians.
     The average height is rather below four feet, although many
     full grown adults may be found who are very much smaller than this.
     They are a fierce, morose, and intractable people, though capable of
     forming most devoted friendships when their confidence has once been
     gained.' Mark that, Watson. Now, then, listen to this. 'They are
     naturally hideous, having large, misshapen heads, small, fierce eyes,
     and distorted features. Their feet and hands, however, are remarkably
     small. So intractable and fierce are they that all the efforts of the
     British official have failed to win them over in any degree. They
     have always been a terror to shipwrecked crews, braining the
     survivors with their stone headed clubs, or shooting them with their
     poisoned arrows. These massacres are invariably concluded by a
     cannibal feast.' Nice, amiable people, Watson! If this fellow had
     been left to his own unaided devices this affair might have taken an
     even more ghastly turn. I fancy that, even as it is, Jonathan Small
     would give a good deal not to have employed him.

     But how came he to have so singular a companion?

     Ah, that is more than I can tell. Since, however, we had already
     determined that Small had come from the Andamans, it is not so very
     wonderful that this islander should be with him. No doubt we shall
     know all about it in time. Look here, Watson; you look regularly
     done. Lie down there on the sofa, and see if I can put you to sleep.

     He took up his violin from the corner, and as I stretched myself out
     he began to play some low, dreamy, melodious air,  his own, no doubt,
     for he had a remarkable gift for improvisation. I have a vague
     remembrance of his gaunt limbs, his earnest face, and the rise and
     fall of his bow. Then I seemed to be floated peacefully away upon a
     soft sea of sound, until I found myself in dream land, with the sweet
     face of Mary Morstan looking down upon me.

`
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    markov = RiTa.markov(4);
    markov.addText(data1);
    let output = markov.generate(10)
    let sentence = output[0]
    words = sentence.split(" ");
    //random needs to match length of new color
    colorScheme = Math.round(random(0, 2));

}

function draw() {
    background(0);


    for (let i = 0; i < totalWords.length; i++) {
        totalWords[i].show();

    }
    if (totalWords.length <= 0) {
        fill(255)
        textSize(windowWidth / 40)
        textAlign(CENTER, CENTER)
        text("Click the canvas to form a sentence", windowWidth / 2, windowHeight / 2)
        text("Press 'c' to clear", windowWidth / 2, windowHeight / 2 + (windowWidth / 40))

    }


}

function mousePressed() {
    let x = mouseX;
    let y = mouseY;
    let r = random(20, 80);

    newColor = [
        //blue-green
        [random(0, 50), random(100, 200), random(100, 255)],
        //pink-purple
        [random(200, 255), random(10, 10), random(90, 180)],
        //blue-purple
        [random(50, 180), random(10, 40), random(200, 255)],
        //orange
        [random(190, 255), random(110, 150), random(20, 20)]
    ]

    let color = newColor[colorScheme];
    //let color = newColor[2];
    //let color = [random(0, 50), random(100, 200), random(100, 255)]
    chosenWord = words[0];
    let b = new WordBubbles(x, y, r, color, chosenWord);
    totalWords.push(b);
    words.splice(0, 1);

    if (words.length <= 0) {
        output = markov.generate(10);
        sentence = output[0];
        words = sentence.split(" ");
        console.log(words);
        colorScheme = Math.round(random(0, newColor.length - 1));
        console.log(colorScheme);

    }
}
//NOT USED IN CURRENT VERSION
function keyPressed() {
    // if (key === "a") {
    //     words = adjectives
    // }
    // if (key === "n") {
    //     words = nouns
    // }
    // if (key === "v") {
    //     words = verbs
    // }
    if (key === "c") {
        totalWords = [];
    }
}


class WordBubbles {
    constructor(x, y, r, color, chosenWord) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
        this.word = chosenWord;
    }




    show() {
        strokeWeight(0);
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        textSize(this.r / 3.2)
        textFont('Arial')
        textAlign(CENTER, CENTER)
        fill(255)
        text(this.word, this.x, this.y)

    }

}


//THIS DIDN'T WORK
// function generateRandomColor() {
//     //helpColor = [[random(0, 50), random(100, 200), random(100, 255)], [random(0, 50), random(100, 200), random(100, 255)]]
//     //blue-green
//     console.log(colorSelect);
//     if (colorScheme = 0) {
//         console.log("help blues");
//         newRandomColor = [random(0, 50), random(100, 200), random(100, 255)];
//         return newRandomColor;
//     }
//     //red
//     if (colorScheme = 1) {
//         console.log("help red");
//         newRandomColor = [random(20, 255), random(0, 0), random(0, 0)];
//         return newRandomColor;
//     }
// }