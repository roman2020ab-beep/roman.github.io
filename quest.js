/*
  ПАНЕЛЬ НАСТРОЙКИ КВЕСТА
  Меняй тексты и имена файлов здесь. Остальной код ниже можно не трогать.
*/
const CONFIG={
  music:["music1.mp3","music2.mp3","music3.mp3","music4.mp3"],
  musicVolume:.22,
  saveProgress:true
};

const QUEST=[
 {type:"welcome",title:"Наше маленькое приключение",video:"intro.mp4",text:"Добро пожаловать. Всё начинается с этого видео."},
 {type:"chapter",number:1,title:"Глава 1",
  quiz:{question:"Что бы я выбрал?",options:["Целый год ходить на работу и ничего там не делать","Готовый диплом","Купить военник за 5 миллионов рублей","Запас чипсов на 2 года"],correct:3,feedback:["я и так на работе ничего не делаю","лучше сам сделаю","Я считаю это слишком дорого","чипсы нынче дорогие и мы их очень любим"]},
  task:{type:"hotspot",title:"Найди хранителя кухни",text:"На фотографии спрятан "хранитель кухни", тебе необходимо его найти. Нажми на место, где он находится.",image:"chapter1-kitchen.jpg",hotspot:{x:37.2,y:55.3,w:3.2,h:5.6}},video:"chapter1.mp4"},
 {type:"chapter",number:2,title:"Глава 2",
  quiz:{question:"Когда был наш первый поцелуй?",options:["19 ноября (вторник)","18 ноября (понедельник)","17 ноября (воскресенье)","20 ноября (среда)"],correct:1,feedback:["Неправильно.","18 ноября, примерно в 10:40 вечера ❤️","Неправильно.","Неправильно."]},
  task:{type:"differences",title:"Найди отличия",text:"Найди все отличия между двумя фотографиями.",imageA:"chapter2-a.jpg",imageB:"chapter2-b.jpg",points:[
   {x:42.0,y:13.1,w:8.0,h:10.3},
   {x:55.9,y:13.5,w:7.6,h:9.8},
   {x:27.6,y:51.3,w:6.8,h:9.3},
   {x:75.4,y:55.5,w:7.2,h:6.6},
   {x:18.8,y:81.6,w:8.7,h:9.8}
  ]},video:"chapter2.mp4"},
 {type:"chapter",number:3,title:"Глава 3",
  quiz:{question:"Какой дом был бы для нас идеальным по моему мнению?",images:["house1.jpg","house2.jpg","house3.jpg","house4.jpg"],options:["Дом №1","Дом №2","Дом №3","Дом №4"],correct:0,feedback:["Правильно.","Неправильно.","Неправильно.","Неправильно."]},
  task:{type:"puzzle",title:"Собери фотографию",text:"Собери фотографию из 18 частей. На телефоне выбирай деталь, затем клетку, куда её поставить.",tilesPath:"chapter3-puzzle-pieces",rows:6,cols:3},video:"chapter3.mp4"},
 {type:"chapter",number:4,title:"Глава 4",
  quiz:{question:"Кто первый в переписке написал, что любит и было ли это с сердечками?",options:["Ты с сердечками","Я с сердечками","Ты без сердечек","Я без сердечек"],correct:2,feedback:["Неправильно.","Неправильно.","Правильно.","Неправильно."]},
  task:{type:"memory",title:"Memory",text:"Найди все 9 пар фотографий.",images:["memory1.jpg","memory2.jpg","memory3.jpg","memory4.jpg","memory5.jpg","memory6.jpg","memory7.jpg","memory8.jpg","memory9.jpg"]},video:"chapter4.mp4"},
 {type:"chapter",number:5,title:"Глава 5",
  quiz:{question:"Моя любимая игра на втором месте (потому на первом месте конечно ты)",options:["Crusader Kings 3","Warcraft 3","FIFA 15","Dead by Daylight"],correct:1,feedback:["Неправильно.","Правильно.","Неправильно.","Неправильно."]},
  task:{type:"rebus",title:"Разгадай ребус",text:"Собери слово из трёх частей.",busImage:"rebus-bus.jpg",indianImage:"rebus-indian.jpg",busLetters:"5, 6, 7",indianLetters:"1, 2",finalLetters:"КА",answer:"бусинка"},video:"chapter5.mp4"},
 {type:"chapter",number:6,title:"Глава 6",
  quiz:{question:"Во времена, когда мы постоянно проходили тесты, один был про ревность. Кто оказался более ревнивым и на сколько процентов?",options:["Я — 28%","Ты — 7%","Я — 15%","Ты — 22%"],correct:2,feedback:["Неправильно.","Неправильно.","Правильно.","Неправильно."]},
  task:{type:"audioQuiz",title:"Угадай звук",text:"Прослушай запись и определи, где упал мячик.",audio:"ball.mp3",options:["Кухня","Ванная комната","Большая комната","Балкон"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},video:"chapter6.mp4"},
 {type:"chapter",number:7,title:"Глава 7",
  quiz:{question:"Чтобы я выбрал?",options:["Потерять зрение","Потерять слух","Потерять левую руку","Потерять ногу"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},
  task:{type:"sequence",title:"Расставь события по порядку",text:"Поставь события в правильной хронологической последовательности.",items:["1 раз сходили в кино","Начало переписки в ВК","1 раз сходили в театр","Знакомство с родителями","Подарил Лабубу"],correctOrder:["1 раз сходили в кино","Начало переписки в ВК","1 раз сходили в театр","Знакомство с родителями","Подарил Лабубу"]},video:"chapter7.mp4"},
 {type:"chapter",number:8,title:"Глава 8",
  quiz:{question:"Кто больше написал «люблю» по отношению к другому и сколько раз (в переписке Telegram)?",options:["Ты — 23 раза","Ты — 61 раз","Я — 34 раза","Я — 57 раз"],correct:3,feedback:["Неправильно.","Неправильно.","Неправильно.","Правильно."]},
  task:{type:"phrase",title:"Составь фразу",text:"Два слова уже стоят на своих местах. Перетащи остальные слова в предложение, чтобы собрать фразу полностью.",fixedWords:["Обкончай","","","когда","","","","сперма",""],words:["вытекала","него","чтобы","на","садишься","так"]},video:"chapter8.mp4"}
];

const app=document.getElementById("app");
let current=Number(localStorage.getItem("quest_current")||0);
let musicIndex=Number(localStorage.getItem("quest_music_index")||0)%CONFIG.music.length,music=new Audio(),musicStarted=false,musicPaused=false;
let memory={cards:[],open:[],matched:[],lock:false},puzzle={slots:[],bank:[]};

function tryStartMusicFromGesture(){
 if(!musicStarted&&!musicPaused)startMusic();
}
["pointerdown","keydown","touchstart"].forEach(evt=>document.addEventListener(evt,tryStartMusicFromGesture,{capture:true,passive:true}));

function save(){if(CONFIG.saveProgress)localStorage.setItem("quest_current",String(current))}
function next(){if(current<QUEST.length-1){current++;save();render();scrollTo(0,0)}else{localStorage.setItem("quest_completed","1");completed()}}
function startMusic(){
 if(musicStarted)return;
 music.volume=CONFIG.musicVolume;
 music.onended=()=>{
   musicIndex=(musicIndex+1)%CONFIG.music.length;
   localStorage.setItem("quest_music_index",String(musicIndex));
   music.src="media/music/"+CONFIG.music[musicIndex];
   music.currentTime=0;
   const p=music.play();
   if(p&&p.catch)p.catch(()=>{});
 };
 music.src="media/music/"+CONFIG.music[musicIndex];
 music.currentTime=0;
 const p=music.play();
 if(p&&typeof p.then==="function")p.then(()=>{musicStarted=true}).catch(()=>{musicStarted=false});
 else musicStarted=true;
}
function playMusic(){
 if(!musicStarted||musicPaused)return;
 const wanted="media/music/"+CONFIG.music[musicIndex];
 // Do not assign src again when resuming: assigning src resets currentTime to 0.
 if(!music.getAttribute("src") || !music.getAttribute("src").endsWith(CONFIG.music[musicIndex])){
   music.src=wanted;
   music.currentTime=0;
 }
 music.play().catch(()=>{});
}
function pauseMusic(){musicPaused=true;music.pause()}
function resumeMusic(){musicPaused=false;playMusic()}
function placeholder(path,label="Добавь файл"){return `<div class="placeholder"><div><strong>${label}</strong><br><span class="small">${path}</span></div></div>`}

function render(){
 const q=QUEST[current],pct=current===0?0:Math.round(current/(QUEST.length-1)*100);
 app.innerHTML=`<div class="progress"><div style="width:${pct}%"></div></div><main class="screen"><section class="card" id="card"></section></main>`;
 const card=document.getElementById("card");
 q.type==="welcome"?welcome(card,q):chapter(card,q);
}
function welcome(el,q){
 el.innerHTML=`<h1>${q.title}</h1><button class="primary" id="start">Начать ❤️</button>`;
 el.querySelector("#start").onclick=()=>{
   startMusic();pauseMusic();
   const b=el.querySelector("#start");
   b.textContent="Открыть приветственное видео ▶️";
   b.onclick=()=>{
     const media=document.createElement("video");
     media.className="media";media.controls=true;media.playsInline=true;
     media.src="media/videos/"+q.video;
     el.insertBefore(media,b);
     b.textContent="Далее →";
     b.onclick=()=>{if(media.ended){resumeMusic();next();}};
     media.onended=()=>{resumeMusic();b.disabled=false;b.textContent="Далее →";};
     media.play().catch(()=>{});
   };
 };
}
function chapter(el,q){el.innerHTML=`<p class="small">${q.number} / 8</p><h2>${q.title}</h2><div id="stage"></div>`;quiz(el,q)}
function quiz(el,q){
 const s=el.querySelector("#stage"),z=q.quiz;
 if(z.images)s.innerHTML=`<p>${z.question}</p><div class="choice-images">${z.images.map((im,i)=>`<button class="choice-image" data-i="${i}"><img src="media/images/${im}"><span>Дом №${i+1}</span></button>`).join("")}</div><div class="message" id="msg"></div>`;
 else s.innerHTML=`<p>${z.question}</p><div class="answers">${z.options.map((x,i)=>`<button class="answer" data-i="${i}">${x}</button>`).join("")}</div><div class="message" id="msg"></div>`;
 s.querySelectorAll("[data-i]").forEach(b=>b.onclick=()=>{
  const i=+b.dataset.i,m=s.querySelector("#msg");
  if(i===z.correct){
    b.classList.add("selected-good");
    m.className="message good";
    m.innerHTML=`${z.feedback[i]||"Правильно."}<br><button class="secondary" id="quizNext">Далее →</button>`;
    s.querySelectorAll("[data-i]").forEach(x=>x.disabled=true);
    s.querySelector("#quizNext").onclick=()=>task(el,q);
  }else{
    b.classList.add("selected-bad");
    m.className="message bad";
    m.textContent=z.feedback[i]||"Неправильно.";
    setTimeout(()=>b.classList.remove("selected-bad"),700)
  }
 });
}
function task(el,q){
 const s=el.querySelector("#stage"),t=q.task;
 if(t.type==="hotspot")hotspot(el,q,t);if(t.type==="differences")differences(el,q,t);if(t.type==="puzzle")puzzleTask(el,q,t);if(t.type==="memory")memoryTask(el,q,t);if(t.type==="rebus")rebus(el,q,t);if(t.type==="audioQuiz")audioQuiz(el,q,t);if(t.type==="sequence")sequence(el,q,t);if(t.type==="phrase")phrase(el,q,t)
}
function success(el,q){
 el.querySelector("#stage").innerHTML=`<div class="success-anim"><div class="check">✓</div><span class="spark" style="left:20%;top:65%">✦</span><span class="spark" style="left:45%;top:70%;animation-delay:.1s">♥</span><span class="spark" style="left:70%;top:55%;animation-delay:.2s">✦</span><span class="spark" style="left:82%;top:70%;animation-delay:.3s">♥</span></div><button class="primary" id="taskNext">Далее →</button>`;
 el.querySelector("#taskNext").onclick=()=>videoOpenStage(el,q);
}
function videoOpenStage(el,q){
 pauseMusic();
 const s=el.querySelector("#stage");
 s.innerHTML=`<p>Следующий этап</p><button class="primary" id="openVideo">Открыть видео ▶️</button>`;
 s.querySelector("#openVideo").onclick=()=>video(el,q);
}
function video(el,q){
  pauseMusic();
  const s=el.querySelector("#stage");
  s.innerHTML=`<h2>Видео</h2><video id="cv" class="media" controls playsinline preload="metadata" src="media/videos/${q.video}"></video><button class="primary hidden" id="go">Далее →</button><div class="message" id="videoMsg"></div>`;
  const v=s.querySelector("#cv"), go=s.querySelector("#go");
  let finished=false;
  const showNext=()=>{ if(finished)return; finished=true; resumeMusic(); go.classList.remove("hidden"); };
  v.addEventListener("ended",showNext);
  v.addEventListener("error",()=>{s.querySelector("#videoMsg").className="message bad";s.querySelector("#videoMsg").textContent="Не удалось загрузить видео."});
  go.onclick=()=>{ if(finished) next(); };
  v.load();
}
function hotspot(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="photo-wrap" id="hw"><img src="media/images/${t.image}" onerror="this.style.display='none'"><button class="hotspot" id="hs"></button></div><div class="message" id="msg"></div>`;
 const p=t.hotspot,h=s.querySelector("#hs");h.style.left=p.x+"%";h.style.top=p.y+"%";h.style.width=p.w+"%";h.style.height=p.h+"%";
 s.querySelector("#hw").onclick=e=>{const r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*100,y=(e.clientY-r.top)/r.height*100;if(x>=p.x&&x<=p.x+p.w&&y>=p.y&&y<=p.y+p.h)success(el,q);else s.querySelector("#msg").textContent="Здесь никого нет 👀"}
}
function differences(el,q,t){
 const s=el.querySelector("#stage");
 const zone=(p,i)=>`<button class="diff-point" data-i="${i}" aria-label="Отличие ${i+1}" style="left:${p.x}%;top:${p.y}%;width:${p.w}%;height:${p.h}%"></button>`;
 s.innerHTML=`<p>${t.text}</p><div class="diff-wrap"><div class="diff-photo"><img src="media/images/${t.imageA}">${t.points.map(zone).join("")}</div><div class="diff-photo"><img src="media/images/${t.imageB}">${t.points.map(zone).join("")}</div></div><div class="counter" id="c">Найдено: 0/${t.points.length}</div>`;
 let found=new Set();
 const mark=(b)=>{
   const i=+b.dataset.i;
   if(found.has(i))return;
   found.add(i);
   s.querySelectorAll(`.diff-point[data-i="${i}"]`).forEach(x=>x.classList.add("found"));
   s.querySelector("#c").textContent=`Найдено: ${found.size}/${t.points.length}`;
   if(found.size===t.points.length)setTimeout(()=>success(el,q),350);
 };
 s.querySelectorAll(".diff-point").forEach(b=>b.onclick=()=>mark(b));
}
function puzzleTask(el,q,t){
 const n=t.rows*t.cols;
 puzzle={slots:Array(n).fill(null),bank:Array.from({length:n},(_,i)=>i).sort(()=>Math.random()-.5)};
 drawPuzzle(el,q,t);
}
function drawPuzzle(el,q,t){
 const s=el.querySelector("#stage"),n=t.rows*t.cols;
 s.innerHTML=`<p>${t.text}</p>
 <div class="puzzle" style="grid-template-columns:repeat(${t.cols},1fr)">
 ${puzzle.slots.map((v,i)=>`<button class="puzzle-slot ${v===null?"":"filled"}" data-slot="${i}" draggable="${v!==null}">${v===null?"":`<img draggable="false" src="media/images/${t.tilesPath}/${String(v).padStart(2,"0")}.jpg" alt="">`}</button>`).join("")}
 </div>
 <p class="small">Выбери деталь, затем нажми клетку, куда её поставить. Собранные детали можно перетаскивать друг на друга.</p>
 <div class="puzzle-bank" style="grid-template-columns:repeat(${t.cols},1fr)">
 ${puzzle.bank.map(v=>`<button class="puzzle-piece" data-piece="${v}" draggable="true"><img draggable="false" src="media/images/${t.tilesPath}/${String(v).padStart(2,"0")}.jpg" alt=""></button>`).join("")}
 </div>
 <div class="message" id="msg"></div>`;
 let selected=null, selectedSlot=null;
 const checkSolved=()=>puzzle.slots.every((v,i)=>v===i);
 const finishIfSolved=()=>{if(checkSolved()){setTimeout(()=>success(el,q),400);return true}return false};
 const setChosen=(piece)=>{
   selected=piece;
   selectedSlot=null;
   s.querySelectorAll(".puzzle-piece").forEach(x=>x.classList.remove("chosen"));
   s.querySelectorAll(".puzzle-slot").forEach(x=>x.classList.remove("chosen"));
   const bankBtn=s.querySelector(`.puzzle-piece[data-piece="${piece}"]`);
   if(bankBtn)bankBtn.classList.add("chosen");
 };
 const setChosenSlot=(slot)=>{
   if(puzzle.slots[slot]===null)return;
   selectedSlot=slot;
   selected=null;
   s.querySelectorAll(".puzzle-piece,.puzzle-slot").forEach(x=>x.classList.remove("chosen"));
   const slotBtn=s.querySelector(`.puzzle-slot[data-slot="${slot}"]`);
   if(slotBtn)slotBtn.classList.add("chosen");
 };
 const moveBankPieceToSlot=(piece,slot)=>{
   const previous=puzzle.slots[slot];
   puzzle.slots[slot]=piece;
   puzzle.bank=puzzle.bank.filter(x=>x!==piece);
   if(previous!==null)puzzle.bank.push(previous);
 };
 s.querySelectorAll(".puzzle-piece").forEach(b=>{
   const piece=+b.dataset.piece;
   b.onclick=()=>setChosen(piece);
   b.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",`bank:${piece}`);e.dataTransfer.effectAllowed="move";});
 });
 s.querySelectorAll(".puzzle-slot").forEach(b=>{
   const slot=+b.dataset.slot;
   b.onclick=()=>{
     if(selectedSlot!==null){
       if(selectedSlot===slot)return;
       [puzzle.slots[selectedSlot],puzzle.slots[slot]]=[puzzle.slots[slot],puzzle.slots[selectedSlot]];
       selectedSlot=null;
       if(!finishIfSolved())drawPuzzle(el,q,t);
       return;
     }
     if(selected===null){
       if(puzzle.slots[slot]!==null)setChosenSlot(slot);
       return;
     }
     moveBankPieceToSlot(selected,slot);
     selected=null;
     if(!finishIfSolved())drawPuzzle(el,q,t);
   };
   if(puzzle.slots[slot]!==null){
     b.addEventListener("dragstart",e=>{e.dataTransfer.setData("text/plain",`slot:${slot}`);e.dataTransfer.effectAllowed="move";});
   }
   b.addEventListener("dragover",e=>e.preventDefault());
   b.addEventListener("drop",e=>{
     e.preventDefault();
     const data=e.dataTransfer.getData("text/plain");
     if(!data)return;
     const [kind,raw]=data.split(":");
     if(kind==="bank"){
       moveBankPieceToSlot(+raw,slot);
     }else if(kind==="slot"){
       const from=+raw;if(from===slot)return;
       [puzzle.slots[from],puzzle.slots[slot]]=[puzzle.slots[slot],puzzle.slots[from]];
     }
     if(!finishIfSolved())drawPuzzle(el,q,t);
   });
 });
 const bank=s.querySelector(".puzzle-bank");
 bank.addEventListener("dragover",e=>e.preventDefault());
 bank.addEventListener("drop",e=>{
   e.preventDefault();
   const data=e.dataTransfer.getData("text/plain");
   if(!data.startsWith("slot:"))return;
   const from=+data.split(":")[1],piece=puzzle.slots[from];
   if(piece===null)return;
   puzzle.slots[from]=null;
   if(!puzzle.bank.includes(piece))puzzle.bank.push(piece);
   drawPuzzle(el,q,t);
 });
}
function memoryTask(el,q,t){memory.cards=[...t.images,...t.images].sort(()=>Math.random()-.5);memory.open=[];memory.matched=[];memory.lock=false;drawMemory(el,q,t)}
function drawMemory(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="memory">${memory.cards.map((im,i)=>{let vis=memory.open.includes(i)||memory.matched.includes(i);return `<button class="memory-card ${vis?"":"back"} ${memory.matched.includes(i)?"matched":""}" data-i="${i}">${vis?`<img src="media/images/${im}">`:""}</button>`}).join("")}</div><div class="counter">Пары: ${memory.matched.length/2}/${t.images.length}</div>`;
 s.querySelectorAll(".memory-card").forEach(b=>b.onclick=()=>{if(memory.lock)return;let i=+b.dataset.i;if(memory.open.includes(i)||memory.matched.includes(i))return;memory.open.push(i);drawMemory(el,q,t);if(memory.open.length===2){memory.lock=true;let[a,b]=memory.open;if(memory.cards[a]===memory.cards[b]){memory.matched.push(a,b);memory.open=[];memory.lock=false;drawMemory(el,q,t);if(memory.matched.length===memory.cards.length)setTimeout(()=>success(el,q),400)}else setTimeout(()=>{memory.open=[];memory.lock=false;drawMemory(el,q,t)},750)}})
}
function rebus(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="rebus"><div class="rebus-box"><img src="media/images/${t.busImage}"><div class="small">${t.busLetters}</div></div><div class="rebus-box"><img src="media/images/${t.indianImage}"><div class="small">${t.indianLetters}</div></div><div class="rebus-box"><div class="letters">${t.finalLetters}</div></div></div><input id="a" placeholder="Введите слово"><button class="primary" id="b">Проверить</button><div class="message" id="m"></div>`;
 s.querySelector("#b").onclick=()=>{let v=s.querySelector("#a").value.trim().toLowerCase().replaceAll(" ",""),m=s.querySelector("#m");if(v===t.answer){m.className="message good";m.textContent="Правильно.";setTimeout(()=>success(el,q),450)}else{m.className="message bad";m.textContent="Неправильно."}}
}
function audioQuiz(el,q,t){
 const s=el.querySelector("#stage");s.innerHTML=`<p>${t.text}</p><div class="audio-box"><audio id="a" controls src="media/audio/${t.audio}"></audio></div><p class="small">бибабибоп</p><div class="answers">${t.options.map((x,i)=>`<button class="answer" data-i="${i}">${x}</button>`).join("")}</div><div class="message" id="m"></div>`;
 const a=s.querySelector("audio");a.onplay=pauseMusic;a.onpause=()=>{if(!a.ended)resumeMusic()};a.onended=resumeMusic;
 s.querySelectorAll(".answer").forEach(b=>b.onclick=()=>{let i=+b.dataset.i,m=s.querySelector("#m");m.className=i===t.correct?"message good":"message bad";m.textContent=t.feedback[i];if(i===t.correct)setTimeout(()=>success(el,q),450)})
}
function sequence(el,q,t){
 const s=el.querySelector("#stage"),order=[...t.items].sort(()=>Math.random()-.5);s.innerHTML=`<p>${t.text}</p><div class="sequence">${order.map((x,i)=>`<div class="seq-item"><span>☰</span><span>${x}</span><select>${[1,2,3,4,5].map(n=>`<option>${n}</option>`).join("")}</select></div>`).join("")}</div><button class="primary" id="b">Проверить</button><div class="message" id="m"></div>`;
 s.querySelector("#b").onclick=()=>{let picked=Array(5).fill(null);s.querySelectorAll(".seq-item").forEach(r=>picked[+r.querySelector("select").value-1]=r.querySelector("span:nth-child(2)").textContent);let ok=picked.every((x,i)=>x===t.correctOrder[i]),m=s.querySelector("#m");m.className=ok?"message good":"message bad";m.textContent=ok?"Правильно.":"Неправильно. Попробуй ещё раз.";if(ok)setTimeout(()=>success(el,q),450)}
}
function phrase(el,q,t){
  const s=el.querySelector("#stage"), fixed=t.fixedWords||[], words=t.words||[];
  let slots=Array(fixed.length).fill(null), selected=null, selectedSlot=null;
  const target=["Обкончай","так","чтобы","когда","на","него","садишься","сперма","вытекала"];
  function draw(){
    const sentence=fixed.map((f,i)=>f
      ?`<span class="fixed-word">${f}</span>`
      :`<button class="drop-slot ${slots[i]?'filled':''}" data-slot="${i}" ${slots[i]?'draggable="true"':''}>${slots[i]||""}</button>`
    ).join("");
    s.innerHTML=`<p>${t.text}</p><div class="phrase-sentence">${sentence}</div><div class="word-bank">${words.filter(w=>!slots.includes(w)).map(w=>`<button class="word-chip" draggable="true" data-word="${w}">${w}</button>`).join("")}</div><div class="small phrase-hint">Люблю тебя</div><button class="primary" id="checkPhrase">Проверить</button><div class="message" id="phraseMsg"></div>`;
    s.querySelectorAll('.word-chip').forEach(b=>{
      b.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',`word:${b.dataset.word}`));
      b.addEventListener('click',()=>{
        selected=b.dataset.word;
        selectedSlot=null;
        s.querySelectorAll('.word-chip,.drop-slot').forEach(x=>x.classList.remove('chosen'));
        b.classList.add('chosen');
      });
    });
    s.querySelectorAll('.drop-slot').forEach(b=>{
      const i=+b.dataset.slot;
      b.addEventListener('dragover',e=>e.preventDefault());
      b.addEventListener('dragstart',e=>{
        if(slots[i]){
          e.dataTransfer.setData('text/plain',`slot:${i}`);
          e.dataTransfer.effectAllowed='move';
        }
      });
      b.addEventListener('drop',e=>{
        e.preventDefault();
        const data=e.dataTransfer.getData('text/plain');
        if(data.startsWith('slot:')) swap(+data.slice(5),i);
        else place(i,data.startsWith('word:')?data.slice(5):(data||selected));
        selected=null;
        selectedSlot=null;
      });
      b.addEventListener('click',()=>{
        if(selectedSlot!==null){
          if(selectedSlot===i)return;
          swap(selectedSlot,i);
          selectedSlot=null;
          return;
        }
        if(selected){
          place(i,selected);
          selected=null;
          return;
        }
        if(slots[i]){
          selectedSlot=i;
          s.querySelectorAll('.word-chip,.drop-slot').forEach(x=>x.classList.remove('chosen'));
          b.classList.add('chosen');
        }
      });
    });
    s.querySelector('#checkPhrase').onclick=()=>{
      const ok=slots.map((v,i)=>v||fixed[i]).every((v,i)=>v===target[i]);
      const m=s.querySelector('#phraseMsg'); m.className=ok?'message good':'message bad'; m.textContent=ok?'Правильно.':'Неправильно. Попробуй ещё раз.'; if(ok)setTimeout(()=>success(el,q),450);
    };
  }
  function place(i,w){ if(!w||!words.includes(w))return; const old=slots.indexOf(w); if(old>=0)slots[old]=null; slots[i]=w; draw(); }
  function swap(a,b){ if(a===b||slots[a]==null)return; [slots[a],slots[b]]=[slots[b],slots[a]]; draw(); }
  draw();
}
function completed(){app.innerHTML=`<main class="screen"><section class="card final"><div class="heart">❤️</div><h1>Квест завершён</h1><p>Ты прошла всё приключение.</p><button class="secondary" id="r">Начать квест заново</button></section></main>`;document.getElementById("r").onclick=()=>{localStorage.removeItem("quest_current");localStorage.removeItem("quest_completed");location.reload()}}
render();